# LeaderIT Site (Next.js + TypeScript + Tailwind)

Landing institucional moderna e responsiva da LeaderIT, com navegação por âncoras e conteúdo centralizado.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Build de produção

```bash
npm run build
npm run start
```

## Onde editar conteúdo rapidamente

- **Textos, links, parceiros e depoimentos**: `src/content/content.ts`
- **Paleta (tokens)**: `src/app/globals.css`
- **Metadata SEO global**: `src/app/layout.tsx`
- **Seções da landing**: `src/components/sections/*`

## Estrutura principal

- `src/app/page.tsx`: montagem da landing
- `src/components/layout`: Header e Footer
- `src/components/sections`: Hero, Benefits, Editorial, Partners, Testimonials, FinalCTA
- `src/components/ui`: componentes reutilizáveis (Button, Card, Container, Section)
- `src/assets/partners`: logos placeholder
- `src/assets/illustrations`: ilustrações placeholder

## Observações de manutenção

Todos os blocos principais incluem comentários no formato **"Altere aqui..."** para facilitar edição por equipes não técnicas.
