// Datos generales del sitio. Es el único lugar que hay que editar para cambiar contacto o dominio.
export const site = {
  nombre: 'Estilo con Intención',
  persona: 'Vilma Chacón',
  rol: 'Asesora de Imagen',
  lema: 'Tu imagen puede trabajar a tu favor.',
  descripcion:
    'Vilma Chacón, asesora de imagen en Guayaquil. Asesoría de imagen personalizada presencial, virtual o híbrida: colorimetría, detox de clóset, estilo personal e imagen profesional.',
  url: 'https://estiloconintencion.com',
  ciudad: 'Guayaquil',
  pais: 'EC',
  email: 'estiloconintencion@gmail.com',
  instagram: 'estiloconintencion',
  // Número de WhatsApp en formato internacional sin "+", p. ej. '593991234567'.
  // Mientras esté vacío, los botones de contacto llevan a Instagram.
  whatsapp: '',
};

export function enlaceContacto(mensaje = 'Hola Vilma, quiero información sobre tus asesorías de imagen.') {
  if (site.whatsapp) return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  return `https://ig.me/m/${site.instagram}`;
}

export const etiquetaContacto = site.whatsapp ? 'Escríbeme por WhatsApp' : 'Escríbeme por Instagram';
