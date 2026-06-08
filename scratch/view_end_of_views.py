import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    print(f"Total lines in views.js: {len(lines)}")
    print("--- Last 150 lines of views.js ---")
    print("".join(lines[-150:]))

if __name__ == '__main__':
    main()
