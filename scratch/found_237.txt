Created At: 2026-06-05T18:24:17Z
Completed At: 2026-06-05T18:24:17Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 321
Total Bytes: 10215
Showing lines 295 to 321
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
295:       }
296:     });
297:   });
298: 
299:   document.addEventListener('click', () => {
300:     if (clickedSpan) {
301:       clickedSpan = null;
302:       reset();
303:     }
304:   });
305: }
306: 
307: // ==========================================================================
308: // MODULE LIFECYCLE INITIALIZATION
309: // ==========================================================================
310: initTheme();
311: initThemeToggler();
312: initTypewriter();
313: initScrollReveal();
314: startLiveClock();
315: initInteractiveBio();
316: 
317: // Re-observe scroll reveals on route changes
318: document.addEventListener('viewMounted', () => {
319:   initScrollReveal();
320: });
321: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
