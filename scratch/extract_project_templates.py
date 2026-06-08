import os

def main():
    path = "views.js"
    if not os.path.exists(path):
        print("views.js not found")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    projects = ["renderProject1", "renderProject2", "renderProject3", "renderProject4"]
    
    for proj in projects:
        idx = content.find(proj)
        if idx == -1:
            print(f"{proj} not found")
            continue
            
        print(f"\n================ TEMPLATE FOR {proj} ================")
        # Find the return statement containing the template literal
        ret_idx = content.find("return `", idx)
        if ret_idx == -1:
            ret_idx = content.find("return `", idx)
        
        if ret_idx != -1:
            # Match backticks
            start_backtick = ret_idx + 7
            end_backtick = content.find("`", start_backtick)
            if end_backtick != -1:
                template = content[start_backtick:end_backtick]
                print(f"Length: {len(template)} characters")
                
                # Let's search for sandbox containers and element IDs
                lines = template.split('\n')
                sandbox_lines = []
                in_sandbox = False
                for line in lines:
                    if "sandbox" in line.lower() or "kyc-screen" in line.lower() or "canvas-preview" in line.lower() or "syllabus" in line.lower():
                        in_sandbox = True
                    # Let's collect lines with ID attributes
                    if " id=" in line:
                        sandbox_lines.append(line.strip())
                print("IDs found in template:")
                for l in sandbox_lines[:30]:
                    print("  ", l)
            else:
                print("End backtick not found")
        else:
            print("Return statement not found")

if __name__ == '__main__':
    main()
