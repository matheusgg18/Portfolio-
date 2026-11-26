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

 <section class="sec"><p class="tag rv">Como eu crio</p><h2 class="rv">Da ideia ao <em>projeto no ar</em></h2>
  <div class="slider rv" id="slider">
   ${PROCESS.map((s,i)=>`<div class="slide${i?"":" on"}" style="--bg-s:${s.c};--sx:${[72,28,62,44][i%4]}%"><div class="kb"></div><div class="txt"><small>0${i+1}</small><h3>${s.t}</h3><p>${s.d}</p></div></div>`).join("")}
   <div class="dots">${PROCESS.map((_,i)=>`<i data-i="${i}"></i>`).join("")}</div>
   <div class="ctl"><button data-d="-1" aria-label="Anterior">←</button><button data-d="1" aria-label="Próximo">→</button></div>
  </div></section>

 <section class="sec"><p class="tag rv">Projetos</p><h2 class="rv">Projetos <em>em destaque</em></h2>
  <div class="work-grid">${PROJECTS.slice(0,4).map(card).join("")}</div>
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
 const pv=p.previews.length?p.previews.slice(0,4).map(s=>`<div class="pv rv" style="--cv:${p.c}"><img src="${s}" alt="" onerror="this.remove()"></div>`)
  :[0,1,2,3].map(k=>`<div class="pv rv" style="--cv:${p.c};--k:${k}"><b>${p.n} 0${k+1}</b></div>`); // sem imagens: cenários coloridos
 return `<section class="sec proj-head"><p class="tag">${p.cat}</p><h1>${p.t}</h1>
  <div class="proj-body"><div><div class="chips">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
   ${p.url?`<p style="margin-top:26px"><a class="btn fill" target="_blank" rel="noopener" href="${p.url}">Ver no GitHub ↗</a></p>`:""}
   ${p.credit?`<p class="note" style="margin-top:22px">${p.credit}</p>`:""}</div>
   <div>${p.long.map(x=>`<p>${x}</p>`).join("")}</div></div>
  <div class="previews">${pv.join("")}</div>
  <a class="next" href="#projeto-${nx.slug}"><span>Próximo projeto</span><h3>${nx.t}</h3></a></section>`}

/* ----- #diario e #post-<slug> ----- */
function pDiary(){return `<section class="sec proj-head"><p class="tag">Diário</p><h1>Textos e <em>bastidores</em></h1>
 ${POSTS.length?`<div class="grid3">${POSTS.map(postCard).join("")}</div>`
 :`<p style="color:var(--mute);max-width:560px;margin-bottom:26px">Os primeiros textos estão a caminho. Enquanto isso, você pode acompanhar o que eu escrevo no Dev.to.</p>${ME.devto?`<a class="btn fill" target="_blank" rel="noopener" href="${ME.devto}">Ver no Dev.to ↗</a>`:""}`}</section>`}
function pPost(p){return `<section class="sec proj-head post"><p class="tag">${p.cat} · ${p.min} min de leitura</p><h1>${p.t}</h1>${p.corpo.map(x=>`<p>${x}</p>`).join("")}<a class="next" href="#diario"><span>Voltar</span><h3>Todos os textos</h3></a></section>`}

/* ----- #contato (formulário com validação, honeypot e limite de envios) ----- */
function pContact(){return `
 <section class="sec contact"><div><p class="tag">Contato</p><h1>Vamos <em>conversar</em></h1>
  <p style="color:var(--mute)">Quer trocar uma ideia, falar de um projeto ou de uma oportunidade? Me chama.</p>
  <div class="chan">${links().map(l=>`<a target="_blank" rel="noopener" href="${l[1]}">${l[0]} ↗</a>`).join("")}</div></div>
  <form id="cf" novalidate>
   <label class="f">Nome<input name="nome" autocomplete="name"></label>
   <label class="f">E-mail<input name="email" type="email" autocomplete="email"></label>
   <label class="f">Assunto<select name="assunto">${["Conversa","Projeto","Oportunidade","Outro"].map(o=>`<option>${o}</option>`).join("")}</select></label>
   <label class="f">Mensagem<textarea name="msg"></textarea></label>
   <input class="hp" name="site" tabindex="-1" autocomplete="off" aria-hidden="true">
   <button class="btn fill" style="align-self:flex-start">Enviar mensagem</button><p id="cst" role="status"></p>
  </form></section>`}
function initContact(){const f=$("#cf"),st=$("#cst");if(!f)return;
 const say=(t,e)=>{st.textContent=t;st.className=e?"err":""};
 f.onsubmit=async e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
  if(d.site)return;                                           // honeypot: robôs preenchem, pessoas não
  if(d.nome.trim().length<2)return say("Informe seu nome.",1);
  if(!/^\S+@\S+\.\S+$/.test(d.email))return say("Informe um e-mail válido.",1);
  if(d.msg.trim().length<10)return say("Escreva uma mensagem com pelo menos 10 caracteres.",1);
  try{const l=+localStorage.getItem("lastSend")||0;if(Date.now()-l<30000)return say("Aguarde alguns segundos antes de enviar de novo.",1);localStorage.setItem("lastSend",Date.now())}catch(_){} // limite: 1 envio / 30s
  const txt=`Olá, ${ME.name.split(" ")[0]}! Sou ${d.nome} (${d.email}). Assunto: ${d.assunto}.\n\n${d.msg}`;
  if(ME.formEndpoint){try{const r=await fetch(ME.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)});if(r.ok){f.reset();return say("Mensagem enviada! Já já eu respondo.")}}catch(_){}return say("Não consegui enviar agora. Tente pelos canais ao lado.",1)}
  if(ME.whatsapp){open("https://wa.me/"+ME.whatsapp+"?text="+encodeURIComponent(txt),"_blank");return say("Abrindo o WhatsApp com a sua mensagem…")}
  if(ME.email){location.href=`mailto:${ME.email}?subject=${encodeURIComponent(d.assunto)}&body=${encodeURIComponent(txt)}`;return say("Abrindo o seu e-mail…")}
  try{await Promise.race([navigator.clipboard.writeText(txt),new Promise(r=>setTimeout(r,800))])}catch(_){} // copia a mensagem (sem travar se o navegador bloquear)
  say("Ainda não há WhatsApp ou e-mail configurados. Sua mensagem foi copiada; envie pelos canais ao lado.")}}

/* ----- 404 ----- */
const p404=()=>`<section class="nf"><h1>404</h1><p style="color:var(--mute)">Essa rua não existe em Vice City.</p><p><a class="btn fill" href="#home">Voltar ao início</a></p></section>`;
