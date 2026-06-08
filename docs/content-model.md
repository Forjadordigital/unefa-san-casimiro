# Modelo de contenido

Este documento define cómo organizar el contenido académico usando Astro Content Collections.

## Regla principal

El contenido debe vivir en colecciones cuando represente información repetible, validable o preparada para migrar a un CMS.

## Colecciones objetivo

| Colección | Propósito | Formato sugerido |
| --- | --- | --- |
| `carreras` | Programas académicos y pensums. | MDX para contenido largo. |
| `recursos` | Guías, exámenes, formatos y descargas. | JSON o MDX según complejidad. |
| `cronograma` | Fechas académicas importantes. | JSON/YAML o entradas Markdown simples. |
| `noticias` | Avisos institucionales y publicaciones. | MD/MDX. |

## Campos mínimos

### `carreras`

- `title`: nombre público de la carrera.
- `slug`: identificador estable en URL.
- `description`: resumen breve.
- `degreeType`: tipo de programa o título.
- `duration`: duración estimada.
- `status`: activa, pausada o próxima.
- `updatedAt`: fecha de última revisión.

### `recursos`

- `title`: nombre del recurso.
- `category`: `Guía`, `Examen`, `Formato`, `Reglamento` u otra categoría validada.
- `career`: lista de carreras relacionadas.
- `downloadUrl`: URL válida o ruta pública del archivo.
- `updatedAt`: fecha de actualización.

### `cronograma`

- `title`: nombre del evento.
- `startDate`: fecha de inicio.
- `endDate`: fecha de cierre, si aplica.
- `category`: inscripción, evaluación, administrativo, académico.
- `description`: explicación breve.

### `noticias`

- `title`: título de la publicación.
- `description`: resumen para cards y SEO.
- `pubDate`: fecha de publicación.
- `updatedDate`: fecha de actualización opcional.
- `heroImage`: imagen opcional.

## Reglas de validación

- Definir schemas con Zod en `src/content.config.ts`.
- Usar fechas coercionadas a `Date` cuando Astro lo permita.
- Evitar campos opcionales si la UI depende de ellos para renderizar correctamente.
- Validar URLs de descarga con `z.string().url()` cuando sean externas.

## Separación de responsabilidades

- Las colecciones guardan datos y contenido.
- Las páginas deciden qué datos mostrar.
- Los componentes solo presentan información recibida por props.
- Las transformaciones reutilizables viven en `src/utils/`.
