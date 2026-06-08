Created At: 2026-06-06T06:58:31Z
Completed At: 2026-06-06T06:58:31Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 429
Total Bytes: 14031
Showing lines 1 to 429
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
39:     le
<truncated 12496 bytes>
; // Avoid infinite recursion loop
370: 
371:       try {
372:         const canvas = document.createElement('canvas');
373:         const ctx = canvas.getContext('2d');
374:         canvas.width = imgEl.naturalWidth || imgEl.width;
375:         canvas.height = imgEl.naturalHeight || imgEl.height;
376: 
377:         if (canvas.width === 0 || canvas.height === 0) return;
378: 
379:         ctx.drawImage(imgEl, 0, 0);
380:         const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
381:         const data = imgData.data;
382: 
383:         for (let i = 0; i < data.length; i += 4) {
384:           const r = data[i];
385:           const g = data[i + 1];
386:           const b = data[i + 2];
387: 
388:           const max = Math.max(r, g, b);
389:           const min = Math.min(r, g, b);
390: 
391:           // Key out background pixels (light grey/off-white)
392:           if (min > 190 && (max - min) < 25) {
393:             data[i + 3] = 0;
394:           }
395:         }
396: 
397:         ctx.putImageData(imgData, 0, 0);
398:         imgEl.src = canvas.toDataURL('image/png');
399:       } catch (err) {
400:         console.warn("Could not remove background dynamically: ", err);
401:       }
402:     };
403: 
404:     if (imgEl.complete) {
405:       process();
406:     } else {
407:       imgEl.addEventListener('load', process);
408:     }
409:   }
410: 
411:   removeBg(rockImg);
412:   removeBg(tyreImg);
413: }
414: 
415: // ==========================================================================
416: // MODULE LIFECYCLE INITIALIZATION
417: // ==========================================================================
418: initTheme();
419: initThemeToggler();
420: initTypewriter();
421: initScrollReveal();
422: initFocusDeck();
423: initLogoBackgroundRemoval();
424: 
425: // Re-observe scroll reveals on route changes
426: document.addEventListener('viewMounted', () => {
427:   initScrollReveal();
428: });
429: 
The above content shows the entire, complete file contents of the requested file.
