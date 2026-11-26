/* ============================================================
   js/ui.js · MENU EM TELA CHEIA E RODAPÉ
   Monta os links do menu, do rodapé e controla abrir/fechar o menu.
   ============================================================ */

/* ---------- Menu em tela cheia e rodapé ---------- */
$("#ovNav").innerHTML=NAV.map((n,i)=>`<a href="#${n[1]}" style="--i:${i}" data-r="${n[1]}">${n[0]}</a>`).join("");
$("#ovFoot").innerHTML=links().map(l=>linkHTML(l)).join("");
$("#foot").innerHTML=`<span>© 2026 ${ME.name}</span><span>${links().map(l=>linkHTML(l)).join(" · ")}</span>`;
const toggleMenu=on=>{const m=document.body.classList.toggle("menu",on);document.body.classList.toggle("lock",m)};
$("#menuBtn").onclick=()=>toggleMenu();
addEventListener("keydown",e=>{if(e.key==="Escape")toggleMenu(false)}); // Esc fecha o menu
