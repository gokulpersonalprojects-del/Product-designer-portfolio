import os
import json
import re

def main():
    brain_dir = r"C:\Users\ASUS\.gemini\antigravity\brain"
    out_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    
    folders = [f for f in os.listdir(brain_dir) if os.path.isdir(os.path.join(brain_dir, f)) and f != "tempmediaStorage"]
    print(f"Scanning {len(folders)} past conversations...")
    
    targets = [
        "initProject1Sandbox",
        "initProject2Sandbox",
        "initProject3Sandbox",
        "initProject4Sandbox",
        "initSolutionTabs",
        "initWorkFilters"
    ]
    
    # Store best matching text blocks for each target
    best_blocks = {t: (0, "", "", 0) for t in targets} # (length, content, folder, line_num)
    
    for folder in folders:
        transcript_path = os.path.join(brain_dir, folder, ".system_generated", "logs", "transcript.jsonl")
        if not os.path.exists(transcript_path):
            continue
            
        with open(transcript_path, 'r', encoding='utf-8') as f:
            for line_num, line in enumerate(f, 1):
                try:
                    data = json.loads(line)
                    tool_calls = data.get("tool_calls", [])
                    if not tool_calls:
                        continue
                        
                    for tc in tool_calls:
                        args = tc.get("args", {})
                        if not isinstance(args, dict):
                            continue
                            
                        # Extract all possible text fields
                        texts = []
                        if "CodeContent" in args:
                            texts.append(args["CodeContent"])
                        if "ReplacementContent" in args:
                            texts.append(args["ReplacementContent"])
                        if "ReplacementChunks" in args:
                            chunks = args["ReplacementChunks"]
                            # ReplacementChunks can be a string or a list
                            if isinstance(chunks, str):
                                try:
                                    chunks = json.loads(chunks)
                                except:
                                    pass
                            if isinstance(chunks, list):
                                for chunk in chunks:
                                    if isinstance(chunk, dict):
                                        if "ReplacementContent" in chunk:
                                            texts.append(chunk["ReplacementContent"])
                                            
                        for text in texts:
                            for t in targets:
                                if t in text and "function " + t in text:
                                    # Extract function using brace matcher
                                    idx = text.find("function " + t)
                                    brace_idx = text.find('{', idx)
                                    if brace_idx != -1:
                                        brace_count = 1
                                        current_idx = brace_idx + 1
                                        while brace_count > 0 and current_idx < len(text):
                                            char = text[current_idx]
                                            if char == '{':
                                                brace_count += 1
                                            elif char == '}':
                                                brace_count -= 1
                                            current_idx += 1
                                        extracted = text[idx:current_idx]
                                        
                                        is_truncated = "truncated" in extracted.lower() or "..." in extracted
                                        if not is_truncated:
                                            if len(extracted) > best_blocks[t][0]:
                                                best_blocks[t] = (len(extracted), extracted, folder, line_num)
                except Exception as e:
                    pass
                    
    for t in targets:
        length, content, folder, line_num = best_blocks[t]
        if content:
            # Clean up line numbers if any
            lines = content.split('\n')
            cleaned_lines = []
            for line in lines:
                match = re.match(r'^\s*(\d+):\s?(.*)$', line)
                if match:
                    cleaned_lines.append(match.group(2))
                else:
                    cleaned_lines.append(line)
            cleaned_code = '\n'.join(cleaned_lines)
            
            out_path = os.path.join(out_dir, f"recovered_perfect_{t}.js")
            with open(out_path, 'w', encoding='utf-8') as out_f:
                out_f.write(cleaned_code)
            print(f"Perfect recovered {t}: len={len(cleaned_code)} from conv={folder} line={line_num} -> Saved to {out_path}")
        else:
            print(f"Failed to find perfect recovered version for {t}")

if __name__ == '__main__':
    main()
