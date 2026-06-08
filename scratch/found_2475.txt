Created At: 2026-06-07T04:49:49Z
Completed At: 2026-06-07T04:49:49Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 1442
Total Bytes: 93320
Showing lines 660 to 695
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
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
681: 
682: /**
683:  * Work view project list category filter controls
684:  */
685: function initWorkFilters() {
686:   const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
687:   const projectRows = document.querySelectorAll('.project-list-wrapper .project-row');
688:   
689:   filterBtns.forEach(btn => {
690:     btn.addEventListener('click', (e) => {
691:       // Manage active classes
692:       filterBtns.forEach(b => {
693:         b.classList.remove('active');
694:         b.setAttribute('aria-selected', 'false');
695:       });
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
