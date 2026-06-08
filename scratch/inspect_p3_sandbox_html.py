import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open("scratch/dump_renderProject3.js", "r", encoding="utf-8") as f:
        content = f.read()

    idx = content.find("kyc-screen-content")
    if idx != -1:
        print("--- BOP Sandbox HTML (around kyc-screen-content) ---")
        start = max(0, idx - 500)
        end = min(len(content), idx + 2500)
        print(content[start:end])
    else:
        print("kyc-screen-content not found")

if __name__ == '__main__':
    main()
