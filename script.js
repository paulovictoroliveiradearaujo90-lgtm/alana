/* ===== Configuração fácil de editar ===== */
const CONFIG = {
  whatsapp: '5585988499463',
  message: 'Olá! Conheci a Odonto Mil pelo site e gostaria de agendar uma consulta.'
};

const GERAL = [
  ['Limpeza dentária', 'Higienização profissional para manter dentes e gengivas saudáveis.'],
  ['Restaurações', 'Recuperação da forma e da função de dentes danificados.'],
  ['Clareamento dental', 'Tratamento estético para um sorriso mais claro.'],
  ['Radiografia periapical', 'Exame de imagem para avaliar dentes específicos e estruturas ao redor.'],
  ['Radiografia panorâmica', 'Visão geral dos dentes, mandíbula e maxilar em um único exame.'],
  ['Documentação ortodôntica', 'Registros necessários para o planejamento do tratamento ortodôntico.']
];
const ESP = [
  ['Tratamento de canal (Endodontia)', 'Cuidado com o interior do dente para preservá-lo e aliviar a dor.'],
  ['Extrações dentárias', 'Remoção de dentes quando necessária, com avaliação individual.'],
  ['Implantes dentários', 'Reposição de dentes perdidos com estética, estabilidade e função.'],
  ['Aparelhos dentários (Ortodontia)', 'Correção do alinhamento dos dentes e da mordida.'],
  ['Próteses dentárias', 'Reabilitação do sorriso com soluções planejadas para cada caso.'],
  ['Gengivoplastia', 'Procedimento que remodela a gengiva para harmonizar o sorriso.'],
  ['Harmonização facial', 'Cuidado estético voltado ao equilíbrio e à harmonia do rosto.']
];

const waLink = (extra) => {
  const msg = extra ? `${CONFIG.message} Tenho interesse em: ${extra}.` : CONFIG.message;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
};

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const card = ([name, desc]) => `
  <article class="card reveal">
    <svg aria-hidden="true"><use href="#tooth"/></svg>
    <h4>${esc(name)}</h4>
    <p>${esc(desc)}</p>
    <a data-wa data-proc="${esc(name)}" href="#">Saber mais / agendar →</a>
  </article>`;

document.documentElement.classList.remove('no-js');
document.getElementById('grid-geral').innerHTML = GERAL.map(card).join('');
document.getElementById('grid-esp').innerHTML = ESP.map(card).join('');

/* Links do WhatsApp */
document.querySelectorAll('[data-wa]').forEach((a) => {
  a.href = waLink(a.dataset.proc);
  a.target = '_blank';
  a.rel = 'noopener';
});

/* Espaços de imagem: mostra placeholder se o arquivo não existir */
document.querySelectorAll('[data-slot]').forEach((slot) => {
  const img = slot.querySelector('img');
  if (!img) return;
  slot.dataset.label = img.alt;
  const check = () => { if (!img.naturalWidth) slot.classList.add('empty'); };
  img.addEventListener('error', () => slot.classList.add('empty'));
  if (img.complete) check();
});

/* Menu mobile */
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const setMenu = (open) => {
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
};
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* Animações de entrada */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  io.observe(el);
});

/* Indicador de seção ativa */
const links = [...menu.querySelectorAll('a')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => s && spy.observe(s));

/* Barra de progresso */
const bar = document.getElementById('progress');
const onScroll = () => {
  const h = document.documentElement;
  bar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();