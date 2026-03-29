/* ══════════════════════════════════════
   CREDZO — script.js
   ══════════════════════════════════════ */

/* ─── Navbar scroll effect ─── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ─── Mobile hamburger menu ─── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

/* ─── Smooth active nav link highlighting ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(sec => sectionObserver.observe(sec));

/* ─── Scroll-in animations ─── */
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animateObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Add animation class to cards and sections
document.querySelectorAll(
  '.feature-card, .step, .pricing-card, .trust-item, .category-pill, .contact-detail'
).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
  animateObserver.observe(el);
});

// Reusable CSS class injection for visibility
const styleTag = document.createElement('style');
styleTag.textContent = `
  .feature-card.visible,
  .step.visible,
  .pricing-card.visible,
  .trust-item.visible,
  .category-pill.visible,
  .contact-detail.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(styleTag);

/* ─── Contact Form Validation & Submit ─── */
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

const validators = {
  firstName: {
    el: () => document.getElementById('firstName'),
    err: () => document.getElementById('firstNameError'),
    validate(val) {
      if (!val.trim()) return 'First name is required.';
      if (val.trim().length < 2) return 'Must be at least 2 characters.';
      return '';
    }
  },
  lastName: {
    el: () => document.getElementById('lastName'),
    err: () => document.getElementById('lastNameError'),
    validate(val) {
      if (!val.trim()) return 'Last name is required.';
      return '';
    }
  },
  email: {
    el: () => document.getElementById('email'),
    err: () => document.getElementById('emailError'),
    validate(val) {
      if (!val.trim()) return 'Email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Enter a valid email address.';
      return '';
    }
  },
  subject: {
    el: () => document.getElementById('subject'),
    err: () => document.getElementById('subjectError'),
    validate(val) {
      if (!val) return 'Please select a subject.';
      return '';
    }
  },
  message: {
    el: () => document.getElementById('message'),
    err: () => document.getElementById('messageError'),
    validate(val) {
      if (!val.trim()) return 'Message is required.';
      if (val.trim().length < 10) return 'Message must be at least 10 characters.';
      return '';
    }
  }
};

function validateField(key) {
  const { el, err, validate } = validators[key];
  const value = el().value;
  const error = validate(value);
  err().textContent = error;
  if (error) {
    el().classList.add('error');
  } else {
    el().classList.remove('error');
  }
  return !error;
}

// Live validation on blur
Object.keys(validators).forEach(key => {
  validators[key].el().addEventListener('blur', () => validateField(key));
  validators[key].el().addEventListener('input', () => {
    if (validators[key].el().classList.contains('error')) {
      validateField(key);
    }
  });
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Run all validations
  const allValid = Object.keys(validators).every(key => validateField(key));
  if (!allValid) return;

  // Simulate sending (replace with actual API call)
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');

  submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';

  // Simulate async delay (replace with fetch/axios to real endpoint)
  await new Promise(resolve => setTimeout(resolve, 1800));

  // Show success
  form.reset();
  submitBtn.style.display = 'none';
  formSuccess.style.display = 'flex';

  // Scroll success into view
  formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

/* ─── Pricing card hover ─── */
document.querySelectorAll('.pricing-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    document.querySelectorAll('.pricing-card').forEach(c => {
      if (c !== card) c.style.opacity = '0.85';
    });
  });
  card.addEventListener('mouseleave', () => {
    document.querySelectorAll('.pricing-card').forEach(c => {
      c.style.opacity = '1';
    });
  });
});

/* ─── Active nav link style ─── */
const activeStyle = document.createElement('style');
activeStyle.textContent = `
  .nav-links a.active {
    color: var(--purple);
    background: var(--purple-light);
  }
`;
document.head.appendChild(activeStyle);
