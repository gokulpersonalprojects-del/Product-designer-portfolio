Created At: 2026-06-05T18:17:40Z
Completed At: 2026-06-05T18:17:41Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 183
Total Bytes: 6023
Showing lines 1 to 183
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: import { getActivePath } from './router.js';
2: 
3: // ==========================================================================
4: // INITIAL THEME SETTING (Non-blocking check)
5: // ==========================================================================
6: function initTheme() {
7:   const savedTheme = localStorage.getItem('theme');
8:   const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
9:   
10:   const targetTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
11:   document.documentElement.className = targetTheme;
12:   updateToggleButtonAria(targetTheme);
13: }
14: 
15: function updateToggleButtonAria(theme) {
16:   const toggleBtn = document.getElementById('theme-toggle');
17:   if (toggleBtn) {
18:     if (theme === 'dark') {
19:       toggleBtn.setAttribute('aria-label', 'Switch to light theme');
20:       toggleBtn.title = 'Switch to light theme';
21:     } else {
22:       toggleBtn.setAttribute('aria-label', 'Switch to dark theme');
23:       toggleBtn.title = 'Switch to dark theme';
24:     }
25:   }
26: }
27: 
28: // ==========================================================================
29: // CIRCULAR THEME REVEAL TRANSITION
30: // ==========================================================================
31: function initThemeToggler() {
32:   const toggleBtn = document.getElementById('theme-toggle');
33:   const overlay = document.getElementById('theme-overlay');
34: 
35:   if (!toggleBtn || !overlay) return;
36: 
37:   toggleBtn.addEventListener('click', (e) => {
38:     // 1. Get click coordinates
39:     let
<truncated 3257 bytes>
ll delay before typing next phrase
125:     }
126: 
127:     setTimeout(type, typingSpeed);
128:   }
129: 
130:   // Start typewriter loop
131:   setTimeout(type, delayBetweenPhrases);
132: }
133: 
134: // ==========================================================================
135: // INTERSECTION OBSERVER (SCROLL REVEAL)
136: // ==========================================================================
137: let revealObserver;
138: 
139: function initScrollReveal() {
140:   // Disconnect existing observer if routing occurred
141:   if (revealObserver) {
142:     revealObserver.disconnect();
143:   }
144: 
145:   const revealSettings = {
146:     threshold: 0.1,
147:     rootMargin: '0px 0px -50px 0px'
148:   };
149: 
150:   revealObserver = new IntersectionObserver((entries, observer) => {
151:     entries.forEach(entry => {
152:       if (entry.isIntersecting) {
153:         entry.target.classList.add('revealed');
154:         // Unobserve once revealed
155:         observer.unobserve(entry.target);
156:       }
157:     });
158:   }, revealSettings);
159: 
160:   // Targets: Section groups, case study chapters, and project cards
161:   const elementsToReveal = document.querySelectorAll(
162:     '.fade-in-section, .work-card, .body-chapter, .project-row, .about-grid'
163:   );
164:   
165:   elementsToReveal.forEach(el => {
166:     el.classList.add('fade-in-section'); // Ensure class is present
167:     revealObserver.observe(el);
168:   });
169: }
170: 
171: // ==========================================================================
172: // MODULE LIFECYCLE INITIALIZATION
173: // ==========================================================================
174: initTheme();
175: initThemeToggler();
176: initTypewriter();
177: initScrollReveal();
178: 
179: // Re-observe scroll reveals whenever the router mounts a new view template
180: document.addEventListener('viewMounted', () => {
181:   initScrollReveal();
182: });
183: 
The above content shows the entire, complete file contents of the requested file.
