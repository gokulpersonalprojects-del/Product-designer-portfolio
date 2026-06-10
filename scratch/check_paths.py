import re

files_to_check = ['index.html', 'index.css', 'views.js', 'router.js', 'animation.js']
# Match patterns like src="/path" or href="/path" or url("/path")
patterns = [
    r'src\s*=\s*["\']/[^/].*?["\']',
    r'href\s*=\s*["\']/[^/].*?["\']',
    r'url\(\s*["\']?/[^/].*?["\']?\s*\)'
]

for filename in files_to_check:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    found = False
    for pattern in patterns:
        matches = re.findall(pattern, content)
        if matches:
            if not found:
                print(f'{filename} absolute path matches:')
                found = True
            for m in matches:
                print('  ', m)
    if not found:
        print(f'{filename}: OK (all paths are relative)')
