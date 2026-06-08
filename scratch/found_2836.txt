Created At: 2026-06-07T05:44:53Z
Completed At: 2026-06-07T05:44:54Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2016
Total Bytes: 124128
Showing lines 1300 to 1340
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1300:         }
1301:       }
1302:     }, 220);
1303:   }
1304:   
1305:   updateView();
1306: }
1307: 
1308: /**
1309:  * Project 4 (Aura AI) Component compiler generative canvas controls
1310:  */
1311: function initProject4Sandbox() {
1312:   const btnLogin = document.getElementById('aura-btn-login');
1313:   const btnAnalytics = document.getElementById('aura-btn-analytics');
1314:   const btnProduct = document.getElementById('aura-btn-product');
1315:   const canvasPreview = document.getElementById('aura-canvas-preview');
1316:   const statusMsg = document.getElementById('aura-sandbox-status');
1317:   
1318:   if (!canvasPreview) return;
1319:   
1320:   const components = {
1321:     login: `
1322:       <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 12px; display: flex; flex-direction: column; gap: 1rem; box-shadow: var(--shadow-sm); text-align: left;">
1323:         <div style="display: flex; flex-direction: column; gap: 0.25rem;">
1324:           <h4 class="font-serif" style="margin: 0; font-size: 1.15rem; color: var(--text-primary); font-weight: 500;">Welcome back</h4>
1325:           <p class="font-sans" style="margin: 0; font-size: 0.75rem; color: var(--text-secondary);">Enter your credentials to access your workspace</p>
1326:         </div>
1327:         <div style="display: flex; flex-direction: column; gap: 0.75rem;">
1328:           <input type="text" placeholder="name@company.com" disabled style="width: 100%; padding: 0.6rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.8rem;" />
1329:           <input type="password" placeholder="••••••••" disabled style="width: 100%; padding: 0.6rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.8rem;" />
1330:         </div>
1331:         <button style="padding: 0.6rem; border: none; border-radius: 6px; background: var(--color-brand); color: white; font-weight: 600; font-size: 0.8rem; cursor: not-allowed;">Sign In</button>
1332:       </div>
1333:     `,
1334:     analytics: `
1335:       <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: 12px; display: flex; flex-direction: column; gap: 0.75rem; box-shadow: var(--shadow-sm); text-align: left;">
1336:         <div style="display: flex; justify-content: space-between; align-items: center;">
1337:           <h4 class="font-serif" style="margin: 0; font-size: 1rem; color: var(--text-primary); font-weight: 500;">Performance Metrics</h4>
1338:           <span style="font-size: 0.65rem; padding: 0.2rem 0.4rem; background: var(--color-success-light); color: var(--color-success); border-radius: 4px; font-weight: 600; font-family: var(--font-mono);">LIVE</span>
1339:         </div>
1340:         <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.25rem;">
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
