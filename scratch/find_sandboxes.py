import json
import re

def extract_function(text, func_name):
    # Find the start of the function
    idx = text.find(func_name)
    if idx == -1:
        return None
    
    # Find the opening brace '{' after the function name
    brace_idx = text.find('{', idx)
    if brace_idx == -1:
        return None
        
    # Match braces to find the end of the function
    brace_count = 1
    current_idx = brace_idx + 1
    while brace_count > 0 and current_idx < len(text):
        char = text[current_idx]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
        current_idx += 1
        
    if brace_count == 0:
        return text[idx:current_idx]
    else:
        # If braces didn't match, return up to current_idx anyway (maybe truncated)
        return text[idx:current_idx]

def main():
    transcript_path = r"C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl"
    
    targets = [
        "initProject1Sandbox",
        "initProject2Sandbox",
        "initProject3Sandbox",
        "initProject4Sandbox",
        "initSolutionTabs",
        "initWorkFilters"
    ]
    
    results = {t: [] for t in targets}
    
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            try:
                data = json.loads(line)
                content = data.get("content", "")
                
                # Check tool calls
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    tc_args = tc.get("args", {})
                    if isinstance(tc_args, dict):
                        for k, v in tc_args.items():
                            if isinstance(v, str):
                                content += "\n" + v
                                
                # Check tool outputs/results in step logs
                # In some systems, the output is in 'output' or another field
                # Let's inspect all string values in data
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
                content += "\n" + "\n".join(all_strings)
                
                for t in targets:
                    func_code = extract_function(content, "function " + t)
                    if func_code:
                        results[t].append((line_num, len(func_code), func_code))
            except Exception as e:
                pass
                
    for t in targets:
        print(f"Results for '{t}':")
        if not results[t]:
            print("  None found.")
            continue
            
        # Sort by length descending, and check if it contains "truncated"
        valid_results = []
        for line_num, length, code in results[t]:
            is_truncated = "truncated" in code.lower() or "..." in code or "Showing lines" in code or "Original line" in code
            valid_results.append((line_num, length, is_truncated, code))
            
        valid_results.sort(key=lambda x: (not x[2], x[1]), reverse=True)
        
        # Print the top 3 matches
        for i, (line_num, length, is_trunc, code) in enumerate(valid_results[:3]):
            status = "TRUNCATED" if is_trunc else "COMPLETE"
            print(f"  [{i+1}] Line {line_num} in transcript: length={length}, status={status}")
            
        # Save the best one (non-truncated if possible, otherwise longest)
        if valid_results:
            best_code = valid_results[0][3]
            out_path = f"scratch/best_{t}.js"
            with open(out_path, 'w', encoding='utf-8') as out_f:
                out_f.write(best_code)
            print(f"  -> Saved best match to {out_path} (length: {len(best_code)})")

if __name__ == '__main__':
    main()
