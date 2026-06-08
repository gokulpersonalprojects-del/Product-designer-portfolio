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