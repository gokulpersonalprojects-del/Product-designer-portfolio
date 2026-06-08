with open(r'c:\Users\ASUS\Desktop\new portfolio\views.js', encoding='utf-8') as f:
    content = f.read()

start = content.find('class="cendrol-scroll-section"')
if start != -1:
    # Find matching closing section
    end = content.find('</section>', start)
    print(content[start-50:end+10])
else:
    print("Not found")
