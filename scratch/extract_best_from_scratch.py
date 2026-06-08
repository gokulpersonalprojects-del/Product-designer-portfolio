import os
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
    scratch_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    
    signatures = {
        "initProject1Sandbox": "function initProject1Sandbox",
        "initProject2Sandbox": "function initProject2Sandbox",
        "initProject3Sandbox": "function initProject3Sandbox",
        "initProject4Sandbox": "function initProject4Sandbox",
        "initSolutionTabs": "function initSolutionTabs",
        "initWorkFilters": "function initWorkFilters",
        "viewMounted": "document.addEventListener('viewMounted'"
    }
    
    best_matches = {name: (0, "", "") for name in signatures}
    
    for f in os.listdir(scratch_dir):
        path = os.path.join(scratch_dir, f)
        if not os.path.isfile(path):
            continue
        try:
            with open(path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
                
            for name, sig in signatures.items():
                extracted = extract_function(content, sig)
                if extracted:
                    lines = extracted.split('\n')
                    has_line_numbers = any(re.match(r'^\s*\d+:\s', l) for l in lines[:5])
                    is_truncated = "truncated" in extracted.lower() or "..." in extracted
                    
                    score = len(extracted)
                    if is_truncated:
                        score -= 100000
                    if has_line_numbers:
                        score -= 1000
                        
                    if score > best_matches[name][0]:
                        best_matches[name] = (score, extracted, f)
        except Exception as e:
            pass
            
    for name in signatures:
        score, code, filename = best_matches[name]
        if code:
            # Clean up line numbers if any
            lines = code.split('\n')
            cleaned_lines = []
            for line in lines:
                match = re.match(r'^\s*(\d+):\s?(.*)$', line)
                if match:
                    cleaned_lines.append(match.group(2))
                else:
                    cleaned_lines.append(line)
            cleaned_code = '\n'.join(cleaned_lines)
            
            out_path = os.path.join(scratch_dir, f"best_scratch_{name}.js")
            with open(out_path, 'w', encoding='utf-8') as out_f:
                out_f.write(cleaned_code)
            print(f"Best match for {name}: filename={filename}, score={score}, length={len(cleaned_code)} -> Saved to {out_path}")
        else:
            print(f"No match for {name}")

if __name__ == '__main__':
    main()
