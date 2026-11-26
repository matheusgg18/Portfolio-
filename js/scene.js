/* ============================================================
   js/scene.js · CENÁRIO VICE CITY
   Palmeiras (SVG fixo) e skyline gerada aleatoriamente a cada visita.
   ============================================================ */

/* ---------- Cenário: palmeiras (SVG) e skyline (gerada aleatoriamente) ---------- */
const PALMS=`<svg class="palms" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMax meet"><defs><path id="fr" d="M0 0C30-55 95-60 140-8C95-28 45-22 0 0Z"/><g id="palm"><path d="M-6 500C0 380-10 280 8 170L18 172C4 280 14 380 14 500Z"/><g transform="translate(13 170)"><use href="#fr"/><use href="#fr" transform="rotate(-40)"/><use href="#fr" transform="rotate(-85)"/><use href="#fr" transform="rotate(25)"/><use href="#fr" transform="scale(-1 1)"/><use href="#fr" transform="scale(-1 1) rotate(-40)"/><use href="#fr" transform="scale(-1 1) rotate(-85)"/><use href="#fr" transform="scale(-1 1) rotate(25)"/></g></g></defs><g fill="#0a0512"><use href="#palm" transform="translate(90 -40) scale(1.1)"/><use href="#palm" transform="translate(1070 -10) scale(.9)"/></g></svg>`;
function skyline(svg){let x=0,s="";const r=(a,b)=>a+Math.random()*(b-a);
 while(x<1200){const w=r(24,60),h=r(60,230);s+=`<rect x="${x}" y="${300-h}" width="${w}" height="${h}" fill="#0a0512"/>`;
  for(let k=0;k<5;k++)if(Math.random()>.5)s+=`<rect x="${x+r(4,w-8)}" y="${300-h+r(8,h-14)}" width="4" height="5" fill="#ff9a3c" opacity=".8"/>`;x+=w+r(0,6)}
 svg.innerHTML=s}
