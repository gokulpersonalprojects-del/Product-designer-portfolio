import os

def extract_function(text, signature):
    idx = text.find(signature)
    if idx == -1:
        return None
    brace_idx = text.find('{', idx)
    if brace_idx == -1:
        return None
        
    brace_count = 1
    current_idx = brace_idx + 1
    while brace_count > 0 and current_idx < len(text):
        char = text[current_idx]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
        current_idx += 1
    return text[idx:current_idx]

def main():
    path = r"c:\Users\ASUS\Desktop\new portfolio\scratch\project_code.js"
    if not os.path.exists(path):
        print("project_code.js does not exist")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    signatures = {
        "initProject1Sandbox": "function initProject1Sandbox",
        "initProject2Sandbox": "function initProject2Sandbox",
        "initProject3Sandbox": "function initProject3Sandbox",
        "initProject4Sandbox": "function initProject4Sandbox",
        "initSolutionTabs": "function initSolutionTabs",
        "initWorkFilters": "function initWorkFilters",
        "viewMounted": "document.addEventListener('viewMounted'"
    }
    
    for name, sig in signatures.items():
        extracted = extract_function(content, sig)
        if extracted:
            print(f"--- Found {name} (length: {len(extracted)}) ---")
            lines = extracted.split('\n')
            if len(lines) > 20:
                print("\n".join(lines[:10]))
                print("...")
                print("\n".join(lines[-10:]))
            else:
                print(extracted)
        else:
            print(f"--- {name} not found in project_code.js ---")

if __name__ == '__main__':
    main()
