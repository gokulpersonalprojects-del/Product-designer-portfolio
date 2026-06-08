import re
import os

def find_interactive_elements(file_path, proj_name):
    print(f"\n================ INTERACTIVE ELEMENTS IN {proj_name} ================")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find all IDs
    ids = re.findall(r'id=["\']([^"\']+)["\']', content)
    print("IDs found:", list(set(ids)))
    
    # Find classes that look interactive
    classes = re.findall(r'class=["\']([^"\']+)["\']', content)
    unique_classes = set()
    for cl_str in classes:
        for cl in cl_str.split():
            if any(term in cl.lower() for term in ["btn", "chip", "node", "tab", "filter", "active", "sandbox", "screen", "canvas"]):
                unique_classes.add(cl)
    print("Interactive-looking Classes found:", list(unique_classes))

def main():
    find_interactive_elements("scratch/dump_renderProject1.js", "Project 1 (Yooki)")
    find_interactive_elements("scratch/dump_renderProject2.js", "Project 2 (Cendrol)")
    find_interactive_elements("scratch/dump_renderProject3.js", "Project 3 (Bank of Palestine)")
    find_interactive_elements("scratch/dump_renderProject4.js", "Project 4 (Aura AI)")

if __name__ == '__main__':
    main()
