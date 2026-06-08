import os
import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    scratch_dir = "scratch"
    files = os.listdir(scratch_dir)
    
    for f in files:
        path = os.path.join(scratch_dir, f)
        if not os.path.isfile(path):
            continue
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as file_obj:
                content = file_obj.read()
            if "analytics:" in content and "initProject4Sandbox" in content:
                print(f"File: {f} contains Project 4 templates!")
                pos = content.find("analytics:")
                print(content[pos-200:pos+1500])
                print("----------------------------------------")
        except Exception as e:
            pass

if __name__ == '__main__':
    main()
