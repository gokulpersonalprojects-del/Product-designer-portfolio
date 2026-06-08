Created At: 2026-06-07T05:44:44Z
Completed At: 2026-06-07T05:44:44Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2016
Total Bytes: 124128
Showing lines 912 to 1000
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
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
926:       
927:       // Reset active states
928:       nodes.forEach(n => n.classList.remove('active'));
929:       node.classList.add('active');
930:       
931:       // Reset connection lines stroke and glow
932:       if (linePolityEconomy) {
933:         linePolityEconomy.style.stroke = 'var(--border-color)';
934:         linePolityEconomy.style.strokeWidth = '2px';
935:         linePolityEconomy.style.strokeDasharray = '4 4';
936:         linePolityEconomy.style.filter = 'none';
937:       }
938:       if (lineEconomyEnv) {
939:         lineEconomyEnv.style.stroke = 'var(--border-color)';
940:         lineEconomyEnv.style.strokeWidth = '2px';
941:         lineEconomyEnv.style.strokeDasharray = '4 4';
942:         lineEconomyEnv.style.filter = 'none';
943:       }
944:       
945:       if (topic === 'economy') {
946:         node.classList.remove('neglected');
947:         node.querySelector('.node-chip').className = 'node-chip
<truncated 1299 bytes>
my.style.stroke = 'var(--color-accent)';
971:           linePolityEconomy.style.strokeWidth = '3px';
972:           linePolityEconomy.style.strokeDasharray = 'none';
973:           linePolityEconomy.style.filter = 'drop-shadow(0 0 5px hsla(22, 100%, 57%, 0.5))';
974:         }
975:         statusMsg.style.color = 'var(--color-accent)';
976:         statusMsg.textContent = '📚 Polity: Panchayati Raj is strong. It connects to Economy (Fiscal Federalism) via federal governance structure.';
977:       } else {
978:         // Glow right connection
979:         if (lineEconomyEnv) {
980:           lineEconomyEnv.style.stroke = 'var(--color-brand)';
981:           lineEconomyEnv.style.strokeWidth = '3px';
982:           lineEconomyEnv.style.strokeDasharray = 'none';
983:           lineEconomyEnv.style.filter = 'drop-shadow(0 0 5px hsla(258, 100%, 70%, 0.5))';
984:         }
985:         statusMsg.style.color = 'var(--color-brand)';
986:         statusMsg.textContent = '📖 Environment: Biodiversity is 34% complete. It shares ecological-fiscal connections with Economy.';
987:       }
988:     });
989:   });
990: 
991:   // 2. Chat Dialogue Typewriter/Streaming Effect
992:   const promptChips = document.querySelectorAll('.ai-dialogue-sandbox .prompt-chip');
993:   const userBubble = document.getElementById('ai-user-bubble');
994:   const responseBubble = document.getElementById('ai-response-bubble');
995:   
996:   const responses = {
997:     polity: {
998:       question: '"I studied Panchayati Raj today. What should I review next?"',
999:       answer: '"Polity is strong at 61% coverage. Since Panchayati Raj connects directly to <strong>Fiscal Federalism</strong> in Economy (where you have a 12% coverage gap), I recommend starting with Fiscal Federalism to bridge cross-subject concepts."'
1000:     },
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
