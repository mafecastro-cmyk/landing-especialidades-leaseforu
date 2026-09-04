# Thank You Page - Radiologia

Duplicada de `../typ-ginecologia/` con el titulo H1 adaptado:
**Solicitud recibida radiólogo (a)** (en lugar de `ginecólogo (a)`).

## Archivos

| Archivo | Uso |
|---|---|
| `index.html` | Preview autocontenido (self-contained). |
| `gracias-modulo.html` | Version para pegar en modulo HubSpot. |
| `gracias-modulo.js` | JS extraido (mismo que ginecologia â€” header shadow + hamburger). |
| `assets/` | 2 archivos: logo y bg image (mismos que ginecologia typ). |

## Slug

El boton "volver" del formulario apunta a `/lp-arrendamiento-equipo-radiologia` (la landing de radiologia). En HubSpot Marketing > Formularios > opciones de redireccion, apuntar el post-submit del form de la landing de radiologia a la URL de esta thank you page (ej. `https://leaseforu.com/lp-gracias-radiologia`).

## Deploy

Mismos pasos que typ-ginecologia â€” crear modulo, pegar `gracias-modulo.html`, publicar, crear landing en HubSpot con slug `/lp-gracias-radiologia`.
