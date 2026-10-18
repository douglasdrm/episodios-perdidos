# Episódios Perdidos

Biblioteca editorial de episódios imaginários de séries, apresentados como histórias para leitura online. A edição inaugural é **Two and a Half Men — Uma Questão de Coluna**.

Projeto não oficial, independente e não comercial.

## Tecnologias

- Next.js 15 (App Router)
- React 19 e TypeScript
- Tailwind CSS 4 + CSS editorial
- Lucide React

## Desenvolvimento local

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para validar a versão de produção:

```bash
npm run build
npm start
```

## Rotas

- `/` — início e destaques
- `/series` — catálogo de séries
- `/series/two-and-a-half-men` — coleção da série
- `/ler/uma-questao-de-coluna` — leitor completo
- `/sobre` — apresentação e aviso legal

## Adicionar conteúdo

1. Crie o arquivo do episódio em `content/episodes/` usando o tipo `Episode` de `content/types.ts`.
2. Inclua o episódio no array de `lib/catalog.ts`.
3. Se for uma série nova, inclua seus dados em `content/series.ts`.
4. Episódios com `status: 'draft'` não aparecem no catálogo público.

O texto original da primeira história permanece em `app/story.ts` e é importado pelo arquivo do episódio. Não altere esse arquivo sem uma revisão editorial explícita.

## GitHub e Vercel

Crie um repositório vazio no GitHub e, dentro desta pasta, execute:

```bash
git init
git add .
git commit -m "feat: cria catalogo Episodios Perdidos"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Na Vercel:

1. Selecione **Add New → Project** e importe o repositório.
2. Confirme o framework **Next.js** e mantenha os comandos padrão.
3. Não é necessária nenhuma variável para o primeiro deploy. A URL de produção fornecida pela Vercel é detectada automaticamente.
4. Se adicionar um domínio próprio, configure `NEXT_PUBLIC_SITE_URL` com a URL final (por exemplo, `https://seudominio.com.br`) e faça um novo deploy.

Após a integração, cada push na branch `main` inicia um deploy de produção automaticamente.

## Dados locais e privacidade

Tema e última posição de leitura são salvos no `localStorage`, em chaves separadas por episódio. Não existem contas, cookies analíticos, banco de dados ou APIs próprias. As fontes são carregadas pelo Google Fonts e possuem alternativas locais.

## Aviso

Fanfiction não oficial e sem afiliação aos titulares das séries mencionadas. Evite fotografias, logos e materiais promocionais oficiais sem autorização.
