export interface Servicio {
  slug: string;
  numero: string;
  nombre: string;
  lema: string;
  descripcion: string;
  incluye: string[];
  duracion: string;
  // Uno o varios precios en USD. Con varios, cada uno lleva su etiqueta.
  precios: { etiqueta?: string; valor: number }[];
  nota?: string;
  destacado?: boolean;
  grupo: 'empezar' | 'programas' | 'puntual';
  seoTitulo: string;
  seoDescripcion: string;
  imagen?: string;
}

export const servicios: Servicio[] = [
  {
    slug: 'valoracion-de-imagen-estrategica',
    numero: '01',
    nombre: 'Valoración de Imagen Estratégica',
    lema: 'Si no sabes por dónde empezar, empecemos juntas.',
    descripcion:
      'Una sesión para entender cómo estás proyectando actualmente tu imagen, qué quieres conseguir y cuál es el camino que mejor se adapta a ti.',
    incluye: [
      'Revisión de test de estilo',
      'Análisis de imagen actual',
      'Definición de objetivos',
      'Recomendaciones prácticas y orientación',
    ],
    duracion: '45–60 min · Presencial o virtual',
    precios: [{ valor: 37 }],
    nota: 'Si decides continuar con uno de nuestros programas, este valor puede ser descontado.',
    grupo: 'empezar',
    seoTitulo: 'Valoración de imagen en Guayaquil y online',
    seoDescripcion:
      'Sesión de valoración de imagen estratégica con Vilma Chacón: análisis de tu imagen actual, objetivos y recomendaciones prácticas. Presencial en Guayaquil o virtual. $37.',
  },
  {
    slug: 'la-magia-del-color',
    numero: '02',
    nombre: 'La Magia del Color',
    lema: 'Descubre los colores que realmente trabajan a tu favor.',
    descripcion:
      'Más que decirte qué colores te quedan bien, vamos a descubrir cómo utilizarlos para verte, sentirte y comunicarte mejor.',
    incluye: [
      'Análisis de color',
      'Paleta estratégica',
      'Colores favorecedores',
      'Combinaciones con intención',
      'Herramientas para aplicar por ti misma',
      'Círculo cromático, estudio de color y guía personalizada de combinaciones',
    ],
    duracion: '4 semanas · 4 sesiones',
    precios: [{ valor: 425 }],
    nota: '¿Llegaste buscando color y descubriste que quieres transformar mucho más? Muchas de mis clientas continúan su proceso con Estilo con Propósito.',
    destacado: true,
    grupo: 'empezar',
    seoTitulo: 'Colorimetría y análisis de color personal en Guayaquil',
    seoDescripcion:
      'La Magia del Color: análisis de color personal, paleta estratégica y guía de combinaciones con Vilma Chacón. 4 sesiones, presencial en Guayaquil o virtual.',
  },
  {
    slug: 'detox-de-closet',
    numero: '03',
    nombre: 'Detox de Clóset',
    lema: 'Haz espacio para un estilo que sí quieras usar.',
    descripcion:
      'No se trata solamente de sacar ropa. Vamos a descubrir qué realmente funciona para ti, qué ya no necesitas y cómo aprovechar mejor lo que decides conservar.',
    incluye: [
      'Revisión de estilo y objetivos',
      'Depuración',
      'Selección',
      'Combinaciones',
      'Guía práctica',
      'Guía de estilo + lookbook fotográfico',
    ],
    duracion: '3 semanas · 3 sesiones',
    precios: [
      { etiqueta: 'Plan 1', valor: 315 },
      { etiqueta: 'Plan 2', valor: 405 },
    ],
    grupo: 'empezar',
    imagen: 'closet',
    seoTitulo: 'Detox de clóset en Guayaquil: organiza tu armario',
    seoDescripcion:
      'Detox de clóset con asesora de imagen: depuración, selección, combinaciones y guía práctica para aprovechar tu ropa. 3 sesiones en Guayaquil o virtual.',
  },
  {
    slug: 'estilo-con-proposito',
    numero: '04',
    nombre: 'Estilo con Propósito',
    lema: 'Tu estilo, pero con estrategia.',
    descripcion:
      'Para cuando ya sabes que quieres verte diferente, pero necesitas entender qué funciona para ti y cómo llevarlo a tu vida real.',
    incluye: [
      'Estudio de estilo y silueta',
      'Análisis de color',
      'Objetivos',
      'Fondo de armario estratégico',
      'Guía de combinaciones',
      'Acompañamiento',
    ],
    duracion: '5 semanas · sesiones semanales',
    precios: [{ valor: 605 }],
    grupo: 'programas',
    seoTitulo: 'Asesoría de estilo personal y fondo de armario',
    seoDescripcion:
      'Estilo con Propósito: estudio de estilo y silueta, análisis de color, fondo de armario estratégico y acompañamiento durante 5 semanas con Vilma Chacón.',
  },
  {
    slug: 'vistete-de-confianza',
    numero: '05',
    nombre: 'Vístete de Confianza',
    lema: 'Una imagen que te respalda.',
    descripcion:
      'Para cuando quieres que tu imagen comunique seguridad, profesionalismo y autenticidad, sin dejar de sentirte tú.',
    incluye: [
      'Todo lo de Estilo con Propósito',
      'Visagismo y peinado',
      'Accesorios',
      'Estrategias de imagen profesional',
      'Guía de compras',
    ],
    duracion: '6 semanas · sesiones semanales',
    precios: [{ valor: 715 }],
    grupo: 'programas',
    seoTitulo: 'Asesoría de imagen profesional y visagismo',
    seoDescripcion:
      'Vístete de Confianza: imagen profesional, visagismo, accesorios y guía de compras para proyectar seguridad y autenticidad. 6 semanas con Vilma Chacón.',
  },
  {
    slug: 'tu-mejor-version',
    numero: '06',
    nombre: 'Tu Mejor Versión',
    lema: 'Integra todo. Vive el cambio.',
    descripcion:
      'El proceso más completo para quienes quieren dejar de improvisar con su imagen y construir un sistema que puedan seguir utilizando mucho después de terminar la asesoría.',
    incluye: [
      'Estilo, color y silueta',
      'Visagismo y cuidado personal',
      'Detox y organización de clóset',
      'Fondo de armario y combinaciones',
      'Ruta de compras',
      'Lookbook',
      'Acompañamiento',
    ],
    duracion: '6 semanas · sesiones semanales',
    precios: [{ valor: 877 }],
    grupo: 'programas',
    seoTitulo: 'Asesoría de imagen integral completa',
    seoDescripcion:
      'Tu Mejor Versión: la asesoría de imagen integral más completa. Estilo, color, visagismo, detox de clóset, ruta de compras y lookbook en 6 semanas.',
  },
  {
    slug: 'estilo-a-medida-hombres',
    numero: '07',
    nombre: 'Estilo a Medida | Hombres',
    lema: 'Una imagen profesional, actual y auténtica.',
    descripcion:
      'Una asesoría práctica para hombres que quieren proyectar una imagen alineada con su personalidad, profesión y objetivos.',
    incluye: [
      'Estilo y necesidades',
      'Prendas esenciales',
      'Combinaciones y looks',
      'Compras',
      'Cuidado personal',
    ],
    duracion: '5 semanas · sesiones semanales',
    precios: [{ valor: 715 }],
    grupo: 'puntual',
    seoTitulo: 'Asesoría de imagen para hombres en Guayaquil',
    seoDescripcion:
      'Estilo a Medida: asesoría de imagen para hombres. Prendas esenciales, looks, compras y cuidado personal alineados con tu profesión. 5 semanas.',
  },
  {
    slug: 'tu-maleta-inteligente',
    numero: '08',
    nombre: 'Tu Maleta Inteligente',
    lema: 'Viaja con menos. Disfruta más lo que llevas.',
    descripcion:
      'Creamos una maleta práctica y versátil, pensada para tu destino, actividades y estilo personal.',
    incluye: [
      'Destino y clima',
      'Prendas clave',
      'Combinaciones',
      'Organización',
      'Aprovechamiento',
      'Lookbook',
    ],
    duracion: '2 semanas · sesiones personalizadas',
    precios: [{ valor: 137 }],
    grupo: 'puntual',
    imagen: 'vilma-maleta',
    seoTitulo: 'Asesoría para armar tu maleta de viaje',
    seoDescripcion:
      'Tu Maleta Inteligente: arma una maleta práctica y versátil según tu destino, clima y estilo, con lookbook de combinaciones. Con Vilma Chacón.',
  },
];

export const grupos = [
  {
    id: 'empezar',
    titulo: '¿Qué quieres transformar hoy?',
    texto:
      'No todas necesitamos lo mismo. Por eso puedes comenzar por aquello que hoy representa una necesidad para ti.',
  },
  {
    id: 'programas',
    titulo: 'Cuando quieres ir más allá de «¿qué me pongo?»',
    texto: 'Programas de acompañamiento semanal para construir tu estilo con estrategia.',
  },
  {
    id: 'puntual',
    titulo: 'También podemos trabajar algo puntual.',
    texto: 'Asesorías específicas para una necesidad concreta.',
  },
] as const;

export function precioTexto(s: Servicio) {
  return s.precios.map((p) => (p.etiqueta ? `${p.etiqueta} · $${p.valor}` : `$${p.valor}`)).join('  |  ');
}
