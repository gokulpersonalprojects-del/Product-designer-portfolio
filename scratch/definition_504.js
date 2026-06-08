Created At: 2026-06-06T07:04:31Z
Completed At: 2026-06-06T07:04:31Z
The following changes were made by the replace_file_content tool to: c:\Users\ASUS\Desktop\new portfolio\animation.js. If relevant, proactively run terminal commands to execute this code for the USER. Don't ask for permission.
[diff_block_start]
@@ -356,63 +356,6 @@
 }
 
 // ==========================================================================
-// CLIENT-SIDE LOGO IMAGE BACKGROUND REMOVER
-// ==========================================================================
-function initLogoBackgroundRemoval() {
-  const rockImg = document.querySelector('.logo-rock');
-  const tyreImg = document.querySelector('.logo-tyre');
-
-  function removeBg(imgEl) {
-    if (!imgEl) return;
-
-    const process = () => {
-      if (imgEl.src.startsWith('data:')) return; // Avoid infinite recursion loop
-
-      try {
-        const canvas = document.createElement('canvas');
-        const ctx = canvas.getContext('2d');
-        canvas.width = imgEl.naturalWidth || imgEl.width;
-        canvas.height = imgEl.naturalHeight || imgEl.height;
-
-        if (canvas.width === 0 || canvas.height === 0) return;
-
-        ctx.drawImage(imgEl, 0, 0);
-        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
-        const data = imgData.data;
-
-        for (let i = 0; i < data.length; i += 4) {
-          const r = data[i];
-          const g = data[i + 1];
-          const b = data[i + 2];
-
-          const max = Math.max(r, g, b);
-          const min = Math.min(r, g, b);
-
-          // Key out background pixels (light grey/off-white)
-          if (min > 190 && (max - min) < 25) {
-            data[i + 3] = 0;
-          }
-        }
-
-        ctx.putImageData(imgData, 0, 0);
-        imgEl.src = canvas.toDataURL('image/png');
-      } catch (err) {
-        console.warn("Could not remove background dynamically: ", err);
-      }
-    };
-
-    if (imgEl.complete) {
-      process();
-    } else {
-      imgEl.addEventListener('load', process);
-    }
-  }
-
-  removeBg(rockImg);
-  // removeBg(tyreImg); // Disabled client-side removal for the tyre since sports_tyre.png is now a high-fidelity transparent PNG, preserving silver/grey metal rim highlights.
-}
-
-// ==========================================================================
 // MODULE LIFECYCLE INITIALIZATION
 // ==========================================================================
 initTheme();
@@ -419,7 +419,6 @@
 initTypewriter();
 initScrollReveal();
 initFocusDeck();
-initLogoBackgroundRemoval();
 
 // Re-observe scroll reveals on route changes
 document.addEventListener('viewMounted', () => {
[diff_block_end]

Please note that the above snippet only shows the MODIFIED lines from the last change. It shows up to 3 lines of unchanged lines before and after the modified lines. The actual file contents may have many more lines not shown.