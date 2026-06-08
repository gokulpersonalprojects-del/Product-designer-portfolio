Created At: 2026-06-07T05:45:06Z
Completed At: 2026-06-07T05:45:06Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2016
Total Bytes: 124128
Showing lines 900 to 925
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
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
921:   const lineEconomyEnv = document.getElementById('line-economy-env');
922:   
923:   nodes.forEach(node => {
924:     node.addEventListener('click', () => {
925:       const topic = node.getAttribute('data-node');
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
