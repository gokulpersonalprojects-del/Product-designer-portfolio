Created At: 2026-06-07T06:05:31Z
Completed At: 2026-06-07T06:05:32Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2105
Total Bytes: 128377
Showing lines 780 to 920
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
780:           <div class="spec-item">
781:             <span class="spec-label">TIMELINE</span>
782:             <span>3 Months (2024)</span>
783:           </div>
784:           <div class="spec-item">
785:             <span class="spec-label">CONTEXT</span>
786:             <span>Mobile Banking, Identity Verification (KYC), FinTech</span>
787:           </div>
788:         </div>
789:       </div>
790: 
791:       <div class="project-body stagger-el stagger-delay-3">
792:         
793:         <!-- Solution Path Tabs -->
794:         <div class="solution-path-container">
795:           <span class="chapter-num font-mono" style="color: var(--color-bop); font-size: 0.75rem; letter-spacing: 0.05em;">/ THE SOLUTION PATH</span>
796:           <div class="solution-tabs">
797:             <button class="solution-tab-btn active" data-chapter="1">
798:               <span class="tab-num">CHAPTER 01</span>
799:               <span class="tab-title">The Friction of Traditional Onboarding</span>
800:             </button>
801:             <button class="solution-tab-btn" data-chapter="2">
802:               <span class="tab-num">CHAPTER 02</span>
803:               <span class="tab-title">Streamlining Verification &amp; Trust</span>
804:             </button>
805:             <button class="solution-tab-btn" data-chapter="3">
806:               <span class="tab-num">CHAPTER 03</span>
807:               <span class="tab-title">Operational Impact &amp; Growth</span>
808:             </button>
809:           </div>
810:         </div>
811: 
812:         <!-- So
<truncated 6315 bytes>
gin: 2rem 0; justify-content: center;">
877:                 <div class="project-media-wrapper" style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); background: var(--bg-card); display: flex; justify-content: center; padding: 1.5rem 0; grid-column: span 2; max-width: 450px; margin: 0 auto; width: 100%;">
878:                   <img src="./bop_screen1.png" alt="Bank of Palestine customer entry portal" style="width: auto; height: 380px; display: block; object-fit: contain;">
879:                 </div>
880:               </div>
881:             </section>
882:           </div>
883:         </div>
884: 
885:       </div>
886:     </article>
887:   `;
888: }
889: 
890: // ==========================================================================
891: // DYNAMIC EVENT LISTENERS AND CONTROLLERS
892: // ==========================================================================
893: 
894: // Global listener for views mounted by router.js
895: document.addEventListener('viewMounted', (event) => {
896:   const path = event.detail.path;
897:   
898:   if (path === '/work') {
899:     initWorkFilters();
900:   } else if (path === '/project-1') {
901:     initProject1Sandbox();
902:     initSolutionTabs();
903:   } else if (path === '/project-2') {
904:     initProject2Sandbox();
905:     initSolutionTabs();
906:   } else if (path === '/project-3') {
907:     initProject3Sandbox();
908:     initSolutionTabs();
909:   } else if (path === '/project-4') {
910:     initProject4Sandbox();
911:     initSolutionTabs();
912:   } else if (path === '/ai-workshop') {
913:     initAIWorkshopSandbox();
914:   }
915: });
916: 
917: /**
918:  * Work view project list category filter controls
919:  */
920: function initWorkFilters() {
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
