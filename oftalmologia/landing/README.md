# Landing Cardiología — Lease For U

Estructura idéntica a `../../radiologia/landing/`, con copy adaptado al vertical de **cardiología** según el brief del PDF.

## Archivos

| Archivo | Uso |
|---|---|
| `index.html` | Preview autocontenido (self-contained). |
| `cardiologia-modulo.html` | Listo para pegar en el módulo custom de HubSpot (portal 19570866). |
| `cardiologia-modulo.js` | JS extraído aparte. |
| `assets/` | Archivos que van al File Manager de HubSpot. |

## ⚠ Pendiente de revisión con Eduardo

**El brief tenía los mismos 4 equipos que radiología** (Radiografía portátil, TAC, Resonador magnético, Arco en C). Muy probable que sea un copy-paste del brief de radiología y en realidad cardiología deba listar equipos como **Electrocardiógrafo, Ecocardiógrafo, Holter, Prueba de esfuerzo**, etc. Confirmar y ajustar tanto los nombres de los cards como las imágenes.

Asimismo, los assets actuales son **los mismos de radiología** (hero-radiologia.gif, radio-leasing-01..04.jpg, equipo-*-producto.png). Cuando se defina el copy correcto de cardiología, reemplazar:
- `hero-radiologia.gif` → hero-cardiologia (video/gif de sala de cardiología)
- `radio-leasing-01..04.jpg` → escenas de cardiología para la sección "cómo funciona el leasing"
- Los 4 cards de equipos → cards con los equipos reales de cardiología

## Slug

- URL sugerida: `/lp-arrendamiento-equipo-cardiologia`
- El submit del form redirige a `/lp-gracias-cardiologia` (thank you page en `../typ/`)

## Deploy a HubSpot

Ver instrucciones en `../../radiologia/landing/README.md` — mismos pasos.
