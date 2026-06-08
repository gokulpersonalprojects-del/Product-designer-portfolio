import sys
import re

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open("scratch/dump_renderProject1.js", "r", encoding="utf-8") as f:
        content = f.read()

    # Search for node IDs
    nodes = ["node-search", "node-details", "node-nudge", "node-journey", "node-completion"]
    
    for node in nodes:
        idx = content.find(f'id="{node}"')
        if idx != -1:
            print(f"\n=== HTML FOR {node} ===")
            start = idx - 100
            end = idx + 1000
            print(content[start:end])
            print("======================")

if __name__ == '__main__':
    main()
