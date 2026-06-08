import re

def main():
    with open('views.js', 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    print("Top-level functions and event listeners in views.js:")
    
    # Regex to find top-level function declarations
    func_pattern = re.compile(r'^(function\s+\w+|const\s+\w+\s*=\s*(?:function|\([^)]*\)\s*=>)|document\.addEventListener\()', re.MULTILINE)
    
    for i, line in enumerate(lines, 1):
        if func_pattern.match(line):
            print(f"Line {i:4d}: {line}")

if __name__ == '__main__':
    main()
