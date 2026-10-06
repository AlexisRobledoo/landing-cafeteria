# ☕ Café del Río — Landing page para cafetería

Landing page para una panadería y cafetería **ficticia** de Rosario, Santa Fe. Es un proyecto de portfolio pensado como ejemplo del tipo de sitio que puede necesitar un comercio local.

🔗 **Demo:** https://alexisrobledoo.github.io/landing-cafeteria/

## Características

- **Diseño responsive**: se adapta a celular, tablet y computadora.
- **Menú hamburguesa** en pantallas chicas.
- **Cartel "Abierto ahora / Cerrado"** que se calcula en vivo con la hora de Argentina.
- **Pedidos por WhatsApp** con mensaje precargado y botón flotante.
- **Mapa de Google** embebido con la ubicación.
- **HTML semántico** (`header`, `nav`, `section`, `article`, `footer`) para mejor SEO y accesibilidad.
- Paleta de colores definida con **variables CSS**, fácil de adaptar a otro negocio.

## Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, media queries, variables)
- JavaScript (sin librerías)

## Estructura

```
landing-cafeteria/
├── index.html      → estructura y contenido
├── css/
│   └── styles.css  → diseño
└── js/
    └── main.js     → menú móvil, horario en vivo, año del footer
```

## Cómo verlo en tu compu

1. Descargá o cloná el repositorio.
2. Abrí `index.html` en el navegador (o usá la extensión Live Server de VS Code).

## Cómo adaptarlo a otro comercio

- Textos, productos y precios: `index.html`
- Colores: las variables al principio de `css/styles.css`
- Horarios del cartel "Abierto ahora": el objeto `HORARIOS` en `js/main.js`
- Número de WhatsApp: los links `https://wa.me/...` en `index.html`

---

Hecho por **Alexis** · Estudiante de la Tecnicatura en Programación (UGR, Rosario)
