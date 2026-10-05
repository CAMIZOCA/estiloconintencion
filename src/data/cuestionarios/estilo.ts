// Transcripción de "Cuestionario de Estilo.pdf".
// Cada fila tiene 7 opciones, una por estilo, en el orden de `estilos`.
export const estilos = [
  'Natural',
  'Tradicional',
  'Elegante',
  'Romántico',
  'Seductor',
  'Creativo',
  'Dramático',
] as const;

export interface Seccion {
  id: string;
  titulo: string;
  filas: string[][];
}

export interface Tabla {
  id: 'p' | 'n';
  titulo: string;
  instruccion: string;
  secciones: Seccion[];
}

export const tablas: Tabla[] = [
  {
    id: 'p',
    titulo: 'Aspectos positivos',
    instruccion:
      'Marca todos los aspectos positivos que puedas identificar en ti: cosas que ya tienes, que te gustan y con las que puedes trabajar, desde tu interior, tu cuerpo y tu indumentaria.',
    secciones: [
      {
        id: 'i',
        titulo: 'Interior',
        filas: [
          ['Amigable', 'Organizado', 'Culto', 'Empático', 'Sensual', 'Creativo', 'Cosmopolita'],
          ['Aventurero', 'Conservador', 'Distinguido', 'Considerado', 'Persuasivo', 'Ecléctico', 'Intenso'],
          ['Casual', 'Confiable', 'Preciso', 'Amable', 'Echado para adelante', 'Expresivo', 'Sofisticado'],
          ['Espontáneo', 'Leal', 'Meticuloso', 'Protector', 'Seductor', 'Espíritu libre', 'Rotundo'],
          ['Entusiasta', 'Práctico', 'Refinado', 'Sentimental', 'Provocativo', 'Imaginativo', 'Audaz'],
          ['Natural', 'Comprometido', 'Reservado', 'Cálido', 'Seguro de sí mismo', 'Original', 'Imponente'],
          ['Optimista', 'Convencional', 'Urbano', 'Cuidadoso', 'Sexy', 'Subjetivo', 'Confiado'],
        ],
      },
      {
        id: 'c',
        titulo: 'Cuerpo',
        filas: [
          ['Activo', 'Estable', 'Estilizado', 'Formas suaves', 'Fuerte y tonificado', 'Centrado en expresar quién eres', 'Fuerte'],
          ['Enérgico', 'Reposado', 'Respetas tus descansos', 'Centrado en autocuidado', 'Inviertes en mejorar tu atractivo', 'Dinámico', 'Centrado en comunicar'],
        ],
      },
      {
        id: 'v',
        titulo: 'Indumentaria',
        filas: [
          ['Cómoda', 'Formal', 'Impoluta y distinguida', 'Muy femenina/masculina', 'Resalta tus atributos físicos', 'Fuera de lo común', 'De impacto'],
          ['Casual', 'Discreta y clásica', 'A medida de tu cuerpo', 'Inspiración naïve, fantasía o vintage', 'Entallada y ceñida', 'Customizada por ti mismo', 'Contrastes llamativos'],
        ],
      },
    ],
  },
  {
    id: 'n',
    titulo: 'Aspectos negativos',
    instruccion:
      'Ahora selecciona los aspectos que reconozcas en ti y que te molesten. Cuidado: no son cosas que reconoces en otros y no te gustan, sino debilidades TUYAS que quisieras mejorar.',
    secciones: [
      {
        id: 'i',
        titulo: 'Interior',
        filas: [
          ['Condescendiente', 'Rígido', 'Exigente', 'Empalagoso', 'Narcisista', 'Disperso', 'Distante'],
          ['Pasmada', 'Intolerante', 'Presuntuoso', 'Adulador', 'Manipulador', 'Dificultad para concentrarse', 'Invasivo'],
          ['Perezoso', 'Desconfiado', 'Elitista', 'Falsedad', 'Osado', 'Encerrado en sus ideas', 'Exagerado'],
          ['Miedo al conflicto', 'Miedo al cambio', 'Escrupuloso en exceso', 'Pesado', 'Querer entrar por los ojos a toda costa', 'Incomprensivo', 'Soberbio'],
          ['Dejadez', 'Lineal', 'Remilgado', 'Ñoño', 'Femme fatale/gigoló', 'Iconoclasta', 'Estrés por impactar'],
          ['Hastío', 'Presión por hacerlo bien', 'Cerrado', 'Egoísta', 'Afán de protagonismo', 'Ausente', 'Intimidante'],
          ['Indiferencia', 'Ideas fijas', 'Desprecio por quien no cumple sus expectativas', 'Querer salvar al otro a toda costa', 'Medir a los demás por la atención que te prestan', 'Desconsiderado', 'Intransigente'],
        ],
      },
      {
        id: 'c',
        titulo: 'Cuerpo',
        filas: [
          ['Abandono de la parte física', 'Rigidez corporal', 'Tensión y control de movimientos', 'Exceso en dulces y grasas', 'Sobreentrenamiento', 'Excesos en comidas y tóxicos', 'Pasar por encima de tu cuerpo y tu descanso'],
          ['Descuido', 'Sedentarismo', 'Sentimiento de culpa por no alcanzar una imagen ideal', 'Obsesión por la estética', 'Insatisfacción constante con el cuerpo que tienes', 'Llevar tu cuerpo al límite', 'Nutrición desequilibrada'],
        ],
      },
      {
        id: 'v',
        titulo: 'Indumentaria',
        filas: [
          ['Ropa estropeada', 'Te aburres de ponerte lo mismo', 'Prendas estrictas que te complican la vida', 'Exceso de adornos', 'Prendas seductoras que rozan con la vulgaridad', 'Estrés por encontrar las prendas más originales', 'Vestuario teatral cercano a disfraz'],
          ['Prendas sin arreglar', 'Fondo de armario aburrido', 'Perfeccionismo que impide disfrutar de tu vestuario', 'Prendas que caen en la cursilería', 'Exuberancia llevada al extremo', 'Todo tipo de prendas sin conexión entre ellas', 'Control excesivo de la apariencia'],
        ],
      },
    ],
  },
];

// Identificador de una marca: tabla-sección-fila-columna, p. ej. "p-i-0-3".
export function idMarca(tabla: string, seccion: string, fila: number, col: number) {
  return `${tabla}-${seccion}-${fila}-${col}`;
}

export function marcasValidas() {
  const ids = new Map<string, { tabla: 'p' | 'n'; seccion: string; col: number; texto: string }>();
  for (const t of tablas)
    for (const s of t.secciones)
      s.filas.forEach((fila, f) =>
        fila.forEach((texto, c) => ids.set(idMarca(t.id, s.id, f, c), { tabla: t.id, seccion: s.titulo, col: c, texto })),
      );
  return ids;
}
