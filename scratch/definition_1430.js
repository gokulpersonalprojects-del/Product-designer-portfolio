Created At: 2026-06-06T15:52:46Z
Completed At: 2026-06-06T15:52:46Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 452
Total Bytes: 14947
Showing lines 420 to 452
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
420:     card.addEventListener('mouseleave', reset);
421:     card.addEventListener('focus', () => highlight(statKey));
422:     card.addEventListener('blur', reset);
423:   });
424: 
425:   // Staggered highlight sequence on load (gives immediate user feedback)
426:   setTimeout(() => {
427:     highlight('complex');
428:     setTimeout(() => {
429:       highlight('business');
430:       setTimeout(() => {
431:         reset();
432:       }, 650);
433:     }, 650);
434:   }, 900);
435: }
436: 
437: // ==========================================================================
438: // MODULE LIFECYCLE INITIALIZATION
439: // ==========================================================================
440: initTheme();
441: initThemeToggler();
442: initTypewriter();
443: initScrollReveal();
444: initFocusDeck();
445: initBioCredentialsInteraction();
446: 
447: // Re-observe scroll reveals on route changes
448: document.addEventListener('viewMounted', () => {
449:   initScrollReveal();
450: });
451: 
452: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
