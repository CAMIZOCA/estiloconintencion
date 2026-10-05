import { defineMiddleware } from 'astro:middleware';

const PUBLICAS = ['/admin/login', '/api/admin/login'];

export const onRequest = defineMiddleware(async (context, next) => {
  const ruta = context.url.pathname.replace(/\/$/, '');
  const privada = ruta === '/admin' || ruta.startsWith('/admin/') || ruta.startsWith('/api/admin/');
  if (!privada || PUBLICAS.includes(ruta)) return next();

  const { haySesion } = await import('./lib/auth');
  if (!(await haySesion(context.cookies))) {
    if (ruta.startsWith('/api/')) return new Response('No autorizado', { status: 401 });
    return context.redirect('/admin/login');
  }
  const respuesta = await next();
  respuesta.headers.set('Cache-Control', 'no-store');
  respuesta.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return respuesta;
});
