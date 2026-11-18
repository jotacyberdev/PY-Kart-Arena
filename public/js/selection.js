const chars = [
  {id:"tigrinho",name:"Tigrinho",emoji:"🐯"},
  {id:"veado",name:"Veado",emoji:"🦌"},
  {id:"onca",name:"Onça-pintada",emoji:"🐆"},
  {id:"macaco",name:"Macaco",emoji:"🐒"}
];
let selected = "tigrinho";
const grid = document.getElementById("characterGrid");
function render(){
  grid.innerHTML = chars.map(c=>`<button class="char-card ${c.id===selected?"active":""}" data-id="${c.id}"><span>${c.emoji}</span><strong>${c.name}</strong><small>${c.id===selected?"VOCÊ":"CPU"}</small></button>`).join("");
  grid.querySelectorAll(".char-card").forEach(b=>b.onclick=()=>{selected=b.dataset.id; render(); updateStage();});
}
function updateStage(){
  const c=chars.find(x=>x.id===selected);
  document.getElementById("selectedArt").textContent=c.emoji;
  document.getElementById("selectedName").textContent=c.name;
}
render(); updateStage();
document.getElementById("chooseButton").onclick=()=>{
  localStorage.setItem("selectedCharacter",selected);
  location.href="/pages/corrida.html";
};