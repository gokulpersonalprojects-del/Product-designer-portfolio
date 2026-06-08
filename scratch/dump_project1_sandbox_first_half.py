import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # print lines 1068 to 1200
    print(''.join(lines[1068:1200]))

if __name__ == "__main__":
    main()
