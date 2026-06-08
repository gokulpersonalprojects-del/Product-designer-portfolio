Created At: 2026-06-05T18:22:32Z
Completed At: 2026-06-05T18:22:33Z
The following changes were made by the replace_file_content tool to: c:\Users\ASUS\Desktop\new portfolio\animation.js. If relevant, proactively run terminal commands to execute this code for the USER. Don't ask for permission.
[diff_block_start]
@@ -174,7 +174,6 @@
 let clockInterval;
 
 function startLiveClock() {
-  // Clear any existing clock loop
   if (clockInterval) {
     clearInterval(clockInterval);
   }
@@ -194,7 +194,6 @@
       const formatter = new Intl.DateTimeFormat('en-US', options);
       clockEl.textContent = formatter.format(new Date());
     } catch (err) {
-      // Fallback for older environments
       clockEl.textContent = new Date().toLocaleTimeString();
     }
   }
@@ -203,6 +203,108 @@
 }
 
 // ==========================================================================
+// INTERACTIVE BIOGRAPHY GLOW & DETAILS
+// ==========================================================================
+function initInteractiveBio() {
+  const bioSpans = document.querySelectorAll('.bio-interactive');
+  const insightEl = document.getElementById('bio-insight');
+  const insightWrapper = document.getElementById('bio-insight-wrapper');
+  
+  if (!bioSpans.length || !insightEl) return;
+
+  const insights = {
+    ai: "Designing syllabus graphs for Yooki and modular interface editors for Aura AI.",
+    saas: "Structuring complex layout parameters and administrative quality-check dashboards.",
+    fintech: "Streamlining on-site corporate wallet disbursements and finance audits.",
+    const: "Improving verification workflows and reducing receipt interpretation lag for field engineers.",
+    mba: "Translating UX improvements directly into business yield (operational speed, lower errors).",
+    business: "Translating UX improvements directly into business yield (operational speed, lower errors)."
+  };
+
+  const projectMap = {
+    ai: ['yooki', 'aura'],
+    saas: ['aura'],
+    fintech: ['cendrol'],
+    const: ['cendrol'],
+    mba: 
<truncated 1309 bytes>
classList.remove('flash-highlight'));
+    }
+  }
+
+  bioSpans.forEach(span => {
+    const target = span.getAttribute('data-target');
+
+    span.addEventListener('mouseenter', () => {
+      highlight(target, span);
+    });
+
+    span.addEventListener('mouseleave', () => {
+      reset();
+    });
+
+    span.addEventListener('focus', () => {
+      highlight(target, span);
+    });
+
+    span.addEventListener('blur', () => {
+      reset();
+    });
+
+    span.addEventListener('click', (e) => {
+      e.stopPropagation();
+      if (clickedSpan === span) {
+        clickedSpan = null;
+        reset();
+      } else {
+        clickedSpan = span;
+        highlight(target, span);
+      }
+    });
+  });
+
+  document.addEventListener('click', () => {
+    if (clickedSpan) {
+      clickedSpan = null;
+      reset();
+    }
+  });
+}
+
+// ==========================================================================
 // MODULE LIFECYCLE INITIALIZATION
 // ==========================================================================
 initTheme();
@@ -209,24 +209,10 @@
 initTypewriter();
 initScrollReveal();
-
-// Start clock if on homepage initially
-if (getActivePath() === '/') {
-  startLiveClock();
-}
-
-// Re-observe scroll reveals and manage dynamic clock loop on route changes
-document.addEventListener('viewMounted', (event) => {
+startLiveClock();
+initInteractiveBio();
+
+// Re-observe scroll reveals on route changes
+document.addEventListener('viewMounted', () => {
   initScrollReveal();
-  
-  const path = event.detail.path;
-  if (path === '/') {
-    startLiveClock();
-  } else {
-    // Clear interval when navigating to case studies to save resources
-    if (clockInterval) {
-      clearInterval(clockInterval);
-      clockInterval = null;
-    }
-  }
 });
 
[diff_block_end]

Please note that the above snippet only shows the MODIFIED lines from the last change. It shows up to 3 lines of unchanged lines before and after the modified lines. The actual file contents may have many more lines not shown.