# Landing Radiología — Lease For U

Estructura idéntica a `../ginecologia/`, con copy adaptado al vertical de **radiología** según el brief del PDF.

## Archivos

| Archivo | Uso |
|---|---|
| `index.html` | Preview autocontenido (self-contained, con imágenes compartibles embebidas y las 4 cards de equipos como placeholders visibles). |
| `radiologia-modulo.html` | Listo para pegar en el módulo custom de HubSpot (portal 19570866). URLs apuntan al File Manager. |
| `radiologia-modulo.js` | JS extraído aparte. |
| `assets/` | Archivos que van al File Manager de HubSpot. |

## Assets pendientes ⚠

Los siguientes 4 archivos NO están en el repo — Eduardo los va a proveer. Cuando lleguen, se dropean en `assets/` y se sube al File Manager con estos nombres exactos:

- `equipo-radiografia-portatil-producto.png` — card del equipo #1
- `equipo-tac-producto.png` — card del equipo #2 (Tomógrafo computarizado)
- `equipo-resonador-producto.png` — card del equipo #3 (Resonador magnético)
- `equipo-arco-en-c-producto.png` — card del equipo #4

Mientras tanto, los 4 cards muestran el placeholder azul con el nombre del equipo — se ven pero indican claramente que la imagen está pendiente.

## Assets reusados de ginecología (por ahora)

Estos son genéricos y funcionan para cualquier especialidad, pero Eduardo puede reemplazarlos si quiere:

- `hero-ginecologia.mp4` — el video del hero muestra una silla ginecológica. **Para producción de radiología, reemplazar** por un video de sala de radiología o TAC.
- `leasing-01.jpg` a `leasing-04.jpg` — las 4 imágenes de la sección "cómo funciona el leasing médico". Son escenas genéricas (doctor + paciente, sala médica, hallway) que sirven para cualquier vertical.
- `leasing-vs-compra.png` — la tabla comparativa. Idéntica para todas las especialidades.
- `contrato-alquiler-equipos-medicos.png` — foto de médicos del form. Genérica.
- `logo-lease4u-positivo.webp` — mismo logo del brand.
- `testi-*.mp4` + `testi-*-poster.jpg` — mismos 3 testimoniales que ginecología.

## Deploy a HubSpot

Ver instrucciones completas en el README de ginecología — mismos 9 pasos, solo cambiando "ginecología" por "radiología" y el nombre del módulo (`Radiología - Landing completa`).

**Slug sugerido:** `/arrendamiento-equipo-radiologia`
**Thank you page slug:** `/lp-gracias-radiologia` (el submit del form ya está apuntando ahí)
