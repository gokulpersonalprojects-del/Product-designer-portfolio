import re

with open(r'c:\Users\ASUS\Desktop\new portfolio\views.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace hardcoded colors (hex / rgb / rgba) with their CSS variable counterparts
print("Replacing hardcoded colors...")
content = content.replace('#ff7626', 'var(--color-accent)')
content = content.replace('#b2156a', 'var(--color-bop)')
content = content.replace('#34c759', 'var(--color-success)')
content = content.replace('rgba(52, 199, 89, 0.1)', 'var(--color-success-light)')

# 2. Update resume button inside sidebarActionGrid
print("Updating sidebarActionGrid Resume card...")
target_resume = """        <a href="resume.pdf" class="sidebar-action-card primary-action" target="_blank" rel="noopener" aria-label="Download Resume" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.85rem 0.25rem; border: 1px solid var(--color-accent); border-radius: 12px; background-color: var(--bg-card); text-decoration: none; transition: all 0.2s ease;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
          <span class="font-mono" style="font-size: 0.625rem; font-weight: 600; letter-spacing: 0.08em; color: var(--color-accent);">RESUME</span>
        </a>"""

# Since #ff7626 was already replaced by var(--color-accent), we just check it is done. The generic replacement did most of this. Let's make sure the border is also var(--color-accent)
# In views.js: border: 1px solid var(--color-accent) (since #ff7626 was replaced by var(--color-accent) in step 1, it's already updated!)

# 3. Update initWorkFilters to use class '.filtered-out'
print("Updating initWorkFilters...")
old_filter_loop = """      // Filter list rows
      projectRows.forEach(row => {
        if (filterValue === 'all') {
          row.style.display = 'flex';
        } else {
          const category = row.getAttribute('data-category');
          row.style.display = category === filterValue ? 'flex' : 'none';
        }
      });"""

new_filter_loop = """      // Filter list rows
      projectRows.forEach(row => {
        if (filterValue === 'all') {
          row.classList.remove('filtered-out');
        } else {
          const category = row.getAttribute('data-category');
          if (category === filterValue) {
            row.classList.remove('filtered-out');
          } else {
            row.classList.add('filtered-out');
          }
        }
      });"""

if old_filter_loop in content:
    content = content.replace(old_filter_loop, new_filter_loop)
    print("  -> initWorkFilters updated successfully.")
else:
    print("  -> WARNING: initWorkFilters pattern NOT found!")

# 4. Refactor project sidebar buttons and add sidebar swap transitions
print("Updating project sidebars...")
# Add sidebar-fade-in class
content = content.replace('<div class="project-sidebar-top" style="', '<div class="project-sidebar-top sidebar-fade-in" style="')
content = content.replace('<div class="project-sidebar-bottom" style="', '<div class="project-sidebar-bottom sidebar-fade-in" style="')

# Refactor the inline-styled buttons
btn1_old = '<a href="https://gokulux.framer.website/project-1" target="_blank" rel="noopener" class="project-sidebar-btn" style="padding: 0.65rem 1rem; border-radius: 8px; font-family: var(--font-sans); font-weight: 600; font-size: 0.875rem; text-align: center; text-transform: lowercase; color: #ffffff; background-color: var(--color-accent); border: none; width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem; cursor: pointer; text-decoration: none; transition: all 0.2s ease;">'
btn1_new = '<a href="https://gokulux.framer.website/project-1" target="_blank" rel="noopener" class="project-sidebar-btn project-1-btn">'
content = content.replace(btn1_old, btn1_new)

btn2_old = '<a href="https://gokulux.framer.website/project-2" target="_blank" rel="noopener" class="project-sidebar-btn" style="padding: 0.65rem 1rem; border-radius: 8px; font-family: var(--font-sans); font-weight: 600; font-size: 0.875rem; text-align: center; text-transform: lowercase; color: #ffffff; background-color: var(--color-brand); border: none; width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem; cursor: pointer; text-decoration: none; transition: all 0.2s ease;">'
btn2_new = '<a href="https://gokulux.framer.website/project-2" target="_blank" rel="noopener" class="project-sidebar-btn project-2-btn">'
content = content.replace(btn2_old, btn2_new)

btn3_old = '<a href="https://bankofpalestine.com" target="_blank" rel="noopener" class="project-sidebar-btn" style="padding: 0.65rem 1rem; border-radius: 8px; font-family: var(--font-sans); font-weight: 600; font-size: 0.875rem; text-align: center; text-transform: lowercase; color: #ffffff; background-color: var(--color-bop); border: none; width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem; cursor: pointer; text-decoration: none; transition: all 0.2s ease;">'
btn3_new = '<a href="https://bankofpalestine.com" target="_blank" rel="noopener" class="project-sidebar-btn project-3-btn">'
content = content.replace(btn3_old, btn3_new)

btn4_old = '<a href="https://gokulux.framer.website/project-2" target="_blank" rel="noopener" class="project-sidebar-btn" style="padding: 0.65rem 1rem; border-radius: 8px; font-family: var(--font-sans); font-weight: 600; font-size: 0.875rem; text-align: center; text-transform: lowercase; color: #ffffff; background-color: var(--color-brand); border: none; width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem; cursor: pointer; text-decoration: none; transition: all 0.2s ease;">'
btn4_new = '<a href="https://gokulux.framer.website/project-2" target="_blank" rel="noopener" class="project-sidebar-btn project-4-btn">'
content = content.replace(btn4_old, btn4_new)

# 5. Add staggered animation classes to page headers, paragraphs, lists, rows, and cards
print("Adding page stagger animation classes...")

# Home page stagger
content = content.replace(
    '<div class="right-pane-header fade-in-section" style="margin-bottom: 2.25rem;">',
    '<div class="right-pane-header stagger-el stagger-delay-1" style="margin-bottom: 2.25rem;">'
)
content = content.replace(
    '<div class="case-studies-grid fade-in-section">',
    '<div class="case-studies-grid">'
)
content = content.replace(
    '<!-- Card 1: Yooki Case Study (spans 2 col) -->\n      <article class="work-card col-span-2"',
    '<!-- Card 1: Yooki Case Study (spans 2 col) -->\n      <article class="work-card col-span-2 stagger-el stagger-delay-2"'
)
content = content.replace(
    '<!-- Card 2: Bank of Palestine Case Study (spans 1 col) -->\n      <article class="work-card col-span-1"',
    '<!-- Card 2: Bank of Palestine Case Study (spans 1 col) -->\n      <article class="work-card col-span-1 stagger-el stagger-delay-3"'
)
content = content.replace(
    '<!-- Card 3: Cendrol Ops Case Study (spans 2 col) -->\n      <article class="work-card col-span-2"',
    '<!-- Card 3: Cendrol Ops Case Study (spans 2 col) -->\n      <article class="work-card col-span-2 stagger-el stagger-delay-4"'
)
content = content.replace(
    '<!-- Card 4: Aura AI Case Study (spans 1 col) -->\n      <article class="work-card col-span-1"',
    '<!-- Card 4: Aura AI Case Study (spans 1 col) -->\n      <article class="work-card col-span-1 stagger-el stagger-delay-5"'
)

# Work page stagger
content = content.replace(
    '<div class="collection-header">',
    '<div class="collection-header stagger-el stagger-delay-1">'
)
content = content.replace(
    '<div class="filter-bar" role="tablist" aria-label="Filter case studies">',
    '<div class="filter-bar stagger-el stagger-delay-2" role="tablist" aria-label="Filter case studies">'
)
content = content.replace(
    '<!-- Project 1 Row -->\n      <a href="#/project-1" class="project-row"',
    '<!-- Project 1 Row -->\n      <a href="#/project-1" class="project-row stagger-el stagger-delay-3"'
)
content = content.replace(
    '<!-- Project 3 Row -->\n      <a href="#/project-3" class="project-row"',
    '<!-- Project 3 Row -->\n      <a href="#/project-3" class="project-row stagger-el stagger-delay-4"'
)
content = content.replace(
    '<!-- Project 2 Row -->\n      <a href="#/project-2" class="project-row"',
    '<!-- Project 2 Row -->\n      <a href="#/project-2" class="project-row stagger-el stagger-delay-5"'
)
content = content.replace(
    '<!-- Project 4 Row -->\n      <a href="#/project-4" class="project-row"',
    '<!-- Project 4 Row -->\n      <a href="#/project-4" class="project-row stagger-el stagger-delay-6"'
)

# About page stagger
content = content.replace(
    '<h1 class="about-title font-serif">Hi, I',
    '<h1 class="about-title font-serif stagger-el stagger-delay-1">Hi, I'
)
content = content.replace(
    '<!-- Hero Workspace Image -->\n    <div class="about-hero-image fade-in-section">',
    '<!-- Hero Workspace Image -->\n    <div class="about-hero-image stagger-el stagger-delay-2">'
)
content = content.replace(
    '<div class="about-bio-detail">',
    '<div class="about-bio-detail stagger-el stagger-delay-3">'
)
content = content.replace(
    '<aside class="about-sidebar">',
    '<aside class="about-sidebar stagger-el stagger-delay-4">'
)

# Project pages stagger (adds to all 4 project detail templates)
# We find and replace project detail tags
content = content.replace(
    '<header class="project-header">',
    '<header class="project-header stagger-el stagger-delay-1">'
)
content = content.replace(
    '<div class="project-intro-grid">',
    '<div class="project-intro-grid stagger-el stagger-delay-2">'
)
content = content.replace(
    '<div class="project-body">',
    '<div class="project-body stagger-el stagger-delay-3">'
)

# 6. Refactor KYC simulator updateView with animations
print("Animating KYC simulator updateView...")
old_update_view = """  function updateView() {
    container.innerHTML = screens[currentStep]();
    statusMsg.textContent = stepMsgs[currentStep];
    statusMsg.style.color = statusColors[currentStep];
    
    // Attach listener for the submit/next button
    const btn = document.getElementById('kyc-next-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        if (currentStep < 5) {
          currentStep++;
        } else {
          currentStep = 1;
        }
        updateView();
      });
    }"""

new_update_view = """  function updateView() {
    container.style.opacity = '0';
    container.style.transform = 'translateY(8px)';
    container.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
    
    setTimeout(() => {
      container.innerHTML = screens[currentStep]();
      statusMsg.textContent = stepMsgs[currentStep];
      statusMsg.style.color = statusColors[currentStep];
      
      // Force element reflow
      container.offsetHeight;
      
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
      
      // Attach listener for the submit/next button
      const btn = document.getElementById('kyc-next-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          if (currentStep < 5) {
            currentStep++;
          } else {
            currentStep = 1;
          }
          updateView();
        });
      }"""

if old_update_view in content:
    content = content.replace(old_update_view, new_update_view)
    print("  -> updateView updated successfully.")
else:
    # Try with single quotes or variations if present
    print("  -> WARNING: updateView pattern NOT found!")

# Save the modifications
with open(r'c:\Users\ASUS\Desktop\new portfolio\views.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("views.js updated successfully!")
