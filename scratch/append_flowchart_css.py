# Append flowchart CSS styles to views.js/index.css
import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    
    flowchart_css = """

/* ==========================================================================
   BANK OF PALESTINE KYC FLOWCHART SIMULATOR
   ========================================================================== */

.bop-flowchart-section {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.bop-flowchart-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.bop-flowchart-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.bop-flowchart-btns {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.bop-flowchart-btn {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.bop-flowchart-btn:hover {
  background: var(--bg-tertiary);
  border-color: var(--border-hover);
  color: var(--text-primary);
}

.bop-flowchart-btn.active {
  background: var(--color-bop);
  color: #ffffff;
  border-color: var(--color-bop);
}

.bop-flowchart-scroll-wrapper {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  background: var(--bg-secondary);
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.bop-flowchart-scroll-wrapper::-webkit-scrollbar {
  height: 6px;
}

.bop-flowchart-scroll-wrapper::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

.bop-flowchart-scroll-wrapper::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.bop-flowchart-scroll-wrapper::-webkit-scrollbar-thumb:hover {
  background: var(--border-hover);
}

.bop-flowchart-inner {
  width: 1020px;
  height: 320px;
  position: relative;
  overflow: hidden;
}

.bop-flow-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.bop-flow-path {
  fill: none;
  stroke: var(--border-color);
  stroke-width: 2px;
  transition: stroke 0.4s ease, stroke-dasharray 0.4s ease;
}

.bop-flow-path.active-happy {
  stroke: var(--color-success);
}

.bop-flow-path.active-exception {
  stroke: var(--color-accent);
}

.bop-flow-path-dashed {
  fill: none;
  stroke: var(--border-color);
  stroke-width: 2px;
  stroke-dasharray: 6 4;
}

.bop-flow-path-dashed.active-happy {
  stroke: var(--color-success);
}

.bop-flow-path-dashed.active-exception {
  stroke: var(--color-accent);
}

.bop-flow-dot {
  animation: bopFlowTravel 3.5s linear infinite;
}

.bop-flow-dot.paused {
  animation-play-state: paused;
}

@keyframes bopFlowTravel {
  0% {
    motion-offset: 0%;
    offset-distance: 0%;
  }
  100% {
    motion-offset: 100%;
    offset-distance: 100%;
  }
}

.bop-nodes-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.bop-node {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 115px;
  padding: 0.5rem 0.6rem;
  border-radius: 8px;
  border: 1.5px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-family: var(--font-sans);
  text-align: center;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s ease;
  user-select: none;
  box-shadow: var(--shadow-sm);
}

.bop-node:hover {
  transform: translate(-50%, -54%);
  border-color: var(--color-bop);
  color: var(--text-primary);
  box-shadow: var(--shadow-md);
}

.bop-node.active-happy {
  border-color: var(--color-success);
  background: var(--color-success-light);
  color: var(--text-primary);
}

.bop-node.active-exception {
  border-color: var(--color-accent);
  background: var(--color-accent-light);
  color: var(--text-primary);
}

.bop-node.diamond {
  width: 72px;
  height: 72px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%) rotate(45deg);
}

.bop-node.diamond:hover {
  transform: translate(-50%, -54%) rotate(45deg);
}

.bop-node.diamond .diamond-text {
  transform: rotate(-45deg);
  font-size: 0.58rem;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
}

.bop-node .node-num {
  font-family: var(--font-mono);
  font-size: 0.55rem;
  color: var(--text-muted);
  display: block;
  margin-bottom: 0.15rem;
}

.bop-node.active-happy .node-num {
  color: var(--color-success);
}

.bop-node.active-exception .node-num {
  color: var(--color-accent);
}

.bop-node .node-title {
  font-size: 0.65rem;
  font-weight: 600;
  line-height: 1.25;
}

/* Detail Card Overlay */
.bop-flowchart-detail-card {
  margin-top: 1.25rem;
  padding: 1.25rem;
  border-radius: var(--border-radius-md);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  min-height: 100px;
}

.bop-flowchart-detail-card h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.bop-flowchart-detail-card .detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .bop-flowchart-detail-card .detail-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.bop-flowchart-detail-card .detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.bop-flowchart-detail-card .detail-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  color: var(--text-muted);
  font-weight: 600;
  letter-spacing: 0.05em;
}

.bop-flowchart-detail-card .detail-val {
  font-size: 0.82rem;
  line-height: 1.4;
  color: var(--text-secondary);
}

"""
    
    with open('index.css', 'a', encoding='utf-8') as f:
        f.write(flowchart_css)
        
    print("Flowchart CSS successfully appended to index.css")

if __name__ == '__main__':
    main()
