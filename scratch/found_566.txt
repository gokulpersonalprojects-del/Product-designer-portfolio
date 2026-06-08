Created At: 2026-06-06T07:10:06Z
Completed At: 2026-06-06T07:10:06Z
The following changes were made by the replace_file_content tool to: c:\Users\ASUS\Desktop\new portfolio\animation.js. If relevant, proactively run terminal commands to execute this code for the USER. Don't ask for permission.
[diff_block_start]
@@ -356,6 +356,73 @@
 }
 
 // ==========================================================================
+// BIOGRAPHY PHRASE & BENTO STATS COUPLING
+// ==========================================================================
+function initBioCredentialsInteraction() {
+  const phrases = document.querySelectorAll('.bio-phrase');
+  const cards = document.querySelectorAll('.stat-card');
+
+  if (!phrases.length || !cards.length) return;
+
+  function highlight(statKey) {
+    phrases.forEach(p => {
+      if (p.getAttribute('data-stat') === statKey) {
+        p.classList.add('highlight-active');
+      } else {
+        p.classList.remove('highlight-active');
+      }
+    });
+    cards.forEach(c => {
+      if (c.getAttribute('data-stat') === statKey) {
+        c.classList.add('highlight-active');
+      } else {
+        c.classList.remove('highlight-active');
+      }
+    });
+  }
+
+  function reset() {
+    phrases.forEach(p => p.classList.remove('highlight-active'));
+    cards.forEach(c => c.classList.remove('highlight-active'));
+  }
+
+  // Bind phrase hovers and focus
+  phrases.forEach(phrase => {
+    const statKey = phrase.getAttribute('data-stat');
+    
+    phrase.addEventListener('mouseenter', () => highlight(statKey));
+    phrase.addEventListener('mouseleave', reset);
+    phrase.addEventListener('focus', () => highlight(statKey));
+    phrase.addEventListener('blur', reset);
+  });
+
+  // Bind card hovers and focus
+  cards.forEach(card => {
+    const statKey = card.getAttribute('data-stat');
+    if (!statKey) return;
+
+    card.addEventListener('mouseenter', () => highlight(statKey));
+    card.addEventListener('mouseleave', reset);
+    card.addEventListener('focus', () => highlight(statKey));
+    card.addEventListener('blur', reset);
+  });
+
+  // Staggered highlight sequence on load (gives immediate user feedback)
+  setTimeout(() => {
+    highlight('experience');
+    setTimeout(() => {
+      highlight('mba');
+      setTimeout(() => {
+        highlight('hybrid');
+        setTimeout(() => {
+          reset();
+        }, 650);
+      }, 650);
+    }, 650);
+  }, 900);
+}
+
+// ==========================================================================
 // MODULE LIFECYCLE INITIALIZATION
 // ==========================================================================
 initTheme();
@@ -362,6 +362,7 @@
 initTypewriter();
 initScrollReveal();
 initFocusDeck();
+initBioCredentialsInteraction();
 
 // Re-observe scroll reveals on route changes
 document.addEventListener('viewMounted', () => {
@@ -368,2 +368,3 @@
 });
+
 
[diff_block_end]

Please note that the above snippet only shows the MODIFIED lines from the last change. It shows up to 3 lines of unchanged lines before and after the modified lines. The actual file contents may have many more lines not shown.