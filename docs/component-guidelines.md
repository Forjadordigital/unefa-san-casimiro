# Guía de componentes

Este documento define cómo crear componentes para el portal sin romper la arquitectura de islas.

## Regla principal

Astro es la opción por defecto. React se usa únicamente cuando hay estado o interacción real en el navegador.

## Componentes Astro

Usar `.astro` para:

- Layouts institucionales.
- Header, footer y navegación.
- Cards de carreras, recursos, noticias y fechas.
- Secciones estáticas de landing pages.
- Componentes de SEO y metadatos.

Ubicación objetivo: `src/components/astro/`.

## Componentes React

Usar `.tsx` solo para:

- Filtros dinámicos.
- Calculadoras académicas.
- Formularios con validación interactiva.
- Interfaces que necesitan estado del cliente.

Ubicación objetivo: `src/components/react/`.

Reglas:

- Incluir estados vacío, error y carga cuando aplique.
- Tipar props explícitamente.
- No usar `any`.
- Hidratar desde Astro con la directiva menos agresiva posible.

## Patrones recomendados

| Necesidad | Patrón |
| --- | --- |
| Repetir una tarjeta visual | Crear componente Astro reutilizable. |
| Mostrar lista de colección | Página Astro + componente de card. |
| Filtrar sin recargar | Isla React pequeña. |
| Formatear fechas | Utilidad pura en `src/utils/`. |
| Compartir layout | Layout Astro en `src/layouts/`. |

## Diseño con Tailwind

- Agrupar clases por layout, espaciado, tipografía y color.
- Evitar anidación profunda de `div`.
- Preferir HTML semántico: `section`, `article`, `nav`, `header`, `main`, `footer`.
- Extraer componentes antes de duplicar patrones largos.
- Usar tokens del sistema definido en `docs/desing-system.md`.
