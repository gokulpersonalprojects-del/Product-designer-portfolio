/**
 * views.js
 * Contains HTML templates for all portfolio routes and handles dynamic sandbox interaction states.
 */
import { initLazyVideos } from './animation.js';

// ==========================================================================
// HOME VIEW
// ==========================================================================
export function renderHome() {
  return `
    <div class="right-pane-header stagger-el stagger-delay-1" style="margin-bottom: 2.25rem;">
      <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-brand); letter-spacing: 0.12em;">SELECTED WORK</span>
      <h2 class="font-serif" style="font-size: 2.5rem; margin-top: 0.25rem; font-weight: 400; line-height: 1.1; color: var(--text-primary);">Featured Case Studies</h2>
    </div>
    
    <div class="case-studies-grid">
      
      <!-- Card 1: Yooki Case Study (spans 2 col) -->
      <article class="work-card col-span-2 stagger-el stagger-delay-2" data-project="yooki" onclick="window.location.hash='#/project-1'" role="link" tabindex="0" aria-label="View UPSC AI case study">
        <div class="work-card-media yooki" style="height: 270px; border-bottom: 1px solid var(--border-color); border-radius: 0; overflow: hidden;">
          <div class="card-img-placeholder" style="background: none;">
            <video data-lazy-video autoplay loop muted playsinline preload="none" style="width: 100%; height: 100%; object-fit: cover;">
              <source data-src="./upsc_thumbnail.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="work-card-info" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 0.55rem;">
          <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-accent);">AI INTERACTION DESIGN / CASE STUDY</span>
          <h3 class="card-title font-serif" style="font-size: 1.35rem; margin-top: 0.15rem; font-weight: 500;">Turning Yooki from a Backup Tool into a Daily Learning Companion</h3>
          <p class="font-sans" style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.45;">Redesigning a doubt-solving chatbot into an associative learning ecosystem that connects answers to syllabus, drives feature discovery, and builds daily study habits.</p>
          
          <div class="card-metrics-row" style="margin-top: 0.25rem;">
            <div class="card-metric-item">
              <span class="metric-num">40%</span>
              <span class="metric-label">Subscription Conversion</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">50%+</span>
              <span class="metric-label">Flow Adoption</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">Higher</span>
              <span class="metric-label">User Engagement</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Card 2: Bank of Palestine Case Study (spans 1 col) -->
      <article class="work-card col-span-1 stagger-el stagger-delay-3" data-project="bop" onclick="window.location.hash='#/project-3'" role="link" tabindex="0" aria-label="View Bank of Palestine case study">
        <div class="work-card-media bop" style="height: 270px; border-bottom: 1px solid var(--border-color); border-radius: 0; overflow: hidden;">
          <div class="card-img-placeholder" style="background: none;">
            <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;">
              <source src="./bop_thumbnail.mp4?v=2" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="work-card-info" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 0.55rem;">
          <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-accent);">MOBILE FINTECH / KYC REDESIGN</span>
          <h3 class="card-title font-serif" style="font-size: 1.35rem; margin-top: 0.15rem; font-weight: 500;">Simplifying the Complex KYC Process for Bank of Palestine</h3>
          <p class="font-sans" style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.45;">Redesigning mobile identity verification (KYC) onboarding to eliminate forms friction, reduce drop-off, and build trust.</p>
          
          <div class="card-metrics-row" style="margin-top: 0.25rem;">
            <div class="card-metric-item">
              <span class="metric-num">+85%</span>
              <span class="metric-label">Completion Rate</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">&lt; 2m</span>
              <span class="metric-label">Onboarding Time</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">94%</span>
              <span class="metric-label">CSAT Score</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Card 3: Cendrol Ops Case Study (spans 2 col) -->
      <article class="work-card col-span-2 stagger-el stagger-delay-4" data-project="cendrol" onclick="window.location.hash='#/project-2'" role="link" tabindex="0" aria-label="View Cendrol case study">
        <div class="work-card-media cendrol" style="height: 270px; border-bottom: 1px solid var(--border-color); border-radius: 0; overflow: hidden;">
          <div class="card-img-placeholder" style="background: none;">
            <video data-lazy-video autoplay loop muted playsinline preload="none" style="width: 100%; height: 100%; object-fit: cover;">
              <source data-src="./cendrol_thumbnail.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="work-card-info" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 0.55rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-brand); margin: 0;">FIELD OPERATIONS / WORKFLOW DESIGN</span>
            <span class="nda-badge font-mono" style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.6rem; font-weight: 700; color: var(--text-muted); border: 1px solid var(--border-color); padding: 0.15rem 0.4rem; border-radius: 100px; text-transform: uppercase; background: var(--bg-secondary);">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-brand);"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> UNDER NDA
            </span>
          </div>
          <h3 class="card-title font-serif" style="font-size: 1.35rem; margin-top: 0.15rem; font-weight: 500;">Cendrol: Automating Expense Claims for Field Engineers</h3>
          <p class="font-sans" style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.45;">Reimagining how on-site engineers track, submit, and manage expense claims to eliminate invoice validation lag and site inventory delays.</p>
          
          <div class="card-metrics-row" style="margin-top: 0.25rem;">
            <div class="card-metric-item">
              <span class="metric-num">3 Days</span>
              <span class="metric-label">Reimbursement Cycle</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">-60%</span>
              <span class="metric-label">Inventory Delays</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">-50%</span>
              <span class="metric-label">Audit Time</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Card 4: Aura AI Case Study (spans 1 col) -->
      <article class="work-card col-span-1 stagger-el stagger-delay-5 inactive" data-project="aura">
        <div class="work-card-media aura" style="height: 270px; border-bottom: 1px solid var(--border-color); border-radius: 0; overflow: hidden; position: relative;">
          <div class="coming-soon-badge font-mono">Coming Soon</div>
          <div class="card-img-placeholder" style="background: none;">
            <img src="./aura_thumbnail.png" alt="Aura AI Prompt-to-Interface Editor Showcase" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        </div>
        <div class="work-card-info" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 0.55rem;">
          <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-brand);">AI SYSTEMS / DESIGN TOOL</span>
          <h3 class="card-title font-serif" style="font-size: 1.35rem; margin-top: 0.15rem; font-weight: 500;">Aura AI: Grounding Generative UI in Design Tokens</h3>
          <p class="font-sans" style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.45;">Maintaining layout context and user trust during generative UI loops by mapping LLM outputs directly to structured design tokens.</p>
          
          <div class="card-metrics-row" style="margin-top: 0.25rem;">
            <div class="card-metric-item">
              <span class="metric-num">210ms</span>
              <span class="metric-label">Generation Latency</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">Pass (AA)</span>
              <span class="metric-label">WCAG Accessibility</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">95%</span>
              <span class="metric-label">User Retention</span>
            </div>
          </div>
        </div>
      </article>

    </div>
  `;
}

// ==========================================================================
// WORK COLLECTION VIEW
// ==========================================================================
export function renderWork() {
  return `
    <div class="collection-header stagger-el stagger-delay-1">
      <h1 class="collection-title font-serif">Case Studies</h1>
      <p class="hero-bio">A comprehensive index of product designs, interactive workflow research, and operational tools.</p>
    </div>

    <!-- Accessibility compliant filter bar -->
    <div class="filter-bar stagger-el stagger-delay-2" role="tablist" aria-label="Filter case studies">
      <button class="filter-btn active" role="tab" aria-selected="true" data-filter="all">All Projects</button>
      <button class="filter-btn" role="tab" aria-selected="false" data-filter="ai">AI Systems</button>
      <button class="filter-btn" role="tab" aria-selected="false" data-filter="ops">Operations</button>
      <button class="filter-btn" role="tab" aria-selected="false" data-filter="product">Product Design</button>
    </div>

    <div class="project-list-wrapper">
      
      <!-- Project 1 Row -->
      <a href="#/project-1" class="project-row stagger-el stagger-delay-3" data-category="ai" aria-label="UPSC AI Case Study">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">AI Systems</span>
          <h3 class="project-row-title font-serif">Turning Yooki from a Backup Tool into a Daily Learning Companion</h3>
        </div>
        <div class="project-meta-right">
          <span>Interaction Design</span>
          <span>2024</span>
        </div>
      </a>

      <!-- Project 3 Row -->
      <a href="#/project-3" class="project-row stagger-el stagger-delay-4" data-category="ops" aria-label="Bank of Palestine Case Study">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">Operations</span>
          <h3 class="project-row-title font-serif">Bank of Palestine: Simplifying Complex KYC Process</h3>
        </div>
        <div class="project-meta-right">
          <span>Product Design</span>
          <span>2024</span>
        </div>
      </a>

      <!-- Project 2 Row -->
      <a href="#/project-2" class="project-row stagger-el stagger-delay-5" data-category="ops" aria-label="Cendrol Case Study">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">Operations</span>
          <h3 class="project-row-title font-serif">Cendrol: Streamlining Expense Workflows for On-Site Engineers <span class="coming-soon-tag font-mono" style="font-size: 0.6rem; padding: 0.15rem 0.4rem; border: 1px solid var(--border-color); border-radius: 4px; margin-left: 0.75rem; color: var(--text-muted); font-weight: normal; vertical-align: middle; text-transform: uppercase;">Under NDA</span></h3>
        </div>
        <div class="project-meta-right">
          <span>Product Design</span>
          <span>2023</span>
        </div>
      </a>

      <!-- Project 4 Row -->
      <div class="project-row inactive stagger-el stagger-delay-6" data-category="ai" aria-label="Aura AI Case Study (Coming Soon)">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">AI Systems</span>
          <h3 class="project-row-title font-serif">Aura AI: Prompt-to-Interface Editor <span class="coming-soon-tag font-mono" style="font-size: 0.65rem; padding: 0.15rem 0.4rem; border: 1px solid var(--border-color); border-radius: 4px; margin-left: 0.75rem; color: var(--text-muted); font-weight: normal; vertical-align: middle;">Coming Soon</span></h3>
        </div>
        <div class="project-meta-right">
          <span>Interaction Design</span>
          <span>2024</span>
        </div>
      </div>

      <!-- Project 5 Row -->
      <a href="#/project-5" class="project-row stagger-el stagger-delay-7" data-category="product" aria-label="Attendance Management Case Study">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">Product Design</span>
          <h3 class="project-row-title font-serif">Attendance Management App: iOS App UX Case Study</h3>
        </div>
        <div class="project-meta-right">
          <span>Product Design</span>
          <span>2024</span>
        </div>
      </a>

      <!-- Project 6 Row -->
      <a href="#/project-6" class="project-row stagger-el stagger-delay-8" data-category="product" aria-label="Netflix E-Shopping Case Study">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">Product Design</span>
          <h3 class="project-row-title font-serif">Netflix E-Shopping: iOS UX Design Showcase</h3>
        </div>
        <div class="project-meta-right">
          <span>Product Design</span>
          <span>2024</span>
        </div>
      </a>

      <!-- Project 7 Row -->
      <a href="#/project-7" class="project-row stagger-el stagger-delay-8" data-category="product" aria-label="TimeSync Case Study">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">Product Design</span>
          <h3 class="project-row-title font-serif">TimeSync: Appointment Scheduling App UX Case Study</h3>
        </div>
        <div class="project-meta-right">
          <span>Product Design</span>
          <span>2024</span>
        </div>
      </a>

      <!-- Project 8 Row -->
      <a href="#/project-8" class="project-row stagger-el stagger-delay-8" data-category="product" aria-label="Fashion Factory Showcase">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">Product Design</span>
          <h3 class="project-row-title font-serif">Fashion Factory: E-Commerce iOS UI Design Showcase</h3>
        </div>
        <div class="project-meta-right">
          <span>Product Design</span>
          <span>2024</span>
        </div>
      </a>

      <!-- Project 9 Row -->
      <a href="#/project-9" class="project-row stagger-el stagger-delay-8" data-category="product" aria-label="Designergram Unified Case Study">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">Product Design</span>
          <h3 class="project-row-title font-serif">Designergram | Design Connect: Unified Case Study</h3>
        </div>
        <div class="project-meta-right">
          <span>Product Design</span>
          <span>2023</span>
        </div>
      </a>

    </div>
  `;
}

// ==========================================================================
// ABOUT VIEW
// ==========================================================================
export function renderAbout() {
  return `
    <h1 class="about-title font-serif stagger-el stagger-delay-1">Hi, I’m Gokul, building in complex things.</h1>
    
    <!-- Hero Workspace Image -->
    <div class="about-hero-image stagger-el stagger-delay-2">
      <img src="./gokul_laptop.jpg" alt="Gokul S Kaimal at work">
    </div>

    <div class="about-grid">
      
      <div class="about-bio-detail stagger-el stagger-delay-3">
        <p>I’m a designer based in Kerala, India. I’m deeply curious about how people navigate products, especially systems that involve complexity, multi-step workflows, and data structures that evolve over time.</p>
        <p>Most of my design work explores making things feel easier to understand, track, and move through. I believe good UX is not about removing complexity from the system, but about making the complexity legible and navigable to the user.</p>
        <p>Lately, I’ve been exploring AI-assisted products, generative UI canvas layouts, and small experiments guided mostly by curiosity and a desire to bridge the gap between human intent and machine outputs.</p>
      </div>

      <aside class="about-sidebar stagger-el stagger-delay-4">
        <div>
          <span class="font-mono label">AREAS OF FOCUS</span>
          <ul class="about-list" style="margin-top: 0.5rem;">
            <li class="about-list-item">
              <h4>Digital Product Design</h4>
              <p>Structuring user experiences from discovery to deployment.</p>
            </li>
            <li class="about-list-item">
              <h4>Interaction Design</h4>
              <p>Designing dynamic canvas controls and state-aware components.</p>
            </li>
            <li class="about-list-item">
              <h4>Motion Graphics</h4>
              <p>Creating micro-animations that reflect functional transitions.</p>
            </li>
          </ul>
        </div>
        
        <div>
          <span class="font-mono label">PHILOSOPHY</span>
          <p class="user-quote-callout" style="font-size: 1.25rem; border-color: var(--color-accent); margin: 0.5rem 0 0;">
            "Jugaad" — Finding elegant, creative solutions inside complex engineering constraints.
          </p>
        </div>
      </aside>

    </div>
  `;
}

// ==========================================================================
// PROJECT 1 (YOOKI)
// ==========================================================================
export function renderProject1() {
  return `
    <article class="project-detail" style="max-width: 960px; margin: 0 auto; padding: 2rem 1rem;">
      <!-- Premium Editorial Header -->
      <header class="project-header stagger-el stagger-delay-1" style="border-bottom: 1px solid var(--border-color); padding-bottom: 2.5rem; margin-bottom: 3.5rem; text-align: left;">
        <span class="label font-mono project-tag" style="color: var(--color-brand); font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; font-size: 0.75rem;">AI INTERACTION DESIGN / CASE STUDY</span>
        <h1 class="project-headline font-serif" style="font-size: clamp(2.3rem, 5.5vw, 3.8rem); line-height: 1.08; font-weight: 400; margin-top: 0.75rem; letter-spacing: -0.02em; color: var(--text-primary); margin-bottom: 2rem;">
          From Query to Curriculum: Redesigning Yooki's Conversational AI from a Doubt-Solver to a Daily Study Habit
        </h1>

        <!-- Metadata Strip -->
        <div class="project-metadata-strip" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 2rem;">
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Role</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">Lead UX Designer & AI Researcher</span>
          </div>
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Timeline</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">4 Months (2024–25)</span>
          </div>
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Deliverables</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">AI Flows, IA, Prototypes, Pilots</span>
          </div>
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Platform</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--color-brand); font-weight: 600;">Mobile App (iOS & Android)</span>
          </div>
        </div>
      </header>

      <div class="project-intro-grid stagger-el stagger-delay-2" style="grid-template-columns: 1fr; margin-bottom: 5rem; border-bottom: none; padding-bottom: 0;">
        <p class="project-intro-text font-serif" style="max-width: 780px; font-size: clamp(1.25rem, 2.5vw, 1.55rem); line-height: 1.45; color: var(--text-primary); margin: 0; font-weight: 300;">
          Most UPSC aspirants weren't struggling to find facts. They were struggling to navigate the cognitive overwhelm of a 3-year preparation syllabus. This is the story of how we uncovered the transactional trap of conversational interfaces and restructured Yooki to guide aspirants through their learning journey.
        </p>
      </div>

      <!-- Metrics Section with Premium Card Styling -->
      <div class="yooki-header-metrics stagger-el stagger-delay-2" style="margin-bottom: 6rem; gap: 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
        <div class="metric-card" style="padding: 2.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: left; display: flex; flex-direction: column; justify-content: space-between; min-height: 150px; box-shadow: var(--shadow-sm);">
          <div class="metric-value font-mono" style="font-size: 3rem; font-weight: 700; color: var(--color-brand); line-height: 1;">40%</div>
          <div class="metric-label font-sans" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4; font-weight: 500; margin-top: 1rem;">Increase in subscription conversion rate</div>
        </div>
        <div class="metric-card" style="padding: 2.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: left; display: flex; flex-direction: column; justify-content: space-between; min-height: 150px; box-shadow: var(--shadow-sm);">
          <div class="metric-value font-mono" style="font-size: 3rem; font-weight: 700; color: var(--color-brand); line-height: 1;">50%+</div>
          <div class="metric-label font-sans" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4; font-weight: 500; margin-top: 1rem;">Daily adoption rate of syllabus tracking flows</div>
        </div>
        <div class="metric-card" style="padding: 2.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: left; display: flex; flex-direction: column; justify-content: space-between; min-height: 150px; box-shadow: var(--shadow-sm);">
          <div class="metric-value font-mono" style="font-size: 1.4rem; font-weight: 700; color: var(--color-brand); line-height: 1.2; text-transform: uppercase;">Habit Shift</div>
          <div class="metric-label font-sans" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4; font-weight: 500; margin-top: 1rem;">Users transitioned from single query search to syllabus progress mapping</div>
        </div>
      </div>

      <!-- Hero Mockup Video -->
      <div class="hero-image-wrapper stagger-el stagger-delay-2" style="margin-bottom: 7rem; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-lg); background: var(--bg-card);">
        <video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; object-fit: cover;">
          <source src="./upsc_thumbnail.mp4" type="video/mp4">
        </video>
      </div>

      <!-- Core Statement Nudge -->
      <div class="text-nudge font-serif stagger-el" style="text-align: center; margin: 7rem auto; max-width: 760px; font-size: 2.2rem; line-height: 1.35; color: var(--text-primary); padding: 0 1.5rem;">
        Answering queries is a technical triumph.<br><span style="color: var(--color-accent); font-weight: 400; font-style: italic;">But supporting learning is a human, behavioral challenge.</span>
      </div>

      <div class="project-body stagger-el stagger-delay-3">
        <!-- 1. The Chatbot Paradox -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 5.5rem; margin-bottom: 5.5rem;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ THE TENSION</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">The Chatbot Paradox: When a 90% Success Rate Hides a Retention Crisis</h2>
          
          <div class="responsive-grid-2" style="margin-bottom: 3.5rem; gap: 2rem; max-width: 100%; margin-left: auto; margin-right: auto;">
            <p class="chapter-desc" style="margin: 0; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
              Yooki was an engineering marvel. It answered complex polity and history questions with high accuracy. The CSAT score was high; yet, our engagement dashboard was alarming. Users arrived with a burning question, received a clear answer, and disappeared immediately. 
            </p>
            <p class="chapter-desc" style="margin: 0; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
              The chatbot was acting as a transactional lookup widget—a backup generator when study notes failed. It wasn't serving as a learning companion. By solving doubts instantaneously, Yooki was making it too easy for users to leave.
            </p>
          </div>

          <!-- Problem Image with spacing -->
          <div class="problem-image-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); margin-bottom: 3rem;">
            <img src="./yooki_problem.webp" alt="Disconnect between goals and usage diagram" style="width: 100%; height: auto; display: block;" loading="lazy">
          </div>

          <!-- Narrative Insight Card -->
          <div style="padding: 2.25rem; background: var(--bg-secondary); border-left: 4px solid var(--color-brand); border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0; margin-top: 2rem;">
            <span class="font-mono" style="font-size: 0.7rem; color: var(--color-brand); font-weight: 700; letter-spacing: 0.08em; display: block; text-transform: uppercase;">THE PARADOX</span>
            <p style="font-family: var(--font-serif); font-size: 1.35rem; font-weight: 400; color: var(--text-primary); line-height: 1.5; margin: 0.5rem 0 0; font-style: italic;">
              "Traditional UX teaches us to reduce friction and get users to their goal as fast as possible. But in Yooki, getting the user to the answer too quickly ended the interaction, destroying any opportunity to build a daily study routine."
            </p>
          </div>
        </section>

        <!-- 2. Research / Challenging the Better Chatbot Assumption -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 5.5rem; margin-bottom: 5.5rem;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ RESEARCH &amp; REVELATIONS</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">Challenging the "Better Chatbot" Assumption</h2>
          
          <div style="max-width: 780px; margin-bottom: 3.5rem;">
            <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 1.5rem;">
              Initially, the product direction leaned toward optimizing the chatbot: training better models, introducing suggestion chips, or making chat history easier to search. 
            </p>
            <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 1.5rem;">
              To test this, we conducted moderated Maze usability testing with 8 active UPSC aspirants. The sessions revealed a deeper friction: **the interface wasn't the obstacle; the cognitive load of the exam was.** Aspirants had mind maps on their walls, stacks of books on their tables, and spreadsheets tracking syllabus percentages. They didn't need another chat dialogue box—they needed a system that mapped Yooki to their real study room layout.
            </p>
          </div>

          <!-- Research Approach Tags Grid -->
          <div class="methodology-tags methodology-tags-grid" style="margin-bottom: 3.5rem;">
            <div class="methodology-tag-card" style="padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 600; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">Usability Testing</span>
              <div class="font-serif" style="font-size: 1.1rem; font-weight: 500; color: var(--text-primary);">Maze Moderated Studies</div>
            </div>
            <div class="methodology-tag-card" style="padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 600; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">Cognitive Mapping</span>
              <div class="font-serif" style="font-size: 1.1rem; font-weight: 500; color: var(--text-primary);">Aspirant Habits Audit</div>
            </div>
            <div class="methodology-tag-card" style="padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 600; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">Domain Research</span>
              <div class="font-serif" style="font-size: 1.1rem; font-weight: 500; color: var(--text-primary);">Exam Syllabus Complexity</div>
            </div>
            <div class="methodology-tag-card" style="padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 600; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">Data Diagnostics</span>
              <div class="font-serif" style="font-size: 1.1rem; font-weight: 500; color: var(--text-primary);">Behavioral Drop-offs</div>
            </div>
          </div>

          <!-- Study stats block -->
          <div class="responsive-grid-2" style="gap: 1.5rem; margin-bottom: 3rem;">
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 600; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">THE TARGET AUDIENCE</span>
              <div class="font-serif" style="font-size: 2.2rem; font-weight: 500; color: var(--text-primary); line-height: 1;">8 UPSC Aspirants</div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.45;">Deep-dive moderated sessions mapping daily anxiety &amp; preparation behaviors.</div>
            </div>
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 600; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">RESEARCH FOCUS</span>
              <div class="font-serif" style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); line-height: 1.3;">Context Integration</div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.45;">Testing how questions arise during active syllabus mapping rather than isolated search actions.</div>
            </div>
          </div>

          <!-- Tasks Given -->
          <div style="margin-bottom: 3.5rem;">
            <span class="font-mono" style="font-size: 0.7rem; color: var(--color-brand); font-weight: 700; letter-spacing: 0.05em; display: block; margin-bottom: 1rem; text-transform: uppercase;">Tasks Given in Maze Testing</span>
            <div class="responsive-grid-2" style="gap: 1rem;">
              <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                <span class="font-mono" style="font-size: 0.8rem; color: var(--color-brand); font-weight: 700; min-width: 1.5rem; padding-top: 0.1rem;">01</span>
                <span style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">Resolve a complex history doubt using the AI assistant</span>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                <span class="font-mono" style="font-size: 0.8rem; color: var(--color-brand); font-weight: 700; min-width: 1.5rem; padding-top: 0.1rem;">02</span>
                <span style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">Relate the resolved doubt back to the main General Studies syllabus</span>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                <span class="font-mono" style="font-size: 0.8rem; color: var(--color-brand); font-weight: 700; min-width: 1.5rem; padding-top: 0.1rem;">03</span>
                <span style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">Determine the next logical topic to study based on progress</span>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                <span class="font-mono" style="font-size: 0.8rem; color: var(--color-brand); font-weight: 700; min-width: 1.5rem; padding-top: 0.1rem;">04</span>
                <span style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">Update prep status and log review metrics for that topic</span>
              </div>
            </div>
          </div>

          <!-- Research metrics & diagram -->
          <div class="yooki-research-grid" style="margin-bottom: 3.5rem; gap: 1.5rem;">
            <div style="padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 2.8rem; font-weight: 700; color: var(--color-brand); line-height: 1;">87%</div>
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem; letter-spacing: 0.05em; text-transform: uppercase;">Task Success Rate (Chat)</div>
            </div>
            <div style="padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 2.8rem; font-weight: 700; color: var(--color-brand); line-height: 1;">4.2<span style="font-size: 1.2rem; font-weight: 500;">m</span></div>
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem; letter-spacing: 0.05em; text-transform: uppercase;">Avg. Session Duration</div>
            </div>
            <div style="padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 2.8rem; font-weight: 700; color: var(--color-brand); line-height: 1;">12%</div>
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem; letter-spacing: 0.05em; text-transform: uppercase;">Syllabus Feature Discovery</div>
            </div>
          </div>

          <div class="research-findings-image-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); margin-bottom: 3rem;">
            <img src="./yooki_research.webp" alt="Research findings: Limitations of pure chatbot interface diagram" style="width: 100%; height: auto; display: block;" loading="lazy">
          </div>

          <!-- Insight callout -->
          <div style="padding: 2.25rem; background: rgba(255,109,0,0.03); border-left: 4px solid var(--color-accent); border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0; margin-top: 2rem;">
            <span class="font-mono" style="font-size: 0.7rem; color: var(--color-accent); font-weight: 700; letter-spacing: 0.08em; display: block; text-transform: uppercase;">CRITICAL DISCOVERY</span>
            <p style="font-family: var(--font-serif); font-size: 1.35rem; font-weight: 400; color: var(--text-primary); line-height: 1.5; margin: 0.5rem 0 0; font-style: italic;">
              "Aspirants were suffering from 'syllabus anxiety'. Finding a single answer relieved query pressure temporarily, but it didn't solve the underlying problem of structuring their next 30 days of study."
            </p>
          </div>
        </section>

        <!-- 3. User Journey & Opportunities -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 5.5rem; margin-bottom: 5.5rem;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ THE TURNING POINT</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">The Turning Point: Shifting from Answers to Alignment</h2>
          
          <div style="max-width: 780px; margin-bottom: 3.5rem;">
            <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 1.5rem;">
              Mapping out the general user journey revealed the breakdown. Users visited Yooki during moments of friction—while reading a book or revising. Once Yooki answered the doubt, the user returned to their study room ecosystem. There was no bridge keeping them on the platform.
            </p>
            <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 1.5rem;">
              This insight shifted our priorities. We stopped focusing on improving chatbot responses. Instead, **we focused on building the bridge: connecting the transactional chat interaction directly to their visual progress tracker.**
            </p>
          </div>

          <div class="user-journey-image-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); margin-bottom: 4rem;">
            <img src="./yooki_journey.webp" alt="UPSC Aspirant User Journey Map" style="width: 100%; height: auto; display: block;" loading="lazy">
          </div>

          <!-- Opportunity Grid -->
          <div class="opportunity-grid opportunity-grid-layout" style="gap: 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.5rem; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: bold; letter-spacing: 0.05em;">1.0 OPPORTUNITY</div>
              <h4 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0; color: var(--text-primary);">Syllabus Contextualization</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Embed every chat answer within the visual syllabus hierarchy, instantly showing the user its significance.</p>
            </div>
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.5rem; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: bold; letter-spacing: 0.05em;">2.0 OPPORTUNITY</div>
              <h4 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0; color: var(--text-primary);">Habit-Driving Nudges</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Transition users from a simple "resolved" status to recommended next actions based on their current progress.</p>
            </div>
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.5rem; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: bold; letter-spacing: 0.05em;">3.0 OPPORTUNITY</div>
              <h4 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0; color: var(--text-primary);">Progress Dashboard</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Reposition the chatbot as one feature inside a broader preparation cockpit that visualizes study coverage.</p>
            </div>
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.5rem; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: bold; letter-spacing: 0.05em;">4.0 OPPORTUNITY</div>
              <h4 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0; color: var(--text-primary);">Associative Exploration</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Expose cross-subject concept links (e.g., how History links to Economics) to encourage broader learning paths.</p>
            </div>
          </div>
        </section>

        <!-- 4. Information Architecture / Structuring for Calm -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 5.5rem; margin-bottom: 5.5rem;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ SYSTEM ARCHITECTURE</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">Designing for Cognitive Calm</h2>
          
          <div style="max-width: 780px; margin-bottom: 3.5rem;">
            <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 1.5rem;">
              With hundreds of syllabus topics, simply listing them would overwhelm aspirants. We structured the IA to group content under high-level subjects (Polity, History, Economics, Environment) and mapped the AI dialogue box as an associative overlay rather than a standalone container.
            </p>
          </div>

          <div class="ia-flow-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); background: var(--bg-card);">
            <img src="./yooki_ia.webp" alt="New Information Architecture Flowchart" style="width: 100%; height: auto; display: block;" loading="lazy">
          </div>
        </section>

        <!-- 5. Root Cause -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 5.5rem; margin-bottom: 5.5rem;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ DIAGNOSTICS</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">The Root Cause: Answering Questions is Not the Same as Guiding Learners</h2>
          
          <div style="max-width: 780px; margin-bottom: 3.5rem;">
            <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary);">
              Why were users leaving despite receiving great answers? Deep analysis of drop-off points and interview transcripts exposed three critical structural issues:
            </p>
          </div>

          <!-- Stylized Cards for Root Causes -->
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: flex; gap: 1.5rem; padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); align-items: flex-start; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 1.8rem; font-weight: 700; color: var(--color-brand); line-height: 1; min-width: 2.5rem; padding-top: 0.1rem;">01</div>
              <div>
                <h4 class="font-serif" style="font-size: 1.3rem; font-weight: 500; margin: 0 0 0.5rem; color: var(--text-primary); letter-spacing: -0.01em;">The Rigid Track Bias</h4>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">Traditional learning apps force a linear subject order. However, UPSC aspirants study dynamically—jumping between news stories, current events, and theory. The app structure resisted this natural movement.</p>
              </div>
            </div>

            <div style="display: flex; gap: 1.5rem; padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); align-items: flex-start; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 1.8rem; font-weight: 700; color: var(--color-brand); line-height: 1; min-width: 2.5rem; padding-top: 0.1rem;">02</div>
              <div>
                <h4 class="font-serif" style="font-size: 1.3rem; font-weight: 500; margin: 0 0 0.5rem; color: var(--text-primary); letter-spacing: -0.01em;">Information Without Position</h4>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">Every AI response solved a doubt but remained isolated. Users couldn't see the context—which General Studies paper it belonged to, or how it impacted their syllabus completion targets.</p>
              </div>
            </div>

            <div style="display: flex; gap: 1.5rem; padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); align-items: flex-start; box-shadow: var(--shadow-sm);">
              <div class="font-mono" style="font-size: 1.8rem; font-weight: 700; color: var(--color-brand); line-height: 1; min-width: 2.5rem; padding-top: 0.1rem;">03</div>
              <div>
                <h4 class="font-serif" style="font-size: 1.3rem; font-weight: 500; margin: 0 0 0.5rem; color: var(--text-primary); letter-spacing: -0.01em;">The Conversation-First Interface Illusion</h4>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">By presenting a clean ChatGPT-style interface on launch, Yooki gave the impression that it was just a doubt box. Users never discovered that they could track, plan, or map progress inside the app.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 6. Paradigm Shift -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 5.5rem; margin-bottom: 5.5rem;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ THE STRATEGY</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">The Strategy: Transforming Chat from a Destination into a Gateway</h2>
          
          <div class="responsive-grid-2" style="margin-bottom: 3.5rem; gap: 2rem;">
            <p class="chapter-desc" style="margin: 0; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
              We shifted Yooki's paradigm: instead of treating chat as the primary screen, **we built a preparation ecosystem where conversational inputs serve as entry points to structured learning.**
            </p>
            <p class="chapter-desc" style="margin: 0; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
              Every time an aspirant asks a question, Yooki answers the query, highlights its position within the syllabus tree, and prompts them with custom next actions. This turns conversational queries into structured study habits.
            </p>
          </div>

          <div class="redesign-strategy-image-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card);">
            <img src="./yooki_flowchart_visible.webp" alt="Redesign strategy flowchart" style="width: 100%; height: auto; display: block;" loading="lazy">
          </div>
        </section>

        <!-- 7. Exploring Directions -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 5.5rem; margin-bottom: 5.5rem;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ HARD CHOICES</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">The Hard Choices: Rigid Curriculums vs. Sandbox Exploration</h2>
          
          <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 3.5rem; max-width: 780px;">
            We evaluated three primary system designs. Balancing business goals, engineering constraints, and study habits required making compromises:
          </p>
          
          <div class="directions-grid" style="gap: 2rem;">
            <!-- Direction 1 -->
            <div style="padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 1.5rem; box-shadow: var(--shadow-sm);">
              <div>
                <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); letter-spacing: 0.05em; text-transform: uppercase;">APPROACH 1</span>
                <h4 class="font-serif" style="font-size: 1.3rem; font-weight: 500; margin: 0.4rem 0 0; color: var(--text-primary); line-height: 1.2;">Linear Study Track</h4>
                <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.75rem; margin-bottom: 0;">
                  Lock users into a step-by-step curriculum path to ensure syllabus coverage.
                </p>
              </div>
              <div style="padding: 1.25rem; background: rgba(255,59,48,0.03); border: 1px solid rgba(255,59,48,0.1); border-radius: var(--border-radius-md);">
                <span class="font-mono" style="font-size: 0.65rem; color: #ff3b30; font-weight: 700; letter-spacing: 0.05em; display: block; margin-bottom: 0.4rem; text-transform: uppercase;">Why we rejected it</span>
                <p style="font-size: 0.85rem; line-height: 1.55; color: var(--text-secondary); margin: 0;">Aspirants rejected the rigid schedule during testing. UPSC preparation is highly personal; forcing users down a strict path created immediate friction and drop-offs.</p>
              </div>
            </div>
            
            <!-- Direction 2 -->
            <div style="padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 1.5rem; box-shadow: var(--shadow-sm);">
              <div>
                <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); letter-spacing: 0.05em; text-transform: uppercase;">APPROACH 2</span>
                <h4 class="font-serif" style="font-size: 1.3rem; font-weight: 500; margin: 0.4rem 0 0; color: var(--text-primary); line-height: 1.2;">Recommendation Overlay</h4>
                <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.75rem; margin-bottom: 0;">
                  Add dynamic recommendation cards on top of the existing chat interface.
                </p>
              </div>
              <div style="padding: 1.25rem; background: rgba(255,109,0,0.03); border: 1px solid rgba(255,109,0,0.1); border-radius: var(--border-radius-md);">
                <span class="font-mono" style="font-size: 0.65rem; color: var(--color-accent); font-weight: 700; letter-spacing: 0.05em; display: block; margin-bottom: 0.4rem; text-transform: uppercase;">Why we rejected it</span>
                <p style="font-size: 0.85rem; line-height: 1.55; color: var(--text-secondary); margin: 0;">It acted as a superficial band-aid. Users ignored the carousel recommendations because they lacked a visual connection to their overall preparation goals.</p>
              </div>
            </div>
            
            <!-- Direction 3 (Selected) -->
            <div style="padding: 2rem; background: rgba(138,43,226,0.02); border: 1px solid var(--color-brand); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 1.5rem; box-shadow: 0 10px 30px rgba(138,43,226,0.02);">
              <div>
                <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); letter-spacing: 0.05em; text-transform: uppercase; font-weight: bold;">APPROACH 3 · SELECTED</span>
                <h4 class="font-serif" style="font-size: 1.35rem; font-weight: 500; margin: 0.4rem 0 0; color: var(--text-primary); line-height: 1.2; letter-spacing: -0.01em;">The Chat-to-Syllabus Bridge</h4>
                <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.75rem; margin-bottom: 0;">
                  Use conversational queries as portals that display progress, contextual suggestions, and next actions.
                </p>
              </div>
            </div>
          </div>

          <!-- Stakeholder Compromises Block -->
          <div style="margin-top: 2rem; padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 1.5rem; box-shadow: var(--shadow-sm);">
            <div>
              <span class="font-mono" style="font-size: 0.7rem; color: #8e9ab0; letter-spacing: 0.08em; display: block; text-transform: uppercase; font-weight: 700; margin-bottom: 1.25rem;">Stakeholder Compromises</span>
              
              <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;">
                <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                  <h4 class="font-sans" style="font-size: 1.1rem; font-weight: 700; margin: 0; color: var(--text-primary); letter-spacing: -0.01em;">Disrupting the core hook</h4>
                  <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">The chatbot drove our initial adoption. We compromised by keeping the chat input bar prominent on launch, but transformed the response panels into interactive progress sheets.</p>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                  <h4 class="font-sans" style="font-size: 1.1rem; font-weight: 700; margin: 0; color: var(--text-primary); letter-spacing: -0.01em;">Engineering constraint</h4>
                  <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">Mapping raw text queries to structured syllabus nodes in real-time required strict classifier models. We designed soft-mapping UI states to handle edge-case queries elegantly.</p>
                </div>
              </div>
            </div>

            <div style="padding: 1.25rem; background: rgba(52,199,89,0.02); border: 1px solid rgba(52,199,89,0.15); border-radius: var(--border-radius-md);">
              <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">THE VERDICT</span>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">Balances immediate doubt-solving speed with structured long-term habits.</p>
            </div>
          </div>
        </section>

        <!-- 8. Solution Path (Vertical Scrolling Layout) -->
        <div class="solution-path-section" style="margin-top: 5.5rem; margin-bottom: 5.5rem;">
          <div class="solution-path-container" style="margin-bottom: 3.5rem;">
            <span class="chapter-num font-mono" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.08em; font-weight: bold; text-transform: uppercase;">/ THE SOLUTION IN ACTION</span>
          </div>

          <!-- Solution Chapters (Scrolling Flow) -->
          <div class="solution-chapters-container" style="display: flex; flex-direction: column; gap: 5.5rem;">
            <!-- Chapter 1 -->
            <div class="solution-chapter-content" style="display: block; opacity: 1; transform: translateY(0);">
              <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-brand)">CHAPTER 01</span>
                <h3 class="chapter-title font-serif" style="font-size: 1.8rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Contextual Syllabus Mapping</h3>
                
                <p class="chapter-desc" style="max-width: 680px; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 2rem;">
                  We transformed Yooki's conversational outputs into structured sheets. Every time an aspirant receives an answer, the AI displays a mini syllabus tree pointing to General Studies papers, showing what percentage of that subject they have completed, and highlighting their knowledge gaps.
                </p>
                
                <!-- Decision Grid Table -->
                <div class="decision-grid" style="margin-bottom: 2.5rem;">
                  <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: #ff3b30; font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">THE PROBLEM</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">Answering polity queries resolved immediate doubts but left users blind to where that topic sits in the broader syllabus.</p>
                  </div>
                  <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">THE DECISION</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">Inject a progress mini-map directly above chatbot responses, highlighting coverage status (e.g., 61% completed).</p>
                  </div>
                  <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">WHY WE CHOSE IT</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">Provides immediate visual feedback that connects their chat habits directly to syllabus progress.</p>
                  </div>
                </div>

                <div class="user-quote-callout" style="margin-top: 1.5rem; font-size: 1.25rem; line-height: 1.45; margin-bottom: 2rem;">
                  "We hypothesized that users left because answers existed in isolation. By connecting answers to syllabus progress, we aimed to increase feature discovery and encourage deeper engagement."
                </div>

                <!-- Video 1 -->
                <div class="chapter1-solution-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); background: var(--bg-card);">
                  <video data-lazy-video autoplay loop muted playsinline preload="none" style="width: 100%; height: auto; display: block; object-fit: cover;">
                    <source data-src="./yooki_chapter1.mp4" type="video/mp4">
                  </video>
                </div>
              </section>
            </div>

            <!-- Chapter 2 -->
            <div class="solution-chapter-content" style="display: block; opacity: 1; transform: translateY(0);">
              <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0; border-top: 1px solid var(--border-color); padding-top: 4rem;">
                <span class="chapter-num font-mono" style="color: var(--color-brand)">CHAPTER 02</span>
                <h3 class="chapter-title font-serif" style="font-size: 1.8rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Intent-Driven Discovery &amp; Nudges</h3>
                
                <p class="chapter-desc" style="max-width: 680px; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 2rem;">
                  Instead of displaying static recommendation carousels, we designed contextual prompts that appear when an answer is resolved. Yooki cross-references their study history to suggest high-value concepts that link subjects logically (e.g. how a पॉलिटी concept links to an इकोनॉमी issue).
                </p>
                
                <!-- Decision Grid Table -->
                <div class="decision-grid" style="margin-bottom: 2.5rem;">
                  <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: #ff3b30; font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">THE PROBLEM</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">Users didn't know what related sub-topics were relevant to their doubt, resulting in immediate session exits.</p>
                  </div>
                  <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">THE DECISION</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">Analyze their GS papers coverage gap in real-time, displaying custom next-action links at the bottom of the chat response sheet.</p>
                  </div>
                  <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">WHY WE CHOSE IT</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">It leverages their immediate curiosity to redirect them back into structured study routines.</p>
                  </div>
                </div>

                <div class="user-quote-callout" style="margin-top: 1.5rem; font-size: 1.25rem; line-height: 1.45; margin-bottom: 2rem;">
                  "We hypothesized that users were not aware of some of the features that hid behind certain layers, so we tried to bring those features through nudges to the user's attention."
                </div>

                <!-- Interactive AI Sandbox -->
                <div class="interactive-flow-sandbox" style="margin-top: 1.5rem; margin-bottom: 2rem; padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color);">
                  <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); display: block; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em;">INTERACTIVE CONVERSATIONAL PROTO</span>
                  <div class="ai-dialogue-sandbox" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                    <div class="chat-bubble user" id="ai-user-bubble" style="background: rgba(138,43,226,0.06); border: 1px solid rgba(138,43,226,0.15); color: var(--text-primary); padding: 0.75rem 1rem; border-radius: 12px 12px 0 12px; align-self: flex-end; max-width: 85%; font-size: 0.88rem; line-height: 1.45;">
                      Select a question below to ask Yooki AI...
                    </div>
                    <div class="chat-bubble assistant" id="ai-response-bubble" style="background: var(--bg-card); border: 1px solid var(--border-color); color: var(--text-secondary); padding: 0.75rem 1rem; border-radius: 12px 12px 12px 0; align-self: flex-start; max-width: 85%; font-size: 0.88rem; line-height: 1.45; min-height: 80px;">
                      Hi, I'm your Yooki Assistant. Ask me a question based on your preparation history!
                    </div>
                    <div class="prompt-suggestions" style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
                      <button class="prompt-chip" data-prompt="polity" style="text-align: left; padding: 0.65rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; font-size: 0.82rem; color: var(--text-primary); cursor: pointer; transition: all 0.2s ease;">"I studied Panchayati Raj today. What should I review next?"</button>
                      <button class="prompt-chip" data-prompt="exam" style="text-align: left; padding: 0.65rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; font-size: 0.82rem; color: var(--text-primary); cursor: pointer; transition: all 0.2s ease;">"Which area should I revise before my mock exam next week?"</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <!-- Chapter 3 -->
            <div class="solution-chapter-content" style="display: block; opacity: 1; transform: translateY(0);">
              <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0; border-top: 1px solid var(--border-color); padding-top: 4rem;">
                <span class="chapter-num font-mono" style="color: var(--color-brand)">CHAPTER 03</span>
                <h3 class="chapter-title font-serif" style="font-size: 1.8rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Redesigning the Homepage Dashboard</h3>
                
                <p class="chapter-desc" style="max-width: 680px; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 2rem;">
                  We completely replaced the generic chat-only homepage with a personalized prep dashboard. Users immediately see their overall syllabus completion bars, upcoming revision cards, and subject-level trackers.
                </p>
                
                <!-- Decision Grid Table -->
                <div class="decision-grid" style="margin-bottom: 2.5rem;">
                  <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: #ff3b30; font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">THE PROBLEM</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">An open chat dialogue window implies a single task (question-answering), hiding other learning tools completely.</p>
                  </div>
                  <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">THE DECISION</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">Redesign the homepage into a preparation hub that visualizes progress and maps chat inputs directly within it.</p>
                  </div>
                  <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">WHY WE CHOSE IT</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">Provides a persistent sense of progress, transforming the product from a search box into a daily tracker.</p>
                  </div>
                </div>

                <div class="user-quote-callout" style="margin-top: 1.5rem; font-size: 1.25rem; line-height: 1.45; margin-bottom: 2rem;">
                  "We hypothesized that the initial another chatgpt style home page made the users think it was the only capability of the application."
                </div>

                <!-- Video 3 -->
                <div class="homepage-dashboard-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); background: var(--bg-card);">
                  <video data-lazy-video autoplay loop muted playsinline preload="none" style="width: 100%; height: auto; display: block; object-fit: cover;">
                    <source data-src="./yooki_chapter3.mp4" type="video/mp4">
                  </video>
                </div>
              </section>
            </div>
          </div>
        </div>

        <!-- 9. Success Metrics -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 5.5rem; margin-bottom: 5.5rem;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ GOAL SETTING</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">Defining Success Beyond Speed</h2>
          
          <div style="max-width: 780px; margin-bottom: 3.5rem;">
            <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary);">
              Our original chat metrics optimized for query response speed. For the redesign, we established a different group of indicators to measure actual study integration:
            </p>
          </div>

          <div class="success-metrics-grid" style="gap: 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.5rem; box-shadow: var(--shadow-sm);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 700; letter-spacing: 0.08em; display: block; text-transform: uppercase;">Habitual Retention</span>
              <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.35rem;">
                <li>Increase repeat daily study room logins</li>
                <li>Verify interaction with General Studies syllabus nodes</li>
              </ul>
            </div>
            
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.5rem; box-shadow: var(--shadow-sm);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 700; letter-spacing: 0.08em; display: block; text-transform: uppercase;">Learning Depth</span>
              <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.35rem;">
                <li>Track path progression across related topics</li>
                <li>Reduce quick doubt-and-exit session drops</li>
              </ul>
            </div>

            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.5rem; box-shadow: var(--shadow-sm);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-brand); font-weight: 700; letter-spacing: 0.08em; display: block; text-transform: uppercase;">Conversion Metrics</span>
              <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.35rem;">
                <li>Increase conversion to our premium study dashboard</li>
                <li>Validate adoption of progress-mapping features</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 10. Validating the Solution -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 5.5rem; margin-bottom: 5.5rem;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ THE OUTCOMES</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">Beyond Chat Satisfaction: Validating Daily Habits</h2>
          
          <div style="display: flex; flex-direction: column; gap: 2.5rem; margin-bottom: 3.5rem;">
            <p class="chapter-desc" style="margin: 0; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); max-width: 680px;">
              Following a pilot release to our beta testers, the behavioral shift was immediate. Users stopped treating Yooki as a simple search box. Instead of closing the tab after getting an answer, they actively used the syllabus context to plan their next review target.
            </p>
            
            <div class="validation-image-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card);">
              <img src="./yooki_pilot.webp" alt="Validation Pilot Release Metrics Charts" style="width: 100%; height: auto; display: block;" loading="lazy">
            </div>
          </div>
        </section>

        <!-- 11. Reflection & Learnings -->
        <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
          <span class="chapter-num font-mono" style="font-weight: 600; color: var(--color-brand); letter-spacing: 0.05em;">/ REFLECTION</span>
          <h2 class="chapter-title font-serif" style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-top: 0.5rem; line-height: 1.15; font-weight: 400; margin-bottom: 2rem;">Lessons from the AI Frontier: Chat is Just the CLI</h2>
          
          <div style="max-width: 780px; margin-bottom: 3.5rem;">
            <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 1.5rem;">
              This project started with a simple assumption: if users had access to AI-powered answers, they would naturally use Yooki as part of their preparation journey. However, the research revealed that solving doubts and supporting preparation are two very different problems.
            </p>
            <p class="chapter-desc" style="font-size: 1.1rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 1.5rem;">
              One of the biggest lessons from this project was that successful features do not always create successful products. The chatbot was performing well at answering questions, yet the product struggled with retention, engagement, and conversion. Looking beyond feature-level metrics helped uncover the larger behavioral problem that users were facing.
            </p>
          </div>
          
          <div class="user-quote-callout font-serif" style="font-size: clamp(1.35rem, 2.5vw, 1.8rem); line-height: 1.35; padding: 2.5rem; border-left-width: 4px; border-left-color: var(--color-brand); background: rgba(138,43,226,0.02); border-radius: 0 var(--border-radius-lg) var(--border-radius-lg) 0; margin-top: 2rem; font-style: normal; font-weight: 300;">
            "Designing better answers was never the solution.<br><span style="color: var(--color-brand); font-weight: 600;">Designing a clearer learning journey was.</span>"
          </div>
        </section>

      </div>
    </article>
  `;
}

export function renderProject2() {
  return `
    <article class="project-detail animate-fade-in">
      <header class="project-header stagger-el stagger-delay-1" style="border-bottom: 1px solid var(--border-color); padding-bottom: 2.5rem; margin-bottom: 3.5rem;">
        <span class="label font-mono project-tag" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.08em; font-weight: bold; text-transform: uppercase;">FIELD OPERATIONS / WORKFLOW AUTOMATION</span>
        <h1 class="project-headline font-serif" style="font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.1; font-weight: 400; letter-spacing: -0.02em; margin-top: 0.5rem; margin-bottom: 2rem;">Cendrol: Automating Expense Claims for Field Engineers</h1>
        
        <!-- Premium Horizontal Metadata strip -->
        <div class="project-metadata-strip" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 2rem;">
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Role</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">Lead UX Researcher & Designer</span>
          </div>
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Timeline</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">3 Months (2024)</span>
          </div>
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Deliverables</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">Workflow Maps, Offline UX, Wireframes</span>
          </div>
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Status</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--color-brand); font-weight: 600;">🔒 Protected under NDA</span>
          </div>
        </div>
      </header>

      <!-- NDA Glassmorphism Lock Card -->
      <div class="nda-lock-card stagger-el stagger-delay-2" style="padding: 3rem 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; backdrop-filter: blur(10px); box-shadow: var(--shadow-sm); margin-bottom: 3.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.5rem;">
        <div class="lock-icon-wrapper" style="width: 72px; height: 72px; border-radius: 50%; background: rgba(142, 90, 255, 0.08); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(142, 90, 255, 0.2); box-shadow: 0 0 20px rgba(142, 90, 255, 0.1);">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <h2 class="font-serif" style="font-size: 1.75rem; font-weight: 400; color: var(--text-primary); margin: 0;">Case Study Discussed on Request Only</h2>
        <p class="font-sans" style="max-width: 600px; font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">
          This project is protected by a Non-Disclosure Agreement (NDA). To comply with confidentiality obligations, the detailed design flows, internal operations workflows, and application interfaces cannot be displayed publicly.
        </p>
        Engineers were spending their own money on site materials.<br><span style="color: var(--color-accent); font-weight: 500;">And waiting weeks to get paid back.</span>
      </div>
      </div>

      <!-- High-Level Outcomes Block -->
      <div class="project-body stagger-el stagger-delay-3">
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-brand)">/ THE IMPACT</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">High-Level Project Outcomes</h2>
          <p class="chapter-desc" style="max-width: 780px; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 2.5rem;">
            Despite the confidentiality of the design layouts, the business and operational impact of the automation system can be shared. Re-engineering the expense validation process led to measurable improvements in efficiency:
          </p>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; box-shadow: var(--shadow-sm);">
              <div class="metric-value font-mono" style="font-size: 2.2rem; font-weight: 700; color: var(--color-brand); line-height: 1; margin-bottom: 0.5rem;">3 Days</div>
              <div class="metric-label font-sans" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.3;">Reimbursement Cycle<br>(Down from 14 days)</div>
            </div>
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; box-shadow: var(--shadow-sm);">
              <div class="metric-value font-mono" style="font-size: 2.2rem; font-weight: 700; color: var(--color-brand); line-height: 1; margin-bottom: 0.5rem;">-60%</div>
              <div class="metric-label font-sans" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.3;">Inventory Delays<br>(Improved site operations)</div>
            </div>
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; box-shadow: var(--shadow-sm);">
              <div class="metric-value font-mono" style="font-size: 2.2rem; font-weight: 700; color: var(--color-brand); line-height: 1; margin-bottom: 0.5rem;">-50%</div>
              <div class="metric-label font-sans" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.3;">Audit Time<br>(Reduced financial overhead)</div>
            </div>
          </div>
        </section>

        <!-- What We Can Discuss Section -->
        <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
          <span class="chapter-num font-mono" style="color: var(--color-brand)">/ TALK POINTS</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">What We Can Discuss on a Call</h2>
          <p class="chapter-desc" style="max-width: 780px; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 2.5rem;">
            If you are interested in the details of this project, I can walk you through the following topics during a private review session:
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
              <ul style="display: flex; flex-direction: column; gap: 1rem; padding-left: 0; list-style-type: none; margin: 0;">
                <li style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">1. On-Site Contextual Inquiry</strong>
                  How I shadowed civil engineers on active construction sites in Bangalore to observe their daily billing challenges under dust, heat, and physical fatigue.
                </li>
                <li style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">2. Offline-First Design Strategy</strong>
                  Building a robust upload system that handles extremely poor internet connectivity in basement construction levels without losing receipt uploads.
                </li>
              </ul>
            </div>
            <div>
              <ul style="display: flex; flex-direction: column; gap: 1rem; padding-left: 0; list-style-type: none; margin: 0;">
                <li style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">3. Complex Status Ecosystems</strong>
                  Mapping the 7 distinct approval states an invoice goes through between site engineer, site manager, auditor, and head office finance.
                </li>
                <li style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">4. Friction-Free Receipt Upload</strong>
                  Leveraging intelligent OCR scan guidelines to prevent engineers from uploading blurred, cropped, or unreadable invoice pictures.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </article>
  `;
}

// ==========================================================================
// PROJECT 3 (AURA AI - NEW CASE STUDY)
// ==========================================================================
export function renderProject3() {
  return `
    <article class="project-detail animate-fade-in">
      <header class="project-header stagger-el stagger-delay-1" style="border-bottom: 1px solid var(--border-color); padding-bottom: 2.5rem; margin-bottom: 3.5rem;">
        <span class="label font-mono project-tag" style="color: var(--color-bop); font-size: 0.75rem; letter-spacing: 0.08em; font-weight: bold; text-transform: uppercase;">MOBILE FINTECH / KYC REDESIGN</span>
        <h1 class="project-headline font-serif" style="font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.1; font-weight: 400; letter-spacing: -0.02em; margin-top: 0.5rem; margin-bottom: 2rem;">Transforming a Branch-Assisted Process into a Guided Digital Experience</h1>
        
        <!-- Premium Horizontal Metadata strip -->
        <div class="project-metadata-strip" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 2rem;">
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Role</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">UX Designer & Researcher</span>
          </div>
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Timeline</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">4 Months (2025)</span>
          </div>
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Deliverables</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">User Journeys, Flowcharts, Wireframes, Testing</span>
          </div>
          <div>
            <span class="meta-label font-mono" style="display: block; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 0.25rem;">Context</span>
            <span class="meta-value font-sans" style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">Mobile Banking, Financial Inclusion</span>
          </div>
        </div>
      </header>

      <!-- Highlights Section -->
      <div class="yooki-header-metrics stagger-el stagger-delay-2" style="margin-bottom: 3.5rem;">
        <div class="metric-card" style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; backdrop-filter: blur(10px); display: flex; flex-direction: column; justify-content: center; gap: 0.5rem; min-height: 120px; box-shadow: var(--shadow-sm);">
          <div class="metric-value font-mono" style="font-size: 2.2rem; font-weight: 700; color: var(--color-bop); line-height: 1;">Faster</div>
          <div class="metric-label font-sans" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.3;">Onboarding experience</div>
        </div>
        <div class="metric-card" style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; backdrop-filter: blur(10px); display: flex; flex-direction: column; justify-content: center; gap: 0.5rem; min-height: 120px; box-shadow: var(--shadow-sm);">
          <div class="metric-value font-mono" style="font-size: 2.2rem; font-weight: 700; color: var(--color-bop); line-height: 1;">Reduced</div>
          <div class="metric-label font-sans" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.3;">Perceived complexity</div>
        </div>
        <div class="metric-card" style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; backdrop-filter: blur(10px); display: flex; flex-direction: column; justify-content: center; gap: 0.5rem; min-height: 120px; box-shadow: var(--shadow-sm);">
          <div class="metric-value font-mono" style="font-size: 2.2rem; font-weight: 700; color: var(--color-bop); line-height: 1;">Clearer</div>
          <div class="metric-label font-sans" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.3;">Application tracking</div>
        </div>
      </div>

      <!-- Hero Mockup Video -->
      <div class="hero-image-wrapper stagger-el stagger-delay-2" style="margin-bottom: 3.5rem; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-lg); background: var(--bg-card);">
        <video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; object-fit: cover;">
          <source src="./bop_hero_video.mp4" type="video/mp4">
        </video>
      </div>

      <!-- Core Statement Nudge -->
      <div class="text-nudge font-serif stagger-el" style="text-align: center; margin: 3.5rem auto; max-width: 650px; font-size: 1.75rem; line-height: 1.4; color: var(--color-bop);">
        "Opening a bank account should build financial access,<br><span style="color: var(--text-primary); font-weight: 500;">not create barriers to it."</span>
      </div>

      <div class="project-body stagger-el stagger-delay-3">
        <!-- The Problem -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ THE TENSION</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">The Friction of Branch-Assisted Onboarding</h2>
          <div class="bop-two-col" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; margin-top: 0.5rem; margin-bottom: 2rem;">
            <p class="chapter-desc" style="margin: 0; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
              Opening a bank account has traditionally been a branch-assisted experience. Customers relied on bank representatives to explain requirements, verify documents, correct mistakes, and guide them through mandatory compliance procedures. While this approach helped ensure security and regulatory compliance, it also meant that much of the onboarding complexity was absorbed by bank staff rather than the customer.
            </p>
            <p class="chapter-desc" style="margin: 0; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
              As Bank of Palestine expanded its digital services, the onboarding process was moved online. However, the experience largely replicated the existing banking workflow instead of adapting it for self-service use.
            </p>
          </div>
          <div class="text-nudge font-serif" style="text-align: left; margin: 2rem 0 2rem; max-width: 100%; font-size: 1.35rem; line-height: 1.45; color: var(--text-primary); border-left: 3px solid var(--color-bop); padding-left: 1.5rem; font-style: italic;">
            The challenge was not to remove complexity from the process, but to help customers successfully navigate that complexity on their own.
          </div>
          <div class="problem-image-wrapper" style="margin-top: 2rem; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); background: var(--bg-card);">
            <img src="./bop_problem_image.png" alt="Branch-Assisted vs Digital Onboarding Friction" style="width: 100%; height: auto; display: block;" loading="lazy">
          </div>
        </section>

        <!-- Experience Audit (Flattened Accordion) -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ EXPERIENCE AUDIT</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Mapping Steps to Find Friction</h2>
          <p class="chapter-desc" style="max-width: 780px; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 2.5rem;">
            To understand where friction existed, I analyzed the existing onboarding journey and mapped the steps customers needed to complete before opening an account. The review revealed that the experience was designed around internal banking processes rather than customer understanding. While each step served a valid operational or compliance purpose, the overall journey felt lengthy, fragmented, and difficult to navigate independently.
          </p>

          <!-- Stacked Friction Cards (Fully Visible) -->
          <div style="display: flex; flex-direction: column; gap: 2.5rem;">
            <!-- Friction Area 1 -->
            <div style="padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);">
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.75rem; text-transform: uppercase;">FRICTION AREA 01</span>
              <h3 class="font-serif" style="font-size: 1.4rem; font-weight: 500; color: var(--text-primary); margin: 0 0 1rem 0;">Information Overload</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0 0 1.5rem 0;">
                The onboarding process consisted of 12 individual steps presented with equal visual importance. Customers were required to move through multiple screens without a clear understanding of how the information was organized or how much effort remained.
              </p>
              <div class="bop-timeline-container" style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--border-radius-md); border: 1px solid var(--border-color); overflow-x: auto;">
                <div class="bop-timeline" style="min-width: 1000px;">
                  <div class="bop-timeline-line"></div>
                  <div class="bop-timeline-step active">
                    <div class="bop-timeline-node">1</div>
                    <div class="bop-timeline-label">Account Opening</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">2</div>
                    <div class="bop-timeline-label">Customer Info</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">3</div>
                    <div class="bop-timeline-label">FATCA</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">4</div>
                    <div class="bop-timeline-label">Address</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">5</div>
                    <div class="bop-timeline-label">Customer Activity</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">6</div>
                    <div class="bop-timeline-label">Wealth Info</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">7</div>
                    <div class="bop-timeline-label">Power of Attorney</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">8</div>
                    <div class="bop-timeline-label">Account Data</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">9</div>
                    <div class="bop-timeline-label">E-Service</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">10</div>
                    <div class="bop-timeline-label">Terms</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">11</div>
                    <div class="bop-timeline-label">Attachment</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">12</div>
                    <div class="bop-timeline-label">Signatures</div>
                  </div>
                  <div class="bop-timeline-step">
                    <div class="bop-timeline-node">13</div>
                    <div class="bop-timeline-label">Comments</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Friction Area 2 -->
            <div style="padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm); display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
              <div>
                <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.75rem; text-transform: uppercase;">FRICTION AREA 02</span>
                <h3 class="font-serif" style="font-size: 1.4rem; font-weight: 500; color: var(--text-primary); margin: 0 0 1rem 0;">Compliance Hidden Inside the Journey</h3>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">
                  The onboarding flow combined multiple banking requirements into a single experience. Personal information, compliance questions, account preferences, and document uploads were presented as one continuous flow. From a customer's perspective, it was difficult to understand why certain information was being requested or which sections were legally required.
                </p>
              </div>
              <div style="border-radius: var(--border-radius-md); overflow: hidden; border: 1px solid var(--border-color); background: var(--bg-card); box-shadow: var(--shadow-sm);">
                <img src="./bop_compliance_hidden.jpg" alt="Compliance Hidden Inside the Journey Diagram" style="width: 100%; height: auto; display: block;" loading="lazy">
              </div>
            </div>

            <!-- Friction Area 3 -->
            <div style="padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm); display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
              <div>
                <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.75rem; text-transform: uppercase;">FRICTION AREA 03</span>
                <h3 class="font-serif" style="font-size: 1.4rem; font-weight: 500; color: var(--text-primary); margin: 0 0 1rem 0;">A Digital Version of a Paper Form</h3>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">
                  The experience focused on collecting information rather than guiding users through account opening. Customers moved from one form screen to another, entering details and uploading documents without receiving much contextual guidance. The system successfully gathered information but provided limited support for completing the journey.
                </p>
              </div>
              <div style="border-radius: var(--border-radius-md); overflow: hidden; border: 1px solid var(--border-color); background: var(--bg-card); box-shadow: var(--shadow-sm);">
                <img src="./bop_digital_paper.png" alt="A Digital Version of a Paper Form Diagram" style="width: 100%; height: auto; display: block;" loading="lazy">
              </div>
            </div>

            <!-- Friction Area 4 -->
            <div style="padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm); display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
              <div>
                <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.75rem; text-transform: uppercase;">FRICTION AREA 04</span>
                <h3 class="font-serif" style="font-size: 1.4rem; font-weight: 500; color: var(--text-primary); margin: 0 0 1rem 0;">Expectation vs Reality</h3>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">
                  Many users assumed account creation happened immediately after submission, while the actual process involved document reviews, verification, compliance checks, and activation.
                </p>
              </div>
              <div style="border-radius: var(--border-radius-md); overflow: hidden; border: 1px solid var(--border-color); background: var(--bg-card); box-shadow: var(--shadow-sm);">
                <img src="./bop_expectation_reality.png" alt="Expectation vs Reality Diagram" style="width: 100%; height: auto; display: block;" loading="lazy">
              </div>
            </div>
          </div>
        </section>

        <!-- Key Insights & Opportunity Areas -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ KEY INSIGHTS</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Key Insights &amp; Opportunity Areas</h2>
          
          <div class="bop-insights-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 1.5rem;">
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-bottom: 1.25rem; font-family: var(--font-serif);">Key Research Insights</h3>
              <ul style="display: flex; flex-direction: column; gap: 1rem; padding-left: 0; list-style-type: none; margin: 0;">
                <li style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">1. Complexity Was Necessary</strong>
                  Opening a bank account required KYC verification, document validation, compliance checks, and security reviews. These requirements could not be removed without compromising regulatory obligations.
                </li>
                <li style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">2. The Experience Was Process-Centric</strong>
                  The onboarding flow reflected how the bank collected information internally rather than how customers understood account opening.
                </li>
                <li style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">3. Missing Guidance Loop</strong>
                  In branches, staff explained requirements, corrected mistakes, and answered questions. The digital experience transferred responsibilities to customers without providing equivalent support.
                </li>
                <li style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">4. Mismatched Expectations</strong>
                  Customers assumed submitting an application meant opening an account. The actual process involved document reviews, verification, compliance checks, and activation.
                </li>
              </ul>
            </div>
            
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-bottom: 1.25rem; font-family: var(--font-serif);">Opportunity Areas</h3>
              <ul style="display: flex; flex-direction: column; gap: 1rem; padding-left: 0; list-style-type: none; margin: 0;">
                <li style="padding: 1.25rem; background: var(--bg-card); border-left: 3px solid var(--color-bop); border-radius: 4px var(--border-radius-md) var(--border-radius-md) 4px; border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary); box-shadow: var(--shadow-sm);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">Reduce Perceived Complexity</strong>
                  Help users understand progress and effort through organized, phase-based progression.
                </li>
                <li style="padding: 1.25rem; background: var(--bg-card); border-left: 3px solid var(--color-bop); border-radius: 4px var(--border-radius-md) var(--border-radius-md) 4px; border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary); box-shadow: var(--shadow-sm);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">Provide Guidance Throughout the Journey</strong>
                  Replace branch assistance with smart, contextual explanations directly in the fields.
                </li>
                <li style="padding: 1.25rem; background: var(--bg-card); border-left: 3px solid var(--color-bop); border-radius: 4px var(--border-radius-md) var(--border-radius-md) 4px; border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary); box-shadow: var(--shadow-sm);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">Improve Transparency</strong>
                  Make banking verification, backend delays, and manual review stages visible and understandable.
                </li>
                <li style="padding: 1.25rem; background: var(--bg-card); border-left: 3px solid var(--color-bop); border-radius: 4px var(--border-radius-md) var(--border-radius-md) 4px; border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary); box-shadow: var(--shadow-sm);">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem; font-size: 0.95rem;">Support Real-World Completion</strong>
                  Design for multi-session completion, allowing users to save progress and return when documents are ready.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Onboarding Journey Map Section (Zero Interaction) -->
        <section class="body-chapter bop-flowchart-section" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop);">/ ONBOARDING JOURNEY MAP</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Mapping the Onboarding Journey</h2>
          <p class="chapter-desc" style="max-width: 780px; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 2.5rem;">
            Before redesigning the experience, I mapped the complete onboarding workflow to understand how customer actions, compliance requirements, verification steps, and backend banking processes interacted with each other. Below is the system flow mapping.
          </p>

          <div class="bop-flowchart-card" style="margin-bottom: 3rem;">
            <!-- Scroll Wrapper for Flowchart -->
            <div class="bop-flowchart-scroll-wrapper">
              <div class="bop-flowchart-inner">
                <!-- SVG Connections Overlay (Fully active/lit by default) -->
                <svg class="bop-flow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020 320" preserveAspectRatio="none">
                  <!-- Connections (lit up to show the happy path flow clearly) -->
                  <path id="bop-path-start-phone" d="M 60 160 L 170 160" class="bop-flow-path active-happy" style="stroke-width: 3.5px;" />
                  <path id="bop-path-phone-residency" d="M 170 160 L 280 160" class="bop-flow-path active-happy" style="stroke-width: 3.5px;" />
                  <path id="bop-path-residency-otp" d="M 280 160 C 320 160, 340 70, 400 70" class="bop-flow-path active-happy" style="stroke-width: 3.5px;" />
                  <path id="bop-path-otp-enterid" d="M 400 70 L 520 70" class="bop-flow-path active-happy" style="stroke-width: 3.5px;" />
                  <path id="bop-path-enterid-registry" d="M 520 70 L 640 70" class="bop-flow-path active-happy" style="stroke-width: 3.5px;" />
                  <path id="bop-path-registry-ocr" d="M 640 70 L 760 70" class="bop-flow-path active-happy" style="stroke-width: 3.5px;" />
                  <path id="bop-path-ocr-liveness" d="M 760 70 L 760 160" class="bop-flow-path active-happy" style="stroke-width: 3.5px;" />
                  <path id="bop-path-liveness-selfie" d="M 760 160 L 870 160" class="bop-flow-path active-happy" style="stroke-width: 3.5px;" />
                  <path id="bop-path-selfie-vault" d="M 870 160 L 970 160" class="bop-flow-path active-happy" style="stroke-width: 3.5px;" />

                  <!-- Exception paths in dashed red/accent -->
                  <path id="bop-path-residency-foreign" d="M 280 160 C 320 160, 340 250, 400 250" class="bop-flow-path-dashed" style="stroke: var(--color-bop); opacity: 0.6;" />
                  <path id="bop-path-foreign-upload" d="M 400 250 L 520 250" class="bop-flow-path-dashed" style="stroke: var(--color-bop); opacity: 0.6;" />
                  <path id="bop-path-upload-approval" d="M 520 250 L 640 250" class="bop-flow-path-dashed" style="stroke: var(--color-bop); opacity: 0.6;" />
                  <path id="bop-path-approval-vault" d="M 640 250 C 780 250, 840 160, 970 160" class="bop-flow-path-dashed" style="stroke: var(--color-bop); opacity: 0.6;" />
                  <path id="bop-path-registry-branch" d="M 640 70 L 640 160" class="bop-flow-path-dashed" style="stroke: var(--color-bop); opacity: 0.6;" />
                  <path id="bop-path-selfie-video" d="M 870 160 L 870 250" class="bop-flow-path-dashed" style="stroke: var(--color-bop); opacity: 0.6;" />

                  <!-- Traveling Flow Dot along Happy Path -->
                  <circle id="bop-flow-travel-dot" r="5.5" fill="var(--color-success)" style="offset-path: path('M 60 160 L 170 160 L 280 160 C 320 160, 340 70, 400 70 L 520 70 L 640 70 L 760 70 L 760 160 L 870 160 L 970 160');" class="bop-flow-dot" />
                </svg>

                <!-- Static Nodes Grid -->
                <div class="bop-nodes-grid">
                  <div class="bop-node active-happy" style="left: 60px; top: 160px;">
                    <span class="node-num">01 / START</span>
                    <span class="node-title">Start Onboarding</span>
                  </div>
                  <div class="bop-node active-happy" style="left: 170px; top: 160px;">
                    <span class="node-num">02 / ENTRY</span>
                    <span class="node-title">Phone &amp; Email</span>
                  </div>
                  <div class="bop-node diamond active-happy" style="left: 280px; top: 160px;">
                    <div class="diamond-text">In Palestine?</div>
                  </div>
                  <div class="bop-node active-happy" style="left: 400px; top: 70px;">
                    <span class="node-num">03 / OTP</span>
                    <span class="node-title">OTP Validation</span>
                  </div>
                  <div class="bop-node active-happy" style="left: 520px; top: 70px;">
                    <span class="node-num">04 / ID</span>
                    <span class="node-title">Enter ID Num</span>
                  </div>
                  <div class="bop-node diamond active-happy" style="left: 640px; top: 70px;">
                    <div class="diamond-text">ID Valid?</div>
                  </div>
                  <div class="bop-node active-happy" style="left: 760px; top: 70px;">
                    <span class="node-num">05 / OCR</span>
                    <span class="node-title">OCR ID Scan</span>
                  </div>
                  <div class="bop-node active-happy" style="left: 760px; top: 160px;">
                    <span class="node-num">06 / BIOMETRICS</span>
                    <span class="node-title">Liveness Check</span>
                  </div>
                  <div class="bop-node diamond active-happy" style="left: 870px; top: 160px;">
                    <div class="diamond-text">Selfie Ok?</div>
                  </div>
                  <div class="bop-node active-happy" style="left: 970px; top: 160px;">
                    <span class="node-num">07 / VAULT</span>
                    <span class="node-title">Account Created</span>
                  </div>

                  <!-- Exceptions -->
                  <div class="bop-node active-exception" style="left: 400px; top: 250px;">
                    <span class="node-num">03B / FORM</span>
                    <span class="node-title">Foreigner Form</span>
                  </div>
                  <div class="bop-node active-exception" style="left: 520px; top: 250px;">
                    <span class="node-num">04B / UPLOAD</span>
                    <span class="node-title">Upload Passport</span>
                  </div>
                  <div class="bop-node active-exception" style="left: 640px; top: 250px;">
                    <span class="node-num">05B / MANUAL</span>
                    <span class="node-title">Manual Review</span>
                  </div>
                  <div class="bop-node active-exception" style="left: 640px; top: 160px;">
                    <span class="node-num">04C / BRANCH</span>
                    <span class="node-title">Visit Branch</span>
                  </div>
                  <div class="bop-node active-exception" style="left: 870px; top: 250px;">
                    <span class="node-num">06B / VIDEO</span>
                    <span class="node-title">Fallback Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Fully Visible Step Details Grid (Zero Interaction) -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <!-- Step 1 -->
            <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);">
              <h4 class="font-serif" style="margin: 0 0 0.5rem 0; font-size: 1.15rem; color: var(--text-primary);">01 / Start Onboarding &amp; Credentials</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0 0 0.75rem 0;">Introduce clear guidelines explaining what documents will be required during the onboarding session, setting proper user expectations and reducing drop-offs.</p>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); text-transform: uppercase; font-weight: bold; display: block;">COMPLIANCE: geo-restrictions warning and ID checks mandatory before form launch.</span>
            </div>
            <!-- Step 2 -->
            <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);">
              <h4 class="font-serif" style="margin: 0 0 0.5rem 0; font-size: 1.15rem; color: var(--text-primary);">02 / Residency &amp; Contact Verification</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0 0 0.75rem 0;">Background IP and cellular network geolocation checks automatically separate domestic citizens from foreign residents early in the journey.</p>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); text-transform: uppercase; font-weight: bold; display: block;">COMPLIANCE: AML rules require verified cellular/email node bound to account.</span>
            </div>
            <!-- Step 3 -->
            <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);">
              <h4 class="font-serif" style="margin: 0 0 0.5rem 0; font-size: 1.15rem; color: var(--text-primary);">03 / Identity Lookup &amp; Registry Match</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0 0 0.75rem 0;">Asynchronous backend connection querying MoI government database in under 2 seconds. Reassurance loaders prevent user exit.</p>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); text-transform: uppercase; font-weight: bold; display: block;">COMPLIANCE: Registers that the input national ID card matches government MoI files.</span>
            </div>
            <!-- Step 4 -->
            <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);">
              <h4 class="font-serif" style="margin: 0 0 0.5rem 0; font-size: 1.15rem; color: var(--text-primary);">04 / OCR ID Document Scan</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0 0 0.75rem 0;">On-device image OCR parsing captures text in real-time. Auto-exposure filters resolve low-light legibility issues.</p>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); text-transform: uppercase; font-weight: bold; display: block;">COMPLIANCE: Archiving unedited photo files of physical cards linked to customer ledger.</span>
            </div>
            <!-- Step 5 -->
            <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);">
              <h4 class="font-serif" style="margin: 0 0 0.5rem 0; font-size: 1.15rem; color: var(--text-primary);">05 / Liveness Check &amp; Biometrics</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0 0 0.75rem 0;">Interactive camera prompts (blink/turn indicators) with real-time feedback guide perfect face framing.</p>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); text-transform: uppercase; font-weight: bold; display: block;">COMPLIANCE: Liveness proof is mandatory to avoid spoofing and identity theft.</span>
            </div>
            <!-- Step 6 -->
            <div style="padding: 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);">
              <h4 class="font-serif" style="margin: 0 0 0.5rem 0; font-size: 1.15rem; color: var(--text-primary);">06 / Selfie Verification &amp; Account Vault</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0 0 0.75rem 0;">Direct pixel comparison between OCR document image, registry profile photo, and live selfie check.</p>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); text-transform: uppercase; font-weight: bold; display: block;">COMPLIANCE: Match check is required to ensure the owner of the document is the applicant.</span>
            </div>
          </div>

          <!-- Exception Flow Callouts (Zero Interaction) -->
          <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(var(--active-fintech), 0.03); border: 1px solid rgba(var(--active-fintech), 0.15); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 1rem;">
            <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: 700; letter-spacing: 0.08em; display: block; text-transform: uppercase;">EXCEPTION &amp; FALLBACK CHANNELS</span>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem;">
              <div>
                <h5 class="font-sans" style="margin: 0 0 0.25rem 0; font-size: 0.95rem; font-weight: bold; color: var(--text-primary);">Exception 3B: Foreign Passport</h5>
                <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">FATCA, CRS declarations are triggered. Users scan passport pages instead of local IDs, queued for manual review.</p>
              </div>
              <div>
                <h5 class="font-sans" style="margin: 0 0 0.25rem 0; font-size: 0.95rem; font-weight: bold; color: var(--text-primary);">Exception 4C: Registry Fail</h5>
                <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Unmatched records block digital creation. Show local branch map with queue reservations to avoid long physical wait times.</p>
              </div>
              <div>
                <h5 class="font-sans" style="margin: 0 0 0.25rem 0; font-size: 0.95rem; font-weight: bold; color: var(--text-primary);">Exception 6B: Selfie Mismatch</h5>
                <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">If automated comparison scores fall below a strict threshold, launch an in-app secure video call fallback with a live agent.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Information Architecture Section (Zero Interaction) -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ INFORMATION ARCHITECTURE</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Redesigning the Information Architecture</h2>
          <p class="chapter-desc" style="max-width: 780px; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 3rem;">
            The onboarding journey contained multiple compliance requirements, verification steps, and account setup tasks that were presented as individual steps with little structure. While the information being collected was necessary, the way it was organized made the process feel longer and more complex than it actually was.
          </p>

          <!-- 1. The Raw Research notepad (Discovery Phase) -->
          <div style="margin-bottom: 4rem;">
            <span class="font-mono label" style="font-size: 0.65rem; color: var(--color-bop); display: block; margin-bottom: 0.75rem;">RESEARCH ARTIFACT · INITIAL DISCOVERY</span>
            <div class="bop-notepad" style="background: hsl(14, 100%, 98%); border: 1px solid rgba(224, 114, 88, 0.2); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm); padding: 2rem 2rem 2rem 3rem; position: relative; overflow: hidden; background-image: linear-gradient(rgba(224, 114, 88, 0.1) 1px, transparent 1px); background-size: 100% 2.1rem; line-height: 2.1rem;">
              <div class="notepad-holes" style="position: absolute; top: 0.5rem; left: 0; right: 0; display: flex; justify-content: space-around; padding: 0 1rem; pointer-events: none; opacity: 0.6;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
              </div>
              <div style="position: absolute; left: 2.25rem; top: 0; bottom: 0; width: 1px; background: rgba(224, 114, 88, 0.45); pointer-events: none;"></div>
              <div class="notepad-content" style="font-family: 'Kalam', 'Architects Daughter', 'Comic Sans MS', cursive, sans-serif; font-style: italic; color: #2e2825; font-size: 0.95rem; padding-top: 0.75rem; line-height: 2.1rem;">
                <h4 style="font-family: inherit; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem; color: #b8432a; border-bottom: 1.5px dashed rgba(224, 114, 88, 0.3); padding-bottom: 0.25rem; font-style: inherit; line-height: normal;">Basic steps involved - functionality</h4>
                <ul style="list-style-type: disc; padding-left: 0.5rem; margin-bottom: 1.5rem; font-family: inherit; font-style: inherit; line-height: 2.1rem;">
                  <li>Identity verification - who am I?</li>
                  <li>Eligibility test - blacklisted or not</li>
                  <li>Existing account holder /not</li>
                  <li>Add a new account to my name</li>
                  <li>more about me - employability, source of income, risk factors, PEP</li>
                  <li>Depending on my nationality - FATCA is req</li>
                  <li>My spouse / nominee details</li>
                  <li>My address proof</li>
                  <li>Fund/ wealth info</li>
                  <li>Power of attorney</li>
                  <li>New account details</li>
                  <li>E services</li>
                  <li>signature</li>
                </ul>
                <div style="font-family: inherit; font-weight: bold; color: #b8432a; font-size: 1rem; border-top: 1.5px dashed rgba(224, 114, 88, 0.3); padding-top: 0.4rem; line-height: normal; font-style: inherit;">
                  Completing kyc = creating new bank account
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Refined Compliance Mapping Bento -->
          <div>
            <span class="font-mono label" style="font-size: 0.65rem; color: var(--color-bop); display: block; margin-bottom: 0.75rem;">THE REFINED SYSTEM FRAMEWORK</span>
            <div class="bop-compliance-sandbox" style="border-radius: var(--border-radius-lg); border: 1px solid var(--border-color); padding: 2rem; background: var(--bg-secondary);">
              
              <!-- PMA Regulation alert banner -->
              <div class="bop-pma-alert" style="margin-bottom: 2rem; padding: 1rem 1.25rem; background: rgba(var(--active-fintech), 0.04); border-left: 4px solid var(--color-bop); font-size: 0.9rem; color: var(--text-primary);">
                <strong>PMA Regulatory Mandate:</strong> Standard fully functional bank accounts cannot be opened in Palestine without valid KYC (Know Your Customer) documents verified against central ministry registries.
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <!-- Sync Bento Grid -->
                <div>
                  <div class="bop-bento-section-title" style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.05em; font-weight: 700;">Government Registry Databases (Linked via Mobile)</div>
                  <div class="bop-bento-layout" style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                    <div class="bop-bento-card active-map" style="padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); box-shadow: var(--shadow-sm); border-left: 3px solid var(--color-success);">
                      <strong style="font-size: 0.9rem; color: var(--text-primary); display: block;">Customer Identification</strong>
                      <span style="font-size: 0.8rem; color: var(--text-secondary);">Full Name, Palestine ID Number, Photo</span>
                    </div>
                    <div class="bop-bento-card active-map" style="padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); box-shadow: var(--shadow-sm); border-left: 3px solid var(--color-success);">
                      <strong style="font-size: 0.9rem; color: var(--text-primary); display: block;">Registered Profile</strong>
                      <span style="font-size: 0.8rem; color: var(--text-secondary);">Registered Address, Email &amp; Registry details</span>
                    </div>
                    <div class="bop-bento-card active-map" style="padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); box-shadow: var(--shadow-sm); border-left: 3px solid var(--color-success);">
                      <strong style="font-size: 0.9rem; color: var(--text-primary); display: block;">Core Account Registry</strong>
                      <span style="font-size: 0.8rem; color: var(--text-secondary);">Existing Accounts &amp; Active Card Status checks</span>
                    </div>
                  </div>
                </div>

                <!-- PMA Rules Bento Grid -->
                <div>
                  <div class="bop-bento-section-title" style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.05em; font-weight: 700;">PMA Compliance Directives</div>
                  <div class="bop-bento-layout" style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                    <div class="bop-bento-card active-map" style="padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); box-shadow: var(--shadow-sm); border-left: 3px solid var(--color-bop);">
                      <strong style="font-size: 0.9rem; color: var(--text-primary); display: block;">Mandatory Lock</strong>
                      <span style="font-size: 0.8rem; color: var(--text-secondary);">Onboarding blocks automatically if any KYC criteria fail.</span>
                    </div>
                    <div class="bop-bento-card active-map" style="padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); box-shadow: var(--shadow-sm); border-left: 3px solid var(--color-bop);">
                      <strong style="font-size: 0.9rem; color: var(--text-primary); display: block;">Risk-Based Diligence</strong>
                      <span style="font-size: 0.8rem; color: var(--text-secondary);">High-risk profiles (e.g. PEPs) trigger Enhanced Due Diligence (EDD) background audits.</span>
                    </div>
                    <div class="bop-bento-card active-map" style="padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); box-shadow: var(--shadow-sm); border-left: 3px solid var(--color-bop);">
                      <strong style="font-size: 0.9rem; color: var(--text-primary); display: block;">Jerusalem / Passport Exceptions</strong>
                      <span style="font-size: 0.8rem; color: var(--text-secondary);">Jerusalem IDs and foreign passports follow dedicated manual validation paths.</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Flattened Core KYC Steps -->
              <div style="margin-top: 2.5rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
                <h4 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0 0 1.25rem 0; color: var(--text-primary);">KYC Phase Restructuring (5 Core Phases)</h4>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  <div style="padding: 1rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <strong style="font-size: 0.95rem; color: var(--text-primary); display: block; margin-bottom: 0.25rem;">PHASE 01: Core Registration (Steps 1–3)</strong>
                    <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Checks eligibility against national blacklists and verifies if the user already holds active accounts immediately upon contact registration.</p>
                  </div>
                  <div style="padding: 1rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <strong style="font-size: 0.95rem; color: var(--text-primary); display: block; margin-bottom: 0.25rem;">PHASE 02: Biometric Verification (Steps 4–6)</strong>
                    <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Captures national ID card details via OCR scan and executes blink/liveness biometric checking to prevent identity theft.</p>
                  </div>
                  <div style="padding: 1rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <strong style="font-size: 0.95rem; color: var(--text-primary); display: block; margin-bottom: 0.25rem;">PHASE 03: Profile Amplification (Steps 7–10)</strong>
                    <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Gathers residential addresses, nominee structures, PEP declarations, and income sources to establish full audit profiles.</p>
                  </div>
                  <div style="padding: 1rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <strong style="font-size: 0.95rem; color: var(--text-primary); display: block; margin-bottom: 0.25rem;">PHASE 04: Account Ledger Creation (Step 11)</strong>
                    <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Provisions account routing numbers, configures ledger profiles, and establishes the user's secure digital vault.</p>
                  </div>
                  <div style="padding: 1rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                    <strong style="font-size: 0.95rem; color: var(--text-primary); display: block; margin-bottom: 0.25rem;">PHASE 05: Cryptographic Consent (Steps 12–13)</strong>
                    <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">Configures mobile services access and completes draws to legally sign off on the onboarding ledger.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- Redesign Strategy -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ DESIGN STRATEGY</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Guided Customer Journeys for Complex Audits</h2>
          <p class="chapter-desc" style="margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
            The audit revealed that the challenge was not the number of requirements users had to complete, but how those requirements were presented. Banking regulations, identity verification, and compliance checks were essential parts of the onboarding process and could not be removed.
          </p>
          <p class="chapter-desc" style="margin-bottom: 0; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
            Instead of simplifying the requirements themselves, the redesign focused on simplifying the experience of completing them. The goal was to transform onboarding from a bank-centric workflow into a guided customer journey that felt structured, transparent, and achievable. Finally, the product should encourage continuous learning rather than one-time interactions.
          </p>
        </section>

        <!-- First Rejected Draft -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ FIRST DRAFT ITERATION</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">First Rejected Draft</h2>
          <p class="chapter-desc" style="margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
            Our first approach focused on creating a unified onboarding experience by reducing the number of visible steps and consolidating multiple processes into a single streamlined flow. The idea was to make account opening feel faster and more modern by minimizing transitions between screens and presenting onboarding as one continuous journey.
          </p>
          <p class="chapter-desc" style="margin-bottom: 2rem; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
            The unified approach also introduced operational challenges. Certain verification activities depended on information collected earlier in the journey, while some compliance requirements required separate handling, review processes, and exception scenarios.
          </p>
          <!-- Mockups of rejected flow using wide screens flow diagram -->
          <div class="problem-image-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card);">
            <img src="./bop_rejected_draft.png" alt="First Rejected Draft Mobile Onboarding Flow" style="width: 100%; height: auto; display: block;" loading="lazy">
          </div>
        </section>

        <!-- Accepted Design -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ THE ACCEPTED DESIGN</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Designing for Confidence and Transparency</h2>
          
          <!-- 1. Reduce Perceived Complexity -->
          <div style="margin-top: 2rem;">
            <h3 style="font-size: 1.35rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.75rem; font-family: var(--font-serif);">Reduce Perceived Complexity</h3>
            <p class="chapter-desc" style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.65;">
              The existing experience presented onboarding as a long sequence of independent steps. By organizing related tasks into meaningful phases, users could focus on one objective at a time rather than the entire process.
            </p>
            
            <div class="bop-comparison-grid" style="margin-bottom: 1.5rem;">
              <div style="background: rgba(235, 87, 87, 0.03); border: 1px solid rgba(235, 87, 87, 0.2); border-radius: var(--border-radius-md); display: flex; flex-direction: column; overflow: hidden;">
                <div style="padding: 1.25rem 1.25rem 0.5rem 1.25rem;">
                  <span class="font-mono" style="font-size: 0.65rem; color: #eb5757; font-weight: 700; display: block; margin-bottom: 0.5rem;">BEFORE</span>
                  <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary);">
                    A continuous 12-step sequence of forms, identity uploads, and compliance questions presented with equal visual weight, causing massive drop-offs when users faced unexpected requests midway.
                  </p>
                </div>
                <div style="border-top: 1px solid rgba(235, 87, 87, 0.1); width: 100%; margin-top: auto;">
                  <img src="./bop_reduce_complexity_before.png" alt="Before: 12 continuous steps" style="width: 100% !important; height: auto; display: block;" loading="lazy">
                </div>
              </div>
              <div style="background: rgba(52, 199, 89, 0.03); border: 1px solid rgba(52, 199, 89, 0.2); border-radius: var(--border-radius-md); display: flex; flex-direction: column; overflow: hidden;">
                <div style="padding: 1.25rem 1.25rem 0.5rem 1.25rem;">
                  <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; display: block; margin-bottom: 0.5rem;">AFTER (REDESIGN)</span>
                  <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary);">
                    Organized into 5 structured phases (Registration, Verification, ID Scanning, Liveness, and Account Selection) that establish momentum and save progress if users pause.
                  </p>
                </div>
                <div style="border-top: 1px solid rgba(52, 199, 89, 0.1); width: 100%; margin-top: auto;">
                  <img src="./bop_reduce_complexity_after.png" alt="After: 5 structured phases" style="width: 100% !important; height: auto; display: block;" loading="lazy">
                </div>
              </div>
            </div>
            <p class="chapter-desc" style="font-size: 0.9rem; color: var(--text-muted); font-style: italic; margin-top: 0.5rem; margin-bottom: 2.5rem;">
              We had multiple ways to go forward including a multi-stepper form, but that gets affected if people leave the process midway and can cause confusions.
            </p>
          </div>

          <!-- 2. Replace Branch Guidance Digitally -->
          <div style="margin-top: 2.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="font-size: 1.35rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.75rem; font-family: var(--font-serif);">Replace Branch Guidance Digitally</h3>
            <p class="chapter-desc" style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.65;">
              Customers previously relied on branch staff to explain requirements, answer questions, and help them complete forms. The redesigned experience provides guidance directly within the interface through contextual explanations, progress indicators, and clear next steps. Complex processes and documents are explained to the user, and updates are notified immediately to maintain a smooth workflow.
            </p>

            <div class="problem-image-wrapper" style="margin-top: 2rem; background: var(--bg-card); border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
              <img src="./bop_simulator_replacement.png?v=2" alt="Interactive Mobile Onboarding Simulator Mockup" style="width: 100%; height: auto; display: block;" loading="lazy">
            </div>
          </div>

          <!-- 3. Make Banking Processes Transparent -->
          <div style="margin-top: 2.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="font-size: 1.35rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.75rem; font-family: var(--font-serif);">Make Banking Processes Transparent</h3>
            <p class="chapter-desc" style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.65;">
              Many users assumed account creation happened immediately after submission, while the actual process involved reviews and verification. The redesign aimed to make every stage visible, helping users understand what was happening and what to expect next.
            </p>
            
            <p class="chapter-desc" style="margin-bottom: 1.25rem; font-size: 1.05rem; line-height: 1.65;">
              By introducing clear in-app status tracking, users no longer guess their verification state. If an automatic check requires manual bank agent review:
            </p>
            
            <ul style="display: flex; flex-direction: column; gap: 0.5rem; padding-left: 1.25rem; margin: 0 0 2rem 0; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55;">
              <li>Users are notified of the exact document being verified.</li>
              <li>An expected activation timeline is clearly shown.</li>
              <li>Immediate, clickable fallbacks (like a secure in-app video call) are offered if validation fails, keeping the user in the digital stream.</li>
            </ul>

            <div class="bop-comparison-grid" style="margin-bottom: 1.5rem;">
              <div style="background: rgba(235, 87, 87, 0.03); border: 1px solid rgba(235, 87, 87, 0.2); border-radius: var(--border-radius-md); display: flex; flex-direction: column; overflow: hidden;">
                <div style="padding: 1.25rem 1.25rem 0.5rem 1.25rem;">
                  <span class="font-mono" style="font-size: 0.65rem; color: #eb5757; font-weight: 700; display: block; margin-bottom: 0.5rem;">BEFORE (BRANCH PORTAL)</span>
                  <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary);">
                    Status details were hidden in internal back-office tables, leaving both branch agents and customers waiting in the dark about verification blockages.
                  </p>
                </div>
                <div style="border-top: 1px solid rgba(235, 87, 87, 0.1); width: 100%; margin-top: auto;">
                  <img src="./bop_transparent_before.png" alt="Before: Hidden status tracking" style="width: 100% !important; height: auto; display: block;" loading="lazy">
                </div>
              </div>
              <div style="background: rgba(52, 199, 89, 0.03); border: 1px solid rgba(52, 199, 89, 0.2); border-radius: var(--border-radius-md); display: flex; flex-direction: column; overflow: hidden;">
                <div style="padding: 1.25rem 1.25rem 0.5rem 1.25rem;">
                  <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; display: block; margin-bottom: 0.5rem;">AFTER (REDESIGN STATUS SCREEN)</span>
                  <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary);">
                    Clear, in-app real-time status tracking widget that notifies the user exactly what document is being verified and displays the expected timeline.
                  </p>
                </div>
                <div style="border-top: 1px solid rgba(52, 199, 89, 0.1); width: 100%; margin-top: auto;">
                  <img src="./bop_transparent_after.png" alt="After: In-app status tracking widget" style="width: 100% !important; height: auto; display: block;" loading="lazy">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Stakeholder Compromises Block -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ HARD CHOICES</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">The Hard Choices: Security vs. Seamless Flow</h2>
          <p class="chapter-desc" style="max-width: 780px; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 2.5rem;">
            Balancing national banking regulations with a friction-free, customer-facing self-service app required key compromises:
          </p>

          <div style="padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 1.5rem; box-shadow: var(--shadow-sm);">
            <div>
              <span class="font-mono" style="font-size: 0.7rem; color: #8e9ab0; letter-spacing: 0.08em; display: block; text-transform: uppercase; font-weight: 700; margin-bottom: 1.25rem;">Stakeholder Compromises</span>
              
              <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;">
                <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                  <h4 class="font-sans" style="font-size: 1.1rem; font-weight: 700; margin: 0; color: var(--text-primary); letter-spacing: -0.01em;">Maintaining Manual Exceptions</h4>
                  <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">We compromised by preserving manual approval loops for Jerusalem IDs and foreign passports. While this prevented 100% digital automation, it guaranteed compliance with strict international banking audits.</p>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                  <h4 class="font-sans" style="font-size: 1.1rem; font-weight: 700; margin: 0; color: var(--text-primary); letter-spacing: -0.01em;">Slow Government Registry Latency</h4>
                  <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">Direct sync queries with governmental MoI databases frequently experienced heavy latency. Instead of loading spinners that blocked actions, we allowed the UI to asynchronously poll in the background while the user completed secondary profile forms.</p>
                </div>
              </div>
            </div>

            <div style="padding: 1.25rem; background: rgba(52,199,89,0.02); border: 1px solid rgba(52,199,89,0.15); border-radius: var(--border-radius-md);">
              <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">THE VERDICT</span>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">Maintains absolute regulatory compliance while providing a smooth, asynchronous digital journey.</p>
            </div>
          </div>
        </section>

        <!-- Validating the Solution -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 3.5rem; margin-bottom: 3.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ VALIDATION</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Validating the Solution</h2>
          <p class="chapter-desc" style="margin-bottom: 1.25rem; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
            After redesigning the onboarding experience, the solution was evaluated against the challenges identified during the audit. The objective was to determine whether the new structure successfully addressed the complexity, uncertainty, and guidance gaps present in the original experience.
          </p>
          <p class="chapter-desc" style="margin-bottom: 0; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
            Rather than focusing on reducing regulatory requirements, the validation focused on improving how users experienced those requirements throughout the journey.
          </p>
        </section>

        <!-- Reflection & Learnings -->
        <section class="body-chapter" style="padding-bottom: 3.5rem; margin-bottom: 0;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ LEARNINGS &amp; OUTCOMES</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.2rem; margin-top: 0.25rem; font-weight: 400; margin-bottom: 1.5rem;">Reflection &amp; Learnings</h2>
          <p class="chapter-desc" style="margin-bottom: 1.25rem; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
            This project began with what seemed like a straightforward objective: digitize the account opening experience and reduce dependence on branch visits. However, as I explored the onboarding journey, I realized that the challenge was far more complex than redesigning forms or reducing the number of steps.
          </p>
          <p class="chapter-desc" style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary);">
            One of the biggest learnings was that complexity and friction are not the same thing. Banking onboarding is inherently complex because of regulatory requirements, identity verification, security checks, and compliance obligations. These requirements could not simply be removed or hidden. The real challenge was helping users understand and navigate that complexity without feeling overwhelmed.
          </p>

          <div class="text-nudge font-serif" style="text-align: center; margin: 3rem auto 0; max-width: 650px; font-size: 1.6rem; line-height: 1.45; color: var(--color-bop); border-top: 1px solid var(--border-color); padding-top: 2rem; font-style: italic;">
            Good onboarding doesn't eliminate complexity.<br><span style="color: var(--text-primary); font-weight: 500;">It helps users navigate it with confidence.</span>
          </div>
        </section>
      </div>
    </article>
  `;
}

const brandLogoMark = `
      <!-- Logo / Brand Mark -->
      <a href="#/" class="logo-link" aria-label="Gokul S Kaimal Home" style="margin-bottom: 0.75rem; display: inline-block;">
        <h1 class="logo-text-wrapper" style="margin: 0; padding: 0; display: inline-flex; align-items: center;">
          <svg class="logo-text-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 36" aria-label="Gokul S Kaimal Logo" style="height: 42px; width: auto; overflow: visible; display: inline-block;">
            <defs>
              <linearGradient id="logo-dot-grad-project" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="hsl(22, 100%, 57%)" />
                <stop offset="100%" stop-color="hsl(258, 100%, 70%)" />
              </linearGradient>
            </defs>
            <text x="4" y="26" class="logo-text-layer logo-text-main">G</text>
            <g class="logo-image-group">
              <image href="./prehistoric_rock.png" class="logo-rock-svg" x="18" y="7" width="22" height="22" />
              <image href="./sports_tyre.png" class="logo-tyre-svg" x="18" y="7" width="22" height="22" />
            </g>
            <g class="logo-text-rest-group">
              <text x="40" y="26" class="logo-text-layer logo-text-main">kul <tspan class="logo-text-serif-main">S</tspan> Kaimal<tspan class="logo-dot-main">.</tspan></text>
            </g>
          </svg>
        </h1>
      </a>
`;

const sidebarActionGrid = `
      <!-- Branded CTA Footer Card (matches homepage style) -->
      <div class="sidebar-cta-card">
        <div class="cta-card-header">
          <h3 class="cta-card-title font-sans">Let's build impactful <span class="highlight-text-orange">experiences.</span></h3>
          <p class="cta-card-desc font-sans">I'm currently open to full-time opportunities where design and technology create real impact.</p>
        </div>
        <div class="cta-buttons-grid">
          <a href="https://www.linkedin.com/in/gokul-s-kaimal-96652b6b/" class="cta-action-btn" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="cta-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span class="cta-btn-label font-mono">LinkedIn</span>
          </a>
          <a href="https://drive.google.com/file/d/1TKco7TNxoO6L0V2EC0rYysqIONvKjUIs/view?usp=drive_link" class="cta-action-btn" target="_blank" rel="noopener" aria-label="View Resume">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="cta-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <span class="cta-btn-label font-mono">View Resume</span>
          </a>
          <button type="button" class="cta-action-btn" data-email-open aria-label="Contact Me">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="cta-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span class="cta-btn-label font-mono">Contact Me</span>
          </button>
        </div>
      </div>
`;

export function renderProject1Sidebar() {
  return `
    <!-- Header Row -->
    <div class="sidebar-header-row">
      <a href="#/" class="logo-link" aria-label="Gokul S Kaimal Home">
        <span class="logo-gsk">GSK<span class="logo-orange-dot">.</span></span>
      </a>
      <div class="availability-status-pill">
        <span class="status-dot"></span>
        <span class="status-text font-mono">Available for opportunities</span>
      </div>
    </div>

    <!-- Project Identity Block -->
    <div class="proj-sidebar-identity sidebar-fade-in">
      <div class="designer-title-row">
        <span class="designer-title-line"></span>
        <span class="designer-title-text font-mono">YOOKI / 2025</span>
      </div>
      <h2 class="proj-sidebar-title font-sans">
        Turning Yooki from a Backup Tool into a Daily Learning Companion
      </h2>
      <p class="proj-sidebar-desc font-sans">
        Redesigning a doubt-solving chatbot into an associative learning ecosystem that connects answers to syllabus, drives feature discovery, and builds daily study habits.
      </p>
      <a href="https://blog.askyooki.com/" target="_blank" rel="noopener" class="project-sidebar-btn project-1-btn">
        see what yooki is <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>
      </a>
    </div>

    <!-- Specs as Background-Card List -->
    <div class="sidebar-background-card sidebar-fade-in">
      <span class="background-card-title font-mono">PROJECT SPECS</span>
      <div class="background-list-items">
        <!-- Role -->
        <div class="bg-list-item">
          <div class="bg-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path></svg>
          </div>
          <div class="bg-item-content">
            <span class="bg-item-label font-sans">Role</span>
            <span class="bg-item-value font-sans">Product Designer</span>
          </div>
        </div>
        <!-- Timeline -->
        <div class="bg-list-item">
          <div class="bg-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <div class="bg-item-content">
            <span class="bg-item-label font-sans">Timeline</span>
            <span class="bg-item-value font-sans">6 Months (2025)</span>
          </div>
        </div>
        <!-- Core Concepts -->
        <div class="bg-list-item">
          <div class="bg-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <div class="bg-item-content">
            <span class="bg-item-label font-sans">Core Concepts</span>
            <span class="bg-item-value font-sans">Syllabus Mapping <span class="bullet-sep">•</span> Interactive Prototypes <span class="bullet-sep">•</span> Maze Usability Testing</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Branded CTA Card -->
    ${sidebarActionGrid}
  `;
}

export function renderProject2Sidebar() {
  return `
    <!-- Header Row -->
    <div class="sidebar-header-row">
      <a href="#/" class="logo-link" aria-label="Gokul S Kaimal Home">
        <span class="logo-gsk">GSK<span class="logo-orange-dot">.</span></span>
      </a>
      <div class="availability-status-pill">
        <span class="status-dot"></span>
        <span class="status-text font-mono">Available for opportunities</span>
      </div>
    </div>

    <!-- Project Identity Block -->
    <div class="proj-sidebar-identity sidebar-fade-in">
      <div class="designer-title-row">
        <span class="designer-title-line"></span>
        <span class="designer-title-text font-mono">CENDROL / 2024</span>
      </div>
      <h2 class="proj-sidebar-title font-sans">
        Cendrol: Automating Expense Claims for Field Engineers
      </h2>
      <p class="proj-sidebar-desc font-sans">
        Reimagining how on-site engineers track, submit, and manage expense claims to eliminate invoice validation lag and site inventory delays.
      </p>
      <span class="font-mono" style="display: block; font-size: 0.65rem; color: var(--color-brand); font-weight: bold; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em;">🔒 Protected under NDA</span>
      <a href="https://www.linkedin.com/in/gokul-s-kaimal-96652b6b/" target="_blank" rel="noopener" class="project-sidebar-btn project-2-btn">
        discuss on request <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>
      </a>
    </div>

    <!-- Specs as Background-Card List -->
    <div class="sidebar-background-card sidebar-fade-in">
      <span class="background-card-title font-mono">PROJECT SPECS</span>
      <div class="background-list-items">
        <!-- Role -->
        <div class="bg-list-item">
          <div class="bg-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path></svg>
          </div>
          <div class="bg-item-content">
            <span class="bg-item-label font-sans">Role</span>
            <span class="bg-item-value font-sans">Lead Product Researcher &amp; Designer</span>
          </div>
        </div>
        <!-- Timeline -->
        <div class="bg-list-item">
          <div class="bg-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <div class="bg-item-content">
            <span class="bg-item-label font-sans">Timeline</span>
            <span class="bg-item-value font-sans">3 Months (2024)</span>
          </div>
        </div>
        <!-- Context -->
        <div class="bg-list-item">
          <div class="bg-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
          <div class="bg-item-content">
            <span class="bg-item-label font-sans">Context</span>
            <span class="bg-item-value font-sans">Field Operations <span class="bullet-sep">•</span> Construction FinTech</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Branded CTA Card -->
    ${sidebarActionGrid}
  `;
}

export function renderProject3Sidebar() {
  return `
    <!-- Header Row -->
    <div class="sidebar-header-row">
      <a href="#/" class="logo-link" aria-label="Gokul S Kaimal Home">
        <span class="logo-gsk">GSK<span class="logo-orange-dot">.</span></span>
      </a>
      <div class="availability-status-pill">
        <span class="status-dot"></span>
        <span class="status-text font-mono">Available for opportunities</span>
      </div>
    </div>

    <!-- Project Identity Block -->
    <div class="proj-sidebar-identity sidebar-fade-in">
      <div class="designer-title-row">
        <span class="designer-title-line"></span>
        <span class="designer-title-text font-mono">BOP / 2025</span>
      </div>
      <h2 class="proj-sidebar-title font-sans">
        Bank of Palestine: Simplifying Complex KYC Process
      </h2>
      <p class="proj-sidebar-desc font-sans">
        Opening a bank account is historically a high-friction workflow. Reimagining identity verification through Progressive Disclosures.
      </p>
      <a href="https://www.bop.ps/en/personal" target="_blank" rel="noopener" class="project-sidebar-btn project-3-btn">
        more about bank <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>
      </a>
    </div>

    <!-- Specs as Background-Card List -->
    <div class="sidebar-background-card sidebar-fade-in">
      <span class="background-card-title font-mono">PROJECT SPECS</span>
      <div class="background-list-items">
        <!-- Role -->
        <div class="bg-list-item">
          <div class="bg-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path></svg>
          </div>
          <div class="bg-item-content">
            <span class="bg-item-label font-sans">Role</span>
            <span class="bg-item-value font-sans">UX Designer</span>
          </div>
        </div>
        <!-- Timeline -->
        <div class="bg-list-item">
          <div class="bg-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <div class="bg-item-content">
            <span class="bg-item-label font-sans">Timeline</span>
            <span class="bg-item-value font-sans">4 Months (2025)</span>
          </div>
        </div>
        <!-- Context -->
        <div class="bg-list-item">
          <div class="bg-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
          <div class="bg-item-content">
            <span class="bg-item-label font-sans">Context</span>
            <span class="bg-item-value font-sans">Mobile Banking <span class="bullet-sep">•</span> Identity Verification (KYC) <span class="bullet-sep">•</span> FinTech</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Branded CTA Card -->
    ${sidebarActionGrid}
  `;
}

// ==========================================================================
// PROJECT 4 (AURA AI - DETAILS & SIDEBAR VIEWS)
// ==========================================================================
export function renderProject4() {
  return `
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-brand)">AI SYSTEMS / DESIGN TOOL</span>
        <h1 class="project-headline font-serif">Aura AI: Prompt-to-Interface Editor</h1>
      </header>

      <div class="project-intro-grid stagger-el stagger-delay-2">
        <p class="project-intro-text">
          Traditional user interfaces are static and built for generic workflows. Aura AI reimagines interface generation by grounding AI loops within a structured design system. This case study details how we designed a prompt-to-interface canvas editor that translates user intent directly into functional components while maintaining layout consistency and system integrity.
        </p>
        <div class="project-specs">
          <div class="spec-item">
            <span class="spec-label">ROLE</span>
            <span>Interaction & Design Systems Lead</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">TIMELINE</span>
            <span>6 Months (2024)</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">CONTEXT</span>
            <span>Generative UI, Modular Canvas, Design Tokens</span>
          </div>
        </div>
      </div>

      <div class="project-body stagger-el stagger-delay-3">
        
        <!-- Solution Path Section Wrapper -->
        <div class="solution-path-section">
          <!-- Solution Path Tabs -->
          <div class="solution-path-container">
            <span class="chapter-num font-mono" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.05em;">/ THE SOLUTION PATH</span>
            <div class="solution-tabs">
              <button class="solution-tab-btn active" data-chapter="1">
                <span class="tab-num">CHAPTER 01</span>
                <span class="tab-title">Grounding Generative UI within Design Tokens</span>
              </button>
              <button class="solution-tab-btn" data-chapter="2">
                <span class="tab-num">CHAPTER 02</span>
                <span class="tab-title">The Modular Layout Canvas</span>
              </button>
              <button class="solution-tab-btn" data-chapter="3">
                <span class="tab-num">CHAPTER 03</span>
                <span class="tab-title">Latency &amp; Performance Benchmarks</span>
              </button>
            </div>
          </div>

          <!-- Solution Chapters -->
          <div class="solution-chapters-container">
            <!-- Chapter 1 -->
            <div class="solution-chapter-content active" data-chapter-content="1">
              <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-accent)">CHAPTER 1</span>
                <h2 class="chapter-title font-serif">Grounding Generative UI within Design Tokens</h2>
                <p class="chapter-desc">
                  The core challenge of generative UI is trust. If an LLM generates raw, unstyled HTML, it breaks visual consistency and introduces security risks. To solve this, we mapped LLM outputs directly to a structured UI schema aligned with our design tokens, guaranteeing all generated layouts match the brand's visual identity.
                </p>
                <div class="user-quote-callout" style="border-left: 4px solid var(--color-brand); margin-top: 1.5rem;">
                  "We aren't letting the AI paint the canvas — we are giving it a finite set of blocks and a strict set of rules to arrange them."
                  <span class="quote-author">— Gokul S Kaimal</span>
                </div>
              </section>
            </div>

            <!-- Chapter 2 -->
            <div class="solution-chapter-content" data-chapter-content="2">
              <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-brand)">CHAPTER 2</span>
                <h2 class="chapter-title font-serif">The Modular Layout Canvas</h2>
                <p class="chapter-desc">
                  To allow users to refine generated layouts, we built an interactive modular canvas editor. The canvas parses the structure of the screen as nodes, allowing users to swap components, regenerate specific blocks, and preview responsiveness in real-time. Try swapping the component layouts in the compiler sandbox below:
                </p>
      
                <!-- Interactive Sandbox Canvas -->
                <div class="interactive-flow-sandbox" style="margin: 2.5rem 0; padding: 1.5rem; background: var(--bg-card); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color);">
                  <span class="font-mono label" style="font-size: 0.65rem;">INTERACTIVE SANDBOX: GEN-UI CANVAS CONTROL</span>
                  <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
                    <!-- Control tabs -->
                    <div style="display: flex; gap: 0.5rem; justify-content: center;" class="filter-bar" role="tablist" aria-label="Select canvas component">
                      <button class="filter-btn active" role="tab" aria-selected="true" data-component="login" id="aura-btn-login">Login Card</button>
                      <button class="filter-btn" role="tab" aria-selected="false" data-component="analytics" id="aura-btn-analytics">Analytics Grid</button>
                      <button class="filter-btn" role="tab" aria-selected="false" data-component="product" id="aura-btn-product">Product Card</button>
                    </div>
                    
                    <!-- Visual Canvas Mockup -->
                    <div style="min-height: 280px; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; padding: 1.5rem; position: relative; overflow: hidden;">
                      <div id="aura-canvas-preview" style="width: 100%; max-width: 380px; transition: all 0.3s ease;">
                        <!-- Injected component -->
                      </div>
                    </div>
                    
                    <p id="aura-sandbox-status" class="font-mono" style="font-size: 0.8rem; text-align: center; color: var(--color-brand); margin: 0;">
                      ⚡ Component compiled in 210ms with design tokens.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <!-- Chapter 3 -->
            <div class="solution-chapter-content" data-chapter-content="3">
              <section class="body-chapter" style="padding-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-accent)">CHAPTER 3</span>
                <h2 class="chapter-title font-serif">Latency &amp; Performance Benchmarks</h2>
                <p class="chapter-desc">
                  By compiling layouts from structured JSON objects rather than interpreting raw strings, we achieved a modular component generation latency of just 210ms. Moreover, the token-driven layout engine enforces strict contrast ratio checks, achieving 100% compliance with WCAG AA accessibility standards.
                </p>
      
                <div class="project-media-grid" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin: 2rem 0; justify-content: center;">
                  <div class="project-media-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); display: flex; justify-content: center; max-width: 600px; margin: 0 auto; width: 100%;">
                    <img src="./aura_thumbnail.png" alt="Aura AI Node and Layout Editor Showcase" style="width: 100%; height: auto; display: block; object-fit: cover;">
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

      </div>
    </article>
  `;
}

export function renderProject4Sidebar() {
  return `
    <!-- Top Section -->
    <div class="project-sidebar-top sidebar-fade-in" style="display: flex; flex-direction: column; gap: 0.55rem;">
      ${brandLogoMark}
      <div class="project-sidebar-meta font-mono" style="font-size: 0.75rem; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 500;">
        AURA AI / 2024
      </div>
      <h2 class="project-sidebar-title font-serif" style="font-size: 2rem; font-weight: 400; line-height: 1.15; color: var(--text-primary); margin-top: 0.25rem; margin-bottom: 0.5rem;">
        Aura AI: Prompt-to-Interface Editor
      </h2>
      <p class="project-sidebar-desc font-sans" style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 1rem;">
        Reimagining prompt-to-interface design workflows by grounding AI generation loops within design tokens.
      </p>
      <a href="https://gokulux.framer.website/project-2" target="_blank" rel="noopener" class="project-sidebar-btn project-2-btn">
        more about project <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>
      </a>
    </div>

    <!-- Bottom Section -->
    <div class="project-sidebar-bottom sidebar-fade-in" style="margin-top: auto; display: flex; flex-direction: column; gap: 1.25rem;">
      <div class="project-sidebar-tags font-sans" style="font-size: 0.72rem; letter-spacing: 0.05em; font-weight: 600; color: var(--color-brand);">
        AI SYSTEMS / DESIGN TOOL
      </div>
      
      <div class="project-sidebar-specs" style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); font-family: var(--font-sans);">
        <div><strong style="color: var(--text-primary); font-weight: 600; font-family: var(--font-sans); font-size: 0.8rem; letter-spacing: 0.03em;">ROLE :</strong> Interaction & Design Systems Lead</div>
        <div><strong style="color: var(--text-primary); font-weight: 600; font-family: var(--font-sans); font-size: 0.8rem; letter-spacing: 0.03em;">CHALLENGE :</strong> Maintaining layout context and user trust during AI generation loops</div>
        <div><strong style="color: var(--text-primary); font-weight: 600; font-family: var(--font-sans); font-size: 0.8rem; letter-spacing: 0.03em;">IMPACT :</strong> Achieved 95% user retention rates and 210ms modular component generation latency</div>
      </div>
      
      ${sidebarActionGrid}
    </div>
  `;
}


// ==========================================================================
// MY AI WORKSHOP PAGE VIEW & CONTROLLER
// ==========================================================================
export function renderAIWorkshop() {
  return `
    <div class="collection-header stagger-el stagger-delay-1" style="margin-bottom: 2rem;">
      <h1 class="collection-title font-serif">My AI Workshop</h1>
      <p class="hero-bio">A creative sandbox showing experiments in Generative UI compilers, adaptive layouts, and dynamic helper behaviors.</p>
    </div>

    <div class="workshop-grid" style="display: grid; grid-template-columns: 1fr; gap: 2.5rem; width: 100%;">
      
      <!-- Experiment: Social Media Metadata Extractor (Browser Extension) -->
      <section class="interactive-flow-sandbox stagger-el stagger-delay-2" style="padding: 1.75rem; background: var(--bg-card); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color);">
        <div style="margin-bottom: 1.5rem;">
          <span class="font-mono label" style="font-size: 0.65rem;">LIVE TOOL INTEGRATION</span>
          <h2 class="font-serif" style="font-size: 1.65rem; margin-top: 0.25rem; font-weight: 500; color: var(--text-primary);">Primary Media Helper & Extractor</h2>
          <p class="font-sans" style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">A browser extension that extracts, audits, and previews video metadata from our primary media website, cutting cross-posting preparation time for social media managers from 15 minutes to under 30 seconds.</p>
        </div>

        <!-- Workflow Efficiency Compass / Before & After -->
        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 2rem; padding: 1.25rem; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 0.9rem;">⚡</span>
              <span class="font-mono" style="font-size: 0.75rem; font-weight: bold; color: var(--text-primary);">WORKFLOW INTENT & IMPACT</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <span class="font-mono" style="padding: 0.15rem 0.5rem; font-size: 0.65rem; border-radius: 4px; background: rgba(39, 201, 63, 0.12); color: #27c93f; font-weight: 600;">95% TIME SAVED</span>
              <span class="font-mono" style="padding: 0.15rem 0.5rem; font-size: 0.65rem; border-radius: 4px; background: rgba(138, 43, 226, 0.12); color: var(--color-brand); font-weight: 600;">AUTOMATED METADATA SYNC</span>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
            <!-- Left Side: Manual Copier -->
            <div style="padding: 1rem; border-radius: 8px; background: var(--bg-card); border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 0.5rem; text-align: left;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="font-mono" style="font-size: 0.65rem; color: #ff5f56; font-weight: bold; display: flex; align-items: center; gap: 0.3rem;">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span> LEGACY MANUAL MODE
                </span>
                <span style="font-size: 0.65rem; color: var(--text-muted);">Duration: ~15 mins per video</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.45; margin: 0;">
                Previously, social media managers had to manually copy video titles, descriptions, category tags, and custom metadata strings from the primary media platform dashboard. They then had to manually upload thumbnails and adjust tags across multiple social networks. This was slow, repetitive, and prone to typos.
              </p>
            </div>

            <!-- Right Side: Extension Extractor -->
            <div style="padding: 1rem; border-radius: 8px; background: var(--bg-card); border: 1px solid rgba(39, 201, 63, 0.15); display: flex; flex-direction: column; gap: 0.5rem; text-align: left;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="font-mono" style="font-size: 0.65rem; color: #27c93f; font-weight: bold; display: flex; align-items: center; gap: 0.3rem;">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span> HELPER BROWSER EXTENSION
                </span>
                <span style="font-size: 0.65rem; color: var(--text-muted);">Duration: &lt; 30 seconds</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.45; margin: 0;">
                Our integrated browser helper runs directly on the primary media portal, extracting structured metadata instantly in 150ms. It automatically formats the metadata, validates Open Graph/Twitter Card specifications, and renders multi-platform card previews for rapid approval.
              </p>
            </div>
          </div>
        </div>

        <!-- Presets & Input Bar -->
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
            <button class="preset-btn font-mono active" id="ws-preset-sansyl" style="padding: 0.4rem 0.75rem; font-size: 0.7rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); cursor: pointer; font-weight: 600; transition: all 0.2s;">Primary Media Hub</button>
            <button class="preset-btn font-mono" id="ws-preset-youtube" style="padding: 0.4rem 0.75rem; font-size: 0.7rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); cursor: pointer; font-weight: 600; transition: all 0.2s;">YouTube Video</button>
            <button class="preset-btn font-mono" id="ws-preset-twitter" style="padding: 0.4rem 0.75rem; font-size: 0.7rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); cursor: pointer; font-weight: 600; transition: all 0.2s;">Twitter/X Post</button>
          </div>
          
          <div style="display: flex; gap: 0.5rem;">
            <input type="text" id="ws-extractor-input" value="https://primemedia-hub.internal/videos/digital-transformation-preview" style="flex: 1; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-family: var(--font-mono); font-size: 0.8rem;" aria-label="Target URL for metadata extraction">
            <button id="ws-extractor-btn" style="padding: 0.75rem 1.5rem; border: none; border-radius: 8px; background: linear-gradient(135deg, var(--color-brand) 0%, var(--color-accent) 100%); color: #fff; font-weight: bold; font-size: 0.8rem; cursor: pointer; transition: opacity 0.2s;">Extract</button>
          </div>
        </div>

        <div class="sandbox-inner-grid-layout sandbox-inner-grid" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
          <!-- Left Side: Terminal Log Streamer -->
          <div class="terminal-window" style="margin: 0; min-height: 120px; display: flex; flex-direction: column;">
            <div class="terminal-header">
              <span class="terminal-dot"></span>
              <span class="terminal-dot yellow"></span>
              <span class="terminal-dot green"></span>
              <span class="terminal-title">media-helper-logs</span>
            </div>
            <div id="ws-ext-terminal" class="terminal-body" style="flex: 1; min-height: 110px;">
              <!-- Logs will print here -->
            </div>
          </div>

          <!-- Right Side: Interactive Browser Mockup -->
          <div style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden; display: flex; flex-direction: column; min-height: 380px; position: relative;">
            <!-- Browser Title Bar / Address Bar -->
            <div style="background: var(--bg-card); padding: 0.6rem 1rem; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; gap: 1rem;">
              <!-- Circles -->
              <div style="display: flex; gap: 0.35rem;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: #ff5f56; display: inline-block;"></span>
                <span style="width: 8px; height: 8px; border-radius: 50%; background: #ffbd2e; display: inline-block;"></span>
                <span style="width: 8px; height: 8px; border-radius: 50%; background: #27c93f; display: inline-block;"></span>
              </div>
              <!-- Address input -->
              <div style="flex: 1; display: flex; align-items: center; background: var(--bg-secondary); border-radius: 6px; border: 1px solid var(--border-color); padding: 0.25rem 0.75rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right: 6px; color: var(--text-muted);"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span id="ws-ext-browser-url">https://primemedia-hub.internal/videos/digital-transformation-preview</span>
              </div>
              <!-- Extension Action Icon -->
              <button id="ws-ext-trigger-icon" title="Open Media Extractor Extension" style="border: none; background: transparent; cursor: pointer; color: var(--color-brand); display: flex; align-items: center; justify-content: center; padding: 0.25rem; border-radius: 4px; transition: background 0.2s;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(45deg);"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </button>
            </div>

            <!-- Browser Page Viewport -->
            <div style="position: relative; flex: 1; padding: 1.5rem; background: var(--bg-card); display: flex; flex-direction: column; gap: 1rem; overflow: hidden;">
              
              <!-- Mock Website Hero and Content wireframe -->
              <div id="ws-ext-site-content" style="transition: opacity 0.3s; text-align: left;">
                <div style="width: 80px; height: 16px; background: rgba(138,43,226,0.15); border-radius: 4px; margin-bottom: 0.5rem;"></div>
                <h3 id="ws-ext-site-title" class="font-serif" style="font-size: 1.25rem; margin: 0 0 0.5rem 0; color: var(--text-primary);">PrimeMedia Hub | Direct Metadata Extraction</h3>
                <p id="ws-ext-site-desc" style="font-size: 0.75rem; color: var(--text-secondary); margin: 0 0 1rem 0; line-height: 1.4;">Video asset upload and distribution metadata. Optimized for cross-platform content syndication (og:title, og:video, tags).</p>
                
                <!-- Large media container mockup -->
                <div id="ws-ext-site-image" style="width: 100%; height: 120px; border-radius: 8px; background: linear-gradient(135deg, #0f0c20 0%, #15102a 50%, #201740 100%); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.7); font-family: var(--font-mono); font-size: 0.65rem; font-weight: bold;">
                  COVER PREVIEW IMAGE
                </div>
              </div>

              <!-- Floating Extension Popup overlay (Glassmorphic panel) -->
              <div id="ws-ext-popup" style="position: absolute; top: 1rem; right: 1rem; width: 280px; bottom: 1rem; background: rgba(30,30,30,0.88); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid var(--border-color); border-radius: 12px; box-shadow: var(--shadow-lg); display: flex; flex-direction: column; transform: translateX(320px); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); z-index: 10;">
                <!-- Popup Header -->
                <div style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.15);">
                  <div style="display: flex; align-items: center; gap: 0.4rem;">
                    <span style="font-size: 0.85rem;">🔌</span>
                    <span class="font-mono" style="font-size: 0.68rem; font-weight: bold; color: var(--text-primary); letter-spacing: 0.05em;">MEDIA EXTRACTOR</span>
                  </div>
                  <!-- Close btn -->
                  <button id="ws-ext-popup-close" style="border: none; background: transparent; color: var(--text-muted); cursor: pointer; font-size: 0.85rem; padding: 0.2rem;">&times;</button>
                </div>
                <!-- Popup Content -->
                <div style="padding: 1rem; flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; text-align: left;">
                  
                  <!-- Metatags checklist -->
                  <div>
                    <span class="font-mono" style="font-size: 0.55rem; color: var(--text-muted); text-transform: uppercase; font-weight: bold; display: block; margin-bottom: 0.4rem;">Metatags Check</span>
                    <div style="display: flex; flex-direction: column; gap: 0.35rem;" id="ws-ext-popup-checklist">
                      <!-- Checkboxes dynamically populated -->
                    </div>
                  </div>

                  <!-- Social media card preview mockup -->
                  <div>
                    <span class="font-mono" style="font-size: 0.55rem; color: var(--text-muted); text-transform: uppercase; font-weight: bold; display: block; margin-bottom: 0.4rem;">LinkedIn Card Preview</span>
                    <div style="border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); overflow: hidden;">
                      <!-- Mini Image -->
                      <div id="ws-ext-popup-card-image" style="height: 60px; background: linear-gradient(135deg, #0f0c20 0%, #15102a 50%, #201740 100%);"></div>
                      <!-- Text -->
                      <div style="padding: 0.5rem; font-size: 0.65rem; display: flex; flex-direction: column; gap: 0.2rem;">
                        <span id="ws-ext-popup-card-domain" style="font-size: 0.55rem; color: var(--text-muted); text-transform: uppercase; font-family: var(--font-mono);">primemedia-hub.internal</span>
                        <strong id="ws-ext-popup-card-title" style="color: var(--text-primary); text-overflow: ellipsis; overflow: hidden; white-space: nowrap; display: block;">PrimeMedia Hub | Direct Extraction</strong>
                      </div>
                    </div>
                  </div>

                  <!-- Audit Results table -->
                  <div>
                    <span class="font-mono" style="font-size: 0.55rem; color: var(--text-muted); text-transform: uppercase; font-weight: bold; display: block; margin-bottom: 0.4rem;">Validation Checks</span>
                    <div style="display: flex; flex-direction: column; gap: 0.35rem;" id="ws-ext-popup-validation">
                      <!-- Dynamically populated -->
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function initAIWorkshopSandbox() {
  const extPresetSansyl = document.getElementById('ws-preset-sansyl');
  if (!extPresetSansyl) return;

  // Experiment 3: Metadata Extractor Controller
  const extPresetYoutube = document.getElementById('ws-preset-youtube');
  const extPresetTwitter = document.getElementById('ws-preset-twitter');
  const extBtn = document.getElementById('ws-extractor-btn');
  const extInput = document.getElementById('ws-extractor-input');
  
  const extBrowserUrl = document.getElementById('ws-ext-browser-url');
  const extSiteTitle = document.getElementById('ws-ext-site-title');
  const extSiteDesc = document.getElementById('ws-ext-site-desc');
  const extSiteImage = document.getElementById('ws-ext-site-image');
  
  const extTerminal = document.getElementById('ws-ext-terminal');
  const extPopup = document.getElementById('ws-ext-popup');
  const extPopupClose = document.getElementById('ws-ext-popup-close');
  const extTriggerIcon = document.getElementById('ws-ext-trigger-icon');
  
  const extPopupChecklist = document.getElementById('ws-ext-popup-checklist');
  const extPopupCardImage = document.getElementById('ws-ext-popup-card-image');
  const extPopupCardTitle = document.getElementById('ws-ext-popup-card-title');
  const extPopupCardDomain = document.getElementById('ws-ext-popup-card-domain');
  const extPopupValidation = document.getElementById('ws-ext-popup-validation');

  const extPresets = {
    sansyl: {
      url: 'https://primemedia-hub.internal/videos/digital-transformation-preview',
      title: 'PrimeMedia Hub | Direct Metadata Extraction',
      description: 'Video asset upload and distribution metadata. Optimized for cross-platform content syndication (og:title, og:video, tags).',
      imageBg: 'linear-gradient(135deg, #0f0c20 0%, #15102a 50%, #201740 100%)',
      domain: 'primemedia-hub.internal',
      tags: [
        { name: 'og:title', found: true, val: 'PrimeMedia Hub | Direct Extraction' },
        { name: 'og:description', found: true, val: 'Video asset upload and distribution...' },
        { name: 'og:image', found: true, val: 'cover_preview.png' },
        { name: 'twitter:card', found: true, val: 'summary_large_image' }
      ],
      validation: [
        { name: 'og:title Length', status: 'pass', detail: '37 chars (Optimal)' },
        { name: 'og:description Length', status: 'pass', detail: '110 chars (Optimal)' },
        { name: 'Alt Text Attribute', status: 'pass', detail: 'Found: "Media cover image"' },
        { name: 'SSL Security', status: 'pass', detail: 'Secure connection verified' }
      ],
      logs: [
        { text: '$ run media-extractor --url="https://primemedia-hub.internal/videos/digital-transformation-preview"', type: 'cmd' },
        { text: '🔍 Initializing metadata extraction audit...', type: 'info' },
        { text: '🌐 Connecting to PrimeMedia Asset Manager API...', type: 'info' },
        { text: '✨ Extracted 12 media tag nodes, category index, and high-res video thumbnails', type: 'info' },
        { text: '✅ Cross-platform syndication validation check: Passed', type: 'success' },
        { text: '🚀 Sync package generated for Buffer/Hootsuite APIs', type: 'success' }
      ]
    },
    youtube: {
      url: 'https://youtube.com/watch?v=ai-ux-future',
      title: 'The Future of Generative UI Design Systems',
      description: 'Deep dive into streaming components, JSON compilation, and adaptive user interfaces.',
      imageBg: 'linear-gradient(135deg, #e52d27 0%, #b31217 100%)',
      domain: 'youtube.com',
      tags: [
        { name: 'og:title', found: true, val: 'The Future of Generative UI' },
        { name: 'og:description', found: true, val: 'Deep dive into streaming...' },
        { name: 'og:image', found: true, val: 'thumb.jpg' },
        { name: 'twitter:card', found: true, val: 'summary_large_image' }
      ],
      validation: [
        { name: 'og:title Length', status: 'pass', detail: '36 chars (Optimal)' },
        { name: 'og:description Length', status: 'pass', detail: '84 chars (Optimal)' },
        { name: 'Alt Text Attribute', status: 'warning', detail: 'Missing og:image:alt tag attribute' },
        { name: 'SSL Security', status: 'pass', detail: 'Secure connection verified' }
      ],
      logs: [
        { text: '$ run media-extractor --url="https://youtube.com/watch?v=ai-ux-future"', type: 'cmd' },
        { text: '🔍 Initializing metadata extraction audit...', type: 'info' },
        { text: '🌐 Parsing HTML document from youtube.com...', type: 'info' },
        { text: '✨ Extracted Open Graph & Twitter Card schema nodes', type: 'info' },
        { text: '⚠️ WARNING: Missing alt text parameter for cover image', type: 'cmd' },
        { text: '🚀 Extension audit finished (0 errors, 1 warning)', type: 'success' }
      ]
    },
    twitter: {
      url: 'https://x.com/sansylgroup/status/10293847',
      title: 'PrimeMedia Group on X: "We are live with our new developer console..."',
      description: 'Announcing the public beta release of Sansyl CLI, facilitating real-time metadata validations and headless builds.',
      imageBg: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      domain: 'x.com',
      tags: [
        { name: 'og:title', found: true, val: 'PrimeMedia Group on X: "We are live..."' },
        { name: 'og:description', found: true, val: 'Announcing the public beta...' },
        { name: 'og:image', found: true, val: 'hero.jpg' },
        { name: 'twitter:card', found: true, val: 'summary' }
      ],
      validation: [
        { name: 'og:title Length', status: 'pass', detail: '65 chars (Optimal)' },
        { name: 'og:description Length', status: 'pass', detail: '112 chars (Optimal)' },
        { name: 'Alt Text Attribute', status: 'pass', detail: 'Found: "Sansyl console terminal"' },
        { name: 'SSL Security', status: 'pass', detail: 'Secure connection verified' }
      ],
      logs: [
        { text: '$ run media-extractor --url="https://x.com/sansylgroup/status/10293847"', type: 'cmd' },
        { text: '🔍 Initializing metadata extraction audit...', type: 'info' },
        { text: '🌐 Parsing HTML document from x.com...', type: 'info' },
        { text: '✨ Extracted Open Graph & Twitter Card schema nodes', type: 'info' },
        { text: '✅ Alt attributes & title lengths validated successfully', type: 'success' },
        { text: '🚀 Extension audit finished (0 errors, 0 warnings)', type: 'success' }
      ]
    }
  };

  let activePreset = 'sansyl';
  let isExtracting = false;

  function loadPreset(presetKey) {
    if (isExtracting) return;
    activePreset = presetKey;
    const preset = extPresets[presetKey];

    // Update active class on buttons
    [extPresetSansyl, extPresetYoutube, extPresetTwitter].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    const currentBtn = document.getElementById(`ws-preset-${presetKey}`);
    if (currentBtn) currentBtn.classList.add('active');

    // Update input field and browser view
    if (extInput) extInput.value = preset.url;
    if (extBrowserUrl) extBrowserUrl.textContent = preset.url;
    if (extSiteTitle) extSiteTitle.textContent = preset.title;
    if (extSiteDesc) extSiteDesc.textContent = preset.description;
    if (extSiteImage) {
      extSiteImage.style.background = preset.imageBg;
    }

    // Hide extension panel
    if (extPopup) {
      extPopup.style.transform = 'translateX(320px)';
    }

    // Empty terminal
    if (extTerminal) extTerminal.innerHTML = '';
  }

  function runExtraction() {
    if (isExtracting) return;
    isExtracting = true;

    // Reset popup
    if (extPopup) {
      extPopup.style.transform = 'translateX(320px)';
    }

    // Clear logs
    if (extTerminal) extTerminal.innerHTML = '';

    const preset = extPresets[activePreset];
    const lines = preset.logs;
    let lineIdx = 0;

    function printNextLog() {
      if (lineIdx < lines.length) {
        const line = lines[lineIdx];
        const p = document.createElement('div');
        p.className = `terminal-line ${line.type}`;
        p.textContent = line.text;
        if (extTerminal) extTerminal.appendChild(p);
        
        lineIdx++;
        setTimeout(printNextLog, 150);
      } else {
        // Run final presentation and open popup
        setTimeout(() => {
          // Populate checklist
          if (extPopupChecklist) {
            extPopupChecklist.innerHTML = preset.tags.map(t => `
              <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.7rem;">
                <span style="color: var(--color-success); font-weight: bold;">✓</span>
                <span style="font-family: var(--font-mono); color: var(--text-secondary);">${t.name}:</span>
                <span style="color: var(--text-primary); text-overflow: ellipsis; overflow: hidden; white-space: nowrap; max-width: 140px;" title="${t.val}">${t.val}</span>
              </div>
            `).join('');
          }

          // Populate visual card preview
          if (extPopupCardImage) {
            extPopupCardImage.style.background = preset.imageBg;
          }
          if (extPopupCardDomain) {
            extPopupCardDomain.textContent = preset.domain;
          }
          if (extPopupCardTitle) {
            extPopupCardTitle.textContent = preset.title;
          }

          // Populate validations
          if (extPopupValidation) {
            extPopupValidation.innerHTML = preset.validation.map(v => `
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.65rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.25rem;">
                <span style="color: var(--text-secondary);">${v.name}</span>
                <span style="padding: 0.1rem 0.35rem; border-radius: 4px; font-weight: 600; font-size: 0.55rem; ${
                  v.status === 'pass' 
                    ? 'background: rgba(39, 201, 63, 0.15); color: #27c93f;' 
                    : 'background: rgba(255, 189, 46, 0.15); color: #ffbd2e;'
                }">${v.detail}</span>
              </div>
            `).join('');
          }

          // Open popup
          if (extPopup) {
            extPopup.style.transform = 'translateX(0)';
          }
          isExtracting = false;
        }, 200);
      }
    }

    printNextLog();
  }

  // Bind Preset Clickers
  if (extPresetSansyl) extPresetSansyl.addEventListener('click', () => loadPreset('sansyl'));
  if (extPresetYoutube) extPresetYoutube.addEventListener('click', () => loadPreset('youtube'));
  if (extPresetTwitter) extPresetTwitter.addEventListener('click', () => loadPreset('twitter'));

  // Bind Action Buttons
  if (extBtn) extBtn.addEventListener('click', runExtraction);
  if (extTriggerIcon) extTriggerIcon.addEventListener('click', runExtraction);
  
  if (extPopupClose) {
    extPopupClose.addEventListener('click', () => {
      if (extPopup) extPopup.style.transform = 'translateX(320px)';
    });
  }

  // Initialize preset views
  loadPreset('sansyl');

  // Tooltip Logic
  if (alertDot && tooltipCard) {
    alertDot.addEventListener('click', (e) => {
      e.stopPropagation();
      tooltipCard.classList.toggle('show');
    });

    // Dismiss tooltip
    if (btnDismiss) {
      btnDismiss.addEventListener('click', (e) => {
        e.stopPropagation();
        tooltipCard.classList.remove('show');
      });
    }

    // Apply optimization simulator
    if (btnApply) {
      btnApply.addEventListener('click', (e) => {
        e.stopPropagation();
        tooltipCard.classList.remove('show');
        alertDot.style.background = 'var(--color-success)';
        alertDot.style.pointerEvents = 'none';
        alertDot.title = 'Optimization applied!';
        alertDot.setAttribute('aria-label', 'Optimization applied!');
        alertDot.classList.remove('pulsing-glow-dot');
        alertDot.style.width = '10px';
        alertDot.style.height = '10px';
        alertDot.style.display = 'inline-block';
        alertDot.style.borderRadius = '50%';
        alertDot.style.cursor = 'default';
      });
    }

    // Close on body click
    document.addEventListener('click', () => {
      tooltipCard.classList.remove('show');
    });
  }



  // Run initial compile
  compileLayout('chart');
}

/**
 * Project 3 (Bank of Palestine) Interactive Compliance Mapping Deck Controller
 */
function initProject3ComplianceDeck() {
  // Static bento layout, no interactive elements required!
}

/**
 * Project 3 (Bank of Palestine) Compliance Onboarding Flowchart Simulator Controller
 */
function initProject3Flowchart() {
  const travelDot = document.getElementById('bop-flow-travel-dot');
  if (travelDot) {
    travelDot.style.animation = 'bopFlowTravel 4.5s linear infinite';
  }
}

// ==========================================================================
// PORTFOLIO SANDBOX CONTROLLERS
// ==========================================================================

/**
 * Project 1 (Yooki) Syllabus map and AI sandbox controls
 */
export function initProject1Sandbox() {
  const userBubble = document.getElementById('ai-user-bubble');
  const responseBubble = document.getElementById('ai-response-bubble');
  const promptChips = document.querySelectorAll('.prompt-chip');
  
  const responses = {
    polity: {
      question: '"I studied Panchayati Raj today. What should I review next?"',
      answer: '"Polity is strong at 61% coverage. Since Panchayati Raj connects directly to <strong>Fiscal Federalism</strong> in Economy (where you have a 12% coverage gap), I recommend starting with Fiscal Federalism to bridge cross-subject concepts."'
    },
    exam: {
      question: '"Which area should I revise before my mock exam next week?"',
      answer: '"Environment is currently your most neglected area (last updated 18 days ago, 34% coverage). Given the recent mock exam weights, prioritize <strong>Biodiversity &amp; Conservation</strong> first to maximize score potential."'
    }
  };
  
  let isTyping = false;
  
  if (promptChips.length > 0 && userBubble && responseBubble) {
    promptChips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (isTyping) return;
        const type = chip.getAttribute('data-prompt');
        const response = responses[type];
        
        if (response) {
          userBubble.textContent = response.question;
          responseBubble.innerHTML = '<span class="typing-loader"></span>';
          isTyping = true;
          
          setTimeout(() => {
            responseBubble.innerHTML = '';
            const words = response.answer.split(' ');
            let index = 0;
            
            function printNextWord() {
              if (index < words.length) {
                responseBubble.innerHTML = words.slice(0, index + 1).join(' ');
                index++;
                setTimeout(printNextWord, 45); // 45ms per word
              } else {
                responseBubble.innerHTML = response.answer; // restore full HTML
                isTyping = false;
              }
            }
            printNextWord();
          }, 850);
        }
      });
    });
  }
}


/**
 * Project 2 (Cendrol) State flow timeline controls
 */
export function initProject2Sandbox() {
  const steps = document.querySelectorAll('#state-sandbox .state-step');
  const statusMsg = document.getElementById('state-status-msg');
  
  const stepMsgs = {
    '1': 'Stage 1 (Submitted): Your invoice images have been submitted and are queued for central accounting desk audits.',
    '2': 'Stage 2 (Audited): Receipt details have been parsed by OCR and validated by our finance automation team.',
    '3': 'Stage 3 (Approved): CFO has signed off on the expense audit. Disbursement is scheduled.',
    '4': 'Stage 4 (Reimbursed): Funds have been dispatched to your corporate wallet. Transaction complete!'
  };
  
  steps.forEach(step => {
    step.addEventListener('click', () => {
      const stepNum = step.getAttribute('data-step');
      
      // Update active states
      steps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      
      // Update message with colors
      if (stepNum === '4') {
        statusMsg.style.color = '#34c759'; // Success green
      } else if (stepNum === '1') {
        statusMsg.style.color = 'var(--color-accent)'; // Orange
      } else {
        statusMsg.style.color = 'var(--color-brand)'; // Purple
      }
      statusMsg.textContent = stepMsgs[stepNum];
    });
  });
}

export function initCendrolScrollAnimation() {
  const section = document.querySelector('.cendrol-scroll-section');
  if (!section) return;

  function handleScroll() {
    const section = document.querySelector('.cendrol-scroll-section');
    if (!section) {
      window.removeEventListener('scroll', handleScroll);
      return;
    }
    
    const steps = section.querySelectorAll('.cendrol-narrative-step');
    const visuals = section.querySelectorAll('.cendrol-visual-item');
    if (!steps.length || !visuals.length) return;

    const sectionRect = section.getBoundingClientRect();
    const sectionHeight = sectionRect.height;
    
    const totalScrollable = sectionHeight - window.innerHeight;
    if (totalScrollable <= 0) return;
    
    let scrollProgress = -sectionRect.top / totalScrollable;
    scrollProgress = Math.max(0, Math.min(scrollProgress, 0.99));

    const activeIndex = Math.floor(scrollProgress * steps.length);

    steps.forEach((step, idx) => {
      if (idx === activeIndex) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    visuals.forEach((visual, idx) => {
      if (idx === activeIndex) {
        if (!visual.classList.contains('active')) {
          visual.classList.add('active');
          const video = visual.querySelector('video');
          if (video) {
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        }
      } else {
        visual.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Project 3 (Bank of Palestine) First Rejected Draft Mockups Carousel Controller
 */

/**
 * Project 3 (Bank of Palestine) KYC Mobile onboarding phone simulator
 */
export function initProject3Sandbox() {
  const container = document.getElementById('kyc-screen-content');
  const statusMsg = document.getElementById('kyc-simulator-status');
  if (!container) return;

  let currentStep = 1;
  let selectedAccount = 'current';

  function renderStep() {
    container.innerHTML = screens[currentStep]();
    bindEvents();
  }

  const screens = {
    1: () => `
      <div style="display: flex; flex-direction: column; gap: 0.8rem; text-align: left; animation: fadeIn 0.3s ease-out;">
        <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: bold; letter-spacing: 0.05em;">STEP 01 / 05</span>
        <h3 class="font-serif" style="font-size: 1.35rem; color: var(--text-primary); margin: 0; line-height: 1.2;">Remote Registration</h3>
        <p class="font-sans" style="font-size: 0.75rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">Enter your mobile credentials. PMA regulations mandate a valid mobile number matched to your national identity.</p>
        
        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin: 0.5rem 0;">
          <div>
            <label class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">MOBILE PHONE NUMBER</label>
            <input type="text" value="+970 599 000 000" style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 6px; background: var(--bg-card); color: var(--text-primary); font-size: 0.8rem;" />
          </div>
          <div>
            <label class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">NATIONAL ID NUMBER</label>
            <input type="text" value="900000000" style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 6px; background: var(--bg-card); color: var(--text-primary); font-size: 0.8rem;" />
          </div>
        </div>
        <button id="kyc-next-btn" style="width: 100%; padding: 0.7rem; border: none; border-radius: 6px; background: var(--color-bop); color: white; font-weight: 600; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;">Send OTP Verification</button>
      </div>
    `,
    2: () => `
      <div style="display: flex; flex-direction: column; gap: 0.8rem; text-align: left; animation: fadeIn 0.3s ease-out;">
        <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: bold; letter-spacing: 0.05em;">STEP 02 / 05</span>
        <h3 class="font-serif" style="font-size: 1.35rem; color: var(--text-primary); margin: 0; line-height: 1.2;">Verify Phone Number</h3>
        <p class="font-sans" style="font-size: 0.75rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">We sent a 6-digit OTP code to +970 599 000 000. Matching telecom records prevents identity fraud.</p>
        
        <div style="display: flex; justify-content: space-between; gap: 0.3rem; margin: 0.75rem 0;">
          ${[1, 2, 3, 4, 5, 6].map(i => `<div style="flex: 1; height: 36px; border: 1px solid var(--color-bop); border-radius: 6px; background: var(--bg-card); display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-primary); font-size: 0.9rem;">${i}</div>`).join('')}
        </div>
        <p style="font-size: 0.65rem; color: var(--text-muted); text-align: center; margin: 0;">Didn't receive the OTP? <span style="color: var(--color-bop); font-weight: 600; cursor: pointer;">Retry in 00:30</span></p>
        <button id="kyc-next-btn" style="width: 100%; padding: 0.7rem; border: none; border-radius: 6px; background: var(--color-bop); color: white; font-weight: 600; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;">Verify &amp; Continue</button>
      </div>
    `,
    3: () => `
      <div style="display: flex; flex-direction: column; gap: 0.8rem; text-align: left; animation: fadeIn 0.3s ease-out;">
        <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: bold; letter-spacing: 0.05em;">STEP 03 / 05</span>
        <h3 class="font-serif" style="font-size: 1.35rem; color: var(--text-primary); margin: 0; line-height: 1.2;">National ID Scanning</h3>
        <p class="font-sans" style="font-size: 0.75rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">Scan the physical Palestinian ID. Real-time OCR extracts name, birthdate, and ID number instantly.</p>
        
        <div style="height: 120px; border: 1.5px dashed var(--color-bop); border-radius: 8px; background: var(--bg-card); display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden; margin: 0.25rem 0;">
          <div style="position: absolute; width: 80%; height: 75%; border: 1px solid rgba(178, 21, 106, 0.4); border-radius: 4px; animation: bopScanLine 2s linear infinite;"></div>
          <span style="font-size: 1.5rem; margin-bottom: 0.25rem;">🪪</span>
          <span class="font-mono" style="font-size: 0.55rem; color: var(--color-bop); font-weight: bold;">OCR CAMERA READY</span>
        </div>
        
        <button id="kyc-next-btn" style="width: 100%; padding: 0.7rem; border: none; border-radius: 6px; background: var(--color-bop); color: white; font-weight: 600; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;">Capture &amp; Extract OCR</button>
      </div>
    `,
    4: () => `
      <div style="display: flex; flex-direction: column; gap: 0.8rem; text-align: left; animation: fadeIn 0.3s ease-out;">
        <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: bold; letter-spacing: 0.05em;">STEP 04 / 05</span>
        <h3 class="font-serif" style="font-size: 1.35rem; color: var(--text-primary); margin: 0; line-height: 1.2;">Liveness Verification</h3>
        <p class="font-sans" style="font-size: 0.75rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">Blink and look straight. Face scan biometrics are matched against governmental registers to verify liveness.</p>
        
        <div style="height: 120px; border-radius: 50%; width: 120px; border: 2px solid var(--color-bop); background: var(--bg-card); display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; margin: 0.25rem auto; position: relative;">
          <span style="font-size: 2.25rem;">👤</span>
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 2px solid var(--color-success); border-radius: 50%; opacity: 0.6; animation: pulse 2s infinite;"></div>
        </div>
        
        <button id="kyc-next-btn" style="width: 100%; padding: 0.7rem; border: none; border-radius: 6px; background: var(--color-bop); color: white; font-weight: 600; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;">Verify Biometrics</button>
      </div>
    `,
    5: () => `
      <div style="display: flex; flex-direction: column; gap: 0.8rem; text-align: left; animation: fadeIn 0.3s ease-out;">
        <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: bold; letter-spacing: 0.05em;">STEP 05 / 05</span>
        <h3 class="font-serif" style="font-size: 1.35rem; color: var(--text-primary); margin: 0; line-height: 1.2;">Select Account Type</h3>
        <p class="font-sans" style="font-size: 0.75rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">Choose your preferred account. Strict regulatory audit lines will finalize vault setup.</p>
        
        <div style="display: flex; gap: 0.5rem; margin: 0.5rem 0;">
          <div id="acc-type-current" class="acc-card ${selectedAccount === 'current' ? 'active' : ''}" style="flex: 1; padding: 0.6rem; border: 1.5px solid ${selectedAccount === 'current' ? 'var(--color-bop)' : 'var(--border-color)'}; border-radius: 8px; background: var(--bg-card); cursor: pointer; text-align: center; transition: all 0.2s;">
            <span style="font-size: 1.2rem; display: block; margin-bottom: 0.2rem;">💼</span>
            <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-primary); display: block;">Current</span>
            <span style="font-size: 0.58rem; color: var(--text-muted); display: block; margin-top: 0.1rem;">Daily Banking</span>
          </div>
          <div id="acc-type-saving" class="acc-card ${selectedAccount === 'saving' ? 'active' : ''}" style="flex: 1; padding: 0.6rem; border: 1.5px solid ${selectedAccount === 'saving' ? 'var(--color-bop)' : 'var(--border-color)'}; border-radius: 8px; background: var(--bg-card); cursor: pointer; text-align: center; transition: all 0.2s;">
            <span style="font-size: 1.2rem; display: block; margin-bottom: 0.2rem;">📈</span>
            <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-primary); display: block;">Savings</span>
            <span style="font-size: 0.58rem; color: var(--text-muted); display: block; margin-top: 0.1rem;">High Yield</span>
          </div>
        </div>
        
        <button id="kyc-next-btn" style="width: 100%; padding: 0.7rem; border: none; border-radius: 6px; background: var(--color-bop); color: white; font-weight: 600; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;">Submit &amp; Open Vault</button>
      </div>
    `,
    6: () => `
      <div style="display: flex; flex-direction: column; gap: 0.8rem; text-align: center; animation: fadeIn 0.3s ease-out; padding: 1rem 0;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
        <h3 class="font-serif" style="font-size: 1.45rem; color: var(--text-primary); margin: 0; line-height: 1.2;">Onboarding Complete</h3>
        <p class="font-sans" style="font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 1rem; line-height: 1.45;">Your remote bank vault has been provisioned. KYC compliance status: <strong style="color: var(--color-success);">VERIFIED</strong></p>
        
        <button id="kyc-next-btn" style="width: 100%; padding: 0.7rem; border: none; border-radius: 6px; background: var(--color-success); color: white; font-weight: 600; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;">Start Over</button>
      </div>
    `
  };

  const stepStatusMsgs = {
    1: '💡 Enter mobile and ID number to begin remote verification.',
    2: '💡 Validate OTP matched with governmental telecom registers.',
    3: '💡 Align ID inside frame. OCR will extract textual data instantly.',
    4: '💡 Face biometric matching with Civil Registry to ensure liveness.',
    5: '💡 Select account configuration under PMA guidelines.',
    6: '✅ Onboarding success! Bank vault created successfully.'
  };

  function bindEvents() {
    const nextBtn = document.getElementById('kyc-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep === 6) {
          currentStep = 1;
        } else {
          currentStep++;
        }
        if (statusMsg) {
          statusMsg.textContent = stepStatusMsgs[currentStep];
          statusMsg.style.color = currentStep === 6 ? 'var(--color-success)' : 'var(--color-bop)';
        }
        renderStep();
      });
    }

    const currentCard = document.getElementById('acc-type-current');
    const savingCard = document.getElementById('acc-type-saving');

    if (currentCard) {
      currentCard.addEventListener('click', () => {
        selectedAccount = 'current';
        renderStep();
      });
    }
    if (savingCard) {
      savingCard.addEventListener('click', () => {
        selectedAccount = 'saving';
        renderStep();
      });
    }
  }

  renderStep();
}

/**
 * Project 4 (Aura AI) Component generative canvas controls
 */
export function initProject4Sandbox() {
  const btnLogin = document.getElementById('aura-btn-login');
  const btnAnalytics = document.getElementById('aura-btn-analytics');
  const btnProduct = document.getElementById('aura-btn-product');
  const canvasPreview = document.getElementById('aura-canvas-preview');
  const statusMsg = document.getElementById('aura-sandbox-status');
  
  if (!canvasPreview) return;

  const components = {
    login: `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 12px; display: flex; flex-direction: column; gap: 1rem; box-shadow: var(--shadow-sm); text-align: left; animation: fadeIn 0.3s ease-out;">
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <h4 class="font-serif" style="margin: 0; font-size: 1.15rem; color: var(--text-primary); font-weight: 500;">Welcome back</h4>
          <p class="font-sans" style="margin: 0; font-size: 0.75rem; color: var(--text-secondary);">Enter your credentials to access your workspace</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <input type="text" placeholder="name@company.com" disabled style="width: 100%; padding: 0.6rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.8rem;" />
          <input type="password" placeholder="••••••••" disabled style="width: 100%; padding: 0.6rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.8rem;" />
        </div>
        <button style="width: 100%; padding: 0.6rem; border: none; border-radius: 6px; background: var(--color-brand); color: white; font-weight: 600; font-size: 0.8rem; cursor: not-allowed;">Sign In</button>
      </div>
    `,
    analytics: `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: 12px; display: flex; flex-direction: column; gap: 0.75rem; box-shadow: var(--shadow-sm); text-align: left; animation: fadeIn 0.3s ease-out;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h4 class="font-serif" style="margin: 0; font-size: 1rem; color: var(--text-primary); font-weight: 500;">Performance Metrics</h4>
          <span style="font-size: 0.65rem; padding: 0.2rem 0.4rem; background: rgba(52, 199, 89, 0.1); color: #34c759; border-radius: 4px; font-weight: 600; font-family: var(--font-mono);">LIVE</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.25rem;">
          <div style="padding: 0.75rem; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color);">
            <span class="font-sans" style="font-size: 0.65rem; color: var(--text-secondary);">Conversion Rate</span>
            <div class="font-mono" style="font-size: 1.25rem; font-weight: bold; color: var(--text-primary); margin-top: 0.25rem;">3.42%</div>
          </div>
          <div style="padding: 0.75rem; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color);">
            <span class="font-sans" style="font-size: 0.65rem; color: var(--text-secondary);">Active Sessions</span>
            <div class="font-mono" style="font-size: 1.25rem; font-weight: bold; color: var(--text-primary); margin-top: 0.25rem;">1,402</div>
          </div>
        </div>
      </div>
    `,
    product: `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; box-shadow: var(--shadow-sm); animation: fadeIn 0.3s ease-out;">
        <div style="height: 80px; background: linear-gradient(135deg, var(--color-brand) 0%, var(--color-accent) 100%); display: flex; align-items: center; justify-content: center; color: white;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" y2="12"/></svg>
        </div>
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h4 class="font-serif" style="margin: 0; font-size: 0.95rem; color: var(--text-primary); font-weight: 500;">Aura Pro Engine</h4>
            <span class="font-mono" style="font-size: 0.75rem; font-weight: bold; color: var(--color-accent);">$49/mo</span>
          </div>
          <p class="font-sans" style="margin: 0; font-size: 0.7rem; color: var(--text-secondary); line-height: 1.3;">Fully integrated layout compiling engine with local LLM schema alignment.</p>
          <button style="width: 100%; padding: 0.5rem; border: 1px solid var(--color-brand); border-radius: 6px; background: transparent; color: var(--color-brand); font-weight: 600; font-size: 0.75rem; cursor: not-allowed; margin-top: 0.25rem;">Deploy Instance</button>
        </div>
      </div>
    `
  };

  let compileTimeout;

  function updateComponent(compType) {
    [btnLogin, btnAnalytics, btnProduct].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    const activeBtn = document.getElementById(`aura-btn-${compType}`);
    if (activeBtn) activeBtn.classList.add('active');

    if (statusMsg) {
      statusMsg.style.color = 'var(--color-brand)';
      statusMsg.textContent = `⚡ Compiling ${compType} component... parsing prompt schema...`;
    }

    if (compileTimeout) clearTimeout(compileTimeout);

    compileTimeout = setTimeout(() => {
      if (statusMsg) {
        statusMsg.textContent = `⚡ Aligning component constraints... rendering layout tree...`;
      }
      
      compileTimeout = setTimeout(() => {
        if (statusMsg) {
          statusMsg.style.color = '#34c759';
          statusMsg.textContent = `✅ Compiled successfully! Hot-reloaded preview canvas.`;
        }
        canvasPreview.innerHTML = components[compType];
      }, 600);
    }, 400);
  }

  if (btnLogin) btnLogin.addEventListener('click', () => updateComponent('login'));
  if (btnAnalytics) btnAnalytics.addEventListener('click', () => updateComponent('analytics'));
  if (btnProduct) btnProduct.addEventListener('click', () => updateComponent('product'));

  updateComponent('login');
}

/**
 * Global Chapter tab-switcher inside case studies
 */
export function initSolutionTabs() {
  const container = document.querySelector('.project-body');
  if (!container) return;

  const tabBtns = container.querySelectorAll('.solution-tab-btn');
  const chapterContents = container.querySelectorAll('.solution-chapter-content');

  /**
   * Load and play a lazy video inside a newly-visible tab panel.
   * Videos use data-src / data-lazy-video to defer network requests.
   */
  function loadVideoInPanel(panel) {
    const videos = panel.querySelectorAll('video[data-lazy-video]');
    videos.forEach(video => {
      if (!video.dataset.loaded) {
        const source = video.querySelector('source[data-src]');
        if (source) {
          source.src = source.dataset.src;
          video.load();
        }
        video.dataset.loaded = 'true';
      }
      video.play().catch(() => {});
    });
  }

  function pauseVideoInPanel(panel) {
    const videos = panel.querySelectorAll('video[data-lazy-video]');
    videos.forEach(video => {
      if (!video.paused) video.pause();
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetChapter = btn.getAttribute('data-chapter');
      if (!targetChapter) return;

      tabBtns.forEach(b => {
        if (b.getAttribute('data-chapter') === targetChapter) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      chapterContents.forEach(content => {
        if (content.getAttribute('data-chapter-content') === targetChapter) {
          content.classList.add('active');
          loadVideoInPanel(content);   // ← load/play on tab open
        } else {
          content.classList.remove('active');
          pauseVideoInPanel(content);  // ← pause on tab hide
        }
      });

      const pathContainer = container.querySelector('.solution-path-container');
      if (pathContainer) {
        const rect = pathContainer.getBoundingClientRect();
        if (rect.top < 0) {
          pathContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Auto-load video in the initially-active tab (chapter 1 is default)
  const activePanel = container.querySelector('.solution-chapter-content.active');
  if (activePanel) loadVideoInPanel(activePanel);
}


/**
 * Category filter buttons on the Work list page
 */
export function initWorkFilters() {
  const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
  const projectRows = document.querySelectorAll('.project-list-wrapper .project-row');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      const filterValue = btn.getAttribute('data-filter');
      
      projectRows.forEach(row => {
        if (filterValue === 'all') {
          row.classList.remove('filtered-out');
        } else {
          const category = row.getAttribute('data-category');
          if (category === filterValue) {
            row.classList.remove('filtered-out');
          } else {
            row.classList.add('filtered-out');
          }
        }
      });
    });
  });
}

/**
 * Global Router mounted triggers
 */
document.addEventListener('viewMounted', (event) => {
  const path = event.detail.path;
  
  // Initialize general elements present across case studies
  initSolutionTabs();
  initLazyVideos();
  
  if (path === '/work') {
    initWorkFilters();
  } else if (path === '/brand-stack') {
    initBrandStack();
  } else if (path === '/project-1') {
    initProject1Sandbox();
  } else if (path === '/project-2') {
    initProject2Sandbox();
    initCendrolScrollAnimation();
  } else if (path === '/project-3') {
    initProject3Sandbox();
    initProject3Flowchart();
    initProject3ComplianceDeck();
  } else if (path === '/project-4') {
    initProject4Sandbox();
  }
});


// ==========================================================================
// BEHANCE IMPORTED PROJECTS (5 - 9)
// ==========================================================================

export function renderProject5Sidebar() {
  return `
    <div class="sidebar-spec-group">
      <span class="font-mono label">ROLE</span>
      <p class="sidebar-spec-value">UI/UX Designer</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TIMELINE</span>
      <p class="sidebar-spec-value">2024</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TOOLS</span>
      <p class="sidebar-spec-value">Figma, Adobe Illustrator, Adobe Photoshop, Adobe After Effects</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TAGS</span>
      <p class="sidebar-spec-value" style="font-size: 0.75rem; text-transform: none; font-family: var(--font-sans); font-weight: normal; color: var(--text-muted); line-height: 1.4;">UI/UX, ui design, user interface, Mobile app</p>
    </div>
  `;
}


export function renderProject5() {
  return `
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-accent)">PRODUCT DESIGN / INTERACTION</span>
        <h1 class="project-headline font-serif">Attendance Mangement App | IOS App UX Case study</h1>
      </header>

      <div class="project-body stagger-el stagger-delay-2" style="max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--spacing-sm); margin-bottom: var(--spacing-xl);">
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/0daa15201125275.666ebc39ad4ef.png" alt="Attendance Mangement App" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/08a17e201125275.666ebc39ab5c2.png" alt="Image may contain: screenshot and abstract" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/5c175f201125275.666ebc39ad008.png" alt="Image may contain: screenshot and abstract" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/823067201125275.666ebc39ae963.png" alt="Attendance Mangement App" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/fb6075201125275.666ebc39ab0c7.png" alt="Image may contain: screenshot and abstract" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/3f20cd201125275.666ebc39acb02.png" alt="Image may contain: screenshot and abstract" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/e30241201125275.666ebc39aaaea.png" alt="Attendance Mangement App" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/f001aa201125275.666ebc39adc73.gif" alt="Attendance Mangement App" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/e09c11201125275.666ebc39ac3b7.png" alt="Image may contain: screenshot" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/791c7a201125275.666ebc39ae45b.png" alt="Image may contain: abstract and screenshot" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/29d801201125275.666ebc39af0de.png" alt="Image may contain: screenshot" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/68fb54201125275.666ebc39aa206.png" alt="Attendance Mangement App" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/c90390201125275.666ebc39abc37.gif" alt="Attendance Mangement App" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/dc733e201125275.666ebc39a9ce4.png" alt="Attendance Mangement App" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>

        <!-- Interactive Prototype -->
        <h3 class="font-serif" style="font-size: 1.5rem; margin-top: 2.5rem; font-weight: 500;">Interactive Figma Prototype</h3>
        <div class="figma-embed-container" style="margin-top: 1.5rem;">
          <div class="embed-dimensions" style="max-width: 800px; max-height: 450px; margin: 0 auto;">
                 <div class="embed-aspect-ratio" style="padding-bottom: 56.25%; position: relative; height: 0;">
                   <iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQgdCOscKSMaZ60baAN5y5M%2Fcendrol%3Fpage-id%3D0%253A1%26node-id%3D1-4615%26viewport%3D1452%252C170%252C0.19%26t%3DamWLQ9ngHPykDDye-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox" class="embed-content"></iframe>
                 </div>
               </div>
        </div>
      </div>
    </article>
  `;
}


export function renderProject6Sidebar() {
  return `
    <div class="sidebar-spec-group">
      <span class="font-mono label">ROLE</span>
      <p class="sidebar-spec-value">UI/UX Designer</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TIMELINE</span>
      <p class="sidebar-spec-value">2024</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TOOLS</span>
      <p class="sidebar-spec-value">Figma, Adobe Illustrator, Adobe Photoshop</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TAGS</span>
      <p class="sidebar-spec-value" style="font-size: 0.75rem; text-transform: none; font-family: var(--font-sans); font-weight: normal; color: var(--text-muted); line-height: 1.4;">Netflix, Ecommerce, ui design, UX design</p>
    </div>
  `;
}


export function renderProject6() {
  return `
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-accent)">PRODUCT DESIGN / CASE STUDY</span>
        <h1 class="project-headline font-serif">Netflix E-Shopping UX Casestudy | UI Design</h1>
      </header>

      <div class="project-body stagger-el stagger-delay-2" style="max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--spacing-sm); margin-bottom: var(--spacing-xl);">
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/6b1a36191765225.65d1085899e97.png" alt="Netflix E-Shopping UX Casestudy" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>

        <!-- Interactive Prototype -->
        <h3 class="font-serif" style="font-size: 1.5rem; margin-top: 2.5rem; font-weight: 500;">Interactive Figma Prototype</h3>
        <div class="figma-embed-container" style="margin-top: 1.5rem;">
          <div class="embed-dimensions" style="max-width: 800px; max-height: 450px; margin: 0 auto;">
                 <div class="embed-aspect-ratio" style="padding-bottom: 56.25%; position: relative; height: 0;">
                   <iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvQCGfU9G9ETS97J9UpUUIb%2FDesign-Challenge_1%3Fpage-id%3D273%253A2118%26type%3Ddesign%26node-id%3D273-3120%26viewport%3D1461%252C278%252C0.18%26t%3Dx5CiHHv1QnEC62T8-1%26scaling%3Dscale-down%26starting-point-node-id%3D273%253A2151%26mode%3Ddesign" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox" class="embed-content"></iframe>
                 </div>
               </div>
        </div>
      </div>
    </article>
  `;
}


export function renderProject7Sidebar() {
  return `
    <div class="sidebar-spec-group">
      <span class="font-mono label">ROLE</span>
      <p class="sidebar-spec-value">UI/UX Designer</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TIMELINE</span>
      <p class="sidebar-spec-value">2024</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TOOLS</span>
      <p class="sidebar-spec-value">Figma, Adobe Photoshop, Adobe Illustrator</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TAGS</span>
      <p class="sidebar-spec-value" style="font-size: 0.75rem; text-transform: none; font-family: var(--font-sans); font-weight: normal; color: var(--text-muted); line-height: 1.4;">ux, UI/UX, Mobile app, user experience</p>
    </div>
  `;
}


export function renderProject7() {
  return `
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-accent)">PRODUCT DESIGN / CASE STUDY</span>
        <h1 class="project-headline font-serif">TimeSync | Appointment scheduling App UX Case Study</h1>
      </header>

      <div class="project-body stagger-el stagger-delay-2" style="max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--spacing-sm); margin-bottom: var(--spacing-xl);">
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9e30bd190322787.65b9311d558d0.jpg" alt="TimeSync" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>

        <!-- Interactive Prototype -->
        <h3 class="font-serif" style="font-size: 1.5rem; margin-top: 2.5rem; font-weight: 500;">Interactive Figma Prototype</h3>
        <div class="figma-embed-container" style="margin-top: 1.5rem;">
          <div class="embed-dimensions" style="max-width: 800px; max-height: 450px; margin: 0 auto;">
                 <div class="embed-aspect-ratio" style="padding-bottom: 56.25%; position: relative; height: 0;">
                   <iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FP3CDgtOdUcFbUwLeKiyMqN%2FTimesync-Project%3Fpage-id%3D73%253A640%26type%3Ddesign%26node-id%3D175-449%26viewport%3D825%252C537%252C0.14%26t%3DEWTmpoxTAHqB4l6l-1%26scaling%3Dscale-down%26starting-point-node-id%3D175%253A449%26show-proto-sidebar%3D1%26mode%3Ddesign" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox" class="embed-content"></iframe>
                 </div>
               </div>
        </div>
      </div>
    </article>
  `;
}


export function renderProject8Sidebar() {
  return `
    <div class="sidebar-spec-group">
      <span class="font-mono label">ROLE</span>
      <p class="sidebar-spec-value">UI/UX Designer</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TIMELINE</span>
      <p class="sidebar-spec-value">2024</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TOOLS</span>
      <p class="sidebar-spec-value">Figma, Adobe Illustrator, Adobe Photoshop</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TAGS</span>
      <p class="sidebar-spec-value" style="font-size: 0.75rem; text-transform: none; font-family: var(--font-sans); font-weight: normal; color: var(--text-muted); line-height: 1.4;">ecommerce app, Ecommerce, ios, Mobile app</p>
    </div>
  `;
}


export function renderProject8() {
  return `
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-accent)">PRODUCT DESIGN / INTERACTION</span>
        <h1 class="project-headline font-serif">Fashion factory | E-Commerce iOS UI Design</h1>
      </header>

      <div class="project-body stagger-el stagger-delay-2" style="max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--spacing-sm); margin-bottom: var(--spacing-xl);">
        <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/7700ec187890535.65930af54a42b.jpg" alt="Image may contain: cartoon" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>

        <!-- Interactive Prototype -->
        <h3 class="font-serif" style="font-size: 1.5rem; margin-top: 2.5rem; font-weight: 500;">Interactive Figma Prototype</h3>
        <div class="figma-embed-container" style="margin-top: 1.5rem;">
          <div class="embed-dimensions" style="max-width: 800px; max-height: 450px; margin: 0 auto;">
                 <div class="embed-aspect-ratio" style="padding-bottom: 56.25%; position: relative; height: 0;">
                   <iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2F43NxmOh2HF0AeRJd9LtE98%2Ftextile_app%3Fpage-id%3D57%253A2%26type%3Ddesign%26node-id%3D59-116%26viewport%3D163%252C579%252C0.06%26t%3DxImyOhwQCCAWvWZL-1%26scaling%3Dscale-down%26starting-point-node-id%3D59%253A116%26mode%3Ddesign" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox" class="embed-content"></iframe>
                 </div>
               </div>
        </div>
      </div>
    </article>
  `;
}


export function renderProject9Sidebar() {
  return `
    <div class="sidebar-spec-group">
      <span class="font-mono label">ROLE</span>
      <p class="sidebar-spec-value">UI/UX Designer</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TIMELINE</span>
      <p class="sidebar-spec-value">2023</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TOOLS</span>
      <p class="sidebar-spec-value">Adobe Illustrator, Figma, Adobe Photoshop</p>
    </div>
    <div class="sidebar-spec-group">
      <span class="font-mono label">TAGS</span>
      <p class="sidebar-spec-value" style="font-size: 0.75rem; text-transform: none; font-family: var(--font-sans); font-weight: normal; color: var(--text-muted); line-height: 1.4;">wireframe, marketing website design, user interface, ux</p>
    </div>
  `;
}


export function renderProject9() {
  return `
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-brand)">UNIFIED PORTFOLIO / CASE STUDY</span>
        <h1 class="project-headline font-serif">Designergram | Design Connect: Unified Case Study</h1>
      </header>

      <div class="project-body stagger-el stagger-delay-2" style="max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--spacing-sm); margin-bottom: var(--spacing-xl);">
        
        <!-- Tabbed Navigation using solution switcher styles -->
        <div class="solution-path-container" style="margin-bottom: 1rem;">
          <div class="solution-tabs four-tabs" style="gap: 0.55rem; width: 100%;">
            <button class="solution-tab-btn active" data-chapter="1" style="padding: 0.65rem 0.25rem;">
              <span class="tab-num">CHAPTER 01</span>
              <span class="tab-title" style="font-size: 0.8rem;">UX Case Study</span>
            </button>
            <button class="solution-tab-btn" data-chapter="2" style="padding: 0.65rem 0.25rem;">
              <span class="tab-num">CHAPTER 02</span>
              <span class="tab-title" style="font-size: 0.8rem;">iOS UI Design</span>
            </button>
            <button class="solution-tab-btn" data-chapter="3" style="padding: 0.65rem 0.25rem;">
              <span class="tab-num">CHAPTER 03</span>
              <span class="tab-title" style="font-size: 0.8rem;">Android UI Design</span>
            </button>
            <button class="solution-tab-btn" data-chapter="4" style="padding: 0.65rem 0.25rem;">
              <span class="tab-num">CHAPTER 04</span>
              <span class="tab-title" style="font-size: 0.8rem;">Marketing Site</span>
            </button>
          </div>
        </div>

        <div class="solution-chapters-container" style="width: 100%;">
        <!-- Chapter 1: UX Case Study -->
        <div class="solution-chapter-content active" data-chapter-content="1" style="display: flex; flex-direction: column; gap: var(--spacing-sm);">
            <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/add0d4186524603.657744c10dbd7.jpg" alt="UX Case Study" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
            </div>
        </div>

        <!-- Chapter 2: iOS UI -->
        <div class="solution-chapter-content" data-chapter-content="2" style="display: flex; flex-direction: column; gap: var(--spacing-sm);">
            <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/e42ee3186522961.65773f68e012c.jpg" alt="iOS UI" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
            </div>
        </div>

        <!-- Chapter 3: Android UI -->
        <div class="solution-chapter-content" data-chapter-content="3" style="display: flex; flex-direction: column; gap: var(--spacing-sm);">
            <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/ae96ec186522635.65773e5d25044.jpg" alt="Image may contain: screenshot, abstract and cartoon" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
            </div>
        </div>

        <!-- Chapter 4: Marketing Website -->
        <div class="solution-chapter-content" data-chapter-content="4" style="display: flex; flex-direction: column; gap: var(--spacing-sm);">
            <div class="case-study-visual" style="width: 100%; overflow: hidden; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary);">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/c4c7da186521263.65773a1c4e4d2.jpg" alt="Image may contain: screenshot, abstract and cartoon" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
            </div>
        </div>
        </div>

      </div>
    </article>
  `;
}

// ==========================================================================
// BRAND STACK VIEW
// ==========================================================================
export function renderBrandStack() {
  return `
    <article class="brand-stack-page">
      <header class="brand-stack-header stagger-el stagger-delay-1">
        <div class="brand-header-top">
          <span class="label font-mono brand-kicker">FEATURED WORK</span>
          <a href="#/work" class="view-all-link font-mono">VIEW ALL PROJECTS &rarr;</a>
        </div>
        <h1 class="brand-stack-headline font-serif" style="font-size: 3rem; font-weight: 400; line-height: 1.1; color: var(--text-primary); margin-top: 0.5rem; margin-bottom: 0;">
          Crafted for <em>Impact</em><span class="orange-dot">.</span>
        </h1>
      </header>

      <!-- Section: Custom Grid Layout -->
      <section class="brand-stack-section stagger-el stagger-delay-2" style="margin-top: 2rem;">
        <div class="brand-custom-grid">
          <!-- Card 1 (Tall, Left) -->
          <div class="video-project-card tall-card" tabindex="0">
            <div class="video-container">
              <video muted playsinline loop preload="metadata">
                <source src="./ayushi_goyal_tour.mp4" type="video/mp4">
              </video>
              <div class="play-indicator font-mono">HOVER TO PLAY</div>
            </div>
            <div class="video-project-info">
              <div class="video-card-meta">
                <span class="video-tag font-mono">PACE / EDITING</span>
              </div>
              <h3 class="video-card-title font-serif">KOMMA CLUB MEDIA</h3>
              <p class="video-card-desc font-sans" style="margin-top: 0.2rem;">Luxury real estate cinematic edit with smooth pacing and visual elegance.</p>
              <div class="video-card-footer">
                <span class="video-views font-mono">1.2M VIEWS</span>
                <span class="arrow-icon-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </span>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="grid-right-col">
            <!-- Card 2 -->
            <div class="video-project-card" tabindex="0">
              <div class="video-container">
                <video muted playsinline loop preload="metadata">
                  <source src="./fluteboxers_promo.mp4" type="video/mp4">
                </video>
                <div class="play-indicator font-mono">HOVER TO PLAY</div>
              </div>
              <div class="video-project-info">
                <div class="video-card-meta">
                  <span class="video-tag font-mono">SOUND DESIGN / BEAT</span>
                </div>
                <h3 class="video-card-title font-serif">THE GENESIS &amp; @KCM.MP4</h3>
                <p class="video-card-desc font-sans" style="margin-top: 0.2rem;">High-energy edit with dynamic beat sync and custom sound design.</p>
                <div class="video-card-footer">
                  <span class="video-views font-mono">2.1M VIEWS</span>
                  <span class="arrow-icon-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </span>
                </div>
              </div>
            </div>

            <!-- Bottom Row (2 Cards) -->
            <div class="grid-bottom-row">
              <!-- Card 5 -->
              <div class="video-project-card short-card" tabindex="0">
                <div class="video-container">
                  <video muted playsinline loop preload="metadata">
                    <source src="./partypies_weddings.mp4" type="video/mp4">
                  </video>
                  <div class="play-indicator font-mono">HOVER TO PLAY</div>
                </div>
                <div class="video-project-info">
                  <div class="video-card-meta">
                    <span class="video-tag font-mono">STORYTELLING / TRANSITIONS</span>
                  </div>
                  <h3 class="video-card-title font-serif" style="font-size: 1.05rem;">PARTYPIES WEDDINGS FILM CUT</h3>
                  <div class="video-card-footer" style="padding-top: 0.25rem;">
                    <span class="video-views font-mono">2.3M VIEWS</span>
                    <span class="arrow-icon-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </span>
                  </div>
                </div>
              </div>

              <!-- Card 6 -->
              <div class="video-project-card short-card" tabindex="0">
                <div class="video-container">
                  <video muted playsinline loop preload="metadata">
                    <source src="./ashes_trailer.mp4" type="video/mp4">
                  </video>
                  <div class="play-indicator font-mono">HOVER TO PLAY</div>
                </div>
                <div class="video-project-info">
                  <div class="video-card-meta">
                    <span class="video-tag font-mono">NARRATIVE / CINEMATIC</span>
                  </div>
                  <h3 class="video-card-title font-serif" style="font-size: 1.05rem;">ASHES SHORT FILM TRAILER</h3>
                  <div class="video-card-footer" style="padding-top: 0.25rem;">
                    <span class="video-views font-mono">1.2M VIEWS</span>
                    <span class="arrow-icon-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Social Feed Highlights -->
      <section class="brand-stack-section stagger-el stagger-delay-3" style="margin-top: 4rem;">
        <span class="label font-mono text-brand-orange" style="font-size: 0.65rem;">SOCIAL CURATION</span>
        <h2 class="section-heading font-serif" style="font-size: 2rem; margin-top: 0.25rem; margin-bottom: 1.5rem;">Client Feed Highlights</h2>
        
        <div class="instagram-feeds-grid">
          <!-- Card 1: Ayushi Goyal Designs -->
          <a href="https://www.instagram.com/ayushi.goyal.designs/" target="_blank" rel="noopener" class="feed-mockup-card" tabindex="0">
            <div class="feed-profile-header">
              <div class="feed-profile-avatar" style="background-image: url('./logo_ayushi.png');"></div>
              <div class="feed-profile-meta">
                <span class="feed-handle font-mono">@ayushi.goyal.designs</span>
                <span class="feed-sub font-sans">Luxury Interior Design</span>
              </div>
              <span class="instagram-icon-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </span>
            </div>
            <div class="feed-image-wrapper">
              <img src="./feed_ayushi.png" alt="Ayushi Goyal Designs Instagram Feed" loading="lazy">
              <div class="feed-card-overlay">
                <span class="overlay-badge font-mono">LUXURY WORKSHARE</span>
                <p class="overlay-desc font-sans">Portfolio of ultra-luxury interior architecture, minimalist room curations, and designer mentorship.</p>
                <div class="overlay-cta font-mono">VIEW INSTAGRAM &rarr;</div>
              </div>
            </div>
          </a>

          <!-- Card 2: Fluteboxers -->
          <a href="https://www.instagram.com/fluteboxers/" target="_blank" rel="noopener" class="feed-mockup-card" tabindex="0">
            <div class="feed-profile-header">
              <div class="feed-profile-avatar" style="background-image: url('./logo_fluteboxers.png');"></div>
              <div class="feed-profile-meta">
                <span class="feed-handle font-mono">@fluteboxers</span>
                <span class="feed-sub font-sans">Bansuri + Beatbox Duo</span>
              </div>
              <span class="instagram-icon-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </span>
            </div>
            <div class="feed-image-wrapper">
              <img src="./feed_fluteboxers.png" alt="Fluteboxers Instagram Feed" loading="lazy">
              <div class="feed-card-overlay">
                <span class="overlay-badge font-mono">PERFORMANCE ART</span>
                <p class="overlay-desc font-sans">High-energy show clips, bansuri covers, live events, and creative beatboxing sound design.</p>
                <div class="overlay-cta font-mono">VIEW INSTAGRAM &rarr;</div>
              </div>
            </div>
          </a>

          <!-- Card 3: Collective Group -->
          <a href="https://www.instagram.com/collectivegroup.ca/" target="_blank" rel="noopener" class="feed-mockup-card" tabindex="0">
            <div class="feed-profile-header">
              <div class="feed-profile-avatar" style="background-color: #1a1a1a; display: flex; align-items: center; justify-content: center; color: var(--text-brand-orange); font-weight: bold; font-size: 0.7rem;">CG</div>
              <div class="feed-profile-meta">
                <span class="feed-handle font-mono">@collectivegroup.ca</span>
                <span class="feed-sub font-sans">Lakeside Real Estate</span>
              </div>
              <span class="instagram-icon-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </span>
            </div>
            <div class="feed-image-wrapper">
              <img src="./feed_collective.png" alt="Collective Real Estate Instagram Feed" loading="lazy">
              <div class="feed-card-overlay">
                <span class="overlay-badge font-mono">LUXURY HOMES</span>
                <p class="overlay-desc font-sans">Sleek walkthroughs, scenic drone footage, and elegant listings in Kelowna, British Columbia.</p>
                <div class="overlay-cta font-mono">VIEW INSTAGRAM &rarr;</div>
              </div>
            </div>
          </a>

          <!-- Card 4: PartyPies Weddings -->
          <a href="https://www.instagram.com/partypiesweddings/" target="_blank" rel="noopener" class="feed-mockup-card" tabindex="0">
            <div class="feed-profile-header">
              <div class="feed-profile-avatar" style="background-image: url('./logo_partypies.png');"></div>
              <div class="feed-profile-meta">
                <span class="feed-handle font-mono">@partypiesweddings</span>
                <span class="feed-sub font-sans">Cinematic Wedding Films</span>
              </div>
              <span class="instagram-icon-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </span>
            </div>
            <div class="feed-image-wrapper">
              <img src="./feed_partypies.png" alt="PartyPies Weddings Instagram Feed" loading="lazy">
              <div class="feed-card-overlay">
                <span class="overlay-badge font-mono">WEDDING CINEMA</span>
                <p class="overlay-desc font-sans">Emotional highlights, cinematic grading, and candid romantic frames from luxury wedding projects.</p>
                <div class="overlay-cta font-mono">VIEW INSTAGRAM &rarr;</div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <!-- Section: Kind Words -->
      <section class="brand-stack-section stagger-el stagger-delay-4" style="margin-top: 4rem;">
        <div class="section-title-with-controls">
          <div>
            <span class="label font-mono text-brand-orange" style="font-size: 0.65rem;">KIND WORDS</span>
            <h2 class="section-heading font-serif" style="font-size: 2rem; margin-top: 0.25rem;">What They Say</h2>
          </div>
          <div class="carousel-nav-arrows">
            <button type="button" class="carousel-arrow prev" aria-label="Previous testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <button type="button" class="carousel-arrow next" aria-label="Next testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>

        <div class="testimonials-grid brand-testimonials">
          <div class="testimonial-card">
            <span class="quote-mark">&ldquo;</span>
            <p class="testimonial-quote font-sans">
              "Gokul has a rare gift for matching the rhythm of live music to visual transitions. His edits for our performance clips captured our energy perfectly, driving a significant spike in our audience engagement."
            </p>
            <div class="testimonial-footer">
              <div class="testimonial-avatar font-mono">FB</div>
              <div class="testimonial-info">
                <span class="testimonial-author font-serif">Fluteboxers</span>
                <span class="testimonial-role font-mono">Performance Duo</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <span class="quote-mark">&ldquo;</span>
            <p class="testimonial-quote font-sans">
              "The pacing and atmosphere Gokul brings to our cinematic footage is top-tier. He understands film structure, respects dynamic audio ranges, and elevates our color grading palettes to a premium commercial standard."
            </p>
            <div class="testimonial-footer">
              <div class="testimonial-avatar font-mono" style="color: hsl(340, 90%, 50%);">VF</div>
              <div class="testimonial-info">
                <span class="testimonial-author font-serif">Vaidurya Films</span>
                <span class="testimonial-role font-mono">Production House</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <span class="quote-mark">&ldquo;</span>
            <p class="testimonial-quote font-sans">
              "From complex brand films to short social edits, Gokul delivers narratives that capture our retail essence. His attention to sound sync and color transitions is meticulous."
            </p>
            <div class="testimonial-footer">
              <div class="testimonial-avatar font-mono">MS</div>
              <div class="testimonial-info">
                <span class="testimonial-author font-serif">Mahalekshmi Silks</span>
                <span class="testimonial-role font-mono">Retail Brand</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Toolkit & Software Stack -->
      <section class="brand-stack-section stagger-el stagger-delay-5" style="margin-top: 4rem;">
        <span class="label font-mono text-brand-orange" style="font-size: 0.65rem;">TOOLKIT &amp; SOFTWARE STACK</span>
        <h2 class="section-heading font-serif" style="font-size: 2rem; margin-top: 0.25rem; margin-bottom: 1.5rem;">Tools That Power the Process</h2>
        
        <div class="toolkit-grid brand-toolkit-grid">
          <!-- Premiere Pro -->
          <div class="toolkit-card-new">
            <div class="toolkit-top-row">
              <div class="toolkit-icon-box pr-box">Pr</div>
              <div class="toolkit-meta">
                <h3 class="toolkit-title font-serif">Adobe Premiere Pro</h3>
                <span class="toolkit-badge expert font-mono">Expert</span>
              </div>
            </div>
            <p class="toolkit-desc font-sans">Advanced A/B pacing, audio multi-tracking, speed-ramping, dynamic nesting, and hardware-accelerated rendering.</p>
            <div class="toolkit-progress-wrapper">
              <div class="progress-info font-mono">
                <span>93%</span>
              </div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 93%;"></div></div>
            </div>
          </div>

          <!-- After Effects -->
          <div class="toolkit-card-new">
            <div class="toolkit-top-row">
              <div class="toolkit-icon-box ae-box">Ae</div>
              <div class="toolkit-meta">
                <h3 class="toolkit-title font-serif">Adobe After Effects</h3>
                <span class="toolkit-badge advanced font-mono">Advanced</span>
              </div>
            </div>
            <p class="toolkit-desc font-sans">Keyframe interpolation, kinetic typography, shape layers, motion tracking, masking, rotoscoping, and complex overlay rendering.</p>
            <div class="toolkit-progress-wrapper">
              <div class="progress-info font-mono">
                <span>90%</span>
              </div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 90%;"></div></div>
            </div>
          </div>

          <!-- DaVinci Resolve -->
          <div class="toolkit-card-new">
            <div class="toolkit-top-row">
              <div class="toolkit-icon-box dv-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #8AE6FF;">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <div class="toolkit-meta">
                <h3 class="toolkit-title font-serif">DaVinci Resolve</h3>
                <span class="toolkit-badge advanced font-mono">Advanced</span>
              </div>
            </div>
            <p class="toolkit-desc font-sans">Color grading with node structures, log profile conversions, HSL qualifiers, primary/secondary wheels, and clean export.</p>
            <div class="toolkit-progress-wrapper">
              <div class="progress-info font-mono">
                <span>92%</span>
              </div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 92%;"></div></div>
            </div>
          </div>

          <!-- Audition -->
          <div class="toolkit-card-new">
            <div class="toolkit-top-row">
              <div class="toolkit-icon-box au-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="color: #7BFFE4;">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="12" y1="4" x2="12" y2="20"></line>
                  <line x1="8" y1="8" x2="16" y2="16"></line>
                  <line x1="16" y1="8" x2="8" y2="16"></line>
                </svg>
              </div>
              <div class="toolkit-meta">
                <h3 class="toolkit-title font-serif">Audition &amp; Sound Design</h3>
                <span class="toolkit-badge intermediate font-mono">Intermediate</span>
              </div>
            </div>
            <p class="toolkit-desc font-sans">Noise reduction, dynamic range compression, soundscape design, and high-fidelity mixing.</p>
            <div class="toolkit-progress-wrapper">
              <div class="progress-info font-mono">
                <span>85%</span>
              </div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 85%;"></div></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Side-by-Side: Credentials & Timeline -->
      <div class="brand-footer-grid stagger-el stagger-delay-6" style="margin-top: 4rem; margin-bottom: 4rem;">
        <!-- Column 1: Credentials -->
        <section class="brand-footer-col">
          <span class="label font-mono text-brand-orange" style="font-size: 0.65rem;">CREDENTIALS</span>
          <h2 class="section-heading font-serif" style="font-size: 2rem; margin-top: 0.25rem; margin-bottom: 1.5rem;">Accreditation &amp; Certificates</h2>
          
          <div class="credentials-box-card">
            <div class="cert-card-header-row">
              <div class="cert-icon-wrapper-new">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div class="cert-title-meta">
                <h3 class="cert-title font-serif">Video Editing Professional Certificate</h3>
                <span class="cert-badge font-mono">VERIFIED PDF</span>
              </div>
            </div>
            <p class="cert-desc font-sans">Formal accreditation confirming mastery of professional video editing systems, advanced timeline workflows, and audio engineering principles.</p>
            <a href="./certificate.pdf" target="_blank" rel="noopener" class="cert-action-link font-mono">VIEW CERTIFICATE &rarr;</a>
          </div>
        </section>

        <!-- Column 2: Timeline -->
        <section class="brand-footer-col">
          <span class="label font-mono text-brand-orange" style="font-size: 0.65rem;">JOURNEY SO FAR</span>
          <h2 class="section-heading font-serif" style="font-size: 2rem; margin-top: 0.25rem; margin-bottom: 1.5rem;">Production Timeline</h2>
          
          <div class="brand-timeline-vertical">
            <!-- Item 1 -->
            <div class="timeline-node-new">
              <div class="timeline-dot-new"></div>
              <div class="timeline-text-new">
                <div class="timeline-header-row-new">
                  <span class="timeline-year-new font-mono">2023</span>
                  <h4 class="timeline-title-new font-sans">The Genesis &amp; @kcm.mp4</h4>
                </div>
                <p class="timeline-desc-new font-sans">Launched editing operations on Instagram building high-energy reels and experimenting with visual sound design.</p>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="timeline-node-new">
              <div class="timeline-dot-new"></div>
              <div class="timeline-text-new">
                <div class="timeline-header-row-new">
                  <span class="timeline-year-new font-mono">Late 2023</span>
                  <h4 class="timeline-title-new font-sans">First Freelance Commissions</h4>
                </div>
                <p class="timeline-desc-new font-sans">Secured first commercial engagements and delivered promotional video packages and performance promos.</p>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="timeline-node-new">
              <div class="timeline-dot-new"></div>
              <div class="timeline-text-new">
                <div class="timeline-header-row-new">
                  <span class="timeline-year-new font-mono">2024</span>
                  <h4 class="timeline-title-new font-sans">Collaborating with Premium Brands</h4>
                </div>
                <p class="timeline-desc-new font-sans">Expanded service footprint to premium brands and creators, achieving 10M+ collective impressions.</p>
              </div>
            </div>

            <!-- Item 4 -->
            <div class="timeline-node-new">
              <div class="timeline-dot-new"></div>
              <div class="timeline-text-new">
                <div class="timeline-header-row-new">
                  <span class="timeline-year-new font-mono">2025</span>
                  <h4 class="timeline-title-new font-sans">Creative Direction &amp; Certification</h4>
                </div>
                <p class="timeline-desc-new font-sans">Completed professional video editing certification and standardized high-end color grading and audio workflows.</p>
              </div>
            </div>

            <!-- Item 5 -->
            <div class="timeline-node-new">
              <div class="timeline-dot-new"></div>
              <div class="timeline-text-new">
                <div class="timeline-header-row-new">
                  <span class="timeline-year-new font-mono">2026 (Present)</span>
                  <h4 class="timeline-title-new font-sans">UX Designer at Designday</h4>
                </div>
                <p class="timeline-desc-new font-sans">Merging user experience principles with dynamic media pacing to craft immersive, high-conversion visual platforms.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  `;
}

export function initBrandStack() {
  const videoCards = document.querySelectorAll('.video-project-card');
  videoCards.forEach(card => {
    const video = card.querySelector('video');
    const playIndicator = card.querySelector('.play-indicator');
    if (!video) return;

    let playPromise = null;

    const playVideo = () => {
      card.classList.add('playing');
      if (playIndicator) playIndicator.style.opacity = '0';
      playPromise = video.play();
    };

    const pauseVideo = () => {
      card.classList.remove('playing');
      if (playIndicator) playIndicator.style.opacity = '1';
      if (playPromise !== null) {
        playPromise.then(() => {
          video.pause();
          video.currentTime = 0;
        }).catch(err => {
          video.pause();
          video.currentTime = 0;
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    };

    card.addEventListener('mouseenter', playVideo);
    card.addEventListener('mouseleave', pauseVideo);
    card.addEventListener('focus', playVideo);
    card.addEventListener('blur', pauseVideo);

    card.addEventListener('touchstart', (e) => {
      if (video.paused) {
        e.preventDefault();
        document.querySelectorAll('.video-project-card video').forEach(otherVideo => {
          if (otherVideo !== video) {
            otherVideo.pause();
            otherVideo.currentTime = 0;
            const otherCard = otherVideo.closest('.video-project-card');
            if (otherCard) {
              otherCard.classList.remove('playing');
              const otherIndicator = otherCard.querySelector('.play-indicator');
              if (otherIndicator) otherIndicator.style.opacity = '1';
            }
          }
        });
        playVideo();
      } else {
        e.preventDefault();
        pauseVideo();
      }
    }, { passive: false });
  });
}

