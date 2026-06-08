import json
import os

log_path = r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl'

if not os.path.exists(log_path):
    print("Log file not found.")
else:
    with open(log_path, 'r', encoding='utf-8') as f:
        for line in f:
            if '"step_index":1823' in line.replace(" ", "") or '"step_index":1822' in line.replace(" ", ""):
                try:
                    obj = json.loads(line)
                    print(f"Step {obj.get('step_index')}:")
                    print(json.dumps(obj, indent=2))
                except Exception as e:
                    print(e)
