# Congreso — Landing general (captación en congresos)

Landing de captación de leads para congresos médicos. Look and feel heredado de las landings por especialidad (ginecología / radiología / cardiología), pero con hero de formulario embebido y sin verticalizar por especialidad.

## Estado

🟡 **En construcción** — preview funcional con placeholders. Pendiente: copy final de equipos, iconos, textos de FAQ, wiring del form de HubSpot y variante `*-modulo.html` para deploy.

## Estructura de la página

1. **Header** — solo logo (sin navbar/hamburguesa).
2. **Hero split** — título + subtítulo a la izquierda · formulario a la derecha (Nombre y Apellidos, Correo, Teléfono, Edad, Congreso, botón "Siguiente"). Fondo = gradiente de marca (placeholder, sustituir por imagen/video).
3. **¿Cómo funciona el leasing médico?** — texto izquierda + rejilla de 4 imágenes (placeholders).
4. **Comparativa** — "Inversión inteligente para tu práctica médica" + tabla `leasing-vs-compra`.
5. **Equipos** — cards nuevas: imagen arriba + icono + título + CTA (placeholders; los iconos los define el cliente). Carrusel horizontal en mobile.
6. **Testimonios** — los 3 médicos de las otras landings (Ernesto Chávez, Lorena Gómez, Gerardo Campos) con posters + modal de video. Carrusel en mobile.
7. **FAQ** — acordeón (respuestas en placeholder).

## Assets (`assets/`)

Reutilizados de cardiología:

- `logo-lease4u-positivo.webp` — logo del header ✅ cableado
- `leasing-vs-compra.png` / `leasing-vs-compra-mobile.png` — tabla comparativa ✅ cableado
- `testi-gerardo-poster.jpg` / `testi-lorena-poster.jpg` / `testi-ernesto-poster.jpg` — posters de testimonios ✅ cableado
- `contrato-alquiler-equipos-medicos.png` — foto de médicos (disponible por si se usa en el form)

**Videos de testimonios (.mp4):** NO están en el repo (235 MB, viven en el File Manager de HubSpot). En `index.html` apuntan al CDN:
`https://19570866.fs1.hubspotusercontent-na1.net/hubfs/19570866/testi-{gerardo,lorena,ernesto}.mp4`
Cargan al abrir el archivo local en el navegador o ya en HubSpot; el visor de artifacts de Claude los bloquea por CSP (solo se ve el poster).

## Especialidades (sección de cards)

8 cards, cada una con su lista de aparatos:

1. **Ginecología** — Colposcopio · Monitor fetal · Mesa de exploración · Ultrasonido
2. **Oftalmología** — Láser oftalmológico · Campímetro
3. **Cardiología** — Electrocardiógrafo digital · Ecocardiograma · Equipo para prueba de esfuerzo
4. **Radiología e imagenología** — Arco en C · Resonador magnético · Aparato de ultrasonido
5. **Odontología** — Tomógrafo dental · Radiovisiógrafo dental · Rayos X portátil · CAD/CAM · Impresora dental 3D
6. **Estética** — Láser dermatológico fraccionado · Máquina multifuncional SHR/ND · Ultrasonido de alta frecuencia IPRO · Sistema médico de criolipólisis · Sillón dermatológico
7. **Veterinaria** — Máquina de anestesia · Sistema de ultrasonido portátil · Sistema de radiografía digital · Mesa quirúrgica · Lámpara quirúrgica de techo
8. **Cirugía general** — Mesa de cirugía · Arco en C · Monitores de paciente · Lámparas de quirófano · Torres de laparoscopía · Máquina de anestesia

Cada card tiene espacio de imagen (placeholder) e icono (placeholder — el cliente define cada icono).

## FAQ

3 preguntas visibles + botón **"Ver más preguntas"** que despliega 9 adicionales (12 en total). Junto al botón va **"Arrendar ahora"**, ambos dentro de la sección de FAQ. Textos finales ya cableados.

## Formulario (hero) — ESPACIO RESERVADO para HubSpot

El form de prueba se quitó. En su lugar hay un **espacio marcado** en el hero para que Andrea conecte el formulario real de HubSpot.

- En el código, buscar **`hubspot-form`**: es el `<div id="hubspot-form">` dentro de `.form-card`. Ahí se pega el embed / snippet del formulario de HubSpot (portal `19570866`).
- Lleva un comentario `<!-- FORMULARIO DE HUBSPOT — VA AQUÍ -->` justo encima para ubicarlo rápido.
- El campo/estructura del form los define el formulario de HubSpot (los pasos, congresos, especialidades y aseguradoras que se habían maquetado son referencia; ver historial).

**Referencia de campos (por si el form de HubSpot los necesita):** Paso 1 → Nombre y Apellido, Correo, Teléfono, Edad, Congreso (7 opciones). Paso 2 → Hospital, Nº pacientes/mes, % asegurados, Especialidad (36), Lugar de operación, ¿Equipo propio?, Aseguradoras (máx. 5).

## Pendientes

- [ ] Imagen/video real de fondo del hero
- [x] Rejilla "cómo funciona" (sección 2): 4 imágenes de congreso cableadas (`assets/leasing-01..04.webp`)
- [ ] Confirmar textos exactos de congresos (2 ediciones en romano + nombre "Conde de Valencia")
- [x] Fotos de las 8 especialidades — desde Drive `CLIENTES/L4U y C4U/L4U PERSONAL/IMAGENES CONSULTORIO` → `assets/consultorio-*.{png,jpg}` (QUIROFANO → cirugía general). Pendiente comprimir (varias pesan >1 MB).
- [ ] Iconos de cada especialidad (el cliente los define)
- [ ] Opciones reales del select "Congreso"
- [ ] Definir comportamiento del botón "Siguiente" (form multipaso vs. snippet de HubSpot)
- [ ] Generar `congreso-modulo.html` + `congreso-modulo.js` con URLs del CDN para pegar en HubSpot (portal `19570866`)

## Historial de cambios

- 2026-09-25: creación de la carpeta. Preview con look and feel de las especialidades; header sin hamburguesa; equipos y testimonios en carrusel mobile; testimonios reales cableados; logo y tabla comparativa reutilizados de cardiología.
- 2026-09-25: cards convertidas a 8 especialidades con lista de aparatos; FAQ con 3 preguntas + 9 desplegables (textos finales) y botones "Arrendar ahora" + "Ver más preguntas".
- 2026-09-25: hero solo título + texto (sin mini-stats). Carruseles de especialidades y testimonios activos en tablet y mobile, con flechas laterales ‹ › (visibles solo en modo carrusel ≤1024px). Fotos de consultorios de Drive cableadas en las 8 cards.
- 2026-09-25: formulario reconstruido a 2 pasos (paso 1 datos de contacto + congreso; paso 2 perfil profesional + aseguradoras máx. 5). Lada de países completa en orden alfabético (México default). Especialidad médica con 36 opciones.
- 2026-09-25: especialidades ahora en carrusel también en web (flechas ‹ › siempre visibles); iconos SVG por especialidad; quitado el texto "Imagen" y los botones "Cotizar" de las cards; FAQ sin eyebrow; logo alineado a la derecha.
