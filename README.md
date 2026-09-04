# LeaseForU — Landing Page Ginecología

Landing page para captación de leads en el vertical de **ginecología** de [Lease For U](https://www.leaseforu.com/) (arrendamiento de equipo médico). Incluye la página principal + thank you page.

## Preview en vivo

Una vez habilitado GitHub Pages en este repo (ver más abajo), las páginas se pueden ver en:

- 🏥 **Landing:** `https://mafecastro-cmyk.github.io/leaseforu-landing-ginecologia/ginecologia/`
- ✅ **Thank you:** `https://mafecastro-cmyk.github.io/leaseforu-landing-ginecologia/typ/`

Ambos son **HTML autocontenidos** — todas las imágenes, el video del hero, los posters de testimoniales y hasta el logo van embebidos en base64. Se ven directo sin backend, sin dependencias externas.

Lo que sí es referencia externa: los 3 videos de testimoniales (`testi-gerardo/lorena/ernesto.mp4`). Pesan 235 MB combinados; no caben en el HTML ni tiene sentido meterlos al repo. En la preview salen los posters (frame estático de cada doctor). En producción HubSpot cargan desde el CDN normal.

## Estructura del repo

```
├── ginecologia/                 → Landing principal
│   ├── index.html               ← preview autocontenido (3.8 MB)
│   ├── ginecologia-modulo.html  ← para pegar en módulo HubSpot
│   ├── ginecologia-modulo.js    ← JS extraído (opcional, si separas en panel .js)
│   ├── README.md                ← pasos de deploy
│   └── assets/                  ← 12 archivos para File Manager (12 MB)
├── typ/                         → Thank you page
│   ├── index.html               ← preview autocontenido (433 KB)
│   ├── gracias-modulo.html
│   ├── gracias-modulo.js
│   ├── README.md
│   └── assets/                  ← 2 archivos (2.5 MB)
├── CONVERSATION-LOG.md          ← historial de decisiones y milestones
├── .gitignore
└── README.md                    ← este archivo
```

## Deploy a HubSpot (resumen)

Ambas páginas siguen el mismo patrón — 1 diseño = 1 módulo custom autocontenido, según el playbook interno:

1. Subir el contenido de `*/assets/` al **File Manager** (portal LeaseForU `19570866`)
2. Crear módulo custom en **Contenidos → Administrador de diseño** (marcar Landing pages + Sitio, NO Correos)
3. Pegar el `*-modulo.html` correspondiente en el panel `module.html` del módulo
4. Publicar módulo
5. Crear la landing page en HubSpot y arrastrar el módulo

Detalles completos en cada `README.md` de las subcarpetas.

## Stack técnico

- **HTML5 + CSS3 + JS vanilla** (sin frameworks, sin build)
- Todo el CSS inline en `<style>` dentro del HTML (para el módulo de HubSpot)
- Todo el JS inline en `<script>` (también extraído en `.js` aparte por si prefieres separarlo)
- **Google Fonts** (Montserrat 400–900) — único recurso externo aparte del CDN de HubSpot
- Responsive: 3 breakpoints (1024 / 768 / 480 px). En mobile las secciones de cards se convierten en carruseles horizontales con scroll-snap.
- Formulario: reemplazar el demo por el snippet oficial de HubSpot con GUID `7b0f3c90-b16e-4b5b-9f3b-1fd4dfd35ce0`

## Habilitar GitHub Pages

Una vez el repo esté creado:

1. Settings → Pages → Source: `Deploy from a branch`
2. Branch: `main` — Folder: `/ (root)`
3. Save
4. En 1–2 minutos las URLs de preview están vivas

## Créditos

- Copy y estructura definitiva: **Andrea** (LeaseForU)
- Imágenes de scene generadas con Gemini; cards de equipos exportadas desde Canva/Figma
- Videos originales de testimoniales: producción interna LeaseForU
- Build: colaboración con Claude Code (Anthropic) — ver `CONVERSATION-LOG.md`
