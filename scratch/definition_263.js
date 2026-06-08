Created At: 2026-06-05T18:27:12Z
Completed At: 2026-06-05T18:27:12Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 288
Total Bytes: 9332
Showing lines 170 to 288
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
170: 
171: 
172: 
173: // ==========================================================================
174: // INTERACTIVE BIOGRAPHY GLOW & DETAILS
175: // ==========================================================================
176: function initInteractiveBio() {
177:   const bioSpans = document.querySelectorAll('.bio-interactive');
178:   const insightEl = document.getElementById('bio-insight');
179:   const insightWrapper = document.getElementById('bio-insight-wrapper');
180:   
181:   if (!bioSpans.length || !insightEl) return;
182: 
183:   const insights = {
184:     ai: "Designing syllabus graphs for Yooki and modular interface editors for Aura AI.",
185:     saas: "Structuring complex layout parameters and administrative quality-check dashboards.",
186:     fintech: "Streamlining on-site corporate wallet disbursements and finance audits.",
187:     const: "Improving verification workflows and reducing receipt interpretation lag for field engineers.",
188:     mba: "Translating UX improvements directly into business yield (operational speed, lower errors).",
189:     business: "Translating UX improvements directly into business yield (operational speed, lower errors)."
190:   };
191: 
192:   const projectMap = {
193:     ai: ['yooki', 'aura'],
194:     saas: ['aura'],
195:     fintech: ['cendrol'],
196:     const: ['cendrol'],
197:     mba: ['yooki', 'aura', 'cendrol'],
198:     business: ['yooki', 'aura', 'cendrol']
199:   };
200: 
201:   const defaultText = "Hover over highlighted terms to see specific domain focus and flash related projects.";
202:   let clickedSpan = n
<truncated 852 bytes>

226:       highlight(target, clickedSpan);
227:     } else {
228:       insightEl.textContent = defaultText;
229:       if (insightWrapper) insightWrapper.classList.remove('highlight');
230:       bioSpans.forEach(span => span.classList.remove('active'));
231:       const cards = document.querySelectorAll('.work-card');
232:       cards.forEach(card => card.classList.remove('flash-highlight'));
233:     }
234:   }
235: 
236:   bioSpans.forEach(span => {
237:     const target = span.getAttribute('data-target');
238: 
239:     span.addEventListener('mouseenter', () => {
240:       highlight(target, span);
241:     });
242: 
243:     span.addEventListener('mouseleave', () => {
244:       reset();
245:     });
246: 
247:     span.addEventListener('focus', () => {
248:       highlight(target, span);
249:     });
250: 
251:     span.addEventListener('blur', () => {
252:       reset();
253:     });
254: 
255:     span.addEventListener('click', (e) => {
256:       e.stopPropagation();
257:       if (clickedSpan === span) {
258:         clickedSpan = null;
259:         reset();
260:       } else {
261:         clickedSpan = span;
262:         highlight(target, span);
263:       }
264:     });
265:   });
266: 
267:   document.addEventListener('click', () => {
268:     if (clickedSpan) {
269:       clickedSpan = null;
270:       reset();
271:     }
272:   });
273: }
274: 
275: // ==========================================================================
276: // MODULE LIFECYCLE INITIALIZATION
277: // ==========================================================================
278: initTheme();
279: initThemeToggler();
280: initTypewriter();
281: initScrollReveal();
282: initInteractiveBio();
283: 
284: // Re-observe scroll reveals on route changes
285: document.addEventListener('viewMounted', () => {
286:   initScrollReveal();
287: });
288: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
