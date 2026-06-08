function initProject2Sandbox() {

  const steps = document.querySelectorAll('#state-sandbox .state-step');

  const statusMsg = document.getElementById('state-status-msg');

  

  const stepMsgs = {

    '1': 'Stage 1 (Submitted): Your invoice images have been submitted and are queued for central accounting desk audits.',

    '2': 'Stage 2 (Audited): Receipt details have been parsed by OCR and validated by our finance automation team.',

    '3': 'Stage 3 (Approved): CFO has signed off on the expense audit. Disbursement is scheduled.',

    '4': 'Stage 4 (Reimbursed): Funds have been dispatched to your corporate wallet. Transaction complete!'



MODEL
RUN_COMMAND
DONE
2026-06-07T05:18:09Z
Created At: 2026-06-07T05:18:09Z
Completed At: 2026-06-07T05:18:12Z

				The command completed successfully.
				Output:
  const userBubble = document.getElementById('ai-user-bubble');

  const responseBubble = document.getElementById('ai-response-bubble');

  

  const responses = {

    polity: {

      question: '"I studied Panchayati Raj today. What should I review next?"',

      answer: '"Polity is strong at 61% coverage. Since Panchayati Raj connects directly to <strong>Fiscal Federalism</strong> in Economy (where you have a 12% coverage gap), I recommend starting with Fiscal Federalism to bridge cross-subject concepts."'

    },

    exam: {

      question: '"Which area should I revise before my mock exam next week?"',

      answer: '"Environment is currently your most neglected area (last updated 18 days ago, 34% coverage). Given the recent mock exam weights, prioritize <strong>Biodiversity &amp; Conservation</strong> first to maximize score potential."'

    }

  };

  

  let isTyping = false;

  promptChips.forEach(chip => {

    chip.addEventListener('click', () => {

      if (isTyping) return;

      const type = chip.getAttribute('data-prompt');

      const response = responses[type];

      

      if (response) {

        userBubble.textContent = response.question;

        responseBubble.innerHTML = '<span class="typing-loader"></span>';

        isTyping = true;

        

        // Simulate thinking latency

        setTimeout(() => {

          responseBubble.innerHTML = '';

          const words = response.answer.split(' ');

          let index = 0;

          

          function printNextWord() {

            if (index < words.length) {

              responseBubble.innerHTML = words.slice(0, index + 1).join(' ');

              index++;

              setTimeout(printNextWord, 45); // 45ms per word

            } else {

              responseBubble.innerHTML = response.answer; // restore full HTML

              isTyping = false;

            }

          }

          printNextWord();

        }, 850);

      }

    });

  });

}



/**

 * Project 2 (Cendrol) State flow timeline controls

 */

function initProject2Sandbox() {

  const steps = document.querySelectorAll('#state-sandbox .state-step');

  const statusMsg = document.getElementById('state-status-msg');

  

  const stepMsgs = {

    '1': 'Stage 1 (Submitted): Your invoice images have been submitted and are queued for central accounting desk audits.',

    '2': 'Stage 2 (Audited): Receipt details have been parsed by OCR and validated by our finance automation team.',

    '3': 'Stage 3 (Approved): CFO has signed off on the expense audit. Disbursement is scheduled.',

    '4': 'Stage 4 (Reimbursed): Funds have been dispatched to your corporate wallet. Transaction complete!'


