// Transcripción de "Test de Somatotipos.pdf".
// Parte 1: cada pregunta tiene tres opciones en orden A, B, C (A = 3 puntos, B = 2, C = 1).
export const preguntas: { texto: string; opciones: [string, string, string] }[] = [
  { texto: 'Mi estructura ósea es:', opciones: ['Muy grande', 'Medio - grande', 'Pequeña o frágil'] },
  { texto: 'Mi cuerpo tiende a:', opciones: ['Acumular grasa', 'Ser delgado y musculoso', 'Ser demasiado delgado'] },
  { texto: 'Mi cuerpo se ve:', opciones: ['En forma de pera', 'Como un reloj de arena', 'Muy derecho y alargado'] },
  { texto: 'Cuando era niña mi cuerpo era:', opciones: ['Grueso', 'Normal', 'Muy delgado'] },
  { texto: 'Mi nivel de actividad es:', opciones: ['Sedentario', 'Bastante activo', 'Hiperactivo, no puedo quedarme sentado(a)'] },
  { texto: 'Mi acercamiento a la vida es:', opciones: ['Reposado', 'Dinámico', 'Preocupado'] },
  { texto: 'Mi metabolismo es:', opciones: ['Lento', 'Exacto', 'Rápido'] },
  { texto: 'Los demás me dicen:', opciones: ['Que debo perder peso', 'Que me veo muy bien', 'Que debo engordar'] },
  {
    texto: 'Si rodeas tu muñeca con el dedo medio y el pulgar de tu otra mano, los dedos:',
    opciones: ['No se tocan', 'Apenas se tocan', 'Se solapan'],
  },
  {
    texto: 'Respecto a mi peso:',
    opciones: [
      'Gano peso fácilmente, pero me cuesta perderlo',
      'Gano y pierdo peso muy fácilmente, permaneciendo casi siempre igual',
      'Tengo problemas para subir de peso',
    ],
  },
  { texto: 'Tengo hambre:', opciones: ['Casi todo el tiempo', 'A la hora de comer', 'Raramente'] },
  {
    texto: 'Los demás me describen como:',
    opciones: ['Una persona emocional', 'Una persona física', 'Una persona intelectual'],
  },
];

export const letras = ['A', 'B', 'C'] as const;
export const puntosPorLetra = { A: 3, B: 2, C: 1 } as const;

// Rangos de la tabla de resultados del PDF.
export const rangos = [
  { min: 32, max: 37, nombre: 'Pícnico puro (endomorfo)' },
  { min: 27, max: 31, nombre: 'Combinación pícnico-atlético (endomorfo - mesomorfo)' },
  { min: 22, max: 26, nombre: 'Atlético puro (mesomorfo)' },
  { min: 17, max: 21, nombre: 'Combinación asténico-atlético (ectomorfo - mesomorfo)' },
  { min: 12, max: 16, nombre: 'Asténico puro (ectomorfo)' },
];

export const tipos = { astenico: 'Asténico', atletico: 'Atlético', picnico: 'Pícnico' } as const;
export type Tipo = keyof typeof tipos;

// Parte 2: forma de comunicación predominante.
export const comunicacion: { valor: Tipo; puntos: string[]; estres: string }[] = [
  {
    valor: 'astenico',
    puntos: ['Pensamiento', 'Análisis intelectual', 'Análisis racional', 'Análisis espiritual', 'Interés por tu mundo interno'],
    estres: 'Estrés por conocimiento',
  },
  {
    valor: 'atletico',
    puntos: ['Acción directa orientada a obtener resultados', 'Interés por el mundo físico'],
    estres: 'Estrés por resultados',
  },
  {
    valor: 'picnico',
    puntos: ['Lo social', 'Lo emocional', 'Compartir situaciones agradables', 'Necesidad de búsqueda de conexión con tu interlocutor'],
    estres: 'Estrés por placer',
  },
];

// Parte 3: somatotipo estético predominante.
export const estetico: { valor: Tipo; texto: string }[] = [
  {
    valor: 'astenico',
    texto:
      'Gusto por una imagen distante y colores discretos, o bien poco interés en la apariencia estética, no saber bien cómo gestionar la imagen externa o dejadez.',
  },
  {
    valor: 'atletico',
    texto:
      'Motivación por una imagen externa enfocada a resaltar los atributos físicos característicos de tu feminidad/masculinidad.',
  },
  {
    valor: 'picnico',
    texto:
      'Interés por una imagen agradable y llamativa, uso del color en su amplio abanico de posibilidades, contrastes y adornos y combinaciones dinámicas.',
  },
];
