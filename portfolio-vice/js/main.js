/* ============================================================
   js/main.js · ROTEADOR (arquivo que "liga" tudo)
   Lê o endereço (#home, #portfolio...) e desenha a página certa.
   Ordem dos scripts no index.html: config > utils > ui > scene > effects > pages > main
   ============================================================ */

/* ============================================================
   ROTAS: o endereço (#home, #portfolio, #projeto-x...) escolhe a página
   ============================================================ */
function render(){
 clearTimeout(TY);clearInterval(SL);
 const h=(location.hash||"#home").slice(1);let html,title=ME.name+" — "+ME.role,init=()=>{};
 const proj=PROJECTS.find(x=>"projeto-"+x.slug===h),post=POSTS.find(x=>"post-"+x.slug===h);
 if(h==="home"){html=pHome();init=()=>{skyline($(".sky"));typer();initSlider();
   const ph=$("#photo");if(ME.photo){ph.src=ME.photo;ph.onerror=()=>ph.remove()}else ph.remove()}}
 else if(h==="portfolio"){html=pPortfolio();init=initFilters;title="Portfólio — "+ME.name}
 else if(proj){html=pProject(proj);title=proj.t+" — "+ME.name}
 else if(h==="diario"){html=pDiary();title="Diário — "+ME.name}
 else if(post){html=pPost(post);title=post.t+" — "+ME.name}
 else if(h==="contato"){html=pContact();init=initContact;title="Contato — "+ME.name}
 else{html=p404();title="404 — "+ME.name}
 const app=$("#app");app.innerHTML=html;app.style.animation="none";void app.offsetWidth;app.style.animation=""; // reinicia o fade
 init();document.title=title;toggleMenu(false);scrollTo({top:0,behavior:"instant"});
 $$(".rv").forEach((e,i)=>{e.style.transitionDelay=(i%3)*90+"ms";io.observe(e)});
 $$("#ovNav a").forEach(a=>a.classList.toggle("on",a.dataset.r===h||(a.dataset.r==="portfolio"&&!!proj)||(a.dataset.r==="diario"&&!!post)))}
addEventListener("scroll",()=>document.body.classList.toggle("sc",scrollY>40),{passive:true}); // cabeçalho com fundo ao rolar
addEventListener("hashchange",render);render();
