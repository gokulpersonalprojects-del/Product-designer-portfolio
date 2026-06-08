import os
import json
import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    scratch_dir = "scratch"
    files = os.listdir(scratch_dir)
    
    write_files = [f for f in files if f.startswith("write_step_") and f.endswith(".json")]
    print(f"Found {len(write_files)} write step JSON files.")
    
    targets = ["initProject1Sandbox", "initProject2Sandbox", "initProject3Sandbox", "initProject4Sandbox", "initSolutionTabs", "initWorkFilters", "viewMounted"]
    
    for target in targets:
        print(f"\n================ SEARCHING FOR: {target} ================")
        found = []
        for wf in write_files:
            path = os.path.join(scratch_dir, wf)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                
                # Check ReplacementContent or CodeContent
                content = data.get("CodeContent", "")
                if not content:
                    chunks = data.get("ReplacementChunks", [])
                    for chunk in chunks:
                        content += "\n" + chunk.get("ReplacementContent", "")
                    content += "\n" + data.get("ReplacementContent", "")
                    
                if target in content:
                    found.append((wf, os.path.getsize(path), content.count(target), content))
            except Exception as e:
                pass
                
        # Sort by size descending
        found.sort(key=lambda x: x[1], reverse=True)
        for wf, size, count, content in found[:5]:
            print(f"  File: {wf:40} | Size: {size:8} | Occurrences: {count:3}")
            # Find definition in content
            idx = content.find(target)
            if idx != -1:
                # print a small snippet to see if it is truncated
                snippet = content[idx:idx+800]
                is_trunc = "..." in snippet or "truncated" in snippet.lower()
                print(f"    Snippet (Status: {'TRUNCATED' if is_trunc else 'COMPLETE'}):")
                print(snippet[:400] + "\n    ...")
                
                # Save the complete matched content to a file if it looks complete
                if not is_trunc and len(snippet) > 100:
                    out_path = f"scratch/recovered_complete_{target}_{wf}.js"
                    # Find function braces
                    brace_idx = content.find("{", idx)
                    if brace_idx != -1:
                        brace_count = 1
                        current_idx = brace_idx + 1
                        while brace_count > 0 and current_idx < len(content):
                            char = content[current_idx]
                            if char == '{':
                                brace_count += 1
                            elif char == '}':
                                brace_count -= 1
                            current_idx += 1
                        func_code = content[idx:current_idx]
                        with open(out_path, 'w', encoding='utf-8') as out_f:
                            out_f.write(func_code)
                        print(f"    -> Saved extracted complete function to {out_path} (length: {len(func_code)})")

if __name__ == '__main__':
    main()
