/* ============================================================
   js/config.js · TODO O CONTEÚDO DO SITE  (o arquivo que você mais edita)

   GUIA RÁPIDO
   • Seus dados e contatos ............ objeto ME
   • Textos que digitam no topo ....... HEADLINES
   • Sobre mim / tecnologias .......... ABOUT, TECH, MARQUEE
   • Formação e experiências .......... JOURNEY
   • Seus projetos .................... PROJECTS  (veja "COMO COLOCAR IMAGENS")
   • Textos/blog (opcional) ........... POSTS

   Regras:
   - Cada item de lista termina com vírgula, menos o último.
   - Textos ficam entre aspas "assim".
   - Campo vazio ("") = aquilo simplesmente não aparece no site.
   - Listas vazias ([]) escondem a seção.
   ============================================================ */

/* ---------- Seus dados e contatos (campo vazio "" = não aparece) ---------- */
const ME={
  name:"Matheus Teixeira",
  role:"Desenvolvedor web em formação",
  location:"Brasília-DF",
  github:"https://github.com/matheusgg18",
  photo:"https://avatars.githubusercontent.com/u/172650203?v=4", // sua foto. Quer outra? Salve em img/foto.jpg e troque por "img/foto.jpg"
  instagram:"matheus1520_",       // seu @ sem o @
  whatsapp:"5561994471876",                    // DDI+DDD+número, só dígitos. Ex.: "5561999999999"
  email:"math147969@gmail.com",                       // ex.: "voce@email.com"
  linkedin:"https://www.linkedin.com/in/matheus-teixeira-6b305131b/",
  devto:"https://dev.to/matheus18",
  formEndpoint:""  // endereço do Formspree (ou similar) para o formulário enviar por e-mail. Vazio = abre WhatsApp/e-mail
};

/* ---------- Frases que o hero digita ---------- */
const HEADLINES=["Matheus Teixeira.","Estudante de Ciência da Computação.","Desenvolvedor web em formação."];

/* ---------- Faixa de palavras e texto "Sobre" ---------- */
const MARQUEE=["Front-end","Back-end","React","Python","IA Generativa","Ciência da Computação","Brasília"];
const ABOUT=[
 "Sou Matheus Teixeira, de Brasília-DF. Curso Ciência da Computação na UDF e tenho formação técnica em Eletrônica pelo IFB.",
 "Desenvolvo projetos web em Front-end e Back-end e participo de pesquisa acadêmica sobre Inteligência Artificial Generativa."
];
const TECH=["HTML","CSS","JavaScript","React","Python","Django","Ant Design","Git","GitHub","Figma"];

/* ---------- Trajetória (formação e experiências) ----------
   Modelo: {t:"Título",sub:"Onde / quando",d:"Descrição"} — adicione, apague ou reordene à vontade */
const JOURNEY=[
 {t:"Técnico em Eletrônica",sub:"IFB",d:"Formação técnica pelo Instituto Federal de Brasília."},
 {t:"Ciência da Computação",sub:"UDF · Brasília-DF",d:"Graduação com foco em desenvolvimento web, Front-end e Back-end."},
 {t:"Bolsa Futuro Digital",sub:"IFB",d:"Projeto em equipe na área de Front-end, que resultou no Sistema de Clínica Médica."},
 {t:"Pesquisa em IA Generativa",sub:"Pesquisa acadêmica",d:"Participo de pesquisa sobre Inteligência Artificial Generativa e criei o ResearchHub para organizá-la."}
];

/* ---------- Como eu crio (slider). c = cenário em degradê ---------- */
const PROCESS=[
 {t:"Ideia",d:"Tudo começa com uma pergunta: o que esse projeto precisa fazer?",c:"linear-gradient(135deg,#1a0b3d,#6a2fb0 45%,#ff4d8d)"},
 {t:"Design",d:"Defino visual, cores e estrutura antes de escrever código.",c:"linear-gradient(135deg,#ff4d8d,#ff9a3c 60%,#ffd23c)"},
 {t:"Código",d:"Construo com HTML, CSS e JavaScript, pensando em celular e computador.",c:"linear-gradient(135deg,#031a2e,#0a6c74 50%,#2de2c8)"},
 {t:"Publicação",d:"Reviso, ajusto os detalhes e coloco no ar.",c:"linear-gradient(135deg,#12062a,#ff4d8d 55%,#ff9a3c)"}
];

/* ---------- Projetos ----------
   Cada projeto é um bloco { ... }. Para ADICIONAR: copie um bloco inteiro, cole depois de uma
   vírgula e edite. Para REMOVER: apague o bloco. A ordem aqui é a ordem no site
   (os 4 primeiros aparecem na página inicial).

   CAMPOS
     slug    nome curto do endereço (só letras minúsculas, números e hífen). Ex.: "meu-projeto"
     n       palavra grande que aparece na capa colorida. Ex.: "Loja"
     t       título do projeto
     cat     categoria (cria o filtro automaticamente). Ex.: "Front-end", "Full-stack"
     d       descrição curta (aparece no card)
     long    lista de parágrafos da página de detalhes
     tags    tecnologias usadas (aparecem como etiquetas)
     url     link do repositório no GitHub. COM link: clicar no card abre o GitHub em nova aba.
             SEM link (""): clicar abre a página de detalhes aqui no site.
     credit  crédito/observação opcional (ex.: "Feito em equipe com ...")
     c       cores da capa quando não há imagem (degradê em CSS)
     cover   IMAGEM DE CAPA do card (veja abaixo)
     previews até 4 imagens extras para a página de detalhes (veja abaixo)

   ----------------------------------------------------------
   COMO COLOCAR IMAGENS DOS PROJETOS (passo a passo)
   1) Tire um print do projeto rodando (ideal: 1200 x 900 px, formato JPG, PNG ou WebP).
   2) Salve o arquivo dentro da pasta  img/  deste projeto.
   3) O campo "cover" de cada projeto já aponta para  img/<slug>.jpg
      -> então basta salvar o print com ESSE NOME. Exemplo: img/sistema-clinica.jpg
      -> se salvar com outro nome ou formato (.png), troque o caminho em "cover".
   4) Para a página de detalhes, liste até 4 imagens em previews:
      previews:["img/sistema-clinica-1.jpg","img/sistema-clinica-2.jpg"]
   5) Atualize a página (F5). Se o arquivo não existir, o site mostra o cenário colorido
      no lugar, sem quebrar nada.
   ---------------------------------------------------------- */
const PROJECTS=[
 { slug:"sistema-clinica",
   n:"Clínica",
   t:"Sistema de Clínica Médica",
   cat:"Front-end",
   d:"Gerenciamento de pacientes, médicos e consultas.",
   long:["Sistema web para gerenciar pacientes, médicos e consultas, com cadastro, edição, visualização e remoção de dados.",
         "Desenvolvido em equipe no projeto Bolsa Futuro Digital (IFB), na área de Front-end, com React, JavaScript e Ant Design. Os dados ficam salvos no navegador com LocalStorage."],
   tags:["React","JavaScript","Ant Design","LocalStorage"],
   url:"https://github.com/matheusgg18/Sistema-de-Clinica-Medica",
   credit:"Repositório original da equipe: RaphaelScheideggerG/Sistema-de-Clinica-Medica.",
   c:"linear-gradient(135deg,#2de2c8,#6a2fb0)",
   cover:"img/sistema-clinica.jpg",
   previews:["img/sistema-clinica-1.jpg","img/sistema-clinica-2.jpg","img/sistema-clinica-3.jpg","img/sistema-clinica-4.jpg"] },   // cadastro de paciente, cadastro de médico, listagem e detalhes

 { slug:"multilojas",
   n:"Loja",
   t:"MultiLojas Marketplace",
   cat:"Full-stack",
   d:"Vitrine digital para vários empreendedores gerenciarem suas lojas.",
   long:["Vitrine digital em que vários empreendedores gerenciam suas próprias lojas, com busca unificada, carrinho por loja e cálculo de frete.",
         "Front-end e back-end separados: interface em React e API em Python com Django e Django REST Framework, com banco de dados PostgreSQL."],
   tags:["React","Python","Django","DRF","PostgreSQL"],
   url:"https://github.com/matheusgg18/multilojas-marketplace",
   credit:"Fork do repositório de davimrqs.",
   c:"linear-gradient(135deg,#ff9a3c,#6a2fb0)",
   cover:"img/multilojas.jpg",
   previews:[] },

 { slug:"atlas-da-pesquisa",
   n:"Atlas",
   t:"Atlas da Pesquisa",
   cat:"Full-stack",
   d:"Aplicação web para organizar pesquisas acadêmicas com apoio de IA.",
   long:["Aplicação web para organizar pesquisas acadêmicas, acompanhar artigos, armazenar documentos e usar inteligência artificial como apoio ao trabalho científico.",
         "Entre as funcionalidades: cadastro e acompanhamento de artigos, upload de arquivos, histórico de atividades, laboratório de IA (resumos, fichamentos, revisão, comparação de estudos e referências ABNT), autenticação por e-mail e gerenciamento de membros.",
         "Construído com Next.js/Vinext, React e TypeScript, usando Cloudflare Workers, D1 e R2, a OpenAI Responses API e componentes Shadcn UI."],
   tags:["Next.js","React","TypeScript","Cloudflare","OpenAI API","Shadcn UI"],
   url:"https://github.com/matheusgg18/atlas-da-pesquisa",
   credit:"",
   c:"linear-gradient(135deg,#2de2c8,#ff4d8d)",
   cover:"img/atlas-da-pesquisa.jpg",   // ainda sem print: aparece o cenário colorido até você salvar essa imagem
   previews:[] },

 { slug:"portfolio-simples",
   n:"Portfólio",
   t:"Portfólio Simples",
   cat:"Front-end",
   d:"Site de portfólio em HTML5, CSS3 e JavaScript puro, sem frameworks.",
   long:["Site de uma página com apresentação, serviços, projetos, tecnologias e contatos, feito com HTML5, CSS3 e JavaScript puro, sem frameworks.",
         "Todo o conteúdo fica em um arquivo de configuração (js/config.js), então dá para editar sem mexer no restante do código."],
   tags:["HTML5","CSS3","JavaScript"],
   url:"https://github.com/matheusgg18/Portf-lio-Simples",
   credit:"",
   c:"linear-gradient(135deg,#6a2fb0,#ff4d8d)",
   cover:"img/portfolio-simples.jpg",
   previews:[] },

 { slug:"researchhub",
   n:"Hub",
   t:"ResearchHub · Algoritmo & Afeto",
   cat:"No-code",
   d:"App pessoal para gerenciar pesquisa acadêmica.",
   long:["App pessoal para gerenciar pesquisa acadêmica, construído no Softr com Databases, Workflows e IA."],
   tags:["Softr","No-code"],
   url:"",              // sem link do GitHub: o card abre a página de detalhes do site. Se tiver um link público do app, cole aqui
   credit:"",
   c:"linear-gradient(135deg,#ff4d8d,#ff9a3c)",
   cover:"img/researchhub.jpg",
   previews:[] },

 { slug:"clinica-stackblitz",
   n:"Med",
   t:"Clínica Médica (StackBlitz)",
   cat:"Front-end",
   d:"Projeto de clínica médica criado no StackBlitz.",
   long:["Projeto de clínica médica criado no StackBlitz, em JavaScript."],
   tags:["JavaScript"],
   url:"https://github.com/matheusgg18/clinica-medica",
   credit:"",
   c:"linear-gradient(135deg,#6a2fb0,#2de2c8)",
   cover:"img/clinica-stackblitz.jpg",
   previews:[] },

 { slug:"prompt-fundamentos",
   n:"Prompt",
   t:"Engenharia de Prompt: Fundamentos",
   cat:"Estudos",
   d:"Fundamentos de engenharia de prompt.",
   long:["Repositório sobre fundamentos de engenharia de prompt, ligado aos estudos de Ciência da Computação."],
   tags:["HTML"],
   url:"https://github.com/matheusgg18/engenharia-de-prompt-fundamentos",
   credit:"",
   c:"linear-gradient(135deg,#ff4d8d,#6a2fb0)",
   cover:"img/prompt-fundamentos.jpg",
   previews:[] }
];

/* ---------- Diário / blog (vazio = mostra "em breve" + link do Dev.to) ----------
   Modelo: {slug:"meu-post",t:"Título",cat:"Categoria",data:"2026-11-17",min:3,resumo:"...",corpo:["parágrafo 1","parágrafo 2"]} */
const POSTS=[];
