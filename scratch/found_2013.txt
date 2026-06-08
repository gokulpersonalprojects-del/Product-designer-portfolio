Created At: 2026-06-06T17:06:57Z
Completed At: 2026-06-06T17:06:57Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 1058
Total Bytes: 63170
Showing lines 600 to 650
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
600:           <p class="chapter-desc">
601:             To build trust, users need to understand *why* the AI made specific choices. Aura exposes an inspector sidebar displaying layout grounding details, contrast warnings (ensuring the generated text meets WCAG contrast accessibility), and layout bounding boxes.
602:           </p>
603:         </section>
604: 
605:       </div>
606:     </article>
607:   `;
608: }
609: 
610: // ==========================================================================
611: // DYNAMIC EVENT LISTENERS AND CONTROLLERS
612: // ==========================================================================
613: 
614: // Global listener for views mounted by router.js
615: document.addEventListener('viewMounted', (event) => {
616:   const path = event.detail.path;
617:   
618:   if (path === '/work') {
619:     initWorkFilters();
620:   } else if (path === '/project-1') {
621:     initProject1Sandbox();
622:   } else if (path === '/project-2') {
623:     initProject2Sandbox();
624:   } else if (path === '/project-3') {
625:     initProject3Sandbox();
626:   }
627: });
628: 
629: /**
630:  * Work view project list category filter controls
631:  */
632: function initWorkFilters() {
633:   const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
634:   const projectRows = document.querySelectorAll('.project-list-wrapper .project-row');
635:   
636:   filterBtns.forEach(btn => {
637:     btn.addEventListener('click', (e) => {
638:       // Manage active classes
639:       filterBtns.forEach(b => {
640:         b.classList.remove('active');
641:         b.setAttribute('aria-selected', 'false');
642:       });
643:       btn.classList.add('active');
644:       btn.setAttribute('aria-selected', 'true');
645:       
646:       const filterValue = btn.getAttribute('data-filter');
647:       
648:       // Filter list rows
649:       projectRows.forEach(row => {
650:         if (filterValue === 'all') {
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
