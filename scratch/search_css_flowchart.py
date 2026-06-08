import os

def main():
    path = "index.css"
    if not os.path.exists(path):
        print("index.css not found")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    terms = ["bop-flow", "bop-node", "bop-flow-path", "bopFlowTravel"]
    for t in terms:
        print(f"Keyword '{t}' count: {content.count(t)}")

if __name__ == '__main__':
    main()
