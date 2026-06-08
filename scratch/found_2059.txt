Created At: 2026-06-06T17:10:02Z
Completed At: 2026-06-06T17:10:02Z
File Path: `file:///c:/Users/ASUS/Desktop/new%20portfolio/views.js`
Total Lines: 1148
Total Bytes: 72851
Showing lines 650 to 800
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
650:         b.classList.remove('active');
651:         b.setAttribute('aria-selected', 'false');
652:       });
653:       btn.classList.add('active');
654:       btn.setAttribute('aria-selected', 'true');
655:       
656:       const filterValue = btn.getAttribute('data-filter');
657:       
658:       // Filter list rows
659:       projectRows.forEach(row => {
660:         if (filterValue === 'all') {
661:           row.style.display = 'flex';
662:         } else {
663:           const category = row.getAttribute('data-category');
664:           row.style.display = category === filterValue ? 'flex' : 'none';
665:         }
666:       });
667:     });
668:   });
669: }
670: 
671: /**
672:  * Project 1 (Yooki) Syllabus map and AI sandbox controls
673:  */
674: function initProject1Sandbox() {
675:   // 1. Syllabus Node toggling & Connection line glowing
676:   const nodes = document.querySelectorAll('.syllabus-node');
677:   const statusMsg = document.getElementById('syllabus-status');
678:   const linePolityEconomy = document.getElementById('line-polity-economy');
679:   const lineEconomyEnv = document.getElementById('line-economy-env');
680:   
681:   nodes.forEach(node => {
682:     node.addEventListener('click', () => {
683:       const topic = node.getAttribute('data-node');
684:       
685:       // Reset active states
686:       nodes.forEach(n => n.classList.remove('active'));
687:       node.classList.add('active');
688:       
689:       // Reset connection lines stroke and glow
690:       if (linePolityEconomy) {
691:         linePolityEconomy.style.stroke = 'var(--bord
<truncated 3490 bytes>
t 61% coverage. Since Panchayati Raj connects directly to <strong>Fiscal Federalism</strong> in Economy (where you have a 12% coverage gap), I recommend starting with Fiscal Federalism to bridge cross-subject concepts."'
758:     },
759:     exam: {
760:       question: '"Which area should I revise before my mock exam next week?"',
761:       answer: '"Environment is currently your most neglected area (last updated 18 days ago, 34% coverage). Given the recent mock exam weights, prioritize <strong>Biodiversity &amp; Conservation</strong> first to maximize score potential."'
762:     }
763:   };
764:   
765:   let isTyping = false;
766:   promptChips.forEach(chip => {
767:     chip.addEventListener('click', () => {
768:       if (isTyping) return;
769:       const type = chip.getAttribute('data-prompt');
770:       const response = responses[type];
771:       
772:       if (response) {
773:         userBubble.textContent = response.question;
774:         responseBubble.innerHTML = '<span class="typing-loader"></span>';
775:         isTyping = true;
776:         
777:         // Simulate thinking latency
778:         setTimeout(() => {
779:           responseBubble.innerHTML = '';
780:           const words = response.answer.split(' ');
781:           let index = 0;
782:           
783:           function printNextWord() {
784:             if (index < words.length) {
785:               responseBubble.innerHTML = words.slice(0, index + 1).join(' ');
786:               index++;
787:               setTimeout(printNextWord, 45); // 45ms per word
788:             } else {
789:               responseBubble.innerHTML = response.answer; // restore full HTML
790:               isTyping = false;
791:             }
792:           }
793:           printNextWord();
794:         }, 850);
795:       }
796:     });
797:   });
798: }
799: 
800: /**
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
