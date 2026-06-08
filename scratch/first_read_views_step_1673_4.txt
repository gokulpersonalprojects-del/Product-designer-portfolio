Created At: 2026-06-06T16:20:14Z
Completed At: 2026-06-06T16:20:14Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 741
Total Bytes: 36261
Showing lines 550 to 630
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
550:         }
551:       });
552:     });
553:   });
554: }
555: 
556: /**
557:  * Project 1 (Yooki) Syllabus map and AI sandbox controls
558:  */
559: function initProject1Sandbox() {
560:   // 1. Syllabus Node toggling
561:   const nodes = document.querySelectorAll('#syllabus-sandbox .syllabus-node');
562:   const statusMsg = document.getElementById('syllabus-status');
563:   
564:   nodes.forEach(node => {
565:     node.addEventListener('click', () => {
566:       const topic = node.getAttribute('data-node');
567:       
568:       // Reset statuses
569:       nodes.forEach(n => n.classList.remove('active'));
570:       node.classList.add('active');
571:       
572:       if (topic === 'economy') {
573:         node.classList.remove('neglected');
574:         node.querySelector('.node-chip').className = 'node-chip success font-mono';
575:         node.querySelector('.node-chip').textContent = 'COMPLETED';
576:         node.querySelector('.node-progress').textContent = '100% Coverage';
577:         statusMsg.style.color = '#34c759';
578:         statusMsg.textContent = '🎉 Excellent! You have revised Fiscal Federalism and closed your major syllabus gap.';
579:       } else if (topic === 'polity') {
580:         statusMsg.style.color = 'var(--color-accent)';
581:         statusMsg.textContent = '📚 Polity: Panchayati Raj is currently in a strong state (61% coverage).';
582:       } else {
583:         statusMsg.style.color = 'var(--color-brand)';
584:         statusMsg.textContent = '📖 Environment: Biodiversity is currently 34% complete. Suggested revision: Conservation tec
<truncated 203 bytes>
 = document.getElementById('ai-user-bubble');
592:   const responseBubble = document.getElementById('ai-response-bubble');
593:   
594:   const responses = {
595:     polity: {
596:       question: '“I studied Panchayati Raj today. What should I review next?”',
597:       answer: '“Polity is strong at 61% coverage. Since Panchayati Raj connects directly to <strong>Fiscal Federalism</strong> in Economy (where you have a 12% coverage gap), I recommend starting with Fiscal Federalism to bridge cross-subject concepts.”'
598:     },
599:     exam: {
600:       question: '“Which area should I revise before my mock exam next week?”',
601:       answer: '“Environment is currently your most neglected area (last updated 18 days ago, 34% coverage). Given the recent mock exam weights, prioritize <strong>Biodiversity &amp; Conservation</strong> first to maximize score potential.”'
602:     }
603:   };
604:   
605:   promptChips.forEach(chip => {
606:     chip.addEventListener('click', () => {
607:       const type = chip.getAttribute('data-prompt');
608:       const response = responses[type];
609:       
610:       if (response) {
611:         userBubble.textContent = response.question;
612:         responseBubble.innerHTML = response.answer;
613:         
614:         // Add minimal pulse animation trigger
615:         responseBubble.style.opacity = '0';
616:         setTimeout(() => {
617:           responseBubble.style.opacity = '1';
618:           responseBubble.style.transition = 'opacity 0.3s';
619:         }, 50);
620:       }
621:     });
622:   });
623: }
624: 
625: /**
626:  * Project 2 (Cendrol) State flow timeline controls
627:  */
628: function initProject2Sandbox() {
629:   const steps = document.querySelectorAll('#state-sandbox .state-step');
630:   const statusMsg = document.getElementById('state-status-msg');
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
