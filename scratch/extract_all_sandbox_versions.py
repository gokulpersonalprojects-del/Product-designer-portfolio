import json
import os
import re
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
        # Strip line numbers like "1024: const abc = ..." or "1024:const abc = ..."
        m = re.match(r'^\s*(\d+):\s?(.*)$', l)
        if m:
            cleaned.append(m.group(2))
        else:
            cleaned.append(l)
    return "\n".join(cleaned)

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    log_path = r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl'
    
    if not os.path.exists(log_path):
        print("Log file not found.")
        return
        
    targets = {
        "initProject1Sandbox": "function initProject1Sandbox",
        "initProject2Sandbox": "function initProject2Sandbox",
        "initProject3Sandbox": "function initProject3Sandbox",
        "initProject4Sandbox": "function initProject4Sandbox",
        "initSolutionTabs": "function initSolutionTabs",
        "initWorkFilters": "function initWorkFilters",
        "viewMounted": "document.addEventListener('viewMounted'"
    }
    
    # Store candidates as (step_index, length, cleaned_code, is_truncated)
    candidates = {name: [] for name in targets}
    
    with open(log_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f, 1):
            try:
                data = json.loads(line)
                step_idx = data.get("step_index", idx)
                
                # Extract all text in this JSON line
                def get_strings(obj):
                    if isinstance(obj, str):
                        return [obj]
                    elif isinstance(obj, dict):
                        res = []
                        for val in obj.values():
                            res.extend(get_strings(val))
                        return res
                    elif isinstance(obj, list):
                        res = []
                        for item in obj:
                            res.extend(get_strings(item))
                        return res
                    return []
                
                all_strings = get_strings(data)
                text_content = "\n".join(all_strings)
                
                for name, sig in targets.items():
                    extracted = extract_function(text_content, sig)
                    if extracted:
                        cleaned = clean_lines(extracted)
                        is_trunc = "..." in cleaned or "truncated" in cleaned.lower() or "Showing lines" in text_content
                        candidates[name].append((step_idx, len(cleaned), cleaned, is_trunc))
            except Exception as e:
                pass
                
    for name in targets:
        print(f"\nCandidates for {name}:")
        list_cands = candidates[name]
        if not list_cands:
            print("  None found.")
            continue
            
        # Sort candidates: non-truncated first, then by length descending
        list_cands.sort(key=lambda x: (not x[3], x[1]), reverse=True)
        
        for i, (step, length, code, is_trunc) in enumerate(list_cands[:5]):
            trunc_str = "TRUNCATED" if is_trunc else "COMPLETE"
            print(f"  [{i+1}] Step {step}: length={length}, status={trunc_str}")
            
        # Save the best one
        best_step, best_len, best_code, best_trunc = list_cands[0]
        out_path = f"scratch/best_log_{name}.js"
        with open(out_path, 'w', encoding='utf-8') as out_f:
            out_f.write(best_code)
        print(f"  -> Saved best match (Step {best_step}, length={best_len}, status={'TRUNCATED' if best_trunc else 'COMPLETE'}) to {out_path}")

if __name__ == '__main__':
    main()
