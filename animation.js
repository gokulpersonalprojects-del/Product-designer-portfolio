import { getActivePath } from './router.js';

// ==========================================================================
// INITIAL THEME SETTING (Non-blocking check)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const targetTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.className = targetTheme;
  updateToggleButtonAria(targetTheme);
}

function updateToggleButtonAria(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    if (theme === 'dark') {
      toggleBtn.setAttribute('aria-label', 'Switch to light theme');
      toggleBtn.title = 'Switch to light theme';
    } else {
      toggleBtn.setAttribute('aria-label', 'Switch to dark theme');
      toggleBtn.title = 'Switch to dark theme';
    }
  }
}

// ==========================================================================
// CIRCULAR THEME REVEAL TRANSITION
// ==========================================================================
function initThemeToggler() {
  const toggleBtn = document.getElementById('theme-toggle');
  const overlay = document.getElementById('theme-overlay');

  if (!toggleBtn || !overlay) return;

  toggleBtn.addEventListener('click', (e) => {
    // 1. Get click coordinates
    let clickX = e.clientX;
    let clickY = e.clientY;

    // If keyboard triggered (clientX/Y are 0), use center of toggle button
    if (clickX === 0 && clickY === 0) {
      const rect = toggleBtn.getBoundingClientRect();
      clickX = rect.left + rect.width / 2;
      clickY = rect.top + rect.height / 2;
    }

    // 2. Identify target theme & colors
    const isDark = document.documentElement.classList.contains('dark');
    const targetTheme = isDark ? 'light' : 'dark';
    
    // Core theme background colors to match CSS variables
    const targetBg = targetTheme === 'dark' ? 'hsl(0, 0%, 4%)' : 'hsl(0, 0%, 100%)';

    // 3. Configure overlay variables
    overlay.style.setProperty('--clip-x', `${clickX}px`);
    overlay.style.setProperty('--clip-y', `${clickY}px`);
    overlay.style.setProperty('--bg-target', targetBg);
    
    // 4. Trigger circular expansion
    overlay.classList.add('reveal');

    // 5. Swap classes mid-animation (after expansion clip covers screen)
    // The CSS transition is 800ms; swapping at 450ms is visually seamless
    setTimeout(() => {
      document.documentElement.className = targetTheme;
      localStorage.setItem('theme', targetTheme);
      updateToggleButtonAria(targetTheme);
    }, 400);

    // 6. Reset overlay after transition ends
    setTimeout(() => {
      overlay.classList.remove('reveal');
    }, 850);
  });
}

// ==========================================================================
// TYPEWRITER SUBHEADING EFFECT
// ==========================================================================
function initTypewriter() {
  const typewriterSpan = document.getElementById('typewriter');
  if (!typewriterSpan) return;

  const phrases = [
    'AI interaction systems.',
    'scalable interaction systems.',
    'complexity mapping.',
    'operational design workflows.'
  ];

  let phraseIndex = 0;
  let charIndex = phrases[0].length; // Start with the first full phrase
  let isDeleting = true;
  let typingSpeed = 70;
  let delayBetweenPhrases = 2500;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      // Backspace
      typewriterSpan.textContent = currentPhrase.substring(0, charIndex);
      charIndex--;
      typingSpeed = 35; // Backspace faster
    } else {
      // Type
      typewriterSpan.textContent = currentPhrase.substring(0, charIndex);
      charIndex++;
      typingSpeed = 75; // Standard typing pace
    }

    // Determine state switches
    if (!isDeleting && charIndex > currentPhrase.length) {
      // Finished typing full phrase, pause
      isDeleting = true;
      typingSpeed = delayBetweenPhrases;
    } else if (isDeleting && charIndex < 0) {
      // Finished backspacing, move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      charIndex = 0;
      typingSpeed = 500; // Small delay before typing next phrase
    }

    setTimeout(type, typingSpeed);
  }

  // Start typewriter loop
  setTimeout(type, delayBetweenPhrases);
}

// ==========================================================================
// INTERSECTION OBSERVER (SCROLL REVEAL)
// ==========================================================================
let revealObserver;

function initScrollReveal() {
  // Disconnect existing observer if routing occurred
  if (revealObserver) {
    revealObserver.disconnect();
  }

  const revealSettings = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve once revealed
        observer.unobserve(entry.target);
      }
    });
  }, revealSettings);

  // Targets: Section groups, case study chapters, and project cards
  const elementsToReveal = document.querySelectorAll(
    '.fade-in-section, .work-card, .body-chapter:not(.solution-chapter-content .body-chapter), .project-row, .about-grid'
  );
  
  elementsToReveal.forEach(el => {
    el.classList.add('fade-in-section'); // Ensure class is present
    revealObserver.observe(el);
  });
}



// ==========================================================================
// INTERACTIVE FOCUS DECK SEGMENTED SWITCHER
// ==========================================================================
function initFocusDeck() {
  const tabs = document.querySelectorAll('.deck-tab');
  const slider = document.getElementById('tab-slider');
  const body = document.getElementById('deck-body');
  const titleEl = document.getElementById('deck-title');
  const descEl = document.getElementById('deck-desc');
  const projectsRow = document.getElementById('deck-projects-row');

  if (!tabs.length || !slider) return;

  const deckData = {
    ai: {
      title: "AI Systems & Agent Experiences",
      desc: "Designing conversational interfaces, syllabus mapping systems, generative UI workflows and agent-assisted user experiences.",
      projects: ["Yooki AI", "Aura AI"],
      color: "var(--active-ai)",
      projectIds: ["yooki", "aura"]
    },
    saas: {
      title: "SaaS Platform Architecture",
      desc: "Creating scalable B2B admin consoles, flexible grid systems, dynamic analytics dashboards, and role-based access control flows.",
      projects: ["Aura AI"],
      color: "var(--active-saas)",
      projectIds: ["aura"]
    },
    fintech: {
      title: "FinTech & Payment Systems",
      desc: "Designing mobile identity verification (KYC) flows, progressive disclosures, and transaction security verification.",
      projects: ["Bank of Palestine"],
      color: "var(--active-fintech)",
      projectIds: ["bop"]
    },
    buildtech: {
      title: "BuildTech & On-Site Tools",
      desc: "Optimizing construction site timeline trackers, invoice capture OCR scan processors, and mobile inventory forms for field operators.",
      projects: ["Cendrol Ops"],
      color: "var(--active-build)",
      projectIds: ["cendrol"]
    },
    enterprise: {
      title: "Enterprise Workflow Design",
      desc: "Streamlining legacy software, high-density data tables, validation checkpoints, and operations dashboards to improve workforce productivity.",
      projects: ["Yooki", "Cendrol Ops", "Bank of Palestine"],
      color: "var(--active-mba)",
      projectIds: ["yooki", "cendrol", "bop"]
    }
  };

  function updateSlider(activeTab) {
    slider.style.width = `${activeTab.offsetWidth}px`;
    slider.style.left = `${activeTab.offsetLeft}px`;
  }

  function switchTab(tabKey, tabEl) {
    const data = deckData[tabKey];
    if (!data) return;

    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tabEl.classList.add('active');
    tabEl.setAttribute('aria-selected', 'true');
    updateSlider(tabEl);

    if (body) {
      body.style.setProperty('--active-color', data.color);
    }
    
    const content = body.querySelector('.deck-content-wrapper');
    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'translateY(4px)';
      content.style.transition = 'opacity 0.15s, transform 0.15s';
      
      setTimeout(() => {
        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.desc;
        
        if (projectsRow) {
          projectsRow.innerHTML = '';
          data.projects.forEach(p => {
            const badge = document.createElement('span');
            badge.className = 'deck-project-badge';
            badge.textContent = p;
            projectsRow.appendChild(badge);
          });
        }
        
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 150);
    }

    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
      const proj = card.getAttribute('data-project');
      if (data.projectIds.includes(proj)) {
        card.classList.add('flash-highlight');
      } else {
        card.classList.remove('flash-highlight');
      }
    });
  }

  tabs.forEach(tab => {
    const tabKey = tab.getAttribute('data-tab');
    
    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      switchTab(tabKey, tab);
    });

    tab.addEventListener('mouseenter', () => {
      const data = deckData[tabKey];
      if (data) {
        const workCards = document.querySelectorAll('.work-card');
        workCards.forEach(card => {
          const proj = card.getAttribute('data-project');
          if (data.projectIds.includes(proj)) {
            card.classList.add('flash-highlight');
          } else {
            card.classList.remove('flash-highlight');
          }
        });
      }
    });

    tab.addEventListener('mouseleave', () => {
      const activeTab = document.querySelector('.deck-tab.active');
      if (activeTab) {
        const activeKey = activeTab.getAttribute('data-tab');
        const data = deckData[activeKey];
        if (data) {
          const workCards = document.querySelectorAll('.work-card');
          workCards.forEach(card => {
            const proj = card.getAttribute('data-project');
            if (data.projectIds.includes(proj)) {
              card.classList.add('flash-highlight');
            } else {
              card.classList.remove('flash-highlight');
            }
          });
        }
      }
    });
  });

  window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.deck-tab.active');
    if (activeTab) {
      updateSlider(activeTab);
    }
  });

  const initialActive = document.querySelector('.deck-tab.active');
  if (initialActive) {
    setTimeout(() => {
      updateSlider(initialActive);
      const activeKey = initialActive.getAttribute('data-tab');
      switchTab(activeKey, initialActive);
    }, 150);
  }

  document.addEventListener('click', () => {
    const activeTab = document.querySelector('.deck-tab.active');
    if (activeTab) {
      const activeKey = activeTab.getAttribute('data-tab');
      const data = deckData[activeKey];
      const workCards = document.querySelectorAll('.work-card');
      workCards.forEach(card => {
        const proj = card.getAttribute('data-project');
        if (data && data.projectIds.includes(proj)) {
          card.classList.add('flash-highlight');
        } else {
          card.classList.remove('flash-highlight');
        }
      });
    }
  });
}

// ==========================================================================
// UNIFIED BIO & CREDENTIALS CARDS INTERACTION
// ==========================================================================
function initBioCredentialsInteraction() {
  const cards = document.querySelectorAll('.bio-stat-card, .cred-box');

  if (!cards.length) return;

  const projectHighlights = {
    // Quick Credentials
    experience: ["yooki", "bop", "cendrol", "aura"],
    mba: ["yooki", "bop", "cendrol", "aura"],
    btech: ["yooki", "aura"],
    // Recruiter strengths
    complex: ["yooki", "bop", "cendrol", "aura"],
    business: ["yooki", "bop", "cendrol", "aura"]
  };

  function highlight(statKey) {
    cards.forEach(c => {
      if (c.getAttribute('data-stat') === statKey) {
        c.classList.add('highlight-active');
      } else {
        c.classList.remove('highlight-active');
      }
    });

    // Flash highlight corresponding project cards in the right pane
    const targetProjects = projectHighlights[statKey] || [];
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
      const proj = card.getAttribute('data-project');
      if (targetProjects.includes(proj)) {
        card.classList.add('flash-highlight');
      } else {
        card.classList.remove('flash-highlight');
      }
    });
  }

  function reset() {
    cards.forEach(c => c.classList.remove('highlight-active'));
    
    // Reset right pane work card highlights to sync with the active Focus Deck tab
    const activeTab = document.querySelector('.deck-tab.active');
    if (activeTab) {
      const activeKey = activeTab.getAttribute('data-tab');
      // Trigger a click or simulated mouseenter on the active tab to restore its highlights
      const tabEvent = new Event('mouseenter');
      activeTab.dispatchEvent(tabEvent);
    } else {
      const workCards = document.querySelectorAll('.work-card');
      workCards.forEach(card => card.classList.remove('flash-highlight'));
    }
  }

  // Bind card hover and focus triggers
  cards.forEach(card => {
    const statKey = card.getAttribute('data-stat');
    if (!statKey) return;

    card.addEventListener('mouseenter', () => highlight(statKey));
    card.addEventListener('mouseleave', reset);
    card.addEventListener('focus', () => highlight(statKey));
    card.addEventListener('blur', reset);
  });

  // Staggered highlight sequence on load (gives immediate user feedback)
  setTimeout(() => {
    highlight('complex');
    setTimeout(() => {
      highlight('business');
      setTimeout(() => {
        reset();
      }, 650);
    }, 650);
  }, 900);
}

// ==========================================================================
// PHONE CONTACT POPUP
// ==========================================================================
function initPhonePopup() {
  const popup = document.getElementById('phone-popup');
  if (!popup) return;

  let lastTrigger = null;

  function openPopup(trigger) {
    lastTrigger = trigger;
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.classList.add('phone-popup-open');

    const closeBtn = popup.querySelector('[data-phone-close]');
    if (closeBtn) closeBtn.focus();
  }

  function closePopup() {
    if (!popup.classList.contains('is-open')) return;

    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('phone-popup-open');

    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  document.addEventListener('click', (event) => {
    const openTrigger = event.target.closest('[data-phone-open]');
    if (openTrigger) {
      event.preventDefault();
      openPopup(openTrigger);
      return;
    }

    if (event.target.closest('[data-phone-close]')) {
      closePopup();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePopup();
    }
  });
}

// ==========================================================================
// MODULE LIFECYCLE INITIALIZATION
// ==========================================================================
initPreloader(); // Must run first — locks scroll and shows preloader
initTheme();
initThemeToggler();
initTypewriter();
initScrollReveal();
initFocusDeck();
initBioCredentialsInteraction();
initCyclingSkill();
initPhonePopup();

// Re-observe scroll reveals on route changes
document.addEventListener('viewMounted', () => {
  initScrollReveal();
});

// ==========================================================================
// CYCLING SKILL WORD ANIMATION
// ==========================================================================
function initCyclingSkill() {
  const el = document.getElementById('cycling-skill');
  if (!el) return;

  const words = ['UX design', 'brand strategy', 'business thinking'];
  let index = 0;

  function cycleWord() {
    // Slide out upwards
    el.classList.add('cycling-exit');

    setTimeout(() => {
      index = (index + 1) % words.length;
      el.textContent = words[index];
      el.classList.remove('cycling-exit');
      el.classList.add('cycling-enter');

      // Clean up enter class after animation
      setTimeout(() => {
        el.classList.remove('cycling-enter');
      }, 400);
    }, 300);
  }

  // Start cycling every 2.2 seconds
  setInterval(cycleWord, 2200);
}

// ==========================================================================
// PRELOADER
// ==========================================================================
function initPreloader() {
  const preloader  = document.getElementById('preloader');
  const quoteEl    = document.getElementById('preloader-quote');
  const bar        = document.getElementById('preloader-bar');
  if (!preloader) return;

  const designedForEl = document.getElementById('preloader-designed-for');
  const logoItems     = preloader.querySelectorAll('.logo-item');

  // Lock scroll
  document.body.classList.add('preloading');

  const QUOTE = 'From rolling rocks to intelligent systems, design has always been humanity\'s way of making movement easier.';

  // Words that get an orange highlight
  const HIGHLIGHTS = new Set(['rolling', 'rocks', 'intelligent', 'systems,', 'design', 'movement', 'easier.']);

  // ── Sequence timings (ms) ────────────────────────────────
  const T_MORPH        = 600;   // rock → tyre morph starts
  const T_QUOTE_START  = 1800;  // first word appears (gives time for morph to show)
  const T_WORD_DELAY   = 120;   // gap between each word (slower, more readable)
  const T_LOGOS_START  = 3400;  // client logos section fade-in starts
  const T_LOGO_STAGGER = 150;   // delay between each logo item fade-in
  const T_EXIT         = 6000;  // preloader starts sweeping away

  // ── Progress bar fill ───────────────────────────────────
  // Fills from 0 → 100% over T_EXIT ms
  requestAnimationFrame(() => {
    bar.style.transition = `width ${T_EXIT}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    bar.style.width = '100%';
  });

  // ── 1. Trigger rock → tyre morph ───────────────────────
  setTimeout(() => {
    preloader.classList.add('morphed');
  }, T_MORPH);

  // ── 2. Reveal quote word by word ───────────────────────
  const words = QUOTE.split(' ');

  // Build word spans
  quoteEl.innerHTML = words.map((w, i) => {
    const isHighlight = HIGHLIGHTS.has(w.toLowerCase());
    return `<span class="pl-word${isHighlight ? ' highlight' : ''}" style="margin-right:0.28em">${w}</span>`;
  }).join('');

  const wordEls = quoteEl.querySelectorAll('.pl-word');

  wordEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, T_QUOTE_START + i * T_WORD_DELAY);
  });

  // ── 2.5. Reveal client logos one by one with stagger ───
  if (designedForEl && logoItems.length) {
    setTimeout(() => {
      designedForEl.classList.add('visible');
      logoItems.forEach((logo, index) => {
        setTimeout(() => {
          logo.classList.add('revealed');
        }, index * T_LOGO_STAGGER);
      });
    }, T_LOGOS_START);
  }

  // ── 3. Dismiss preloader ────────────────────────────────
  setTimeout(() => {
    preloader.classList.add('exit');
    document.body.classList.remove('preloading');

    // Remove from DOM after transition ends
    preloader.addEventListener('transitionend', () => {
      preloader.remove();
    }, { once: true });
  }, T_EXIT);
}
