# Requerimientos del Home  
## Portal UNEFA Extensión San Casimiro

**Proyecto:** Portal web institucional UNEFA Extensión San Casimiro, Núcleo Aragua  
**Documento:** Requerimientos funcionales, visuales y de contenido para la página de inicio  
**Versión:** 1.0  
**Fecha:** 2026-06-08  
**Archivo recomendado:** `docs/home-requirements.md`  
**Dependencia obligatoria:** `docs/design-system.md`

---

## 1. Propósito del documento

Este documento define todos los requerimientos que debe cumplir el **Home** del portal web de la **UNEFA Extensión San Casimiro**, ubicada en San Casimiro, estado Aragua, Venezuela.

El Home debe funcionar como la puerta principal del sitio: orientar a aspirantes, estudiantes activos, docentes, personal administrativo, egresados y comunidad local hacia la información más importante de la extensión.

El diseño, componentes, colores, tipografía, espaciados, lenguaje visual, comportamiento responsive y estilo editorial deben basarse en el sistema de diseño del proyecto ubicado en:

```txt
docs/design-system.md
```

No se deben crear estilos visuales nuevos que contradigan el sistema de diseño. Cualquier nueva variante debe documentarse y justificarse.

---

## 2. Objetivo general del Home

Construir una página de inicio institucional, clara, rápida y útil que comunique:

- Identidad oficial UNEFA.
- Pertenencia al Núcleo Aragua y a la Extensión San Casimiro.
- Oferta académica vigente.
- Noticias, avisos y procesos importantes.
- Accesos rápidos para estudiantes y aspirantes.
- Información de contacto y ubicación.
- Vida universitaria local.

La página no debe sentirse como un simple mural de anuncios. Debe ser una brújula institucional: ordenada, confiable y directa.

---

## 3. Principios obligatorios

### 3.1 Mobile first

El Home debe diseñarse primero para teléfonos desde **360px de ancho**. La versión desktop debe ampliar, ordenar y respirar mejor, no cambiar la lógica principal de navegación.

### 3.2 Claridad sobre decoración

La estética debe acompañar la información. No se deben usar elementos visuales que dificulten leer fechas, carreras, botones o comunicados.

### 3.3 Identidad institucional

El Home debe mantener una imagen sobria, académica y oficial, alineada con UNEFA. Se permite una ejecución moderna, pero sin perder formalidad.

### 3.4 Contexto local

La extensión San Casimiro debe tener presencia visible: nombre, ubicación, fotografías reales cuando existan, actividades locales, contacto y vida universitaria.

### 3.5 Contenido verificable

Toda noticia, aviso o proceso debe mostrar fecha de publicación o actualización. Nada de comunicados zombis flotando sin contexto.

---

## 4. Dependencia con el sistema de diseño

El Home debe consumir directamente los lineamientos definidos en `docs/design-system.md`.

### 4.1 Elementos que deben respetarse

- Paleta de colores institucional.
- Uso del azul institucional como color dominante.
- Uso moderado del amarillo y rojo como acentos.
- Tipografías definidas.
- Escala tipográfica.
- Sistema de espaciado.
- Bordes, radios y sombras.
- Estilos de botones.
- Estilos de tarjetas.
- Estilos de formularios y enlaces.
- Estilo editorial institucional.
- Reglas de accesibilidad.
- Estructura responsive.

### 4.2 Regla de no duplicación

Este documento no debe reemplazar el sistema de diseño. Solo define cómo debe aplicarse en el Home.

Si una decisión visual ya existe en `docs/design-system.md`, debe reutilizarse. Si no existe, puede proponerse como extensión, pero debe agregarse luego al sistema de diseño si se aprueba.

---

## 5. Público objetivo del Home

El Home debe resolver necesidades para los siguientes perfiles:

### 5.1 Aspirantes

Necesitan saber:

- Qué carreras se ofrecen.
- Cómo inscribirse o preinscribirse.
- Cuáles son los requisitos.
- Dónde queda la extensión.
- Cómo contactar a la sede.
- Cuándo abren procesos académicos.

### 5.2 Estudiantes activos

Necesitan encontrar rápido:

- Noticias y avisos.
- Calendario académico.
- Horarios.
- Documentos frecuentes.
- Contactos administrativos.
- Enlaces a sistemas institucionales.

### 5.3 Docentes y personal administrativo

Necesitan acceso a:

- Comunicados oficiales.
- Documentos internos públicos.
- Calendario de actividades.
- Contactos de coordinación.
- Noticias académicas.

### 5.4 Comunidad local

Necesita conocer:

- Actividades abiertas.
- Programas académicos.
- Jornadas, charlas y eventos.
- Ubicación y canales de contacto.

---

## 6. Estructura general del Home

El Home debe tener las siguientes secciones, en este orden recomendado:

1. Header institucional.
2. Hero principal.
3. Accesos rápidos.
4. Avisos importantes.
5. Oferta académica.
6. Noticias y actividades recientes.
7. Sección para aspirantes.
8. Vida universitaria / galería local.
9. Calendario o próximos eventos.
10. Ubicación y contacto.
11. Enlaces institucionales.
12. Footer institucional.

El orden puede ajustarse solo si existe una razón de UX clara. Por defecto, esta estructura debe respetarse.

---

# 7. Requerimientos por sección

---

## 7.1 Header institucional

### Objetivo

Identificar el portal y ofrecer navegación principal clara.

### Contenido obligatorio

- Escudo o logo oficial UNEFA.
- Texto institucional:

```txt
UNEFA
Extensión San Casimiro
Núcleo Aragua
```

- Navegación principal.
- Botón o enlace destacado para contacto o inscripción, si hay proceso activo.
- Menú hamburguesa en móvil.

### Navegación mínima

```txt
Inicio
La Extensión
Oferta Académica
Noticias
Aspirantes
Estudiantes
Contacto
```

### Navegación opcional

```txt
Documentos
Calendario
Galería
Autoridades
```

### Comportamiento

- En desktop, el menú debe mostrarse horizontalmente.
- En móvil, debe colapsar en menú hamburguesa.
- El header debe mantenerse limpio, sin exceso de enlaces.
- Puede ser sticky, siempre que no robe demasiado espacio en móvil.

### Especificaciones visuales

- Fondo recomendado: azul institucional definido en `docs/design-system.md`.
- Texto en blanco o neutro claro.
- El enlace activo debe tener indicador visual.
- El CTA debe usar el estilo de botón primario o secundario definido en el sistema de diseño.

### Criterios de aceptación

- El usuario identifica inmediatamente que está en el portal de UNEFA San Casimiro.
- El menú es usable en 360px.
- El logo no se deforma.
- El contraste cumple accesibilidad AA.

---

## 7.2 Hero principal

### Objetivo

Comunicar de forma inmediata la identidad del portal y dirigir al usuario hacia las acciones principales.

### Contenido obligatorio

- Título principal:

```txt
UNEFA Extensión San Casimiro
```

- Subtítulo sugerido:

```txt
Formación universitaria al servicio de San Casimiro, Aragua y Venezuela.
```

- Texto breve de apoyo, máximo 2 líneas.
- Imagen institucional o fotografía de la sede/comunidad académica.
- Botones principales.

### CTAs recomendados

Botón primario:

```txt
Ver oferta académica
```

Botón secundario:

```txt
Información para aspirantes
```

CTA opcional si hay proceso activo:

```txt
Proceso de inscripción abierto
```

### Variante si no existe foto de calidad

Usar fondo institucional con gradiente azul y patrones sutiles definidos en el sistema de diseño. No usar imágenes pixeladas, estiradas o con texto incrustado.

### Especificaciones visuales

- Desktop: composición de dos columnas, texto a la izquierda e imagen a la derecha.
- Móvil: texto primero, imagen debajo o fondo visual simplificado.
- El hero no debe ocupar más de lo necesario. Debe presentar, no secuestrar la página.

### Criterios de aceptación

- El usuario sabe dónde está en menos de 3 segundos.
- Hay una acción principal clara.
- El texto es legible sobre cualquier fondo.
- La imagen no compromete la carga inicial.

---

## 7.3 Accesos rápidos

### Objetivo

Dar entrada inmediata a las tareas más frecuentes.

### Contenido obligatorio

Mínimo 4 accesos rápidos:

```txt
Oferta académica
Aspirantes
Noticias y avisos
Ubicación
```

### Accesos recomendados adicionales

```txt
Calendario académico
Documentos
Horarios
Contacto
```

### Formato

Usar tarjetas compactas con:

- Ícono simple.
- Título corto.
- Descripción de una línea.
- Enlace o comportamiento clickeable completo.

### Ejemplo

```txt
Oferta académica
Conoce las carreras y programas disponibles en la extensión.
```

### Especificaciones visuales

- Móvil: grilla de 1 columna o 2 columnas si el ancho lo permite.
- Tablet: 2 columnas.
- Desktop: 4 columnas.
- Usar cards del sistema de diseño.
- Evitar íconos decorativos excesivos.

### Criterios de aceptación

- Las tarjetas son fáciles de tocar en móvil.
- Cada acceso lleva a una página o sección real.
- No hay enlaces muertos.

---

## 7.4 Avisos importantes

### Objetivo

Mostrar información urgente o prioritaria sin saturar el Home.

### Contenido obligatorio

- Título de sección:

```txt
Avisos importantes
```

- Lista de 1 a 3 avisos destacados.
- Fecha de publicación o actualización.
- Categoría del aviso.
- Enlace para ver más.

### Tipos de aviso

```txt
Inscripción
Académico
Administrativo
Evento
Emergente
Comunicado
```

### Reglas

- Máximo 3 avisos visibles en el Home.
- Los avisos vencidos deben ocultarse o moverse al archivo.
- Si un aviso tiene fecha límite, debe mostrarse claramente.
- No usar rojo para todo. El rojo se reserva para urgencias reales.

### Estructura de cada aviso

```txt
Categoría
Título del aviso
Resumen breve
Fecha de publicación
Fecha límite, si aplica
Botón: Leer aviso
```

### Criterios de aceptación

- El usuario entiende qué aviso es urgente y cuál es informativo.
- Todos los avisos tienen fecha.
- Existe enlace a listado completo de avisos.

---

## 7.5 Oferta académica

### Objetivo

Presentar de forma clara los programas académicos de la extensión.

### Contenido obligatorio

- Título de sección:

```txt
Oferta académica
```

- Texto introductorio breve.
- Cards por carrera o programa.
- Botón para ver toda la oferta.

### Programas de referencia inicial

Validar internamente antes de publicar. Como base de trabajo se consideran:

```txt
Administración y Gestión Municipal
Análisis y Diseño de Sistemas
Economía Social
Ingeniería de Sistemas
Ingeniería Mecánica
```

### Datos mínimos por programa

Cada card debe incluir:

- Nombre del programa.
- Tipo o nivel, si aplica.
- Modalidad, si se confirma.
- Breve descripción.
- Enlace a detalle.

### Ejemplo de card

```txt
Ingeniería de Sistemas
Formación orientada al análisis, diseño, desarrollo y gestión de soluciones tecnológicas.
Ver programa
```

### Reglas

- No publicar carreras sin validación institucional.
- Si la oferta cambia, actualizar fecha de revisión.
- Evitar descripciones inventadas demasiado específicas si no están aprobadas.

### Criterios de aceptación

- Las carreras son visibles sin navegar demasiado.
- Cada carrera tiene enlace a su detalle o a una página de oferta académica.
- Hay nota de validación o fecha de actualización.

---

## 7.6 Noticias y actividades recientes

### Objetivo

Mostrar actividad institucional real y mantener vivo el portal.

### Contenido obligatorio

- Título de sección:

```txt
Noticias y actividades
```

- Últimas 3 noticias o actividades.
- Fecha visible.
- Categoría.
- Imagen o fallback institucional.
- Enlace a detalle.
- Botón para ver todas las noticias.

### Categorías sugeridas

```txt
Académica
Institucional
Cultural
Deportiva
Comunidad
Investigación
Extensión universitaria
```

### Estructura de cada noticia

```txt
Imagen
Categoría
Título
Resumen breve
Fecha
Leer más
```

### Reglas editoriales

- Los títulos deben ser claros, no burocráticos.
- El resumen debe explicar qué ocurrió y por qué importa.
- No publicar imágenes borrosas o deformadas.
- Toda noticia debe tener fecha.

### Criterios de aceptación

- Se ven máximo 3 noticias en el Home.
- Todas tienen fecha y categoría.
- El enlace “Ver todas” funciona.

---

## 7.7 Sección para aspirantes

### Objetivo

Orientar a nuevos ingresos y personas interesadas en estudiar en la extensión.

### Contenido obligatorio

- Título sugerido:

```txt
¿Quieres estudiar en UNEFA San Casimiro?
```

- Texto breve explicando qué puede encontrar el aspirante.
- Lista de pasos o enlaces clave.
- CTA principal.

### Contenido recomendado

```txt
1. Conoce la oferta académica.
2. Revisa requisitos de ingreso.
3. Consulta procesos activos.
4. Contacta a la extensión.
```

### CTA recomendado

```txt
Guía para aspirantes
```

### CTA secundario

```txt
Contactar coordinación
```

### Especificaciones visuales

- Puede usar fondo azul claro o bloque destacado.
- Debe tener jerarquía visual mayor que una card normal.
- Debe sentirse como una ruta, no como un cartel pegado a última hora.

### Criterios de aceptación

- Un aspirante sabe cuál es el siguiente paso.
- No se prometen procesos de inscripción si no están activos.
- La información dirige a páginas concretas.

---

## 7.8 Vida universitaria / galería local

### Objetivo

Mostrar la actividad humana y comunitaria de la extensión.

### Contenido obligatorio

- Título de sección:

```txt
Vida universitaria en San Casimiro
```

- Breve texto de contexto.
- Galería de 3 a 6 imágenes o cards de actividades.

### Contenido recomendado

- Actividades académicas.
- Jornadas comunitarias.
- Eventos culturales.
- Estudiantes en espacios de formación.
- Fachada o espacios de la sede.

### Reglas para imágenes

- Usar fotos reales cuando sea posible.
- Optimizar peso y tamaño.
- Agregar texto alternativo descriptivo.
- No publicar fotos sensibles sin autorización.
- Evitar imágenes con documentos personales visibles.

### Fallback si no hay imágenes

Usar cards institucionales con íconos y fondos suaves definidos en `docs/design-system.md`.

### Criterios de aceptación

- La sección refuerza identidad local.
- Las imágenes tienen alt text.
- No afecta negativamente el rendimiento.

---

## 7.9 Calendario o próximos eventos

### Objetivo

Informar fechas relevantes para estudiantes, docentes y aspirantes.

### Contenido obligatorio

- Título de sección:

```txt
Próximas actividades
```

- Lista de próximos 3 eventos.
- Fecha.
- Título.
- Tipo de evento.
- Lugar o modalidad.
- Enlace si aplica.

### Tipos de evento

```txt
Académico
Administrativo
Cultural
Comunitario
Inscripción
Evaluación
Charla
Jornada
```

### Estructura de evento

```txt
Día y mes
Título del evento
Lugar / modalidad
Hora, si aplica
```

### Reglas

- No mostrar eventos vencidos como próximos.
- Si no hay eventos cargados, mostrar estado vacío elegante.

### Estado vacío sugerido

```txt
No hay actividades próximas publicadas por el momento.
Consulta nuevamente o revisa nuestros avisos institucionales.
```

### Criterios de aceptación

- El componente maneja eventos y estado vacío.
- Las fechas son claras.
- La información se puede mantener fácilmente desde datos estructurados.

---

## 7.10 Ubicación y contacto

### Objetivo

Facilitar que el usuario ubique y contacte la extensión.

### Contenido obligatorio

- Título de sección:

```txt
Ubicación y contacto
```

- Dirección física.
- Municipio, estado y país.
- Mapa embebido o enlace a mapa.
- Teléfono, correo o canal oficial, si existe.
- Horario de atención, si se confirma.
- Redes sociales oficiales, si se confirman.

### Dirección base de referencia

Validar antes de publicar:

```txt
Sector Dos Quebradas, Calle Monseñor Lucas Castillo, edificio UNEFA, San Casimiro, estado Aragua, Venezuela.
```

### Reglas

- No publicar números personales sin autorización.
- Priorizar canales oficiales.
- Si se usa mapa embebido, debe ser responsive.
- Debe existir enlace externo para abrir en Google Maps o servicio equivalente.

### Criterios de aceptación

- El usuario puede copiar o abrir la dirección.
- El mapa no rompe el layout móvil.
- Los contactos publicados están validados.

---

## 7.11 Enlaces institucionales

### Objetivo

Conectar el portal local con recursos oficiales de UNEFA y sistemas relacionados.

### Contenido recomendado

```txt
Portal principal UNEFA
Secretaría / Control de estudios, si aplica
OPSU, si aplica
Correo institucional, si aplica
Aula virtual, si aplica
Biblioteca o repositorio, si aplica
```

### Reglas

- Solo enlazar sitios oficiales o validados.
- Los enlaces externos deben abrir en una nueva pestaña si sacan al usuario del portal.
- Deben tener etiqueta accesible.

### Criterios de aceptación

- Los enlaces están actualizados.
- No hay enlaces rotos.
- El usuario entiende cuándo sale del portal local.

---

## 7.12 Footer institucional

### Objetivo

Cerrar la página con identidad, navegación secundaria y datos de contacto.

### Contenido obligatorio

- Logo o escudo UNEFA.
- Nombre completo:

```txt
Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional Bolivariana
Extensión San Casimiro - Núcleo Aragua
```

- Dirección.
- Enlaces principales.
- Enlaces legales o institucionales.
- Redes oficiales, si existen.
- Año actual dinámico.

### Navegación footer recomendada

```txt
Inicio
La Extensión
Oferta Académica
Noticias
Aspirantes
Contacto
```

### Texto legal sugerido

```txt
© {año} UNEFA Extensión San Casimiro. Portal informativo institucional.
```

### Criterios de aceptación

- El footer es legible en móvil.
- No duplica de forma caótica todo el sitio.
- La identidad institucional queda clara.

---

# 8. Requerimientos funcionales

## 8.1 Navegación

- El Home debe enlazar correctamente a todas las páginas principales.
- Todos los botones y cards clickeables deben tener estado hover, focus y active.
- En móvil, el menú debe abrirse y cerrarse de forma accesible.
- El usuario debe poder navegar con teclado.

## 8.2 Datos dinámicos

El Home debe estar preparado para consumir datos desde archivos estructurados o CMS.

### Datos recomendados

```txt
src/content/news/
src/content/events/
src/content/programs/
src/content/notices/
src/data/quick-links.ts
src/data/contact.ts
```

### Reglas

- No hardcodear noticias, eventos o avisos directamente en el componente si se usará CMS o colecciones de contenido.
- Los datos estáticos institucionales pueden estar en archivos de configuración.
- Cada colección debe tener esquema validado.

## 8.3 Estados vacíos

Deben existir estados vacíos para:

- Noticias.
- Eventos.
- Avisos.
- Galería.

Ejemplo:

```txt
Aún no hay noticias publicadas.
```

No dejar espacios rotos, cards fantasmas o errores visibles.

## 8.4 Estados de carga

Si se cargan datos de forma dinámica en cliente:

- Mostrar skeleton o estado de carga discreto.
- Evitar saltos bruscos de layout.
- Priorizar render estático cuando sea posible.

## 8.5 Manejo de errores

Si falla una fuente externa, el Home debe seguir funcionando. El portal no puede desmayarse porque un iframe decidió tomarse vacaciones.

---

# 9. Requerimientos de contenido

## 9.1 Tono editorial

El tono debe ser:

- Institucional.
- Claro.
- Cercano.
- Respetuoso.
- Académico.
- Sin exceso de jerga administrativa.

## 9.2 Reglas de redacción

- Usar frases directas.
- Evitar párrafos largos.
- Evitar mayúsculas sostenidas salvo siglas oficiales.
- No usar signos de exclamación en comunicados institucionales.
- Fechas en formato claro:

```txt
8 de junio de 2026
```

- Evitar abreviaturas no explicadas.

## 9.3 Palabras recomendadas

```txt
formación
comunidad universitaria
oferta académica
aspirantes
estudiantes
extensión
Núcleo Aragua
San Casimiro
actividades académicas
servicio público
```

## 9.4 Palabras o prácticas a evitar

- “Haz click aquí” como único texto de enlace.
- “Próximamente” sin contexto.
- “Información importante” sin título específico.
- Imágenes con texto como reemplazo de contenido HTML.
- PDFs publicados sin descripción.

---

# 10. Requerimientos visuales

## 10.1 Layout

### Ancho máximo

Usar el ancho máximo definido en `docs/design-system.md`. Si no está definido, usar:

```txt
max-width: 1200px
```

### Espaciado de secciones

- Móvil: separación vertical entre secciones de 48px a 64px.
- Desktop: separación vertical entre secciones de 72px a 96px.

### Grid recomendado

- Móvil: 1 columna.
- Tablet: 2 columnas.
- Desktop: 3 o 4 columnas según componente.

## 10.2 Jerarquía visual

Cada sección debe tener:

- Título claro.
- Texto introductorio breve si aplica.
- Contenido principal.
- Acción secundaria si aplica.

## 10.3 Botones

Usar variantes definidas en `docs/design-system.md`:

- Primario.
- Secundario.
- Ghost / enlace.
- Peligro o alerta solo para urgencias reales.

### Reglas

- No usar más de un CTA primario por sección.
- Los botones deben tener área táctil mínima de 44px de alto.
- Los botones deben tener estado focus visible.

## 10.4 Cards

Usar cards para:

- Accesos rápidos.
- Programas académicos.
- Noticias.
- Eventos.
- Avisos.

### Reglas

- Mantener alturas equilibradas cuando estén en grilla.
- Evitar sombras exageradas.
- Usar bordes y radios del sistema de diseño.
- Toda card clickeable debe tener indicador visual.

## 10.5 Imágenes

### Formatos recomendados

```txt
.webp
.avif
.jpg optimizado como fallback
```

### Tamaños recomendados

- Hero desktop: 1200px de ancho máximo para imagen fuente.
- Cards de noticia: 800px x 450px o ratio 16:9.
- Galería: 800px x 600px o ratio consistente.

### Reglas

- Usar lazy loading fuera del hero.
- El hero puede tener imagen prioritaria si es crítica.
- Todas las imágenes deben tener `alt` descriptivo.
- No incrustar texto importante dentro de imágenes.

---

# 11. Requerimientos responsive

## 11.1 Breakpoints recomendados

Usar los breakpoints definidos en `docs/design-system.md`. Si el proyecto usa Tailwind, respetar sus breakpoints base o los extendidos del sistema.

Referencia operativa:

```txt
360px: móvil mínimo soportado
640px: móvil grande
768px: tablet
1024px: laptop
1280px: desktop amplio
```

## 11.2 Comportamiento móvil

- Header compacto.
- Hero en una columna.
- Cards en una columna o dos si hay espacio suficiente.
- Botones con ancho completo cuando mejore la usabilidad.
- Menú hamburguesa accesible.
- Evitar tablas en el Home.

## 11.3 Comportamiento desktop

- Header horizontal.
- Hero en dos columnas.
- Accesos rápidos en 4 columnas.
- Noticias en 3 columnas.
- Oferta académica en grilla flexible.
- Contacto y mapa en dos columnas.

---

# 12. Requerimientos de accesibilidad

El Home debe cumplir como mínimo con criterios WCAG 2.1 AA.

## 12.1 Obligatorio

- Contraste suficiente entre texto y fondo.
- Navegación completa por teclado.
- Estados focus visibles.
- Textos alternativos en imágenes.
- Estructura semántica correcta.
- Uso correcto de headings.
- Botones y enlaces diferenciados.
- No depender solo del color para comunicar estados.

## 12.2 Headings

Debe existir un solo `h1` en el Home:

```txt
UNEFA Extensión San Casimiro
```

Las secciones principales deben usar `h2`.

Las cards pueden usar `h3`.

## 12.3 ARIA

Usar ARIA solo cuando HTML semántico no sea suficiente. No decorar el código con ARIA como si fueran medallitas de uniforme.

---

# 13. Requerimientos SEO

## 13.1 Meta title

```txt
UNEFA Extensión San Casimiro | Núcleo Aragua
```

## 13.2 Meta description

```txt
Portal institucional de la UNEFA Extensión San Casimiro, Núcleo Aragua. Información académica, noticias, aspirantes, estudiantes, ubicación y contacto.
```

## 13.3 Open Graph

Debe incluir:

```txt
og:title
og:description
og:image
og:type = website
og:url
```

## 13.4 Datos estructurados recomendados

Usar JSON-LD tipo:

```txt
CollegeOrUniversity
```

Con datos validados:

- Nombre.
- Dirección.
- URL.
- Logo.
- Redes oficiales, si existen.

## 13.5 URLs internas esperadas

```txt
/
/la-extension
/oferta-academica
/noticias
/noticias/[slug]
/aspirantes
/estudiantes
/contacto
```

---

# 14. Requerimientos de rendimiento

## 14.1 Objetivos mínimos

- Lighthouse Performance: 90+ en móvil.
- Lighthouse Accessibility: 95+.
- Lighthouse Best Practices: 95+.
- Lighthouse SEO: 95+.

## 14.2 Reglas

- Evitar sliders pesados.
- Optimizar imágenes.
- No cargar librerías grandes para interacciones simples.
- Priorizar Astro Islands solo donde haga falta interactividad.
- Evitar JavaScript innecesario en el Home.

## 14.3 Core Web Vitals

Objetivos:

```txt
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

---

# 15. Requerimientos técnicos para Astro

## 15.1 Ruta esperada

```txt
src/pages/index.astro
```

## 15.2 Componentes sugeridos

```txt
src/components/home/HomeHero.astro
src/components/home/QuickLinks.astro
src/components/home/ImportantNotices.astro
src/components/home/AcademicOffer.astro
src/components/home/LatestNews.astro
src/components/home/AspirantsBlock.astro
src/components/home/CampusLife.astro
src/components/home/UpcomingEvents.astro
src/components/home/LocationContact.astro
src/components/layout/SiteHeader.astro
src/components/layout/SiteFooter.astro
```

## 15.3 Datos sugeridos

```txt
src/data/site.ts
src/data/contact.ts
src/data/quick-links.ts
src/content/config.ts
src/content/news/
src/content/events/
src/content/programs/
src/content/notices/
```

## 15.4 Uso de Tailwind

El Home debe usar las clases utilitarias de Tailwind alineadas con los tokens del sistema de diseño. No usar colores arbitrarios salvo casos justificados.

Preferir:

```txt
bg-primary-900
text-neutral-800
border-neutral-200
```

Evitar:

```txt
bg-[#071B49]
text-[#123]
```

Salvo que el sistema de tokens aún no esté configurado.

---

# 16. Modelo de datos recomendado

## 16.1 Aviso

```ts
export type Notice = {
  title: string;
  slug: string;
  summary: string;
  category: 'Inscripción' | 'Académico' | 'Administrativo' | 'Evento' | 'Comunicado' | 'Emergente';
  publishedAt: string;
  expiresAt?: string;
  priority: 'normal' | 'high' | 'urgent';
  href: string;
};
```

## 16.2 Noticia

```ts
export type NewsItem = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  publishedAt: string;
  image?: string;
  imageAlt?: string;
};
```

## 16.3 Evento

```ts
export type EventItem = {
  title: string;
  slug?: string;
  date: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  type: string;
  href?: string;
};
```

## 16.4 Programa académico

```ts
export type AcademicProgram = {
  name: string;
  slug: string;
  level?: string;
  modality?: string;
  summary: string;
  isActive: boolean;
  lastReviewedAt: string;
};
```

## 16.5 Acceso rápido

```ts
export type QuickLink = {
  title: string;
  description: string;
  href: string;
  icon?: string;
};
```

---

# 17. Contenido inicial sugerido

## 17.1 Hero

```txt
Título: UNEFA Extensión San Casimiro
Subtítulo: Formación universitaria al servicio de San Casimiro, Aragua y Venezuela.
Texto: Conoce nuestra oferta académica, actividades institucionales, avisos para estudiantes y canales de contacto.
Botón primario: Ver oferta académica
Botón secundario: Información para aspirantes
```

## 17.2 Accesos rápidos

```txt
Oferta académica: Conoce las carreras y programas disponibles.
Aspirantes: Revisa información de ingreso y requisitos.
Noticias y avisos: Mantente al día con comunicados y actividades.
Ubicación: Encuentra nuestra sede en San Casimiro.
```

## 17.3 Aspirantes

```txt
¿Quieres estudiar en UNEFA San Casimiro?
Encuentra información sobre programas académicos, requisitos, procesos de ingreso y canales de orientación para nuevos aspirantes.
```

## 17.4 Contacto

```txt
Estamos en San Casimiro, estado Aragua. Consulta nuestra ubicación y canales oficiales de atención para recibir orientación académica o administrativa.
```

---

# 18. Criterios de aceptación globales

El Home se considera listo cuando cumple todo lo siguiente:

- Respeta `docs/design-system.md`.
- Tiene header y footer institucionales.
- Tiene hero claro con CTA principal.
- Muestra accesos rápidos funcionales.
- Muestra avisos importantes con fecha.
- Presenta oferta académica validada.
- Muestra noticias o estado vacío.
- Tiene sección para aspirantes.
- Muestra vida universitaria o fallback.
- Muestra próximos eventos o estado vacío.
- Incluye ubicación y contacto.
- Es responsive desde 360px.
- Cumple accesibilidad básica WCAG AA.
- Tiene metadata SEO completa.
- Optimiza imágenes.
- No tiene enlaces rotos.
- No publica información no validada como definitiva.

---

# 19. Checklist para desarrollo

## Antes de diseñar

- [ ] Revisar `docs/design-system.md`.
- [ ] Confirmar logo/escudo oficial a usar.
- [ ] Confirmar carreras vigentes.
- [ ] Confirmar dirección exacta.
- [ ] Confirmar canales de contacto.
- [ ] Confirmar redes sociales oficiales.
- [ ] Definir fuente de datos: Markdown, JSON, CMS o API.

## Durante desarrollo

- [ ] Crear `src/pages/index.astro`.
- [ ] Crear componentes del Home.
- [ ] Crear datos estructurados.
- [ ] Implementar responsive mobile first.
- [ ] Implementar estados vacíos.
- [ ] Optimizar imágenes.
- [ ] Revisar contraste.
- [ ] Revisar navegación por teclado.

## Antes de publicar

- [ ] Probar en 360px, 768px, 1024px y 1280px.
- [ ] Pasar Lighthouse.
- [ ] Validar enlaces.
- [ ] Validar metadata SEO.
- [ ] Revisar ortografía.
- [ ] Confirmar aprobación institucional del contenido.

---

# 20. Fuera de alcance del Home

El Home no debe resolver completamente:

- Sistema de inscripción.
- Login de estudiantes.
- Gestión administrativa interna.
- Aula virtual.
- Carga masiva de documentos.
- Directorio completo de autoridades.
- Archivo histórico completo de noticias.

Puede enlazar a estos módulos si existen, pero no debe intentar hacer de todo. El Home es entrada, no laberinto con uniforme.

---

# 21. Notas para agentes de IA o desarrolladores

Cuando se trabaje sobre el Home:

1. Leer primero `docs/design-system.md`.
2. No inventar paletas, sombras, tipografías o estilos nuevos.
3. Priorizar claridad y utilidad.
4. Mantener el contenido institucional y verificable.
5. No publicar información académica sin validación.
6. Diseñar primero para móvil.
7. Usar componentes reutilizables.
8. Separar contenido de presentación.
9. Documentar cualquier decisión nueva.
10. Mantener el portal sobrio, moderno y local.

---

## 22. Resultado esperado

El resultado final debe ser un Home institucional moderno, rápido y fácil de mantener, que conecte la identidad nacional de UNEFA con la realidad local de la Extensión San Casimiro.

Debe sentirse oficial, pero no pesado; académico, pero no críptico; local, pero conectado con la institución madre. Una página que ayude al usuario a encontrar lo que necesita sin mandarlo a pelear contra menús infinitos y PDFs perdidos en la maleza digital.
