import json
import re
import os

def extract_function(text, signature):
    idx = text.find(signature)
    if idx == -1:
        return None
    
    # For viewMounted, signature is document.addEventListener('viewMounted'
    # we find the opening brace '{'
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
    out_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    
    signatures = {
        "initProject1Sandbox": "function initProject1Sandbox",
        "initProject2Sandbox": "function initProject2Sandbox",
        "initProject3Sandbox": "function initProject3Sandbox",
        "initProject4Sandbox": "function initProject4Sandbox",
        "initSolutionTabs": "function initSolutionTabs",
        "initWorkFilters": "function initWorkFilters",
        "viewMounted": "document.addEventListener('viewMounted'"
    }
    
    best_matches = {name: (0, "") for name in signatures}
    
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            try:
                data = json.loads(line)
                
                # Collect all text in this JSON line
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
                for text in texts:
                    for name, sig in signatures.items():
                        extracted = extract_function(text, sig)
                        if extracted:
                            # Clean up line numbers in the extracted code if any
                            # Sometimes it has "1012:   const nodes..." format if extracted from a file view
                            # Let's count how many lines have line numbers
                            lines = extracted.split('\n')
                            has_line_numbers = any(re.match(r'^\s*\d+:\s', l) for l in lines[:5])
                            
                            # We prefer code WITHOUT line numbers, and also check for "truncated"
                            is_truncated = "truncated" in extracted.lower() or "..." in extracted or "Showing lines" in text
                            score = len(extracted)
                            if is_truncated:
                                score -= 100000  # Penalty for truncation
                            if has_line_numbers:
                                score -= 1000  # Penalty for line numbers
                                
                            if score > best_matches[name][0]:
                                best_matches[name] = (score, extracted)
            except Exception as e:
                pass
                
    for name in signatures:
        score, code = best_matches[name]
        if code:
            # Let's clean the code from line numbers if present
            lines = code.split('\n')
            cleaned_lines = []
            for line in lines:
                match = re.match(r'^\s*(\d+):\s?(.*)$', line)
                if match:
                    cleaned_lines.append(match.group(2))
                else:
                    cleaned_lines.append(line)
            cleaned_code = '\n'.join(cleaned_lines)
            
            out_path = os.path.join(out_dir, f"recovered_full_{name}.js")
            with open(out_path, 'w', encoding='utf-8') as out_f:
                out_f.write(cleaned_code)
            print(f"Saved best match for {name} (score: {score}, length: {len(cleaned_code)}) to {out_path}")
        else:
            print(f"No match found for {name}")

if __name__ == '__main__':
    main()
