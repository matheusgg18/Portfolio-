/* ============================================================
   js/pages.js · PÁGINAS DO SITE
   Cada função pXxx() devolve o HTML de uma página (rota);
   cada initXxx() liga os eventos daquela página depois de desenhada.
   ============================================================ */

/* ---------- Peças reutilizáveis ---------- */
function card(p){ // card de projeto (home e portfólio)
 // Se o projeto tem "url" (GitHub), clicar no card abre o repositório numa nova aba.
 // Se NÃO tem url (ex.: projeto no Softr), abre a página de detalhes do próprio site.
 const ext=!!p.url, go=ext?p.url:"#projeto-"+p.slug;
 return `<a class="work rv" href="${go}"${ext?' target="_blank" rel="noopener"':""} data-cat="${p.cat}" aria-label="${p.t}${ext?" (abre o GitHub em nova aba)":""}">
  <div class="cover" style="--cv:${p.c}"><b>${p.n}</b>
   ${p.cover?`<img src="${p.cover}" alt="Imagem do projeto ${p.t}" loading="lazy" onerror="this.remove()">`:""}  <!-- sem imagem (ou arquivo ausente): aparece o cenário colorido -->
   <span class="go">${ext?"GitHub ↗":"Ver detalhes →"}</span></div>
  <div class="meta"><div><h3>${p.t}</h3><p>${p.d}</p></div><span>${p.cat}</span></div></a>`}
const postCard=p=>`<a class="card rv" href="#post-${p.slug}"><small>${p.cat} · ${p.min} min</small><h3>${p.t}</h3><p>${p.resumo}</p></a>`;

/* ============================================================
   PÁGINAS (cada função devolve o HTML de uma rota)
   ============================================================ */

/* ----- #home ----- */
function pHome(){
 const mq=[...MARQUEE,...MARQUEE].map(k=>`<span>${k.toUpperCase()}</span><span>✦</span>`).join("").repeat(2);
 return `
 <section class="hero"><div class="sun"></div><svg class="sky" viewBox="0 0 1200 300" preserveAspectRatio="none"></svg>${PALMS}
  <p class="eyebrow">Portfólio · ${ME.location}</p>
  <h1><span id="typed"></span><i class="caret"></i></h1>
  <p class="sub">Aqui você encontra meus projetos, o que eu estudo e um pouco da minha história.</p>
  <div class="row"><a class="btn fill" href="#portfolio">Ver projetos</a><a class="btn" href="#contato">Fale comigo</a></div>
 </section>
 <div class="marquee"><div>${mq}</div></div>

 <section class="sec"><div class="about">
  <div><p class="tag rv">Sobre mim</p><h2 class="rv">Código com <em>atitude</em></h2>
   ${ABOUT.map(t=>`<p class="rv">${t}</p>`).join("")}
   <div class="chips rv">${TECH.map(t=>`<span>${t}</span>`).join("")}</div></div>
  <div class="photo rv"><b>MT</b><img id="photo" alt="Foto de ${ME.name}"></div>
 </div></section>

 <section class="sec"><p class="tag rv">Trajetória</p><h2 class="rv">Minha <em>história</em></h2>
  <div class="journey">${JOURNEY.map((j,i)=>`<div class="jn rv"><span>0${i+1}</span><div><h3>${j.t}</h3><small>${j.sub}</small><p>${j.d}</p></div></div>`).join("")}</div></section>

 <section class="sec"><p class="tag rv">Projetos</p><h2 class="rv">Projetos <em>em destaque</em></h2>
  <!-- Carrossel de projetos: usa a lista PROJECTS do js/config.js.
       A imagem de cada slide é o "cover" do projeto (ex.: img/sistema-clinica.jpg).
       Sem a imagem, aparece o cenário colorido no lugar. -->
  <div class="slider rv" id="slider">
   ${PROJECTS.map((p,i)=>{const ext=!!p.url,go=ext?p.url:"#projeto-"+p.slug;
    return `<div class="slide${i?"":" on"}" style="--bg-s:${p.c};--sx:${[72,28,62,44][i%4]}%"><div class="kb">${p.cover?`<img src="${p.cover}" alt="Imagem do projeto ${p.t}" onerror="this.remove()">`:""}</div><div class="txt"><small>0${i+1} · ${p.cat}</small><h3>${p.t}</h3><p>${p.d}</p><p style="margin-top:18px"><a class="btn fill" href="#projeto-${p.slug}">Ver detalhes</a></p></div></div>`}).join("")}
   <div class="dots">${PROJECTS.map((_,i)=>`<i data-i="${i}"></i>`).join("")}</div>
   <div class="ctl"><button data-d="-1" aria-label="Anterior">←</button><button data-d="1" aria-label="Próximo">→</button></div>
  </div>
  <p style="margin-top:50px"><a class="btn" href="#portfolio">Ver todos os projetos</a></p></section>

 ${POSTS.length?`<section class="sec"><p class="tag rv">Diário</p><h2 class="rv">Últimos <em>textos</em></h2><div class="grid3">${POSTS.slice(0,3).map(postCard).join("")}</div></section>`:""}

 <section class="cta"><p class="tag rv">Contato</p><h2 class="rv">Vamos <em>conversar?</em></h2>
  <div class="row rv"><a class="btn fill" href="#contato">Enviar mensagem</a></div></section>`}

/* ----- #portfolio (galeria em 2 colunas + filtro por categoria) ----- */
function pPortfolio(){const cats=["Todos",...new Set(PROJECTS.map(p=>p.cat))];return `
 <section class="sec proj-head"><p class="tag">Portfólio</p><h1>Meus <em>trabalhos</em></h1>
  <div class="filters">${cats.map((c,i)=>`<button class="${i?"":"on"}" data-c="${c}">${c}</button>`).join("")}</div>
  <div class="work-grid">${PROJECTS.map(card).join("")}</div></section>`}
function initFilters(){$$(".filters button").forEach(b=>b.onclick=()=>{
 $$(".filters button").forEach(x=>x.classList.toggle("on",x===b));
 $$(".work").forEach(w=>w.style.display=(b.dataset.c==="Todos"||w.dataset.cat===b.dataset.c)?"":"none")})}

/* ----- #projeto-<slug> (página de cada projeto, até 4 imagens) ----- */
function pProject(p){const i=PROJECTS.indexOf(p),nx=PROJECTS[(i+1)%PROJECTS.length];
 const pv=p.previews.length?p.previews.slice(0,4).map(s=>`<div class="pv rv" style="--cv:${p.c}"><img src="${s}" alt=""
