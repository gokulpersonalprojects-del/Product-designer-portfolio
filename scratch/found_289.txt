Created At: 2026-06-05T18:29:40Z
Completed At: 2026-06-05T18:29:40Z
The following changes were made by the replace_file_content tool to: c:\Users\ASUS\Desktop\new portfolio\animation.js. If relevant, proactively run terminal commands to execute this code for the USER. Don't ask for permission.
[diff_block_start]
@@ -171,31 +171,106 @@
 
 
 // ==========================================================================
-// INTERACTIVE DOMAIN CARDS GLOW TRIGGERS
-// ==========================================================================
-function initInteractiveBio() {
-  const cards = document.querySelectorAll('.domain-card');
-  if (!cards.length) return;
-
-  const projectMap = {
-    ai: ['yooki', 'aura'],
-    saas: ['aura'],
-    fintech: ['cendrol'],
-    const: ['cendrol'],
-    business: ['yooki', 'aura', 'cendrol']
-  };
-
-  let clickedCard = null;
-
-  function highlight(target, element) {
-    cards.forEach(card => card.classList.remove('active'));
-    element.classList.add('active');
-
-    const targets = projectMap[target] || [];
+// INTERACTIVE FOCUS DECK SEGMENTED SWITCHER
+// ==========================================================================
+function initFocusDeck() {
+  const tabs = document.querySelectorAll('.deck-tab');
+  const slider = document.getElementById('tab-slider');
+  const body = document.getElementById('deck-body');
+  const titleEl = document.getElementById('deck-title');
+  const descEl = document.getElementById('deck-desc');
+  const projectsRow = document.getElementById('deck-projects-row');
+
+  if (!tabs.length || !slider) return;
+
+  const deckData = {
+    ai: {
+      title: "AI Interaction Systems",
+      desc: "Syllabus maps & Generative UI: Designing interactive syllabus graphs for Yooki and modular prompt-to-interface editor canvases for Aura AI.",
+      projects: ["Yooki", "Aura AI"],
+      color: "var(--orange-accent)",
+      projectIds: ["yooki", "aura"]
+    },
+    saas: {
+      title: "Enterprise SaaS & HRTech",
+      desc: "Complex Workflows: 
<truncated 4945 bytes>
       if (data) {
+          const workCards = document.querySelectorAll('.work-card');
+          workCards.forEach(card => {
+            const proj = card.getAttribute('data-project');
+            if (data.projectIds.includes(proj)) {
+              card.classList.add('flash-highlight');
+            } else {
+              card.classList.remove('flash-highlight');
+            }
+          });
+        }
+      }
+    });
+  });
+
+  window.addEventListener('resize', () => {
+    const activeTab = document.querySelector('.deck-tab.active');
+    if (activeTab) {
+      updateSlider(activeTab);
+    }
+  });
+
+  const initialActive = document.querySelector('.deck-tab.active');
+  if (initialActive) {
+    setTimeout(() => {
+      updateSlider(initialActive);
+      const activeKey = initialActive.getAttribute('data-tab');
+      switchTab(activeKey, initialActive);
+    }, 150);
+  }
 
   document.addEventListener('click', () => {
-    if (clickedCard) {
-      clickedCard = null;
-      reset();
+    const activeTab = document.querySelector('.deck-tab.active');
+    if (activeTab) {
+      const activeKey = activeTab.getAttribute('data-tab');
+      const data = deckData[activeKey];
+      const workCards = document.querySelectorAll('.work-card');
+      workCards.forEach(card => {
+        const proj = card.getAttribute('data-project');
+        if (data && data.projectIds.includes(proj)) {
+          card.classList.add('flash-highlight');
+        } else {
+          card.classList.remove('flash-highlight');
+        }
+      });
     }
   });
 }
@@ -258,7 +258,7 @@
 initThemeToggler();
 initTypewriter();
 initScrollReveal();
-initInteractiveBio();
+initFocusDeck();
 
 // Re-observe scroll reveals on route changes
 document.addEventListener('viewMounted', () => {
[diff_block_end]

Please note that the above snippet only shows the MODIFIED lines from the last change. It shows up to 3 lines of unchanged lines before and after the modified lines. The actual file contents may have many more lines not shown.