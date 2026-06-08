# Routing del portal UNEFA San Casimiro

Este documento define las rutas públicas del sitio y cuándo usar páginas estáticas, rutas dinámicas o colecciones de contenido.

## Regla principal

Las rutas deben priorizar claridad para estudiantes y personal académico. Una URL debe poder entenderse sin conocer la estructura interna del código.

## Mapa de rutas inicial

| Ruta | Propósito | Fuente recomendada |
| --- | --- | --- |
| `/` | Inicio institucional y accesos principales. | Página Astro estática + resúmenes de colecciones. |
| `/carreras` | Listado de carreras disponibles. | Colección `carreras`. |
| `/carreras/[slug]` | Detalle de una carrera, pensum y datos académicos. | Colección `carreras`. |
| `/recursos` | Guías, exámenes, formatos y descargas. | Colección `recursos`. |
| `/cronograma` | Fechas académicas importantes. | Colección `cronograma`. |
| `/noticias` | Avisos o publicaciones institucionales. | Colección `noticias`, si se mantiene sección editorial. |
| `/noticias/[slug]` | Detalle de noticia o aviso. | Colección `noticias`. |
| `/contacto` | Ubicación, canales y horarios. | Página Astro estática. |
| `/acerca-de` | Información institucional de la extensión. | Página Astro estática. |

## Convenciones de URL

- Usar minúsculas y kebab-case.
- Usar español para rutas públicas: `/carreras`, `/recursos`, `/cronograma`.
- Evitar rutas técnicas como `/posts`, `/items` o `/data`.
- Mantener slugs estables; cambiar un slug rompe enlaces compartidos.

## Cuándo usar rutas dinámicas

Usar rutas dinámicas cuando el contenido provenga de una colección y tenga varias entradas del mismo tipo:

- Carreras.
- Noticias.
- Recursos con página propia, si en el futuro dejan de ser solo descargas.

No usar rutas dinámicas para páginas institucionales únicas como contacto o acerca de.

## Navegación principal

La navegación global debe exponer solo las secciones de mayor valor:

- Inicio.
- Carreras.
- Recursos.
- Cronograma.
- Contacto.

Noticias puede aparecer en navegación secundaria si no es prioridad del portal.
