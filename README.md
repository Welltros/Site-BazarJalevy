# Bazar Jalevy

Site institucional de uma página (landing page) para o Bazar Jalevy — papelaria,
ferragens, elétrica-hidráulica e informática na Vila da Penha, Rio de Janeiro.

Feito no formato "Design Canvas": HTML + um runtime (`support.js`) que monta a
página no navegador, sem etapa de build.

## Arquivo principal

**`index.html`** — todo o conteúdo, layout, estilos e a lógica de interação
(carrossel, vídeo) estão nele. É um documento Design Canvas: o `<x-dc>` no corpo
é processado por `support.js` em tempo de execução.

## Como rodar localmente

Precisa de um servidor local (não abra por duplo clique — o `fetch` interno e o
runtime não funcionam em `file://`):

```
npx serve .
```
ou
```
python -m http.server 8000
```

Depois acesse `http://localhost:PORTA/`. É necessário internet na primeira carga
(React, ReactDOM e Babel via unpkg.com; fontes via Google Fonts).

## Publicar (HostGator)

Veja **[HOSPEDAGEM.md](HOSPEDAGEM.md)** para o passo a passo completo.

Resumo: rode `node build-deploy.mjs` para gerar a pasta `deploy/` (só o que sobe
pro servidor) e envie o **conteúdo** dela para `public_html/`.

Domínio configurado: **bazarjalevy.com.br** (sem www). Se mudar, troque
`bazarjalevy.com.br` em `index.html`, `robots.txt` e `sitemap.xml` e rode o
build de novo.

## Estrutura de arquivos

```
index.html            → o site (editar aqui)
support.js             → runtime do Design Canvas (gerado — não editar à mão)
image-slot.js          → componente de imagem (gerado — 2 correções nossas documentadas em DESIGN.md)
.htaccess              → config do servidor Apache/HostGator (HTTPS, segurança, cache)
robots.txt / sitemap.xml → SEO
favicon.svg / favicon.png / apple-touch-icon.png → ícones
build-deploy.mjs       → gera a pasta deploy/ para publicação
HOSPEDAGEM.md          → guia de publicação na HostGator
photos/                → fotos do site (as usadas + material de reserva)
videos/apresentacao.mp4 → vídeo de apresentação (comprimido; bruto fica fora do git)
DESIGN.md              → sistema de design + bugs do runtime documentados
```

## Observações

- `support.js` é gerado e não deve ser editado. `image-slot.js` também é gerado,
  mas tem 2 correções nossas (alt text e `touch-action`) — ver DESIGN.md.
- Fotos não usadas no site (`photos/IMG_*.jpg`, `carimbos-anuncio.png`,
  `eletrica-hidraulica.jpg`) e o vídeo bruto (`Videos/Jalevy Oficial.mp4`) ficam
  fora do build de publicação e/ou do git.
- O `<script data-dc-script>` usa `type="text/plain"` de propósito: impede o
  navegador de executá-lo nativamente (o que causava um erro intermitente
  "DCLogic is not defined"); o `support.js` lê o conteúdo dele mesmo assim.
