# Landing Ginecologia â€” Lease For U

Landing page para captacion de leads: **ginecologos interesados en arrendar equipo medico**.

## Archivos

| Archivo | Uso |
|---|---|
| `index.html` | Version 100% autocontenida (assets embebidos en base64). Se ve directo en el browser sin backend. Es la que renderiza GitHub Pages. |
| `ginecologia-modulo.html` | Version lista para pegar en HubSpot (URLs apuntan al File Manager del portal 19570866). |
| `ginecologia-modulo.js` | Mismo JS del modulo, extraido en archivo aparte por si prefieres separarlo en el panel module.js del modulo custom. |
| `assets/` | Todos los archivos que se suben al File Manager de HubSpot. |

## Preview en vivo

Abrete `index.html` local o abre la URL de GitHub Pages del repo.

## Deploy a HubSpot

Sigue el playbook de Andrea:

1. **File Manager** > subir todo el contenido de `assets/`. **Nota:** los 3 videos de testimoniales (`testi-gerardo.mp4` 161 MB, `testi-lorena.mp4` 57 MB, `testi-ernesto.mp4` 20 MB) NO estan en el repo por tamano. Comprimelos primero (HandBrake preset Fast 1080p30) y subelos con esos nombres exactos.
2. **Contenidos > Administrador de diseno > Crear modulo:**
   - Nombre: `Ginecologia - Landing completa`
   - Uso: Landing pages + Paginas del sitio (NO Correos)
3. Pega `ginecologia-modulo.html` en el panel `module.html` del modulo.
4. Publicar modulo.
5. Contenidos > Landing pages > Crear pagina en blanco > agregar el modulo > publicar.

## Formulario

**GUID:** `7b0f3c90-b16e-4b5b-9f3b-1fd4dfd35ce0` (formulario `RO_01 Formulario general`, region `na1`)

Reemplaza el `<form id="demoForm">...</form>` del modulo con:

```html
<div id="hsform-1"></div>
<script src="https://js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "19570866",
    formId: "7b0f3c90-b16e-4b5b-9f3b-1fd4dfd35ce0",
    target: "#hsform-1"
  });
</script>
```

## Portal HubSpot

- ID: `19570866`
- URL base del CDN: `https://19570866.fs1.hubspotusercontent-na1.net/hubfs/19570866/`
