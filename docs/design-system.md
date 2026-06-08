# Sistema de diseño web  
## Portal UNEFA Extensión San Casimiro

**Proyecto:** Portal web institucional para la Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional Bolivariana, Extensión San Casimiro, estado Aragua, Venezuela.  
**Versión:** 1.0  
**Fecha:** 2026-06-08  
**Uso recomendado:** guía base para diseño UI, desarrollo frontend, redacción institucional, componentes, estructura de páginas y criterios de consistencia visual.

---

## 1. Propósito del sistema

Este sistema de diseño busca construir un portal local para la **UNEFA Extensión San Casimiro** que respete la identidad visual de la sede principal `unefa.edu.ve`, pero con una experiencia más clara, moderna y usable para estudiantes, aspirantes, docentes, personal administrativo y comunidad local.

La idea no es copiar una interfaz antigua pixel por pixel. Eso sería ponerle uniforme de gala a una tabla HTML de 2008. El objetivo es conservar el carácter institucional, patriótico y académico de la UNEFA, mientras se entrega un sitio rápido, legible, accesible y fácil de mantener.

---

## 2. Referencias institucionales consultadas

### 2.1 Referencias base

- Portal principal: `https://www.unefa.edu.ve/`
- Página oficial de pregrado UNEFA: `https://www.unefa.edu.ve/portal/pregrado.php`
- Misión, visión y valores UNEFA: `https://www.unefa.edu.ve/portal/mision_v_v.php`
- Historia institucional UNEFA: `https://www.unefa.edu.ve/portal/historia.php`
- Ficha OPSU de la localidad San Casimiro: `https://loeu.opsu.gob.ve/detalle-localidad/1497/`
- Cuenta social referencial de la extensión: Instagram `@unefasancasimiro`

### 2.2 Datos locales de referencia

Según la ficha OPSU, la localidad corresponde a:

- **Institución:** Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional.
- **Siglas:** UNEFA.
- **Tipo de institución:** Universidad experimental.
- **Gestión:** Pública.
- **Localidad:** Núcleo Aragua, Extensión San Casimiro.
- **Dirección:** Sector Dos Quebradas, Calle Monseñor Lucas Castillo, edif. UNEFA, San Casimiro, estado Aragua.
- **Programas registrados en la ficha OPSU:**
  - Administración y Gestión Municipal.
  - Análisis y Diseño de Sistemas, técnica.
  - Economía Social.
  - Ingeniería de Sistemas.
  - Ingeniería Mecánica.

> Nota: validar internamente con la coordinación de la extensión la oferta académica vigente antes de publicar.

---

## 3. Personalidad visual

### 3.1 Concepto rector

**Institucional, académico, nacional, cercano y funcional.**

El portal debe comunicar:

- Autoridad académica.
- Pertenencia a una universidad pública nacional.
- Disciplina y orden institucional.
- Cercanía con la comunidad de San Casimiro.
- Claridad para procesos estudiantiles.

### 3.2 Palabras clave de diseño

- Excelencia educativa.
- Servicio público.
- Formación técnica y humanista.
- Defensa integral.
- Identidad venezolana.
- Comunidad local.
- Orden, orientación y confianza.

### 3.3 Lo que debe evitarse

- Saturación de colores patrios sin jerarquía.
- Fondos recargados detrás de textos largos.
- Uso excesivo de escudos, cintillos y logos en cada bloque.
- Carruseles eternos que parecen desfile de pendones.
- Tipografías decorativas o difíciles de leer.
- Botones con bajo contraste.
- Páginas llenas de PDFs sin explicación.
- Noticias sin fecha visible.

---

## 4. Principios de diseño

### 4.1 Claridad primero

El usuario debe encontrar rápido lo importante: inscripción, carreras, horarios, noticias, contactos, ubicación y documentos.

### 4.2 Institucional sin volverse rígido

La imagen debe ser seria, pero no funeraria. La UNEFA puede verse formal y actual al mismo tiempo.

### 4.3 Localidad visible

El portal es de San Casimiro. Debe mostrar rostros, espacios, actividades, mapas, comunidad, docentes y vida universitaria local.

### 4.4 Mobile first

Muchos usuarios entrarán desde teléfono. El diseño base debe funcionar perfecto en pantallas de 360px en adelante.

### 4.5 Contenido verificable

Toda información académica, fechas, requisitos, procesos y documentos debe tener fecha de actualización o responsable.

---

## 5. Identidad visual

## 5.1 Logotipo y escudo

### Uso principal

Usar el escudo oficial de UNEFA como identificador institucional principal, acompañado del texto:

```txt
UNEFA
Extensión San Casimiro
Núcleo Aragua
```

### Versiones recomendadas

1. **Versión horizontal:** escudo a la izquierda + texto a la derecha.  
   Uso: header, footer, documentos, login.

2. **Versión vertical:** escudo centrado + texto debajo.  
   Uso: hero institucional, pantallas de bienvenida, piezas gráficas.

3. **Versión reducida:** solo escudo.  
   Uso: favicon, avatar, botones compactos.

### Zona de seguridad

Mantener un margen mínimo alrededor del escudo equivalente al **25% del ancho del escudo**.

### Tamaños mínimos

| Uso | Tamaño mínimo recomendado |
|---|---:|
| Favicon | 32 × 32 px |
| Header móvil | 40 px de alto |
| Header desktop | 52 px de alto |
| Footer | 56 px de alto |
| Hero institucional | 96 px de alto |

### No hacer

- No deformar el escudo.
- No aplicarle sombras duras.
- No usarlo sobre fondos de bajo contraste.
- No colocarlo dentro de círculos, escudos nuevos o marcos inventados.
- No recolorear el escudo oficial salvo que exista una versión monocromática aprobada.

---

## 5.2 Paleta de color

La identidad visual de UNEFA se apoya en los colores nacionales y en el azul institucional. Se propone una paleta funcional para web, con colores aproximados y ajustables según manual oficial si se consigue.

### Paleta primaria

| Token | Hex | Uso |
|---|---:|---|
| `--color-primary-900` | `#071B49` | Azul profundo institucional, headers, footer, fondos hero. |
| `--color-primary-800` | `#0B2C66` | Azul institucional principal. |
| `--color-primary-700` | `#123B7A` | Hover de botones primarios. |
| `--color-primary-100` | `#E7EEF9` | Fondos suaves, cards informativas. |
| `--color-primary-50` | `#F3F7FC` | Fondos de sección. |

### Paleta patria/acento

| Token | Hex | Uso |
|---|---:|---|
| `--color-yellow-500` | `#FCD116` | Acentos, líneas superiores, etiquetas destacadas. |
| `--color-yellow-600` | `#D9A300` | Hover/acento dorado. |
| `--color-red-600` | `#CF142B` | Alertas institucionales, urgencias, destacados controlados. |
| `--color-red-700` | `#A90F24` | Hover de alertas. |
| `--color-blue-flag` | `#0033A0` | Detalles patrios, separadores, banners. |

### Neutros

| Token | Hex | Uso |
|---|---:|---|
| `--color-neutral-950` | `#0F172A` | Títulos fuertes. |
| `--color-neutral-800` | `#1E293B` | Texto principal. |
| `--color-neutral-600` | `#475569` | Texto secundario. |
| `--color-neutral-400` | `#94A3B8` | Bordes secundarios. |
| `--color-neutral-200` | `#E2E8F0` | Bordes. |
| `--color-neutral-100` | `#F1F5F9` | Fondos suaves. |
| `--color-white` | `#FFFFFF` | Fondo base, texto sobre azul. |

### Estados funcionales

| Token | Hex | Uso |
|---|---:|---|
| `--color-success` | `#15803D` | Procesos abiertos, aprobado, activo. |
| `--color-warning` | `#B45309` | Advertencias, fechas cercanas. |
| `--color-error` | `#B91C1C` | Error, vencido, urgente. |
| `--color-info` | `#0369A1` | Avisos informativos. |

### Reglas de uso

- El azul institucional debe dominar.
- El amarillo debe usarse como acento, no como fondo principal para textos largos.
- El rojo debe reservarse para alertas, detalles patrios o avisos importantes.
- No usar amarillo, azul y rojo en bloques grandes simultáneos. La bandera es símbolo, no confeti táctico.

---

## 5.3 Gradientes y fondos

### Gradiente institucional principal

```css
background: linear-gradient(135deg, #071B49 0%, #0B2C66 52%, #123B7A 100%);
```

Uso: hero, encabezados de páginas, banners principales.

### Gradiente patrio sutil

```css
background:
  linear-gradient(90deg, #FCD116 0 33%, #0033A0 33% 66%, #CF142B 66% 100%);
```

Uso: línea superior de 4 a 6 px, separador de footer, borde de cards destacadas.

### Fondo académico suave

```css
background: #F3F7FC;
```

Uso: secciones de noticias, accesos rápidos, documentos.

### Patrón permitido

Usar patrones muy sutiles con:

- Estrellas pequeñas en baja opacidad.
- Líneas técnicas tipo plano o retícula.
- Siluetas abstractas de libros, engranajes, mapa de Aragua o formas topográficas.

Opacidad máxima recomendada: `4%` a `8%`.

---

## 6. Tipografía

### 6.1 Familia principal

**Inter** o **Source Sans 3**.

Uso: interfaz, navegación, formularios, tarjetas, botones y textos generales.

```css
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### 6.2 Familia para títulos institucionales

**Merriweather Sans**, **Roboto Slab** o **Libre Baskerville** para títulos puntuales.

Uso controlado:

- Hero principal.
- Títulos de páginas ceremoniales.
- Citas institucionales.

### 6.3 Escala tipográfica

| Token | Tamaño | Line-height | Uso |
|---|---:|---:|---|
| `text-xs` | 12 px | 16 px | Etiquetas, metadatos. |
| `text-sm` | 14 px | 20 px | Ayudas, navegación secundaria. |
| `text-base` | 16 px | 24 px | Texto principal. |
| `text-lg` | 18 px | 28 px | Entradillas, cards importantes. |
| `text-xl` | 20 px | 28 px | Subtítulos. |
| `text-2xl` | 24 px | 32 px | Títulos de sección móvil. |
| `text-3xl` | 30 px | 38 px | Títulos de página. |
| `text-4xl` | 36 px | 44 px | Hero desktop. |
| `text-5xl` | 48 px | 56 px | Hero especial desktop. |

### 6.4 Pesos

| Peso | Uso |
|---|---|
| 400 | Texto normal. |
| 500 | Navegación, labels. |
| 600 | Subtítulos y botones. |
| 700 | Títulos. |
| 800 | Hero y llamados principales. |

### 6.5 Reglas de lectura

- El texto de cuerpo nunca debe bajar de 16 px.
- Las líneas largas no deben superar 72 caracteres.
- Usar `line-height` generoso en comunicados.
- Evitar párrafos enormes. En web, el bloque de texto kilométrico se convierte en pared de concreto académico.

---

## 7. Espaciado y layout

### 7.1 Sistema de espaciado

Basado en múltiplos de 4 px.

| Token | Valor |
|---|---:|
| `space-1` | 4 px |
| `space-2` | 8 px |
| `space-3` | 12 px |
| `space-4` | 16 px |
| `space-5` | 20 px |
| `space-6` | 24 px |
| `space-8` | 32 px |
| `space-10` | 40 px |
| `space-12` | 48 px |
| `space-16` | 64 px |
| `space-20` | 80 px |
| `space-24` | 96 px |

### 7.2 Contenedores

| Contenedor | Ancho máximo | Uso |
|---|---:|---|
| `container-sm` | 720 px | Comunicados, artículos. |
| `container-md` | 960 px | Páginas informativas. |
| `container-lg` | 1120 px | Listados, grillas, páginas generales. |
| `container-xl` | 1280 px | Home, directorios, noticias amplias. |

### 7.3 Breakpoints

| Token | Ancho |
|---|---:|
| `xs` | 360 px |
| `sm` | 480 px |
| `md` | 768 px |
| `lg` | 1024 px |
| `xl` | 1280 px |
| `2xl` | 1536 px |

### 7.4 Grillas

#### Móvil

- 1 columna.
- Padding lateral: 16 px.
- Cards apiladas.

#### Tablet

- 2 columnas para cards.
- Padding lateral: 24 px.

#### Desktop

- 12 columnas.
- Gap: 24 px.
- Padding lateral: 32 px.

---

## 8. Bordes, sombras y radios

### 8.1 Radio

| Token | Valor | Uso |
|---|---:|---|
| `radius-sm` | 4 px | Inputs pequeños, badges. |
| `radius-md` | 8 px | Botones, cards compactas. |
| `radius-lg` | 12 px | Cards principales. |
| `radius-xl` | 16 px | Bloques destacados. |
| `radius-2xl` | 24 px | Hero cards, módulos especiales. |

### 8.2 Sombras

| Token | Valor | Uso |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(15,23,42,.08)` | Elementos sutiles. |
| `shadow-md` | `0 8px 24px rgba(15,23,42,.10)` | Cards elevadas. |
| `shadow-lg` | `0 16px 40px rgba(15,23,42,.14)` | Hero cards, dropdowns. |

### 8.3 Bordes

```css
border: 1px solid #E2E8F0;
```

Usar bordes limpios, no marcos dobles decorativos. El escudo ya trae suficiente heráldica para el banquete.

---

## 9. Iconografía

### 9.1 Estilo

- Línea simple.
- Grosor entre 1.75 px y 2 px.
- Esquinas redondeadas.
- Sin rellenos pesados salvo estados activos.

### 9.2 Librerías sugeridas

- Lucide Icons.
- Heroicons.
- Tabler Icons.

### 9.3 Íconos por área

| Área | Íconos sugeridos |
|---|---|
| Carreras | `graduation-cap`, `book-open`, `briefcase`, `cpu`, `settings` |
| Inscripciones | `clipboard-list`, `file-check`, `calendar-days` |
| Noticias | `newspaper`, `megaphone` |
| Documentos | `file-text`, `download`, `folder` |
| Ubicación | `map-pin`, `route` |
| Contacto | `phone`, `mail`, `message-circle` |
| Horarios | `clock`, `calendar` |

---

## 10. Fotografía e imagen

### 10.1 Dirección fotográfica

El portal debe usar fotografías reales de:

- Fachada de la extensión.
- Estudiantes en actividades académicas.
- Docentes en aula/laboratorio.
- Actos institucionales.
- Comunidad de San Casimiro.
- Equipos, laboratorios, salones y espacios administrativos.

### 10.2 Tratamiento visual

- Fotos nítidas y luminosas.
- Evitar filtros amarillos agresivos.
- Aplicar overlay azul institucional cuando haya texto encima.
- No usar fotos pixeladas de WhatsApp como hero. Eso se nota más que zapato mojado en acto protocolar.

### 10.3 Formatos recomendados

| Uso | Relación | Tamaño sugerido |
|---|---:|---:|
| Hero | 16:9 | 1920 × 1080 px |
| Card noticia | 16:9 | 960 × 540 px |
| Perfil autoridad | 1:1 | 800 × 800 px |
| Galería | 4:3 / 16:9 | 1200 px ancho |
| Banner interno | 21:9 | 1920 × 820 px |

### 10.4 Alt text

Toda imagen debe tener texto alternativo descriptivo.

Ejemplo:

```txt
Estudiantes de la UNEFA Extensión San Casimiro durante jornada académica en el aula principal.
```

---

## 11. Componentes base

## 11.1 Header institucional

### Desktop

Estructura:

1. Barra superior patria de 4 px.
2. Header blanco o azul profundo.
3. Logo UNEFA + Extensión San Casimiro.
4. Navegación principal.
5. Botón destacado: “Inscripciones” o “SICEU”.

### Navegación principal

```txt
Inicio
La Extensión
Oferta Académica
Estudiantes
Noticias
Documentos
Contacto
```

### Mobile

- Logo compacto.
- Botón hamburguesa claro.
- Menú tipo panel lateral o desplegable completo.
- CTA visible: “Inscripciones”.

### Estados

- Header sticky opcional.
- Al hacer scroll, reducir altura.
- Mantener contraste AA.

---

## 11.2 Footer

Debe incluir:

- Logo institucional.
- Nombre completo de la extensión.
- Dirección.
- Teléfonos.
- Correo institucional.
- Horario de atención.
- Enlaces rápidos.
- Enlaces a sede principal y sistemas oficiales.
- Redes sociales.
- Nota de derechos.

Ejemplo de cierre:

```txt
Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional Bolivariana
UNEFA Extensión San Casimiro, Núcleo Aragua
Excelencia Educativa Abierta al Pueblo
```

---

## 11.3 Botones

### Botón primario

Uso: acciones principales.

```css
.btn-primary {
  background: #0B2C66;
  color: #FFFFFF;
  border-radius: 8px;
  padding: 12px 18px;
  font-weight: 700;
}

.btn-primary:hover {
  background: #123B7A;
}
```

Texto recomendado:

- Ver oferta académica.
- Iniciar inscripción.
- Descargar planilla.
- Contactar coordinación.

### Botón secundario

```css
.btn-secondary {
  background: #FFFFFF;
  color: #0B2C66;
  border: 1px solid #0B2C66;
}
```

### Botón de alerta

Uso controlado para fechas críticas o avisos urgentes.

```css
.btn-alert {
  background: #CF142B;
  color: #FFFFFF;
}
```

### Tamaños

| Tamaño | Padding | Texto |
|---|---|---:|
| SM | 8px 12px | 14 px |
| MD | 12px 18px | 16 px |
| LG | 14px 22px | 18 px |

---

## 11.4 Cards

### Card de noticia

Contenido:

- Imagen 16:9.
- Categoría.
- Fecha.
- Título.
- Resumen breve.
- Enlace “Leer más”.

Regla:

- Máximo 2 líneas para título en listados.
- Máximo 3 líneas para resumen.

### Card de carrera

Contenido:

- Ícono.
- Nombre de carrera.
- Tipo: Ingeniería, Licenciatura o TSU/Técnica.
- Modalidad, si aplica.
- Estado: Disponible / Consultar disponibilidad.
- Botón “Ver detalles”.

### Card de documento

Contenido:

- Ícono de archivo.
- Nombre del documento.
- Tipo: PDF, DOCX, XLSX.
- Fecha de actualización.
- Peso aproximado.
- Botón descargar.

### Card de aviso

Variantes:

- Informativo.
- Urgente.
- Académico.
- Administrativo.

Debe mostrar siempre fecha y responsable.

---

## 11.5 Hero principal

### Objetivo

Presentar la extensión local con fuerza institucional y acceso directo a lo más buscado.

### Estructura recomendada

```txt
[Etiqueta] UNEFA Extensión San Casimiro · Núcleo Aragua
[Título] Formación universitaria al servicio de San Casimiro
[Texto] Portal informativo para aspirantes, estudiantes, docentes y comunidad.
[CTA 1] Ver oferta académica
[CTA 2] Consultar documentos
[Accesos rápidos] Inscripciones · SICEU · Horarios · Contacto
```

### Fondo

- Foto de la sede o estudiantes.
- Overlay azul profundo `rgba(7, 27, 73, 0.78)`.
- Línea patria superior o inferior.

---

## 11.6 Bloque de accesos rápidos

Debe aparecer en home, debajo del hero.

Opciones sugeridas:

1. Nuevo ingreso.
2. Oferta académica.
3. Horarios.
4. Documentos.
5. Noticias.
6. Contacto.

Cada acceso:

- Ícono.
- Título corto.
- Texto de una línea.
- Enlace claro.

---

## 11.7 Alert bar

Uso para avisos críticos.

Ejemplo:

```txt
Proceso de inscripción abierto hasta el 15 de julio. Ver requisitos.
```

Reglas:

- Solo una alerta visible a la vez.
- Debe tener fecha.
- Debe poder cerrarse si no es obligatoria.
- No usar para noticias normales.

---

## 11.8 Breadcrumbs

Ejemplo:

```txt
Inicio / Oferta Académica / Ingeniería de Sistemas
```

Uso obligatorio en páginas internas.

---

## 11.9 Formularios

### Campos base

- Nombre y apellido.
- Cédula.
- Correo.
- Teléfono.
- Carrera de interés.
- Mensaje.

### Estilo

```css
.input {
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 16px;
}

.input:focus {
  border-color: #0B2C66;
  box-shadow: 0 0 0 3px rgba(11, 44, 102, .16);
}
```

### Reglas

- Labels visibles siempre.
- Mensajes de error claros.
- No depender solo del color.
- Confirmación después de enviar.

---

## 11.10 Tablas

Para horarios, listados y documentos.

Reglas:

- En móvil, convertir a cards o permitir scroll horizontal.
- Encabezados fijos en tablas largas.
- Filas alternas suaves.
- Acciones claras al final.

---

## 12. Arquitectura de información

## 12.1 Mapa principal del sitio

```txt
/
├── /la-extension
│   ├── historia
│   ├── autoridades
│   ├── ubicacion
│   └── contacto
├── /oferta-academica
│   ├── administracion-y-gestion-municipal
│   ├── analisis-y-diseno-de-sistemas
│   ├── economia-social
│   ├── ingenieria-de-sistemas
│   └── ingenieria-mecanica
├── /estudiantes
│   ├── nuevo-ingreso
│   ├── horarios
│   ├── calendario-academico
│   ├── siceu
│   └── preguntas-frecuentes
├── /noticias
│   └── /noticias/[slug]
├── /documentos
│   ├── planillas
│   ├── reglamentos
│   ├── comunicados
│   └── formatos
├── /galeria
└── /contacto
```

## 12.2 Home recomendada

Orden:

1. Header institucional.
2. Alert bar, si aplica.
3. Hero principal.
4. Accesos rápidos.
5. Oferta académica destacada.
6. Noticias recientes.
7. Calendario o próximos procesos.
8. Documentos más solicitados.
9. Bloque de ubicación y contacto.
10. Footer.

---

## 13. Plantillas de página

## 13.1 Página de carrera

### Estructura

```txt
Hero interno
Resumen de la carrera
Datos rápidos
Perfil de ingreso
Perfil de egreso
Campo laboral
Malla o plan de estudio
Requisitos / documentos
Contacto académico
Preguntas frecuentes
```

### Datos rápidos

- Tipo de programa.
- Duración.
- Modalidad.
- Turno.
- Coordinación responsable.
- Estado de oferta.

> Validar duración, modalidad y disponibilidad con la coordinación antes de publicar.

---

## 13.2 Página de noticia

### Estructura

```txt
Categoría
Título
Fecha
Autor / dependencia
Imagen principal
Cuerpo de noticia
Galería opcional
Documentos relacionados
Noticias relacionadas
```

### Reglas editoriales

- Título claro, sin gritos en mayúscula sostenida.
- Primer párrafo debe responder: qué pasó, quién participó, dónde y cuándo.
- Incluir nombres y cargos completos.
- No publicar imágenes sin contexto.

---

## 13.3 Página de documentos

### Filtros

- Categoría.
- Tipo de archivo.
- Fecha.
- Proceso.

### Campos visibles

- Nombre.
- Descripción breve.
- Categoría.
- Fecha de actualización.
- Botón descargar.

---

## 13.4 Página de contacto

Debe incluir:

- Dirección.
- Mapa embebido.
- Horario.
- Teléfonos.
- Correos por área.
- Formulario.
- Redes sociales.

Correos sugeridos por área, a validar:

```txt
coordinacion.sancasimiro@unefa.edu.ve
controlestudios.sancasimiro@unefa.edu.ve
secretaria.sancasimiro@unefa.edu.ve
```

> No publicar correos inventados sin validación. Si no existen, usar correo general y teléfonos oficiales.

---

## 14. Redacción y tono institucional

## 14.1 Tono

- Claro.
- Formal.
- Directo.
- Cercano.
- Respetuoso.
- Orientado a servicio.

## 14.2 Voz

Hablar como una institución educativa pública que guía al estudiante, no como un panfleto ni como una taquilla cerrando a las 11:59.

## 14.3 Reglas de estilo

- Preferir frases cortas.
- Evitar burocracia innecesaria.
- No abusar de mayúsculas.
- Usar fechas completas: `lunes 15 de julio de 2026`.
- Incluir responsables en procesos administrativos.
- Explicar siglas la primera vez.

## 14.4 Ejemplos

### En vez de:

```txt
SE INFORMA A TODA LA COMUNIDAD UNEFISTA QUE DEBERÁN CONSIGNAR RECAUDOS...
```

### Usar:

```txt
La Coordinación de Control de Estudios informa que el proceso de consignación de recaudos estará abierto del 10 al 15 de julio.
```

### En vez de:

```txt
Pulse aquí.
```

### Usar:

```txt
Descargar requisitos de inscripción.
```

---

## 15. Accesibilidad

### 15.1 Contraste

- Texto normal: mínimo WCAG AA `4.5:1`.
- Texto grande: mínimo `3:1`.
- Botones: contraste suficiente en reposo, hover y focus.

### 15.2 Navegación

- Todo debe poder usarse con teclado.
- Estados `:focus-visible` visibles.
- Menú móvil accesible.
- Saltar al contenido principal.

### 15.3 Semántica

- Usar un solo `h1` por página.
- Jerarquía ordenada: `h1`, `h2`, `h3`.
- Botones reales para acciones.
- Enlaces reales para navegación.

### 15.4 Imágenes

- Alt text descriptivo.
- Imágenes decorativas con `alt=""`.
- No poner información importante solo dentro de imágenes.

---

## 16. SEO institucional

### 16.1 Metadatos base

```txt
Title: UNEFA Extensión San Casimiro | Núcleo Aragua
Description: Portal informativo de la UNEFA Extensión San Casimiro, estado Aragua. Oferta académica, noticias, documentos, horarios y contacto institucional.
```

### 16.2 Keywords naturales

- UNEFA San Casimiro.
- UNEFA Aragua.
- Extensión San Casimiro.
- Ingeniería de Sistemas UNEFA San Casimiro.
- Administración y Gestión Municipal UNEFA.
- Universidad en San Casimiro.
- UNEFA inscripción.

### 16.3 Schema sugerido

Usar `EducationalOrganization` o `CollegeOrUniversity` en JSON-LD.

Campos:

- name.
- alternateName.
- address.
- url.
- telephone.
- sameAs.
- department.

---

## 17. Componentes técnicos recomendados

Pensado para Astro + Tailwind.

### 17.1 Tokens CSS base

```css
:root {
  --color-primary-900: #071B49;
  --color-primary-800: #0B2C66;
  --color-primary-700: #123B7A;
  --color-primary-100: #E7EEF9;
  --color-primary-50: #F3F7FC;

  --color-yellow-500: #FCD116;
  --color-yellow-600: #D9A300;
  --color-red-600: #CF142B;
  --color-red-700: #A90F24;
  --color-blue-flag: #0033A0;

  --color-neutral-950: #0F172A;
  --color-neutral-800: #1E293B;
  --color-neutral-600: #475569;
  --color-neutral-400: #94A3B8;
  --color-neutral-200: #E2E8F0;
  --color-neutral-100: #F1F5F9;
  --color-white: #FFFFFF;

  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  --shadow-sm: 0 1px 2px rgba(15, 23, 42, .08);
  --shadow-md: 0 8px 24px rgba(15, 23, 42, .10);
  --shadow-lg: 0 16px 40px rgba(15, 23, 42, .14);
}
```

### 17.2 Componentes Astro sugeridos

```txt
src/components/
├── layout/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── TopBar.astro
│   └── Breadcrumbs.astro
├── ui/
│   ├── Button.astro
│   ├── Card.astro
│   ├── Badge.astro
│   ├── AlertBar.astro
│   ├── SectionHeader.astro
│   └── DocumentList.astro
├── home/
│   ├── HeroHome.astro
│   ├── QuickLinks.astro
│   ├── AcademicOffer.astro
│   ├── LatestNews.astro
│   └── ContactPreview.astro
├── academic/
│   ├── CareerCard.astro
│   ├── CareerHero.astro
│   └── StudyPlanTable.astro
└── news/
    ├── NewsCard.astro
    └── NewsMeta.astro
```

### 17.3 Content collections sugeridas

```txt
src/content/
├── noticias/
├── carreras/
├── documentos/
├── autoridades/
└── avisos/
```

### 17.4 Esquema frontmatter para noticias

```yaml
title: "Jornada de bienvenida a nuevos ingresos"
description: "La UNEFA Extensión San Casimiro recibió a los estudiantes de nuevo ingreso."
date: 2026-07-15
category: "Académico"
author: "Coordinación Académica"
image: "/images/noticias/bienvenida-nuevo-ingreso.webp"
featured: true
published: true
```

### 17.5 Esquema frontmatter para carreras

```yaml
title: "Ingeniería de Sistemas"
type: "Ingeniería"
status: "Consultar disponibilidad"
duration: "Validar con coordinación"
modality: "Presencial"
summary: "Programa orientado al análisis, diseño, desarrollo y gestión de sistemas de información."
icon: "cpu"
order: 1
```

---

## 18. Interacciones y movimiento

### 18.1 Animaciones permitidas

- Fade suave al cargar secciones.
- Hover en cards con elevación ligera.
- Subrayado animado en enlaces.
- Apertura de menú móvil con transición corta.

### 18.2 Duración

| Tipo | Duración |
|---|---:|
| Hover | 120–180 ms |
| Menú | 200–260 ms |
| Entrada de sección | 280–360 ms |

### 18.3 Reglas

- Respetar `prefers-reduced-motion`.
- No animar textos largos.
- No usar sliders automáticos para información importante.

---

## 19. Estados vacíos y errores

### 19.1 Sin noticias

```txt
Aún no hay noticias publicadas. Vuelve pronto para consultar novedades de la extensión.
```

### 19.2 Sin documentos

```txt
No encontramos documentos para este filtro. Prueba con otra categoría o consulta con la coordinación correspondiente.
```

### 19.3 Error 404

```txt
No encontramos esta página.
Puede que el enlace haya cambiado o que el documento ya no esté disponible.
```

Botones:

- Volver al inicio.
- Ver documentos.
- Contactar a la extensión.

---

## 20. Checklist de implementación

### Identidad

- [ ] Escudo oficial validado.
- [ ] Nombre exacto de la extensión validado.
- [ ] Paleta revisada contra manual oficial, si existe.
- [ ] Favicon generado.

### Contenido

- [ ] Oferta académica vigente confirmada.
- [ ] Autoridades actualizadas.
- [ ] Dirección y teléfonos verificados.
- [ ] Correos institucionales verificados.
- [ ] Documentos con fecha de actualización.

### UI

- [ ] Header responsive.
- [ ] Menú móvil accesible.
- [ ] Botones con estados hover/focus.
- [ ] Cards consistentes.
- [ ] Formularios con validación.

### Accesibilidad

- [ ] Contraste AA.
- [ ] Alt text en imágenes.
- [ ] Navegación por teclado.
- [ ] Jerarquía correcta de headings.

### Performance

- [ ] Imágenes en WebP/AVIF.
- [ ] Lazy loading en imágenes secundarias.
- [ ] CSS mínimo.
- [ ] Fuentes optimizadas.
- [ ] Lighthouse superior a 90 en performance y accesibilidad.

---

## 21. Ejemplo de bloque hero en Astro

```astro
---
const quickLinks = [
  { label: "Nuevo ingreso", href: "/estudiantes/nuevo-ingreso" },
  { label: "Oferta académica", href: "/oferta-academica" },
  { label: "Documentos", href: "/documentos" },
  { label: "Contacto", href: "/contacto" },
];
---

<section class="relative overflow-hidden bg-primary-900 text-white">
  <div class="h-1 w-full bg-gradient-to-r from-yellow-500 via-blue-flag to-red-600"></div>

  <div class="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[1.1fr_.9fr] md:px-8 md:py-24">
    <div>
      <p class="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-yellow-500 ring-1 ring-white/20">
        UNEFA Extensión San Casimiro · Núcleo Aragua
      </p>

      <h1 class="max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
        Formación universitaria al servicio de San Casimiro
      </h1>

      <p class="mt-6 max-w-2xl text-lg leading-8 text-white/85">
        Portal informativo para aspirantes, estudiantes, docentes y comunidad. Consulta oferta académica, documentos, noticias y procesos activos.
      </p>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a class="rounded-lg bg-yellow-500 px-5 py-3 font-bold text-primary-900 hover:bg-yellow-600" href="/oferta-academica">
          Ver oferta académica
        </a>
        <a class="rounded-lg border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10" href="/documentos">
          Consultar documentos
        </a>
      </div>
    </div>

    <div class="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur">
      <h2 class="text-lg font-bold">Accesos rápidos</h2>
      <div class="mt-4 grid gap-3 sm:grid-cols-2">
        {quickLinks.map((link) => (
          <a class="rounded-xl bg-white p-4 font-semibold text-primary-800 shadow-sm hover:shadow-md" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
</section>
```

---

## 22. Criterio final

Este sistema debe sentirse como UNEFA, pero funcionar como un portal moderno: rápido, limpio, navegable y útil. La identidad nacional y académica debe estar presente, pero puesta al servicio del usuario. Primero orientar, después adornar.

**Frase guía:**  
> Institucional en la presencia, claro en la navegación, cercano en el servicio.
