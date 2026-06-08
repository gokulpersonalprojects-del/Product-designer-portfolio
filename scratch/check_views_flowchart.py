import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        content = f.read()

    pos = content.find("function initProject3Flowchart")
    if pos == -1:
        print("initProject3Flowchart not found")
        return
        
    # Print 200 chars before and 2000 chars after the function definition start
    print("--- views.js around initProject3Flowchart ---")
    print(content[pos-200:pos+2000])

if __name__ == '__main__':
    main()
