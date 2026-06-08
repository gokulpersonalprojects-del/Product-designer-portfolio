import re
import os
import sys

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

def clean_lines(text):
    if not text:
        return ""
    lines = text.split('\n')
    cleaned = []
    for l in lines:
        m = re.match(r'^\s*(\d+):\s?(.*)$', l)
        if m:
            cleaned.append(m.group(2))
        else:
            cleaned.append(l)
    return "\n".join(cleaned)

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    path = r"c:\Users\ASUS\Desktop\new portfolio\scratch\reconstructed_lines.txt"
    if not os.path.exists(path):
        print("reconstructed_lines.txt does not exist")
        return
        
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
        print(f"\n================ EXTRACTING: {name} ================")
        extracted = extract_function(content, sig)
        if extracted:
            cleaned_js = clean_lines(extracted)
            print(f"Length raw: {len(extracted)} | Cleaned: {len(cleaned_js)}")
            
            cleaned_lines = cleaned_js.split('\n')
            print("First 10 lines of cleaned code:")
            print("\n".join(cleaned_lines[:10]))
            print("...")
            print("Last 10 lines of cleaned code:")
            print("\n".join(cleaned_lines[-10:]))
            
            # Save cleaned version
            out_path = f"scratch/recon_{name}.js"
            with open(out_path, 'w', encoding='utf-8') as out_f:
                out_f.write(cleaned_js)
            print(f"Saved to {out_path}")
        else:
            print("Not found in reconstructed_lines.txt")

if __name__ == '__main__':
    main()
