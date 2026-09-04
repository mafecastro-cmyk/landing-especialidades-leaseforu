# LeaseForU — Landings por especialidad

Landings de captación de leads médicos para [Lease For U](https://www.leaseforu.com/), una por vertical (ginecología, radiología, cardiología). Cada especialidad incluye landing principal + thank you page.

## Preview en vivo

- 🏥 **Hub:** https://mafecastro-cmyk.github.io/landing-especialidades-leaseforu/
- **Ginecología:**
  - Landing: `/ginecologia/landing/`
  - Thank you: `/ginecologia/typ/`
- **Radiología:**
  - Landing: `/radiologia/landing/`
  - Thank you: `/radiologia/typ/`
- **Cardiología:** pendiente

## Estructura del repo

```
├── index.html                    → hub con links a las 3 especialidades
├── README.md
├── CONVERSATION-LOG.md
├── .gitignore
│
├── ginecologia/
│   ├── landing/                  → landing principal
│   │   ├── index.html            preview autocontenido (self-contained)
│   │   ├── ginecologia-modulo.html HubSpot module ready
│   │   ├── ginecologia-modulo.js JS extraído
│   │   ├── README.md             pasos de deploy
│   │   └── assets/               archivos para File Manager
│   └── typ/                      → thank you page
│       ├── index.html
│       ├── gracias-modulo.html
│       ├── gracias-modulo.js
│       ├── README.md
│       └── assets/
│
├── radiologia/
│   ├── landing/                  ← misma estructura
│   └── typ/
│
└── cardiologia/
    ├── landing/                  ⏳ placeholder — pendiente brief
    └── typ/                      ⏳ placeholder
```

Cada `landing/` incluye:
- `index.html` — preview autocontenido (self-contained con todo embebido). Es lo que renderiza GitHub Pages.
- `*-modulo.html` — código listo para pegar en el panel `module.html` del módulo custom de HubSpot (portal `19570866`).
- `*-modulo.js` — mismo JS extraído aparte por si prefieres separarlo en el panel `module.js`.
- `README.md` — checklist paso a paso.
- `assets/` — imágenes y videos que se suben al File Manager. Cada landing tiene SOLO sus propios assets; no hay assets compartidos entre landings.

Cada `typ/` incluye la thank you page con la misma estructura reducida (una sola sección de confirmación).

## Portal HubSpot

- ID: `19570866` (cuenta Lease For U)
- URL base del CDN: `https://19570866.fs1.hubspotusercontent-na1.net/hubfs/19570866/`
- Formulario: `RO_01 Formulario general` — GUID `7b0f3c90-b16e-4b5b-9f3b-1fd4dfd35ce0` (región `na1`)

## Deploy a HubSpot

Los pasos completos están en cada `landing/README.md`. Resumen:

1. Subir contenido de `landing/assets/` al File Manager de HubSpot
2. Crear módulo custom (Contenidos → Administrador de diseño), marcar Landing pages + Sitio, NO Correos
3. Pegar el `*-modulo.html` en el panel `module.html`
4. Publicar módulo
5. Crear landing page en HubSpot con el slug definitivo, arrastrar el módulo
6. Repetir para la thank you page (`typ/`)
7. En Marketing → Formularios → RO_01 → Opciones, apuntar el redirect al slug de la thank you page

## Créditos

- Copy y estructura definitiva: **Andrea** (LeaseForU)
- Imágenes: mix de Gemini (escenas + cards de equipos) y stock de LeaseForU
- Build: colaboración con Claude Code (Anthropic) — ver [`CONVERSATION-LOG.md`](./CONVERSATION-LOG.md)
