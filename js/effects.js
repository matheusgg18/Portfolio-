/* ============================================================
   js/effects.js · EFEITOS E ANIMAÇÕES
   Texto digitando, slider, aparecer ao rolar e sol que segue o mouse.
   ============================================================ */

/* ============================================================
   EFEITOS
   ============================================================ */
/* Texto do hero digitando (letra por letra, com cursor piscando via CSS) */
function typer(){const el=$("#typed");if(!el)return;let i=0,j=0,del=false;
 (function t(){const s=HEADLINES[i];el.textContent=s.slice(0,j);
  if(!del&&j===s.length){del=true;TY=setTimeout(t,2000);return}   // pausa com a frase completa
  if(del&&j===0){del=false;i=(i+1)%HEADLINES.length}              // próxima frase
  j+=del?-1:1;TY=setTimeout(t,del?22:55)})()}
/* Slider do processo: autoplay de 6s, setas, bolinhas */
function initSlider(){const sl=$("#slider");if(!sl)return;const S=$$(".slide",sl),D=$$(".dots i",sl);let i=0;
 const show=n=>{i=(n+S.length)%S.length;S.forEach((s,k)=>s.classList.toggle("on",k===i));
  D.forEach((d,k)=>{d.classList.remove("on");if(k===i){void d.offsetWidth;d.classList.add("on")}})};
 const auto=()=>{clearInterval(SL);SL=setInterval(()=>show(i+1),6000)};
 $$("[data-d]",sl).forEach(b=>b.onclick=()=>{show(i+ +b.dataset.d);auto()});
 D.forEach(d=>d.onclick=()=>{show(+d.dataset.i);auto()});show(0);auto()}
/* Aparecer ao rolar */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
/* Sol do hero acompanha o mouse */
addEventListener("pointermove",e=>{const s=$(".sun");if(s)s.style.transform=`translate(calc(-50% + ${(e.clientX/innerWidth-.5)*-34}px),-50%)`});
