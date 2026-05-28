// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Stagger children
      const cards = e.target.querySelectorAll('.card, .team-card, .fade-in');
      cards.forEach((c, i) => {
        setTimeout(() => c.classList.add('visible'), i * 120);
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Ver más / Ver menos
document.querySelectorAll('.ver-mas-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const isOpen = content.classList.toggle('open');
    btn.textContent = isOpen ? 'Ver menos ↑' : 'Ver más ↓';
  });
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input, textarea');
  const nombre  = inputs[0].value;
  const correo  = inputs[1].value;
  const mensaje = inputs[2].value;

  const url = 'https://docs.google.com/forms/d/e/1FAIpQLScvcBDoNApLCu10J2OKbEiExCfr8F8DbxvoU6qDt019H-9lVA/formResponse';

  const body = new URLSearchParams({
    'entry.67401514':  nombre,
    'emailAddress':    correo,
    'entry.242044334': mensaje,
  });

  fetch(url, { method: 'POST', body, mode: 'no-cors' });

  e.target.innerHTML = `
    <div class="form-success">
      <div style="font-size:2.5rem;margin-bottom:1rem">🌿</div>
      <p>¡Gracias por tu mensaje! Te contactaremos pronto.</p>
    </div>
  `;
}
