Created At: 2026-06-06T17:48:58Z
Completed At: 2026-06-06T17:48:58Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 1426
Total Bytes: 93068
Showing lines 560 to 680
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
560: // PROJECT 3 (AURA AI - NEW CASE STUDY)
561: // ==========================================================================
562: export function renderProject3() {
563:   return `
564:     <article class="project-detail">
565:       <header class="project-header">
566:         <span class="label font-mono project-tag" style="color: #b2156a">MOBILE FINTECH / KYC REDESIGN</span>
567:         <h1 class="project-headline font-serif">Bank of Palestine: Simplifying Complex KYC Process</h1>
568:       </header>
569: 
570:       <div class="project-intro-grid">
571:         <p class="project-intro-text">
572:           Opening a bank account is historically a high-friction operational workflow. For Bank of Palestine, we redesigned the digital Know Your Customer (KYC) experience—transforming a complex, multi-step identity verification process into a progressive, transparent onboarding flow that minimizes cognitive load and reduces drop-off.
573:         </p>
574:         <div class="project-specs">
575:           <div class="spec-item">
576:             <span class="spec-label">ROLE</span>
577:             <span>Lead Product Designer</span>
578:           </div>
579:           <div class="spec-item">
580:             <span class="spec-label">TIMELINE</span>
581:             <span>3 Months (2024)</span>
582:           </div>
583:           <div class="spec-item">
584:             <span class="spec-label">CONTEXT</span>
585:             <span>Mobile Banking, Identity Verification (KYC), FinTech</span>
586:           </div>
587:         </div>
588:       </div
<truncated 5457 bytes>
introducing modern biometric credentials (Face ID / Touch ID) reduced total verification time from 12 minutes to under 2 minutes. Onboarding completion rates increased by 85%, accelerating customer acquisition across distributed regions.
647:           </p>
648: 
649:           <div class="project-media-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0; justify-content: center;">
650:             <div class="project-media-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); display: flex; justify-content: center; padding: 1.5rem 0; grid-column: span 2; max-width: 450px; margin: 0 auto; width: 100%;">
651:               <img src="./bop_screen1.png" alt="Bank of Palestine customer entry portal" style="width: auto; height: 380px; display: block; object-fit: contain;">
652:             </div>
653:           </div>
654:         </section>
655: 
656:       </div>
657:     </article>
658:   `;
659: }
660: 
661: // ==========================================================================
662: // DYNAMIC EVENT LISTENERS AND CONTROLLERS
663: // ==========================================================================
664: 
665: // Global listener for views mounted by router.js
666: document.addEventListener('viewMounted', (event) => {
667:   const path = event.detail.path;
668:   
669:   if (path === '/work') {
670:     initWorkFilters();
671:   } else if (path === '/project-1') {
672:     initProject1Sandbox();
673:   } else if (path === '/project-2') {
674:     initProject2Sandbox();
675:   } else if (path === '/project-3') {
676:     initProject3Sandbox();
677:   } else if (path === '/project-4') {
678:     initProject4Sandbox();
679:   }
680: });
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
