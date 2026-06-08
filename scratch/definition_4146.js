Created At: 2026-06-07T17:06:02Z
Completed At: 2026-06-07T17:06:02Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/scratch/found_3137.txt`
Total Lines: 88
Total Bytes: 4207
Showing lines 1 to 88
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: Created At: 2026-06-07T06:05:31Z
2: Completed At: 2026-06-07T06:05:32Z
3: File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
4: Total Lines: 2105
5: Total Bytes: 128377
6: Showing lines 780 to 920
7: The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
8: 780:           <div class="spec-item">
9: 781:             <span class="spec-label">TIMELINE</span>
10: 782:             <span>3 Months (2024)</span>
11: 783:           </div>
12: 784:           <div class="spec-item">
13: 785:             <span class="spec-label">CONTEXT</span>
14: 786:             <span>Mobile Banking, Identity Verification (KYC), FinTech</span>
15: 787:           </div>
16: 788:         </div>
17: 789:       </div>
18: 790: 
19: 791:       <div class="project-body stagger-el stagger-delay-3">
20: 792:         
21: 793:         <!-- Solution Path Tabs -->
22: 794:         <div class="solution-path-container">
23: 795:           <span class="chapter-num font-mono" style="color: var(--color-bop); font-size: 0.75rem; letter-spacing: 0.05em;">/ THE SOLUTION PATH</span>
24: 796:           <div class="solution-tabs">
25: 797:             <button class="solution-tab-btn active" data-chapter="1">
26: 798:               <span class="tab-num">CHAPTER 01</span>
27: 799:               <span class="tab-title">The Friction of Traditional Onboarding</span>
28: 800:   
<truncated 985 bytes>
1.5rem 0; grid-column: span 2; max-width: 450px; margin: 0 auto; width: 100%;">
44: 878:                   <img src="./bop_screen1.png" alt="Bank of Palestine customer entry portal" style="width: auto; height: 380px; display: block; object-fit: contain;">
45: 879:                 </div>
46: 880:               </div>
47: 881:             </section>
48: 882:           </div>
49: 883:         </div>
50: 884: 
51: 885:       </div>
52: 886:     </article>
53: 887:   `;
54: 888: }
55: 889: 
56: 890: // ==========================================================================
57: 891: // DYNAMIC EVENT LISTENERS AND CONTROLLERS
58: 892: // ==========================================================================
59: 893: 
60: 894: // Global listener for views mounted by router.js
61: 895: document.addEventListener('viewMounted', (event) => {
62: 896:   const path = event.detail.path;
63: 897:   
64: 898:   if (path === '/work') {
65: 899:     initWorkFilters();
66: 900:   } else if (path === '/project-1') {
67: 901:     initProject1Sandbox();
68: 902:     initSolutionTabs();
69: 903:   } else if (path === '/project-2') {
70: 904:     initProject2Sandbox();
71: 905:     initSolutionTabs();
72: 906:   } else if (path === '/project-3') {
73: 907:     initProject3Sandbox();
74: 908:     initSolutionTabs();
75: 909:   } else if (path === '/project-4') {
76: 910:     initProject4Sandbox();
77: 911:     initSolutionTabs();
78: 912:   } else if (path === '/ai-workshop') {
79: 913:     initAIWorkshopSandbox();
80: 914:   }
81: 915: });
82: 916: 
83: 917: /**
84: 918:  * Work view project list category filter controls
85: 919:  */
86: 920: function initWorkFilters() {
87: The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
88: 
The above content shows the entire, complete file contents of the requested file.
