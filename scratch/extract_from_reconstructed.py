import re

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
    path = r"c:\Users\ASUS\Desktop\new portfolio\scratch\reconstructed_lines.txt"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    targets = {
        "initProject1Sandbox": "function initProject1Sandbox",
        "initProject2Sandbox": "function initProject2Sandbox",
        "initProject3Sandbox": "function initProject3Sandbox",
        "initProject4Sandbox": "function initProject4Sandbox",
        "initSolutionTabs": "function initSolutionTabs",
        "initWorkFilters": "function initWorkFilters",
        "viewMounted": "document.addEventListener('viewMounted'"
    }
    
    for name, sig in targets.items():
        print(f"\n================ EXTRACTING FROM reconstructed_lines.txt: {name} ================")
        extracted = extract_function(content, sig)
        if extracted:
            print(f"Length: {len(extracted)}")
            lines = extracted.split('\n')
            # Check if there are line numbers like "123: " and strip them
            cleaned = []
            for l in lines:
                m = re.match(r'^\s*(\d+):\s?(.*)$', l)
                if m:
                    cleaned.append(m.group(2))
                else:
                    cleaned.append(l)
            cleaned_js = "\n".join(cleaned)
            print("First 15 lines:")
            print("\n".join(cleaned.split('\n')[:15]) if isinstance(cleaned_js, str) else "\n".join(cleaned[:15]))
            print("...")
            print("Last 15 lines:")
            print("\n".join(cleaned.split('\n')[-15:]) if isinstance(cleaned_js, str) else "\n".join(cleaned[-15:]))
            
            # Save cleaned version
            with open(f"scratch/recon_{name}.js", 'w', encoding='utf-8') as out_f:
                out_f.write(cleaned_js)
        else:
            print("Not found")

if __name__ == '__main__':
    main()
