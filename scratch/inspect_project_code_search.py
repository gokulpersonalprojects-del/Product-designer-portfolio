import os

def main():
    path = r"c:\Users\ASUS\Desktop\new portfolio\scratch\project_code.js"
    if not os.path.exists(path):
        print("project_code.js not found")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    print(f"File size: {len(content)} characters")
    
    terms = ["project1", "project2", "project3", "project4", "sandbox", "tabs", "filter"]
    for t in terms:
        count = content.lower().count(t)
        print(f"Keyword '{t}' count: {count}")

if __name__ == '__main__':
    main()
