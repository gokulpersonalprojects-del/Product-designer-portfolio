import os
import json

def main():
    scratch_dir = r"c:\Users\ASUS\Desktop\new portfolio\scratch"
    targets = [
        "initProject1Sandbox",
        "initProject2Sandbox",
        "initProject3Sandbox",
        "initProject4Sandbox",
        "initSolutionTabs",
        "initWorkFilters",
        "viewMounted"
    ]
    
    files = [f for f in os.listdir(scratch_dir) if f.startswith("write_step_") and f.endswith(".json")]
    
    # Sort files by step number
    def get_step(filename):
        parts = filename.split("_")
        if len(parts) > 2:
            try:
                return int(parts[2])
            except ValueError:
                return 999999
        return 999999
        
    files.sort(key=get_step)
    
    print(f"Flexible inspection of {len(files)} files...")
    
    for f in files:
        path = os.path.join(scratch_dir, f)
        try:
            with open(path, 'r', encoding='utf-8') as file_obj:
                data = json.load(file_obj)
                
            content = ""
            for k, v in data.items():
                if isinstance(v, str):
                    content += "\n" + v
                elif isinstance(v, list):
                    for chunk in v:
                        if isinstance(chunk, dict):
                            content += "\n" + chunk.get("ReplacementContent", "")
                            content += "\n" + chunk.get("TargetContent", "")
            
            for t in targets:
                idx = content.find(t)
                if idx != -1:
                    # Let's print a snippet around it
                    snippet_start = max(0, idx - 50)
                    snippet_end = min(len(content), idx + 250)
                    snippet = content[snippet_start:snippet_end].replace("\n", " ").strip()
                    print(f"[{f}] {t} found at {idx}: ... {snippet} ...")
        except Exception as e:
            print(f"Error reading {f}: {e}")

if __name__ == '__main__':
    main()
