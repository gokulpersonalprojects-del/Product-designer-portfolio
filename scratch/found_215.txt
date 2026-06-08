Created At: 2026-06-05T18:22:25Z
Completed At: 2026-06-05T18:22:25Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 235
Total Bytes: 7328
Showing lines 1 to 235
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: import { getActivePath } from './router.js';
2: 
3: // ==========================================================================
4: // INITIAL THEME SETTING (Non-blocking check)
5: // ==========================================================================
6: function initTheme() {
7:   const savedTheme = localStorage.getItem('theme');
8:   const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
9:   
10:   const targetTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
11:   document.documentElement.className = targetTheme;
12:   updateToggleButtonAria(targetTheme);
13: }
14: 
15: function updateToggleButtonAria(theme) {
16:   const toggleBtn = document.getElementById('theme-toggle');
17:   if (toggleBtn) {
18:     if (theme === 'dark') {
19:       toggleBtn.setAttribute('aria-label', 'Switch to light theme');
20:       toggleBtn.title = 'Switch to light theme';
21:     } else {
22:       toggleBtn.setAttribute('aria-label', 'Switch to dark theme');
23:       toggleBtn.title = 'Switch to dark theme';
24:     }
25:   }
26: }
27: 
28: // ==========================================================================
29: // CIRCULAR THEME REVEAL TRANSITION
30: // ==========================================================================
31: function initThemeToggler() {
32:   const toggleBtn = document.getElementById('theme-toggle');
33:   const overlay = document.getElementById('theme-overlay');
34: 
35:   if (!toggleBtn || !overlay) return;
36: 
37:   toggleBtn.addEventListener('click', (e) => {
38:     // 1. Get click coordinates
39:     let
<truncated 4822 bytes>
===
172: // DYNAMIC LIVE CLOCK (IST Timezone)
173: // ==========================================================================
174: let clockInterval;
175: 
176: function startLiveClock() {
177:   // Clear any existing clock loop
178:   if (clockInterval) {
179:     clearInterval(clockInterval);
180:   }
181: 
182:   const clockEl = document.getElementById('live-clock');
183:   if (!clockEl) return;
184: 
185:   function updateClock() {
186:     const options = {
187:       timeZone: 'Asia/Kolkata',
188:       hour: '2-digit',
189:       minute: '2-digit',
190:       second: '2-digit',
191:       hour12: true
192:     };
193:     
194:     try {
195:       const formatter = new Intl.DateTimeFormat('en-US', options);
196:       clockEl.textContent = formatter.format(new Date());
197:     } catch (err) {
198:       // Fallback for older environments
199:       clockEl.textContent = new Date().toLocaleTimeString();
200:     }
201:   }
202: 
203:   updateClock();
204:   clockInterval = setInterval(updateClock, 1000);
205: }
206: 
207: // ==========================================================================
208: // MODULE LIFECYCLE INITIALIZATION
209: // ==========================================================================
210: initTheme();
211: initThemeToggler();
212: initTypewriter();
213: initScrollReveal();
214: 
215: // Start clock if on homepage initially
216: if (getActivePath() === '/') {
217:   startLiveClock();
218: }
219: 
220: // Re-observe scroll reveals and manage dynamic clock loop on route changes
221: document.addEventListener('viewMounted', (event) => {
222:   initScrollReveal();
223:   
224:   const path = event.detail.path;
225:   if (path === '/') {
226:     startLiveClock();
227:   } else {
228:     // Clear interval when navigating to case studies to save resources
229:     if (clockInterval) {
230:       clearInterval(clockInterval);
231:       clockInterval = null;
232:     }
233:   }
234: });
235: 
The above content shows the entire, complete file contents of the requested file.
