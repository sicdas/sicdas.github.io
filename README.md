# SICDAS — sitio web (Jekyll)

Sitio del Seminario Internacional de Ciencia de Datos Aplicada a la Sociedad,
publicado en https://www.sicdas.org con GitHub Pages.

## Editar el contenido

Todo el contenido está en archivos YAML dentro de `_data/`. No hace falta tocar HTML.

| Archivo | Qué contiene |
|---|---|
| `_data/evento.yml` | Edición, fecha, horas, modalidad, textos y enlaces (inscripción, certificado, Meet, YouTube, PDF del programa) |
| `_data/navegacion.yml` | Menú superior |
| `_data/ponentes.yml` | Ponentes: nombre, cargo, institución, foto, LinkedIn, tema y biografía |
| `_data/programa.yml` | Programa por día y por hora |
| `_data/organizadores.yml` | Organizadores y auspiciadores (logos y enlaces) |
| `_data/contacto.yml` | Coordinador, dirección y redes sociales. Correo y teléfono son imágenes: use `_scripts/texto-a-imagen.py` |
| `_data/preguntas.yml` | Preguntas frecuentes |
| `_data/ediciones.yml` | Ediciones anteriores (afiches y enlaces) |

Notas:

- Los enlaces vacíos (`""`) en `evento.yml` ocultan su botón. Por ejemplo, mientras
  `inscripcion_url` esté vacío, la página muestra "INSCRIPCIONES PRÓXIMAMENTE".
- Las fotos de los ponentes van en `assets/2026/images/ponentes/`. Si `foto` está
  vacío, se usa la imagen genérica.
- Cada ponente tiene un `id`; el programa usa ese `id` (`ponente: ponente-1`).
- Al escribir textos con `:` en YAML, póngalos entre comillas.

## Estructura

- `index.html`: página principal (solo incluye las secciones).
- `_layouts/default.html`: cabecera HTML común.
- `_includes/`: una plantilla por sección (hero, galería, ponentes, programa, etc.).
- `assets/2026/`: CSS e imágenes de la edición actual.
- `past-events/<año>/`: sitios de ediciones anteriores, tal como se publicaron.

## Ejecutar localmente

Requiere Ruby y Bundler:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Abra `http://localhost:4000`.

## Nueva edición

1. Mueva el sitio publicado a `past-events/<año>/` (por ejemplo, descargue la página
   generada en `_site/` junto con sus `assets/`).
2. Agregue esa edición en `_data/ediciones.yml`.
3. Actualice `_data/evento.yml`, `ponentes.yml` y `programa.yml` con la nueva edición.

## Publicar

Suba los cambios a la rama `main`. GitHub Pages compila el sitio automáticamente.

## Créditos

Diseño adaptado de la plantilla del sitio de la Semana de la Computación (EPCC-UNSA).
