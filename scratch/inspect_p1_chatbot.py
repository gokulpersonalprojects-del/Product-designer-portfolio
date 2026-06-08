import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open("scratch/dump_renderProject1.js", "r", encoding="utf-8") as f:
        content = f.read()

    idx = content.find("ai-dialogue-sandbox")
    if idx != -1:
        print("--- Yooki Chatbot HTML ---")
        start = max(0, idx - 100)
        end = min(len(content), idx + 2500)
        print(content[start:end])
    else:
        print("ai-dialogue-sandbox not found")

if __name__ == '__main__':
    main()
