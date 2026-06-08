import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # ── 1. Remove project-specs block from right panel (lines 1001-1014, 0-indexed 1000-1013)
    # Verify contents first
    for i in range(1000, 1015):
        print(f'{i+1}: {lines[i].rstrip()}')

if __name__ == '__main__':
    main()
