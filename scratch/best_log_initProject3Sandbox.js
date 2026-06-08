function initProject3Sandbox() {
  const container = document.getElementById('kyc-screen-content');
  const statusMsg = document.getElementById('kyc-simulator-status');
  
  if (!container) return;
  
  let currentStep = 1;
  let selectedAccount = 'current'; // 'current' or 'saving'
  
  const screens = {
() => `
      <div style="display: flex; flex-direction: column; gap: 1rem; text-align: left;">
        <span class="label font-mono" style="font-size: 0.65rem; color: #ff7626;">STEP 01 / 04</span>
        <h3 class="font-serif" style="font-size: 1.5rem; color: var(--text-primary); margin: 0; line-height: 1.2;">Ready To Bank Smarter</h3>
        <p class="font-sans" style="font-size: 0.8rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">A smarter way to manage your money in Palestine.</p>
        
        <div style="display: flex; flex-direction: column; gap: 0.6rem; margin: 0.5rem 0;">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-primary);">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #b215

