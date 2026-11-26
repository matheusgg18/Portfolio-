/* ============================================================
   js/utils.js · FUNÇÕES AUXILIARES (atalhos, lista de contatos)
   Carregado depois do config.js e antes de todos os outros.
   ============================================================ */

/* ---------- Atalhos e utilidades ---------- */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const brl=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}); // 1500 -> R$ 1.500,00
const NAV=[["Início","home"],["Portfólio","portfolio"],["Diário","diario"],["Contato","contato"]]; // itens do menu
let TY,SL;                // timers do texto digitando e do slider (limpos a cada troca de página)

/* Lista de contatos: só entram os que estão preenchidos no config */
function links(){return [
 ["GitHub",ME.github],["Instagram",ME.instagram&&"https://instagram.com/"+ME.instagram],
 ["WhatsApp",ME.whatsapp&&"https://wa.me/"+ME.whatsapp],["E-mail",ME.email&&"mailto:"+ME.email],
 ["LinkedIn",ME.linkedin],["Dev.to",ME.devto]].filter(x=>x[1])}
const linkHTML=(l,cls="")=>`<a ${cls?`class="${cls}"`:""} target="_blank" rel="noopener" href="${l[1]}">${l[0]}</a>`;
