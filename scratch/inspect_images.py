from PIL import Image
import os

media_dir = r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f'
files = [
    'media__1780765387364.png',
    'media__1780765387398.png',
    'media__1780765387403.png',
    'media__1780765387409.png',
    'media__1780765387416.png'
]

for f in files:
    path = os.path.join(media_dir, f)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"File: {f}, Size: {img.size}, Format: {img.format}")
    else:
        print(f"File: {f} not found!")
