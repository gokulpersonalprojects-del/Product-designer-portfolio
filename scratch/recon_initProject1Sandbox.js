function initProject1Sandbox() {  // Source: definition_2800.js, definition_2816.js, definition_2828.js, definition_2846.js, definition_3137.js, found_2800.txt, found_2816.txt, found_2828.txt, found_2846.txt, found_3137.txt
  // 1. Syllabus Node toggling & Connection line glowing  // Source: definition_2800.js, definition_2816.js, definition_2828.js, definition_2846.js, definition_3137.js, found_2800.txt, found_2816.txt, found_2828.txt, found_2846.txt, found_3137.txt
  const nodes = document.querySelectorAll('.syllabus-node');  // Source: definition_2800.js, definition_2816.js, definition_2828.js, definition_2846.js, definition_3137.js, found_2800.txt, found_2816.txt, found_2828.txt, found_2846.txt, found_3137.txt
  const statusMsg = document.getElementById('syllabus-status');  // Source: definition_2800.js, definition_2816.js, definition_2828.js, definition_2846.js, definition_3137.js, found_2800.txt, found_2816.txt, found_2828.txt, found_2846.txt, found_3137.txt
  const linePolityEconomy = document.getElementById('line-polity-economy');  // Source: definition_2816.js, definition_2828.js, definition_2846.js, definition_3137.js, found_2816.txt, found_2828.txt, found_2846.txt, found_3137.txt
  const lineEconomyEnv = document.getElementById('line-economy-env');  // Source: definition_2828.js, definition_2846.js, found_2828.txt, found_2846.txt
    // Source: definition_2828.js, definition_2846.js, found_2828.txt, found_2846.txt
  nodes.forEach(node => {  // Source: definition_2828.js, definition_2846.js, found_2828.txt, found_2846.txt
    node.addEventListener('click', () => {  // Source: definition_2828.js, definition_2846.js, found_2828.txt, found_2846.txt
      const topic = node.getAttribute('data-node');  // Source: definition_2828.js, definition_2846.js, found_2828.txt, found_2846.txt
        // Source: definition_2828.js, found_2828.txt
      // Reset active states  // Source: definition_2828.js, found_2828.txt
      nodes.forEach(n => n.classList.remove('active'));  // Source: definition_2828.js, found_2828.txt
      node.classList.add('active');  // Source: definition_2828.js, found_2828.txt
        // Source: definition_2828.js, found_2828.txt
      // Reset connection lines stroke and glow  // Source: definition_2828.js, found_2828.txt
      if (linePolityEconomy) {  // Source: definition_2828.js, found_2828.txt
        linePolityEconomy.style.stroke = 'var(--border-color)';  // Source: definition_2828.js, found_2828.txt
        linePolityEconomy.style.strokeWidth = '2px';  // Source: definition_2828.js, found_2828.txt
        linePolityEconomy.style.strokeDasharray = '4 4';  // Source: definition_2828.js, found_2828.txt
        linePolityEconomy.style.filter = 'none';  // Source: definition_2828.js, found_2828.txt
      }  // Source: definition_2828.js, found_2828.txt
      if (lineEconomyEnv) {  // Source: definition_2828.js, found_2828.txt
        lineEconomyEnv.style.stroke = 'var(--border-color)';  // Source: definition_2828.js, found_2828.txt
        lineEconomyEnv.style.strokeWidth = '2px';  // Source: definition_2828.js, found_2828.txt
        lineEconomyEnv.style.strokeDasharray = '4 4';  // Source: definition_2828.js, found_2828.txt
        lineEconomyEnv.style.filter = 'none';  // Source: definition_2828.js, found_2828.txt
      }  // Source: definition_2828.js, found_2828.txt
        // Source: definition_2828.js, found_2828.txt
        setTimeout(() => {  // Source: definition_2589.js, definition_2828.js, found_2589.txt, found_2828.txt
          responseBubble.innerHTML = '';  // Source: definition_2589.js, definition_2828.js, found_2589.txt, found_2828.txt
          const words = response.answer.split(' ');  // Source: definition_2589.js, definition_2828.js, found_2589.txt, found_2828.txt
          let index = 0;  // Source: definition_2589.js, found_2589.txt
            // Source: definition_2589.js, found_2589.txt
          function printNextWord() {  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
            if (index < words.length) {  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
              responseBubble.innerHTML = words.slice(0, index + 1).join(' ');  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
              index++;  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
              setTimeout(printNextWord, 45); // 45ms per word  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
            } else {  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
              responseBubble.innerHTML = response.answer; // restore full HTML  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
              isTyping = false;  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
            }  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
          }  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
          printNextWord();  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
        }, 850);  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
      }  // Source: definition_2589.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3320.txt, found_3739.txt
    });  // Source: definition_2589.js, definition_3318.js, definition_3320.js, definition_3739.js, found_2589.txt, found_3318.txt, found_3320.txt, found_3739.txt
  }