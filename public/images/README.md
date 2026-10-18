# Assets visuais

Arquivos finais otimizados em WebP ou AVIF. Não incorporar títulos ou elementos de interface nas artes; o site aplica textos, selos e gradientes em HTML/CSS.

```text
images/
├── brand/
├── shared/
│   └── placeholders/
├── series/
│   └── [serie-slug]/
│       ├── poster.webp
│       ├── hero-desktop.webp
│       ├── hero-mobile.webp
│       └── social.webp
└── episodes/
    └── [episodio-slug]/
        ├── hero-desktop.webp
        ├── hero-mobile.webp
        ├── card.webp
        ├── social.webp
        └── chapters/
            └── 01.webp
```

Dimensões recomendadas:

- Hero desktop: 2400 × 1350 px.
- Hero mobile: 1080 × 1440 px.
- Banner de série: 2400 × 1200 px; versão mobile 1080 × 1350 px.
- Card de episódio: 1600 × 900 px.
- Poster de série: 1000 × 1500 px.
- Imagem de capítulo: 1600 × 900 px.
- Open Graph/WhatsApp: 1200 × 630 px.

As imagens são declaradas nos campos `artwork` dos arquivos em `content/`. Imagens de capítulo são opcionais.
