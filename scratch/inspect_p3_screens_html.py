import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open("scratch/dump_renderProject3.js", "r", encoding="utf-8") as f:
        content = f.read()

    # Search for all strings related to STEP 01, STEP 02, etc.
    print("Search counts in dump_renderProject3.js:")
    for term in ["STEP", "kyc-screen", "otp", "Selfie", "ID", "current", "saving"]:
        print(f"  '{term}': {content.count(term)}")
        
    # Let's inspect where kyc-screen-content is
    pos = content.find("kyc-screen-content")
    if pos != -1:
        print("\n--- Context around kyc-screen-content ---")
        print(content[pos-300:pos+800])

if __name__ == '__main__':
    main()
