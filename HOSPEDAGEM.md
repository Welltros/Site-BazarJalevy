# Como publicar o site na HostGator

Site: **Bazar Jalevy** · Domínio: **bazarjalevy.com** (sem www)

> Se o domínio for outro, antes de subir troque `bazarjalevy.com` nos arquivos
> `index.html`, `robots.txt` e `sitemap.xml` (e rode `node build-deploy.mjs` de novo).

---

## O que sobe pra HostGator

Só o **conteúdo da pasta `deploy/`**. Ela é gerada por `node build-deploy.mjs` e
contém exatamente o necessário:

```
deploy/
├── .htaccess               ← configuração do servidor (HTTPS, segurança, cache)
├── index.html              ← o site
├── support.js              ← runtime (não editar)
├── image-slot.js           ← runtime (não editar)
├── favicon.svg / .png
├── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
├── photos/  (12 imagens)
└── videos/  apresentacao.mp4
```

**NUNCA suba** `.git/`, `.claude/`, `.impeccable/`, `DESIGN.md`, `README.md`,
`HOSPEDAGEM.md`, `build-deploy.mjs`, a pasta `Videos/` (vídeo bruto de 69 MB),
nem as fotos `IMG_*.jpg` / `carimbos-anuncio.png` / `eletrica-hidraulica.jpg`.
Se subir sem querer, o `.htaccess` bloqueia o acesso — mas o certo é só enviar `deploy/`.

---

## Passo a passo

### 1. Apontar o domínio para a HostGator
No painel onde o domínio `bazarjalevy.com` foi registrado, configure os
**nameservers** da HostGator (algo como `ns1.hostgator.com.br` / `ns2.hostgator.com.br`
— os corretos aparecem no e-mail de boas-vindas da HostGator e no cPanel).
A propagação leva de alguns minutos a algumas horas.

### 2. Ativar o SSL grátis (HTTPS)
No **cPanel** → seção **Segurança** → **SSL/TLS Status** (ou **AutoSSL**).
Marque o domínio e clique em **Run AutoSSL**. Espere até aparecer o cadeado
verde / "Certificate: Valid". Isso é obrigatório — o `.htaccess` força HTTPS.

### 3. Enviar os arquivos
**Opção A — Gerenciador de Arquivos do cPanel (mais simples):**
1. cPanel → **Gerenciador de Arquivos** → entre em `public_html/`.
2. Apague o que estiver lá (ex.: `default.html` da HostGator).
3. Clique em **Configurações** (canto superior direito) → marque
   **"Mostrar arquivos ocultos (dotfiles)"** → Salvar. Isso é essencial pro
   `.htaccess` aparecer.
4. Compacte a pasta `deploy/` num `.zip` (o arquivo `bazar-jalevy-deploy.zip`
   já vem pronto), clique em **Upload**, envie o `.zip`.
5. De volta no Gerenciador, clique com o botão direito no `.zip` → **Extract**.
6. Confira: os arquivos (`index.html`, `.htaccess`, `photos/`, `videos/`…)
   têm que ficar **direto em `public_html/`**, não dentro de `public_html/deploy/`.
   Se ficaram dentro de uma subpasta, mova tudo um nível acima.
7. Apague o `.zip` depois de extrair.

**Opção B — FTP (FileZilla):**
Use os dados de FTP do cPanel. Envie o **conteúdo** de `deploy/` para `public_html/`
(incluindo o `.htaccess` — no FileZilla, menu **Servidor → Forçar exibição de
arquivos ocultos**).

### 4. Testar
Abra `https://bazarjalevy.com` (sem www e com https).
- [ ] Cadeado de segurança aparece
- [ ] `http://bazarjalevy.com` redireciona pra `https://`
- [ ] `https://www.bazarjalevy.com` redireciona pra sem-www
- [ ] O vídeo toca sozinho (mudo) e o botão "Ativar som" funciona
- [ ] O carrossel de fotos passa sozinho
- [ ] Abre bem no celular
- [ ] `https://bazarjalevy.com/robots.txt` e `/sitemap.xml` abrem

### 5. Ligar o HSTS (opcional, recomendado)
Depois que o HTTPS estiver 100% funcionando por alguns dias, edite o `.htaccess`
e descomente a linha do `Strict-Transport-Security` (tire o `#`). Isso força o
navegador a sempre usar HTTPS.

---

## Depois de no ar — SEO

1. **Google Search Console** (https://search.google.com/search-console)
   - Adicione a propriedade `bazarjalevy.com` (verificação por registro DNS TXT,
     que se faz no mesmo painel de nameservers).
   - Em **Sitemaps**, envie `https://bazarjalevy.com/sitemap.xml`.
   - Use **Inspeção de URL** na home e clique em "Solicitar indexação".

2. **Perfil da Empresa no Google** (https://business.google.com) — **o mais importante
   pra loja de bairro.**
   - Crie/reivindique o "Bazar Jalevy", endereço **Rua Marco Polo, 237 – Vila da Penha, RJ**.
   - Use **exatamente** o mesmo nome, endereço e telefone que estão no site
     (nome: *Bazar Jalevy*; tel: *(21) 2481-1725*; WhatsApp: *(21) 99132-9314*).
   - Categoria principal: *Papelaria*. Categorias extras: *Loja de ferragens*,
     *Loja de materiais elétricos*, *Loja de informática*.
   - Horário: Seg–Sex 8h–18h, Sáb 8h–13h.
   - Coloque o site `https://bazarjalevy.com` e várias fotos.

3. **Bing Webmaster Tools** (https://www.bing.com/webmasters) — opcional, rápido:
   dá pra importar direto do Search Console e enviar o mesmo sitemap.

4. **Peça avaliações** no Perfil da Empresa do Google — nota e volume de
   avaliações pesam muito no ranking local.

---

## Se algo der errado

| Sintoma | Causa provável | Solução |
|---|---|---|
| Erro 500 ao abrir o site | `.htaccess` com módulo indisponível | Renomeie `.htaccess` pra `.htaccess.txt`, veja se o site abre. Se abrir, reative bloco por bloco (os `<IfModule>` já protegem a maioria). |
| Site abre sem estilo / imagens quebradas | Arquivos na subpasta errada | Tudo tem que estar direto em `public_html/`, não em `public_html/deploy/`. |
| "Not Secure" / sem cadeado | AutoSSL não rodou | cPanel → SSL/TLS Status → Run AutoSSL. Espere o certificado. |
| Vídeo não aparece | `videos/` foi pra `Videos/` (V maiúsculo) | O servidor da HostGator é Linux e diferencia maiúscula/minúscula. A pasta tem que ser `videos/` minúsculo. |
| Fonte errada / "piscando" | Primeira carga sem internet no servidor de fontes | Normal — a página busca as fontes e o React no primeiro acesso. Recarregue. |
| CSS/JS antigo depois de atualizar | Cache do navegador | Ctrl+F5. O `.htaccess` põe cache curto no HTML, mas o navegador pode segurar. |
