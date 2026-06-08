Created At: 2026-06-07T17:05:51Z
Completed At: 2026-06-07T17:05:51Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/scratch/found_3739.txt`
Total Lines: 60
Total Bytes: 2458
Showing lines 1 to 60
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: Created At: 2026-06-07T06:51:23Z
2: Completed At: 2026-06-07T06:51:24Z
3: File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
4: Total Lines: 2289
5: Total Bytes: 140213
6: Showing lines 950 to 1000
7: The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
8: 950:           </div>
9: 951:         </div>
10: 952: 
11: 953:       </div>
12: 954:     </article>
13: 955:   `;
14: 956: }
15: 957: 
16: 958: // ==========================================================================
17: 959: // DYNAMIC EVENT LISTENERS AND CONTROLLERS
18: 960: // ==========================================================================
19: 961: 
20: 962: // Global listener for views mounted by router.js
21: 963: document.addEventListener('viewMounted', (event) => {
22: 964:   const path = event.detail.path;
23: 965:   
24: 966:   if (path === '/work') {
25: 967:     initWorkFilters();
26: 968:   } else if (path === '/project-1') {
27: 969:     initProject1Sandbox();
28: 970:     initSolutionTabs();
29: 971:   } else if (path === '/project-2') {
30: 972:     initProject2Sandbox();
31: 973:     initSolutionTabs();
32: 974:   } else if (path === '/project-3') {
33: 975:     initProject3Sandbox();
34: 976:     initSolutionTabs();
35: 977:   } else if (path === '/project-4') {
36: 978:     initProject4Sandbox();
37: 979:     initSolutionTabs();
38: 980:   } else if (path === '/ai-workshop') {
39: 981:     initAIWorkshopSandbox();
40: 982:   }
41: 983: });
42: 984: 
43: 985: /**
44: 986:  * Work view project list category filter controls
45: 987:  */
46: 988: function initWorkFilters() {
47: 989:   const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
48: 990:   const projectRows = document.querySelectorAll('.project-list-wrapper .project-row');
49: 991:   
50: 992:   filterBtns.forEach(btn => {
51: 993:     btn.addEventListener('click', (e) => {
52: 994:       // Manage active classes
53: 995:       filterBtns.forEach(b => {
54: 996:         b.classList.remove('active');
55: 997:         b.setAttribute('aria-selected', 'false');
56: 998:       });
57: 999:       btn.classList.add('active');
58: 1000:       btn.setAttribute('aria-selected', 'true');
59: The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
60: 
The above content shows the entire, complete file contents of the requested file.
