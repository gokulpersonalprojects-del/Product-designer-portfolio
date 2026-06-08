import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open("scratch/dump_renderProject1.js", "r", encoding="utf-8") as f:
        content = f.read()

    idx = content.find("ia-search-box")
    if idx != -1:
        print("--- Yooki Details Panel HTML (around ia-search-box) ---")
        start = max(0, idx - 200)
        end = min(len(content), idx + 2500)
        print(content[start:end])
    else:
        print("ia-search-box not found")

if __name__ == '__main__':
    main()
