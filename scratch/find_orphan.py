import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find lines 710-800 (offset 620+90 = 710)
    start = 620 + 89 - 1  # line 709 (0-indexed)
    end = min(len(lines), start + 200)
    for i, line in enumerate(lines[start:end], start=start+1):
        print(f'{i}: {repr(line)}')

if __name__ == "__main__":
    main()
