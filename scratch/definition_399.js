Created At: 2026-06-06T06:50:39Z
Completed At: 2026-06-06T06:50:39Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 371
Total Bytes: 12285
Showing lines 340 to 371
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
340:   document.addEventListener('click', () => {
341:     const activeTab = document.querySelector('.deck-tab.active');
342:     if (activeTab) {
343:       const activeKey = activeTab.getAttribute('data-tab');
344:       const data = deckData[activeKey];
345:       const workCards = document.querySelectorAll('.work-card');
346:       workCards.forEach(card => {
347:         const proj = card.getAttribute('data-project');
348:         if (data && data.projectIds.includes(proj)) {
349:           card.classList.add('flash-highlight');
350:         } else {
351:           card.classList.remove('flash-highlight');
352:         }
353:       });
354:     }
355:   });
356: }
357: 
358: // ==========================================================================
359: // MODULE LIFECYCLE INITIALIZATION
360: // ==========================================================================
361: initTheme();
362: initThemeToggler();
363: initTypewriter();
364: initScrollReveal();
365: initFocusDeck();
366: 
367: // Re-observe scroll reveals on route changes
368: document.addEventListener('viewMounted', () => {
369:   initScrollReveal();
370: });
371: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
