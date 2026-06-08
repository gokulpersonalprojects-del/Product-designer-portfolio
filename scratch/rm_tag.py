import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    # Remove lines 1865, 1866, 1867, 1868 (0-indexed: 1864, 1865, 1866, 1867)
    del lines[1864:1868]
    with open('views.js', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Done - removed CONVERSATIONAL AI / AI PRODUCT DESIGN tag')

if __name__ == '__main__':
    main()
