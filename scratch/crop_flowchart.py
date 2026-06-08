import os
from PIL import Image

image_path = r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f\media__1780851692987.png'
output_dir = 'scratch'

if os.path.exists(image_path):
    img = Image.open(image_path)
    w, h = img.size
    print(f"Original image size: {w}x{h}")
    
    # Let's crop into 4 horizontal sections (left to right)
    num_sections = 4
    section_w = w // num_sections
    
    for i in range(num_sections):
        left = i * section_w
        right = (i + 1) * section_w if i < num_sections - 1 else w
        box = (left, 0, right, h)
        cropped = img.crop(box)
        cropped_path = os.path.join(output_dir, f'flowchart_part_{i+1}.png')
        cropped.save(cropped_path)
        print(f"Saved flowchart section {i+1} to {cropped_path}")
else:
    print("Flowchart image not found!")
