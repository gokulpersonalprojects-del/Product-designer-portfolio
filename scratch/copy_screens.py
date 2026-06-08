import shutil
import os

media_dir = r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f'
files = [
    'media__1780765387364.png',
    'media__1780765387398.png',
    'media__1780765387403.png',
    'media__1780765387409.png',
    'media__1780765387416.png'
]
dest_dir = r'c:\Users\ASUS\Desktop\new portfolio'

for idx, f in enumerate(files):
    src = os.path.join(media_dir, f)
    dst = os.path.join(dest_dir, f'bop_screen{idx+1}.png')
    if os.path.exists(src):
        print(f"Copying {src} -> {dst}")
        shutil.copyfile(src, dst)
    else:
        print(f"Source file {src} not found!")
print("Done copying screens!")
