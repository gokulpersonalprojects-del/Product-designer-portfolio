import json
import os

def main():
    transcript_path = r"C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl"
    out_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            try:
                data = json.loads(line)
                # Check if this step is a VIEW_FILE or has view_file tool call
                type_ = data.get("type", "")
                tool_calls = data.get("tool_calls", [])
                
                is_views_read = False
                if "VIEW_FILE" in type_:
                    is_views_read = True
                for tc in tool_calls:
                    if tc.get("name") == "view_file" and "views.js" in tc.get("args", {}).get("AbsolutePath", ""):
                        is_views_read = True
                        
                if is_views_read:
                    # Look for the content
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
                    for idx, text in enumerate(texts):
                        if "function initProject1Sandbox" in text or "function initProject2Sandbox" in text:
                            out_path = os.path.join(out_dir, f"first_read_views_step_{data.get('step_index') or line_num}_{idx}.txt")
                            with open(out_path, 'w', encoding='utf-8') as out_f:
                                out_f.write(text)
                            print(f"Found views.js read at step {data.get('step_index') or line_num} (len: {len(text)}) -> Saved to {out_path}")
            except Exception as e:
                pass

if __name__ == '__main__':
    main()
