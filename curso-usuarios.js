// curso-usuarios.js

let currentMod = -1;
const totalMods = 6;
 
const scripts = [
  "Olá! Seja bem-vinda ao curso da Agenda Studio Sônia Salomão. Neste primeiro módulo, você vai aprender como acessar a agenda de qualquer lugar — seja pelo celular, tablet ou computador. Vamos começar!",
  "Agora vamos conhecer a tela principal da agenda. Ela tem cinco seções principais: a barra do topo com os menus, o calendário lateral, a lista de profissionais, a legenda de cores, e a grade de horários do dia. Cada parte tem uma função importante que vamos explorar juntas.",
  "Agora vem a parte mais importante do dia a dia: registrar um novo agendamento. Existem duas formas de fazer isso — clicando diretamente no horário desejado na grade, ou usando o botão verde mais Agendar no topo. Vamos ver as duas formas.",
  "A aba Clientes é onde ficam registradas todas as clientes do studio. Cada vez que você cria um agendamento para alguém nova, ela é cadastrada automaticamente. Vamos ver como buscar uma cliente e entrar em contato com ela.",
  "A agenda está conectada ao WhatsApp, Instagram e TikTok. Isso significa que você pode enviar confirmações, lembretes e mensagens diretamente pelo app, sem precisar copiar e colar nada. Vamos ver como funciona.",
  "Chegamos ao último módulo! Aqui você vai aprender os truques que vão fazer você usar a agenda muito mais rápido no dia a dia. São pequenas dicas que fazem grande diferença quando você está atendendo e precisa registrar um horário rápido."
];
 
function startCurso() {
  var capa = document.getElementById('capa');
  var nav = document.getElementById('nav');
  if (capa) capa.style.display = 'none';
  if (nav) nav.classList.add('show');
  goTo(0);
}
 
function goTo(n) {
  if (currentMod >= 0) {
    document.getElementById('mod-' + currentMod).classList.remove('active');
  }
  currentMod = n;
  document.getElementById('mod-' + n).classList.add('active');
  window.scrollTo(0, 0);
  updateProgress();
}
 
function goToIndex() { goTo(0); }
 
function updateProgress() {
  const pct = currentMod === 0 ? 0 : Math.round((currentMod / totalMods) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = currentMod === 0 ? 'Índice' : 'Módulo ' + currentMod + ' de ' + totalMods;
}
 
function responder(btn, correct) {
  const opts = btn.parentElement.querySelectorAll('.quiz-opt');
  opts.forEach(o => o.disabled = true);
  btn.classList.add(correct ? 'correct' : 'wrong');
  if (!correct) {
    opts.forEach(o => { if (o.onclick.toString().includes('true')) o.classList.add('correct'); });
  }
}
 
function copyScript(i) {
  navigator.clipboard?.writeText(scripts[i]).then(() => alert('Script copiado! Cole no ElevenLabs para gerar o áudio.'));
}
