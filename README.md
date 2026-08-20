# Bazar Jalevy

Site institucional de uma página (landing page) para o Bazar Jalevy, feito com o
formato "Design Canvas" (`.dc.html`), que roda direto no navegador sem build.

## Arquivo principal

**`Bazar Jalevy.dc.html`** — todo o conteúdo, layout e estilos do site estão aqui.
`index.html` só existe para abrir esse arquivo automaticamente quando o projeto é
servido por um servidor local (o nome do arquivo principal tem espaço, o que
alguns servidores não tratam bem como página inicial).

## Como rodar localmente

Abra `index.html` (ou `Bazar Jalevy.dc.html` diretamente) num servidor local, por exemplo:

```
npx serve .
```

ou

```
python -m http.server 8000
```

Depois acesse `http://localhost:PORTA/`. É necessário internet na primeira carga,
pois a página busca React, ReactDOM e as fontes do Google Fonts via CDN.

Também é possível abrir `Bazar Jalevy.dc.html` direto no navegador com duplo clique,
sem servidor.

## Estrutura de arquivos

```
Bazar Jalevy.dc.html   → conteúdo/layout do site (editar aqui)
index.html             → redireciona para o arquivo acima
support.js             → runtime do Design Canvas (gerado — não editar à mão)
image-slot.js          → componente de imagem com troca/upload (gerado — não editar à mão)
.image-slots.state.json→ estado das imagens usadas em cada slot (gerado pelo image-slot.js)
.thumbnail              → miniatura de preview do projeto
photos/                → fotos usadas no site, já referenciadas no HTML
videos/                → vídeos usados no site (comprimidos para a web)
```

## Observações

- `support.js` e `image-slot.js` são arquivos gerados pelo runtime do Design Canvas
  (não editar diretamente — o próprio cabeçalho de cada arquivo indica isso).
- A pasta `uploads/` com as fotos originais da câmera (sem uso no site) foi removida
  por já estarem todas presentes, renomeadas e em uso em `photos/`.
