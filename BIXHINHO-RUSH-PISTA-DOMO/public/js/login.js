const correct = ["⚖️ Balança","📄 Documento","🧑‍⚖️ Ministro do STF","💸 Taxa"];
const wrong = ["🐯 Tigrinho","🦌 Veado","🐒 Macaco","🏎️ Kart","🌴 Coqueiro"];
const modal = document.getElementById("captchaModal");
const grid = document.getElementById("captchaGrid");
const count = document.getElementById("captchaCount");
const confirm = document.getElementById("captchaConfirm");
const status = document.getElementById("captchaStatus");
let selected = new Set();

const loginCpf = document.getElementById("loginCpf");
const loginError = document.getElementById("loginError");
loginCpf.addEventListener("input", e => {
  let v=e.target.value.replace(/\D/g,"").slice(0,11);
  e.target.value=v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");
  loginError.textContent="";
});
document.getElementById("govButton").onclick = () => {
  const cpf=loginCpf.value.replace(/\D/g,"");
  if(!cpf){ loginError.textContent="⚠️ Preencha o CPF fictício para continuar."; loginCpf.focus(); return; }
  if(cpf.length!==11){ loginError.textContent="⚠️ Digite um CPF fictício completo."; loginCpf.focus(); return; }
  modal.classList.remove("hidden");
  buildCaptcha();
};

function buildCaptcha() {
  selected = new Set();
  status.textContent = "";
  confirm.disabled = true;
  count.textContent = "0 / 4 selecionadas";
  const cards = [...correct.map((label,i)=>({label,ok:true,id:`c${i}`})), ...wrong.map((label,i)=>({label,ok:false,id:`w${i}`}))];
  cards.sort(()=>Math.random()-0.5);
  grid.innerHTML = cards.map(c => `<button class="captcha-item" data-id="${c.id}" data-ok="${c.ok}"><span>${c.label.split(" ")[0]}</span><small>${c.label.slice(c.label.indexOf(" ")+1)}</small></button>`).join("");
  grid.querySelectorAll(".captcha-item").forEach(btn => btn.onclick = () => {
    const id = btn.dataset.id;
    if (selected.has(id)) { selected.delete(id); btn.classList.remove("selected"); }
    else if (selected.size < 4) { selected.add(id); btn.classList.add("selected"); }
    count.textContent = `${selected.size} / 4 selecionadas`;
    confirm.disabled = selected.size !== 4;
  });
}

confirm.onclick = () => {
  const buttons = [...grid.querySelectorAll(".captcha-item")];
  const ok = selected.size === 4 && [...selected].every(id => buttons.find(b=>b.dataset.id===id)?.dataset.ok==="true");
  if (!ok) {
    status.textContent = "❌ Verificação falhou. Há indícios de que você pode trabalhar no STF.";
    status.className = "captcha-status error";
    setTimeout(buildCaptcha, 900);
    return;
  }
  status.textContent = "✅ Verificação concluída. Acesso autorizado.";
  status.className = "captcha-status success";
  setTimeout(()=> location.href="/pages/selecao.html", 900);
};