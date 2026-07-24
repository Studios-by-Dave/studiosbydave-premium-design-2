const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const filterButtons = document.querySelectorAll('.filter-button');
const galleryCards = document.querySelectorAll('.gallery-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove('is-active');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('is-active');
    button.setAttribute('aria-pressed', 'true');

    galleryCards.forEach((card) => {
      const category = card.dataset.category;
      const matches = filter === 'all' || category === filter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

const testimonials = [
  {
    quote: '“Great crew, fair pricing, and our new privacy fence looks exactly how we hoped it would.”',
    author: '— Local Homeowner, Shelby'
  },
  {
    quote: '“They replaced old farm fencing fast, communicated clearly, and left the property in good shape.”',
    author: '— Property Owner, Cleveland County'
  },
  {
    quote: '“Straightforward estimate, dependable schedule, and a gate install that made everyday access easier.”',
    author: '— Small Business Owner, Boiling Springs'
  }
];

const quoteElement = document.getElementById('testimonial-quote');
const authorElement = document.getElementById('testimonial-author');
const testimonialButtons = document.querySelectorAll('.testimonial-button');
let testimonialIndex = 0;
let rotationTimer = null;
const isLocalPreview = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';

function renderTestimonial(index) {
  if (!quoteElement || !authorElement || index < 0 || index >= testimonials.length) {
    if (isLocalPreview) {
      console.warn('Testimonial rendering skipped because the target elements or index were invalid.');
    }
    return;
  }

  quoteElement.textContent = testimonials[index].quote;
  authorElement.textContent = testimonials[index].author;
}

function moveTestimonial(step) {
  testimonialIndex = (testimonialIndex + step + testimonials.length) % testimonials.length;
  renderTestimonial(testimonialIndex);
}

function startRotation() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  rotationTimer = window.setInterval(() => moveTestimonial(1), 6000);
}

function resetRotation() {
  if (rotationTimer) {
    window.clearInterval(rotationTimer);
  }
  startRotation();
}

testimonialButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.dataset.direction === 'prev' ? -1 : 1;
    moveTestimonial(direction);
    resetRotation();
  });
});

if (quoteElement && authorElement) {
  renderTestimonial(testimonialIndex);
  startRotation();
}

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
