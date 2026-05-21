// curso-administrador.js

let currentMod = -1;
const totalMods = 7;

const scripts = [
  "Como administradora, a tela principal da agenda é o seu painel de gestão. Os quatro indicadores no topo — Hoje, Confirmados, Receita Prevista e Pendentes — são o pulso diário do studio.",
  "Neste módulo vamos aprender como criar e gerenciar os acessos das profissionais ao sistema.",
  "Os relatórios são onde os dados viram decisões. Vamos explorar cada indicador e como usar as informações para melhorar o negócio.",
  "Uma das maiores oportunidades de economia de tempo está na comunicação com clientes. Vamos ver como automatizar confirmações, lembretes e reativação.",
  "O Assistente IA da agenda vai muito além de responder perguntas simples. Com as perguntas certas, ele se torna uma ferramenta poderosa de gestão e marketing.",
  "Manter o sistema funcionando e seguro requer uma rotina simples. Neste módulo vamos criar um checklist de manutenção mensal.",
  "Agora que você domina o sistema atual, vamos ver o que pode ser implementado para tornar a agenda ainda mais poderosa nos próximos meses."
];

function startCurso() {
  document.getElementById('capa').style.display = 'none';
  document.getElementById('nav').classList.add('show');
  goTo(0);
}

function goTo(n) {
  if (currentMod >= 0) document.getElementById('mod-' + currentMod).classList.remove('active');
  currentMod = n;
  document.getElementById('mod-' + n).classList.add('active');
  window.scrollTo(0, 0);
  const pct = n === 0 ? 0 : Math.round((n / totalMods) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = n === 0 ? 'Índice' : 'Módulo ' + n + ' de ' + totalMods;
}

function toggleCheck(el) {
  el.classList.toggle('done');
}

function copyScript(i) {
  navigator.clipboard?.writeText(scripts[i]).then(() => alert('Script copiado! Cole no ElevenLabs para gerar o áudio.'));
}

function copyPrompt(p) {
  navigator.clipboard?.writeText(p).then(() => alert('Prompt copiado: "' + p + '"'));
}
