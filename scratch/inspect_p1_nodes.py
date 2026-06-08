import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open("scratch/dump_renderProject1.js", "r", encoding="utf-8") as f:
        content = f.read()

    idx = content.find("Node 4:")
    if idx != -1:
        print("--- Yooki Nodes 4 & 5 + Chatbot HTML ---")
        start = max(0, idx - 100)
        end = min(len(content), idx + 2500)
        print(content[start:end])
    else:
        print("Node 4: not found")

if __name__ == '__main__':
    main()
