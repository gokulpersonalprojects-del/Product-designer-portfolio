import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    p1_lines = lines[266:644]
    print(''.join(p1_lines))

if __name__ == "__main__":
    main()
