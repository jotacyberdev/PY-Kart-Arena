const roster = [
  {id:"tigrinho",name:"Tigrinho",emoji:"🐯",color:"red",pos:1,gems:0,items:[]},
  {id:"veado",name:"Veado",emoji:"🦌",color:"blue",pos:1,gems:0,items:[]},
  {id:"onca",name:"Onça-pintada",emoji:"🐆",color:"green",pos:1,gems:0,items:[]},
  {id:"macaco",name:"Macaco",emoji:"🐒",color:"gold",pos:1,gems:0,items:[]}
];
const questions=[
  {q:"Qual função exibe uma mensagem no console?",a:["input()", "print()", "show()", "console()"],c:1},
  {q:"Qual tipo representa um número inteiro?",a:["str", "bool", "int", "float"],c:2},
  {q:"Qual tipo representa um texto?",a:["str", "text", "char", "word"],c:0},
  {q:"Qual valor booleano representa verdadeiro?",a:["True", "true", "VERDADEIRO", "1true"],c:0},
  {q:"Qual operador testa igualdade?",a:["=", "==", "!=", "equals"],c:1},
  {q:"Qual operador significa diferente?",a:["<>", "=", "!=", "not=="],c:2},
  {q:"Qual palavra inicia uma condição?",a:["when", "if", "check", "case"],c:1},
  {q:"Qual palavra define o caminho alternativo de um if?",a:["otherwise", "then", "else", "elif"],c:2},
  {q:"Qual palavra verifica outra condição após um if?",a:["elif", "elseif", "another", "nextif"],c:0},
  {q:"Qual laço percorre os itens de uma sequência?",a:["repeat", "foreach", "for", "loop"],c:2},
  {q:"Qual laço continua enquanto uma condição for verdadeira?",a:["while", "during", "forwhile", "until"],c:0},
  {q:"O que range(4) produz em um for?",a:["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "4, 3, 2, 1"],c:1},
  {q:"Qual comando interrompe um laço imediatamente?",a:["stop", "break", "skip", "exitloop"],c:1},
  {q:"Qual comando pula para a próxima repetição?",a:["pass", "break", "continue", "next"],c:2},
  {q:"Como se cria uma função em Python?",a:["function minha_funcao():", "def minha_funcao():", "func minha_funcao():", "create minha_funcao()"],c:1},
  {q:"Qual palavra devolve um resultado de uma função?",a:["send", "print", "return", "back"],c:2},
  {q:"Qual função lê uma entrada do usuário?",a:["read()", "input()", "scan()", "get()"],c:1},
  {q:"Qual é o resultado de 3 + 2 * 4?",a:["20", "20.0", "11", "14"],c:2},
  {q:"Qual operador calcula o resto da divisão?",a:["/", "//", "%", "**"],c:2},
  {q:"Qual operador faz divisão inteira, descartando a parte decimal?",a:["/", "//", "%", "**"],c:1},
  {q:"Qual operador representa potência?",a:["^", "**", "pow^", "^^"],c:1},
  {q:"Como converter o texto '42' para inteiro?",a:["str('42')", "float('42')", "int('42')", "number('42')"],c:2},
  {q:"Qual função informa quantos itens há em uma lista?",a:["count(lista)", "size(lista)", "len(lista)", "length(lista)"],c:2},
  {q:"Qual estrutura guarda vários itens em ordem e pode ser alterada?",a:["tuple", "list", "str", "bool"],c:1},
  {q:"Qual símbolo normalmente cria uma lista?",a:["{}", "()", "[]", "<>"],c:2},
  {q:"Qual método adiciona um item ao final de uma lista?",a:["add()", "append()", "insert_end()", "push_back()"],c:1},
  {q:"Como acessar o primeiro elemento de lista?",a:["lista[1]", "lista[0]", "lista.first", "lista(-1)"],c:1},
  {q:"Qual índice acessa o último elemento de uma lista?",a:["lista[0]", "lista[1]", "lista[-1]", "lista[last]"],c:2},
  {q:"Qual estrutura é imutável e ordenada?",a:["list", "dict", "tuple", "set"],c:2},
  {q:"Qual estrutura armazena pares chave-valor?",a:["list", "dict", "tuple", "range"],c:1},
  {q:"Qual método retorna as chaves de um dicionário?",a:["keys()", "values()", "items()", "getkeys()"],c:0},
  {q:"Qual estrutura remove duplicatas e não garante ordem tradicional de índice?",a:["list", "tuple", "set", "str"],c:2},
  {q:"Qual valor representa ausência de valor definido?",a:["None", "null", "empty", "void"],c:0},
  {q:"Qual exceção costuma ocorrer ao dividir um número por zero?",a:["ValueError", "TypeError", "ZeroDivisionError", "IndexError"],c:2},
  {q:"Qual bloco é usado para tratar uma exceção?",a:["if/else", "try/except", "for/in", "def/return"],c:1},
  {q:"O que faz len('gato')?",a:["Retorna 3", "Retorna 4", "Retorna 'gato'", "Gera erro"],c:1},
  {q:"Qual é o resultado de 'Py' + 'thon'?",a:["Py thon", "Python", "Py+thon", "Erro"],c:1},
  {q:"Qual método transforma uma string em letras minúsculas?",a:["lower()", "small()", "down()", "tolower"],c:0},
  {q:"Qual método remove espaços das extremidades de uma string?",a:["cut()", "strip()", "trim()", "remove_space()"],c:1},
  {q:"Qual expressão verifica se 5 é maior que 3?",a:["5 => 3", "5 > 3", "5 =< 3", "5 >< 3"],c:1},
  {q:"Qual operador lógico exige que as duas condições sejam verdadeiras?",a:["or", "not", "and", "xor"],c:2},
  {q:"Qual operador lógico é verdadeiro quando pelo menos uma condição é verdadeira?",a:["and", "or", "not", "is"],c:1},
  {q:"O que not True retorna?",a:["True", "False", "None", "0"],c:1},
  {q:"Qual é a saída de print(2 == 2)?",a:["2", "True", "False", "None"],c:1},
  {q:"Qual é a saída de print(10 % 3)?",a:["3", "1", "0", "3.33"],c:1},
  {q:"Qual é o resultado de list(range(2, 6))?",a:["[2, 3, 4, 5]", "[2, 3, 4, 5, 6]", "[1, 2, 3, 4, 5]", "[6, 5, 4, 3, 2]"],c:0},
  {q:"Qual comando importa o módulo math?",a:["include math", "using math", "import math", "load(math)"],c:2},
  {q:"Qual função do módulo math calcula a raiz quadrada?",a:["math.root()", "math.sqrt()", "sqrt.math()", "math.square()"],c:1},
  {q:"Qual palavra cria uma classe?",a:["object", "class", "struct", "new"],c:1},
  {q:"Em Python, qual é o nome convencional do método inicializador de uma classe?",a:["init()", "__init__()", "constructor()", "start()"],c:1},
  {q:"Qual destas opções é um comentário de uma linha?",a:["// comentário", "# comentário", "<!-- comentário -->", "** comentário"],c:1},
  {q:"Qual é o resultado de bool(0)?",a:["True", "False", "0", "None"],c:1},
  {q:"Qual destas opções cria um conjunto vazio?",a:["{}", "[]", "set()", "()"],c:2},
  {q:"Qual destas opções cria um dicionário vazio?",a:["{}", "set()", "dict[]", "[]"],c:0},
  {q:"O que enumerate(lista) costuma fornecer em um laço?",a:["Só os valores em ordem inversa", "Pares de índice e valor", "O tamanho da lista", "Uma lista ordenada"],c:1},
  {q:"Qual função combina elementos de um iterável em uma string usando um separador?",a:["split()", "join()", "combine()", "merge()"],c:1},
  {q:"Qual método divide uma string em partes usando um separador?",a:["join()", "slice()", "split()", "partition_all()"],c:2},
  {q:"Qual palavra é usada para criar uma expressão geradora de valores sequenciais?",a:["yield", "return", "send", "emit"],c:0},
  {q:"Qual é a finalidade principal do pip?",a:["Executar arquivos Python", "Instalar e gerenciar pacotes Python", "Editar código automaticamente", "Criar variáveis"],c:1},
  {q:"Qual extensão é normalmente usada para arquivos de código Python?",a:[".pt", ".python", ".py", ".pytxt"],c:2},
  {q:"Qual comando costuma executar um arquivo chamado jogo.py no terminal?",a:["python jogo.py", "run jogo.py", "execute.py jogo", "start python"],c:0}
];
const shopItems=[
 {id:"oleo",icon:"🛢️",name:"Óleo",cost:5,desc:"Faz um inimigo voltar 2 casas."},
 {id:"buraco",icon:"🕳️",name:"Buraco",cost:7,desc:"Faz um inimigo perder o próximo movimento."},
 {id:"super",icon:"⚡",name:"Super Turbo",cost:10,desc:"Você avança +3 casas no próximo uso."},
 {id:"escudo",icon:"🛡️",name:"Escudo",cost:8,desc:"Bloqueia o próximo ataque recebido."}
];
const selectedId=localStorage.getItem("selectedCharacter")||"tigrinho";
const human=roster.find(r=>r.id===selectedId)||roster[0];
const others=roster.filter(r=>r.id!==human.id);
const ordered=[...roster];
let turnIndex=0,round=1,questionIndex=0,answerChoice=null,rolling=false,spinBusy=false,gameOver=false;
let wheelCooldownUntil=Number(localStorage.getItem("bixWheelCooldownUntil")||0);
let gems=Number(localStorage.getItem("bixGems")||0);
human.gems=gems;

const icons={1:"⚀",2:"⚁",3:"⚂"};
const $=id=>document.getElementById(id);
function saveGems(){human.gems=gems;localStorage.setItem("bixGems",String(gems));}
function log(msg,tone=""){const row=document.createElement("div");row.className=`log-row ${tone}`;row.innerHTML=`<span>[${new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}]</span> ${msg}`;$("consoleLog").appendChild(row);$("consoleLog").scrollTop=$("consoleLog").scrollHeight;}
function env(pos){return pos<=10?"FLORESTA":pos<=20?"PRAIA":"OCEANO";}
function renderKarts(){
 const box=$("karts");box.innerHTML="";
 const same={};roster.forEach(r=>(same[r.pos]??=[]).push(r));
 const points={
  // Centros das casas: alinhados ao meio de cada faixa da pista.
  1:[20,25],2:[28,25],3:[36,25],4:[44,25],5:[52,25],6:[60,25],7:[68,25],8:[76,25],9:[83,25],10:[89,25],
  11:[81,53],12:[74,53],13:[67,53],14:[60,53],15:[53,53],16:[46,53],17:[39,53],18:[32,53],19:[25,53],20:[17,53],
  21:[18,80],22:[26,80],23:[34,80],24:[42,80],25:[50,80],26:[58,80],27:[66,80],28:[74,80],29:[82,80],30:[90,80]
 };
 const slots={
  1:[[0,0]],
  2:[[-1.8,-1.65],[1.8,1.65]],
  3:[[-1.8,-1.65],[1.8,-1.65],[0,1.65]],
  4:[[-1.8,-1.65],[1.8,-1.65],[-1.8,1.65],[1.8,1.65]]
 };
 const colors={red:'#ef554d',blue:'#43b8ff',green:'#47d78a',gold:'#f5bd35'};
 roster.forEach(r=>{
   const el=document.createElement("div");el.className=`kart ${r.color}${r.id===human.id?' is-human':''}`;el.title=`${r.name} — casa ${r.pos}`;
   const [x,y]=points[r.pos]||points[1];
   const group=same[r.pos]||[r],idx=group.indexOf(r),[ox,oy]=(slots[group.length]||slots[4])[idx]||[0,0];
   el.style.left=`${x+ox}%`;el.style.top=`${y+oy}%`;el.style.setProperty('--kart-color',colors[r.color]||'#43b8ff');
   el.style.setProperty('--kart-highlight',({red:'#ff786e',blue:'#83d7ff',green:'#7cf0ad',gold:'#ffe078'})[r.color]||'#83d7ff');
   el.style.setProperty('--kart-highlight',({red:'#ff786e',blue:'#83d7ff',green:'#7cf0ad',gold:'#ffe078'})[r.color]||'#83d7ff');
   // Na Praia (casas 11–20), a pista retorna da direita para a esquerda.
   // Espelhamos o sprite inteiro para o animal e o kart virarem juntos.
   if(r.pos>=11 && r.pos<=20) el.classList.add("kart-reverse");
   const spriteByName={"Tigrinho":"tigrinho-kart.png","Veado":"veado-kart.png","Onça-pintada":"onca-kart.png","Macaco":"macaco-kart.png"};
   const sprite=spriteByName[r.name]||"tigrinho-kart.png";
   el.innerHTML=`<img class="kart-sprite" src="/assets/karts/${sprite}?v=2" alt="" draggable="false">${r.id===human.id?'<span class="you-badge">VOCÊ</span>':''}`;
   box.appendChild(el);
 });
}
function renderPlayers(){
 const ranking=[...roster].sort((a,b)=>b.pos-a.pos);
 $("playersList").innerHTML=ranking.map((r,i)=>{
  const isTurn=r.id===ordered[turnIndex].id;
  const progress=Math.max(0,Math.min(100,(r.pos/30)*100));
  const medal=["🥇","🥈","🥉","🏁"][i];
  return `<div class="player-card ${isTurn?"turn":""}" aria-label="${i+1}º lugar, ${r.name}, casa ${r.pos}">
   <div class="rank" title="${i+1}º lugar">${medal}</div>
   <div class="p-emoji">${r.emoji}</div>
   <div class="p-info"><strong>${r.name}</strong><span><b>CASA ${r.pos}</b><i>•</i> 💎 ${r.id===human.id?gems:r.gems}</span></div>
   ${isTurn?'<span class="turn-tag">SUA VEZ</span>':''}
   <div class="player-progress" aria-label="${Math.round(progress)}% da corrida"><i style="width:${progress}%"></i></div>
  </div>`;
 }).join("");
 $("gemCount").textContent=gems;$("shopGemCount").textContent=gems;updateItemTop();
}
function updateItemTop(){const inv=human.items;$("itemTop").textContent=inv.length?`ITEM: ${shopItems.find(x=>x.id===inv[0])?.name||"Nenhum"}`:"ITEM: Nenhum";$("itemButton").disabled=!inv.length||rolling;}
function updateTurn(){
 if(gameOver)return;
 const r=ordered[turnIndex];$("turnArt").textContent=r.emoji;$("turnName").textContent=r.name;$("turnHint").textContent=r.id===human.id?"Sua vez. Lance o D3.":"CPU — lançamento automático.";$("turnHouse").textContent=r.pos;$("turnBiome").textContent=env(r.pos);$("rollButton").disabled=rolling||r.id!==human.id;$("roundTop").textContent=String(round).padStart(2,"0");renderPlayers();
 if(r.id!==human.id&&!rolling)setTimeout(roll,450);
}
function rollD3(){return 1+Math.floor(Math.random()*3);}
function roll(){if(rolling||gameOver)return;rolling=true;const r=ordered[turnIndex];$("rollButton").disabled=true;log(`🎲 ${r.name} lançou o D3.`);let ticks=0;const anim=setInterval(()=>{$("dice").textContent=icons[rollD3()];if(++ticks>=8){clearInterval(anim);const result=rollD3();$("dice").textContent=icons[result];movePlayer(r,result);}},85);}
function movePlayer(r,result){
 const old=r.pos;
 if(r.skip){r.skip=false;log(`🕳️ ${r.name} caiu no buraco e perdeu este movimento!`,"event");renderKarts();renderPlayers();finishTurn();return;}
 r.pos=Math.min(30,r.pos+result);
 if(r.pos===10){r.pos=11;log(`🌴 ${r.name} chegou à CASA 10 e avançou para a CASA 11!`,"move");}
 else if(r.pos===20){r.pos=21;log(`🌊 ${r.name} chegou à CASA 20 e mergulhou para a CASA 21!`,"move");}
 log(`RESULTADO: <b>${result}</b>`);
 log(`MOVENDO: <b>${old} → ${r.pos}</b>`,"move");
 renderKarts();renderPlayers();
 if(r.pos>=30){finish(r);return;}
 const eventChance=Math.random();if(eventChance<.22)triggerEvent(r);else finishTurn();
}
function triggerEvent(r){const events=[{icon:"⚡",title:"TURBO",text:"Avança +3 casas.",delta:3},{icon:"🛢️",title:"ÓLEO NA PISTA",text:"Volta 2 casas.",delta:-2},{icon:"💥",title:"PANE",text:"Não anda nesta rodada.",delta:0}];const e=events[Math.floor(Math.random()*events.length)];r.pos=Math.max(1,Math.min(30,r.pos+e.delta));log(`${e.icon} ${r.name}: <b>${e.title}</b> — ${e.text}`,"event");renderKarts();renderPlayers();setTimeout(finishTurn,500);}
function finishTurn(){if(gameOver)return;rolling=false;turnIndex++;if(turnIndex>=ordered.length){turnIndex=0;round++;log(`🔄 RODADA ${String(round).padStart(2,"0")} INICIADA`,"round");openQuestion();}else updateTurn();}
function openQuestion(){if(gameOver)return;const q=questions[questionIndex++%questions.length];answerChoice=null;$("questionText").textContent=q.q;$("answers").innerHTML=q.a.map((x,i)=>`<button data-i="${i}">${String.fromCharCode(65+i)}) ${x}</button>`).join("");$("answerButton").disabled=true;$("questionModal").classList.remove("hidden");document.querySelectorAll("#answers button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#answers button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");answerChoice=+b.dataset.i;$("answerButton").disabled=false;});$("answerButton").onclick=()=>{if(answerChoice===q.c){gems++;saveGems();log(`🧠 ${human.name} acertou e ganhou <b>+1 crédito</b>.`,"good");}else log(`🧠 ${human.name} errou. Nenhum crédito ganho.`,"bad");others.forEach(cpu=>{if(Math.random()<0.25){cpu.gems++;log(`🤖 ${cpu.name} acertou automaticamente (25%) e ganhou +1 crédito.`);}else log(`🤖 ${cpu.name} errou automaticamente (75%).`);});$("questionModal").classList.add("hidden");saveGems();renderPlayers();updateTurn();};}
function finish(winner){
 if(gameOver)return;
 gameOver=true;rolling=false;
 winner.pos=30;
 log(`🏁 ${winner.name} chegou à CASA 30. Corrida encerrada.`,"win");
 $("turnHint").textContent=winner.id===human.id?"Você venceu!":"Corrida encerrada.";
 $("rollButton").disabled=true;$("itemButton").disabled=true;$ ("wheelButton").disabled=true;$ ("shopButton").disabled=true;
 renderKarts();renderPlayers();
 const ranking=[...roster].sort((a,b)=>b.pos-a.pos || ordered.indexOf(a)-ordered.indexOf(b));
 const humanPlace=ranking.findIndex(r=>r.id===human.id)+1;
 const placeText={1:"1º LUGAR",2:"2º LUGAR",3:"3º LUGAR",4:"4º LUGAR"};
 const title={1:"VOCÊ VENCEU!",2:"VOCÊ FICOU EM 2º!",3:"VOCÊ FICOU EM 3º!",4:"VOCÊ FICOU EM 4º!"};
 const eyebrow={1:"🏆 CAMPEÃO DA CORRIDA",2:"🥈 RESULTADO FINAL",3:"🥉 RESULTADO FINAL",4:"🏁 RESULTADO FINAL"};
 const message={1:`${human.name} cruzou a linha de chegada em primeiro. Mandou bem!`,2:`${human.name} chegou em segundo. Foi por pouco!`,3:`${human.name} terminou em terceiro. Dá para melhorar na próxima.`,4:`${human.name} terminou em quarto. Tente outra estratégia na próxima corrida.`};
 const modal=$("resultModal"),card=modal.querySelector(".result-card");
 card.classList.remove("place-1","place-2","place-3","place-4");card.classList.add(`place-${humanPlace}`);
 $("resultConfetti").textContent=humanPlace===1?"🏆 ✨ 🏆":humanPlace===2?"🥈":"🏁";
 $("resultEyebrow").textContent=eyebrow[humanPlace];
 $("resultTitle").textContent=title[humanPlace];
 $("resultMessage").textContent=message[humanPlace];
 $("resultRanking").innerHTML=ranking.map((r,i)=>`<div class="result-row ${r.id===human.id?'result-human':''} ${i===0?'place-gold':i===1?'place-silver':i===2?'place-bronze':'place-fourth'}"><span>${['🥇','🥈','🥉','4º'][i]}</span><strong>${r.name}${r.id===human.id?' (VOCÊ)':''}</strong><small>${placeText[i+1]} • CASA ${r.pos}</small></div>`).join("");
 $("resultShortcuts").innerHTML='Atalhos de teste: <kbd>Ctrl</kbd> + <kbd>P</kbd> 1º • <kbd>Ctrl</kbd> + <kbd>O</kbd> 2º • <kbd>Ctrl</kbd> + <kbd>I</kbd> 3º • <kbd>Ctrl</kbd> + <kbd>U</kbd> 4º';
 $("resultModal").classList.remove("hidden");
}
function testFinish(humanPlace){
 if(gameOver)return;
 if(rolling){toast("Espera o movimento atual terminar.");return;}
 document.querySelectorAll('.modal').forEach(m=>m.classList.add('hidden'));
 // Simula posições distintas para validar os quatro estilos de encerramento.
 const cpu=roster.filter(r=>r.id!==human.id);
 const rankOrder=humanPlace===1?[human,...cpu]:humanPlace===2?[cpu[0],human,cpu[1],cpu[2]]:humanPlace===3?[cpu[0],cpu[1],human,cpu[2]]:[cpu[0],cpu[1],cpu[2],human];
 [30,27,24,21].forEach((pos,i)=>{rankOrder[i].pos=pos;});
 const winner=rankOrder[0];
 log(`🧪 TESTE: jogador em ${humanPlace}º lugar (Ctrl+${({1:'P',2:'O',3:'I',4:'U'})[humanPlace]}).`,"event");
 finish(winner);
}
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.remove("hidden");setTimeout(()=>t.classList.add("hidden"),2200);}

function openModal(id){$(id).classList.remove("hidden");}
function closeModal(id){$(id).classList.add("hidden");}
function formatCooldown(ms){const total=Math.max(0,Math.ceil(ms/1000));const h=Math.floor(total/3600);const m=Math.floor((total%3600)/60);const sec=total%60;return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;}
function updateWheelCooldown(){const remaining=wheelCooldownUntil-Date.now();const button=$("spinButton");const status=$("wheelResult");if(remaining>0){button.disabled=true;button.textContent="🔒 GIRAR BLOQUEADO";status.innerHTML=`⏱️ Próximo giro em <b>${formatCooldown(remaining)}</b><br><small>1 giro a cada 24 horas.</small>`;}else{button.disabled=spinBusy;button.textContent="🎡 GIRAR";if(!spinBusy && !status.dataset.keep)status.textContent="1 giro disponível agora!";}}
function spinWheel(){if(spinBusy)return;if(wheelCooldownUntil>Date.now()){updateWheelCooldown();return;}spinBusy=true;$("spinButton").disabled=true;$("spinButton").textContent="🎡 GIRANDO...";$("wheelResult").textContent="A roleta está girando...";const wheel=$("wheel");const prizes=[100,20,5,1,2,10,5];
 // Probabilidades: +5 = 60%; +100 = 3%; +20 = 9%; os restantes 28% são divididos entre +1, +2 e +10.
 const roll=Math.random();
 let index;
 if(roll<0.03) index=0;
 else if(roll<0.12) index=1;
 else if(roll<0.2133333333) index=2;
 else if(roll<0.3066666666) index=3;
 else if(roll<0.4) index=4;
 else if(roll<0.7) index=5;
 else index=6;const centerAngle=(index+0.5)*360/7;const extra=360*6+(360-centerAngle);wheel.style.setProperty("--spin",`${extra}deg`);wheel.classList.remove("spinning");void wheel.offsetWidth;wheel.classList.add("spinning");setTimeout(()=>{const prize=prizes[index];gems+=prize;saveGems();renderPlayers();wheelCooldownUntil=Date.now()+24*60*60*1000;localStorage.setItem("bixWheelCooldownUntil",String(wheelCooldownUntil));$("wheelResult").dataset.keep="1";$("wheelResult").innerHTML=`🎉 Você ganhou <b>+${prize} gemas!</b><br><small>⏱️ Próximo giro em 24:00:00</small>`;spinBusy=false;updateWheelCooldown();},3100);}
function openWheel(){openModal("wheelModal");updateWheelCooldown();}

function renderShop(){
 $("shopGrid").innerHTML=shopItems.map(it=>`<article class="shop-item"><div class="shop-icon">${it.icon}</div><div><h3>${it.name}</h3><p>${it.desc}</p><b>💎 ${it.cost}</b></div><button data-buy-item="${it.id}" ${gems<it.cost?"disabled":""}>COMPRAR</button></article>`).join("");
 document.querySelectorAll("[data-buy-item]").forEach(btn=>btn.onclick=()=>{const it=shopItems.find(x=>x.id===btn.dataset.buyItem);if(gems<it.cost)return;gems-=it.cost;human.items.push(it.id);saveGems();renderShop();renderPlayers();toast(`🛒 ${it.name} comprado!`);log(`🛒 Você comprou ${it.name} por ${it.cost} gemas.`);});
}
function renderBag(){const grid=$("bagGrid");if(!human.items.length){grid.innerHTML=`<div class="bag-empty">🎒 Sua bolsa está vazia.<br><small>Compre itens na loja usando gemas.</small></div>`;return;}const counts={};human.items.forEach(id=>counts[id]=(counts[id]||0)+1);grid.innerHTML=Object.entries(counts).map(([id,count])=>{const it=shopItems.find(x=>x.id===id);return `<button class="bag-item" data-use-bag="${id}"><span class="bag-icon">${it.icon}</span><span><strong>${it.name}</strong><small>${it.desc}</small></span><b>x${count}</b></button>`;}).join("");document.querySelectorAll("[data-use-bag]").forEach(b=>b.onclick=()=>{useItemById(b.dataset.useBag);renderBag();});}
function useItemById(id){const idx=human.items.indexOf(id);if(idx<0)return;human.items.splice(idx,1);applyItem(id);saveGems();renderKarts();renderPlayers();updateItemTop();toast(`🎒 ${shopItems.find(x=>x.id===id).name} usado!`);}
function applyItem(id){const it=shopItems.find(x=>x.id===id);const targets=ordered.filter(x=>x.id!==human.id&&x.pos<30).sort((a,b)=>b.pos-a.pos);if(id==="super"){human.pos=Math.min(30,human.pos+3);log(`⚡ SUPER TURBO: você avançou +3 casas!`,"good");}else if(id==="escudo"){human.shield=true;log(`🛡️ ESCUDO ativado. O próximo ataque contra você será bloqueado.`,`good`);}else if(!targets.length){log(`🎒 ${it.name} não encontrou alvo.`);}else{const target=targets[0];if(target.shield){target.shield=false;log(`🛡️ ${target.name} bloqueou seu ataque!`);}else if(id==="oleo"){target.pos=Math.max(1,target.pos-2);log(`🛢️ ÓLEO: ${target.name} voltou 2 casas!`,"event");}else if(id==="buraco"){target.skip=true;log(`🕳️ BURACO: ${target.name} perderá o próximo movimento!`,"event");}}}
function useItem(){if(human.items.length){renderBag();openModal("bagModal");}}

$("rollButton").onclick=roll;$("itemButton").onclick=useItem;$("wheelButton").onclick=openWheel;$("spinButton").onclick=spinWheel;$("shopButton").onclick=()=>{renderShop();openModal("shopModal");};$("buyGemsTop").onclick=()=>openModal("buyModal");$("clearLog").onclick=()=>$("consoleLog").innerHTML="";
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>closeModal(b.dataset.close));
$("simulatePurchase").onclick=()=>{
 const num=$("cardNumber").value.replace(/\D/g,"");
 const cpf=$("cardCpf").value.replace(/\D/g,"");
 if($("cardName").value.trim().length<2||num.length!==16||cpf.length!==11||$("cardExpiry").value.length!==5||$("cardCvv").value.length!==3){$("purchaseStatus").textContent="Preencha todos os dados fictícios corretamente para continuar.";return;}
 gems+=20;saveGems();renderPlayers();$("purchaseStatus").textContent="✅ Compra simulada! +20 gemas adicionadas.";log(`💎 Compra simulada: +20 gemas por R$ 100,00.` ,"good");setTimeout(()=>closeModal("buyModal"),1200);
};
$("cardNumber").addEventListener("input",e=>{let v=e.target.value.replace(/\D/g,"").slice(0,16);e.target.value=v.replace(/(\d{4})(?=\d)/g,"$1 ");});
$("cardExpiry").addEventListener("input",e=>{let v=e.target.value.replace(/\D/g,"").slice(0,4);e.target.value=v.length>2?v.slice(0,2)+"/"+v.slice(2):v;});
$("cardCvv").addEventListener("input",e=>{e.target.value=e.target.value.replace(/\D/g,"").slice(0,3);});
$("cardCpf").addEventListener("input",e=>{let v=e.target.value.replace(/\D/g,"").slice(0,11);e.target.value=v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");});

$("restartGameButton").onclick=()=>{localStorage.removeItem("selectedCharacter");location.href="/pages/selecao.html";};
$("resultCloseButton").onclick=()=>{$("resultModal").classList.add("hidden");};

// Minijogos de teste acessíveis por Ctrl+Z/X/C/V. Não concedem gemas: a recompensa é um item.
let miniGameCleanup = null;
const miniKeys = ["z","x","c","v"];
function openMiniGame(type){
 if(gameOver){toast("A corrida acabou. Comece outra para testar os minijogos.");return;}
 if(rolling){toast("Espere o movimento terminar antes de abrir um minijogo.");return;}
 const modal=$("miniGameModal"), area=$("miniGameArea");
 modal.classList.remove("hidden"); area.innerHTML=""; $("miniGameStatus").textContent="";
 $("miniGameRestart").classList.add("hidden");
 const config={
  ttt:["Jogo da velha","Faça uma linha de três símbolos. Você é X; a CPU é O."],
  simon:["Gênio das cores","Observe a sequência de cores e repita na mesma ordem."],
  hangman:["Jogo da forca","Adivinhe a palavra antes de errar 6 vezes."],
  arrows:["Reflexo das setas","Aperte a seta mostrada antes que o tempo acabe."]
 }[type];
 $("miniGameTitle").textContent=config[0]; $("miniGameInstructions").textContent=config[1];
 if(miniGameCleanup) miniGameCleanup();
 if(type==="ttt") startTicTacToe(area);
 if(type==="simon") startSimon(area);
 if(type==="hangman") startHangman(area);
 if(type==="arrows") startArrows(area);
}
function finishMiniGame(won, message){
 if(miniGameCleanup){miniGameCleanup();miniGameCleanup=null;}
 $("miniGameStatus").textContent=message;
 $("miniGameRestart").classList.remove("hidden");
 $("miniGameRestart").onclick=()=>openMiniGame(activeMiniType);
 if(won){
   const prize=shopItems[Math.floor(Math.random()*shopItems.length)];
   human.items.push(prize.id); saveGems(); renderPlayers(); renderBag(); updateItemTop();
   $("miniGameStatus").textContent=message+" Recompensa: "+prize.icon+" "+prize.name+" (1 item; sem gemas).";
   log(`🎮 Minijogo vencido: ganhou ${prize.name}.`,"good");
 } else log("🎮 Minijogo encerrado sem recompensa.","event");
}
let activeMiniType="ttt";
function startTicTacToe(area){
 activeMiniType="ttt";let board=Array(9).fill(""),done=false;
 area.innerHTML='<div class="ttt-board">'+board.map((_,i)=>`<button class="ttt-cell" data-cell="${i}" aria-label="Casa ${i+1}"></button>`).join("")+'</div>';
 const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 const check=()=>wins.some(line=>line.every(i=>board[i]===board[line[0]]&&board[i]));
 const draw=()=>area.querySelectorAll("[data-cell]").forEach((b,i)=>{b.textContent=board[i];b.disabled=!!board[i]||done;});
 const click=e=>{const b=e.target.closest("[data-cell]");if(!b||done||board[+b.dataset.cell])return;board[+b.dataset.cell]="X";
  if(check()){done=true;draw();finishMiniGame(true,"Você venceu o jogo da velha!");return;}
  let empty=board.map((v,i)=>v?null:i).filter(v=>v!==null);
  if(!empty.length){done=true;draw();finishMiniGame(false,"Deu velha! Tente novamente.");return;}
  const findMove=(symbol)=>{for(const i of empty){board[i]=symbol;const winsNow=check();board[i]="";if(winsNow)return i;}return null;};
  let move=findMove("O"); // win if possible
  if(move===null)move=findMove("X"); // otherwise block the player
  if(move===null&&empty.includes(4))move=4;
  if(move===null){const corners=[0,2,6,8].filter(i=>empty.includes(i));if(corners.length)move=corners[Math.floor(Math.random()*corners.length)];}
  if(move===null)move=empty[Math.floor(Math.random()*empty.length)];
  board[move]="O";
  if(check()){done=true;draw();finishMiniGame(false,"A CPU venceu desta vez.");return;}
  if(board.every(Boolean)){done=true;draw();finishMiniGame(false,"Deu velha!");return;}draw();
 };area.addEventListener("click",click);miniGameCleanup=()=>area.removeEventListener("click",click);draw();
}
function startSimon(area){
 activeMiniType="simon";const colors=["green","red","yellow","blue"];let seq=[],input=[],level=0,locked=true,timers=[];
 area.innerHTML='<div class="simon-pad">'+colors.map(c=>`<button class="simon-color simon-${c}" data-color="${c}" aria-label="${c}"></button>`).join("")+'</div><button class="mini-game-btn" id="simonStart">COMEÇAR</button>';
 const flash=(c)=>{const b=area.querySelector(`[data-color="${c}"]`);if(!b)return;b.classList.add("lit");timers.push(setTimeout(()=>b.classList.remove("lit"),220));};
 const show=()=>{locked=true;input=[];let i=0;const play=()=>{if(i>=seq.length){locked=false;return;}flash(seq[i++]);timers.push(setTimeout(play,370));};timers.push(setTimeout(play,350));};
 const next=()=>{level++;seq.push(colors[Math.floor(Math.random()*4)]);$("miniGameStatus").textContent=`Nível ${level} de 7`;show();};
 const start=()=>{seq=[];level=0;next();};
 const click=e=>{const b=e.target.closest("[data-color]");if(!b||locked)return;flash(b.dataset.color);if(b.dataset.color!==seq[input.length]){locked=true;finishMiniGame(false,"Sequência errada! Tente novamente.");return;}input.push(b.dataset.color);if(input.length===seq.length){locked=true;if(level>=7)finishMiniGame(true,"Perfeito! Você completou os 7 níveis!");else timers.push(setTimeout(next,350));}};
 area.addEventListener("click",click);area.querySelector("#simonStart").onclick=()=>{area.querySelector("#simonStart").disabled=true;start();};miniGameCleanup=()=>{area.removeEventListener("click",click);timers.forEach(clearTimeout);}; 
}
function startHangman(area){
 activeMiniType="hangman";
 const words=[
  ["JAVASCRIPT","Programação"],["ALGORITMO","Programação"],["COMPILADOR","Programação"],
  ["VARIAVEL","Programação"],["DEPURACAO","Programação"],["INTERFACE","Tecnologia"],
  ["COMPUTADOR","Tecnologia"],["TECLADO","Tecnologia"],["PROCESSADOR","Tecnologia"],
  ["INTERNET","Tecnologia"],["SATELITE","Tecnologia"],["ELETRONICA","Tecnologia"],
  ["DINOSSAURO","Animais"],["BORBOLETA","Animais"],["CROCODILO","Animais"],
  ["CAPIVARA","Animais"],["TARTARUGA","Animais"],["ORNITORRINCO","Animais"],
  ["CHOCOLATE","Comida"],["LASANHA","Comida"],["ABACAXI","Comida"],
  ["MORANGO","Comida"],["PIPOCA","Comida"],["PANQUECA","Comida"],
  ["RELAMPAGO","Natureza"],["TEMPESTADE","Natureza"],["CACHOEIRA","Natureza"],
  ["MONTANHA","Natureza"],["ASTRONAUTA","Espaço"],["GALAXIA","Espaço"],
  ["CONSTELACAO","Espaço"],["METEORITO","Espaço"],["LABIRINTO","Geral"],
  ["AVENTURA","Geral"],["MISTERIO","Geral"],["VELOCIDADE","Corrida"],
  ["ACELERACAO","Corrida"],["CAMPEONATO","Corrida"],["ULTRAPASSAGEM","Corrida"],
  ["TIGRINHO","Bixinho Rush"],["BIXINHORUSH","Bixinho Rush"],["PISTADOMO","Bixinho Rush"],
  ["GEMAS","Bixinho Rush"],["MINIJOGO","Bixinho Rush"],["CORRIDA","Bixinho Rush"]
 ];
 const picked=words[Math.floor(Math.random()*words.length)];
 const word=picked[0], category=picked[1];
 let guessed=[], errors=0, done=false;
 const maxErrors=5; // fewer mistakes to increase difficulty
 area.innerHTML=`<div class="hangman-wrap">
  <div class="hangman-meta"><span class="hangman-category">CATEGORIA: ${category}</span><span id="hangmanLives">${maxErrors} erros restantes</span></div>
  <div class="hangman-gallows" aria-hidden="true"><span class="gallows-emoji">🪢</span><span id="hangmanDrawing">⚪</span></div>
  <p class="hangman-word" id="hangmanWord"></p>
  <div class="hangman-letters">${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(c=>`<button class="mini-game-btn" data-letter="${c}">${c}</button>`).join("")}</div>
 </div>`;
 const draw=()=>{
  $("hangmanWord").textContent=word.split("").map(c=>guessed.includes(c)?c:"_").join(" ");
  $("hangmanLives").textContent=`${maxErrors-errors} erro${maxErrors-errors===1?"":"s"} restante${maxErrors-errors===1?"":"s"}`;
  $("hangmanDrawing").textContent=["⚪","🟡","🟠","🟤","💀","☠️"][errors];
 };
 const click=e=>{
  const b=e.target.closest("[data-letter]");
  if(!b||done)return;
  const c=b.dataset.letter;b.disabled=true;
  if(!word.includes(c))errors++;
  guessed.push(c);draw();
  if(word.split("").every(c=>guessed.includes(c))){
   done=true;finishMiniGame(true,`Acertou! A palavra era ${word}.`);
  }else if(errors>=maxErrors){
   done=true;finishMiniGame(false,`Você foi enforcado! A palavra era ${word}.`);
  }
 };
 area.addEventListener("click",click);
 miniGameCleanup=()=>area.removeEventListener("click",click);
 draw();
}
function startArrows(area){
 activeMiniType="arrows";const arrows=[["ArrowUp","⬆️"],["ArrowDown","⬇️"],["ArrowLeft","⬅️"],["ArrowRight","➡️"]];let count=0,target=null,done=false,timer=null;
 area.innerHTML='<div><div class="arrow-target" id="arrowTarget">⬆️</div><p id="arrowProgress">0 / 10</p><small>Use as setas do teclado. Cada seta tem 1,25 segundo.</small></div>';
 const next=()=>{if(done)return;target=arrows[Math.floor(Math.random()*arrows.length)];$("arrowTarget").textContent=target[1];$("arrowProgress").textContent=`${count} / 15`;clearTimeout(timer);timer=setTimeout(()=>{done=true;finishMiniGame(false,"Tempo esgotado! Tente novamente.");},1250);};
 const key=e=>{if(done||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key))return;e.preventDefault();if(e.key!==target[0]){done=true;clearTimeout(timer);finishMiniGame(false,"Seta errada! Tente novamente.");return;}count++;if(count>=15){done=true;clearTimeout(timer);finishMiniGame(true,"Reflexos perfeitos! Você acertou 15 setas.");}else next();};
 document.addEventListener("keydown",key);miniGameCleanup=()=>{document.removeEventListener("keydown",key);clearTimeout(timer);};next();
}
$("miniGameClose").onclick=()=>{if(miniGameCleanup)miniGameCleanup();closeModal("miniGameModal");};
document.addEventListener("keydown",e=>{
 if(!e.ctrlKey||e.altKey||e.shiftKey||e.repeat)return;
 const key=e.key.toLowerCase();
 const games={z:"ttt",x:"simon",c:"hangman",v:"arrows"};
 if(games[key]){
   e.preventDefault();
   if(document.activeElement && /INPUT|TEXTAREA/.test(document.activeElement.tagName))return;
   activeMiniType=games[key];openMiniGame(games[key]);return;
 }
});

document.addEventListener("keydown",e=>{
 if(!e.ctrlKey||e.altKey||e.shiftKey)return;
 const key=e.key.toLowerCase();
 const places={p:1,o:2,i:3,u:4};
 if(!(key in places))return;
 e.preventDefault();
 if(e.repeat)return;
 testFinish(places[key]);
});
setInterval(()=>{if(!$('wheelModal').classList.contains("hidden"))updateWheelCooldown();},1000);
renderKarts();renderPlayers();log("🏁 CORRIDA INICIADA");log(`🌍 Você escolheu ${human.name}. Os outros três são CPU.`);log("🎲 D3: cada resultado (1, 2 ou 3) tem exatamente 1/3 de chance.");log("🤖 Desafios da CPU: 25% de chance de acertar.");log("⌨️ Minijogos: Ctrl+Z jogo da velha • Ctrl+X Gênio • Ctrl+C forca • Ctrl+V setas.");
log("⌨️ Teste de resultado: Ctrl+P 1º • Ctrl+O 2º • Ctrl+I 3º • Ctrl+U 4º.");updateTurn();
