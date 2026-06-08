Created At: 2026-06-07T06:51:23Z
Completed At: 2026-06-07T06:51:24Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2289
Total Bytes: 140213
Showing lines 950 to 1000
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
950:           </div>
951:         </div>
952: 
953:       </div>
954:     </article>
955:   `;
956: }
957: 
958: // ==========================================================================
959: // DYNAMIC EVENT LISTENERS AND CONTROLLERS
960: // ==========================================================================
961: 
962: // Global listener for views mounted by router.js
963: document.addEventListener('viewMounted', (event) => {
964:   const path = event.detail.path;
965:   
966:   if (path === '/work') {
967:     initWorkFilters();
968:   } else if (path === '/project-1') {
969:     initProject1Sandbox();
970:     initSolutionTabs();
971:   } else if (path === '/project-2') {
972:     initProject2Sandbox();
973:     initSolutionTabs();
974:   } else if (path === '/project-3') {
975:     initProject3Sandbox();
976:     initSolutionTabs();
977:   } else if (path === '/project-4') {
978:     initProject4Sandbox();
979:     initSolutionTabs();
980:   } else if (path === '/ai-workshop') {
981:     initAIWorkshopSandbox();
982:   }
983: });
984: 
985: /**
986:  * Work view project list category filter controls
987:  */
988: function initWorkFilters() {
989:   const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
990:   const projectRows = document.querySelectorAll('.project-list-wrapper .project-row');
991:   
992:   filterBtns.forEach(btn => {
993:     btn.addEventListener('click', (e) => {
994:       // Manage active classes
995:       filterBtns.forEach(b => {
996:         b.classList.remove('active');
997:         b.setAttribute('aria-selected', 'false');
998:       });
999:       btn.classList.add('active');
1000:       btn.setAttribute('aria-selected', 'true');
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
