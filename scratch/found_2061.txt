Created At: 2026-06-06T17:10:04Z
Completed At: 2026-06-06T17:10:04Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 1148
Total Bytes: 72851
Showing lines 600 to 650
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
600:         <!-- Chapter 3 -->
601:         <section class="body-chapter" style="padding-bottom: 1rem;">
602:           <span class="chapter-num font-mono" style="color: #b2156a">CHAPTER 3</span>
603:           <h2 class="chapter-title font-serif">Operational Impact &amp; Growth</h2>
604:           <p class="chapter-desc">
605:             Simplifying the form hierarchy and introducing modern biometric credentials (Face ID / Touch ID) reduced total verification time from 12 minutes to under 2 minutes. Onboarding completion rates increased by 85%, accelerating customer acquisition across distributed regions.
606:           </p>
607: 
608:           <div class="project-media-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0; justify-content: center;">
609:             <div class="project-media-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); display: flex; justify-content: center; padding: 1.5rem 0; grid-column: span 2; max-width: 450px; margin: 0 auto; width: 100%;">
610:               <img src="./bop_screen1.png" alt="Bank of Palestine customer entry portal" style="width: auto; height: 380px; display: block; object-fit: contain;">
611:             </div>
612:           </div>
613:         </section>
614: 
615:       </div>
616:     </article>
617:   `;
618: }
619: 
620: // ==========================================================================
621: // DYNAMIC EVENT LISTENERS AND CONTROLLERS
622: // ==========================================================================
623: 
624: // Global listener for views mounted by router.js
625: document.addEventListener('viewMounted', (event) => {
626:   const path = event.detail.path;
627:   
628:   if (path === '/work') {
629:     initWorkFilters();
630:   } else if (path === '/project-1') {
631:     initProject1Sandbox();
632:   } else if (path === '/project-2') {
633:     initProject2Sandbox();
634:   } else if (path === '/project-3') {
635:     initProject3Sandbox();
636:   }
637: });
638: 
639: /**
640:  * Work view project list category filter controls
641:  */
642: function initWorkFilters() {
643:   const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
644:   const projectRows = document.querySelectorAll('.project-list-wrapper .project-row');
645:   
646:   filterBtns.forEach(btn => {
647:     btn.addEventListener('click', (e) => {
648:       // Manage active classes
649:       filterBtns.forEach(b => {
650:         b.classList.remove('active');
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
