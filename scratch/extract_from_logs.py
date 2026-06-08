import json
import re
import os

def main():
    transcript_path = r"C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl"
    out_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    
    targets = [
        "initProject1Sandbox",
        "initProject2Sandbox",
        "initProject3Sandbox",
        "initProject4Sandbox",
        "initSolutionTabs",
        "initWorkFilters",
        "viewMounted"
    ]
    
    matches = {t: [] for t in targets}
    
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            try:
                data = json.loads(line)
                content = data.get("content", "")
                
                # Also check tool calls and responses if present
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    tc_args = tc.get("args", {})
                    if isinstance(tc_args, dict):
                        for k, v in tc_args.items():
                            if isinstance(v, str):
                                content += "\n" + v
                
                # Check target terms
                for t in targets:
                    if t in content:
                        matches[t].append((line_num, data.get("type"), content))
            except Exception as e:
                print(f"Error reading line {line_num}: {e}")
                
    for t, match_list in matches.items():
        print(f"Target '{t}' found in {len(match_list)} entries.")
        if match_list:
            # We want to find the largest content block containing this target
            # which does NOT contain "<truncated" or similar markers if possible.
            best_entry = None
            max_len = -1
            
            for line_num, step_type, text in match_list:
                # Find the actual code block
                # Let's see if there is a block of JS
                if len(text) > max_len and "function " + t in text:
                    max_len = len(text)
                    best_entry = (line_num, step_type, text)
            
            # If no "function name" block, just get the largest
            if not best_entry:
                for line_num, step_type, text in match_list:
                    if len(text) > max_len:
                        max_len = len(text)
                        best_entry = (line_num, step_type, text)
            
            if best_entry:
                line_num, step_type, text = best_entry
                out_file = os.path.join(out_dir, f"recovered_{t}.txt")
                with open(out_file, 'w', encoding='utf-8') as out_f:
                    out_f.write(text)
                print(f"  -> Saved best match for {t} from line {line_num} ({step_type}) to {out_file} (length: {len(text)})")

if __name__ == '__main__':
    main()
