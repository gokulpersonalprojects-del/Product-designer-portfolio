import re
import os

def extract_template_literal(file_content, func_name):
    # Find the start of the function definition
    pattern = rf"export\s+function\s+{func_name}\s*\(\)\s*\{{"
    match = re.search(pattern, file_content)
    if not match:
        return None
    
    start_idx = match.end()
    # Find the return `
    return_match = re.search(r"return\s*`", file_content[start_idx:])
    if not_match := not return_match:
        return None
    
    literal_start = start_idx + return_match.end()
    
    # We need to find the closing ` of the template literal
    # Since there might be nested backticks or escape characters, we'll scan character by character
    idx = literal_start
    depth = 0
    while idx < len(file_content):
        char = file_content[idx]
        if char == '`':
            # Check if it is escaped
            if file_content[idx-1] == '\\':
                idx += 1
                continue
            if file_content[idx:idx+2] == "`;" or file_content[idx:idx+3] == "`\n;" or file_content[idx:idx+4] == "`\r\n;":
                return file_content[literal_start:idx]
        idx += 1
    return None

def extract_constant_string(file_content, var_name):
    pattern = rf"const\s+{var_name}\s*=\s*`"
    match = re.search(pattern, file_content)
    if not match:
        return None
    
    start_idx = match.end()
    idx = start_idx
    while idx < len(file_content):
        char = file_content[idx]
        if char == '`':
            if file_content[idx-1] == '\\':
                idx += 1
                continue
            return file_content[start_idx:idx]
        idx += 1
    return None

def build_pages():
    views_path = "views.js"
    index_path = "index.html"
    
    if not os.path.exists(views_path) or not os.path.exists(index_path):
        print("Required files do not exist.")
        return
        
    with open(views_path, "r", encoding="utf-8") as f:
        views_content = f.read()
        
    with open(index_path, "r", encoding="utf-8") as f:
        index_template = f.read()
        
    sidebar_action_grid = extract_constant_string(views_content, "sidebarActionGrid")
    if not sidebar_action_grid:
        print("Failed to extract sidebarActionGrid constant.")
        return
        
    projects = [
        {"func_name": "renderProject1", "sidebar_func": "renderProject1Sidebar", "filename": "yooki.html", "title": "Yooki: UPSC Conversational AI — Gokul S Kaimal", "has_sidebar": True},
        {"func_name": "renderProject2", "sidebar_func": "renderProject2Sidebar", "filename": "cendrol.html", "title": "Cendrol: Operational Expense UX — Gokul S Kaimal", "has_sidebar": True},
        {"func_name": "renderProject3", "sidebar_func": "renderProject3Sidebar", "filename": "bop.html", "title": "Bank of Palestine: KYC Simplification — Gokul S Kaimal", "has_sidebar": True},
        {"func_name": "renderProject5", "sidebar_func": None, "filename": "project-5.html", "title": "Attendance Management UX Case Study — Gokul S Kaimal", "has_sidebar": False},
        {"func_name": "renderProject6", "sidebar_func": None, "filename": "project-6.html", "title": "Netflix E-Shopping UX Case Study — Gokul S Kaimal", "has_sidebar": False},
        {"func_name": "renderProject7", "sidebar_func": None, "filename": "project-7.html", "title": "TimeSync UX Case Study — Gokul S Kaimal", "has_sidebar": False},
        {"func_name": "renderProject8", "sidebar_func": None, "filename": "project-8.html", "title": "Fashion Factory UI Design Showcase — Gokul S Kaimal", "has_sidebar": False},
        {"func_name": "renderProject9", "sidebar_func": None, "filename": "project-9.html", "title": "Designergram | Design Connect Unified Case Study — Gokul S Kaimal", "has_sidebar": False},
        {"func_name": "renderBrandStack", "sidebar_func": None, "filename": "brand-stack.html", "title": "Brand Stack — Gokul S Kaimal", "has_sidebar": False},
    ]
    
    for p in projects:
        body_func = p["func_name"]
        body_html = extract_template_literal(views_content, body_func)
        if not body_html:
            print(f"Failed to extract body for {body_func}")
            continue
            
        # Clean up some specific project 3 interpolations if present
        if body_func == "renderProject3":
            # Replace digit loop mapping
            bop_digits = ""
            for i in range(1, 7):
                bop_digits += f'<div style="flex: 1; height: 36px; border: 1px solid var(--color-bop); border-radius: 6px; background: var(--bg-card); display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-primary); font-size: 0.9rem;">{i}</div>'
            body_html = re.sub(r"\$\{\[1,\s*2,\s*3,\s*4,\s*5,\s*6\].*?\}\n?", bop_digits, body_html, flags=re.DOTALL)
            
            # Replace other selectAccount styling
            body_html = body_html.replace("${selectedAccount === 'current' ? 'active' : ''}", "active")
            body_html = body_html.replace("${selectedAccount === 'saving' ? 'active' : ''}", "")
            body_html = body_html.replace("${selectedAccount === 'current' ? 'var(--color-bop)' : 'var(--border-color)'}", "var(--color-bop)")
            body_html = body_html.replace("${selectedAccount === 'saving' ? 'var(--color-bop)' : 'var(--border-color)'}", "var(--border-color)")
            
        # Prepare sidebar
        if p["has_sidebar"]:
            sidebar_func = p["sidebar_func"]
            sidebar_html = extract_template_literal(views_content, sidebar_func)
            if not sidebar_html:
                print(f"Failed to extract sidebar for {sidebar_func}")
                continue
            # Replace interpolation
            sidebar_html = sidebar_html.replace("${sidebarActionGrid}", sidebar_action_grid)
        else:
            sidebar_html = None
            
        # Modify the template
        # 1. Title
        page_html = re.sub(r"<title>.*?</title>", f"<title>{p['title']}</title>", index_template)
        
        # 2. Main content view replacement
        target_view = """      <div id="app-view" class="view-transition-container">
        <!-- Rendered view content will be injected here -->
      </div>"""
      
        replacement_view = f"""      <div id="app-view" class="view-transition-container">
{body_html}
      </div>"""
      
        page_html = page_html.replace(target_view, replacement_view)
        
        # 3. Sidebar replacement
        if p["has_sidebar"]:
            # Let's find the aside block
            aside_start = page_html.find('<aside class="sidebar"')
            if aside_start != -1:
                aside_end = page_html.find('</aside>', aside_start) + len('</aside>')
                original_aside = page_html[aside_start:aside_end]
                
                new_aside = f"""<aside class="sidebar" role="complementary">
      <div id="sidebar-default" class="hidden" style="display: none; flex-direction: column; height: 100%; width: 100%; gap: 1.5rem;">
      </div>
      <div id="sidebar-project" style="display: flex; flex-direction: column; height: 100%; width: 100%; justify-content: space-between;">
{sidebar_html}
      </div>
    </aside>"""
                page_html = page_html.replace(original_aside, new_aside)
        else:
            # Default sidebar remains, project sidebar hidden. No changes needed to aside block.
            pass
            
        # 4. Hide preloader and show app-shell immediately for instant static load
        preloader_override = """
  <style>
    .preloader { display: none !important; }
    .app-shell { opacity: 1 !important; visibility: visible !important; }
    .sidebar { transform: none !important; opacity: 1 !important; }
    .main-content { transform: none !important; opacity: 1 !important; }
  </style>
</head>"""
        page_html = page_html.replace("</head>", preloader_override)
        
        # Save file
        with open(p["filename"], "w", encoding="utf-8") as f:
            f.write(page_html)
            
        print(f"Generated {p['filename']} successfully.")

if __name__ == "__main__":
    build_pages()
