# Thank You Page - Ginecología

Página de confirmación post-formulario para la landing de ginecología.

**H1:** Solicitud recibida ginecólogo (a)

## Archivos

| Archivo | Uso |
|---|---|
| `index.html` | Preview autocontenido (self-contained). |
| `gracias-modulo.html` | Version para pegar en módulo HubSpot. |
| `gracias-modulo.js` | JS extraído (header shadow + hamburger). |
| `assets/` | 2 archivos: logo y bg image. |

## Slug

- URL sugerida en HubSpot: `/lp-gracias-ginecologia`
- El botón "volver" apunta a la landing de ginecología en `/lp-arrendamiento-equipo-ginecologia`
- En Marketing → Formularios → RO_01 → opciones de redirect, apuntar el post-submit del form de la landing de ginecología a la URL de esta thank you page.

## Deploy

Crear módulo custom → pegar `gracias-modulo.html` → publicar módulo → crear landing page en blanco → agregar módulo → publicar con el slug de arriba.

## Notas

Existe también `typ-radiologia/` como versión con el H1 adaptado a "radiólogo (a)". Cuando se arme cardiología, se hará `typ-cardiologia/` con el mismo patrón.
