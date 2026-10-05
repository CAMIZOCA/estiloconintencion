# Estilo con Intención — web de Vilma Chacón

Sitio en [Astro](https://astro.build) desplegado en Cloudflare Workers, con base de datos D1 para las respuestas de los cuestionarios.

## Dónde cambiar cada cosa

| Qué | Archivo |
| --- | --- |
| WhatsApp, Instagram, correo, dominio | `src/config/site.ts` |
| Servicios, textos y precios | `src/data/servicios.ts` |
| Preguntas de los cuestionarios | `src/data/cuestionarios/` |
| Colores y tipografía | `src/styles/global.css` |
| Fotos | `public/img/` |

## Cuestionarios y panel

- Enlaces para clientas: `/cuestionario/estilo` y `/cuestionario/somatotipos`.
- Panel privado: `/admin` (contraseña en el secreto `ADMIN_PASSWORD`). Desde ahí se ven las respuestas, se descargan en PDF o CSV y se copian los enlaces.

## Desarrollo

```bash
npm install
cp .dev.vars.example .dev.vars
npm run db:local
npm run dev
```

## Despliegue

```bash
npm run db:remote
npm run deploy
```

Secretos necesarios en Cloudflare: `ADMIN_PASSWORD` y `SESSION_SECRET` (`npx wrangler secret put NOMBRE`).
