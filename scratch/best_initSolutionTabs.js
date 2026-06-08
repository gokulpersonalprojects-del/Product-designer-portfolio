function initSolutionTabs() {
9: 1025:   const container = document.querySelector('.project-body');
10: 1026:   if (!container) return;
11: 1027: 
12: 1028:   const tabBtns = container.querySelectorAll('.solution-tab-btn');
13: 1029:   const chapterContents = container.querySelectorAll('.solution-chapter-content');
14: 1030: 
15: 1031:   tabBtns.forEach(btn => {
16: 1032:     btn.addEventListener('click', () => {
17: 1033:       const targetChapter = btn.getAttribute('data-chapter');
18: 1034:       if (!targetChapter) return;
19: 1035: 
20: 1036:       // Update active state on buttons
21: 1037:       tabBtns.forEach(b => {
22: 1038:         if (b.getAttribute('data-chapter') === targetChapter) {
23: 1039:           b.classList.add('active');
24: 1040:         } else {
25: 1041:           b.classList.remove('active');
26: 1042:         }
27: 1043:       });
28: 1044: 
29: 1045:       // Update active state on chapter contents
30: 1046:       chapterContents.forEach(content => {
31: 1047:         if (content.getAttribute('data-chapter-content') === targetChapter) {
32: 1048:           content.classList.add('active');
33: 1049:         } else {
34: 1050:           content.classList.remove('active');
35: 1051:         }
36: 1052:       });
37: 1053: 
38: 1054:       // Smooth scroll back to tabs header if scrolled past
39: 1055:       const pathContainer = container.querySelector('.solution-path-container');
40: 1056:       if (pathContainer) {
41: 1057:         const rect = pathContainer.getBoundingClientRect();
42: 1058:         if (rect.top < 0) {
43: 1059:           pathContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
44: 1060:         }
45: 1061:       }
46: 1062:     });
47: 1063:   });
48: 1064: }