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
            if "history:" in content and "initProject1Sandbox" in content:
                print(f"File {f} has history topic!")
                pos = content.find("history:")
                print(content[pos-100:pos+1000])
                print("---------------------")
        except Exception as e:
            pass

if __name__ == '__main__':
    main()
