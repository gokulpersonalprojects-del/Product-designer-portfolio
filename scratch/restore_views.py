import os
import re

def main():
    line_map = {}
    
    # We look for lines in found_*.txt and definition_*.js
    files_to_scan = []
    for f in os.listdir('scratch'):
        if (f.startswith('found_') and f.endswith('.txt')) or (f.startswith('definition_') and f.endswith('.js')):
            files_to_scan.append(os.path.join('scratch', f))
            
    print(f"Scanning {len(files_to_scan)} files in scratch...")
    
    pattern = re.compile(r'^\s*(\d+):\s?(.*)$')
    
    for path in files_to_scan:
        try:
            with open(path, 'r', encoding='utf-8') as f:
                for line in f:
                    match = pattern.match(line)
                    if match:
                        line_num = int(match.group(1))
                        line_content = match.group(2)
                        
                        # Only keep lines in the range of initializers: 900 to 1950 (pre-replacement)
                        # We map it to avoid conflicts from different versions if line numbers shifted,
                        # but let's store it per file or keep the latest version.
                        if 900 <= line_num <= 1960:
                            # If we have multiple versions of the same line, let's store them
                            if line_num not in line_map:
                                line_map[line_num] = []
                            line_map[line_num].append((path, line_content))
        except Exception as e:
            pass
            
    print(f"Total unique lines recovered in range 900-1960: {len(line_map)}")
    
    # Let's write the recovered lines sorted by line number
    with open('scratch/reconstructed_lines.txt', 'w', encoding='utf-8') as out:
        for num in sorted(line_map.keys()):
            # For each line, print the line number, the source file, and content
            sources = ", ".join([os.path.basename(x[0]) for x in line_map[num]])
            # Keep first occurrence as representative
            rep_content = line_map[num][0][1]
            out.write(f"{num}: {rep_content}  // Source: {sources}\n")
            
    print("Reconstructed lines written to scratch/reconstructed_lines.txt")

if __name__ == '__main__':
    main()
