import os

def main():
    path = "views.js"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    terms = ["STEP 01", "STEP 02", "STEP 03", "STEP 04", "kyc-next-btn", "kyc-screen-content"]
    for t in terms:
        print(f"Keyword '{t}' count: {content.count(t)}")

if __name__ == '__main__':
    main()
