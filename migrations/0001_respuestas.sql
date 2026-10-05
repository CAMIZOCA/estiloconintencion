CREATE TABLE respuestas (
  id TEXT PRIMARY KEY,
  cuestionario TEXT NOT NULL,
  nombre TEXT NOT NULL,
  contacto TEXT NOT NULL,
  respuestas_json TEXT NOT NULL,
  resultado_json TEXT NOT NULL,
  resumen TEXT NOT NULL,
  creado_en TEXT NOT NULL
);
CREATE INDEX idx_respuestas_creado ON respuestas (creado_en DESC);

CREATE TABLE login_intentos (
  ip TEXT NOT NULL,
  ts INTEGER NOT NULL
);
CREATE INDEX idx_login_intentos ON login_intentos (ip, ts);
