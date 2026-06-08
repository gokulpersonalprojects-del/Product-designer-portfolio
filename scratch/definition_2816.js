Created At: 2026-06-07T05:44:28Z
Completed At: 2026-06-07T05:44:28Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2016
Total Bytes: 124128
Showing lines 800 to 920
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
800:             <section class="body-chapter" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
801:               <span class="chapter-num font-mono" style="color: var(--color-bop)">CHAPTER 2</span>
802:               <h2 class="chapter-title font-serif">Streamlining Verification &amp; Trust</h2>
803:               <p class="chapter-desc">
804:                 To secure account creation while keeping it swift, we structured seamless OTP (One-Time Password) entry interfaces and progressive account selection. By displaying immediate inline feedback and clear error states, the system maintains a high sense of progress and confidence.
805:               </p>
806: 
807:               <!-- Interactive KYC Simulator Sandbox -->
808:               <div class="interactive-flow-sandbox" style="margin: 2.5rem 0; padding: 1.5rem; background: var(--bg-card); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color);">
809:                 <span class="font-mono label" style="font-size: 0.65rem;">INTERACTIVE KYC FLOW SIMULATOR (CLICK TO ONBOARD)</span>
810:                 <div class="kyc-simulator-container" style="max-width: 320px; margin: 1.5rem auto; border: 1.5px solid var(--border-color); border-radius: 20px; overflow: hidden; background: var(--bg-secondary); box-shadow: var(--shadow-md);">
811:                   <div id="kyc-screen-content" style="padding: 1.5rem; min-height: 350px; display: flex; flex-direction: column; justify-content: space-between;">
812:                     <!-- Content will be injected dynamically -->
813:        
<truncated 3925 bytes>
th === '/project-4') {
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
886:       // Manage active classes
887:       filterBtns.forEach(b => {
888:         b.classList.remove('active');
889:         b.setAttribute('aria-selected', 'false');
890:       });
891:       btn.classList.add('active');
892:       btn.setAttribute('aria-selected', 'true');
893:       
894:       const filterValue = btn.getAttribute('data-filter');
895:       
896:       // Filter list rows
897:       projectRows.forEach(row => {
898:         if (filterValue === 'all') {
899:           row.classList.remove('filtered-out');
900:         } else {
901:           const category = row.getAttribute('data-category');
902:           if (category === filterValue) {
903:             row.classList.remove('filtered-out');
904:           } else {
905:             row.classList.add('filtered-out');
906:           }
907:         }
908:       });
909:     });
910:   });
911: }
912: 
913: /**
914:  * Project 1 (Yooki) Syllabus map and AI sandbox controls
915:  */
916: function initProject1Sandbox() {
917:   // 1. Syllabus Node toggling & Connection line glowing
918:   const nodes = document.querySelectorAll('.syllabus-node');
919:   const statusMsg = document.getElementById('syllabus-status');
920:   const linePolityEconomy = document.getElementById('line-polity-economy');
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
