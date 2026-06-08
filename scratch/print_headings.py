import re

def print_headings(text, label):
    print('===', label, '===')
    headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', text, re.DOTALL)
    for h in headings:
        clean = re.sub(r'\s+', ' ', h).strip()
        print('  Heading:', clean)

with open('views.js', 'r', encoding='utf-8') as f:
    content = f.read()

p1_start = content.find('export function renderProject1()')
p2_start = content.find('export function renderProject2()')
p3_start = content.find('export function renderProject3()')
p4_start = content.find('export function renderProject4()')

print_headings(content[p1_start:p2_start], 'PROJECT 1')
print_headings(content[p2_start:p3_start], 'PROJECT 2')
print_headings(content[p3_start:p4_start], 'PROJECT 3')
