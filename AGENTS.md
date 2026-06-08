# Contexto de agentes: Portal Web UNEFA San Casimiro

Este archivo es el contrato principal para cualquier agente que trabaje en el portal web de la UNEFA San Casimiro. Antes de crear código, contenido o documentación, leé este archivo y los documentos enlazados en `docs/`.

## Objetivo del proyecto

Construir el portal web institucional de la UNEFA San Casimiro con foco en rendimiento, accesibilidad, claridad académica y mantenimiento a largo plazo.

El sitio debe ayudar a estudiantes, docentes y personal administrativo a encontrar rápidamente información sobre carreras, recursos académicos, cronogramas, avisos y canales de contacto.

## Fuentes de verdad del proyecto

| Documento | Propósito |
| --- | --- |
| `AGENTS.md` | Contrato raíz para agentes: arquitectura, límites y reglas obligatorias. |
| `docs/desing-system.md` | Sistema de diseño visual y tokens Tailwind CSS 4. Mantener este nombre porque es la ruta actual del proyecto. |
| `docs/routing.md` | Rutas públicas, convenciones de URL y páginas esperadas. |
| `docs/content-model.md` | Colecciones de contenido, campos y reglas de datos. |
| `docs/component-guidelines.md` | Reglas para componentes Astro y React. |
| `docs/accessibility.md` | Requisitos mínimos de accesibilidad. |
| `docs/content-style.md` | Voz, tono y escritura del contenido institucional. |
| `docs/implementation-roadmap.md` | Orden recomendado para transformar el starter en portal institucional. |

## Arquitectura obligatoria

El proyecto usa arquitectura de islas con Astro como capa principal.

### Astro: servidor, estático y contenido

Usar componentes `.astro` para:

- Rutas, layouts y navegación global.
- SEO, metadatos, sitemap y RSS si aplica.
- Páginas institucionales estáticas.
- Carreras, pensums, cronogramas, noticias, recursos y páginas de contacto.

Regla: si una UI no necesita estado del cliente ni interacción compleja, debe hacerse en Astro.

### React: solo islas interactivas

Usar React solo cuando exista interactividad real en el cliente:

- Calculadora de promedios.
- Filtros dinámicos de recursos.
- Formularios con validación en cliente.
- Micro-aplicaciones académicas.

Reglas:

- No convertir páginas completas a React.
- No hidratar componentes por comodidad.
- Usar directivas explícitas de Astro (`client:load`, `client:visible`, `client:idle`) solo donde correspondan.
- Si React no está instalado, no asumirlo disponible: documentar la necesidad antes de usarlo.

## Sistema de diseño

El diseño se implementa desde `docs/desing-system.md`.

Reglas obligatorias:

- Usar Tailwind CSS 4 en modo CSS-first.
- Definir tokens en `src/styles/global.css` con `@theme`.
- Priorizar estética institucional, minimalista y académica.
- Evitar ruido visual, sombras pesadas y decoración sin función.
- Usar whitespace, jerarquía tipográfica y contraste accesible.
- Reutilizar patrones como componentes antes de duplicar bloques largos de clases.

## Estructura esperada

La estructura objetivo del código es:

```text
src/
├── assets/
├── components/
│   ├── astro/
│   └── react/
├── content/
│   ├── carreras/
│   ├── cronograma/
│   ├── recursos/
│   └── noticias/
├── layouts/
├── pages/
├── styles/
└── utils/
```

No mover todo de golpe sin una tarea que lo justifique. Migrar de forma incremental y verificable.

## Datos y contenido

Usar Astro Content Collections como fuente principal para contenido académico.

Reglas:

- Validar colecciones con Zod en `src/content.config.ts`.
- Mantener datos separados de presentación.
- Preparar las estructuras para una futura migración a CMS headless.
- No hardcodear listados largos en páginas si pertenecen a colecciones.
- Ver detalles en `docs/content-model.md`.

## Idioma y nombres

- Código, nombres de variables, funciones, tipos, archivos técnicos y comentarios: inglés.
- Contenido visible del portal: español profesional, claro e institucional.
- Documentación interna del proyecto: español profesional.
- No usar jerga regional en UI, documentación pública ni comentarios de código.

## Calidad técnica

- TypeScript estricto es obligatorio.
- Se prohíbe `any` salvo justificación técnica documentada.
- Separar lógica de datos en `src/utils/` cuando una transformación se reutilice o complique el componente.
- Preferir funciones puras para cálculos, fechas, filtros y formateo.
- Mantener componentes pequeños, semánticos y accesibles.

## Flujo de trabajo para agentes

Antes de implementar:

1. Leer `AGENTS.md`.
2. Leer el documento de `docs/` que corresponda a la tarea.
3. Verificar si la tarea pertenece a Astro, React, contenido, diseño o documentación.
4. Hacer el cambio más pequeño que cumpla el objetivo.
5. Ejecutar una verificación apropiada cuando exista comando disponible.

No reescribir archivos completos si basta una modificación puntual.

## Prioridad actual del repo

El proyecto parte de un starter de Astro Blog. La prioridad es transformarlo en portal institucional en este orden:

1. Limpiar contenido demo del starter.
2. Aplicar identidad, metadatos y layout institucional.
3. Crear estructura de colecciones académicas.
4. Construir rutas base.
5. Agregar componentes reutilizables.
6. Incorporar islas React solo cuando haya una necesidad concreta.
