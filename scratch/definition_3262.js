Created At: 2026-06-07T06:20:47Z
Completed At: 2026-06-07T06:20:48Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2393
Total Bytes: 146401
Showing lines 1000 to 1100
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1000: 
1001: /**
1002:  * Project 1 (Yooki) Syllabus map and AI sandbox controls
1003:  */
1004: function initProject1Sandbox() {
1005:   // 1. Syllabus Node toggling & Connection line glowing
1006:   const nodes = document.querySelectorAll('.syllabus-node');
1007:   const statusMsg = document.getElementById('syllabus-status');
1008:   const linePolityEconomy = document.getElementById('line-polity-economy');
1009:   const lineEconomyEnv = document.getElementById('line-economy-env');
1010:   
1011:   nodes.forEach(node => {
1012:     node.addEventListener('click', () => {
1013:       const topic = node.getAttribute('data-node');
1014:       
1015:       // Reset active states
1016:       nodes.forEach(n => n.classList.remove('active'));
1017:       node.classList.add('active');
1018:       
1019:       // Reset connection lines stroke and glow
1020:       if (linePolityEconomy) {
1021:         linePolityEconomy.style.stroke = 'var(--border-color)';
1022:         linePolityEconomy.style.strokeWidth = '2px';
1023:         linePolityEconomy.style.strokeDasharray = '4 4';
1024:         linePolityEconomy.style.filter = 'none';
1025:       }
1026:       if (lineEconomyEnv) {
1027:         lineEconomyEnv.style.stroke = 'var(--border-color)';
1028:         lineEconomyEnv.style.strokeWidth = '2px';
1029:         lineEconomyEnv.style.strokeDasharray = '4 4';
1030:         lineEconomyEnv.style.filter = 'none';
1031:       }
1032:       
1033:       if (topic === 'economy') {
1034:         node.classList.remove('neglected');
1035:         node.querySelector
<truncated 2038 bytes>
:           lineEconomyEnv.style.strokeWidth = '3px';
1070:           lineEconomyEnv.style.strokeDasharray = 'none';
1071:           lineEconomyEnv.style.filter = 'drop-shadow(0 0 5px hsla(258, 100%, 70%, 0.5))';
1072:         }
1073:         statusMsg.style.color = 'var(--color-brand)';
1074:         statusMsg.textContent = '📖 Environment: Biodiversity is 34% complete. It shares ecological-fiscal connections with Economy.';
1075:       }
1076:     });
1077:   });
1078: 
1079:   // 2. Chat Dialogue Typewriter/Streaming Effect
1080:   const promptChips = document.querySelectorAll('.ai-dialogue-sandbox .prompt-chip');
1081:   const userBubble = document.getElementById('ai-user-bubble');
1082:   const responseBubble = document.getElementById('ai-response-bubble');
1083:   
1084:   const responses = {
1085:     polity: {
1086:       question: '"I studied Panchayati Raj today. What should I review next?"',
1087:       answer: '"Polity is strong at 61% coverage. Since Panchayati Raj connects directly to <strong>Fiscal Federalism</strong> in Economy (where you have a 12% coverage gap), I recommend starting with Fiscal Federalism to bridge cross-subject concepts."'
1088:     },
1089:     exam: {
1090:       question: '"Which area should I revise before my mock exam next week?"',
1091:       answer: '"Environment is currently your most neglected area (last updated 18 days ago, 34% coverage). Given the recent mock exam weights, prioritize <strong>Biodiversity &amp; Conservation</strong> first to maximize score potential."'
1092:     }
1093:   };
1094:   
1095:   let isTyping = false;
1096:   promptChips.forEach(chip => {
1097:     chip.addEventListener('click', () => {
1098:       if (isTyping) return;
1099:       const type = chip.getAttribute('data-prompt');
1100:       const response = responses[type];
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
