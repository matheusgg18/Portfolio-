<div align="center">

# 🌴 Portfólio Vice City

**Portfólio pessoal de Matheus Teixeira de Oliveira** · inspirado no visual de Vice City (GTA VI)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Sem build](https://img.shields.io/badge/build-nenhum-2de2c8)
![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-ff4d8d)

[Ver o site](https://matheusgg18.github.io/portfolio/) · [GitHub](https://github.com/matheusgg18) · [Instagram](https://instagram.com/matheus1520_) · [LinkedIn](https://www.linkedin.com/in/matheus-teixeira-6b305131b/)

</div>

> 📸 **Prévia:** salve um print do site em `img/preview.png` e ele aparece aqui:
> `![Prévia do portfólio](img/preview.png)`

---

## 📖 Sobre o projeto

Site de portfólio com foco em **mostrar quem eu sou, minha trajetória e meus projetos**. Cada card de projeto leva direto ao repositório no GitHub.

A organização das páginas (hero que digita, menu em tela cheia, slider, galeria, página de projeto, trajetória, diário e contato) segue o template *Mono Agency Portfolio* da Lovable. **Todo o código, o tema Vice City e o conteúdo são próprios.**

## ✨ Funcionalidades

- **Hero com texto digitando**, cursor piscando e sol acompanhando o mouse
- **Menu em tela cheia** com desfoque e links entrando em sequência
- **Trajetória**: formação e experiências
- **Slider "Como eu crio"** com efeito Ken Burns, autoplay, setas e bolinhas
- **Galeria de projetos** com filtro por categoria; clicar abre o **repositório no GitHub**
- **Página de detalhes** de cada projeto (descrição, tecnologias, até 4 imagens, próximo projeto)
- **Diário (blog)**, que aparece quando há textos
- **Formulário de contato** com validação, campo anti-robô (honeypot) e limite de 1 envio a cada 30 s
- Rotas por `hash` (`#home`, `#portfolio`, `#projeto-...`, `#diario`, `#contato`) e página 404
- Responsivo, com foco visível no teclado e respeito a `prefers-reduced-motion`

## 🧰 Tecnologias

### Usadas

| Tecnologia | Onde aparece | Para quê |
| --- | --- | --- |
| **HTML5** | `index.html` | Estrutura da página, metadados (SEO e compartilhamento) e ícone |
| **CSS3** | `css/style.css` | Layout com Grid e Flexbox, variáveis (`:root`), animações (`@keyframes`), `backdrop-filter`, máscaras e media queries |
| **JavaScript (ES6+)** | `js/*.js` | Roteamento, renderização das páginas, animações, formulário |
| **SVG** | `js/scene.js` | Palmeiras e skyline desenhadas por código |
| **Google Fonts** | `index.html` | Fontes *Inter* (texto) e *Anton* (destaques), com fontes de reserva |

### APIs do navegador adotadas

| API | Uso |
| --- | --- |
| `IntersectionObserver` | Animar elementos ao aparecerem na tela |
| `location.hash` + `hashchange` | Navegação entre páginas sem recarregar |
| `FormData`, `fetch` | Ler e (opcionalmente) enviar o formulário |
| `localStorage` | Limite de envios do formulário (com `try/catch`) |
| `Clipboard API` | Copiar a mensagem quando não há canal configurado |

### Decisões técnicas

- **Sem frameworks e sem build:** é só abrir o `index.html`. Isso deixa o projeto leve e fácil de entender e de hospedar.
- **Conteúdo separado do código:** tudo que muda (contatos, projetos, textos) fica em `js/config.js`; o resto é o "motor".
- **Aplicação de página única (SPA) com roteador por `hash`:** funciona no GitHub Pages sem configurar servidor.
- **Scripts clássicos em ordem** (sem módulos ES): assim o site também abre com duplo clique, direto do computador.
- **Renderização por funções:** cada página é uma função `pXxx()` que devolve HTML a partir dos dados do `config.js`.
- **Fallbacks:** sem imagem de projeto, aparece um cenário colorido; sem WhatsApp/e-mail, o botão some.
- **Acessibilidade e conforto:** `aria-label`, foco visível, `prefers-reduced-motion`, textos com contraste sobre o cenário.

## 📁 Estrutura

```
portfolio-vice/
├── index.html        # casca da página: menu, rodapé, metadados
├── css/
│   └── style.css     # todo o visual (variáveis de cor/fonte no :root)
├── js/
│   ├── config.js     # ✏️ SEU CONTEÚDO (o arquivo que você mais edita)
│   ├── utils.js      # atalhos e lista de contatos
│   ├── ui.js         # menu em tela cheia e rodapé
│   ├── scene.js      # cenário: palmeiras e skyline
│   ├── effects.js    # digitação, slider, aparecer ao rolar
│   ├── pages.js      # HTML de cada página
│   └── main.js       # roteador que liga tudo
├── img/              # 🖼️ imagens dos projetos e sua foto (veja img/LEIA-ME.md)
├── LICENSE
└── README.md
```

**Fluxo:** `config.js` (dados) → `pages.js` (monta o HTML) → `main.js` (roteia pelo `hash`) → `effects.js` (anima).
A **ordem dos scripts no `index.html` importa**: `config` → `utils` → `ui` → `scene` → `effects` → `pages` → `main`.

## ✏️ Como editar

Abra **`js/config.js`**, que tem um guia no topo e comentários em cada campo.

| O que mudar | Onde |
| --- | --- |
| Contatos, foto, links | `ME` |
| Frases que digitam no topo | `HEADLINES` |
| Texto "Sobre", tecnologias, faixa de palavras | `ABOUT`, `TECH`, `MARQUEE` |
| Formação e experiências | `JOURNEY` |
| Etapas do slider | `PROCESS` |
| Projetos | `PROJECTS` |
| Textos do diário | `POSTS` |

Cores e fontes: variáveis no `:root` de `css/style.css`.

### ➕ Adicionar um projeto

Em `PROJECTS`, copie um bloco `{ ... }`, cole depois de uma vírgula e edite `slug`, `t` (título), `cat`, `d`, `tags` e `url` (link do GitHub). O filtro por categoria é criado sozinho.

### 🖼️ Colocar imagens nos projetos

1. Tire um print do projeto (ideal **1200 × 900 px**, `.jpg`, `.png` ou `.webp`).
2. Salve em `img/` com o nome que está em `cover` no `config.js` (ex.: `img/sistema-clinica.jpg`).
3. Atualize a página. Sem a imagem, o site usa o cenário colorido.

A tabela com os nomes certos está em [`img/LEIA-ME.md`](img/LEIA-ME.md).

### 🔗 Clique no projeto

- Com `url` preenchida, o card abre o **GitHub em nova aba**.
- Com `url` vazia (`""`), o card abre a **página de detalhes** do próprio site.

### 📬 Formulário de contato

- Com `ME.formEndpoint` (ex.: um endereço do [Formspree](https://formspree.io)), a mensagem é enviada para o seu e-mail.
- Sem ele, o formulário abre o **WhatsApp** (se `ME.whatsapp` estiver preenchido) ou o **e-mail** (se `ME.email` estiver preenchido).
- Se nenhum dos dois existir, a mensagem é copiada para você colar onde quiser.

## ▶️ Rodar localmente

```bash
git clone https://github.com/matheusgg18/portfolio.git
cd portfolio
```

Abra o `index.html` no navegador. Opcional: use a extensão **Live Server** do VS Code para atualizar sozinho a cada alteração.

## 🚀 Publicar no GitHub Pages

1. Suba os arquivos para um repositório (ex.: `portfolio`):
   ```bash
   git init
   git add .
   git commit -m "Portfólio Vice City"
   git branch -M main
   git remote add origin https://github.com/matheusgg18/portfolio.git
   git push -u origin main
   ```
2. No GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/ (root)`.
4. Em alguns minutos o site fica em `https://matheusgg18.github.io/portfolio/`.

## 🗺️ Próximos passos

- [ ] Adicionar os prints que faltam em `img/` (veja a tabela em `img/LEIA-ME.md`)
- [ ] Preencher WhatsApp e e-mail em `ME`
- [ ] Escrever os primeiros textos do diário (`POSTS`)
- [ ] Incluir novos projetos conforme forem concluídos

## 🙏 Créditos

- Estrutura de páginas inspirada no template *Mono Agency Portfolio* (Lovable).
- Tema visual inspirado em Vice City / GTA VI. Projeto de fã, **sem vínculo com a Rockstar Games ou a Take-Two**; nenhum material oficial é usado.
- Fontes: [Inter](https://rsms.me/inter/) e [Anton](https://fonts.google.com/specimen/Anton), via Google Fonts.

## 👤 Autor

**Matheus Teixeira de Oliveira**
Ciência da Computação (UDF) · Técnico em Eletrônica (IFB) · Desenvolvedor web em formação

## 📄 Licença

Distribuído sob a licença [MIT](LICENSE).

## Site
<img width="1188" height="1188" alt="qr-code" src="https://github.com/user-attachments/assets/246f13f7-d3b9-4ac0-80c8-f0053672404b" />

