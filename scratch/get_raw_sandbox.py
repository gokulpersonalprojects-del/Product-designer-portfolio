import json
import os
import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    log_path = r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl'
    
    if not os.path.exists(log_path):
        print("Log not found")
        return
        
    targets = ["initProject1Sandbox", "initProject3Sandbox", "initProject4Sandbox"]
    
    with open(log_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f, 1):
            try:
                data = json.loads(line)
                step_idx = data.get("step_index", idx)
                
                content = data.get("content", "")
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    args = tc.get("args", {})
                    if isinstance(args, dict):
                        for k, v in args.items():
                            if isinstance(v, str):
                                content += "\n" + v
                                
                for target in targets:
                    if f"function {target}" in content:
                        print(f"\n=== Found keyword 'function {target}' in Step {step_idx} (len content: {len(content)}) ===")
                        # Print occurrences
                        pos = content.find(f"function {target}")
                        snippet = content[pos:pos+3000]
                        print(snippet)
                        print("========================================================\n")
            except Exception as e:
                pass

if __name__ == '__main__':
    main()
