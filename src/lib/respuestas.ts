import { env } from 'cloudflare:workers';

export interface Fila {
  id: string;
  cuestionario: 'estilo' | 'somatotipos';
  nombre: string;
  contacto: string;
  respuestas_json: string;
  resultado_json: string;
  resumen: string;
  creado_en: string;
}

export const nombresCuestionario = {
  estilo: 'Cuestionario de Estilo',
  somatotipos: 'Test de Somatotipos',
} as const;

export async function guardar(f: Omit<Fila, 'id' | 'creado_en'>) {
  await env.DB.prepare(
    'INSERT INTO respuestas (id, cuestionario, nombre, contacto, respuestas_json, resultado_json, resumen, creado_en) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
  )
    .bind(crypto.randomUUID(), f.cuestionario, f.nombre, f.contacto, f.respuestas_json, f.resultado_json, f.resumen, new Date().toISOString())
    .run();
}

export async function listar(filtro: { cuestionario?: string; q?: string } = {}) {
  const cond: string[] = [];
  const args: string[] = [];
  if (filtro.cuestionario === 'estilo' || filtro.cuestionario === 'somatotipos') {
    cond.push('cuestionario = ?');
    args.push(filtro.cuestionario);
  }
  if (filtro.q) {
    cond.push('(nombre LIKE ? OR contacto LIKE ?)');
    args.push(`%${filtro.q}%`, `%${filtro.q}%`);
  }
  const where = cond.length ? `WHERE ${cond.join(' AND ')}` : '';
  const { results } = await env.DB.prepare(`SELECT * FROM respuestas ${where} ORDER BY creado_en DESC LIMIT 1000`)
    .bind(...args)
    .all<Fila>();
  return results;
}

export function obtener(id: string) {
  return env.DB.prepare('SELECT * FROM respuestas WHERE id = ?').bind(id).first<Fila>();
}

export async function eliminar(id: string) {
  await env.DB.prepare('DELETE FROM respuestas WHERE id = ?').bind(id).run();
}

// Fecha legible en hora de Ecuador.
export function fecha(iso: string) {
  return new Date(iso).toLocaleString('es-EC', {
    timeZone: 'America/Guayaquil',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
