import os
import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    scratch_dir = "scratch"
    files = os.listdir(scratch_dir)
    
    for f in files:
        path = os.path.join(scratch_dir, f)
        if not os.path.isfile(path):
            continue
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as file_obj:
                content = file_obj.read()
            if "Ready To Bank Smarter" in content or "Verify Phone Number" in content:
                print(f"File: {f} contains BOP KYC text!")
                pos = content.find("Ready To Bank Smarter")
                if pos != -1:
                    print(content[pos-200:pos+1500])
                    print("----------------------------------------")
                pos_otp = content.find("Verify Phone Number")
                if pos_otp != -1:
                    print(content[pos_otp-200:pos_otp+1500])
                    print("----------------------------------------")
        except Exception as e:
            pass

if __name__ == '__main__':
    main()
