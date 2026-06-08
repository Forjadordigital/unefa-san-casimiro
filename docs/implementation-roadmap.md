# Roadmap de implementación

Este documento define el orden recomendado para convertir el starter actual de Astro en el portal institucional UNEFA San Casimiro.

## Regla principal

Avanzar por capas. Primero se establece la base institucional; después se agregan páginas, datos e interactividad.

## Fase 1: limpiar el starter

- Reemplazar textos demo de Astro en inicio, constantes y README.
- Quitar enlaces sociales de Astro starter.
- Ajustar metadata base del sitio.
- Mantener una versión funcional después de cada cambio.

## Fase 2: base visual e institucional

- Aplicar tokens del sistema de diseño en `src/styles/global.css`.
- Crear layout principal institucional.
- Crear header y footer del portal.
- Definir navegación principal según `docs/routing.md`.

## Fase 3: contenido académico

- Crear schemas en `src/content.config.ts`.
- Crear colecciones `carreras`, `recursos`, `cronograma` y, si aplica, `noticias`.
- Migrar contenido demo de blog solo si tendrá uso institucional; si no, retirarlo.

## Fase 4: rutas base

- Construir inicio institucional.
- Construir listado y detalle de carreras.
- Construir recursos académicos.
- Construir cronograma.
- Construir contacto y acerca de.

## Fase 5: componentes reutilizables

- Extraer cards, secciones, botones y bloques informativos.
- Separar componentes Astro y React en carpetas objetivo.
- Crear utilidades para fechas, filtros y transformaciones repetidas.

## Fase 6: interactividad selectiva

- Agregar React solo si una funcionalidad lo requiere.
- Priorizar filtros de recursos o calculadora académica como primeras islas.
- Hidratar con la directiva menos costosa posible.

## Verificación mínima

Después de cada fase:

- Ejecutar build si el entorno lo permite.
- Revisar navegación principal.
- Verificar que no queden textos demo visibles.
- Revisar semántica básica y estados vacíos.
