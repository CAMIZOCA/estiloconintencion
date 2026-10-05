import type { APIRoute } from 'astro';
import { bloqueado, iniciarSesion, verificarClave } from '../../../lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect, url, clientAddress }) => {
  const ip = request.headers.get('cf-connecting-ip') ?? clientAddress ?? 'desconocida';
  if (await bloqueado(ip)) return redirect('/admin/login?error=bloqueado', 303);

  const form = await request.formData();
  const clave = String(form.get('clave') ?? '');
  if (!(await verificarClave(clave, ip))) return redirect('/admin/login?error=clave', 303);

  await iniciarSesion(cookies, url.protocol === 'https:');
  return redirect('/admin', 303);
};
