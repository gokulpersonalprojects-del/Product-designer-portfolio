Created At: 2026-06-06T09:27:35Z
Completed At: 2026-06-06T09:27:35Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 451
Total Bytes: 14866
Showing lines 1 to 451
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
<truncated 13441 bytes>
 pane work card highlights to sync with the active Focus Deck tab
398:     const activeTab = document.querySelector('.deck-tab.active');
399:     if (activeTab) {
400:       const activeKey = activeTab.getAttribute('data-tab');
401:       // Trigger a click or simulated mouseenter on the active tab to restore its highlights
402:       const tabEvent = new Event('mouseenter');
403:       activeTab.dispatchEvent(tabEvent);
404:     } else {
405:       const workCards = document.querySelectorAll('.work-card');
406:       workCards.forEach(card => card.classList.remove('flash-highlight'));
407:     }
408:   }
409: 
410:   // Bind card hover and focus triggers
411:   cards.forEach(card => {
412:     const statKey = card.getAttribute('data-stat');
413:     if (!statKey) return;
414: 
415:     card.addEventListener('mouseenter', () => highlight(statKey));
416:     card.addEventListener('mouseleave', reset);
417:     card.addEventListener('focus', () => highlight(statKey));
418:     card.addEventListener('blur', reset);
419:   });
420: 
421:   // Staggered highlight sequence on load (gives immediate user feedback)
422:   setTimeout(() => {
423:     highlight('experience');
424:     setTimeout(() => {
425:       highlight('mba');
426:       setTimeout(() => {
427:         highlight('hybrid');
428:         setTimeout(() => {
429:           reset();
430:         }, 650);
431:       }, 650);
432:     }, 650);
433:   }, 900);
434: }
435: 
436: // ==========================================================================
437: // MODULE LIFECYCLE INITIALIZATION
438: // ==========================================================================
439: initTheme();
440: initThemeToggler();
441: initTypewriter();
442: initScrollReveal();
443: initFocusDeck();
444: initBioCredentialsInteraction();
445: 
446: // Re-observe scroll reveals on route changes
447: document.addEventListener('viewMounted', () => {
448:   initScrollReveal();
449: });
450: 
451: 
The above content shows the entire, complete file contents of the requested file.
