import { site } from '../config/site';
import type { Servicio } from '../data/servicios';

const idNegocio = `${site.url}/#negocio`;
const idPersona = `${site.url}/#vilma`;

export const negocio = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': idNegocio,
  name: `${site.nombre} — ${site.persona}`,
  description: site.descripcion,
  url: site.url,
  image: `${site.url}/og/general.jpg`,
  email: site.email,
  ...(site.whatsapp ? { telephone: `+${site.whatsapp}` } : {}),
  priceRange: '$37 - $877',
  currenciesAccepted: 'USD',
  address: { '@type': 'PostalAddress', addressLocality: site.ciudad, addressCountry: site.pais },
  areaServed: [
    { '@type': 'City', name: site.ciudad },
    { '@type': 'Country', name: 'Ecuador' },
  ],
  founder: { '@id': idPersona },
  sameAs: [`https://www.instagram.com/${site.instagram}/`],
};

export const persona = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': idPersona,
  name: site.persona,
  jobTitle: 'Asesora de Imagen',
  url: `${site.url}/sobre-mi`,
  image: `${site.url}/img/vilma-retrato.webp`,
  worksFor: { '@id': idNegocio },
  sameAs: [`https://www.instagram.com/${site.instagram}/`],
};

export function servicioLd(s: Servicio) {
  const valores = s.precios.map((p) => p.valor);
  const url = `${site.url}/servicios/${s.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.nombre,
    description: s.descripcion,
    serviceType: 'Asesoría de imagen',
    url,
    provider: { '@id': idNegocio },
    areaServed: [{ '@type': 'City', name: site.ciudad }, 'Online'],
    offers:
      valores.length > 1
        ? { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: Math.min(...valores), highPrice: Math.max(...valores), offerCount: valores.length, url }
        : { '@type': 'Offer', priceCurrency: 'USD', price: valores[0], url },
  };
}

export function migas(items: { nombre: string; ruta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.nombre,
      item: new URL(it.ruta, site.url).href,
    })),
  };
}
