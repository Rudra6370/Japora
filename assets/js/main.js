// Japora Website - Vanilla JavaScript
// ================================
// All functionality is implemented with vanilla JS.
// No external dependencies or frameworks.

// ======================================
// Focus-visible polyfill for accessibility
// ======================================
if (!('focus-visible' in document.documentElement)) {
  const style = document.createElement('style');
  style.textContent = `
    :focus:not(:focus-visible) {
      outline: none;
    }
    :focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
}

// ======================================
// Feature count animation
// ======================================
function animateCounter(element, target) {
  const duration = 2000;
  const start = performance.now();
  
  function updateCounter(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(progress * target);
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// ======================================
// Smooth scroll for anchor links
// ======================================
document.addEventListener('DOMContentLoaded', function() {
  initSmoothScroll();
  initFAQToggle();
  initMobileNav();
  initScrollReveal();
  initCookieNotice();
  initFeatureCounters();
});

// ======================================
// Smooth scroll for anchor links
// ======================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Close mobile nav if open
        const nav = document.querySelector('.main-nav');
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
        }

        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ======================================
// FAQ Toggle functionality
// ======================================
function initFAQToggle() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isOpen = answer.style.maxHeight;
      
      // Close all other FAQ answers
      document.querySelectorAll('.faq-answer').forEach(a => {
        a.style.maxHeight = null;
      });
      document.querySelectorAll('.faq-toggle').forEach(toggle => {
        toggle.style.transform = 'rotate(0deg)';
      });

      // Toggle current
      if (isOpen) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ======================================
// Mobile navigation toggle
// ======================================
function initMobileNav() {
  const nav = document.querySelector('.main-nav');
  const header = document.querySelector('header');

  // Create mobile menu button
  const menuBtn = document.createElement('button');
  menuBtn.type = 'button';
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.setAttribute('aria-label', 'Open main navigation');
  menuBtn.innerHTML = '<span></span><span></span><span></span>';
  
  // Insert before nav
  if (nav) {
    nav.parentNode.insertBefore(menuBtn, nav);
  }

  // Toggle mobile menu
  menuBtn.addEventListener('click', function() {
    if (nav) {
      nav.classList.toggle('open');
      this.setAttribute('aria-expanded', nav.classList.contains('open'));
      this.setAttribute('aria-label', nav.classList.contains('open') 
        ? 'Close main navigation' 
        : 'Open main navigation');
    }
  });

  // Close menu on link click
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open main navigation');
      }
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open main navigation');
    }
  });
}

// ======================================
// Scroll reveal with reduced motion support
// ======================================
function initScrollReveal() {
  const elements = document.querySelectorAll('.fade-in, .step-number');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
  });
}

// ======================================
// Cookie notice initialization
// ======================================
function initCookieNotice() {
  // Check if notice was already dismissed
  if (localStorage.getItem('cookie_notice_dismissed') === 'true') {
    return;
  }

  // Create cookie notice
  const notice = document.createElement('div');
  notice.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
    padding: var(--spacing-md);
    z-index: 1000;
    color: var(--color-text);
    font-size: 0.875rem;
  `;
  notice.innerHTML = `
    <div style="display: flex; align-items: center; gap: var(--spacing-sm);">
      <span>This website uses cookies to ensure you get the best experience.</span>
      <button id="cookie-accept" style="background: none; border: none; color: var(--color-accent); font: inherit; cursor: pointer;">Accept</button>
    </div>
  `;

  document.body.appendChild(notice);

  // Handle accept button
  const acceptBtn = notice.querySelector('#cookie-accept');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookie_notice_dismissed', 'true');
      notice.style.display = 'none';
    });
  }
}

// ======================================
// Feature count initialization with IntersectionObserver
// ======================================
function initFeatureCounters() {
  const featuredNumbers = [27, 8, 3, 2, 4, 5, 7, 8];
  const featureElements = document.querySelectorAll('.feature-badge');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const target = featuredNumbers[index] || 0;
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  featureElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'scale(0.8)';
    counterObserver.observe(el);
  });
}

// ======================================
// Theme toggle (light/dark)
// ======================================
function initThemeToggle() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial theme
  if (prefersDark.matches) {
    document.body.classList.add('dark-mode');
  }

  // Listen for system changes
  prefersDark.addEventListener('change', e => {
    if (e.matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
}// Initialize theme on load
document.addEventListener('DOMContentLoaded', initThemeToggle);

// Initialize theme toggle on load
initThemeToggle();

// Initialize feature counters after page load
document.addEventListener('DOMContentLoaded', initFeatureCounters);

// ======================================
// Copy to clipboard helper
// ======================================
function initCopyToClipboard() {
  document.querySelectorAll('.copy-link').forEach(btn => {
    btn.addEventListener('click', function() {
      const text = this.getAttribute('data-copy');
    if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        const originalText = this.innerHTML;
        this.innerHTML = 'Copied!';
        setTimeout(() => {
          this.innerHTML = originalText;
        }, 2000);
      });
    });
  });
}

// Initialize copy functionality on DOM load
document.addEventListener('DOMContentLoaded', initCopyToClipboard);

// Initialize feature counters on load
document.addEventListener('DOMContentLoaded', initFeatureCounters);