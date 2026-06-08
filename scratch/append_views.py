import os

def main():
    path = "views.js"
    if not os.path.exists(path):
        print("views.js not found")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # We want to find the closing brace of initProject3Flowchart()
    # Let's search for "function initProject3Flowchart"
    pos = content.find("function initProject3Flowchart")
    if pos == -1:
        print("initProject3Flowchart not found in views.js")
        return
        
    brace_idx = content.find("{", pos)
    if brace_idx == -1:
        print("Opening brace not found")
        return
        
    brace_count = 1
    current_idx = brace_idx + 1
    while brace_count > 0 and current_idx < len(content):
        char = content[current_idx]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
        current_idx += 1
        
    # Check if there is anything after this brace (e.g. whitespace, etc.)
    # We will slice views.js up to current_idx and discard any garbage/broken stubs at the end.
    cleaned_views = content[:current_idx]
    
    js_to_append = """

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
  } else if (path === '/project-3') {
    initProject3Sandbox();
    initProject3Flowchart();
  } else if (path === '/project-4') {
    initProject4Sandbox();
  }
});
"""

    with open(path, 'w', encoding='utf-8') as f:
        f.write(cleaned_views + js_to_append)
    print("Successfully appended controllers to views.js")

if __name__ == '__main__':
    main()
