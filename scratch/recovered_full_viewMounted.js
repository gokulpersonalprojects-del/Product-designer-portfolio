document.addEventListener('viewMounted', () => {
+// Start clock if on homepage initially
+if (getActivePath() === '/') {
+  startLiveClock();
+}
+
+// Re-observe scroll reveals and manage dynamic clock loop on route changes
+document.addEventListener('viewMounted', (event) => {
   initScrollReveal();
+  
+  const path = event.detail.path;
+  if (path === '/') {
+    startLiveClock();
+  } else {
+    // Clear interval when navigating to case studies to save resources
+    if (clockInterval) {
+      clearInterval(clockInterval);
+      clockInterval = null;
+    }
+  }
 });
 
[diff_block_end]

Please note that the above snippet only shows the MODIFIED lines from the last change. It shows up to 3 lines of unchanged lines before and after the modified lines. The actual file contents may have many more lines not shown.