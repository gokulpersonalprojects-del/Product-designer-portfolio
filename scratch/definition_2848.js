Created At: 2026-06-07T05:45:12Z
Completed At: 2026-06-07T05:45:12Z
The following changes were made by the multi_replace_file_content tool to: c:\Users\ASUS\Desktop\new portfolio\views.js. If relevant, proactively run terminal commands to execute this code for the USER. Don't ask for permission.
[diff_block_start]
@@ -863,12 +863,16 @@
     initWorkFilters();
   } else if (path === '/project-1') {
     initProject1Sandbox();
+    initSolutionTabs();
   } else if (path === '/project-2') {
     initProject2Sandbox();
+    initSolutionTabs();
   } else if (path === '/project-3') {
     initProject3Sandbox();
+    initSolutionTabs();
   } else if (path === '/project-4') {
     initProject4Sandbox();
+    initSolutionTabs();
   } else if (path === '/ai-workshop') {
     initAIWorkshopSandbox();
   }
@@ -910,6 +910,51 @@
 }
 
 /**
+ * Interactive Solution Path Tab Switcher for Project Case Studies
+ */
+function initSolutionTabs() {
+  const container = document.querySelector('.project-body');
+  if (!container) return;
+
+  const tabBtns = container.querySelectorAll('.solution-tab-btn');
+  const chapterContents = container.querySelectorAll('.solution-chapter-content');
+
+  tabBtns.forEach(btn => {
+    btn.addEventListener('click', () => {
+      const targetChapter = btn.getAttribute('data-chapter');
+      if (!targetChapter) return;
+
+      // Update active state on buttons
+      tabBtns.forEach(b => {
+        if (b.getAttribute('data-chapter') === targetChapter) {
+          b.classList.add('active');
+        } else {
+          b.classList.remove('active');
+        }
+      });
+
+      // Update active state on chapter contents
+      chapterContents.forEach(content => {
+        if (content.getAttribute('data-chapter-content') === targetChapter) {
+          content.classList.add('active');
+        } else {
+          content.classList.remove('active');
+        }
+      });
+
+      // Smooth scroll back to tabs header if scrolled past
+      const pathContainer = container.querySelector('.solution-path-container');
+      if (pathContainer) {
+        const rect = pathContainer.getBoundingClientRect();
+        if (rect.top < 0) {
+          pathContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
+        }
+      }
+    });
+  });
+}
+
+/**
  * Project 1 (Yooki) Syllabus map and AI sandbox controls
  */
 function initProject1Sandbox() {
[diff_block_end]

Please note that the above snippet only shows the MODIFIED lines from the last change. It shows up to 3 lines of unchanged lines before and after the modified lines. The actual file contents may have many more lines not shown.