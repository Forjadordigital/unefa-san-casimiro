# Accesibilidad

Este documento define los requisitos mínimos de accesibilidad para el portal UNEFA San Casimiro.

## Regla principal

El sitio debe poder usarse con teclado, lector de pantalla y dispositivos móviles sin perder información ni funcionalidad.

## HTML semántico

- Usar un solo `h1` por página.
- Mantener jerarquía de encabezados sin saltos artificiales.
- Usar `main`, `nav`, `header`, `footer`, `section` y `article` cuando correspondan.
- Usar botones para acciones y enlaces para navegación.

## Navegación y foco

- Todo elemento interactivo debe ser alcanzable por teclado.
- El foco visible no debe eliminarse.
- Los enlaces deben tener texto descriptivo.
- Evitar enlaces genéricos como “clic aquí”.

## Imágenes e íconos

- Toda imagen informativa necesita `alt` descriptivo.
- Imágenes decorativas deben usar `alt=""`.
- Íconos sin texto visible necesitan etiqueta accesible o texto `sr-only`.

## Color y contraste

- No comunicar estados solo con color.
- Mantener contraste suficiente entre texto y fondo.
- Usar los tokens del sistema de diseño para evitar combinaciones improvisadas.

## Formularios

- Cada input debe tener label asociado.
- Los errores deben explicar qué pasó y cómo corregirlo.
- Validaciones en cliente no reemplazan validaciones de datos o backend cuando existan.

## Contenido dinámico

Para islas React:

- Mostrar estado vacío cuando no haya resultados.
- Mostrar estado de error cuando una operación falle.
- Evitar cambios inesperados de foco.
- Anunciar resultados importantes si la interacción modifica contenido visible.
