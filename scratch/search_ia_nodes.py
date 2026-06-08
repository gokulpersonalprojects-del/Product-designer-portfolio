import os

def main():
    scratch_dir = "scratch"
    files = os.listdir(scratch_dir)
    
    for f in files:
        path = os.path.join(scratch_dir, f)
        if not os.path.isfile(path):
            continue
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as file_obj:
                content = file_obj.read()
            if "ia-node" in content or "node-search" in content:
                if f.endswith(".js") or f.endswith(".txt"):
                    print(f"File: {f} (size: {os.path.getsize(path)}) contains 'ia-node' or 'node-search'")
                    # Print lines around ia-node
                    lines = content.split('\n')
                    for i, l in enumerate(lines):
                        if "ia-node" in l or "node-search" in l:
                            start = max(0, i-5)
                            end = min(len(lines), i+15)
                            print(f"--- Lines {start} to {end} in {f} ---")
                            print("\n".join(lines[start:end]))
                            print("-----------------------------------")
                            break
        except Exception as e:
            pass

if __name__ == '__main__':
    main()
