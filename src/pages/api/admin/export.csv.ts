import type { APIRoute } from 'astro';
import { estilos, marcasValidas } from '../../../data/cuestionarios/estilo';
import { fecha, listar, nombresCuestionario } from '../../../lib/respuestas';

export const prerender = false;

// Excel en español espera ";" como separador y BOM para leer los acentos.
const celda = (v: unknown) => {
  let s = String(v ?? '');
  // Evita que Excel interprete como fórmula un texto escrito por la clienta.
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return `"${s.replace(/"/g, '""')}"`;
};

export const GET: APIRoute = async ({ url }) => {
  const filas = await listar({ cuestionario: url.searchParams.get('cuestionario') ?? undefined });
  const validas = marcasValidas();
  const cabecera = [
    'Fecha',
    'Cuestionario',
    'Nombre',
    'Contacto',
    'Resultado',
    ...estilos.map((e) => `Positivos ${e}`),
    ...estilos.map((e) => `Negativos ${e}`),
    'Puntos somatotipo',
    'A',
    'B',
    'C',
    'Respuestas',
  ];
  const lineas = filas.map((f) => {
    const res = JSON.parse(f.resultado_json);
    const resp = JSON.parse(f.respuestas_json);
    const esEstilo = f.cuestionario === 'estilo';
    const textos = (t: string) =>
      (resp.marcas as string[])
        .filter((m) => m.startsWith(t))
        .map((m) => validas.get(m)?.texto ?? m)
        .join(', ');
    const detalle = esEstilo
      ? `Positivos: ${textos('p')} | Negativos: ${textos('n')}`
      : `${(resp.fisico as string[]).join('')} | comunicación: ${resp.comunicacion} | estético: ${resp.estetico}`;
    return [
      fecha(f.creado_en),
      nombresCuestionario[f.cuestionario],
      f.nombre,
      f.contacto,
      f.resumen,
      ...(esEstilo ? [...res.positivos, ...res.negativos] : Array(14).fill('')),
      ...(esEstilo ? ['', '', '', ''] : [res.puntos, res.conteo.A, res.conteo.B, res.conteo.C]),
      detalle,
    ]
      .map(celda)
      .join(';');
  });
  const csv = '﻿' + [cabecera.map(celda).join(';'), ...lineas].join('\r\n');
  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="respuestas-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
};
