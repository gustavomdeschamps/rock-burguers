# Rock Burguer's

Site institucional e cardápio da Rock Burguer's, em Blumenau/SC.

## Requisitos

- Node.js 22 ou superior
- npm 10 ou superior

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run typecheck
npm run lint
npm run build
```

O build de produção é gerado na pasta `dist`.

## Publicação

O projeto está configurado para Vite na Vercel. O arquivo `vercel.json` define o comando de build, a pasta de saída e o fallback para navegação da SPA.

Não há variáveis de ambiente obrigatórias.
