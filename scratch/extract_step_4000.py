import json
import re

def main():
    step_target = 4000
    found_content = None
    
    with open(r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
        for line in f:
            obj = json.loads(line)
            if obj.get('step_index') == step_target:
                found_content = obj.get('content') or ''
                break
                
    if not found_content:
        print(f"Step {step_target} not found in transcript.")
        return
        
    print(f"Found step {step_target} content, length: {len(found_content)}")
    
    # Strip line numbers from the text, e.g. "1560: text"
    lines = found_content.split('\n')
    clean_lines = []
    
    pattern = re.compile(r'^\s*\d+:\s?(.*)$')
    
    for l in lines:
        match = pattern.match(l)
        if match:
            clean_lines.append(match.group(1))
        else:
            # Keep lines that do not have a line number prefix (like header info) as comments
            if not l.startswith('Created At:') and not l.startswith('Completed At:') and not l.startswith('File Path:') and not l.startswith('Total Lines:') and not l.startswith('Total Bytes:') and not l.startswith('Showing lines') and not l.startswith('The following code has been modified'):
                clean_lines.append(l)
                
    output_path = 'scratch/restored_step_4000.js'
    with open(output_path, 'w', encoding='utf-8') as out:
        out.write('\n'.join(clean_lines))
        
    print(f"Cleaned code written to {output_path}")

if __name__ == '__main__':
    main()
