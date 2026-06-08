import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open("scratch/definition_3294.js", "r", encoding="utf-8") as f:
        content = f.read()

    print(f"File size: {len(content)} characters")
    print(content)

if __name__ == '__main__':
    main()
