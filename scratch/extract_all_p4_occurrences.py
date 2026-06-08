import json
import os
import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    log_path = r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl'
    
    if not os.path.exists(log_path):
        print("Log not found")
        return
        
    with open(log_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f, 1):
            if "initProject4Sandbox" in line and ("components =" in line or "analytics:" in line):
                try:
                    obj = json.loads(line)
                    content = obj.get("content", "")
                    tool_calls = obj.get("tool_calls", [])
                    for tc in tool_calls:
                        args = tc.get("args", {})
                        if isinstance(args, dict):
                            for k, v in args.items():
                                if isinstance(v, str):
                                    content += "\n" + v
                    
                    pos = content.find("initProject4Sandbox")
                    print(f"=== Found initProject4Sandbox in Step {obj.get('step_index') or idx} ===")
                    print(content[pos:pos+1500])
                    print("==================================================\n")
                except Exception as e:
                    pass

if __name__ == '__main__':
    main()
