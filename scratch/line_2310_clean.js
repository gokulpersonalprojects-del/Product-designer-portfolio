Created At: 2026-06-06T17:52:14Z
Completed At: 2026-06-06T17:52:14Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 1426
Total Bytes: 93068
Showing lines 1100 to 1140
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1100:   
1101:   function updateComponent(compType) {
1102:     // Reset button active classes and attributes
1103:     [btnLogin, btnAnalytics, btnProduct].forEach(btn => {
1104:       if (btn) {
1105:         btn.classList.remove('active');
1106:         btn.setAttribute('aria-selected', 'false');
1107:       }
1108:     });
1109:     
1110:     let activeBtn;
1111:     if (compType === 'login') activeBtn = btnLogin;
1112:     else if (compType === 'analytics') activeBtn = btnAnalytics;
1113:     else if (compType === 'product') activeBtn = btnProduct;
1114:     
1115:     if (activeBtn) {
1116:       activeBtn.classList.add('active');
1117:       activeBtn.setAttribute('aria-selected', 'true');
1118:     }
1119:     
1120:     canvasPreview.style.opacity = '0';
1121:     canvasPreview.style.transform = 'scale(0.96)';
1122:     
1123:     setTimeout(() => {
1124:       canvasPreview.innerHTML = components[compType];
1125:       canvasPreview.style.opacity = '1';
1126:       canvasPreview.style.transform = 'scale(1)';
1127:       
1128:       const compileTime = compType === 'login' ? '210ms' : (compType === 'analytics' ? '185ms' : '240ms');
1129:       statusMsg.textContent = `⚡ Component compiled in ${compileTime} with design tokens.`;
1130:     }, 150);
1131:   }
1132:   
1133:   if (btnLogin) btnLogin.addEventListener('click', () => updateComponent('login'));
1134:   if (btnAnalytics) btnAnalytics.addEventListener('click', () => updateComponent('analytics'));
1135:   if (btnProduct) btnProduct.addEventListener('click', () => updateComponent('product'));
1136:   
1137:   updateComponent('login');
1138: }
1139: 
1140: const brandLogoMark = `
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
