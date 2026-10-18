# Organização dos assets visuais

Esta pasta contém somente os arquivos finais usados pelo site e suas fontes PNG aprovadas. Não crie arquivos vazios para representar assets futuros.

## Estrutura

```text
images/
├── brand/                         # identidade visual global do site
├── shared/                        # texturas e placeholders reutilizáveis
├── series/
│   └── [serie-slug]/
│       ├── poster.png             # fonte aprovada do pôster
│       ├── poster.webp            # pôster otimizado usado pelo site
│       ├── hero-desktop.webp      # banner panorâmico da série, quando existir
│       ├── hero-mobile.webp       # banner vertical da série, quando existir
│       └── social.webp            # compartilhamento da série, quando existir
└── episodes/
    └── [episodio-slug]/
        ├── hero-desktop.png       # fonte aprovada do hero
        ├── hero-desktop.webp      # hero panorâmico otimizado
        ├── hero-mobile.png        # fonte aprovada do hero mobile
        ├── hero-mobile.webp       # hero vertical otimizado
        ├── card.webp              # card específico, quando existir
        ├── social.webp            # compartilhamento do episódio, quando existir
        └── chapters/
            └── 01.webp            # ilustrações editoriais opcionais
```

Pastas e arquivos opcionais só devem ser adicionados quando houver um asset real aprovado.

## Convenções

- Use o slug da série ou do episódio como nome da pasta, sempre em minúsculas e separado por hífens.
- Use nomes de arquivo previsíveis: `poster`, `hero-desktop`, `hero-mobile`, `card` e `social`.
- Preserve o PNG original aprovado e publique uma cópia otimizada em WebP.
- Não incorpore títulos, botões ou outros elementos de interface nas imagens.
- Declare texto alternativo descritivo nos dados em `content/`.
- Configure `focalPoint.desktop` e `focalPoint.mobile` quando a mesma arte aparecer em proporções diferentes.
- Séries controlam `poster`, hero e imagem social em `Series.artwork`.
- Episódios controlam hero, card e imagem social em `Episode.artwork`.
- Imagens de capítulos são opcionais e ficam no campo `Chapter.image`.

## Dimensões recomendadas

| Asset | Dimensão | Proporção |
|---|---:|---:|
| Poster de série | 1000 × 1500 px | 2:3 |
| Hero desktop | 2400 × 1350 px | 16:9 |
| Hero mobile | 1080 × 1440 px | 3:4 |
| Card de episódio | 1600 × 900 px | 16:9 |
| Imagem de capítulo | 1600 × 900 px | 16:9 |
| Open Graph/WhatsApp | 1200 × 630 px | 1.91:1 |

As dimensões podem variar quando a composição exigir, mas a proporção e a área segura para texto devem ser preservadas.
