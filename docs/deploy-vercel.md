# Publicação na Vercel

## 1. Enviar para um repositório novo no GitHub

```powershell
git init
git add .
git commit -m "Redesign do site Rock Burguer's"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/rock-burguers.git
git push -u origin main
```

Não reescreva o histórico depois que ele for publicado.

## 2. Importar o projeto

1. Na Vercel, selecione **Add New → Project**.
2. Importe o repositório `rock-burguers` do GitHub.
3. Use a raiz do repositório como **Root Directory**.
4. Confirme **Framework Preset: Vite**.
5. Use **Install Command: `npm install`**.
6. Use **Build Command: `npm run build`**.
7. Use **Output Directory: `dist`**.
8. Não cadastre variáveis de ambiente; o projeto não exige nenhuma.
9. Selecione **Deploy**.

O `vercel.json` já contém o build e o fallback de SPA. O endereço planejado nos metadados é `https://rock-burguers.vercel.app/`. Se a Vercel atribuir outro domínio gratuito, substitua esse endereço nas seis ocorrências de `index.html` e publique novamente.
