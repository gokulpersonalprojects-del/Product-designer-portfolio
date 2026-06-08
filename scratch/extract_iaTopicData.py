import re
import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    path = "scratch/definition_3668.js"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    idx = content.find("const iaTopicData")
    if idx == -1:
        print("iaTopicData not found")
        return
        
    brace_idx = content.find("{", idx)
    brace_count = 1
    current_idx = brace_idx + 1
    while brace_count > 0 and current_idx < len(content):
        char = content[current_idx]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
        current_idx += 1
        
    print("--- iaTopicData Object ---")
    print(content[idx:current_idx])

if __name__ == '__main__':
    main()
