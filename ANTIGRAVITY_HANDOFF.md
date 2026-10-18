# EPISÓDIOS PERDIDOS — briefing mestre para Antigravity

> Documento de transferência de contexto, produto, arquitetura e execução. Atualizado em 18/10/2026.

## 1. Objetivo

Transformar um site de leitura de uma única fanfiction em um **catálogo editorial de episódios imaginários de várias séries**, inicialmente chamado **Episódios Perdidos** (nome provisório). O site deve ser publicado pela **Vercel**, com código versionado no **GitHub**. Depois da configuração inicial, a rotina deve ser editar no Antigravity, commitar e dar `git push`, acionando automaticamente um novo deploy na Vercel.

**Não é um serviço de streaming.** É uma biblioteca de contos/episódios escritos para leitura online. Idioma principal: português brasileiro. Público inicial: amigos que recebem o link pelo WhatsApp. Sem login, sem pagamentos, sem banco de dados e sem painel administrativo na primeira versão.

## 2. Estado atual — IMPORTANTE

Há um projeto Next.js **já criado**, disponível no ZIP que acompanha este documento. Ele é uma **página única funcional em código**, centrada em *Two and a Half Men — Uma Questão de Coluna*. **Ainda não foi convertido em catálogo multissérie**, nem houve confirmação de `npm run build` ou deploy em produção. Não apresentar como publicado ou validado.

Arquivos atuais:

```
app/
  globals.css   # identidade visual, capa de Malibu, estilos do leitor
  layout.tsx    # metadados e layout global
  page.tsx      # página única: capa + capítulos + navegação + tema + compartilhar
  story.ts      # história integral estruturada em capítulos
package.json
postcss.config.mjs
tsconfig.json
next-env.d.ts
README.md
.gitignore
```

Stack atual: Next.js 15, React 19, TypeScript, Tailwind CSS 4 (configurado), lucide-react, CSS personalizado. Confirmar compatibilidade e build antes de subir.

**Preservar o texto de `app/story.ts` integralmente** durante a migração. Ele contém os 9 capítulos e uma cena extra (índice 9). Não reescrever piadas, condensar capítulos ou alterar o texto sem solicitação explícita. A história é o conteúdo inicial real, não placeholder.

## 3. Conceito editorial

**Marca provisória:** Episódios Perdidos  
**Tagline:** Histórias que a TV nunca contou.  
**Proposta:** Episódios inéditos imaginários, inspirados em universos de séries, apresentados como literatura digital.  
**Primeira série:** *Two and a Half Men*.  
**Primeiro episódio:** *Uma Questão de Coluna*.  
**Sinopse:** Charlie Harper sofre uma lesão nas costas e precisa da ajuda profissional de Alan, o irmão cuja profissão de quiroprático ele ridicularizou por anos. Alan finalmente tem a chance de ser reconhecido — e, naturalmente, estraga sua própria vitória. Há uma trama paralela em que Jake tenta monetizar supostas habilidades de quiropraxia na escola.  
**Personagens:** Charlie, Alan, Jake, Berta, Evelyn, Tiffany.  
**Tom:** comédia de situação, dinâmica familiar, ironia e diálogos rápidos; texto em prosa literária, não roteiro técnico.

O nome da marca é provisório. Estruturar a configuração de marca num único arquivo para permitir troca futura de nome, tagline, cores e domínio.

## 4. Direção visual

A interface tem **duas camadas complementares**:

1. **Catálogo:** atmosfera cinematográfica/editorial, tons escuros, cards verticais com capas, séries, sinopses e navegação clara. Deve parecer uma biblioteca curada, não um clone literal de Netflix.
2. **Leitor:** aparência de livro premium; fundo creme/papel no modo claro, fundo escuro confortável no modo noturno; fonte serifada, largura de texto limitada, entrelinhas generosas, capítulos bem marcados e mínimo de distrações.

Para o primeiro episódio, manter a capa especial com **Malibu, pôr do sol, praia e casa litorânea estilizada**, em referência atmosférica à série, preferencialmente com arte original em CSS/SVG. Evitar logos oficiais, fotos de atores e material promocional protegido sem permissão. A capa atual em CSS pode ser reutilizada.

Mobile-first; otimizar especialmente para acesso via WhatsApp. Acessibilidade: contraste, foco visível, navegação por teclado, nomes de botões, sem animações excessivas e respeito a `prefers-reduced-motion`.

## 5. Rotas desejadas

| Rota | Função |
|---|---|
| `/` | Home: marca, destaque principal, séries e episódios recentes |
| `/series` | Catálogo de séries (pode ser incorporado à home na V1) |
| `/series/[serieSlug]` | Página de cada série com descrição e lista de histórias |
| `/ler/[episodioSlug]` | Leitor completo da história, sumário e cena extra |
| `/sobre` | Apresentação do projeto e aviso de fanfiction não oficial |
| `not-found` | Página 404 amigável |

A URL inicial desejada é `/ler/uma-questao-de-coluna`. Se o episódio anterior tiver sido publicado em `/`, considerar redirect ou link permanente para preservar compartilhamentos.

## 6. Estrutura sugerida do repositório

```
episodios-perdidos/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── series/
│   │   ├── page.tsx
│   │   └── [serieSlug]/page.tsx
│   ├── ler/
│   │   └── [episodioSlug]/page.tsx
│   ├── sobre/page.tsx
│   └── not-found.tsx
├── components/
│   ├── SiteHeader.tsx
│   ├── EpisodeCard.tsx
│   ├── SeriesCard.tsx
│   ├── BookReader.tsx
│   ├── ReadingProgress.tsx
│   ├── TableOfContents.tsx
│   └── ThemeToggle.tsx
├── content/
│   ├── series.ts
│   └── episodes/
│       └── uma-questao-de-coluna.ts
├── lib/
│   ├── catalog.ts
│   └── site-config.ts
├── public/
│   └── covers/
├── README.md
├── package.json
└── ...
```

A estrutura é **alvo**, não estado atual. A V1 pode manter a história em TypeScript para evitar bibliotecas adicionais. Futuramente considerar Markdown/MDX por episódio, com frontmatter, quando for realmente útil.

## 7. Modelo de dados sugerido

```ts
type Series = {
  slug: string;
  title: string;
  description: string;
  cover?: string;
};

type Chapter = {
  title: string;
  paragraphs: string[];
  eyebrow?: string;
};

type Episode = {
  slug: string;
  seriesSlug: string;
  title: string;
  subtitle?: string;
  synopsis: string;
  cover?: string;
  publishedAt?: string;
  status: 'published' | 'draft';
  chapters: Chapter[];
};
```

A publicação de novo episódio deve exigir somente um arquivo de conteúdo, metadados e capa opcional. As páginas são geradas a partir do catálogo. Usar `generateStaticParams` e `generateMetadata` quando adequado. Episódios `draft` não devem aparecer no catálogo público.

## 8. Funcionalidades — V1

- Home com episódio em destaque e catálogo preparado para várias séries.
- Página de série e página de leitura por slug.
- Leitura contínua com capítulos e cena extra.
- Sumário navegável com âncoras e próximo capítulo.
- Barra de progresso de leitura.
- Salvar última posição **por episódio** no `localStorage` (evitar chaves globais da versão atual).
- Tema claro/escuro com persistência local.
- Compartilhar via Web Share API e fallback de copiar link.
- Metadados SEO/Open Graph por episódio, incluindo título, sinopse e imagem própria, se houver.
- Estados vazios elegantes; não inventar episódios futuros. Cards de “em breve” podem existir, claramente marcados.
- Rodapé com aviso de obra de fã, não oficial e não comercial.
- Sem cookies analíticos, contas ou banco de dados na V1.

## 9. Conteúdo inicial e preservação

A fonte canônica do texto já existe em `app/story.ts` no projeto original. Migrar o array `chapters` sem alterar conteúdo, pontuação ou ordem.

Capítulos:

1. Uma posição comprometedora
2. O melhor dinheiro que Charlie já desperdiçou
3. O doutor Jake Harper
4. A mulher que não podia esperar
5. O dia mais feliz da vida de Alan Harper
6. A grande oportunidade
7. O preço do reconhecimento
8. O testemunho
9. A última palavra
10. Cena extra — Depois dos créditos

O décimo item é uma cena pós-créditos, não um décimo capítulo numerado. Manter esse tratamento editorial no leitor e na contagem da interface: **9 capítulos + cena extra**.

## 10. GitHub + Vercel: fluxo desejado

### Setup inicial (uma vez)

1. Criar repositório GitHub, sugestão `episodios-perdidos` (verificar disponibilidade do nome na conta).
2. Clonar o repositório no ambiente Antigravity ou inicializar Git na pasta local e adicionar remoto.
3. Instalar dependências, rodar `npm run build`, corrigir erros e testar navegação local.
4. Fazer commit e `git push -u origin main`.
5. Na Vercel, importar o repositório GitHub. Selecionar framework Next.js, diretório raiz do projeto, sem variáveis de ambiente na V1.
6. Configurar a branch de produção `main` e confirmar deploy.
7. Conferir URL pública, Open Graph, links, modo noturno, sumário e leitura no celular.

### Atualizações recorrentes

```bash
npm install
npm run dev
# editar e validar
npm run build
git add .
git commit -m "feat: adiciona novo episodio"
git push origin main
```

Após a integração GitHub ↔ Vercel estar ativa, o push para `main` deve iniciar um deploy de produção automaticamente. Branches e pull requests podem gerar preview deployments conforme configuração do projeto. **O push não publica por si só sem a integração inicial.**

Não adicionar segredos/tokens ao Git. Usar `.env.local` somente se algum recurso futuro exigir variáveis, e mantê-lo fora do controle de versão.

## 11. Critérios de aceite

- `npm install` e `npm run build` concluem sem erros.
- A home mostra o primeiro episódio e estrutura preparada para outros.
- `/series/two-and-a-half-men` abre uma página de série.
- `/ler/uma-questao-de-coluna` exibe os 9 capítulos e a cena extra completos.
- Não há perda de texto em relação a `app/story.ts`.
- Tema, progresso e posição são persistidos por episódio.
- Links de compartilhamento funcionam e têm metadados apropriados.
- A página funciona em celular, desktop e com navegação por teclado.
- Um novo episódio pode ser adicionado sem duplicar componentes ou rotas.
- `README.md` explica criação de conteúdo, desenvolvimento local, GitHub e Vercel.

## 12. Prompt pronto para colar no Antigravity

> Você está trabalhando em um projeto Next.js existente, inicialmente uma página única de fanfiction chamada “Uma Questão de Coluna”. Leia este documento inteiro e examine o repositório antes de alterar qualquer arquivo. Transforme-o numa biblioteca editorial multissérie provisoriamente chamada “Episódios Perdidos”, usando a arquitetura, rotas, componentes, identidade visual e critérios de aceite aqui descritos. Preserve integralmente `app/story.ts`, migrando seus capítulos para o catálogo sem reescrever a história. Mantenha a capa especial de Malibu para o primeiro episódio e crie uma home cinematográfica com leitura premium em páginas individuais. Garanta acessibilidade, SEO e metadados sociais. Faça as verificações de build, corrija eventuais problemas e atualize o README com o fluxo GitHub → Vercel. Não crie episódios fictícios como se já estivessem publicados. Não faça deploy nem push sem meu comando explícito.

## 13. Próximas decisões (não bloqueantes)

- Confirmar nome final da marca e eventual domínio próprio.
- Definir se haverá autoria/pseudônimo exibido nas histórias.
- Decidir se haverá capas próprias por episódio e por série.
- Definir uma convenção para datas, temporadas e numeração de episódios quando houver vários.
- Avaliar futuramente busca, filtros e coleção de favoritos, apenas quando o catálogo crescer.

## 14. Observações legais e editoriais

Este é um projeto de **fanfiction não oficial**. Incluir aviso visível de que não há afiliação, patrocínio ou endosso dos detentores dos direitos. Não presumir que ser não comercial elimina riscos de direitos autorais ou marcas. Preferir ilustrações originais e evitar imagens oficiais ou retratos de atores sem autorização. O nome da série pode ser usado de modo descritivo, com contexto claro de obra de fã.
