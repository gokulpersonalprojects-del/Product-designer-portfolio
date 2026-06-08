import re

file_path = r"c:\Users\ASUS\Desktop\new portfolio\scratch\project_code.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's search for image links and nearby text.
# The code is compiled but we can find image references and output the surrounding lines or characters.
images = re.findall(r'(https://framerusercontent\.com/images/[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+)', content)
images = list(set(images))

print("=== IMAGE TO TEXT CORRELATION ===")
for img in images:
    pos = content.find(img)
    if pos != -1:
        # print 500 characters around the image occurrence to find the context
        context = content[max(0, pos-400):min(len(content), pos+400)]
        # clean up context (remove long numbers, CSS declarations)
        context_clean = re.sub(r'[\{\}\[\]\(\)\:\;\,]', ' ', context)
        context_clean = re.sub(r'\s+', ' ', context_clean)
        
        # Extract any english words nearby
        words = re.findall(r'[a-zA-Z\s\-]{8,100}', context_clean)
        words_clean = [w.strip() for w in words if len(w.strip()) > 8]
        
        print(f"\nImage: {img}")
        print("Context Words:", words_clean[:15])
