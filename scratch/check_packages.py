import os

def main():
    files = os.listdir('.')
    print("Files in workspace directory:")
    for f in files:
        if os.path.isfile(f):
            print(f"  {f}")
        else:
            print(f"  [DIR] {f}")

if __name__ == '__main__':
    main()
