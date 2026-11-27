/* ===== Configuração fácil de editar ===== */
const CONFIG = {
  whatsapp: '5585988499463',
  message: 'Olá! Conheci a Odonto Mil pelo site e gostaria de agendar uma consulta.'
};

/* Dente da logo embutido no código (não depende de arquivo externo) */
const LOGO = 'data:image/png;base64,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';

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
    <img class="ico" src="${LOGO}" alt="" width="35" height="40">
    <h4>${esc(name)}</h4>
    <p>${esc(desc)}</p>
    <a data-wa data-proc="${esc(name)}" href="#">Saber mais / agendar →</a>
  </article>`;

document.documentElement.classList.remove('no-js');
document.getElementById('grid-geral').innerHTML = GERAL.map(card).join('');
document.getElementById('grid-esp').innerHTML = ESP.map(card).join('');

/* Dente da logo no menu */
document.querySelectorAll('[data-logo]').forEach((img) => { img.src = LOGO; });

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
