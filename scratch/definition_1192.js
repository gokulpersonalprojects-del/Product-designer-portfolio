Created At: 2026-06-06T09:48:08Z
Completed At: 2026-06-06T09:48:08Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 447
Total Bytes: 14760
Showing lines 1 to 447
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
<truncated 13315 bytes>
ds.forEach(c => c.classList.remove('highlight-active'));
395:     
396:     // Reset right pane work card highlights to sync with the active Focus Deck tab
397:     const activeTab = document.querySelector('.deck-tab.active');
398:     if (activeTab) {
399:       const activeKey = activeTab.getAttribute('data-tab');
400:       // Trigger a click or simulated mouseenter on the active tab to restore its highlights
401:       const tabEvent = new Event('mouseenter');
402:       activeTab.dispatchEvent(tabEvent);
403:     } else {
404:       const workCards = document.querySelectorAll('.work-card');
405:       workCards.forEach(card => card.classList.remove('flash-highlight'));
406:     }
407:   }
408: 
409:   // Bind card hover and focus triggers
410:   cards.forEach(card => {
411:     const statKey = card.getAttribute('data-stat');
412:     if (!statKey) return;
413: 
414:     card.addEventListener('mouseenter', () => highlight(statKey));
415:     card.addEventListener('mouseleave', reset);
416:     card.addEventListener('focus', () => highlight(statKey));
417:     card.addEventListener('blur', reset);
418:   });
419: 
420:   // Staggered highlight sequence on load (gives immediate user feedback)
421:   setTimeout(() => {
422:     highlight('experience');
423:     setTimeout(() => {
424:       highlight('mba');
425:       setTimeout(() => {
426:         reset();
427:       }, 650);
428:     }, 650);
429:   }, 900);
430: }
431: 
432: // ==========================================================================
433: // MODULE LIFECYCLE INITIALIZATION
434: // ==========================================================================
435: initTheme();
436: initThemeToggler();
437: initTypewriter();
438: initScrollReveal();
439: initFocusDeck();
440: initBioCredentialsInteraction();
441: 
442: // Re-observe scroll reveals on route changes
443: document.addEventListener('viewMounted', () => {
444:   initScrollReveal();
445: });
446: 
447: 
The above content shows the entire, complete file contents of the requested file.
