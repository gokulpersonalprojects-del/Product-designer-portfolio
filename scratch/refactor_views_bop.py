# Script to refactor views.js for Bank of Palestine case study page
import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    
    with open('views.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Define the premium HTML content for renderProject3
    bop_html = """export function renderProject3() {
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
        <div class="text-nudge stagger-el" style="color: var(--color-bop); border-color: var(--color-bop); border-style: dashed;">
          When compliance cannot be simplified, the designer's job is to design for momentum.
        </div>

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
                  
                  <div class="project-media-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
                    <div class="project-media-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); display: flex; justify-content: center; padding: 1.5rem 0;">
                      <img src="./bop_screen2.png" alt="Bank of Palestine KYC Onboarding requirements checklist" style="width: auto; height: 350px; display: block; object-fit: contain;">
                    </div>
                    <div class="project-media-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); display: flex; justify-content: center; padding: 1.5rem 0;">
                      <img src="./bop_screen3.png" alt="Bank of Palestine KYC Inputs (Phone and Email)" style="width: auto; height: 350px; display: block; object-fit: contain;">
                    </div>
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

                  <div class="project-media-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
                    <div class="project-media-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); display: flex; justify-content: center; padding: 1.5rem 0;">
                      <img src="./bop_screen4.png" alt="Bank of Palestine KYC OTP input screen" style="width: auto; height: 350px; display: block; object-fit: contain;">
                    </div>
                    <div class="project-media-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); display: flex; justify-content: center; padding: 1.5rem 0;">
                      <img src="./bop_screen5.png" alt="Bank of Palestine KYC Account current/saving selection" style="width: auto; height: 350px; display: block; object-fit: contain;">
                    </div>
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

                  <div class="project-media-grid" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin: 2rem 0; justify-content: center;">
                    <div class="project-media-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); display: flex; justify-content: center; padding: 1.5rem 0; max-width: 450px; margin: 0 auto; width: 100%;">
                      <img src="./bop_screen1.png" alt="Bank of Palestine customer entry portal" style="width: auto; height: 380px; display: block; object-fit: contain;">
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

      </div>
    </article>
  `;
}"""

    # 2. Locate the existing renderProject3 block in views.js and replace it
    # We find "export function renderProject3()" and replace until the next export function renderProjectX/renderProject1Sidebar
    p3_decl = "export function renderProject3()"
    p3_idx = content.find(p3_decl)
    
    if p3_idx == -1:
        print("Error: Could not find renderProject3 in views.js")
        return
        
    # Find start of next function
    p3_end_idx = content.find("export function renderProject1Sidebar", p3_idx)
    if p3_end_idx == -1:
        p3_end_idx = content.find("export function renderProject3Sidebar", p3_idx)
        
    if p3_end_idx == -1:
        print("Error: Could not find end of renderProject3 block")
        return

    print("Replacing renderProject3 code block...")
    new_content = content[:p3_idx] + bop_html + "\n\n" + content[p3_end_idx:]
    
    # 3. Add the controller initProject3Flowchart() to the file
    # We will append the controller code at the end of views.js
    flowchart_controller = """
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
"""

    # Add mount hooks for initProject3Flowchart
    print("Modifying mounted hooks inside views.js...")
    old_hooks = """  } else if (path === '/project-3') {
    initProject3Sandbox();
    initSolutionTabs();"""
    
    new_hooks = """  } else if (path === '/project-3') {
    initProject3Sandbox();
    initProject3Flowchart();
    initSolutionTabs();"""

    if old_hooks in new_content:
        new_content = new_content.replace(old_hooks, new_hooks)
        print("  -> Mount hook for project-3 updated.")
    else:
        print("  -> WARNING: Mount hook pattern not found!")

    # Append controller code to the end of views.js
    new_content += "\n" + flowchart_controller
    
    with open('views.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("views.js successfully updated with premium template and flowchart controller!")

if __name__ == '__main__':
    main()
