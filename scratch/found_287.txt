Created At: 2026-06-05T18:29:33Z
Completed At: 2026-06-05T18:29:33Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 269
Total Bytes: 8166
Showing lines 170 to 269
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
170: 
171: 
172: 
173: // ==========================================================================
174: // INTERACTIVE DOMAIN CARDS GLOW TRIGGERS
175: // ==========================================================================
176: function initInteractiveBio() {
177:   const cards = document.querySelectorAll('.domain-card');
178:   if (!cards.length) return;
179: 
180:   const projectMap = {
181:     ai: ['yooki', 'aura'],
182:     saas: ['aura'],
183:     fintech: ['cendrol'],
184:     const: ['cendrol'],
185:     business: ['yooki', 'aura', 'cendrol']
186:   };
187: 
188:   let clickedCard = null;
189: 
190:   function highlight(target, element) {
191:     cards.forEach(card => card.classList.remove('active'));
192:     element.classList.add('active');
193: 
194:     const targets = projectMap[target] || [];
195:     const workCards = document.querySelectorAll('.work-card');
196:     workCards.forEach(card => {
197:       const proj = card.getAttribute('data-project');
198:       if (targets.includes(proj)) {
199:         card.classList.add('flash-highlight');
200:       } else {
201:         card.classList.remove('flash-highlight');
202:       }
203:     });
204:   }
205: 
206:   function reset() {
207:     if (clickedCard) {
208:       const target = clickedCard.getAttribute('data-target');
209:       highlight(target, clickedCard);
210:     } else {
211:       cards.forEach(card => card.classList.remove('active'));
212:       const workCards = document.querySelectorAll('.work-card');
213:       workCards.forEach(card => card.classList.remove('flash-highlight'));
214:     }
215:   }
216: 
217:   cards.forEach(card => {
218:     const target = card.getAttribute('data-target');
219: 
220:     card.addEventListener('mouseenter', () => {
221:       highlight(target, card);
222:     });
223: 
224:     card.addEventListener('mouseleave', () => {
225:       reset();
226:     });
227: 
228:     card.addEventListener('focus', () => {
229:       highlight(target, card);
230:     });
231: 
232:     card.addEventListener('blur', () => {
233:       reset();
234:     });
235: 
236:     card.addEventListener('click', (e) => {
237:       e.stopPropagation();
238:       if (clickedCard === card) {
239:         clickedCard = null;
240:         reset();
241:       } else {
242:         clickedCard = card;
243:         highlight(target, card);
244:       }
245:     });
246:   });
247: 
248:   document.addEventListener('click', () => {
249:     if (clickedCard) {
250:       clickedCard = null;
251:       reset();
252:     }
253:   });
254: }
255: 
256: // ==========================================================================
257: // MODULE LIFECYCLE INITIALIZATION
258: // ==========================================================================
259: initTheme();
260: initThemeToggler();
261: initTypewriter();
262: initScrollReveal();
263: initInteractiveBio();
264: 
265: // Re-observe scroll reveals on route changes
266: document.addEventListener('viewMounted', () => {
267:   initScrollReveal();
268: });
269: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
