Created At: 2026-06-07T06:22:15Z
Completed At: 2026-06-07T06:22:16Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 2289
Total Bytes: 140182
Showing lines 1060 to 1250
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1060:         }
1061:       }
1062:     });
1063:   });
1064: }
1065: 
1066: /**
1067:  * Project 1 (Yooki) Syllabus map and AI sandbox controls
1068:  */
1069: function initProject1Sandbox() {
1070:   // 1. UPSC Cognitive Pathing Flowchart logic
1071:   const btnIAPlay = document.getElementById('ws-ia-btn-play');
1072:   const btnIAReset = document.getElementById('ws-ia-btn-reset');
1073:   const btnIATopic = document.getElementById('ws-ia-btn-topic');
1074:   
1075:   const iaProgressBar = document.getElementById('ia-progress-bar');
1076:   const iaProgressText = document.getElementById('ia-progress-text');
1077:   const iaSearchBox = document.getElementById('ia-search-box');
1078:   const iaDetailsTitle = document.getElementById('ia-details-title');
1079:   const iaDetailsDesc = document.getElementById('ia-details-desc');
1080:   const iaNudgeList = document.getElementById('ia-nudge-list');
1081:   const iaJourneySteps = document.getElementById('ia-journey-steps');
1082:   
1083:   const iaNodes = document.querySelectorAll('.ia-node');
1084:   const iaDots = document.querySelectorAll('.ia-flow-dot');
1085:   const iaPaths = document.querySelectorAll('.ia-flow-path, .ia-flow-path-dashed');
1086: 
1087:   const iaTopicData = {
1088:     polity: {
1089:       search: 'Panchayati Raj',
1090:       detailsTitle: 'Relevant Details',
1091:       detailsDesc: '73rd Amendment, 3-tier local self-governance model.',
1092:       nudge: `
1093:         <span style="font-size: 0.62rem; padding: 0.15rem 0.3rem; background: var(--bg-secondary); border-radius:
<truncated 6234 bytes>
set animations
1209:       iaDots.forEach(dot => {
1210:         // Force reflow to restart animation
1211:         const style = dot.style.animation;
1212:         dot.style.animation = 'none';
1213:         dot.offsetHeight; // trigger reflow
1214:         dot.style.animation = '';
1215:         
1216:         if (isLoopingPaused) {
1217:           dot.classList.add('paused');
1218:         }
1219:       });
1220: 
1221:       // Update progress bar
1222:       if (iaProgressBar) {
1223:         iaProgressBar.style.width = '12%';
1224:         setTimeout(() => {
1225:           iaProgressBar.style.width = iaTopicData[currentIATopic].progressWidth;
1226:         }, 100);
1227:       }
1228:     });
1229:   }
1230: 
1231:   if (btnIATopic) {
1232:     btnIATopic.addEventListener('click', () => {
1233:       currentIATopic = currentIATopic === 'polity' ? 'history' : 'polity';
1234:       const data = iaTopicData[currentIATopic];
1235:       
1236:       // Update HTML content
1237:       if (iaSearchBox) iaSearchBox.textContent = data.search;
1238:       if (iaDetailsTitle) iaDetailsTitle.textContent = data.detailsTitle;
1239:       if (iaDetailsDesc) iaDetailsDesc.textContent = data.detailsDesc;
1240:       if (iaNudgeList) iaNudgeList.innerHTML = data.nudge;
1241:       if (iaJourneySteps) iaJourneySteps.innerHTML = data.journey;
1242:       if (iaProgressText) iaProgressText.textContent = data.progressText;
1243:       if (iaProgressBar) iaProgressBar.style.width = data.progressWidth;
1244:       
1245:       // Reset active state
1246:       iaNodes.forEach(n => n.classList.remove('active'));
1247:       const nodeSearch = document.getElementById('node-search');
1248:       if (nodeSearch) nodeSearch.classList.add('active');
1249:       highlightFlowPaths('node-search');
1250:     });
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
