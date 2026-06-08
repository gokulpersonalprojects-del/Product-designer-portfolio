import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # renderProject1 goes from line 267 (0-indexed 266) to line 645 (0-indexed 644)
    p1_lines = lines[266:644]
    for idx, line in enumerate(p1_lines):
        line_num = idx + 267
        line_str = line.strip()
        if 'Chapter' in line_str or 'chapter-title' in line_str or 'chapter-content' in line_str or 'CHAPTER' in line_str:
            print(f"Line {line_num}: {line_str}")

if __name__ == "__main__":
    main()
