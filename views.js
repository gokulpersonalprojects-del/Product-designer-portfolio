/**
 * views.js
 * Contains HTML templates for all portfolio routes and handles dynamic sandbox interaction states.
 */

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
            <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;">
              <source src="./upsc_thumbnail.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="work-card-info" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 0.55rem;">
          <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-accent);">AI INTERACTION DESIGN / CASE STUDY</span>
          <h3 class="card-title font-serif" style="font-size: 1.35rem; margin-top: 0.15rem; font-weight: 500;">Designing Yooki: Navigating UPSC Syllabus Complexity</h3>
          <p class="font-sans" style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.45;">Helping UPSC aspirants explore topic relationships and bridge syllabus gaps using an associative layout and contextual AI guidance.</p>
          
          <div class="card-metrics-row" style="margin-top: 0.25rem;">
            <div class="card-metric-item">
              <span class="metric-num">3.4x</span>
              <span class="metric-label">Active Engagement</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">-40%</span>
              <span class="metric-label">Cognitive Overload</span>
            </div>
            <div class="card-metric-item">
              <span class="metric-num">92%</span>
              <span class="metric-label">Topic Grounding</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Card 2: Bank of Palestine Case Study (spans 1 col) -->
      <article class="work-card col-span-1 stagger-el stagger-delay-3" data-project="bop" onclick="window.location.hash='#/project-3'" role="link" tabindex="0" aria-label="View Bank of Palestine case study">
        <div class="work-card-media bop" style="height: 270px; border-bottom: 1px solid var(--border-color); border-radius: 0; overflow: hidden;">
          <div class="card-img-placeholder" style="background: none;">
            <img src="./bop_thumbnail.png" alt="Bank of Palestine KYC Simplification Showcase" style="width: 100%; height: 100%; object-fit: cover;">
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
            <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;">
              <source src="./cendrol_thumbnail.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="work-card-info" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 0.55rem;">
          <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-brand);">FIELD OPERATIONS / WORKFLOW DESIGN</span>
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
      <article class="work-card col-span-1 stagger-el stagger-delay-5" data-project="aura" onclick="window.location.hash='#/project-4'" role="link" tabindex="0" aria-label="View Aura AI case study">
        <div class="work-card-media aura" style="height: 270px; border-bottom: 1px solid var(--border-color); border-radius: 0; overflow: hidden;">
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
    </div>

    <div class="project-list-wrapper">
      
      <!-- Project 1 Row -->
      <a href="#/project-1" class="project-row stagger-el stagger-delay-3" data-category="ai" aria-label="UPSC AI Case Study">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">AI Systems</span>
          <h3 class="project-row-title font-serif">Designing an AI Learning System for Navigating UPSC Complexity</h3>
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
          <h3 class="project-row-title font-serif">Cendrol: Streamlining Expense Workflows for On-Site Engineers</h3>
        </div>
        <div class="project-meta-right">
          <span>Product Design</span>
          <span>2023</span>
        </div>
      </a>

      <!-- Project 4 Row -->
      <a href="#/project-4" class="project-row stagger-el stagger-delay-6" data-category="ai" aria-label="Aura AI Case Study">
        <div class="project-meta-left">
          <span class="project-tag-pill font-mono">AI Systems</span>
          <h3 class="project-row-title font-serif">Aura AI: Prompt-to-Interface Editor</h3>
        </div>
        <div class="project-meta-right">
          <span>Interaction Design</span>
          <span>2024</span>
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
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-brand)">AI INTERACTION DESIGN / CASE STUDY</span>
        <h1 class="project-headline font-serif">Designing an AI Learning System for Navigating UPSC Complexity</h1>
      </header>

      <div class="project-intro-grid stagger-el stagger-delay-2" style="grid-template-columns: 1fr; margin-bottom: 2rem;">
        <div class="intro-context-grid">
          
          <div class="intro-context-card context-theme">
            <div>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); letter-spacing: 0.05em; text-transform: uppercase;">01 / THE CONTEXT</span>
              <h3 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0.4rem 0 0; color: var(--text-primary); line-height: 1.2;">Overwhelming Complexity</h3>
            </div>
            <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">
              UPSC civil service preparation in India is notorious for its massive, complex, and highly overwhelming syllabus.
            </p>
          </div>

          <div class="intro-context-card context-theme">
            <div>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); letter-spacing: 0.05em; text-transform: uppercase;">02 / THE FRICTION</span>
              <h3 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0.4rem 0 0; color: var(--text-primary); line-height: 1.2;">Siloed Aspirant Hustle</h3>
            </div>
            <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">
              Students constantly shuffle between hundreds of static subjects, current affairs updates, and unlinked mock tests.
            </p>
          </div>

          <div class="intro-context-card solution-theme">
            <div>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-accent); letter-spacing: 0.05em; text-transform: uppercase;">03 / THE SOLUTION</span>
              <h3 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0.4rem 0 0; color: var(--text-primary); line-height: 1.2;">Connected AI Platform</h3>
            </div>
            <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">
              An AI-powered conversational system replacing passive content with a connected syllabus universe and behavioral progress mapping.
            </p>
          </div>

        </div>
      </div>

      <div class="project-body stagger-el stagger-delay-3">
        
        <!-- Product Video -->
        <section class="body-chapter" style="padding-top: 0; margin-bottom: 0;">
          <div style="position: relative; width: 100%; padding-bottom: 56.25%; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color); background: #000;">
            <iframe
              src="https://www.youtube-nocookie.com/embed/td9oc-DovoY?rel=0&modestbranding=1&color=white"
              title="Yooki — AI Learning System Product Demo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
            ></iframe>
          </div>
        </section>

        <!-- Storyboard Section -->
        <section class="storyboard-section">
          <span class="chapter-num font-mono" style="color: var(--color-brand)">STORYBOARD</span>
          <h2 class="chapter-title font-serif" style="font-size: 1.8rem; margin-top: 0.25rem;">Visualizing the UPSC Journey: From Issue to Solution</h2>
          
          <div class="storyboard-stack-container">
            <!-- Frame 1 -->
            <div class="storyboard-card" style="--card-index: 0;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">01 / 10</span>
                <span class="frame-title">The Struggle Begins: Finding Grounding</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/1.png" alt="Storyboard Frame 1: Finding Grounding" loading="lazy">
              </div>
            </div>
            
            <!-- Frame 2 -->
            <div class="storyboard-card" style="--card-index: 1;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">02 / 10</span>
                <span class="frame-title">Passive Reading &amp; Retention Gaps</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/2.png" alt="Storyboard Frame 2: Retention Gaps" loading="lazy">
              </div>
            </div>
            
            <!-- Frame 3 -->
            <div class="storyboard-card" style="--card-index: 2;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">03 / 10</span>
                <span class="frame-title">Managing the Overwhelming Syllabus</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/3.png" alt="Storyboard Frame 3: Managing the Syllabus" loading="lazy">
              </div>
            </div>
            
            <!-- Frame 4 -->
            <div class="storyboard-card" style="--card-index: 3;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">04 / 10</span>
                <span class="frame-title">Tracking Real Preparation Progress</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/4.png" alt="Storyboard Frame 4: Tracking Progress" loading="lazy">
              </div>
            </div>
            
            <!-- Frame 5 -->
            <div class="storyboard-card" style="--card-index: 4;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">05 / 10</span>
                <span class="frame-title">Identifying Weak &amp; Neglected Areas</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/5.png" alt="Storyboard Frame 5: Weak Areas" loading="lazy">
              </div>
            </div>
            
            <!-- Frame 6 -->
            <div class="storyboard-card" style="--card-index: 5;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">06 / 10</span>
                <span class="frame-title">Unifying Static &amp; Associative Topics</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/6.png" alt="Storyboard Frame 6: Unifying Topics" loading="lazy">
              </div>
            </div>
            
            <!-- Frame 7 -->
            <div class="storyboard-card" style="--card-index: 6;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">07 / 10</span>
                <span class="frame-title">Connecting History with Current Affairs</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/7.png" alt="Storyboard Frame 7: Connecting Topics" loading="lazy">
              </div>
            </div>
            
            <!-- Frame 8 -->
            <div class="storyboard-card" style="--card-index: 7;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">08 / 10</span>
                <span class="frame-title">Introducing Yooki Conversational AI</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/8.png" alt="Storyboard Frame 8: Yooki AI" loading="lazy">
              </div>
            </div>
            
            <!-- Frame 9 -->
            <div class="storyboard-card" style="--card-index: 8;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">09 / 10</span>
                <span class="frame-title">Dynamic Grounded AI Conversations</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/9.png" alt="Storyboard Frame 9: Conversational AI" loading="lazy">
              </div>
            </div>
            
            <!-- Frame 10 -->
            <div class="storyboard-card" style="--card-index: 9;">
              <div class="storyboard-card-header font-mono">
                <span class="frame-number">10 / 10</span>
                <span class="frame-title">Bridging Gaps &amp; Enabling Flow</span>
              </div>
              <div class="storyboard-image-wrapper">
                <img src="./storyboard/10.png" alt="Storyboard Frame 10: Enabling Flow" loading="lazy">
              </div>
            </div>
          </div>
        </section>
        
        <!-- Challenge Section -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 2rem;">
          <span class="chapter-num font-mono" style="color: var(--color-accent)">THE CHALLENGE</span>
          <h2 class="chapter-title font-serif" style="font-size: 1.8rem; margin-top: 0.25rem;">Making the vast UPSC syllabus manageable</h2>
          <p class="chapter-desc">
            Standard learning platforms represent preparation progress linearly (e.g., "45% Completed"), which fails to capture how students actually study—revising old topics while referencing new ones. This siloed model leads to key pain points:
          </p>
          <ul class="about-list" style="margin-top: 1rem; display: grid; grid-template-columns: 1fr; gap: 1rem;">
            <li class="about-list-item" style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
              <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary)">Topic Navigation Constraints</h4>
              <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary)">Aspirants struggled to locate topics within the larger, complex syllabus system.</p>
            </li>
            <li class="about-list-item" style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
              <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary)">Siloed Contexts</h4>
              <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary)">Learning behavior was naturally associative, but legacy prep platforms remained completely siloed.</p>
            </li>
            <li class="about-list-item" style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
              <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary)">Invisible Preparation Gaps</h4>
              <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary)">Progress tracking failed to represent real preparation behavior, keeping weak and neglected areas hidden.</p>
            </li>
          </ul>
        </section>

        <!-- Nudge Breakout -->
        <div class="text-nudge stagger-el">
          Sometimes the best UX stories aren't about revolutionary interfaces or groundbreaking research
        </div>

        <!-- Interaction Model: IA Flowchart — always visible standalone section -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 2.5rem; margin-bottom: 0;">
          <span class="chapter-num font-mono" style="color: var(--color-brand);">/ THE INTERACTION MODEL</span>
          <h2 class="chapter-title font-serif" style="font-size: 1.8rem; margin-top: 0.25rem;">Designing Preparation as a Behavioral System</h2>
          <p class="chapter-desc">
            Rather than approaching the product as a traditional educational dashboard, Yooki was structured as an adaptive learning system — observing study frequency, topic engagement, and revision behavior to surface the most useful next step. The information architecture below shows how a single search query flows into a comprehensive, connected learning journey.
          </p>

          <!-- Interactive UPSC Cognitive Pathing Flowchart -->
          <div class="interactive-flow-sandbox" style="margin-top: 1.5rem;">

            <div class="ia-flow-container" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; margin-top: 0.5rem;">
              <!-- SVG Connections Overlay -->
              <svg class="ia-flow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
                <!-- Flow Paths -->
                <path id="path-search-details" d="M 100 100 C 200 100, 200 200, 300 200" class="ia-flow-path active" />
                <path id="path-details-nudge" d="M 300 200 C 400 200, 400 100, 500 100" class="ia-flow-path active" />
                <!-- Nudge Split Paths (Dashed) -->
                <path id="path-nudge-journey" d="M 500 100 C 600 100, 600 200, 700 200" class="ia-flow-path-dashed active running" />
                <path id="path-journey-completion" d="M 700 200 C 800 200, 800 150, 900 150" class="ia-flow-path active" />
                <!-- Looping Flow Dots -->
                <circle id="dot-search-details" r="5.5" fill="var(--color-brand)" style="offset-path: path('M 100 100 C 200 100, 200 200, 300 200');" class="ia-flow-dot" />
                <circle id="dot-details-nudge" r="5.5" fill="var(--color-accent)" style="offset-path: path('M 300 200 C 400 200, 400 100, 500 100'); animation-delay: 1s;" class="ia-flow-dot" />
                <circle id="dot-nudge-journey" r="5.5" fill="var(--color-brand)" style="offset-path: path('M 500 100 C 600 100, 600 200, 700 200'); animation-delay: 2s;" class="ia-flow-dot" />
                <circle id="dot-journey-completion" r="5.5" fill="var(--color-success)" style="offset-path: path('M 700 200 C 800 200, 800 150, 900 150'); animation-delay: 3s;" class="ia-flow-dot" />
              </svg>

              <!-- Nodes Grid -->
              <div class="ia-nodes-grid" style="width: 100%; height: 100%; position: relative;">
                <!-- Node 1: Search Input -->
                <div class="ia-node active" id="node-search" style="left: 10%; top: 33.3%;">
                  <span class="font-mono" style="font-size: 0.62rem; color: var(--color-brand); font-weight: bold; letter-spacing: 0.05em;">01 / SEARCH</span>
                  <div style="font-size: 1.15rem; margin: 0.1rem 0;">🔍</div>
                  <div class="font-serif" style="font-size: 0.88rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.1rem;">Search Query</div>
                  <div id="ia-search-box" style="font-size: 0.65rem; color: var(--text-secondary); background: var(--bg-secondary); padding: 0.25rem 0.35rem; border-radius: 6px; border: 1px solid var(--border-color); font-family: var(--font-sans); font-weight: 500; white-space: normal; word-break: break-word; line-height: 1.2; text-align: center;">Panchayati Raj</div>
                </div>

                <!-- Node 2: Relevant Details -->
                <div class="ia-node" id="node-details" style="left: 30%; top: 66.6%;">
                  <span class="font-mono" style="font-size: 0.62rem; color: var(--color-accent); font-weight: bold; letter-spacing: 0.05em;">02 / CONCEPT</span>
                  <div style="font-size: 1.15rem; margin: 0.1rem 0;">📖</div>
                  <div class="font-serif" style="font-size: 0.88rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.1rem;" id="ia-details-title">Relevant Details</div>
                  <p style="font-size: 0.65rem; color: var(--text-secondary); line-height: 1.25; margin: 0; text-align: center;" id="ia-details-desc">
                    73rd Amendment, 3-tier local self-governance model.
                  </p>
                </div>

                <!-- Node 3: Interconnection Nudge -->
                <div class="ia-node pulsing-border" id="node-nudge" style="left: 50%; top: 33.3%;">
                  <span class="font-mono" style="font-size: 0.62rem; color: var(--color-brand); font-weight: bold; letter-spacing: 0.05em;">03 / COGNITIVE NUDGE</span>
                  <div style="font-size: 1.15rem; margin: 0.1rem 0;">🧠</div>
                  <div class="font-serif" style="font-size: 0.88rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.15rem;">Related Topics</div>
                  <div style="display: flex; flex-direction: column; gap: 0.25rem; width: 100%;" id="ia-nudge-list">
                    <span style="font-size: 0.58rem; padding: 0.12rem 0.25rem; background: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); color: var(--color-brand); font-family: var(--font-mono); font-weight: 500;">Fiscal Federalism ↗</span>
                    <span style="font-size: 0.58rem; padding: 0.12rem 0.25rem; background: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); color: var(--color-brand); font-family: var(--font-mono); font-weight: 500;">Rural Development ↗</span>
                  </div>
                </div>

                <!-- Node 4: Pathway Learning Journey -->
                <div class="ia-node" id="node-journey" style="left: 70%; top: 66.6%;">
                  <span class="font-mono" style="font-size: 0.62rem; color: var(--color-accent); font-weight: bold; letter-spacing: 0.05em;">04 / JOURNEY</span>
                  <div style="font-size: 1.15rem; margin: 0.1rem 0;">✨</div>
                  <div class="font-serif" style="font-size: 0.88rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.15rem;">Learning Journey</div>
                  <div style="display: flex; flex-direction: column; gap: 0.15rem; align-items: flex-start; text-align: left; width: 100%;" id="ia-journey-steps">
                    <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">🟢 1. Constitutional Basis</span>
                    <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">🟡 2. Financial Challenges</span>
                    <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">⚪ 3. Local Taxation</span>
                  </div>
                </div>

                <!-- Node 5: Syllabus Completion -->
                <div class="ia-node" id="node-completion" style="left: 90%; top: 50%;">
                  <span class="font-mono" style="font-size: 0.62rem; color: var(--color-success); font-weight: bold; letter-spacing: 0.05em;">05 / MASTERY</span>
                  <div style="font-size: 1.15rem; margin: 0.1rem 0;">🏆</div>
                  <div class="font-serif" style="font-size: 0.88rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.1rem;">Syllabus Progress</div>
                  <div style="display: flex; align-items: center; justify-content: center; gap: 0.3rem; width: 100%; margin-top: 0.15rem;">
                    <div style="flex: 1; height: 5px; background: var(--border-color); border-radius: 3px; overflow: hidden;">
                      <div id="ia-progress-bar" style="width: 12%; height: 100%; background: var(--color-success); border-radius: 3px; transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);"></div>
                    </div>
                    <span id="ia-progress-text" class="font-mono" style="font-size: 0.58rem; font-weight: bold; color: var(--color-success);">12%</span>
                  </div>
                </div>
              </div>
            </div>
            <p class="font-mono" style="font-size: 0.75rem; margin-top: 1rem; color: var(--text-muted); text-align: center;">
              💡 Click any stage in the flowchart to inspect the path highlights or trigger topic shifts!
            </p>
          </div>
        </section>

        <!-- Quote Nudge: Beta Testing Feedback -->
        <div class="text-nudge stagger-el" style="font-size: clamp(1.1rem, 2.5vw, 1.6rem); line-height: 1.45; padding: 2.5rem 0; border-bottom: 1px solid var(--border-color);">
          "The new syllabus structure and interconnected topics helped me develop a stronger sense of grounding during preparation."
          <span class="quote-author" style="display: block; margin-top: 0.75rem; font-size: 0.8rem; font-family: var(--font-sans); font-weight: 400; color: var(--text-muted); letter-spacing: 0;">— Student feedback after beta testing</span>
        </div>

        <!-- Product Video 2 -->
        <section class="body-chapter" style="padding-top: 2.5rem; padding-bottom: 0; margin-bottom: 0;">
          <div style="position: relative; width: 100%; padding-bottom: 56.25%; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color); background: #000;">
            <iframe
              src="https://www.youtube-nocookie.com/embed/bIwgCcSkIAQ?rel=0&modestbranding=1&color=white"
              title="Yooki — Detailed Walkthrough"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
            ></iframe>
          </div>
        </section>


        <!-- Solution Path Section Wrapper -->
        <div class="solution-path-section">
          <!-- Solution Path Tabs -->
          <div class="solution-path-container">
            <span class="chapter-num font-mono" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.05em;">/ THE SOLUTION PATH</span>
            <div class="solution-tabs">
              <button class="solution-tab-btn active" data-chapter="1">
                <span class="tab-num">CHAPTER 01</span>
                <span class="tab-title">Creating Grounding Within Preparation</span>
              </button>
              <button class="solution-tab-btn" data-chapter="2">
                <span class="tab-num">CHAPTER 02</span>
                <span class="tab-title">Making Topic Relationships Visible</span>
              </button>
              <button class="solution-tab-btn" data-chapter="3">
                <span class="tab-num">CHAPTER 03</span>
                <span class="tab-title">Designing Measurable Preparation Behavior</span>
              </button>
              <button class="solution-tab-btn" data-chapter="4">
                <span class="tab-num">CHAPTER 04</span>
                <span class="tab-title">Designing Contextual AI Guidance</span>
              </button>
            </div>
          </div>

          <!-- Solution Chapters -->
          <div class="solution-chapters-container">
            <!-- Chapter 1 -->
            <div class="solution-chapter-content active" data-chapter-content="1">
              <section class="body-chapter">
                <span class="chapter-num font-mono">CHAPTER 1</span>
                <h2 class="chapter-title font-serif">Creating Grounding Within Preparation</h2>
                <p class="chapter-desc">
                  We designed grounding parameters to make weak and neglected areas visible. Instead of flat progress lists, the interface exposes preparation signals in real time. We realized that information scarcity wasn't the issue; cognitive overload was.
                </p>
                <div class="user-quote-callout">
                  "I wasn't trying to reduce the complexity of UPSC preparation — I was trying to make the complexity navigable."
                  <span class="quote-author">— Lead UX Architect</span>
                </div>
              </section>
            </div>

            <!-- Chapter 2 -->
            <div class="solution-chapter-content" data-chapter-content="2">
              <section class="body-chapter">
                <span class="chapter-num font-mono">CHAPTER 2</span>
                <h2 class="chapter-title font-serif">Making Topic Relationships Visible</h2>
                <p class="chapter-desc">
                  UPSC topics rarely exist independently. Governance overlaps with polity, economy intersects with current affairs, and environmental issues connect across multiple preparation layers. We designed interconnected syllabus pathways so aspirants could explore contextual relationships between subjects.
                </p>
                <div class="user-quote-callout">
                  "UPSC topics rarely exist independently."
                  <span class="quote-author">— An Experienced UPSC Coach</span>
                </div>
                <p class="chapter-desc" style="margin-top: 1.5rem;">
                  Supporting associative learning behaviour meant helping aspirants remember concepts through relationships rather than isolated memorisation. The system visualised preparation distribution across subjects — moving from linear completion percentages to a connected syllabus ecosystem.
                </p>
                <div class="user-quote-callout" style="margin-top: 1rem;">
                  "Large syllabus systems can quickly become visually exhausting."
                  <span class="quote-author">— Frustrated UPSC aspirant, user testing</span>
                </div>
              </section>
            </div>

            <!-- Chapter 3 -->
            <div class="solution-chapter-content" data-chapter-content="3">
              <section class="body-chapter">
                <span class="chapter-num font-mono">CHAPTER 3</span>
                <h2 class="chapter-title font-serif">Designing Measurable Preparation Behavior</h2>
                <p class="chapter-desc">
                  Large syllabus structures can quickly become difficult to interpret visually. We introduced a colour-coded interaction system that communicated preparation states, topic depth, and learning intensity — turning abstract study patterns into legible visual signals.
                </p>

                <!-- Problem / Solution Cards -->
                <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 1.5rem;">
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div style="padding: 1.25rem; background: rgba(255,59,48,0.06); border: 1px solid rgba(255,59,48,0.18); border-radius: var(--border-radius-md);">
                      <span class="font-mono" style="font-size: 0.65rem; color: #ff3b30; font-weight: 700; letter-spacing: 0.08em;">PROBLEM</span>
                      <h4 style="margin: 0.5rem 0 0.35rem; font-size: 1rem; font-weight: 600; color: var(--text-primary);">Neglected areas are invisible</h4>
                      <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">Aspirants couldn't see which topics had gone unstudied for weeks — or which subjects they were systematically avoiding.</p>
                    </div>
                    <div style="padding: 1.25rem; background: rgba(52,199,89,0.06); border: 1px solid rgba(52,199,89,0.2); border-radius: var(--border-radius-md);">
                      <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; letter-spacing: 0.08em;">SOLUTION</span>
                      <h4 style="margin: 0.5rem 0 0.35rem; font-size: 1rem; font-weight: 600; color: var(--text-primary);">Colour intensity encodes recency and depth</h4>
                      <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">A topic studied yesterday looks different from one studied three weeks ago. The system makes neglect legible at a glance.</p>
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div style="padding: 1.25rem; background: rgba(255,59,48,0.06); border: 1px solid rgba(255,59,48,0.18); border-radius: var(--border-radius-md);">
                      <span class="font-mono" style="font-size: 0.65rem; color: #ff3b30; font-weight: 700; letter-spacing: 0.08em;">PROBLEM</span>
                      <h4 style="margin: 0.5rem 0 0.35rem; font-size: 1rem; font-weight: 600; color: var(--text-primary);">Weak areas stay hidden</h4>
                      <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">Quiz performance and revision patterns pointed to weak areas — but this signal was buried in a separate analytics screen no one opened.</p>
                    </div>
                    <div style="padding: 1.25rem; background: rgba(52,199,89,0.06); border: 1px solid rgba(52,199,89,0.2); border-radius: var(--border-radius-md);">
                      <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; letter-spacing: 0.08em;">SOLUTION</span>
                      <h4 style="margin: 0.5rem 0 0.35rem; font-size: 1rem; font-weight: 600; color: var(--text-primary);">Weakness surfaced directly on the topic graph</h4>
                      <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">Weak areas appear as a secondary visual layer on the topic graph — making them impossible to overlook during normal navigation.</p>
                    </div>
                  </div>
                </div>

                <p class="chapter-desc" style="margin-top: 1.75rem;">
                  We designed a layered progress system that measured preparation across syllabus coverage, topic engagement, and interconnected learning activity — translating preparation into visible learning signals that made the next action obvious.
                </p>
              </section>
            </div>

            <!-- Chapter 4 -->
            <div class="solution-chapter-content" data-chapter-content="4">
              <section class="body-chapter">
                <span class="chapter-num font-mono">CHAPTER 4</span>
                <h2 class="chapter-title font-serif">Designing Contextual AI Guidance</h2>
                <p class="chapter-desc">
                  Standard AI assistants answer questions. What UPSC aspirants needed was different — an AI that understood where they were in their preparation and could orient them, not just inform them.
                </p>

                <!-- Problem / Decision Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem; margin-bottom: 1.75rem;">
                  <div style="padding: 1.25rem; background: rgba(255,59,48,0.06); border: 1px solid rgba(255,59,48,0.18); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: #ff3b30; font-weight: 700; letter-spacing: 0.08em;">THE PROBLEM</span>
                    <p style="margin: 0.6rem 0 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">Standard AI assistants answer questions. What UPSC aspirants needed was an AI that understood where they were in preparation and could orient them — not just inform them.</p>
                  </div>
                  <div style="padding: 1.25rem; background: rgba(52,199,89,0.06); border: 1px solid rgba(52,199,89,0.2); border-radius: var(--border-radius-md);">
                    <span class="font-mono" style="font-size: 0.65rem; color: #34c759; font-weight: 700; letter-spacing: 0.08em;">THE DECISION</span>
                    <p style="margin: 0.6rem 0 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">Build the AI guidance layer on top of the topic graph. Every response is contextualised by the user's preparation spread — connected syllabus relationships, study behaviour, and surrounding context.</p>
                  </div>
                </div>

                <!-- Interactive AI Sandbox -->
                <div class="interactive-flow-sandbox">
                  <div class="ai-dialogue-sandbox">
                    <div class="chat-bubble user" id="ai-user-bubble">
                      Select a question below to ask Yooki AI...
                    </div>
                    <div class="chat-bubble assistant" id="ai-response-bubble" style="min-height: 80px; display: block; padding: 1.25rem;">
                      Hi, I'm your Yooki Assistant. Ask me a question based on your preparation history!
                    </div>
                    <div class="prompt-suggestions">
                      <button class="prompt-chip" data-prompt="polity">"I studied Panchayati Raj today. What should I review next?"</button>
                      <button class="prompt-chip" data-prompt="exam">"Which area should I revise before my mock exam next week?"</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>


        <!-- Conclusion Section -->
        <section class="body-chapter stagger-el" style="border-top: 1px solid var(--border-color); padding-top: 2.5rem; margin-top: 0;">
          <span class="chapter-num font-mono" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.08em;">/ CONCLUSION</span>
          <p class="chapter-desc" style="margin-top: 0.75rem; margin-bottom: 2.5rem; max-width: 600px;">
            The system transformed the syllabus from a static preparation document into a navigable learning ecosystem.
          </p>

          <!-- Insight Cards Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">

            <!-- Card 1 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">&#x1F9ED;</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">01 / NAVIGATION</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">Complexity doesn&#39;t need to be removed &#8212; it needs to be made navigable.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">The full UPSC syllabus structure was preserved, but made approachable through preparation spread, topic relationships, and colour-coded depth signals.</p>
            </div>

            <!-- Card 2 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">&#x1F4CD;</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">02 / ORIENTATION</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">The key design decision was to prioritise orientation over information.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Rather than surfacing more content, Yooki focused on helping aspirants understand where they were &#8212; which turned out to be the missing layer entirely.</p>
            </div>

            <!-- Card 3 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">&#x1F9E0;</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">03 / AI DESIGN</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">Contextual AI is more useful than reactive AI.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Grounding every AI response in the user&#39;s preparation graph produced suggestions that felt relevant rather than generic &#8212; the difference between advice and orientation.</p>
            </div>

            <!-- Card 4 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">&#x1F9F1;</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">04 / CONSISTENCY</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">The same visual primitives extended across the entire system.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Preparation spread, topic colour, and connection mapping applied equally to navigation, AI guidance, and revision planning &#8212; without requiring structural changes.</p>
            </div>

          </div>

          <!-- Card 5 - Full width -->
          <div style="margin-top: 1rem; padding: 1.75rem; background: linear-gradient(135deg, rgba(var(--color-brand-rgb, 255,109,0), 0.06) 0%, var(--bg-card) 100%); border: 1px solid var(--color-brand); border-radius: var(--border-radius-lg); display: flex; gap: 1.5rem; align-items: flex-start;">
            <span style="font-size: 1.8rem; line-height: 1; flex-shrink: 0; margin-top: 0.15rem;">&#x1F4C8;</span>
            <div>
              <span class="font-mono" style="font-size: 0.6rem; color: var(--color-brand); letter-spacing: 0.08em;">05 / SCALABILITY</span>
              <p style="margin: 0.4rem 0 0.5rem; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">The system is built to scale.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Conception tracking, current affairs integration, and future AI-assisted review flows can all be added using the same graph-based foundation &#8212; without rearchitecting the product.</p>
            </div>
          </div>

        </section>

      </div>
    </article>
  `;
}

// ==========================================================================
// PROJECT 2 (CENDROL CONSTRUCT)
// ==========================================================================
export function renderProject2() {
  return `
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-brand)">FIELD OPERATIONS / WORKFLOW DESIGN</span>
        <h1 class="project-headline font-serif">Cendrol: Streamlining expense workflows for field engineers</h1>
      </header>

      <div class="project-intro-grid stagger-el stagger-delay-2" style="grid-template-columns: 1fr; border-bottom: none; margin-bottom: 1rem; padding-bottom: 0;">
        <p class="project-intro-text" style="max-width: 800px;">
          Cendrol Construct manages distributed on-site building operations. Site engineers submit hundreds of expense claims weekly for local materials. The existing workflow was chaotic, filled with illegible receipts, missing invoices, and prolonged approval lag that stalled site work.
        </p>
      </div>

      <div class="project-body stagger-el stagger-delay-3">
        
        <!-- The Legacy Chaos Sticky Scroll Section -->
        <section class="cendrol-scroll-section">
          <div class="cendrol-scroll-sticky">
            <!-- Left Side: Sticky Visuals Card -->
            <div class="cendrol-visuals-container">
              <div class="cendrol-visual-item active">
                <img src="./cendrol_c1.png" alt="Frame 1: Engineer spends money" loading="eager">
              </div>
              <div class="cendrol-visual-item">
                <img src="./cendrol_c2.png" alt="Frame 2: Receipts pile up" loading="lazy">
              </div>
              <div class="cendrol-visual-item">
                <img src="./cendrol_c3.png" alt="Frame 3: Submission becomes confusing" loading="lazy">
              </div>
              <div class="cendrol-visual-item">
                <img src="./cendrol_c4.png" alt="Frame 4: Finance team struggles" loading="lazy">
              </div>
              <div class="cendrol-visual-item">
                <img src="./cendrol_c5.png" alt="Frame 5: Reimbursement gets delayed" loading="lazy">
              </div>
            </div>
          </div>

          <!-- Right Side: Scrolling Narrative Steps -->
          <div class="cendrol-narrative-container">
            <div class="cendrol-narrative-step active">
              <span class="cendrol-step-badge">STAGE 01 / THE SPEND</span>
              <h3 class="cendrol-step-title">Engineer spends money</h3>
              <p class="cendrol-step-desc">Site engineers purchase local construction materials directly in the field to prevent project delays.</p>
            </div>
            <div class="cendrol-narrative-step">
              <span class="cendrol-step-badge">STAGE 02 / THE ACCUMULATION</span>
              <h3 class="cendrol-step-title">Receipts pile up</h3>
              <p class="cendrol-step-desc">Dozens of paper receipts and handwritten merchant invoices build up rapidly throughout the week.</p>
            </div>
            <div class="cendrol-narrative-step">
              <span class="cendrol-step-badge">STAGE 03 / THE SUBMISSION</span>
              <h3 class="cendrol-step-title">Submission becomes confusing</h3>
              <p class="cendrol-step-desc">Sharing low-quality, blurry receipt captures over chat channels results in lost records and details.</p>
            </div>
            <div class="cendrol-narrative-step">
              <span class="cendrol-step-badge">STAGE 04 / THE RECONCILIATION</span>
              <h3 class="cendrol-step-title">Finance team struggles</h3>
              <p class="cendrol-step-desc">The central billing team manually cross-checks, validates, and key-enters details from fragmented sources.</p>
            </div>
            <div class="cendrol-narrative-step">
              <span class="cendrol-step-badge">STAGE 05 / THE DELAY</span>
              <h3 class="cendrol-step-title">Reimbursement gets delayed</h3>
              <p class="cendrol-step-desc">Prolonged validation cycles and manual processing bottlenecks leave site engineers waiting weeks for refunds.</p>
            </div>
          </div>
        </section>

        <!-- Design Reality Check / Operating Environment Section -->
        <section class="body-chapter stagger-el" style="border-top: 1px solid var(--border-color); padding-top: 3.5rem; margin-top: 0; margin-bottom: 2.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.08em;">/ OPERATING ENVIRONMENT</span>
          <h2 class="chapter-title font-serif" style="font-size: 2.25rem; margin-top: 0.5rem; margin-bottom: 1rem;">Design Reality Check</h2>
          <p class="chapter-desc" style="max-width: 640px; margin-bottom: 2.5rem;">
            Designing for construction operations required shifting from clean laboratory assumptions to the messy, high-friction reality of on-site building environments. We had to design around six unyielding operational constraints:
          </p>

          <div class="cendrol-reality-grid">
            <!-- Constraint 1: Connectivity -->
            <div class="cendrol-reality-card">
              <div class="reality-card-media">
                <img src="./cendrol_network_offline.png" alt="Inconsistent Connectivity" loading="lazy">
              </div>
              <div class="reality-card-content">
                <div class="reality-card-badge font-mono">01 / CONNECTIVITY</div>
                <h3 class="reality-card-title font-serif">Dust &amp; Dead Zones</h3>
                <p class="reality-card-desc">Engineers operated across 50+ remote construction sites with highly inconsistent internet connectivity. Offline-first resilience was a functional mandate.</p>
              </div>
            </div>

            <!-- Constraint 2: Approval Stakeholders -->
            <div class="cendrol-reality-card">
              <div class="reality-card-media">
                <img src="./cendrol_approval_chain.png" alt="Stakeholder Approvals" loading="lazy">
              </div>
              <div class="reality-card-content">
                <div class="reality-card-badge font-mono">02 / STAKEHOLDERS</div>
                <h3 class="reality-card-title font-serif">Departmental Matrix</h3>
                <p class="reality-card-desc">Expense approvals spanned site managers, central billing desk audits, and CFO sign-offs. The design needed to coordinate multi-departmental approvals.</p>
              </div>
            </div>

            <!-- Constraint 3: Legacy Processes -->
            <div class="cendrol-reality-card">
              <div class="reality-card-media">
                <img src="./cendrol_legacy_paperwork.png" alt="Legacy Paperwork" loading="lazy">
              </div>
              <div class="reality-card-content">
                <div class="reality-card-badge font-mono">03 / LEGACY FLOWS</div>
                <h3 class="reality-card-title font-serif">Paperwork &amp; Chats</h3>
                <p class="reality-card-desc">Site operations were heavily reliant on physical receipts, handwritten invoices, and messy WhatsApp threads. Reconstructing this required capturing unstructured data.</p>
              </div>
            </div>

            <!-- Constraint 4: Digital Literacy -->
            <div class="cendrol-reality-card">
              <div class="reality-card-media">
                <img src="./cendrol_digital_literacy.png" alt="Digital Literacy" loading="lazy">
              </div>
              <div class="reality-card-content">
                <div class="reality-card-badge font-mono">04 / LITERACY</div>
                <h3 class="reality-card-title font-serif">Varying Skill Levels</h3>
                <p class="reality-card-desc">On-site engineers had diverse technical backgrounds. The interface required ultra-simple capture states, large buttons, and high-visibility guides.</p>
              </div>
            </div>

            <!-- Constraint 5: System Integration -->
            <div class="cendrol-reality-card">
              <div class="reality-card-media">
                <img src="./cendrol_system_integration.png" alt="System Integration" loading="lazy">
              </div>
              <div class="reality-card-content">
                <div class="reality-card-badge font-mono">05 / INTEGRATION</div>
                <h3 class="reality-card-title font-serif">Legacy ERP Bindings</h3>
                <p class="reality-card-desc">All expense claims had to flow directly into the company's pre-existing ERP and accounting database systems, maintaining operational consistency.</p>
              </div>
            </div>

            <!-- Constraint 6: Timelines & Resources -->
            <div class="cendrol-reality-card">
              <div class="reality-card-media">
                <img src="./cendrol_limited_timeline.png" alt="Timelines & Resources" loading="lazy">
              </div>
              <div class="reality-card-content">
                <div class="reality-card-badge font-mono">06 / TIMELINES</div>
                <h3 class="reality-card-title font-serif">3-Month Launch Window</h3>
                <p class="reality-card-desc">With limited developer hours and a tight 3-month release timeline, design concepts had to prioritize high-leverage UX patterns that were quick to build.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Solution Path Section Wrapper -->
        <div class="solution-path-section">
          <!-- Solution Path Tabs -->
          <div class="solution-path-container">
            <span class="chapter-num font-mono" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.05em;">/ THE SOLUTION PATH</span>
            <div class="solution-tabs">
              <button class="solution-tab-btn active" data-chapter="1">
                <span class="tab-num">CHAPTER 01</span>
                <span class="tab-title">Simplifying expense tracking</span>
              </button>
              <button class="solution-tab-btn" data-chapter="2">
                <span class="tab-num">CHAPTER 02</span>
                <span class="tab-title">Creating clearer reimbursement workflows</span>
              </button>
              <button class="solution-tab-btn" data-chapter="3">
                <span class="tab-num">CHAPTER 03</span>
                <span class="tab-title">Designing for faster operational clarity</span>
              </button>
            </div>
          </div>

          <!-- Solution Chapters -->
          <div class="solution-chapters-container">
            <!-- Chapter 1 -->
            <div class="solution-chapter-content active" data-chapter-content="1">
              <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-brand)">CHAPTER 1</span>
                <h2 class="chapter-title font-serif">Simplifying expense tracking</h2>
                
                <div class="chapter-sub-section" style="margin-top: 1.5rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Making submissions easier to manage</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    Expense submissions were spread across multiple stages, making tracking difficult during active site operations. The experience was redesigned to simplify submission flows and reduce operational friction during reimbursement requests.
                  </p>
                  <div class="project-media-wrapper" style="margin: 1.5rem 0; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card);">
                    <video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; object-fit: cover;">
                      <source src="./cendrol_video1.mp4" type="video/mp4">
                    </video>
                  </div>
                </div>

                <div class="chapter-sub-section" style="margin-top: 2.5rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Designing for admin-side tracking and approvals</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    Managing reimbursements across distributed project sites often felt fragmented. The redesigned experience surfaced approval progress, reimbursement status, and pending actions more clearly.
                  </p>
                  <div class="project-media-wrapper" style="margin: 1.5rem 0; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card);">
                    <video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; object-fit: cover;">
                      <source src="./cendrol_video2.mp4" type="video/mp4">
                    </video>
                  </div>
                </div>

                <div class="chapter-sub-section" style="margin-top: 2.5rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Improving reimbursement visibility</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    Engineers often struggled to understand approval status after submitting expenses. The system introduced clearer reimbursement states and approval visibility across the workflow.
                  </p>
                  <div class="project-media-wrapper" style="margin: 1.5rem 0; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card);">
                    <video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; object-fit: cover;">
                      <source src="./cendrol_video3.mp4" type="video/mp4">
                    </video>
                  </div>
                </div>

                <div class="user-quote-callout" style="border-left: 4px solid var(--color-brand); margin-top: 2.5rem;">
                  “Engineers struggled to track where reimbursements were getting delayed.”
                  <span class="quote-author">— Founder (Pooja Seth)</span>
                </div>
              </section>
            </div>

            <!-- Chapter 2 -->
            <div class="solution-chapter-content" data-chapter-content="2">
              <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-brand)">CHAPTER 2</span>
                <h2 class="chapter-title font-serif">Creating clearer reimbursement workflows</h2>

                <div class="chapter-sub-section" style="margin-top: 1.5rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Reducing confusion across approval stages</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    The earlier workflow lacked clear progression between submission, approval, and reimbursement stages. We introduced structured workflow states that helped engineers understand where requests stood within the process.
                  </p>
                  <div class="project-media-wrapper" style="margin: 1.5rem 0; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card);">
                    <video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; object-fit: cover;">
                      <source src="./cendrol_video4.mp4" type="video/mp4">
                    </video>
                  </div>
                </div>

                <!-- Interactive Sandbox state flow timeline widget -->
                <div class="interactive-flow-sandbox" style="margin: 2.5rem 0; padding: 1.5rem; background: var(--bg-card); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color);">
                  <span class="font-mono label" style="font-size: 0.65rem;">INTERACTIVE SANDBOX: STATE TIMELINE</span>
                  <div class="state-flow-sandbox" id="state-sandbox">
                    <div class="state-step active" data-step="1">Submitted</div>
                    <div class="state-step" data-step="2">Audited</div>
                    <div class="state-step" data-step="3">Approved</div>
                    <div class="state-step" data-step="4">Reimbursed</div>
                  </div>
                  <p id="state-status-msg" class="font-mono" style="font-size: 0.825rem; margin-top: 1.25rem; color: var(--color-brand); text-align: center;">
                    Stage 1 (Submitted): Your invoice images have been submitted and are queued for central accounting desk audits.
                  </p>
                </div>

                <div class="chapter-sub-section" style="margin-top: 2.5rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Making reimbursement progress easier to follow</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    Managing reimbursements across distributed project sites often felt fragmented. The redesigned experience surfaced approval progress, reimbursement status, and pending actions more clearly.
                  </p>
                  <div class="project-media-wrapper" style="margin: 1.5rem 0; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card);">
                    <video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; object-fit: cover;">
                      <source src="./cendrol_video5.mp4" type="video/mp4">
                    </video>
                  </div>
                </div>

                <div class="user-quote-callout" style="border-left: 4px solid var(--color-accent); margin-top: 2.5rem;">
                  "but when we can't read the amount or the vendor name, what can we do?"
                  <span class="quote-author">— Site Engineer feedback after beta testing</span>
                </div>
              </section>
            </div>

            <!-- Chapter 3 -->
            <div class="solution-chapter-content" data-chapter-content="3">
              <section class="body-chapter" style="padding-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-brand)">CHAPTER 3</span>
                <h2 class="chapter-title font-serif">Designing for faster operational clarity</h2>

                <div class="chapter-sub-section" style="margin-top: 1.5rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Improving usability across distributed operations</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    The experience was designed to support quicker tracking, easier navigation, and reduced workflow friction across operational environments. Clearer layouts, status visibility, and structured interaction patterns improved scannability during day-to-day operations.
                  </p>
                  <div class="project-media-wrapper" style="margin: 1.5rem 0; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card);">
                    <video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; object-fit: cover;">
                      <source src="./cendrol_video6.mp4" type="video/mp4">
                    </video>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <!-- Conclusion Section -->
        <section class="body-chapter stagger-el" style="border-top: 1px solid var(--border-color); padding-top: 2.5rem; margin-top: 0; margin-bottom: 1.5rem;">
          <span class="chapter-num font-mono" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.08em;">/ CONCLUSION</span>
          <p class="chapter-desc" style="margin-top: 0.75rem; margin-bottom: 2.5rem; max-width: 600px;">
            The Cendrol expense claims redesign successfully transformed a slow, chaotic accounting loop into a streamlined, high-efficiency operational tool.
          </p>

          <!-- Insight Cards Grid -->
          <div class="cendrol-reality-grid">

            <!-- Card 1 -->
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); overflow: hidden; display: flex; flex-direction: column;" class="conclusion-card-hover">
              <div style="width: 100%; height: 160px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
                <img src="./cendrol_conclusion_offline.png" alt="Offline Resilience" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
              </div>
              <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; justify-content: center;">
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">01 / OFFLINE RESILIENCE</span>
                <p style="margin: 0; font-size: 1.05rem; font-weight: 600; color: var(--color-brand); line-height: 1.35; font-family: var(--font-serif);">Offline-first is a functional mandate.</p>
                <p style="margin: 0; font-size: 0.825rem; color: var(--text-secondary); line-height: 1.55;">Local caching and database synchronization allowed supervisors to capture expenses instantly in network dead zones, batch-uploading queue files once back online.</p>
              </div>
            </div>

            <!-- Card 2 -->
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); overflow: hidden; display: flex; flex-direction: column;" class="conclusion-card-hover">
              <div style="width: 100%; height: 160px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
                <img src="./cendrol_conclusion_literacy.png" alt="Accessible Interface" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
              </div>
              <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; justify-content: center;">
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">02 / ACCESSIBILITY</span>
                <p style="margin: 0; font-size: 1.05rem; font-weight: 600; color: var(--color-brand); line-height: 1.35; font-family: var(--font-serif);">Design for low literacy and high stress.</p>
                <p style="margin: 0; font-size: 0.825rem; color: var(--text-secondary); line-height: 1.55;">Replacing dense text fields with prominent visual camera triggers, guided outlines, and automated receipt OCR scans enabled frictionless use with minimal training.</p>
              </div>
            </div>

            <!-- Card 3 -->
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); overflow: hidden; display: flex; flex-direction: column;" class="conclusion-card-hover">
              <div style="width: 100%; height: 160px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
                <img src="./cendrol_conclusion_approval.png" alt="Timeline Transparency" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
              </div>
              <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; justify-content: center;">
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">03 / TRANSPARENCY</span>
                <p style="margin: 0; font-size: 1.05rem; font-weight: 600; color: var(--color-brand); line-height: 1.35; font-family: var(--font-serif);">Transparent workflows eliminate communication lag.</p>
                <p style="margin: 0; font-size: 0.825rem; color: var(--text-secondary); line-height: 1.55;">Exposing real-time tracking states stopped repetitive status inquiries via calls and chats, reducing friction between central accounting and on-site crews.</p>
              </div>
            </div>

            <!-- Card 4 -->
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); overflow: hidden; display: flex; flex-direction: column;" class="conclusion-card-hover">
              <div style="width: 100%; height: 160px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
                <img src="./cendrol_conclusion_integration.png" alt="ERP Integration" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
              </div>
              <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; justify-content: center;">
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">04 / SYSTEM INTEGRATION</span>
                <p style="margin: 0; font-size: 1.05rem; font-weight: 600; color: var(--color-brand); line-height: 1.35; font-family: var(--font-serif);">Preserve downstream developer habits.</p>
                <p style="margin: 0; font-size: 0.825rem; color: var(--text-secondary); line-height: 1.55;">Seamless integration with the company's legacy ERP dashboard prevented database fragmentation, ensuring rapid adoption by accounting teams.</p>
              </div>
            </div>

          </div>

          <!-- Card 5 - Full width -->
          <div style="margin-top: 1.5rem; padding: 1.75rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%); border: 1px solid var(--color-brand); border-radius: var(--border-radius-lg); display: flex; gap: 1.5rem; align-items: flex-start;">
            <span style="font-size: 1.8rem; line-height: 1; flex-shrink: 0; margin-top: 0.15rem;">📈</span>
            <div>
              <span class="font-mono" style="font-size: 0.6rem; color: var(--color-brand); letter-spacing: 0.08em;">05 / OUTCOMES</span>
              <p style="margin: 0.4rem 0 0.5rem; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">Scaling operational throughput across regions.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Relieving receipt reconciliation overhead and workflow lag allowed Cendrol to shrink operational expense processing cycles from 18 days to 3 days, reducing inventory delays by 60%.</p>
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
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-bop)">MOBILE FINTECH / KYC REDESIGN</span>
        <h1 class="project-headline font-serif">Bank of Palestine: Simplifying Complex KYC Process</h1>
      </header>

      <div class="project-intro-grid stagger-el stagger-delay-2" style="grid-template-columns: 1fr; margin-bottom: 2.25rem;">
        <div class="intro-context-grid">
          
          <div class="intro-context-card context-theme">
            <div>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); letter-spacing: 0.05em; text-transform: uppercase;">01 / THE CONTEXT</span>
              <h3 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0.4rem 0 0; color: var(--text-primary); line-height: 1.2;">Legacy Onboarding Friction</h3>
            </div>
            <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">
              Opening a bank account remotely was historically blocked by compliance barriers, requiring customers to fill massive paper forms and make in-person branch visits.
            </p>
          </div>

          <div class="intro-context-card context-theme">
            <div>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); letter-spacing: 0.05em; text-transform: uppercase;">02 / THE COMPLIANCE CONSTRAINT</span>
              <h3 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0.4rem 0 0; color: var(--text-primary); line-height: 1.2;">Mandated Regulatory Audits</h3>
            </div>
            <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">
              Palestinian Central Bank regulations require active identity checks against government registries, biometric liveness validation, and contact verification.
            </p>
          </div>

          <div class="intro-context-card solution-theme">
            <div>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); letter-spacing: 0.05em; text-transform: uppercase;">03 / THE DESIGN GOAL</span>
              <h3 class="font-serif" style="font-size: 1.25rem; font-weight: 500; margin: 0.4rem 0 0; color: var(--text-primary); line-height: 1.2;">Momentum Over Complexity</h3>
            </div>
            <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">
              Rather than attempting to remove mandated fields, we focused on reducing friction through progressive disclosures, automated entries, and instant inline feedback.
            </p>
          </div>

        </div>
      </div>

      <div class="project-body stagger-el stagger-delay-3">
        
        <!-- Product Video -->
        <section class="body-chapter" style="padding-top: 0; margin-bottom: 1.5rem;">
          <div style="position: relative; width: 100%; padding-bottom: 56.25%; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color); background: #000;">
            <iframe
              src="https://www.youtube-nocookie.com/embed/60vHCVEFNEg?rel=0&modestbranding=1&color=white"
              title="Bank of Palestine — KYC Simplification Case Study"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
            ></iframe>
          </div>
        </section>

        <!-- Compliance Challenge Section -->
        <section class="body-chapter" style="border-bottom: 1px solid var(--border-color); padding-bottom: 2rem; margin-bottom: 0;">
          <span class="chapter-num font-mono" style="color: var(--color-bop)">/ THE CHALLENGE</span>
          <h2 class="chapter-title font-serif" style="font-size: 1.8rem; margin-top: 0.25rem;">Designing for Momentum Under Strict Regulation</h2>
          <p class="chapter-desc">
            In remote banking onboarding, regulatory compliance cannot be bypassed. The designer's job is not to reduce complexity by removing necessary security checks, but to minimize friction. The legacy flow had three critical design vulnerabilities:
          </p>
          <ul class="about-list" style="margin-top: 1.25rem; display: grid; grid-template-columns: 1fr; gap: 1rem;">
            <li class="about-list-item" style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
              <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary)">National ID OCR Alignments</h4>
              <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary)">Users repeatedly failed to upload their physical ID cards due to reflection glare, off-angle captures, or parsing timeout errors.</p>
            </li>
            <li class="about-list-item" style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
              <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary)">Registry Sync Latency</h4>
              <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary)">Querying governmental identity databases introduced a 10-15 second network delay, during which users assumed the app had crashed and exited.</p>
            </li>
            <li class="about-list-item" style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
              <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary)">Biometric Liveness Drop-offs</h4>
              <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary)">Identity mismatches between government registry photos and liveness selfie captures forced users out of the system, causing high drop-off rates.</p>
            </li>
          </ul>
        </section>

        <!-- Dynamic Onboarding Flowchart Simulator Section -->
        <section class="body-chapter bop-flowchart-section" style="border-bottom: 1px solid var(--border-color); padding-bottom: 2.5rem; margin-bottom: 0;">
          <span class="chapter-num font-mono" style="color: var(--color-bop);">/ THE INTERACTION MODEL</span>
          <h2 class="chapter-title font-serif" style="font-size: 1.8rem; margin-top: 0.25rem;">The Interactive Onboarding Pipeline</h2>
          <p class="chapter-desc" style="margin-bottom: 1.25rem;">
            To resolve friction while satisfying audits, we mapped every decision state. Select a scenario button below to trace how the digital experience guides users through compliance checks, handles database queries, and introduces in-app fallback loops when automatic validations fail.
          </p>

          <div class="bop-flowchart-card">
            <!-- Controls -->
            <div class="bop-flowchart-controls">
              <div class="bop-flowchart-btns">
                <button class="bop-flowchart-btn active" id="bop-btn-happy" data-path="happy">Happy Path (Local Citizen)</button>
                <button class="bop-flowchart-btn" id="bop-btn-foreign" data-path="foreign">Exception: Foreign Resident</button>
                <button class="bop-flowchart-btn" id="bop-btn-registry" data-path="registry">Exception: Registry Fail</button>
                <button class="bop-flowchart-btn" id="bop-btn-selfie" data-path="selfie">Exception: Selfie Discrepancy</button>
              </div>
              <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); font-weight: 600;">CLICK SCENARIO OR NODES TO VIEW DETAILS</span>
            </div>

            <!-- Scroll Wrapper for Flowchart -->
            <div class="bop-flowchart-scroll-wrapper">
              <div class="bop-flowchart-inner">
                <!-- SVG Connections Overlay -->
                <svg class="bop-flow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020 320" preserveAspectRatio="none">
                  
                  <!-- Connections (Default Gray) -->
                  <path id="bop-path-start-phone" d="M 60 160 L 170 160" class="bop-flow-path active-happy" />
                  <path id="bop-path-phone-residency" d="M 170 160 L 280 160" class="bop-flow-path active-happy" />
                  
                  <!-- Yes Branch -->
                  <path id="bop-path-residency-otp" d="M 280 160 C 320 160, 340 70, 400 70" class="bop-flow-path active-happy" />
                  <path id="bop-path-otp-enterid" d="M 400 70 L 520 70" class="bop-flow-path active-happy" />
                  <path id="bop-path-enterid-registry" d="M 520 70 L 640 70" class="bop-flow-path active-happy" />
                  
                  <!-- Registry Yes Branch -->
                  <path id="bop-path-registry-ocr" d="M 640 70 L 760 70" class="bop-flow-path active-happy" />
                  <path id="bop-path-ocr-liveness" d="M 760 70 L 760 160" class="bop-flow-path active-happy" />
                  <path id="bop-path-liveness-selfie" d="M 760 160 L 870 160" class="bop-flow-path active-happy" />
                  
                  <!-- Selfie Yes Branch -->
                  <path id="bop-path-selfie-vault" d="M 870 160 L 970 160" class="bop-flow-path active-happy" />

                  <!-- No Branch (Foreign Citizen) -->
                  <path id="bop-path-residency-foreign" d="M 280 160 C 320 160, 340 250, 400 250" class="bop-flow-path-dashed" />
                  <path id="bop-path-foreign-upload" d="M 400 250 L 520 250" class="bop-flow-path-dashed" />
                  <path id="bop-path-upload-approval" d="M 520 250 L 640 250" class="bop-flow-path-dashed" />
                  <path id="bop-path-approval-vault" d="M 640 250 C 780 250, 840 160, 970 160" class="bop-flow-path-dashed" />

                  <!-- Registry No Branch (Branch Visit) -->
                  <path id="bop-path-registry-branch" d="M 640 70 L 640 160" class="bop-flow-path-dashed" />

                  <!-- Selfie No Branch (Video Call) -->
                  <path id="bop-path-selfie-video" d="M 870 160 L 870 250" class="bop-flow-path-dashed" />

                  <!-- Traveling Flow Dot -->
                  <circle id="bop-flow-travel-dot" r="5.5" fill="var(--color-success)" style="offset-path: path('M 60 160 L 170 160');" class="bop-flow-dot" />
                </svg>

                <!-- Nodes Grid (Absolute Positions) -->
                <div class="bop-nodes-grid">
                  
                  <!-- Main Line Nodes -->
                  <div class="bop-node active-happy" id="bop-node-start" style="left: 60px; top: 160px;" data-node="start">
                    <span class="node-num">01 / START</span>
                    <span class="node-title">Start Onboarding</span>
                  </div>

                  <div class="bop-node active-happy" id="bop-node-entry" style="left: 170px; top: 160px;" data-node="entry">
                    <span class="node-num">02 / ENTRY</span>
                    <span class="node-title">Phone &amp; Email</span>
                  </div>

                  <!-- Decision Diamond 1: Local Check -->
                  <div class="bop-node diamond active-happy" id="bop-node-residency" style="left: 280px; top: 160px;" data-node="residency" title="Residency Check">
                    <div class="diamond-text">In Palestine?</div>
                  </div>

                  <!-- Happy Path Branch -->
                  <div class="bop-node active-happy" id="bop-node-otp" style="left: 400px; top: 70px;" data-node="otp">
                    <span class="node-num">03 / OTP</span>
                    <span class="node-title">OTP Validation</span>
                  </div>

                  <div class="bop-node active-happy" id="bop-node-enterid" style="left: 520px; top: 70px;" data-node="enterid">
                    <span class="node-num">04 / ID</span>
                    <span class="node-title">Enter ID Num</span>
                  </div>

                  <!-- Decision Diamond 2: Registry Match -->
                  <div class="bop-node diamond active-happy" id="bop-node-registry" style="left: 640px; top: 70px;" data-node="registry" title="Registry Validation">
                    <div class="diamond-text">ID Valid?</div>
                  </div>

                  <div class="bop-node active-happy" id="bop-node-ocr" style="left: 760px; top: 70px;" data-node="ocr">
                    <span class="node-num">05 / OCR</span>
                    <span class="node-title">OCR ID Scan</span>
                  </div>

                  <div class="bop-node active-happy" id="bop-node-liveness" style="left: 760px; top: 160px;" data-node="liveness">
                    <span class="node-num">06 / BIOMETRICS</span>
                    <span class="node-title">Liveness Check</span>
                  </div>

                  <!-- Decision Diamond 3: Selfie Match -->
                  <div class="bop-node diamond active-happy" id="bop-node-selfie" style="left: 870px; top: 160px;" data-node="selfie" title="Selfie Face Match">
                    <div class="diamond-text">Selfie Ok?</div>
                  </div>

                  <div class="bop-node active-happy" id="bop-node-vault" style="left: 970px; top: 160px;" data-node="vault">
                    <span class="node-num">07 / VAULT</span>
                    <span class="node-title">Account Created</span>
                  </div>

                  <!-- Exception Path 1: Foreign Citizen -->
                  <div class="bop-node" id="bop-node-foreign" style="left: 400px; top: 250px;" data-node="foreign">
                    <span class="node-num">03B / FORM</span>
                    <span class="node-title">Foreigner Form</span>
                  </div>

                  <div class="bop-node" id="bop-node-upload" style="left: 520px; top: 250px;" data-node="upload">
                    <span class="node-num">04B / UPLOAD</span>
                    <span class="node-title">Upload Passport</span>
                  </div>

                  <div class="bop-node" id="bop-node-approval" style="left: 640px; top: 250px;" data-node="approval">
                    <span class="node-num">05B / MANUAL</span>
                    <span class="node-title">Manual Review</span>
                  </div>

                  <!-- Exception Path 2: Registry Fail -->
                  <div class="bop-node" id="bop-node-branch" style="left: 640px; top: 160px;" data-node="branch">
                    <span class="node-num">04C / BRANCH</span>
                    <span class="node-title">Visit Branch</span>
                  </div>

                  <!-- Exception Path 3: Selfie Fail -->
                  <div class="bop-node" id="bop-node-video" style="left: 870px; top: 250px;" data-node="video">
                    <span class="node-num">06B / VIDEO</span>
                    <span class="node-title">Fallback Video Call</span>
                  </div>

                </div>
              </div>
            </div>

            <!-- Detail Display Overlay Card -->
            <div class="bop-flowchart-detail-card" id="bop-detail-card">
              <h4 id="bop-detail-title">Start Onboarding</h4>
              <div class="detail-grid">
                <div class="detail-item">
                  <span class="detail-label">DESIGN DECISION</span>
                  <div class="detail-val" id="bop-detail-decision">Introduce clear guidelines explaining what documents will be required during the onboarding session, setting proper user expectations and reducing drop-offs.</div>
                </div>
                <div class="detail-item">
                  <span class="detail-label">REGULATORY COMPLIANCE</span>
                  <div class="detail-val" id="bop-detail-compliance">Pre-onboarding checklist is required to ensure users do not start account creation without a valid ID or a stable network connection.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Design Strategy Breakout Nudge -->
        <div class="text-nudge stagger-el" style="color: var(--color-bop);">
          When compliance cannot be simplified, the designer's job is to design for momentum.
        </div>

        <!-- Product Video 2 -->
        <section class="body-chapter" style="padding-top: 2.5rem; padding-bottom: 0; margin-bottom: 0;">
          <div style="position: relative; width: 100%; padding-bottom: 56.25%; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color); background: #000;">
            <iframe
              src="https://www.youtube-nocookie.com/embed/36uU3LF_if0?rel=0&modestbranding=1&color=white"
              title="Bank of Palestine — KYC Detailed Walkthrough"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
            ></iframe>
          </div>
        </section>

        <!-- Solution Path Section Wrapper -->
        <div class="solution-path-section">
          <!-- Solution Path Tabs -->
          <div class="solution-path-container">
            <span class="chapter-num font-mono" style="color: var(--color-bop); font-size: 0.75rem; letter-spacing: 0.05em;">/ THE SOLUTION PATH</span>
            <div class="solution-tabs">
              <button class="solution-tab-btn active" data-chapter="1">
                <span class="tab-num">CHAPTER 01</span>
                <span class="tab-title">The Friction of Traditional Onboarding</span>
              </button>
              <button class="solution-tab-btn" data-chapter="2">
                <span class="tab-num">CHAPTER 02</span>
                <span class="tab-title">Streamlining Verification &amp; Trust</span>
              </button>
              <button class="solution-tab-btn" data-chapter="3">
                <span class="tab-num">CHAPTER 03</span>
                <span class="tab-title">Operational Impact &amp; Growth</span>
              </button>
            </div>
          </div>

          <!-- Solution Chapters -->
          <div class="solution-chapters-container">
            <!-- Chapter 1 -->
            <div class="solution-chapter-content active" data-chapter-content="1">
              <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-bop)">CHAPTER 1</span>
                <h2 class="chapter-title font-serif">The Friction of Traditional Onboarding</h2>
                
                <div class="chapter-sub-section" style="margin-top: 1.5rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Progressive Disclosures</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    Legacy onboarding required customers to fill massive forms with redundant data. The new experience introduces progressive disclosure: splitting inputs into logical chunks (Phone & Email, Palestinian ID Proof, and Selfie Capture) to ensure users understand the required credentials upfront.
                  </p>

                  <!-- Interactive Compliance Mapping Deck -->
                  <div class="bop-compliance-sandbox" style="margin-top: 2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.25rem;">
                      <div>
                        <span class="font-mono label" style="font-size: 0.65rem; color: var(--color-bop); display: block; margin-bottom: 0.25rem;">01.A / COMPLIANCE ENGINE</span>
                        <h3 class="font-serif" style="font-size: 1.35rem; font-weight: 500; margin: 0; color: var(--text-primary);">KYC Requirements &amp; Mapping</h3>
                      </div>
                      
                      <!-- View Toggle Tabs -->
                      <div class="bop-sandbox-toggle" style="display: flex; gap: 0.4rem; padding: 0.2rem; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color);">
                        <button class="bop-toggle-btn active" data-view="refined" style="padding: 0.35rem 0.75rem; border-radius: 6px; border: none; background: var(--bg-card); font-family: var(--font-mono); font-size: 0.65rem; font-weight: 600; cursor: pointer; color: var(--text-primary); transition: all 0.2s; box-shadow: var(--shadow-sm);">Refined Mapping</button>
                        <button class="bop-toggle-btn" data-view="sketch" style="padding: 0.35rem 0.75rem; border-radius: 6px; border: none; background: transparent; font-family: var(--font-mono); font-size: 0.65rem; font-weight: 600; cursor: pointer; color: var(--text-secondary); transition: all 0.2s;">Initial Sketchpad</button>
                      </div>
                    </div>

                    <!-- Refined View Container -->
                    <div id="bop-compliance-refined-view" style="display: block;">
                      <p class="chapter-desc" style="font-size: 0.85rem; line-height: 1.45; color: var(--text-muted); margin-bottom: 1rem;">
                        Under Palestinian Central Bank regulations, opening an active account requires collecting dense data checks. Below is an interactive map detailing Gokul's functional restructuring: select any handwritten compliance requirement on the left to see what information the app fetches from the telecom-linked government registry and which PMA guidelines apply.
                      </p>

                      <div class="bop-compliance-grid">
                      <!-- Left column: 13 steps -->
                      <div class="bop-compliance-steps" id="bop-compliance-steps-list">
                        <div class="bop-compliance-step-item active" data-step="1">
                          <span class="step-num">01</span>
                          <span class="step-text">Identity verification</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="2">
                          <span class="step-num">02</span>
                          <span class="step-text">Eligibility test</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="3">
                          <span class="step-num">03</span>
                          <span class="step-text">Existing account holder check</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="4">
                          <span class="step-num">04</span>
                          <span class="step-text">Add new account to my name</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="5">
                          <span class="step-num">05</span>
                          <span class="step-text">More about me (PEP check)</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="6">
                          <span class="step-num">06</span>
                          <span class="step-text">FATCA / Nationality check</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="7">
                          <span class="step-num">07</span>
                          <span class="step-text">Nominee &amp; spouse details</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="8">
                          <span class="step-num">08</span>
                          <span class="step-text">My address proof</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="9">
                          <span class="step-num">09</span>
                          <span class="step-text">Fund &amp; wealth info</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="10">
                          <span class="step-num">10</span>
                          <span class="step-text">Power of attorney</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="11">
                          <span class="step-num">11</span>
                          <span class="step-text">New account details allocation</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="12">
                          <span class="step-num">12</span>
                          <span class="step-text">E-services setup</span>
                        </div>
                        <div class="bop-compliance-step-item" data-step="13">
                          <span class="step-num">13</span>
                          <span class="step-text">Signature canvas</span>
                        </div>
                      </div>

                      <!-- Right column: bento mapping -->
                      <div class="bop-compliance-right">
                        
                        <!-- PMA Regulation Banner -->
                        <div class="bop-pma-alert">
                          <strong>PMA Regulatory Mandate:</strong> Standard fully functional bank accounts cannot be opened in Palestine without valid KYC (Know Your Customer) documents.
                        </div>

                        <!-- Grid representing app database/fetching -->
                        <div>
                          <div class="bop-bento-section-title">Database Sync (Auto-Fetched via Phone)</div>
                          <div class="bop-bento-layout">
                            <div class="bop-bento-card" data-fetch-card="id">
                              <span class="card-title">Customer Identification</span>
                              <span class="card-desc">Full Name, Palestinian ID &amp; Photo</span>
                            </div>
                            <div class="bop-bento-card" data-fetch-card="accounts">
                              <span class="card-title">Account Details</span>
                              <span class="card-desc">Linked Accounts &amp; Active Balances</span>
                            </div>
                            <div class="bop-bento-card" data-fetch-card="cards">
                              <span class="card-title">Card Information</span>
                              <span class="card-desc">Active Card Status &amp; Spending Limits</span>
                            </div>
                            <div class="bop-bento-card" data-fetch-card="history">
                              <span class="card-title">Transaction History</span>
                              <span class="card-desc">Recent Transfers, Deposits &amp; Payments</span>
                            </div>
                            <div class="bop-bento-card" data-fetch-card="profile">
                              <span class="card-title">Registered Profile</span>
                              <span class="card-desc">National Address, Email &amp; Registry Info</span>
                            </div>
                          </div>
                        </div>

                        <!-- Grid representing regulatory rules -->
                        <div>
                          <div class="bop-bento-section-title">PMA Compliance Framework</div>
                          <div class="bop-bento-layout">
                            <div class="bop-bento-card" data-rule-card="mandatory">
                              <span class="card-title">Mandatory KYC</span>
                              <span class="card-desc">Account creation is blocked until KYC checks pass.</span>
                            </div>
                            <div class="bop-bento-card" data-rule-card="docs">
                              <span class="card-title">Identity Proof</span>
                              <span class="card-desc">Requires local ID, Jerusalem ID, or foreign Passport.</span>
                            </div>
                            <div class="bop-bento-card" data-rule-card="updates">
                              <span class="card-title">Periodic Updates</span>
                              <span class="card-desc">KYC documents must refresh every 1–2 years.</span>
                            </div>
                            <div class="bop-bento-card" data-rule-card="risk">
                              <span class="card-title">Risk-Based Check</span>
                              <span class="card-desc">High-risk PEP clients trigger Enhanced Due Diligence.</span>
                            </div>
                            <div class="bop-bento-card" data-rule-card="types">
                              <span class="card-title">Every Citizen Account</span>
                              <span class="card-desc">No minimum balance limit, but full KYC is still required.</span>
                            </div>
                          </div>
                        </div>

                        <!-- Dynamic Explanation Box -->
                        <div class="bop-explanation-box">
                          <span class="exp-title" id="bop-exp-title">01 / Identity verification</span>
                          <span class="exp-text" id="bop-exp-text">
                            Handled progressively via the National ID OCR scan + liveness checks. Links to Customer Identification (Full Name, National ID Number).
                          </span>
                        </div>

                      </div>
                    </div> <!-- End of Refined View Container -->

                    <!-- Sketch View Container -->
                    <div id="bop-compliance-sketch-view" style="display: none; animation: fadeIn 0.3s ease-out;">
                      <div class="bop-sketch-grid" style="display: grid; grid-template-columns: 1.15fr 1.05fr; gap: 1.75rem; min-height: 520px; font-family: var(--font-sans);">
                        
                        <!-- Left Side: Notepad Sheet -->
                        <div class="bop-notepad" style="background: hsl(14, 100%, 98%); border: 1px solid rgba(224, 114, 88, 0.2); border-radius: var(--border-radius-md); box-shadow: var(--shadow-sm); padding: 1.5rem 1.5rem 1.5rem 2.25rem; position: relative; overflow: hidden; background-image: linear-gradient(rgba(224, 114, 88, 0.1) 1px, transparent 1px); background-size: 100% 2.1rem; line-height: 2.1rem;">
                          <!-- Notepad binder holes at the top -->
                          <div class="notepad-holes" style="position: absolute; top: 0.5rem; left: 0; right: 0; display: flex; justify-content: space-around; padding: 0 1rem; pointer-events: none; opacity: 0.6;">
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--bg-primary); border: 1px solid var(--border-color);"></div>
                          </div>
                          
                          <!-- Red vertical margin line -->
                          <div style="position: absolute; left: 1.75rem; top: 0; bottom: 0; width: 1px; background: rgba(224, 114, 88, 0.45); pointer-events: none;"></div>
                          
                          <div class="notepad-content" style="font-family: 'Kalam', 'Architects Daughter', 'Comic Sans MS', cursive, sans-serif; font-style: italic; color: #2e2825; font-size: 0.82rem; padding-top: 0.75rem; line-height: 2.1rem;">
                            <h4 style="font-family: inherit; font-size: 1.05rem; font-weight: bold; margin-bottom: 1rem; color: #b8432a; border-bottom: 1.5px dashed rgba(224, 114, 88, 0.3); padding-bottom: 0.25rem; font-style: inherit; line-height: normal;">Basic steps involved - functionality</h4>
                            
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
                            
                            <div style="font-family: inherit; font-weight: bold; color: #b8432a; font-size: 0.88rem; border-top: 1.5px dashed rgba(224, 114, 88, 0.3); padding-top: 0.4rem; line-height: normal; font-style: inherit;">
                              Completing kyc = creating new bank account
                            </div>
                          </div>
                        </div>
                        
                        <!-- Right Side: Dark Boxes Deck -->
                        <div class="bop-sketch-right" style="display: flex; flex-direction: column; gap: 1rem;">
                          
                          <!-- Box 1: PMA Regulation -->
                          <div class="bop-raw-box" style="background: #141416; color: #f5f5f7; border-radius: 12px; padding: 1.1rem; border: 1px solid #2d2d30; box-shadow: var(--shadow-sm); font-size: 0.8rem; line-height: 1.5;">
                            <p style="color: #929298; margin: 0; font-size: 0.76rem; font-family: var(--font-mono); margin-bottom: 0.5rem; letter-spacing: 0.05em; text-transform: uppercase;">01 / REGULATION STATEMENT</p>
                            Based on regulations set by the <span style="color: #ff7626; font-weight: 600; border-bottom: 1px dotted #ff7626;">Palestine Monetary Authority (PMA)</span> and policies of local banks, it is <strong style="color: #fff;">not possible</strong> to create a standard, fully functional bank account <strong style="color: #fff;">without KYC (Know Your Customer) documents</strong> in Palestine.
                          </div>
                          
                          <!-- Box 2: Phone Link Data -->
                          <div class="bop-raw-box" style="background: #141416; color: #f5f5f7; border-radius: 12px; padding: 1.1rem; border: 1px solid #2d2d30; box-shadow: var(--shadow-sm); font-size: 0.76rem; line-height: 1.45;">
                            <p style="color: #929298; margin: 0; font-size: 0.72rem; font-family: var(--font-mono); margin-bottom: 0.6rem; letter-spacing: 0.05em; text-transform: uppercase;">02 / PHONE NUMBER FETCH MAP</p>
                            <strong style="color: #fff; font-size: 0.82rem; display: block; margin-bottom: 0.5rem; border-bottom: 1px solid #2d2d30; padding-bottom: 0.25rem;">What the App Fetches/Links to Your Phone Number:</strong>
                            <ul style="list-style-type: none; display: flex; flex-direction: column; gap: 0.45rem; padding-left: 0;">
                              <li><strong style="color: #fff;">• Customer Identification:</strong> Your full name and Palestine National Identification Number.</li>
                              <li><strong style="color: #fff;">• Account Details:</strong> Linked bank account numbers, balances, and account activity (deposits, withdrawals, transfers).</li>
                              <li><strong style="color: #fff;">• Card Information:</strong> Active/inactive card status, cardholder name, and card limits.</li>
                              <li><strong style="color: #fff;">• Transaction History:</strong> Recent transactions and payment history.</li>
                              <li><strong style="color: #fff;">• Registered Profile:</strong> Address, email, and other personal information linked to your bank profile.</li>
                            </ul>
                          </div>
                          
                          <!-- Box 3: Compliance Mandates -->
                          <div class="bop-raw-box" style="background: #141416; color: #f5f5f7; border-radius: 12px; padding: 1.1rem; border: 1px solid #2d2d30; box-shadow: var(--shadow-sm); font-size: 0.76rem; line-height: 1.45;">
                            <p style="color: #929298; margin: 0; font-size: 0.72rem; font-family: var(--font-mono); margin-bottom: 0.6rem; letter-spacing: 0.05em; text-transform: uppercase;">03 / COMPLIANCE PARAMETERS</p>
                            <ul style="list-style-type: none; display: flex; flex-direction: column; gap: 0.45rem; padding-left: 0;">
                              <li><strong style="color: #fff;">• Mandatory:</strong> You cannot open a functional, active account without completing KYC.</li>
                              <li><strong style="color: #fff;">• Identity Documents:</strong> The primary document is your Palestinian ID (or Jerusalem ID/Passport for foreigners).</li>
                              <li><strong style="color: #fff;">• Periodic Updates:</strong> KYC is not a one-time thing. You must update your KYC documents regularly (e.g., every 1–2 years depending on risk level).</li>
                              <li><strong style="color: #fff;">• Risk-Based Approach:</strong> High-risk clients (like Politically Exposed Persons - PEPs) may undergo "Enhanced Due Diligence" (EDD), which requires deeper background checks.</li>
                              <li><strong style="color: #fff;">• Account Types:</strong> Specialized accounts like the "Account for Every Citizen" still require KYC, even if they have no minimum balance requirements.</li>
                            </ul>
                          </div>
                          
                        </div>
                      </div>
                    </div> <!-- End of Sketch View Container -->
                  </div>


                </div>
              </section>
            </div>

            <!-- Chapter 2 -->
            <div class="solution-chapter-content" data-chapter-content="2">
              <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-bop)">CHAPTER 2</span>
                <h2 class="chapter-title font-serif">Streamlining Verification &amp; Trust</h2>
                
                <div class="chapter-sub-section" style="margin-top: 1.5rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Building Interface Reassurance</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    To secure account creation while keeping it swift, we structured seamless OTP (One-Time Password) entry interfaces and progressive account selection. By displaying immediate inline feedback and clear error states, the system maintains a high sense of progress and confidence.
                  </p>

                  <!-- Interactive KYC Simulator Sandbox -->
                  <div class="interactive-flow-sandbox" style="margin: 2.5rem 0; padding: 1.5rem; background: var(--bg-card); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color);">
                    <span class="font-mono label" style="font-size: 0.65rem;">INTERACTIVE KYC FLOW SIMULATOR (CLICK TO ONBOARD)</span>
                    <div class="kyc-simulator-container" style="max-width: 320px; margin: 1.5rem auto; border: 1.5px solid var(--border-color); border-radius: 20px; overflow: hidden; background: var(--bg-secondary); box-shadow: var(--shadow-md);">
                      <div id="kyc-screen-content" style="padding: 1.5rem; min-height: 350px; display: flex; flex-direction: column; justify-content: space-between;">
                        <!-- Content will be injected dynamically -->
                      </div>
                    </div>
                    <p id="kyc-simulator-status" class="font-mono" style="font-size: 0.8rem; text-align: center; color: var(--color-bop); margin: 0.5rem 0 0;">
                      💡 Click through the simulator to experience the simplified onboarding flow!
                    </p>
                  </div>


                </div>
              </section>
            </div>

            <!-- Chapter 3 -->
            <div class="solution-chapter-content" data-chapter-content="3">
              <section class="body-chapter" style="padding-bottom: 0;">
                <span class="chapter-num font-mono" style="color: var(--color-bop)">CHAPTER 3</span>
                <h2 class="chapter-title font-serif">Operational Impact &amp; Growth</h2>
                
                <div class="chapter-sub-section" style="margin-top: 1.5rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Quantifiable Design Outcomes</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    Simplifying the form hierarchy and introducing modern biometric credentials (Face ID / Touch ID) reduced total verification time from 12 minutes to under 2 minutes. Onboarding completion rates increased by 85%, accelerating customer acquisition across distributed regions.
                  </p>
                </div>

                <div class="chapter-sub-section" style="margin-top: 2.5rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">Global Expansion &amp; Digital Readiness</h3>
                  <p class="chapter-desc" style="margin-top: 0.5rem;">
                    Digital transformation and simplified remote onboarding lay the groundwork for Bank of Palestine's global expansion. In a historic milestone, the bank received In-Principle Approval (IPA) from the Financial Services Regulatory Authority (FSRA) of Abu Dhabi Global Market (ADGM) to obtain a Category 1 banking license.
                  </p>
                  
                  <!-- ADGM Announcement Card -->
                  <div class="adgm-announcement-card" style="margin: 1.5rem 0; padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
                      <div>
                        <span class="font-mono label" style="font-size: 0.6rem; color: var(--color-bop); letter-spacing: 0.05em;">NEWS ANNOUNCEMENT / ADGM CENTER</span>
                        <h4 class="font-serif" style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin: 0.25rem 0 0; line-height: 1.2;">BOP Expands Globally After Receiving CAT1 IPA from ADGM</h4>
                      </div>
                      <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted); background: var(--bg-card); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-color); white-space: nowrap;">H2 2026 OPERATIONAL</span>
                    </div>
                    
                    <p style="font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary); margin: 0;">
                      The Category 1 (CAT1) License from the FSRA of ADGM enables Bank of Palestine Group to launch its international entity, <strong>Bank of Palestine – Global Ltd.</strong>, led by CEO Linda Tarazi. This expansion allows the bank to accept deposits and arrange deals in investments, directly targeting the global Palestinian diaspora.
                    </p>
                    
                    <blockquote style="font-style: italic; border-left: 3px solid var(--color-bop); padding-left: 1rem; margin: 0.5rem 0; font-size: 0.8rem; color: var(--text-muted); line-height: 1.45;">
                      “This is a historic milestone for Bank of Palestine, ushering in a new era of global reach, digital excellence, and future-proof banking and wealth management.”
                      <span style="display: block; font-style: normal; font-size: 0.7rem; font-weight: bold; margin-top: 0.25rem; color: var(--text-secondary);">— Hashim Shawa, Chairman of Bank of Palestine Group</span>
                    </blockquote>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem;">
                      <span class="font-mono" style="font-size: 0.65rem; color: var(--text-muted);">Launchpad: Abu Dhabi Global Market (ADGM)</span>
                      <a href="https://www.adgm.com/media/announcements/bank-of-palestine-expands-globally-after-receiving-an-ipa-for-a-full-banking-license-from-adgm" target="_blank" rel="noopener" class="font-mono" style="font-size: 0.65rem; color: var(--color-bop); font-weight: 600; text-decoration: underline; transition: color 0.2s;">
                        READ FULL ANNOUNCEMENT ↗
                      </a>
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </div>

        <!-- Conclusion Section -->
        <section class="body-chapter stagger-el" style="border-top: 1px solid var(--border-color); padding-top: 2.5rem; margin-top: 0;">
          <span class="chapter-num font-mono" style="color: var(--color-bop); font-size: 0.75rem; letter-spacing: 0.08em;">/ CONCLUSION</span>
          <p class="chapter-desc" style="margin-top: 0.75rem; margin-bottom: 2.5rem; max-width: 600px;">
            The remote KYC redesign transformed a fragmented compliance checklist into a seamless, secure, and user-centric onboarding experience.
          </p>

          <!-- Insight Cards Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">

            <!-- Card 1 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">🛡️</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">01 / REGULATION</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-bop); line-height: 1.45;">Compliance doesn't mean compromising on user experience.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">The team worked within strict PMA regulatory constraints. Rather than trying to remove mandated fields, we simplified data entry via automated governmental registry queries and clean progressive steps.</p>
            </div>

            <!-- Card 2 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">⚡</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">02 / AUTOMATION</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-bop); line-height: 1.45;">Make friction invisible through intelligent technology.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Integrating document OCR scanning and real-time biometric liveness checks reduced remote account setup times from 12 minutes to under 2 minutes, minimizing drop-offs.</p>
            </div>

            <!-- Card 3 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">🤝</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">03 / TRANSPARENCY</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-bop); line-height: 1.45;">Security and confidence require micro-feedback.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Providing clean, step-by-step guidance and inline feedback during biometric processing built user trust, resolving concerns about sharing sensitive identification details remotely.</p>
            </div>

            <!-- Card 4 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">✨</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">04 / ACCESSIBILITY</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-bop); line-height: 1.45;">Universal access is a fundamental financial requirement.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Designing with WCAG AAA compliant color contrast and high-luminance active states ensured the app remained usable by all customer demographics across both dark and light modes.</p>
            </div>

          </div>

          <!-- Card 5 - Full width -->
          <div style="margin-top: 1rem; padding: 1.75rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%); border: 1px solid var(--color-bop); border-radius: var(--border-radius-lg); display: flex; gap: 1.5rem; align-items: flex-start;">
            <span style="font-size: 1.8rem; line-height: 1; flex-shrink: 0; margin-top: 0.15rem;">📈</span>
            <div>
              <span class="font-mono" style="font-size: 0.6rem; color: var(--color-bop); letter-spacing: 0.08em;">05 / IMPACT</span>
              <p style="margin: 0.4rem 0 0.5rem; font-size: 0.97rem; font-weight: 600; color: var(--color-bop); line-height: 1.45;">A solid digital-first foundation enables global growth.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Optimizing the remote KYC engine was the cornerstone of Bank of Palestine's global expansion, leading directly to regulatory approvals (ADGM IPA CAT1) and connecting the diaspora to regional operations.</p>
            </div>
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
      <!-- 3-Box Action Row -->
      <div class="sidebar-action-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; width: 100%; padding-top: 1rem; border-top: 1px solid var(--border-color); margin-top: 0.5rem;">
        <a href="mailto:gokulskaimal@gmail.com" class="sidebar-action-card" aria-label="Send email" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.85rem 0.25rem; border: 1px solid var(--border-color); border-radius: 12px; background-color: var(--bg-card); text-decoration: none; transition: all 0.2s ease;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="transition: stroke 0.2s;"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
          <span class="font-mono" style="font-size: 0.625rem; font-weight: 600; letter-spacing: 0.08em; color: var(--text-secondary); transition: color 0.2s;">EMAIL</span>
        </a>

        <a href="https://linkedin.com/in/gokulskaimal" class="sidebar-action-card" target="_blank" rel="noopener" aria-label="View LinkedIn profile" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.85rem 0.25rem; border: 1px solid var(--border-color); border-radius: 12px; background-color: var(--bg-card); text-decoration: none; transition: all 0.2s ease;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="transition: stroke 0.2s;"><rect x="2" y="2" width="20" height="20" rx="4"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8.01"/><line x1="12" y1="16" x2="12" y2="11"/><path d="M16 16v-3a2 2 0 0 0-4 0"/></svg>
          <span class="font-mono" style="font-size: 0.625rem; font-weight: 600; letter-spacing: 0.08em; color: var(--text-secondary); transition: color 0.2s;">LINKEDIN</span>
        </a>

        <a href="resume.pdf" class="sidebar-action-card primary-action" target="_blank" rel="noopener" aria-label="Download Resume" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.85rem 0.25rem; border: 1px solid var(--color-accent); border-radius: 12px; background-color: var(--bg-card); text-decoration: none; transition: all 0.2s ease;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
          <span class="font-mono" style="font-size: 0.625rem; font-weight: 600; letter-spacing: 0.08em; color: var(--color-accent);">RESUME</span>
        </a>
      </div>
`;

export function renderProject1Sidebar() {
  return `
    <!-- Top Section -->
    <div class="project-sidebar-top sidebar-fade-in" style="display: flex; flex-direction: column; gap: 0.55rem;">
      ${brandLogoMark}
      <div class="project-sidebar-meta font-mono" style="font-size: 0.75rem; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 500;">
        YOOKI / 2025
      </div>
      <h2 class="project-sidebar-title font-serif" style="font-size: 2rem; font-weight: 400; line-height: 1.15; color: var(--text-primary); margin-top: 0.25rem; margin-bottom: 0.5rem;">
        Designing an AI Learning System for Navigating UPSC Complexity
      </h2>
      <p class="project-sidebar-desc font-sans" style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 1rem;">
        But most competitive learning platforms still rely on static interfaces built around passive content consumption.
      </p>
      <a href="https://blog.askyooki.com/" target="_blank" rel="noopener" class="project-sidebar-btn project-1-btn">
        see what yooki is <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>
      </a>
    </div>

    <!-- Bottom Section -->
    <div class="project-sidebar-bottom sidebar-fade-in" style="margin-top: auto; display: flex; flex-direction: column; gap: 1.25rem;">
      <div class="project-sidebar-tags font-sans" style="font-size: 0.72rem; letter-spacing: 0.05em; font-weight: 600; color: var(--color-accent);">
        <div class="spec-item">
          <span class="spec-label" style="text-transform: uppercase;">ROLE</span>
          <span style="color: var(--text-primary); font-family: var(--font-sans); font-size: 0.9rem; font-weight: 500; margin-top: 0.15rem;">Product Designer</span>
        </div>
        <div class="spec-item">
          <span class="spec-label" style="text-transform: uppercase;">TIMELINE</span>
          <span style="color: var(--text-primary); font-family: var(--font-sans); font-size: 0.9rem; font-weight: 500; margin-top: 0.15rem;">6 Months (2025)</span>
        </div>
        <div class="spec-item">
          <span class="spec-label" style="text-transform: uppercase;">CORE CONCEPTS</span>
          <span style="color: var(--text-primary); font-family: var(--font-sans); font-size: 0.9rem; font-weight: 500; margin-top: 0.15rem; line-height: 1.45;">Syllabus Mapping, Interactive Prototypes, Maze Usability Testing</span>
        </div>
      </div>
      
      ${sidebarActionGrid}
    </div>
  `;
}

export function renderProject2Sidebar() {
  return `
    <!-- Top Section -->
    <div class="project-sidebar-top sidebar-fade-in" style="display: flex; flex-direction: column; gap: 0.55rem;">
      ${brandLogoMark}
      <div class="project-sidebar-meta font-mono" style="font-size: 0.75rem; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 500;">
        CENDROL / 2023
      </div>
      <h2 class="project-sidebar-title font-serif" style="font-size: 2rem; font-weight: 400; line-height: 1.15; color: var(--text-primary); margin-top: 0.25rem; margin-bottom: 0.5rem;">
        Cendrol: Streamlining expense workflows for field engineers
      </h2>
      <p class="project-sidebar-desc font-sans" style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 1rem;">
        Field operations require real-time clarity. Legacy invoice submissions delay reimbursement and stall project timelines.
      </p>
      <a href="https://gokulux.framer.website/project-2" target="_blank" rel="noopener" class="project-sidebar-btn project-2-btn">
        more about company <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>
      </a>
    </div>

    <!-- Bottom Section -->
    <div class="project-sidebar-bottom sidebar-fade-in" style="margin-top: auto; display: flex; flex-direction: column; gap: 1.25rem;">
      <div class="project-sidebar-tags font-sans" style="font-size: 0.72rem; letter-spacing: 0.05em; font-weight: 600; color: var(--color-brand); display: flex; flex-direction: column; gap: 1.25rem;">
        <div class="spec-item">
          <span class="spec-label" style="text-transform: uppercase;">ROLE</span>
          <span style="color: var(--text-primary); font-family: var(--font-sans); font-size: 0.9rem; font-weight: 500; margin-top: 0.15rem;">Lead Product Researcher &amp; Designer</span>
        </div>
        <div class="spec-item">
          <span class="spec-label" style="text-transform: uppercase;">TIMELINE</span>
          <span style="color: var(--text-primary); font-family: var(--font-sans); font-size: 0.9rem; font-weight: 500; margin-top: 0.15rem;">3 Months (2023)</span>
        </div>
        <div class="spec-item">
          <span class="spec-label" style="text-transform: uppercase;">CONTEXT</span>
          <span style="color: var(--text-primary); font-family: var(--font-sans); font-size: 0.9rem; font-weight: 500; margin-top: 0.15rem; line-height: 1.45;">Field Operations, Construction FinTech</span>
        </div>
      </div>
      
      ${sidebarActionGrid}
    </div>
  `;
}

export function renderProject3Sidebar() {
  return `
    <!-- Top Section -->
    <div class="project-sidebar-top sidebar-fade-in" style="display: flex; flex-direction: column; gap: 0.55rem;">
      ${brandLogoMark}
      <div class="project-sidebar-meta font-mono" style="font-size: 0.75rem; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 500;">
        BOP / 2025
      </div>
      <h2 class="project-sidebar-title font-serif" style="font-size: 2rem; font-weight: 400; line-height: 1.15; color: var(--text-primary); margin-top: 0.25rem; margin-bottom: 0.5rem;">
        Bank of Palestine: Simplifying Complex KYC Process
      </h2>
      <p class="project-sidebar-desc font-sans" style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 1rem;">
        Opening a bank account is historically a high-friction operational workflow. Reimagining identity verification through Progressive Disclosures.
      </p>
      <a href="https://www.bop.ps/en/personal" target="_blank" rel="noopener" class="project-sidebar-btn project-3-btn">
        more about bank <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>
      </a>
    </div>

    <!-- Bottom Section -->
    <div class="project-sidebar-bottom sidebar-fade-in" style="margin-top: auto; display: flex; flex-direction: column; gap: 1.25rem;">
      <div class="project-sidebar-specs" style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); font-family: var(--font-sans);">
        <div><strong style="color: var(--text-primary); font-weight: 600; font-family: var(--font-sans); font-size: 0.8rem; letter-spacing: 0.03em;">ROLE :</strong> UX Designer</div>
        <div><strong style="color: var(--text-primary); font-weight: 600; font-family: var(--font-sans); font-size: 0.8rem; letter-spacing: 0.03em;">TIMELINE :</strong> 4 Months (2025)</div>
        <div><strong style="color: var(--text-primary); font-weight: 600; font-family: var(--font-sans); font-size: 0.8rem; letter-spacing: 0.03em;">CONTEXT :</strong> Mobile Banking, Identity Verification (KYC), FinTech</div>
      </div>
      
      ${sidebarActionGrid}
    </div>
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
      
      <!-- Experiment 1: SVG Concept Compiler -->
      <section class="interactive-flow-sandbox stagger-el stagger-delay-2" style="padding: 1.75rem; background: var(--bg-card); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
          <div>
            <span class="font-mono label" style="font-size: 0.65rem;">EXPERIMENT 01</span>
            <h2 class="font-serif" style="font-size: 1.65rem; margin-top: 0.25rem; font-weight: 500; color: var(--text-primary);">Generative UI Layout Compiler</h2>
            <p class="font-sans" style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">Compiles design tokens directly into responsive components using structured JSON schemas.</p>
          </div>
          
          <!-- Selector Tabs -->
          <div class="filter-bar" role="tablist" aria-label="Select layout concept" style="margin-top: 0.25rem;">
            <button class="filter-btn active" role="tab" aria-selected="true" data-concept="chart" id="ws-btn-chart">Analytics Chart</button>
            <button class="filter-btn" role="tab" aria-selected="false" data-concept="bento" id="ws-btn-bento">Bento Grid</button>
            <button class="filter-btn" role="tab" aria-selected="false" data-concept="dock" id="ws-btn-dock">Navbar Dock</button>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 1.5rem; align-items: stretch;" class="sandbox-inner-grid">
          <!-- Terminal Panel -->
          <div class="terminal-window" style="margin: 0; display: flex; flex-direction: column; justify-content: space-between;">
            <div class="terminal-header">
              <span class="terminal-dot"></span>
              <span class="terminal-dot yellow"></span>
              <span class="terminal-dot green"></span>
              <span class="terminal-title">token-compiler.sh</span>
            </div>
            <div id="ws-terminal-body" class="terminal-body">
              <!-- Logs will be streamed here -->
            </div>
          </div>
          
          <!-- Compilation Output Canvas -->
          <div style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; padding: 1.5rem; min-height: 250px; position: relative;">
            <div id="ws-canvas-preview" style="width: 100%; display: flex; justify-content: center; align-items: center; transition: all 0.3s ease;">
              <!-- Output SVG loaded here -->
            </div>
          </div>
        </div>
      </section>

      <!-- Experiment 2: Dynamic Helper Suggestion -->
      <section class="interactive-flow-sandbox stagger-el stagger-delay-3" style="padding: 1.75rem; background: var(--bg-card); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color); position: relative; overflow: visible;">
        <div style="margin-bottom: 1.5rem;">
          <span class="font-mono label" style="font-size: 0.65rem;">EXPERIMENT 02</span>
          <h2 class="font-serif" style="font-size: 1.65rem; margin-top: 0.25rem; font-weight: 500; color: var(--text-primary);">Adaptive Contextual AI Helper</h2>
          <p class="font-sans" style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">Pulsing indicators warn of system anomalies or user friction. Click a dot to launch a glassmorphic suggestion card.</p>
        </div>

        <!-- Dashboard mockup -->
        <div style="max-width: 580px; margin: 0 auto; background: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-color); padding: 1.5rem; position: relative;" class="dashboard-mock">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1rem;">
            <span class="font-mono" style="font-size: 0.7rem; font-weight: bold; color: var(--text-primary);">PORTAL PERFORMANCE</span>
            <span style="font-size: 0.6rem; padding: 0.25rem 0.5rem; background: var(--color-success-light); color: var(--color-success); border-radius: 6px; font-weight: 600; font-family: var(--font-mono);">SYSTEMS ACTIVE</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            
            <!-- Metric Card 1 (Normal) -->
            <div style="background: var(--bg-card); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 0.25rem; text-align: left;">
              <span class="font-sans" style="font-size: 0.68rem; color: var(--text-secondary);">Daily Operations Active</span>
              <span class="font-mono" style="font-size: 1.35rem; font-weight: bold; color: var(--text-primary);">1,482</span>
              <p style="font-size: 0.62rem; color: var(--color-success); margin: 0;">+12% vs last week</p>
            </div>
            
            <!-- Metric Card 2 (Friction Alert) -->
            <div style="background: var(--bg-card); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 0.25rem; text-align: left; position: relative; overflow: visible;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-sans" style="font-size: 0.68rem; color: var(--text-secondary);">Funnel Drop-off Rate</span>
                <!-- Pulsing Alert Dot -->
                <span id="ws-alert-dot" class="pulsing-glow-dot" aria-label="AI optimization suggestion available" title="Click to view AI suggestion"></span>
              </div>
              <span class="font-mono" style="font-size: 1.35rem; font-weight: bold; color: var(--color-accent);">42.8%</span>
              <p style="font-size: 0.62rem; color: var(--color-accent); margin: 0;">⚠️ Significant peak detected</p>
              
              <!-- Glassmorphic Tooltip Card -->
              <div id="ws-tooltip-card" class="workshop-tooltip">
                <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.75rem;">🤖</span>
                  <span class="font-mono" style="font-size: 0.65rem; font-weight: bold; color: var(--color-accent);">AI DIAGNOSTIC</span>
                </div>
                <p style="margin: 0 0 0.6rem 0; font-size: 0.7rem; color: var(--text-secondary); line-height: 1.3;">Drop-off spiked at the <strong>ID Proof Verification</strong> screen. Recommend swapping current camera overlay instructions for high-contrast guides.</p>
                <div style="display: flex; gap: 0.4rem;">
                  <button id="ws-tooltip-apply" style="padding: 0.35rem 0.55rem; border: none; border-radius: 6px; background: var(--color-accent); color: var(--color-on-accent); font-weight: 600; font-size: 0.6rem; cursor: pointer;">Optimize UI</button>
                  <button id="ws-tooltip-dismiss" style="padding: 0.35rem 0.55rem; border: 1px solid var(--border-color); border-radius: 6px; background: transparent; color: var(--text-secondary); font-weight: 600; font-size: 0.6rem; cursor: pointer;">Dismiss</button>
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
  const btnChart = document.getElementById('ws-btn-chart');
  const btnBento = document.getElementById('ws-btn-bento');
  const btnDock = document.getElementById('ws-btn-dock');
  const terminal = document.getElementById('ws-terminal-body');
  const canvas = document.getElementById('ws-canvas-preview');
  
  const alertDot = document.getElementById('ws-alert-dot');
  const tooltipCard = document.getElementById('ws-tooltip-card');
  const btnApply = document.getElementById('ws-tooltip-apply');
  const btnDismiss = document.getElementById('ws-tooltip-dismiss');
  
  if (!canvas || !terminal) return;

  // SVG Concept Designs
  const concepts = {
    chart: `
      <svg width="220" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%;">
        <rect width="220" height="150" rx="10" fill="var(--bg-card)" stroke="var(--border-color)"/>
        <path d="M20 120 L60 80 L100 95 L140 50 L180 70 L200 30" stroke="var(--color-brand)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 120 L60 80 L100 95 L140 50 L180 70 L200 30 L200 130 L20 130 Z" fill="url(#chart-gradient)" opacity="0.1"/>
        <circle cx="200" cy="30" r="4" fill="var(--color-accent)"/>
        <defs>
          <linearGradient id="chart-gradient" x1="110" y1="30" x2="110" y2="130" gradientUnits="userSpaceOnUse">
            <stop stop-color="var(--color-brand)"/>
            <stop offset="1" stop-color="var(--color-brand)" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    `,
    bento: `
      <svg width="220" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%;">
        <rect width="220" height="150" rx="10" fill="var(--bg-card)" stroke="var(--border-color)"/>
        <rect x="15" y="15" width="90" height="60" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <rect x="115" y="15" width="90" height="120" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <rect x="15" y="85" width="90" height="50" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <circle cx="60" cy="45" r="8" fill="var(--color-brand)" opacity="0.2"/>
        <circle cx="160" cy="75" r="8" fill="var(--color-accent)" opacity="0.2"/>
      </svg>
    `,
    dock: `
      <svg width="220" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%;">
        <rect width="220" height="150" rx="10" fill="var(--bg-card)" stroke="var(--border-color)"/>
        <rect x="25" y="55" width="170" height="40" rx="20" fill="var(--bg-secondary)" stroke="var(--border-color)" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.06))"/>
        <circle cx="55" cy="75" r="12" fill="var(--color-brand)"/>
        <circle cx="95" cy="75" r="12" fill="var(--border-hover)"/>
        <circle cx="135" cy="75" r="12" fill="var(--border-hover)"/>
        <circle cx="165" cy="75" r="12" fill="var(--color-accent)"/>
      </svg>
    `
  };

  const logs = {
    chart: [
      { text: '$ run layout-compiler --target="analytics_chart"', type: 'cmd' },
      { text: '🔍 Parsing JSON schema matching WCAG AAA constraints...', type: 'info' },
      { text: '✨ Accent token linked: HSL(22, 95%, 32%)', type: 'info' },
      { text: '🎨 Building SVG nodes & applying linear gradients...', type: 'info' },
      { text: '🚀 Rendering concept output successfully (Latency: 185ms)', type: 'success' }
    ],
    bento: [
      { text: '$ run layout-compiler --target="bento_grid"', type: 'cmd' },
      { text: '🔍 Fetching workspace bento metrics & grid templates...', type: 'info' },
      { text: '✨ Layout token matches: 3-column masonry layout', type: 'info' },
      { text: '🎨 Rendering bento boxes with variable aspect ratios...', type: 'info' },
      { text: '🚀 Component compilation complete (Latency: 220ms)', type: 'success' }
    ],
    dock: [
      { text: '$ run layout-compiler --target="navigation_dock"', type: 'cmd' },
      { text: '🔍 Constructing floating navigation dock tokens...', type: 'info' },
      { text: '✨ Adding spring transition physics & hover states...', type: 'info' },
      { text: '🎨 Computing dock alignment & backdrop-filter blur...', type: 'info' },
      { text: '🚀 Dock layout compiled and injected (Latency: 140ms)', type: 'success' }
    ]
  };

  let isCompiling = false;

  function compileLayout(conceptType) {
    if (isCompiling) return;
    isCompiling = true;

    // Reset buttons
    [btnChart, btnBento, btnDock].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    
    let activeBtn;
    if (conceptType === 'chart') activeBtn = btnChart;
    else if (conceptType === 'bento') activeBtn = btnBento;
    else if (conceptType === 'dock') activeBtn = btnDock;
    
    if (activeBtn) activeBtn.classList.add('active');

    // Fade out canvas preview
    canvas.style.opacity = '0';
    canvas.style.transform = 'scale(0.96)';

    // Empty terminal
    terminal.innerHTML = '';

    const lines = logs[conceptType];
    let lineIdx = 0;

    function printNextLine() {
      if (lineIdx < lines.length) {
        const line = lines[lineIdx];
        const p = document.createElement('div');
        p.className = `terminal-line ${line.type}`;
        p.textContent = line.text;
        terminal.appendChild(p);
        
        lineIdx++;
        setTimeout(printNextLine, 120);
      } else {
        // Load the compiled SVG after logs complete
        setTimeout(() => {
          canvas.innerHTML = concepts[conceptType];
          canvas.style.opacity = '1';
          canvas.style.transform = 'scale(1)';
          isCompiling = false;
        }, 100);
      }
    }

    printNextLine();
  }

  // Bind sandbox template buttons
  if (btnChart) btnChart.addEventListener('click', () => compileLayout('chart'));
  if (btnBento) btnBento.addEventListener('click', () => compileLayout('bento'));
  if (btnDock) btnDock.addEventListener('click', () => compileLayout('dock'));

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
  const stepsList = document.getElementById('bop-compliance-steps-list');
  if (!stepsList) return;

  const stepItems = stepsList.querySelectorAll('.bop-compliance-step-item');
  const fetchCards = document.querySelectorAll('[data-fetch-card]');
  const ruleCards = document.querySelectorAll('[data-rule-card]');
  const expTitle = document.getElementById('bop-exp-title');
  const expText = document.getElementById('bop-exp-text');

  // Mapping data between steps and cards + explanations
  const complianceData = {
    "1": {
      title: "01 / Identity verification",
      desc: "Handled progressively via the National ID OCR scan + liveness checks. Binds profile verification directly to government databases.",
      fetches: ["id"],
      rules: ["mandatory", "docs"]
    },
    "2": {
      title: "02 / Eligibility test",
      desc: "Automated real-time background query to check user standing against national AML (Anti-Money Laundering) and CFT blacklist registries.",
      fetches: ["profile", "history"],
      rules: ["mandatory", "risk"]
    },
    "3": {
      title: "03 / Existing account holder check",
      desc: "Automatic query of the bank's core repository immediately after OTP validation to detect existing customer portfolios.",
      fetches: ["accounts", "cards"],
      rules: ["mandatory"]
    },
    "4": {
      title: "04 / Add new account to my name",
      desc: "Instant digital provisioning of sub-accounts directly within the workspace, skipping secondary validation loops.",
      fetches: ["accounts"],
      rules: ["mandatory"]
    },
    "5": {
      title: "05 / More about me (PEP check)",
      desc: "Structured disclosures (employment, income source). Saturated risk profiles (e.g. PEPs) trigger Enhanced Due Diligence (EDD) background audits.",
      fetches: ["profile", "history"],
      rules: ["mandatory", "risk"]
    },
    "6": {
      title: "06 / FATCA / Nationality check",
      desc: "Automated trigger for US compliance (FATCA) if user selects foreign nationality. Requires secondary citizenship profile declarations.",
      fetches: ["profile"],
      rules: ["mandatory", "docs"]
    },
    "7": {
      title: "07 / Nominee & spouse details",
      desc: "Progressive optional fields that allow users to register family ties for succession rights, stored securely under profile vault.",
      fetches: ["profile"],
      rules: ["mandatory"]
    },
    "8": {
      title: "08 / My address proof",
      desc: "Uses geolocation parameters or utility bill OCR scanning to verify physical residential address in compliance with local regulations.",
      fetches: ["profile"],
      rules: ["mandatory", "docs"]
    },
    "9": {
      title: "09 / Fund & wealth info",
      desc: "User selects income range and wealth origin. Binds transaction limits based on standard thresholds to monitor unusual volumes.",
      fetches: ["history"],
      rules: ["mandatory", "risk"]
    },
    "10": {
      title: "10 / Power of attorney",
      desc: "Upload portal to submit authorized notarized documents. Requires manual branch review back-office verification for security.",
      fetches: ["profile"],
      rules: ["mandatory", "risk"]
    },
    "11": {
      title: "11 / New account details allocation",
      desc: "Automated real-time account numbering, routing configurations, and ledger creation inside the bank's secure vault.",
      fetches: ["accounts"],
      rules: ["mandatory", "types"]
    },
    "12": {
      title: "12 / E-services setup",
      desc: "Seamless progressive checkboxes to configure mobile banking tokens, debit cards, e-statements, and transactional notification alerts.",
      fetches: ["cards", "profile"],
      rules: ["mandatory"]
    },
    "13": {
      title: "13 / Signature canvas",
      desc: "A responsive draw-to-sign digital canvas. Cryptographically signs the KYC application using the user's validated profile.",
      fetches: ["profile", "id"],
      rules: ["mandatory"]
    }
  };

  function updateMapping(stepId) {
    const data = complianceData[stepId];
    if (!data) return;

    // Reset items
    stepItems.forEach(item => {
      if (item.getAttribute('data-step') === stepId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Reset fetch cards
    fetchCards.forEach(card => {
      const fetchKey = card.getAttribute('data-fetch-card');
      if (data.fetches.includes(fetchKey)) {
        card.classList.add('active-map');
      } else {
        card.classList.remove('active-map');
      }
    });

    // Reset rule cards
    ruleCards.forEach(card => {
      const ruleKey = card.getAttribute('data-rule-card');
      if (data.rules.includes(ruleKey)) {
        card.classList.add('active-map');
      } else {
        card.classList.remove('active-map');
      }
    });

    // Update explanations
    if (expTitle) expTitle.textContent = data.title;
    if (expText) expText.textContent = data.desc;
  }

  // Bind mouseenter and click triggers for responsiveness
  stepItems.forEach(item => {
    const stepId = item.getAttribute('data-step');
    
    item.addEventListener('mouseenter', () => updateMapping(stepId));
    item.addEventListener('click', () => updateMapping(stepId));
  });

  // Initialize with step 1 active
  updateMapping("1");

  // View Toggle Tabs
  const toggleBtns = document.querySelectorAll('.bop-toggle-btn');
  const refinedView = document.getElementById('bop-compliance-refined-view');
  const sketchView = document.getElementById('bop-compliance-sketch-view');

  if (toggleBtns && refinedView && sketchView) {
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        
        toggleBtns.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = 'var(--text-secondary)';
          b.style.boxShadow = 'none';
        });
        
        btn.classList.add('active');
        btn.style.background = 'var(--bg-card)';
        btn.style.color = 'var(--text-primary)';
        btn.style.boxShadow = 'var(--shadow-sm)';
        
        if (view === 'refined') {
          refinedView.style.display = 'block';
          sketchView.style.display = 'none';
        } else {
          refinedView.style.display = 'none';
          sketchView.style.display = 'block';
        }
      });
    });
  }
}

/**
 * Project 3 (Bank of Palestine) Compliance Onboarding Flowchart Simulator Controller
 */
function initProject3Flowchart() {
  const btnHappy = document.getElementById('bop-btn-happy');
  const btnForeign = document.getElementById('bop-btn-foreign');
  const btnRegistry = document.getElementById('bop-btn-registry');
  const btnSelfie = document.getElementById('bop-btn-selfie');
  
  const detailTitle = document.getElementById('bop-detail-title');
  const detailDecision = document.getElementById('bop-detail-decision');
  const detailCompliance = document.getElementById('bop-detail-compliance');
  
  const travelDot = document.getElementById('bop-flow-travel-dot');
  
  const nodes = document.querySelectorAll('.bop-node');
  const paths = document.querySelectorAll('.bop-flow-path, .bop-flow-path-dashed');
  
  if (!detailTitle) return;

  const nodeData = {
    start: {
      title: "01 / Start Onboarding",
      decision: "Introduce clear guidelines detailing necessary credentials (government ID, email, physical mobile device) before opening account, preparing users for the process.",
      compliance: "Mandated checks require warning users about geo-restrictions and verification requirements before transaction entry."
    },
    entry: {
      title: "02 / Contact Entry",
      decision: "Unified input fields for phone and email with automatic region code detection (+970 / +972) to eliminate validation errors.",
      compliance: "Anti-Money Laundering (AML) standards require binding a verified communication node to the primary account vault."
    },
    residency: {
      title: "Residency Check (Local check)",
      decision: "Background IP and cellular network geolocation checks automatically separate domestic citizens from foreign residents early in the journey.",
      compliance: "Monetary Authority guidelines separate domestic registry lookups from international document audits."
    },
    otp: {
      title: "03 / OTP Validation",
      decision: "Dual-channel verification via integrated SMS and Email loops. Unified verification states prevent multi-step confusion.",
      compliance: "Secure access check binds cellular number ownership to government ID ownership records."
    },
    enterid: {
      title: "04 / Enter ID Details",
      decision: "Clean input boxes with immediate check digit validation (Luhn check) to catch keystroke issues before querying registries.",
      compliance: "National identification records must be registered against government ledger databases."
    },
    registry: {
      title: "Registry Match (Registry check)",
      decision: "Asynchronous backend connection querying government database in under 2 seconds. Reassurance loaders prevent user exit.",
      compliance: "Legally registers that the input ID card exists in the Palestinian Ministry of Interior registry."
    },
    ocr: {
      title: "05 / OCR ID Scan",
      decision: "On-device image OCR parsing captures text in real-time. Auto-exposure filters resolve low-light legibility issues.",
      compliance: "Auditing guidelines require a clean, unedited visual copy of the physical identity card to be attached to the digital vault."
    },
    liveness: {
      title: "06 / Liveness Check",
      decision: "Interactive, gamified camera frames (e.g., blink/turn indicators) with real-time feedback guide perfect framing.",
      compliance: "Anti-Spoofing and identity fraud regulations require validating that the applicant is physically present."
    },
    selfie: {
      title: "Selfie Face Match",
      decision: "Direct automated pixel comparison between OCR document image, registry profile photo, and live selfie.",
      compliance: "Visual match is required to ensure the owner of the document is the applicant currently in the flow."
    },
    vault: {
      title: "07 / Vault Provisioned",
      decision: "Immediate setup of digital banking debit cards and provisioning of account balances. Instant onboarding success state.",
      compliance: "Centralized logging sends verification details to regulatory compliance monitoring portals."
    },
    foreign: {
      title: "03B / Foreigner Form",
      decision: "Dynamic layout showing context-aware fields for foreign passports and residency declarations, avoiding long page form clutter.",
      compliance: "Foreign passport holders require FATCA, CRS, and international tax identification audits."
    },
    upload: {
      title: "04B / Upload Passport",
      decision: "Multi-document scanner allows users to capture passport bio-pages and visas in high definition.",
      compliance: "Regulators require archiving visa details and passport information for non-citizen profiles."
    },
    approval: {
      title: "05B / Manual Review",
      decision: "Background queuing sends international profiles directly to a specialized bank ops agent queue, reducing wait times.",
      compliance: "International accounts require manual compliance operations verification before vault creation."
    },
    branch: {
      title: "04C / Visit Branch",
      decision: "If registry check fails, show map of nearest branches with operating hours. In-app scheduling avoids queue wait-states.",
      compliance: "Unmatched national records cannot be verified digitally and require standard physical document verification."
    },
    video: {
      title: "06B / Fallback Video Call",
      decision: "If selfie matching fails, launch an immediate in-app secure video session with a live bank agent, keeping the user digital.",
      compliance: "Approved human-in-the-loop video authentication satisfies liveness checks when automated facial matching fails."
    }
  };

  const pathPaths = {
    happy: [
      'bop-path-start-phone', 'bop-path-phone-residency', 'bop-path-residency-otp',
      'bop-path-otp-enterid', 'bop-path-enterid-registry', 'bop-path-registry-ocr',
      'bop-path-ocr-liveness', 'bop-path-liveness-selfie', 'bop-path-selfie-vault'
    ],
    foreign: [
      'bop-path-start-phone', 'bop-path-phone-residency', 'bop-path-residency-foreign',
      'bop-path-foreign-upload', 'bop-path-upload-approval', 'bop-path-approval-vault'
    ],
    registry: [
      'bop-path-start-phone', 'bop-path-phone-residency', 'bop-path-residency-otp',
      'bop-path-otp-enterid', 'bop-path-enterid-registry', 'bop-path-registry-branch'
    ],
    selfie: [
      'bop-path-start-phone', 'bop-path-phone-residency', 'bop-path-residency-otp',
      'bop-path-otp-enterid', 'bop-path-enterid-registry', 'bop-path-registry-ocr',
      'bop-path-ocr-liveness', 'bop-path-liveness-selfie', 'bop-path-selfie-video'
    ]
  };

  const pathNodes = {
    happy: ['start', 'entry', 'residency', 'otp', 'enterid', 'registry', 'ocr', 'liveness', 'selfie', 'vault'],
    foreign: ['start', 'entry', 'residency', 'foreign', 'upload', 'approval', 'vault'],
    registry: ['start', 'entry', 'residency', 'otp', 'enterid', 'registry', 'branch'],
    selfie: ['start', 'entry', 'residency', 'otp', 'enterid', 'registry', 'ocr', 'liveness', 'selfie', 'video']
  };

  // Traveling Dot Paths definitions
  const dotPaths = {
    happy: "M 60 160 L 170 160 L 280 160 C 320 160, 340 70, 400 70 L 520 70 L 640 70 L 760 70 L 760 160 L 870 160 L 970 160",
    foreign: "M 60 160 L 170 160 L 280 160 C 320 160, 340 250, 400 250 L 520 250 L 640 250 C 780 250, 840 160, 970 160",
    registry: "M 60 160 L 170 160 L 280 160 C 320 160, 340 70, 400 70 L 520 70 L 640 70 L 640 160",
    selfie: "M 60 160 L 170 160 L 280 160 C 320 160, 340 70, 400 70 L 520 70 L 640 70 L 760 70 L 760 160 L 870 160 L 870 250"
  };

  function selectNode(nodeId) {
    const data = nodeData[nodeId];
    if (!data) return;
    
    // Animate title and descriptions
    detailTitle.style.opacity = '0';
    detailDecision.style.opacity = '0';
    detailCompliance.style.opacity = '0';
    
    setTimeout(() => {
      detailTitle.textContent = data.title;
      detailDecision.textContent = data.decision;
      detailCompliance.textContent = data.compliance;
      
      detailTitle.style.opacity = '1';
      detailDecision.style.opacity = '1';
      detailCompliance.style.opacity = '1';
    }, 150);
  }

  function applyPath(pathName) {
    const activeNodes = pathNodes[pathName];
    const activePaths = pathPaths[pathName];
    const isHappy = pathName === 'happy';
    
    // 1. Update Buttons
    [btnHappy, btnForeign, btnRegistry, btnSelfie].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`bop-btn-${pathName}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // 2. Highlight Paths
    paths.forEach(p => {
      p.classList.remove('active-happy', 'active-exception');
      if (activePaths.includes(p.id)) {
        p.classList.add(isHappy ? 'active-happy' : 'active-exception');
      }
    });
    
    // 3. Highlight Nodes
    nodes.forEach(n => {
      n.classList.remove('active-happy', 'active-exception');
      const nodeId = n.getAttribute('data-node');
      if (activeNodes.includes(nodeId)) {
        n.classList.add(isHappy ? 'active-happy' : 'active-exception');
      }
    });

    // 4. Update Flow Traveling Dot
    if (travelDot) {
      // Force restart animation by resetting offset-path
      travelDot.style.animation = 'none';
      travelDot.offsetHeight; // trigger reflow
      
      travelDot.style.offsetPath = `path('${dotPaths[pathName]}')`;
      travelDot.setAttribute('fill', isHappy ? 'var(--color-success)' : 'var(--color-accent)');
      travelDot.style.display = 'block';
      travelDot.style.animation = 'bopFlowTravel 4.5s linear infinite';
    }

    // 5. Select first interesting node of the path
    if (pathName === 'happy') selectNode('start');
    else if (pathName === 'foreign') selectNode('foreign');
    else if (pathName === 'registry') selectNode('branch');
    else if (pathName === 'selfie') selectNode('video');
  }

  // Bind scenario buttons
  const pathBtns = [
    { btn: btnHappy, name: 'happy' },
    { btn: btnForeign, name: 'foreign' },
    { btn: btnRegistry, name: 'registry' },
    { btn: btnSelfie, name: 'selfie' }
  ];

  pathBtns.forEach(item => {
    if (item.btn) {
      item.btn.addEventListener('click', () => applyPath(item.name));
    }
  });

  // Bind nodes click
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const nodeId = node.getAttribute('data-node');
      
      // Remove sub-node selection visuals and highlight clicked one
      nodes.forEach(n => n.style.fontWeight = 'normal');
      node.style.fontWeight = 'bold';
      
      selectNode(nodeId);
    });
  });

  // Set initial state
  applyPath('happy');
}

// ==========================================================================
// PORTFOLIO SANDBOX CONTROLLERS
// ==========================================================================

/**
 * Project 1 (Yooki) Syllabus map and AI sandbox controls
 */
export function initProject1Sandbox() {
  const btnIAPlay = document.getElementById('ws-ia-btn-play');
  const btnIAReset = document.getElementById('ws-ia-btn-reset');
  const btnIATopic = document.getElementById('ws-ia-btn-topic');
  
  const iaProgressBar = document.getElementById('ia-progress-bar');
  const iaProgressText = document.getElementById('ia-progress-text');
  const iaSearchBox = document.getElementById('ia-search-box');
  const iaDetailsTitle = document.getElementById('ia-details-title');
  const iaDetailsDesc = document.getElementById('ia-details-desc');
  const iaNudgeList = document.getElementById('ia-nudge-list');
  const iaJourneySteps = document.getElementById('ia-journey-steps');
  
  const iaNodes = document.querySelectorAll('.ia-node');
  const iaDots = document.querySelectorAll('.ia-flow-dot');
  const iaPaths = document.querySelectorAll('.ia-flow-path, .ia-flow-path-dashed');

  const iaTopicData = {
    polity: {
      search: 'Panchayati Raj',
      detailsTitle: 'Relevant Details',
      detailsDesc: '73rd Amendment, 3-tier local self-governance model.',
      nudge: `
        <span style="font-size: 0.58rem; padding: 0.12rem 0.25rem; background: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); color: var(--color-brand); font-family: var(--font-mono); font-weight: 500;">Fiscal Federalism ↗</span>
        <span style="font-size: 0.58rem; padding: 0.12rem 0.25rem; background: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); color: var(--color-brand); font-family: var(--font-mono); font-weight: 500;">Rural Development ↗</span>
      `,
      journey: `
        <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">🟢 1. Constitutional Basis</span>
        <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">🟡 2. Financial Challenges</span>
        <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">⚪ 3. Local Taxation</span>
      `,
      progressText: '12%',
      progressWidth: '12%'
    },
    history: {
      search: '1857 Revolt',
      detailsTitle: 'First War of Independence',
      detailsDesc: 'Political, economic, and social causes of the 1857 uprising.',
      nudge: `
        <span style="font-size: 0.58rem; padding: 0.12rem 0.25rem; background: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); color: var(--color-brand); font-family: var(--font-mono); font-weight: 500;">East India Company ↗</span>
        <span style="font-size: 0.58rem; padding: 0.12rem 0.25rem; background: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); color: var(--color-brand); font-family: var(--font-mono); font-weight: 500;">Mughal Empire ↗</span>
      `,
      journey: `
        <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">🟢 1. Military Discontent</span>
        <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">🟡 2. Key Centers & Leaders</span>
        <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">⚪ 3. Crown Administration Takeover</span>
      `,
      progressText: '18%',
      progressWidth: '18%'
    }
  };

  let currentIATopic = 'polity';
  let isLoopingPaused = false;

  function highlightFlowPaths(activeNodeId) {
    // Reset all path active classes
    iaPaths.forEach(path => {
      path.classList.remove('active');
      if (path.classList.contains('ia-flow-path-dashed')) {
        path.classList.remove('running');
      }
    });
    iaDots.forEach(dot => {
      dot.style.display = 'none';
    });

    // Make nodes active up to selected
    const nodeList = ['node-search', 'node-details', 'node-nudge', 'node-journey', 'node-completion'];
    const activeIndex = nodeList.indexOf(activeNodeId);

    iaNodes.forEach((node, idx) => {
      if (idx <= activeIndex) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    // Activate paths & dots up to index
    if (activeIndex >= 1) {
      const p = document.getElementById('path-search-details');
      const d = document.getElementById('dot-search-details');
      if (p) p.classList.add('active');
      if (d) d.style.display = 'block';
    }
    if (activeIndex >= 2) {
      const p = document.getElementById('path-details-nudge');
      const d = document.getElementById('dot-details-nudge');
      if (p) p.classList.add('active');
      if (d) d.style.display = 'block';
    }
    if (activeIndex >= 3) {
      const p = document.getElementById('path-nudge-journey');
      const d = document.getElementById('dot-nudge-journey');
      if (p) {
        p.classList.add('active');
        p.classList.add('running');
      }
      if (d) d.style.display = 'block';
    }
    if (activeIndex >= 4) {
      const p = document.getElementById('path-journey-completion');
      const d = document.getElementById('dot-journey-completion');
      if (p) p.classList.add('active');
      if (d) d.style.display = 'block';
    }
  }

  // Bind nodes click
  if (iaNodes.length > 0) {
    iaNodes.forEach(node => {
      node.addEventListener('click', () => {
        highlightFlowPaths(node.id);
      });
    });
  }

  // Bind Play/Pause Scenario buttons
  if (btnIAPlay) {
    btnIAPlay.addEventListener('click', () => {
      isLoopingPaused = !isLoopingPaused;
      
      const playIcon = document.getElementById('ws-ia-play-icon');
      const playText = document.getElementById('ws-ia-play-text');
      
      iaDots.forEach(dot => {
        if (isLoopingPaused) {
          dot.style.animationPlayState = 'paused';
        } else {
          dot.style.animationPlayState = 'running';
        }
      });
      
      iaPaths.forEach(path => {
        if (path.classList.contains('ia-flow-path-dashed')) {
          if (isLoopingPaused) {
            path.classList.remove('running');
          } else {
            path.classList.add('running');
          }
        }
      });

      if (isLoopingPaused) {
        if (playIcon) playIcon.textContent = '▶️';
        if (playText) playText.textContent = 'Resume Loop';
        btnIAPlay.classList.remove('active');
      } else {
        if (playIcon) playIcon.textContent = '⏸️';
        if (playText) playText.textContent = 'Pause Loop';
        btnIAPlay.classList.add('active');
      }
    });
  }

  // Bind Reset Scenario button
  if (btnIAReset) {
    btnIAReset.addEventListener('click', () => {
      isLoopingPaused = false;
      const playIcon = document.getElementById('ws-ia-play-icon');
      const playText = document.getElementById('ws-ia-play-text');
      if (playIcon) playIcon.textContent = '⏸️';
      if (playText) playText.textContent = 'Pause Loop';
      if (btnIAPlay) btnIAPlay.classList.add('active');

      highlightFlowPaths('node-search');

      iaDots.forEach(dot => {
        dot.style.animationPlayState = 'running';
        const anim = dot.style.animation;
        dot.style.animation = 'none';
        dot.offsetHeight; // force reflow
        dot.style.animation = '';
      });
      
      if (iaProgressBar) {
        iaProgressBar.style.width = '12%';
        setTimeout(() => {
          iaProgressBar.style.width = iaTopicData[currentIATopic].progressWidth;
        }, 100);
      }
    });
  }

  // Bind Topic switching button
  if (btnIATopic) {
    btnIATopic.addEventListener('click', () => {
      currentIATopic = currentIATopic === 'polity' ? 'history' : 'polity';
      const data = iaTopicData[currentIATopic];
      
      if (iaSearchBox) iaSearchBox.textContent = data.search;
      if (iaDetailsTitle) iaDetailsTitle.textContent = data.detailsTitle;
      if (iaDetailsDesc) iaDetailsDesc.textContent = data.detailsDesc;
      if (iaNudgeList) iaNudgeList.innerHTML = data.nudge;
      if (iaJourneySteps) iaJourneySteps.innerHTML = data.journey;
      if (iaProgressText) iaProgressText.textContent = data.progressText;
      if (iaProgressBar) iaProgressBar.style.width = data.progressWidth;
      
      highlightFlowPaths('node-search');
    });
  }

  // 2. Yooki AI prompt-chips chatbot simulation
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
        } else {
          content.classList.remove('active');
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
  
  if (path === '/work') {
    initWorkFilters();
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
