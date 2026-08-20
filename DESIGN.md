---
name: Bazar Jalevy
description: Landing page de loja de bairro (papelaria, ferramentas, carimbos, revelação de fotos) na Vila da Penha, RJ
colors:
  dourado-artesanal: "#E0A526"
  dourado-artesanal-escuro: "#BE8C20"
  dourado-terroso: "#8a6a12"
  verde-oficina: "#1F6F5C"
  bege-papel: "#F7F4EC"
  tinta-verde-escura: "#1E2B2A"
  texto-secundario: "#666F6E"
  branco: "#FFFFFF"
typography:
  display:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(2rem, 4.5vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.15
  headline:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "1.5px"
  quote:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.6
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.3
  caption:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  meta:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
rounded:
  pill: "999px"
  lg: "20px"
  md: "16px"
  base: "14px"
  sm: "10px"
  xs: "8px"
  xxs: "2px"
spacing:
  section-x: "48px"
  section-y: "88px"
  gap-lg: "56px"
  gap-md: "18px"
  gap-sm: "14px"
components:
  button-primary:
    backgroundColor: "{colors.dourado-artesanal}"
    textColor: "{colors.tinta-verde-escura}"
    rounded: "{rounded.sm}"
    padding: "16px 30px"
  button-primary-hover:
    backgroundColor: "{colors.dourado-artesanal-escuro}"
    textColor: "{colors.tinta-verde-escura}"
    rounded: "{rounded.sm}"
  button-primary-pill:
    backgroundColor: "{colors.dourado-artesanal}"
    textColor: "{colors.tinta-verde-escura}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-verde-escura}"
    rounded: "{rounded.sm}"
    padding: "16px 30px"
  card-category:
    backgroundColor: "{colors.branco}"
    rounded: "{rounded.base}"
    padding: "26px 24px"
  card-testimonial:
    backgroundColor: "{colors.bege-papel}"
    rounded: "{rounded.md}"
    padding: "30px 26px"
  image-slot:
    rounded: "{rounded.md}"
  carousel:
    rounded: "{rounded.md}"
---

# Design System: Bazar Jalevy

## Overview

**Creative North Star: "O Bazar do Bairro"**

O Bazar Jalevy é a loja de bairro que resolve o dia a dia: papelaria, ferramentas, carimbos, revelação de fotos, impressão. O design segue essa mesma lógica — acolhedor e direto, sem luxo nem frieza corporativa. Um fundo bege quente substitui o branco puro na maior parte da página, criando a sensação de uma loja física bem cuidada, não de uma startup de tecnologia.

A paleta trabalha com dois acentos — dourado artesanal para ação (links, botões, rótulos) e verde-oficina como acento raro e pontual — sobre uma base neutra de bege e tinta verde-escura quase preta. O dourado é a cor principal porque é a cor real da loja: o uniforme da equipe e a moldura da fachada são nesse mesmo amarelo-dourado. Não há sombras em nenhum lugar do site: a profundidade vem inteiramente de blocos de cor sólida (seções escuras alternando com claras) e bordas finas e translúcidas.

A geometria é generosamente arredondada em todo o sistema — de pills de 999px em botões pequenos a cantos de 20px em imagens grandes — reforçando o tom convidativo e caloroso do lugar.

**Key Characteristics:**
- Fundo bege quente (#F7F4EC) como base padrão, não branco
- Sistema de dois acentos: dourado artesanal (ação, cor da marca) + verde-oficina (destaque raro)
- Zero sombras — profundidade só por blocos de cor e bordas translúcidas
- Geometria 100% arredondada, sem nenhum canto reto
- Serifada (Lora) para títulos e citações, sans-serif (Archivo) para todo o resto

## Colors

Paleta quente e terrosa, de baixa saturação, pensada para parecer acolhedora e confiável — nunca vibrante ou tecnológica.

### Primary
- **Dourado Artesanal** (`#E0A526`): cor de ação do site — fundo do botão CTA principal ("Chamar no WhatsApp"), badge "VILA DA PENHA, RJ", maioria das listras de destaque nos cards de categoria, rótulos eyebrow sobre fundo escuro, links de destaque no rodapé. É a cor real da marca: uniforme da equipe e moldura da fachada.
- **Dourado Artesanal Escuro** (`#BE8C20`): estado hover dos botões preenchidos em dourado.
- **Dourado Terroso** (`#8a6a12`): variante de texto do dourado para uso sobre fundo claro (bege/branco) — logotipo, links de corpo, rótulos eyebrow em seções claras, autoria dos depoimentos. O dourado vívido (`#E0A526`) não tem contraste suficiente como cor de texto sobre o bege; esta variante mais escura resolve isso mantendo a família de cor.

### Secondary
- **Verde Oficina** (`#1F6F5C`): acento raro — hover dos links de corpo, e cerca de metade das listras de categoria (a outra metade). Nunca é usado como fundo de botão nem em texto sobre a seção escura (contraste insuficiente ali).

### Neutral
- **Bege Papel** (`#F7F4EC`): fundo principal da página e fundo dos cards de depoimento.
- **Tinta Verde-Escura** (`#1E2B2A`): texto principal em fundo claro; também usada como fundo cheio das seções "A Loja" e rodapé (invertendo para texto branco).
- **Branco** (`#FFFFFF`): fundo dos cards de categoria e da seção de depoimentos.
- **Texto Secundário** (`#666F6E`): cor sólida para texto de apoio sobre fundo claro (subtítulo do hero, descrições dos cards de categoria, parágrafo de contato) — substitui o padrão antigo de tinta com transparência (`#1E2B2A99`/`#1E2B2A80`), que caía abaixo de 4.5:1 de contraste. `#666F6E` passa em ambos os fundos claros do site (bege e branco).

### Named Rules
**The Two-Accent Rule.** Apenas dois acentos existem no sistema — dourado e verde-oficina — e nunca aparecem juntos no mesmo elemento; eles se alternam (ex.: listras de cards), nunca se combinam.

**The Rare Green Rule.** O verde-oficina é sempre o acento minoritário — hover de links e parte das listras de categoria — nunca a cor de fundo de um botão nem de um rótulo. Sua raridade é o que o mantém como um toque, não como identidade.

**The Dark-Text-on-Gold Rule.** Qualquer preenchimento sólido em dourado vívido (`#E0A526` ou `#BE8C20`) usa texto na tinta verde-escura (`#1E2B2A`), nunca branco — é o que garante contraste legível (~6.7:1) nesses botões.

**The Solid Secondary-Text Rule.** Texto de apoio sobre fundo claro nunca usa a tinta verde-escura com transparência (`#1E2B2AXX`) — isso cai abaixo de 4.5:1 dependendo do fundo. Usa sempre a cor sólida `texto-secundario` (`#666F6E`), verificada em ambos os fundos claros do site.

## Typography

**Display/Headline Font:** Lora (serif), com Georgia como fallback
**Body Font:** Archivo (sans-serif)

**Character:** Contraste editorial clássico — títulos serifados com peso 600 dão um ar de identidade de loja tradicional, enquanto o corpo em Archivo mantém a leitura prática e contemporânea.

### Hierarchy
- **Display** (600, `clamp(2rem, 4.5vw, 3.25rem)`, altura de linha 1.15): título principal do hero.
- **Headline** (600, 2rem/32-34px, altura de linha 1.2 — explícita no código, não herdada do navegador): títulos de seção ("De tudo um pouco", "A Loja", "Galeria" etc.).
- **Title** (700, 17px, altura de linha 1.3): título dos 12 cards de categoria (ex.: "Ferramentas"). A altura de linha explícita importa nos títulos de duas linhas ("Material elétrico e hidráulico", "Confecção de carimbos").
- **Body** (400-500, 1rem-1.125rem, altura de linha 1.6-1.7, `max-width: 60ch`): parágrafos e descrições; o parágrafo do hero é ligeiramente maior (18px). Todo parágrafo de Body leva `max-width: 60ch` para manter a medida de leitura confortável, mesmo dentro de colunas largas do grid.
- **Caption** (400, 14px, altura de linha 1.5): texto de apoio reutilizado — descrições dos cards de categoria, texto do rodapé, autoria dos depoimentos.
- **Label** (700, 0.8125rem, letter-spacing 1.5px, texto em caixa alta): rótulos "eyebrow" acima dos títulos de seção (ex.: "O QUE VOCÊ ENCONTRA AQUI").
- **Quote** (Lora itálico, 500, 1rem, altura de linha 1.6): citações de depoimentos.
- **Meta** (400, 15px, altura de linha 1.4): links do nav (que nunca quebram linha, `white-space:nowrap`) e as linhas de horário/endereço/WhatsApp/telefone/e-mail em "A Loja" (que podem quebrar linha no mobile — a altura de linha explícita evita que fiquem apertadas nesse caso).
- **Exceções pontuais, não-tokenizadas** (usadas uma única vez cada, de propósito — não viram token para não inflar a escala): 22px no logotipo do rodapé; 24px no logotipo do header.

### Named Rules
**The Serif-for-Emotion Rule.** Lora aparece só em títulos e citações — qualquer texto funcional (nav, botões, corpo, rótulos) fica em Archivo.

**The Explicit Line-Height Rule.** Todo elemento de texto que pode quebrar em duas ou mais linhas (headlines, títulos de card, valores de contato, parágrafos) declara `line-height` explicitamente — nunca depende do "normal" do navegador, que varia por fonte e cria ritmo vertical inconsistente entre a serifa (Lora) e a sans (Archivo).

## Layout

Container central com `max-width: 1440px`. Padding horizontal e vertical das seções é fluido via `clamp()` (ex.: `clamp(20px, 5vw, 48px)` horizontal, `clamp(48px, 8vw, 88px)` vertical), encolhendo em telas estreitas em vez de manter valores fixos.

O grid é sempre `repeat(auto-fit, minmax(min(Npx, 100%), 1fr))` — o `min(Npx, 100%)` é obrigatório: sem ele, a coluna mínima força overflow horizontal em qualquer viewport mais estreito que `Npx + padding`, o que quebra a página em praticamente todo celular. Colapsa para uma coluna em telas estreitas sem breakpoints fixos:
- Seções de duas colunas (Hero, A Loja, Contato): `minmax(min(360px, 100%), 1fr)`, gap de 56px.
- Cards de categoria: `minmax(min(240px, 100%), 1fr)`, gap de 18px.
- Galeria e depoimentos: `minmax(min(260px, 100%), 1fr)`, gap de 18-22px.

Toda imagem/mídia dentro de um grid (`<image-slot>`, moldura do mapa) leva `min-width: 0` — sem isso, o item recusa encolher abaixo do seu tamanho intrínseco mesmo com `width: 100%`, e a altura é fluida via `clamp()` (ex.: hero `clamp(240px, 55vw, 440px)`) em vez de um valor fixo, para não ficar desproporcional em telas estreitas.

O header é `position: sticky` no topo, com fundo bege translúcido (`#F7F4ECee`) e `backdrop-filter: blur(6px)`; os links de navegação levam `padding: 10px 0` para uma área de toque melhor em mobile.

### Named Rules
**The Min-Guarded Grid Rule.** Todo `minmax(Npx, 1fr)` em um grid desta página é escrito `minmax(min(Npx, 100%), 1fr)`. Nunca usar a forma sem o `min()` — ela quebra em mobile.

## Elevation & Depth

O sistema é inteiramente plano — nenhum `box-shadow` é usado em nenhum componente. A profundidade vem de duas fontes só: blocos de cor cheios (seções de fundo escuro `#1E2B2A` alternando com seções claras) e bordas finas de baixa opacidade sobre fundos claros (`#1E2B2A14`, `#1E2B2A0f`). O único efeito de "camada" no site é o `backdrop-filter: blur(6px)` do header fixo.

### Named Rules
**The No-Shadow Rule.** Nunca adicionar `box-shadow` a nenhum componente. Se um elemento precisa se destacar, isso é feito com cor de fundo cheia ou borda, nunca com sombra.

## Shapes

Geometria totalmente arredondada — nenhum elemento do site tem canto reto. Escala de raio:
- **999px (pill):** botão CTA do header/rodapé, badge do hero.
- **20px:** imagem do hero, imagem "A Loja", moldura do mapa.
- **16px:** imagens da galeria, cards de depoimento.
- **14px:** cards de categoria.
- **10px:** botões grandes (CTA do hero, botão "ghost" "Ver endereço").
- **8px:** botões pequenos do rodapé (WhatsApp, E-mail).

Os cards de categoria usam uma barrinha de destaque de 36×4px com `border-radius: 2px` como marca de cor, no lugar de ícones.

## Components

Todos os componentes seguem o mesmo caráter: **convidativo e caloroso** — cantos bem arredondados, cores quentes e transições suaves de cor, sem sombras nem bordas duras chamando atenção para si.

### Buttons
- **Shape:** pill (999px) nos botões de navegação/rodapé; 10px nos CTAs grandes de seção.
- **Primary:** fundo Dourado Artesanal (`#E0A526`), texto na tinta verde-escura (`#1E2B2A`, nunca branco — ver Dark-Text-on-Gold Rule), peso 600, padding `16px 30px` (grande) ou `11px 22px` (pill pequeno).
- **Hover:** fundo escurece para `#BE8C20`; nos links de texto, a cor muda para verde-oficina (`#1F6F5C`) — o único lugar onde o verde aparece em destaque.
- **Ghost (secundário):** fundo transparente, texto na cor tinta (`#1E2B2A`), borda 1.5px de baixíssima opacidade (`#1E2B2A2e`) que escurece no hover.
- **Footer:** variante translúcida sobre fundo escuro — fundo `#ffffff14`, radius 8px, hover `#ffffff26`.

### Cards / Containers
- **Corner Style:** 14px (categoria) / 16px (depoimento).
- **Background:** branco (categoria) ou bege-papel (depoimento, dentro de seção branca).
- **Shadow Strategy:** nenhuma — ver Elevation & Depth.
- **Border:** só os cards de categoria têm borda (`1px solid #1E2B2A0f`); os de depoimento não têm.
- **Internal Padding:** `26px 24px` (categoria), `30px 26px` (depoimento).

### Navigation
Header fixo, fundo bege translúcido com blur. Links de texto simples (peso 500, 15px, cor tinta) mais um único botão pill preenchido em destaque (WhatsApp). Em telas estreitas, o nav quebra linha (`flex-wrap: wrap`) mantendo o mesmo estilo.

### Image Slot (componente de assinatura)
Elemento customizado (`<image-slot>`, definido em `image-slot.js`) que envolve as fotos de "âncora" do site — hero, "A Loja" e "Quem Somos" — com placeholder, formato (`shape`) e raio (`radius`) configuráveis por instância, e um arquivo sidecar (`.image-slots.state.json`) que persiste qual imagem está em cada slot. A galeria (seção "GALERIA") não usa mais `<image-slot>` — virou o carrossel abaixo, com `<img>` simples (ver bug de `class` documentado em Motion, que também motivou essa escolha).

### Quem Somos
Seção escura (mesmo tratamento visual de "A Loja": fundo `#1E2B2A`, rótulo dourado, título e texto brancos), com a foto real dos donos atrás do balcão (`photos/quem-somos.png`) de um lado e a história da loja do outro. O rótulo eyebrow usa o ano de fundação (`DESDE 1995`) em vez do texto genérico das outras seções — um dado real de confiança, não decoração.

### Vídeo de Apresentação
Seção clara logo após "Quem Somos", vídeo institucional em `<video>` dentro de `ds-video-frame` (raio 20px, `max-width:960px` centralizado). Toca sozinho, mudo, em loop, assim que a página carrega — com controles nativos visíveis para o visitante ligar o som ou pausar quando quiser. Fonte: `videos/apresentacao.mp4`, recomprimido de 69,5MB (1080p, 12Mbps) para ~8,3MB (720p, ~1,3Mbps, H.264 CRF 24 + áudio AAC 128kbps) via `ffmpeg`, mantendo qualidade visual — o arquivo original ficou fora do projeto (pasta `Videos/`, com V maiúsculo, não rastreada).

### Carrossel da Galeria
Substitui a antiga grade estática de 6 fotos. Uma foto grande por vez (`ds-carousel-track`, `display:flex`, um `<img>` de `clamp(240px,45vw,420px)` de altura por slide, `object-fit:cover`), com:
- **Setas** (`ds-carousel-arrow`): círculo bege translúcido (`#F7F4ECcc`), 44×44px, hover dourado — nos dois lados, ícone desenhado em SVG (nunca caractere Unicode "‹›").
- **Pontos** (`ds-carousel-dot`): um por foto, o ativo fica dourado e 30% maior (`scale(1.3)`).
- **Avanço automático**: troca de foto a cada 4s, reinicia a contagem sempre que o usuário navega manualmente (seta, ponto ou arraste no touch).
- **Pausa em hover e em foco de teclado** (`:focus-visible`, não foco por clique — clicar num ponto não pode travar o carrossel pausado para sempre).
- **Efeito flutuante**: a foto visível balança bem suave (`translateY` ±6px, 4s, loop) e para de balançar em hover/foco — não é sombra nem glow, só o próprio quadro "flutuando".
- Roda inteiramente no mecanismo `<script data-dc-script>` / `class Component extends DCLogic` do runtime (estado real via `setState`, não CSS-only) — ver Named Rules abaixo pra sintaxe confirmada desse mecanismo.
- O avanço automático só liga se `prefers-reduced-motion` não estiver ativo; a navegação manual (seta/ponto/arraste) sempre funciona, com ou sem redução de movimento — só a transição fica instantânea e o balanço para.

### Motion
Hover/foco reais são feitos com classes CSS (`ds-btn-primary`, `ds-btn-ghost`, `ds-btn-footer`, `ds-link`, `ds-link-invert`, `ds-link-accent`, `ds-cat-card`) no `<style>` do `<helmet>`, não pelo atributo `style-hover` (esse atributo aparece morto no runtime — não é interpretado em lugar nenhum — então nunca foi funcional; qualquer novo hover deve usar as classes `ds-*`, não `style-hover`).

**Bug confirmado do runtime: `class="..."` não funciona em `<image-slot>`.** O dc-runtime renderiza o atributo `class` de um elemento customizado (qualquer tag com hífen) como `classname="..."` literal (React trata tag com hífen como custom element e não mapeia `class`→`className` como faz em `<div>`/`<a>`/etc.) — o CSS nunca casa, silenciosamente, sem erro no console. Confirmado ao vivo com Playwright: `document.getElementById('hero-img').className` retornava `""` mesmo com `class="ds-hero-img"` no template. **Nunca colocar `class` direto em `<image-slot>`.** Em vez disso: para a foto do hero, a animação/estilo vai no `<div class="ds-instrument">` que a envolve; para a galeria, o seletor usa o atributo `id` que cada `<image-slot>` já tem (`image-slot[id^="gal-"]`), que funciona normalmente porque não depende de `class`.

- **Entrada do hero:** `ds-hero-copy` (texto) e `ds-instrument` (envolve a foto) sobem e aparecem (`translateY(16px)→0`, opacidade `0→1`) em 0.6s ao carregar a página, com leve atraso entre os dois.
- **Cards de categoria:** sobem 4px no hover (`ds-cat-card`); em navegadores com suporte a `animation-timeline: view()` (Chrome/Edge), também recebem um fade de entrada ao rolar a página até eles — reforço progressivo, não uma dependência (Safari/Firefox só não entram nesse bloco, o card fica sempre visível).
- **Fotos da galeria:** ver seção "Carrossel da Galeria" acima — não usa mais `<image-slot>`, o zoom/flutuação está documentado lá.
- **Botões e links:** transição de cor/fundo de 150ms; os pills preenchidos também têm um leve "afundar" (`scale(0.97)`) ao clicar.
- Tudo respeita `prefers-reduced-motion: reduce` — animação de entrada e todos os transforms são desligados, mas a mudança de cor/fundo em si (o feedback em si) continua.
- **Barrinha de destaque dos cards** (`ds-cat-bar`): estica de 36px para 48px no hover do card via `transform: scaleX()` a partir da borda esquerda (nunca `width` — anima layout e gera jank; a extensão usa `transform-origin: left`), como se a categoria fosse sublinhada com marca-texto.
- **Aspa decorativa nos depoimentos** (`ds-quote-card::before`): aspa dupla da Lora em 72px, 20% de opacidade dourada, atrás do texto da citação — ornamento tipográfico pontual, não faz parte da escala de tamanhos documentada.
- **Seleção de texto** (`::selection`): fundo dourado (`#E0A526`), texto na tinta — até o estado de seleção do navegador segue a paleta da marca.
- **Painel de instrumentos do hero** (`ds-instrument`, envolve a `<image-slot>` da foto principal): na carga da página, 4 cantos tipo mira (`ds-bracket`) se desenham na foto via `transform: scaleX()/scaleY()` a partir do ponto do canto (nunca `stroke-dashoffset` de SVG — mais caro de renderizar), em sequência (.55s→.82s, 90ms de intervalo), seguidos de uma única varredura horizontal (`ds-scanline`, gradiente dourado transparente-dourado-transparente, nunca um `box-shadow` difuso) que atravessa a foto uma vez e some. Roda uma única vez por carregamento, não em loop. Com `prefers-reduced-motion: reduce`, os cantos aparecem prontos e a varredura nunca aparece.

### Named Rules
**The `ds-*` Class Rule.** Todo estado interativo (hover, foco, animação) usa uma classe `ds-*` declarada no `<style>` do `<helmet>` — nunca o atributo `style-hover` (morto) nem estilo inline para pseudo-classes (impossível; inline não aceita `:hover`).

**The Transform-Not-Width Rule.** Nenhuma animação anima `width`, `height`, `top`, `left` ou `margin` (gera layout thrash). Uma barra que "cresce" usa `transform: scaleX()` com `transform-origin`, nunca `width`.

**The No-Class-on-image-slot Rule.** `class="..."` não funciona em `<image-slot>` (vira `classname="..."` literal no DOM renderizado, sem erro, sem casar com CSS nenhum). Para estilizar/animar uma `<image-slot>` específica: envolva em um `<div>`/`<span>` com a classe (caso do hero, `ds-instrument`), ou use o `id` que ela já tem via seletor de atributo (`image-slot[id^="prefixo-"]`). Nunca confie em `class` direto nessa tag. Se a foto não precisa do sistema de placeholder/upload do `image-slot.js`, considere `<img>` simples em vez disso (caso do carrossel da galeria) — evita o problema de vez.

**The DCLogic Interactivity Rule.** Interatividade real (estado, cliques, timers) usa `<script data-dc-script>` com `class Component extends DCLogic` no fim do `<x-dc>` — confirmado ao vivo com Playwright antes de construir o carrossel, porque esse mecanismo não é documentado em lugar nenhum e falha silenciosamente quando usado errado. Padrões confirmados:
- `state = {...}` (campo de classe) + `this.setState(update, cb?)` (aceita objeto ou função `(state) => patch`).
- `renderVals()` retorna o objeto que o template lê — todo `{{chave}}` no HTML busca dali (ou de `props`). É onde deve morar toda lógica condicional: o template só sabe interpolar `{{identificador}}`, comparar igualdade (`{{a === b}}`) e negar (`{{!a}}`) — sem `+`, sem `? :`, sem chamada de função com argumento. Qualquer string computada (classe, estilo, texto condicional) deve ser montada dentro de `renderVals()`, nunca no HTML.
- Eventos: `onclick="{{nomeDoMetodo}}"` (nunca `onclick="metodo()"`) — o método recebe o evento nativo do DOM; para diferenciar QUAL elemento dentro de uma lista disparou, usa `data-*` no HTML e lê `e.currentTarget.dataset.x` dentro do método (evita precisar de um mecanismo de "repetir com índice").
- `componentDidMount()`/`componentWillUnmount()` funcionam normalmente — confirmado com um `setInterval` real.
- Foco disparado por clique de mouse ainda ativa `onfocus`; para distinguir de navegação por teclado, teste `e.target.matches(':focus-visible')` dentro do handler.

**The No-Bare-Boolean-Attribute Rule.** Atributos HTML booleanos escritos "soltos" (`muted`, `autoplay`, `loop`, `playsinline`, `controls`, `disabled`, etc., sem `="valor"`) compilam para string vazia nesse runtime, e `""` é falsy em JS — o atributo aparece no DOM mas a propriedade real fica `false`, sem erro, sem aviso. Confirmado ao vivo: `<video muted>` renderizava com `video.muted === false`. **Sempre escrever o valor explícito**: `muted="muted"`, `autoplay="autoplay"`, etc. Além disso, `<video autoplay>` renderizado via React frequentemente não toca sozinho mesmo com a propriedade certa — o `componentDidMount` da lógica da página chama `video.play()` manualmente como reforço (ver Vídeo de Apresentação).

## Do's and Don'ts

### Do:
- **Do** manter o bege-papel (`#F7F4EC`) como fundo padrão da página — branco puro só nos cards/seções que precisam se destacar dele.
- **Do** manter toda a geometria arredondada, com 10px como o menor raio usado em qualquer botão ou card.
- **Do** alternar blocos de cor sólida (seções escuras vs. claras) para criar ritmo, no lugar de sombras.
- **Do** usar o dourado como cor de ação padrão (botões, links, rótulos) — é a cor real da marca (uniforme + fachada).
- **Do** usar texto na tinta verde-escura sobre qualquer preenchimento dourado vívido, nunca branco.
- **Do** manter o verde-oficina raro — hover de link e parte das listras de categoria, nada além disso.

### Don't:
- **Don't** adicionar `box-shadow` a nenhum componente — o sistema é deliberadamente plano.
- **Don't** introduzir uma terceira cor de acento — a paleta é estritamente dourado + verde-oficina.
- **Don't** usar cantos retos em qualquer elemento novo — toda a linguagem visual do site é arredondada.
- **Don't** usar o dourado vívido (`#E0A526`) como cor de texto sobre fundo bege ou branco — o contraste falha; use `#8a6a12` (dourado-terroso) nesse caso.
- **Don't** usar verde-oficina como texto ou rótulo sobre a seção escura (`#1E2B2A`) — os dois são escuros demais entre si, o contraste falha.
