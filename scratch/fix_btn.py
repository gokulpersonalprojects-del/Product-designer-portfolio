import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    old = '        more about company <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>\n'
    new = '        view it live <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>\n'
    count = 0
    for i, line in enumerate(lines):
        if line == old and count == 0:  # only replace the first occurrence (project 1 sidebar)
            lines[i] = new
            count += 1
            print(f'Replaced line {i+1}')
            break
    with open('views.js', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Done')

if __name__ == '__main__':
    main()
