// =====================================================
// SUYASH SAPRE — PREMIUM INTERACTIONS
// =====================================================

// Mobile Menu Toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// ===== NAV: Auto-hide on scroll down, show on scroll up =====
(function () {
  const nav = document.getElementById('nav');
  let lastScrollY = 0;
  let ticking = false;

  function updateNav() {
    const currentScrollY = window.scrollY;

    // Add shadow after scrolling
    if (currentScrollY > 30) {
      nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.3)';
    } else {
      nav.style.boxShadow = 'none';
    }

    // Hide/show on scroll direction
    if (currentScrollY > 200) {
      if (currentScrollY > lastScrollY + 5) {
        nav.classList.add('hidden');
      } else if (currentScrollY < lastScrollY - 5) {
        nav.classList.remove('hidden');
      }
    } else {
      nav.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  });
})();

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Scroll Reveal — Intersection Observer =====
document.addEventListener('DOMContentLoaded', () => {

  // Reveal sections on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.06,
    rootMargin: '0px 0px -60px 0px'
  });

  // Apply to all sections
  document.querySelectorAll('.section, .experience-featured, .glass-card, .value-card, .rotation-card, .contact-card').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ===== Counter Animation for Metrics =====
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.metric-value').forEach(el => {
    counterObserver.observe(el);
  });

  function animateCounter(el) {
    const text = el.textContent.trim();
    // Extract the numeric part and suffix
    const match = text.match(/^([\d,]+\.?\d*)([\+\w%]*)$/);
    if (!match) return;

    const targetNum = parseFloat(match[1].replace(/,/g, ''));
    const suffix = match[2] || '';
    const hasComma = match[1].includes(',');
    const duration = 1800;
    const startTime = performance.now();

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      let current = Math.round(eased * targetNum);

      if (hasComma) {
        el.textContent = current.toLocaleString() + suffix;
      } else {
        el.textContent = current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // Ensure final value matches original
        el.textContent = text;
      }
    }

    el.textContent = '0' + suffix;
    requestAnimationFrame(update);
  }

  // ===== Text Scramble Effect on Hero Title =====
  const heroTitle = document.querySelector('.hero-title .gradient-text');
  if (heroTitle) {
    const finalText = heroTitle.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let iteration = 0;

    function scramble() {
      heroTitle.textContent = finalText.split('').map((char, index) => {
        if (index < iteration) return finalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');

      if (iteration < finalText.length) {
        iteration += 1 / 2;
        requestAnimationFrame(() => setTimeout(scramble, 40));
      } else {
        heroTitle.textContent = finalText;
      }
    }

    // Start scramble after a brief delay
    setTimeout(scramble, 600);
  }

  // ===== Magnetic Hover on Buttons =====
  document.querySelectorAll('.btn-primary, .social-link, .nav-logo').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // ===== Parallax on Hero Background =====
  const heroGradient = document.querySelector('.hero-bg-gradient');
  const heroGrid = document.querySelector('.hero-bg-grid');

  if (heroGradient || heroGrid) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        if (heroGradient) heroGradient.style.transform = `translateY(${scrollY * 0.15}px)`;
        if (heroGrid) heroGrid.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
    }, { passive: true });
  }

  // ===== Staggered reveals for experience items =====
  document.querySelectorAll('.rotations-grid .rotation-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  document.querySelectorAll('.hero-metrics .metric').forEach((m, i) => {
    m.style.transitionDelay = `${i * 0.08}s`;
  });

  // ===== Close mobile menu on link click =====
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('active');
    });
  });
});
