import os

def extract_export_function(content, name):
    sig = f"export function {name}"
    idx = content.find(sig)
    if idx == -1:
        return None
    brace_idx = content.find('{', idx)
    if brace_idx == -1:
        return None
        
    brace_count = 1
    current_idx = brace_idx + 1
    while brace_count > 0 and current_idx < len(content):
        char = content[current_idx]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
        current_idx += 1
    return content[idx:current_idx]

def main():
    path = "views.js"
    if not os.path.exists(path):
        print("views.js not found")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    projects = ["renderProject1", "renderProject2", "renderProject3", "renderProject4"]
    
    for proj in projects:
        code = extract_export_function(content, proj)
        if code:
            out_path = f"scratch/dump_{proj}.js"
            with open(out_path, 'w', encoding='utf-8') as out_f:
                out_f.write(code)
            print(f"Extracted {proj} (length: {len(code)}) -> Saved to {out_path}")
        else:
            print(f"Failed to find {proj}")

if __name__ == '__main__':
    main()
