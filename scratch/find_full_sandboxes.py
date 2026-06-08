import os
import re

def search_files():
    scratch_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    targets = [
        "initProject1Sandbox",
        "initProject2Sandbox",
        "initProject3Sandbox",
        "initProject4Sandbox",
        "initSolutionTabs",
        "initWorkFilters",
        "viewMounted"
    ]
    
    files = [f for f in os.listdir(scratch_dir) if os.path.isfile(os.path.join(scratch_dir, f))]
    
    for target in targets:
        print(f"\n================ SEARCHING FOR: {target} ================")
        found_instances = []
        for f in files:
            path = os.path.join(scratch_dir, f)
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as file_obj:
                    content = file_obj.read()
                if target in content:
                    # Find count of target
                    cnt = content.count(target)
                    # Check if it contains "function " + target
                    has_func = f"function {target}" in content or (target == "viewMounted" and "viewMounted" in content)
                    found_instances.append((f, os.path.getsize(path), cnt, has_func))
            except Exception as e:
                pass
        
        # Sort by size descending
        found_instances.sort(key=lambda x: x[1], reverse=True)
        for name, size, count, has_func in found_instances[:8]:
            print(f"  File: {name:50} | Size: {size:8} | Count: {count:3} | Has 'function': {has_func}")

if __name__ == '__main__':
    search_files()
