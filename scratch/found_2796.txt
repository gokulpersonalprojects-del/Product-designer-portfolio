Created At: 2026-06-07T05:43:53Z
Completed At: 2026-06-07T05:43:53Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2016
Total Bytes: 124128
Showing lines 855 to 885
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
855: // DYNAMIC EVENT LISTENERS AND CONTROLLERS
856: // ==========================================================================
857: 
858: // Global listener for views mounted by router.js
859: document.addEventListener('viewMounted', (event) => {
860:   const path = event.detail.path;
861:   
862:   if (path === '/work') {
863:     initWorkFilters();
864:   } else if (path === '/project-1') {
865:     initProject1Sandbox();
866:   } else if (path === '/project-2') {
867:     initProject2Sandbox();
868:   } else if (path === '/project-3') {
869:     initProject3Sandbox();
870:   } else if (path === '/project-4') {
871:     initProject4Sandbox();
872:   } else if (path === '/ai-workshop') {
873:     initAIWorkshopSandbox();
874:   }
875: });
876: 
877: /**
878:  * Work view project list category filter controls
879:  */
880: function initWorkFilters() {
881:   const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
882:   const projectRows = document.querySelectorAll('.project-list-wrapper .project-row');
883:   
884:   filterBtns.forEach(btn => {
885:     btn.addEventListener('click', (e) => {
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
