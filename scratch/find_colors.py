import re
import os

hex_regex = re.compile(r'#[0-9a-fA-F]{3,8}')
rgb_regex = re.compile(r'rgba?\(.*?\)')
hsl_regex = re.compile(r'hsla?\(.*?\)')

# Target files
files = ['index.html', 'index.css', 'views.js']
workspace_dir = r'c:\Users\ASUS\Desktop\new portfolio'

print("=== COLOR SCAN RESULTS ===")

for fname in files:
    path = os.path.join(workspace_dir, fname)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f, 1):
            line_str = line.strip()
            # check for hex, rgb, hsl, or inline color names that aren't variables
            # We filter out standard #ffffff, #000000, #fff, #000, var(--...)
            hex_matches = [m for m in hex_regex.findall(line_str) if m.lower() not in ['#ffffff', '#000000', '#fff', '#000']]
            rgb_matches = rgb_regex.findall(line_str)
            hsl_matches = [m for m in hsl_regex.findall(line_str) if 'var(--' not in m]
            
            # Print if we find anything interesting
            if hex_matches or rgb_matches or hsl_matches:
                # Filter out lines in index.css that are theme definitions or normal rules (we focus on views.js and index.html, or key things in index.css)
                if fname == 'index.css' and i < 110:
                    # skip variable declaration block at start of index.css
                    continue
                # Also skip some common css layout properties if not color
                if hex_matches or rgb_matches or hsl_matches:
                    print(f"{fname}:{i}: {line_str}")
