import json
import os

def main():
    transcript_path = r"C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl"
    out_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f, 1):
            try:
                data = json.loads(line)
                tool_calls = data.get("tool_calls", [])
                if not tool_calls:
                    continue
                
                for tc_idx, tc in enumerate(tool_calls):
                    name = tc.get("name")
                    args = tc.get("args", {})
                    if not isinstance(args, dict):
                        continue
                        
                    target_file = args.get("TargetFile", "")
                    if "views.js" in target_file:
                        print(f"Step {data.get('step_index') or idx}: {name} to {target_file}")
                        
                        # Save the arguments to a file
                        out_path = os.path.join(out_dir, f"write_step_{data.get('step_index') or idx}_{name}.json")
                        with open(out_path, 'w', encoding='utf-8') as out_f:
                            json.dump(args, out_f, indent=2)
                        print(f"  -> Saved arguments to {out_path}")
            except Exception as e:
                pass

if __name__ == '__main__':
    main()
