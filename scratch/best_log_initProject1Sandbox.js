function initProject1Sandbox() {
  // 1. Syllabus Node toggling & Connection line glowing
  const nodes = document.querySelectorAll('.syllabus-node');
  const statusMsg = document.getElementById('syllabus-status');
  const linePolityEconomy = document.getElementById('line-polity-economy');
  const lineEconomyEnv = document.getElementById('line-economy-env');
  
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const topic = node.getAttribute('data-node');
      
      // Reset active states
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      
      // Reset connection lines stroke and glow
      if (linePolityEconomy) {
        linePolityEconomy.style.stroke = 'var(--border-color)';
        linePolityEconomy.style.strokeWidth = '2px';
        linePolityEconomy.style.strokeDasharray = '4 4';

