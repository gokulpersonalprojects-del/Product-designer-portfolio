
/**
 * Project 3 (Aura AI) Component generative canvas controls
 */
function initProject3Sandbox() {
  const container = document.getElementById('kyc-screen-content');
  const statusMsg = document.getElementById('kyc-simulator-status');
  
  if (!container) return;
  
  let currentStep = 1;
  let selectedAccount = 'current'; // 'current' or 'saving'
  
  const screens = {
    1: () => `
      <div style="display: flex; flex-direction: column; gap: 1rem; text-align: left;">
        <span class="label font-mono" style="font-size: 0.65rem; color: var(--color-accent);">STEP 01 / 04</span>
        <h3 class="font-serif" style="font-size: 1.5rem; color: var(--text-primary); margin: 0; line-height: 1.2;">Ready To Bank Smarter</h3>
        <p class="font-sans" style="font-size: 0.8rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">A smarter way to manage your money in Palestine.</p>
        
        <div style="display: flex; flex-direction: column; gap: 0.6rem; margin: 0.5rem 0;">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-primary);">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: var(--color-bop); color: white; font-size: 0.6rem; font-weight: bold;">1</span>
            <span>Phone Number &amp; Email</span>
          </div>
 
<truncated 15901 bytes>
ground: linear-gradient(135deg, var(--color-brand) 0%, var(--color-accent) 100%); display: flex; align-items: center; justify-content: center; color: white;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" y2="12"/></svg>
        </div>
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h4 class="font-serif" style="margin: 0; font-size: 1rem; color: var(--text-primary); font-weight: 500;">Aura Pro Engine</h4>
            <span class="font-mono" style="font-size: 0.8rem; font-weight: bold; color: var(--color-accent);">$49/mo</span>
          </div>
          <p class="font-sans" style="margin: 0; font-size: 0.7rem; color: var(--text-secondary); line-height: 1.3;">Fully integrated layout compiling engine with local LLM schema alignment.</p>
          <button style="width: 100%; padding: 0.5rem; border: 1px solid var(--color-brand); border-radius: 6px; background: transparent; color: var(--color-brand); font-weight: 600; font-size: 0.75rem; cursor: not-allowed; margin-top: 0.25rem;">Deploy Instance</button>
        </div>
      </div>
    `
  };
  
  function updateComponent(compType) {
    // Reset button active classes and attributes
    [btnLogin, btnAnalytics, btnProduct].forEach(btn => {
      if (btn) {
        btn.classList.remove('active');
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
