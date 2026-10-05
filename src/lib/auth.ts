import { env } from 'cloudflare:workers';
import type { AstroCookies } from 'astro';

const COOKIE = 'vilma_sesion';
const DURACION_S = 60 * 60 * 24 * 7;
const MAX_INTENTOS = 5;
const VENTANA_S = 15 * 60;

const enc = new TextEncoder();

function hex(buf: ArrayBuffer) {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function firmar(dato: string) {
  const secreto = env.SESSION_SECRET;
  if (!secreto) throw new Error('Falta SESSION_SECRET');
  const clave = await crypto.subtle.importKey('raw', enc.encode(secreto), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await crypto.subtle.sign('HMAC', clave, enc.encode(dato)));
}

// Comparación en tiempo constante: se comparan los hashes, no los textos.
async function iguales(a: string, b: string) {
  const [ha, hb] = await Promise.all([a, b].map((x) => crypto.subtle.digest('SHA-256', enc.encode(x))));
  const [ua, ub] = [new Uint8Array(ha), new Uint8Array(hb)];
  let dif = 0;
  for (let i = 0; i < ua.length; i++) dif |= ua[i] ^ ub[i];
  return dif === 0;
}

export async function haySesion(cookies: AstroCookies) {
  const valor = cookies.get(COOKIE)?.value;
  if (!valor) return false;
  const [exp, firma] = valor.split('.');
  if (!exp || !firma || Number(exp) < Date.now() / 1000) return false;
  return iguales(firma, await firmar(exp));
}

export async function iniciarSesion(cookies: AstroCookies, secure: boolean) {
  const exp = String(Math.floor(Date.now() / 1000) + DURACION_S);
  cookies.set(COOKIE, `${exp}.${await firmar(exp)}`, {
    path: '/',
    httpOnly: true,
    secure,
    sameSite: 'lax',
    maxAge: DURACION_S,
  });
}

export function cerrarSesion(cookies: AstroCookies) {
  cookies.delete(COOKIE, { path: '/' });
}

export async function bloqueado(ip: string) {
  const desde = Math.floor(Date.now() / 1000) - VENTANA_S;
  const fila = await env.DB.prepare('SELECT COUNT(*) AS n FROM login_intentos WHERE ip = ? AND ts > ?')
    .bind(ip, desde)
    .first<{ n: number }>();
  return (fila?.n ?? 0) >= MAX_INTENTOS;
}

export async function verificarClave(clave: string, ip: string) {
  const esperada = env.ADMIN_PASSWORD;
  if (!esperada) return false;
  const ok = await iguales(clave, esperada);
  const ahora = Math.floor(Date.now() / 1000);
  if (ok) await env.DB.prepare('DELETE FROM login_intentos WHERE ip = ?').bind(ip).run();
  else
    await env.DB.batch([
      env.DB.prepare('INSERT INTO login_intentos (ip, ts) VALUES (?, ?)').bind(ip, ahora),
      env.DB.prepare('DELETE FROM login_intentos WHERE ts < ?').bind(ahora - VENTANA_S),
    ]);
  return ok;
}
