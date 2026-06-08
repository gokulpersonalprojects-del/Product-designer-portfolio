export function renderProject2() {
  return `
    <article class="project-detail">
      <header class="project-header stagger-el stagger-delay-1">
        <span class="label font-mono project-tag" style="color: var(--color-brand)">FIELD OPERATIONS / WORKFLOW DESIGN</span>
        <h1 class="project-headline font-serif">Cendrol: Streamlining expense workflows for field engineers</h1>
      </header>

      <div class="project-intro-grid stagger-el stagger-delay-2">
        <p class="project-intro-text">
          Cendrol Construct manages distributed on-site building operations. Site engineers submit hundreds of expense claims weekly for local materials. The existing workflow was chaotic, filled with illegible receipts, missing invoices, and prolonged approval lag that stalled site work.
        </p>
        <div class="project-specs">
          <div class="spec-item">
            <span class="spec-label">ROLE</span>
            <span>Lead Product Researcher &amp; Designer</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">TIMELINE</span>
            <span>3 Months (2023)</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">CONTEXT</span>
            <span>Field Operations, Construction FinTech</span>
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

      </div>
    </article>
  `;
}