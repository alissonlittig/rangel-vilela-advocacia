(function () {
  'use strict';
  var b = document.querySelector('.burger'), nav = document.getElementById('menu');
  if (b && nav) {
    b.addEventListener('click', function () {
      var o = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!o));
      nav.classList.toggle('open', !o);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { b.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { b.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); b.focus(); }
    });
  }

  var wa = 'https://wa.me/message/EXEMPLO?text=';
  var A = {
    trab: ['Direito do trabalho', 'Horas extras, verbas não pagas, desvio de função, assédio e ambiente de trabalho. Analisamos o contrato, os recibos e o que aconteceu no dia a dia para dizer o que é possível pedir e em qual prazo.', 'carteira de trabalho, contrato, holerites e mensagens que mostrem a rotina.', 'Gostaria de conversar sobre direito do trabalho.'],
    resc: ['Rescisão e verbas', 'Conferência do termo de rescisão, aviso prévio, FGTS e multa. Vemos se os valores batem com o contrato e se houve desconto indevido.', 'termo de rescisão, extrato do FGTS, últimos holerites e carta de dispensa.', 'Gostaria de conferir a minha rescisão.'],
    prev: ['Aposentadoria', 'Planejamento e pedido de aposentadoria: tempo de contribuição, regras de transição e a melhor data para pedir. Também orientamos o BPC e a aposentadoria especial.', 'documentos pessoais, carteira de trabalho e o extrato CNIS.', 'Gostaria de conversar sobre aposentadoria.'],
    rev: ['Revisão de benefício', 'Para quem recebe benefício e desconfia do cálculo ou teve o pedido negado. Estudamos a carta de concessão e o histórico de contribuições.', 'carta de concessão, extrato de pagamentos e o CNIS.', 'Gostaria de revisar o meu benefício.'],
    acid: ['Acidente de trabalho', 'Orientação sobre comunicação do acidente, afastamento, benefício por incapacidade e estabilidade no emprego, conforme o caso.', 'comunicação de acidente, atestados, laudos e exames.', 'Gostaria de conversar sobre acidente de trabalho.'],
    pens: ['Pensão por morte', 'Análise do direito de dependentes à pensão: quem pode pedir, em que prazo e com quais documentos, para evitar perda de valores.', 'certidão de óbito, documentos do falecido e dos dependentes, comprovante de vínculo.', 'Gostaria de conversar sobre pensão por morte.']
  };
  var sp = document.querySelectorAll('.spine'), t = document.getElementById('p-t'), d = document.getElementById('p-d'), dc = document.getElementById('p-docs'), cta = document.getElementById('p-cta');
  sp.forEach(function (s, i) {
    s.addEventListener('click', function () {
      var k = A[s.dataset.k];
      sp.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      s.setAttribute('aria-pressed', 'true');
      t.textContent = k[0]; d.textContent = k[1]; dc.textContent = k[2];
      cta.href = wa + encodeURIComponent(k[3]);
    });
    s.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n !== null && sp[n]) { sp[n].focus(); e.preventDefault(); }
    });
  });

  var items = document.querySelectorAll('.sec h2,.steps li,.partners li,.rating,.hrs,.map,.sec-faq details,.final-t');
  items.forEach(function (el) { el.classList.add('rv'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }
})();
