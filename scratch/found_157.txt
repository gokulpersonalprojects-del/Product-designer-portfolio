Created At: 2026-06-05T18:17:46Z
Completed At: 2026-06-05T18:17:47Z
The following changes were made by the replace_file_content tool to: c:\Users\ASUS\Desktop\new portfolio\animation.js. If relevant, proactively run terminal commands to execute this code for the USER. Don't ask for permission.
[diff_block_start]
@@ -169,6 +169,42 @@
 }
 
 // ==========================================================================
+// DYNAMIC LIVE CLOCK (IST Timezone)
+// ==========================================================================
+let clockInterval;
+
+function startLiveClock() {
+  // Clear any existing clock loop
+  if (clockInterval) {
+    clearInterval(clockInterval);
+  }
+
+  const clockEl = document.getElementById('live-clock');
+  if (!clockEl) return;
+
+  function updateClock() {
+    const options = {
+      timeZone: 'Asia/Kolkata',
+      hour: '2-digit',
+      minute: '2-digit',
+      second: '2-digit',
+      hour12: true
+    };
+    
+    try {
+      const formatter = new Intl.DateTimeFormat('en-US', options);
+      clockEl.textContent = formatter.format(new Date());
+    } catch (err) {
+      // Fallback for older environments
+      clockEl.textContent = new Date().toLocaleTimeString();
+    }
+  }
+
+  updateClock();
+  clockInterval = setInterval(updateClock, 1000);
+}
+
+// ==========================================================================
 // MODULE LIFECYCLE INITIALIZATION
 // ==========================================================================
 initTheme();
@@ -175,8 +175,24 @@
 initTypewriter();
 initScrollReveal();
 
-// Re-observe scroll reveals whenever the router mounts a new view template
-document.addEventListener('viewMounted', () => {
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