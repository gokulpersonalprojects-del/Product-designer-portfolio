import { 
  renderHome, 
  renderWork, 
  renderAbout, 
  renderAIWorkshop,
  renderBrandStack,
  renderProject1, 
  renderProject2, 
  renderProject3,
  renderProject4,
  renderProject5,
  renderProject6,
  renderProject7,
  renderProject8,
  renderProject9,
  renderProject1Sidebar,
  renderProject2Sidebar,
  renderProject3Sidebar,
  renderProject4Sidebar,
  renderProject5Sidebar,
  renderProject6Sidebar,
  renderProject7Sidebar,
  renderProject8Sidebar,
  renderProject9Sidebar
} from './views.js';

// Route configuration
const routes = {
  '/': { title: 'Gokul S Kaimal — Product Designer', render: renderHome, navId: 'nav-home' },
  '/work': { title: 'Work — Gokul S Kaimal', render: renderWork, navId: 'nav-work' },
  '/about': { title: 'About — Gokul S Kaimal', render: renderAbout, navId: 'nav-about' },
  '/ai-workshop': { title: 'AI Workshop — Gokul S Kaimal', render: renderAIWorkshop, navId: 'nav-workshop' },
  '/brand-stack': { title: 'Brand Stack — Gokul S Kaimal', render: renderBrandStack, navId: 'nav-brand-stack' },
  '/project-1': { 
    title: 'Yooki: UPSC Conversational AI — Gokul S Kaimal', 
    render: renderProject1, 
    renderSidebar: renderProject1Sidebar,
    navId: 'nav-work' 
  },
  '/project-2': { 
    title: 'Cendrol: Operational Expense UX — Gokul S Kaimal', 
    render: renderProject2, 
    renderSidebar: renderProject2Sidebar,
    navId: 'nav-work' 
  },
  '/project-3': { 
    title: 'Bank of Palestine: KYC Simplification — Gokul S Kaimal', 
    render: renderProject3, 
    renderSidebar: renderProject3Sidebar,
    navId: 'nav-work' 
  },
  // '/project-4': { 
  //   title: 'Aura AI: Prompt-to-Interface UX — Gokul S Kaimal', 
  //   render: renderProject4, 
  //   renderSidebar: renderProject4Sidebar,
  //   navId: 'nav-work' 
  // },
  '/project-5': { 
    title: 'Attendance Management UX Case Study — Gokul S Kaimal', 
    render: renderProject5, 
    navId: 'nav-work' 
  },
  '/project-6': { 
    title: 'Netflix E-Shopping UX Case Study — Gokul S Kaimal', 
    render: renderProject6, 
    navId: 'nav-work' 
  },
  '/project-7': { 
    title: 'TimeSync UX Case Study — Gokul S Kaimal', 
    render: renderProject7, 
    navId: 'nav-work' 
  },
  '/project-8': { 
    title: 'Fashion Factory UI Design Showcase — Gokul S Kaimal', 
    render: renderProject8, 
    navId: 'nav-work' 
  },
  '/project-9': { 
    title: 'Designergram | Design Connect Unified Case Study — Gokul S Kaimal', 
    render: renderProject9, 
    navId: 'nav-work' 
  }
};

const appView = document.getElementById('app-view');

/**
 * Clean up hash and get the matched route path
 */
function getActivePath() {
  const hash = window.location.hash || '#/';
  // Strip the hash symbol, keeping '/path'
  return hash.substring(1) || '/';
}

/**
 * Handle route rendering with transitions and page state management
 */
async function handleRouting() {
  const path = getActivePath();
  const route = routes[path] || routes['/']; // Fallback to home
  
  // 1. Trigger Page Exit Animation
  appView.classList.add('page-exit');
  
  // Wait for transition duration (300ms defined in CSS)
  await new Promise(resolve => setTimeout(resolve, 180));
  
  // 2. Load View content and update document state
  appView.innerHTML = route.render();
  document.title = route.title;
  
  // Update Sidebar content
  const sidebarDefault = document.getElementById('sidebar-default');
  const sidebarProject = document.getElementById('sidebar-project');
  
  if (route.renderSidebar) {
    if (sidebarDefault) sidebarDefault.style.display = 'none';
    if (sidebarProject) {
      sidebarProject.innerHTML = route.renderSidebar();
      sidebarProject.style.display = 'flex';
    }
  } else {
    if (sidebarProject) {
      sidebarProject.style.display = 'none';
      sidebarProject.innerHTML = '';
    }
    if (sidebarDefault) sidebarDefault.style.display = 'flex';
  }
  
  // Reset scroll position
  window.scrollTo(0, 0);
  
  // Update nav active states
  updateActiveNavigation(route.navId);
  
  // Trigger any inline listeners/mount logic if present
  triggerViewMount(path);

  // 3. Trigger Page Enter Animation
  appView.classList.remove('page-exit');
  appView.classList.add('page-enter');
  
  // Force a browser reflow/frame refresh before removing enter class
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      appView.classList.remove('page-enter');
    });
  });
}

/**
 * Highlight active menu items in header navigation
 */
function updateActiveNavigation(activeNavId) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.id === activeNavId) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Dispatches a custom event for script execution on dynamic pages
 */
function triggerViewMount(path) {
  const event = new CustomEvent('viewMounted', { detail: { path } });
  document.dispatchEvent(event);
}

// Router Event Listeners
window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', () => {
  // If there's no hash on load, default to home page
  if (!window.location.hash) {
    window.location.hash = '#/';
  } else {
    handleRouting();
  }
});

export { getActivePath };
