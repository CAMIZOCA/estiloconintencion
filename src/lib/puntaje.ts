import { estilos, marcasValidas } from '../data/cuestionarios/estilo';
import { letras, preguntas, puntosPorLetra, rangos, tipos, type Tipo } from '../data/cuestionarios/somatotipos';

export interface ResultadoEstilo {
  positivos: number[];
  negativos: number[];
  potenciador: string[];
  limitante: string[];
}

function ganadores(sumas: number[]) {
  const max = Math.max(...sumas);
  if (max === 0) return [];
  return estilos.filter((_, i) => sumas[i] === max);
}

export function puntuarEstilo(marcas: string[]): { marcas: string[]; resultado: ResultadoEstilo; resumen: string } {
  const validas = marcasValidas();
  const limpias = [...new Set(marcas)].filter((m) => validas.has(m));
  const positivos = estilos.map(() => 0);
  const negativos = estilos.map(() => 0);
  for (const m of limpias) {
    const info = validas.get(m)!;
    (info.tabla === 'p' ? positivos : negativos)[info.col]++;
  }
  const resultado = { positivos, negativos, potenciador: ganadores(positivos), limitante: ganadores(negativos) };
  const resumen = `Potenciador: ${resultado.potenciador.join(' / ') || '—'} · Limitante: ${resultado.limitante.join(' / ') || '—'}`;
  return { marcas: limpias, resultado, resumen };
}

export interface RespuestasSomatotipos {
  fisico: ('A' | 'B' | 'C')[];
  comunicacion: Tipo;
  estetico: Tipo;
}

export interface ResultadoSomatotipos {
  conteo: { A: number; B: number; C: number };
  puntos: number;
  fisico: string;
  interno: string;
  estetico: string;
}

export function puntuarSomatotipos(r: RespuestasSomatotipos): { resultado: ResultadoSomatotipos; resumen: string } {
  const conteo = { A: 0, B: 0, C: 0 };
  for (const l of r.fisico) conteo[l]++;
  const puntos = letras.reduce((t, l) => t + conteo[l] * puntosPorLetra[l], 0);
  const fisico = rangos.find((x) => puntos >= x.min && puntos <= x.max)?.nombre ?? '—';
  const resultado = { conteo, puntos, fisico, interno: tipos[r.comunicacion], estetico: tipos[r.estetico] };
  const resumen = `Físico: ${fisico} (${puntos} pts) · Interno: ${resultado.interno} · Estético: ${resultado.estetico}`;
  return { resultado, resumen };
}

export function esTipo(v: unknown): v is Tipo {
  return typeof v === 'string' && v in tipos;
}

export function esLetra(v: unknown): v is 'A' | 'B' | 'C' {
  return v === 'A' || v === 'B' || v === 'C';
}

export const totalPreguntas = preguntas.length;
