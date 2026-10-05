import type { APIRoute } from 'astro';
import { esLetra, esTipo, puntuarEstilo, puntuarSomatotipos, totalPreguntas } from '../../lib/puntaje';
import { guardar } from '../../lib/respuestas';

export const prerender = false;

const error = (mensaje: string) =>
  new Response(`${mensaje} Vuelve atrás e inténtalo de nuevo.`, {
    status: 400,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });

export const POST: APIRoute = async ({ request, redirect }) => {
  if (Number(request.headers.get('content-length') ?? 0) > 20_000) return error('El envío es demasiado grande.');
  const form = await request.formData();
  const texto = (campo: string) => String(form.get(campo) ?? '').trim();

  // Campo trampa: las personas no lo ven; si viene lleno es un bot.
  if (texto('web')) return redirect('/cuestionario/gracias', 303);

  const nombre = texto('nombre').slice(0, 120);
  const contacto = texto('contacto').slice(0, 120);
  if (nombre.length < 2 || contacto.length < 5) return error('Falta tu nombre o tu contacto.');
  if (!form.get('consentimiento')) return error('Necesitamos tu consentimiento para guardar tus respuestas.');

  const cuestionario = texto('cuestionario');
  if (cuestionario === 'estilo') {
    const { marcas, resultado, resumen } = puntuarEstilo(form.getAll('m').map(String));
    if (marcas.length === 0) return error('No marcaste ninguna opción.');
    await guardar({
      cuestionario,
      nombre,
      contacto,
      respuestas_json: JSON.stringify({ marcas }),
      resultado_json: JSON.stringify(resultado),
      resumen,
    });
  } else if (cuestionario === 'somatotipos') {
    const fisico = Array.from({ length: totalPreguntas }, (_, i) => texto(`q${i}`));
    const comunicacion = texto('com');
    const estetico = texto('est');
    if (!fisico.every(esLetra) || !esTipo(comunicacion) || !esTipo(estetico)) return error('Faltan preguntas por responder.');
    const respuestas = { fisico, comunicacion, estetico };
    const { resultado, resumen } = puntuarSomatotipos(respuestas);
    await guardar({
      cuestionario,
      nombre,
      contacto,
      respuestas_json: JSON.stringify(respuestas),
      resultado_json: JSON.stringify(resultado),
      resumen,
    });
  } else {
    return error('Cuestionario desconocido.');
  }

  return redirect('/cuestionario/gracias', 303);
};
