import json
import re
import os

def extract_function(text, func_name):
    idx = text.find(func_name)
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
    transcript_path = r"C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl"
    lines_to_check = [3275, 3648, 4193]
    
    out_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            if line_num in lines_to_check:
                try:
                    data = json.loads(line)
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
                    
                    texts = get_strings(data)
                    for idx, text in enumerate(texts):
                        code = extract_function(text, "function initProject1Sandbox")
                        if code:
                            out_path = os.path.join(out_dir, f"extracted_p1_line_{line_num}_{idx}.js")
                            with open(out_path, 'w', encoding='utf-8') as out_f:
                                out_f.write(code)
                            print(f"Saved match from line {line_num} index {idx} to {out_path} (len: {len(code)})")
                except Exception as e:
                    print(f"Error parsing line {line_num}: {e}")

if __name__ == '__main__':
    main()
