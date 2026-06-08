import json
import os
import re

def main():
    log_path = r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl'
    if not os.path.exists(log_path):
        print("Log not found")
        return
        
    with open(log_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f, 1):
            if "node-search" in line:
                # Let's print out lines that look like they contain the nodes data definition
                if "const nodeData" in line or "const data =" in line or "const nodesData" in line or "search:" in line:
                    try:
                        obj = json.loads(line)
                        content = obj.get("content", "")
                        tool_calls = obj.get("tool_calls", [])
                        for tc in tool_calls:
                            args = tc.get("args", {})
                            if isinstance(args, dict):
                                for k, v in args.items():
                                    if isinstance(v, str) and "node-search" in v:
                                        content += "\n" + v
                        
                        # Find definitions
                        matches = re.findall(r'(const\s+nodeData\s*=\s*\{.*?\};)', content, re.DOTALL | re.IGNORECASE)
                        if matches:
                            for m in matches:
                                print(f"Found nodeData in Step {obj.get('step_index') or idx}:")
                                print(m[:1000])
                                print("...")
                        else:
                            # Let's search for "nodeData =" and extract manually
                            pos = content.find("nodeData")
                            if pos != -1:
                                print(f"Found keyword 'nodeData' in Step {obj.get('step_index') or idx}:")
                                print(content[pos:pos+1200])
                                print("...")
                    except Exception as e:
                        pass

if __name__ == '__main__':
    main()
