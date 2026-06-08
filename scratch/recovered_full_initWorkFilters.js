function initWorkFilters() {
  const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
  const projectRows = document.querySelectorAll('.project-list-wrapper .project-row');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Manage active classes
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      const filterValue = btn.getAttribute('data-filter');
      
      // Filter list rows
      projectRows.forEach(row => {
        if (filterValue === 'all') {
          row.style.display = 'flex';
        } else {
          const category = row.getAttribute('data-category');
          row.style.display = category === filterValue ? 'flex' : 'none';
        }
      });
    });
  });
}