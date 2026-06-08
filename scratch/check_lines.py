import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    for i in range(1015, 1021):
        print(f'{i+1}: {repr(lines[i])}')

if __name__ == '__main__':
    main()
