Created At: 2026-06-07T05:44:48Z
Completed At: 2026-06-07T05:44:49Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2016
Total Bytes: 124128
Showing lines 1100 to 1170
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1100:  * Project 2 (Cendrol) State flow timeline controls
1101:  */
1102: function initProject2Sandbox() {
1103:   const steps = document.querySelectorAll('#state-sandbox .state-step');
1104:   const statusMsg = document.getElementById('state-status-msg');
1105:   
1106:   const stepMsgs = {
1107:     '1': 'Stage 1 (Submitted): Your invoice images have been submitted and are queued for central accounting desk audits.',
1108:     '2': 'Stage 2 (Audited): Receipt details have been parsed by OCR and validated by our finance automation team.',
1109:     '3': 'Stage 3 (Approved): CFO has signed off on the expense audit. Disbursement is scheduled.',
1110:     '4': 'Stage 4 (Reimbursed): Funds have been dispatched to your corporate wallet. Transaction complete!'
1111:   };
1112:   
1113:   steps.forEach(step => {
1114:     step.addEventListener('click', () => {
1115:       const stepNum = step.getAttribute('data-step');
1116:       
1117:       // Update active states
1118:       steps.forEach(s => s.classList.remove('active'));
1119:       step.classList.add('active');
1120:       
1121:       // Update message with colors
1122:       if (stepNum === '4') {
1123:         statusMsg.style.color = 'var(--color-success)'; // Success green
1124:       } else if (stepNum === '1') {
1125:         statusMsg.style.color = 'var(--color-accent)'; // Orange
1126:       } else {
1127:         statusMsg.style.color = 'var(--color-brand)'; // Purple
1128:       }
1129:       statusMsg.textContent = stepMsgs[stepNum];
1130:     });
1131:   });
1132: }
1133: 
1134: /*
<truncated 950 bytes>
e-height: 1.4;">A smarter way to manage your money in Palestine.</p>
1152:         
1153:         <div style="display: flex; flex-direction: column; gap: 0.6rem; margin: 0.5rem 0;">
1154:           <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-primary);">
1155:             <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: var(--color-bop); color: white; font-size: 0.6rem; font-weight: bold;">1</span>
1156:             <span>Phone Number &amp; Email</span>
1157:           </div>
1158:           <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-primary);">
1159:             <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: var(--color-bop); color: white; font-size: 0.6rem; font-weight: bold;">2</span>
1160:             <span>Palestinian ID Proof</span>
1161:           </div>
1162:           <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-primary);">
1163:             <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: var(--color-bop); color: white; font-size: 0.6rem; font-weight: bold;">3</span>
1164:             <span>Selfie Capture</span>
1165:           </div>
1166:         </div>
1167:       </div>
1168:       <button id="kyc-next-btn" style="width: 100%; padding: 0.75rem; border: none; border-radius: 8px; background: var(--color-bop); color: white; font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; margin-top: 1rem;">Get Started</button>
1169:     `,
1170:     2: () => `
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
