import type { APIRoute } from 'astro';
import { eliminar } from '../../../lib/respuestas';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const id = String(form.get('id') ?? '');
  if (id) await eliminar(id);
  return redirect('/admin', 303);
};
