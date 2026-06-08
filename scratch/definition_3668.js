Created At: 2026-06-07T06:45:53Z
Completed At: 2026-06-07T06:45:58Z

				The command completed successfully.
				Output:
				function initProject1Sandbox() {
  // 1. UPSC Cognitive Pathing Flowchart logic
  const btnIAPlay = document.getElementById('ws-ia-btn-play');
  const btnIAReset = document.getElementById('ws-ia-btn-reset');
  const btnIATopic = document.getElementById('ws-ia-btn-topic');
  
  const iaProgressBar = document.getElementById('ia-progress-bar');
  const iaProgressText = document.getElementById('ia-progress-text');
  const iaSearchBox = document.getElementById('ia-search-box');
  const iaDetailsTitle = document.getElementById('ia-details-title');
  const iaDetailsDesc = document.getElementById('ia-details-desc');
  const iaNudgeList = document.getElementById('ia-nudge-list');
  const iaJourneySteps = document.getElementById('ia-journey-steps');
  
  const iaNodes = document.querySelectorAll('.ia-node');
  const iaDots = document.querySelectorAll('.ia-flow-dot');
  const iaPaths = document.querySelectorAll('.ia-flow-path, .ia-flow-path-dashed');

  const iaTopicData = {
    polity: {
      search: 'Panchayati Raj',
      detailsTitle: 'Relevant Details',
      detailsDesc: '73rd Amendment, 3-tier local self-governance model.',
      nudge: `
        <span style="font-size: 0.58rem; padding: 0.12rem 0.25rem; background: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); color: var(--color-brand); font-family: var(--font-mono); font-weight: 500;">Fiscal Federalism ↗</span>
        <span style="font-size: 0.58rem; padding: 0.12rem 0.25rem; background: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); color: var(--color-brand); font-family: var(--font-mono); font-weight: 500;">Rural Development ↗</span>
      `,
      journey: `
        <span style="font-size: 0.58rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">🟢 1. Constitutional Basis</span>
<truncated 2535 bytes>
tById('path-details-nudge');
      if (p1) p1.classList.add('active');
      if (p2) p2.classList.add('active');
    } else if (activeNodeId === 'node-journey') {
      const p1 = document.getElementById('path-search-details');
      const p2 = document.getElementById('path-details-nudge');
      const p3 = document.getElementById('path-nudge-journey');
      if (p1) p1.classList.add('active');
      if (p2) p2.classList.add('active');
      if (p3) p3.classList.add('active');
    } else if (activeNodeId === 'node-completion') {
      iaPaths.forEach(path => path.classList.add('active'));
    }
  }

  if (iaNodes.length > 0) {
    iaNodes.forEach(node => {
      node.addEventListener('click', () => {
        iaNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        highlightFlowPaths(node.id);
      });
    });
  }

  if (btnIAPlay) {
    btnIAPlay.addEventListener('click', () => {
      isLoopingPaused = !isLoopingPaused;
      
      const playIcon = document.getElementById('ws-ia-play-icon');
      const playText = document.getElementById('ws-ia-play-text');
      
      iaDots.forEach(dot => {
        if (isLoopingPaused) {
          dot.classList.add('paused');
        } else {
          dot.classList.remove('paused');
        }
      });
      
      iaPaths.forEach(path => {
        if (path.classList.contains('ia-flow-path-dashed')) {
          if (isLoopingPaused) {
            path.classList.remove('running');
          } else {
            path.classList.add('running');
          }
        }
      });

      if (isLoopingPaused) {
        if (playIcon) playIcon.textContent = '▶️';
        if (playText) playText.textContent = 'Resume Loop';
        btnIAPlay.classList.remove('active');
      } else {
        if (playIcon) playIcon.textContent = '⏸️';
        if (playText) playText.textContent = 'Pause Loop';
        btnIAPlay.classList.add('active');
      }
    });
  }

  if (btnIAReset) {


