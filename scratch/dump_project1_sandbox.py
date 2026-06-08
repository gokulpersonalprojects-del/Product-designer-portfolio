import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # initProject1Sandbox goes from line 1069 (0-indexed 1068) to line 1368 (0-indexed 1367)
    p1_sb_lines = lines[1068:1367]
    print(''.join(p1_sb_lines))

if __name__ == "__main__":
    main()
