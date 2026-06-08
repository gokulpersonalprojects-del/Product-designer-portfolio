import os
import json
import re

def main():
    brain_dir = r"C:\Users\ASUS\.gemini\antigravity\brain"
    out_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    
    # List all folders in brain_dir
    folders = [f for f in os.listdir(brain_dir) if os.path.isdir(os.path.join(brain_dir, f)) and f != "tempmediaStorage"]
    print(f"Found {len(folders)} past conversations.")
    
    for folder in folders:
        transcript_path = os.path.join(brain_dir, folder, ".system_generated", "logs", "transcript.jsonl")
        if not os.path.exists(transcript_path):
            continue
            
        print(f"Scanning transcript for conversation {folder}...")
        
        with open(transcript_path, 'r', encoding='utf-8') as f:
            for line_num, line in enumerate(f, 1):
                try:
                    data = json.loads(line)
                    tool_calls = data.get("tool_calls", [])
                    if not tool_calls:
                        continue
                        
                    for tc in tool_calls:
                        name = tc.get("name")
                        args = tc.get("args", {})
                        if not isinstance(args, dict):
                            continue
                            
                        target_file = args.get("TargetFile", "")
                        if "views.js" in target_file:
                            # Extract code from args
                            content = args.get("CodeContent", "")
                            
                            # Check if it contains our sandboxes and is large
                            if len(content) > 15000 and "initProject1Sandbox" in content:
                                out_path = os.path.join(out_dir, f"recovered_full_views_from_{folder}_line_{line_num}.js")
                                with open(out_path, 'w', encoding='utf-8') as out_f:
                                    out_f.write(content)
                                print(f"  -> SUCCESS! Found full views.js write in {folder} at line {line_num} (len: {len(content)}). Saved to {out_path}")
                except Exception as e:
                    pass

if __name__ == '__main__':
    main()
