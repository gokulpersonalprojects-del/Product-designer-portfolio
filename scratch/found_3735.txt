Created At: 2026-06-07T06:51:05Z
Completed At: 2026-06-07T06:51:05Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 550
Total Bytes: 18713
Showing lines 440 to 475
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
440: initPreloader(); // Must run first — locks scroll and shows preloader
441: initTheme();
442: initThemeToggler();
443: initTypewriter();
444: initScrollReveal();
445: initFocusDeck();
446: initBioCredentialsInteraction();
447: initCyclingSkill();
448: 
449: // Re-observe scroll reveals on route changes
450: document.addEventListener('viewMounted', () => {
451:   initScrollReveal();
452: });
453: 
454: // ==========================================================================
455: // CYCLING SKILL WORD ANIMATION
456: // ==========================================================================
457: function initCyclingSkill() {
458:   const el = document.getElementById('cycling-skill');
459:   if (!el) return;
460: 
461:   const words = ['UX design', 'brand strategy', 'business thinking'];
462:   let index = 0;
463: 
464:   function cycleWord() {
465:     // Slide out upwards
466:     el.classList.add('cycling-exit');
467: 
468:     setTimeout(() => {
469:       index = (index + 1) % words.length;
470:       el.textContent = words[index];
471:       el.classList.remove('cycling-exit');
472:       el.classList.add('cycling-enter');
473: 
474:       // Clean up enter class after animation
475:       setTimeout(() => {
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
