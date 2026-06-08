function initProject2Sandbox() {
  const steps = document.querySelectorAll('#state-sandbox .state-step');
  const statusMsg = document.getElementById('state-status-msg');
  
  const stepMsgs = {
    '1': 'Stage 1 (Submitted): Your invoice images have been submitted and are queued for central accounting desk audits.',
    '2': 'Stage 2 (Audited): Receipt details have been parsed by OCR and validated by our finance automation team.',
    '3': 'Stage 3 (Approved): CFO has signed off on the expense audit. Disbursement is scheduled.',
    '4': 'Stage 4 (Reimbursed): Funds have been dispatched to your corporate wallet. Transaction complete!'

