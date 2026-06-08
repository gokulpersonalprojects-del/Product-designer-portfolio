Created At: 2026-06-06T07:04:27Z
Completed At: 2026-06-06T07:04:27Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/animation.js`
Total Lines: 429
Total Bytes: 14186
Showing lines 350 to 429
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
350:         } else {
351:           card.classList.remove('flash-highlight');
352:         }
353:       });
354:     }
355:   });
356: }
357: 
358: // ==========================================================================
359: // CLIENT-SIDE LOGO IMAGE BACKGROUND REMOVER
360: // ==========================================================================
361: function initLogoBackgroundRemoval() {
362:   const rockImg = document.querySelector('.logo-rock');
363:   const tyreImg = document.querySelector('.logo-tyre');
364: 
365:   function removeBg(imgEl) {
366:     if (!imgEl) return;
367: 
368:     const process = () => {
369:       if (imgEl.src.startsWith('data:')) return; // Avoid infinite recursion loop
370: 
371:       try {
372:         const canvas = document.createElement('canvas');
373:         const ctx = canvas.getContext('2d');
374:         canvas.width = imgEl.naturalWidth || imgEl.width;
375:         canvas.height = imgEl.naturalHeight || imgEl.height;
376: 
377:         if (canvas.width === 0 || canvas.height === 0) return;
378: 
379:         ctx.drawImage(imgEl, 0, 0);
380:         const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
381:         const data = imgData.data;
382: 
383:         for (let i = 0; i < data.length; i += 4) {
384:           const r = data[i];
385:           const g = data[i + 1];
386:           const b = data[i + 2];
387: 
388:           const max = Math.max(r, g, b);
389:           const min = Math.min(r, g, b);
390: 
391:           // Key out background pixels (light grey/off-white)
392:           if (min > 190 && (max - min) < 25) {
393:             data[i + 3] = 0;
394:           }
395:         }
396: 
397:         ctx.putImageData(imgData, 0, 0);
398:         imgEl.src = canvas.toDataURL('image/png');
399:       } catch (err) {
400:         console.warn("Could not remove background dynamically: ", err);
401:       }
402:     };
403: 
404:     if (imgEl.complete) {
405:       process();
406:     } else {
407:       imgEl.addEventListener('load', process);
408:     }
409:   }
410: 
411:   removeBg(rockImg);
412:   // removeBg(tyreImg); // Disabled client-side removal for the tyre since sports_tyre.png is now a high-fidelity transparent PNG, preserving silver/grey metal rim highlights.
413: }
414: 
415: // ==========================================================================
416: // MODULE LIFECYCLE INITIALIZATION
417: // ==========================================================================
418: initTheme();
419: initThemeToggler();
420: initTypewriter();
421: initScrollReveal();
422: initFocusDeck();
423: initLogoBackgroundRemoval();
424: 
425: // Re-observe scroll reveals on route changes
426: document.addEventListener('viewMounted', () => {
427:   initScrollReveal();
428: });
429: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
