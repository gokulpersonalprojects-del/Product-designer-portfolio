Created At: 2026-06-06T16:03:12Z
Completed At: 2026-06-06T16:03:12Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 548
Total Bytes: 18548
Showing lines 440 to 548
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
461:   const words = ['UX design', 'brand strategy', 'business thinking', 'systems thinking'];
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
476:         el.classList.remove('cycling-enter');
477:       }, 400);
478:     }, 300);
479:   }
480: 
481:   // Start cycling every 2.2 seconds
482:   setInterval(cycleWord, 2200);
483: }
484: 
485: // ==========================================================================
486: // PRELOADER
487: // ====================================
<truncated 924 bytes>
= 1500;  // first word appears
505:   const T_WORD_DELAY  = 75;    // gap between each word
506:   const T_EXIT        = 4200;  // preloader starts sweeping away
507: 
508:   // ── Progress bar fill ───────────────────────────────────
509:   // Fills from 0 → 100% over T_EXIT ms
510:   requestAnimationFrame(() => {
511:     bar.style.transition = `width ${T_EXIT}ms linear`;
512:     bar.style.width = '100%';
513:   });
514: 
515:   // ── 1. Trigger rock → tyre morph ───────────────────────
516:   setTimeout(() => {
517:     preloader.classList.add('morphed');
518:   }, T_MORPH);
519: 
520:   // ── 2. Reveal quote word by word ───────────────────────
521:   const words = QUOTE.split(' ');
522: 
523:   // Build word spans
524:   quoteEl.innerHTML = words.map((w, i) => {
525:     const isHighlight = HIGHLIGHTS.has(w.toLowerCase());
526:     return `<span class="pl-word${isHighlight ? ' highlight' : ''}" style="margin-right:0.28em">${w}</span>`;
527:   }).join('');
528: 
529:   const wordEls = quoteEl.querySelectorAll('.pl-word');
530: 
531:   wordEls.forEach((el, i) => {
532:     setTimeout(() => {
533:       el.classList.add('visible');
534:     }, T_QUOTE_START + i * T_WORD_DELAY);
535:   });
536: 
537:   // ── 3. Dismiss preloader ────────────────────────────────
538:   setTimeout(() => {
539:     preloader.classList.add('exit');
540:     document.body.classList.remove('preloading');
541: 
542:     // Remove from DOM after transition ends
543:     preloader.addEventListener('transitionend', () => {
544:       preloader.remove();
545:     }, { once: true });
546:   }, T_EXIT);
547: }
548: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
