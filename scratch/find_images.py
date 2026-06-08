import os
import glob
import time

search_paths = [
    r'c:\Users\ASUS\Desktop\new portfolio',
    r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f'
]

for base_path in search_paths:
    print(f"\nSearching in {base_path}...")
    for root, dirs, files in os.walk(base_path):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.mp4')):
                full_path = os.path.join(root, f)
                mtime = os.path.getmtime(full_path)
                mtime_str = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(mtime))
                size = os.path.getsize(full_path)
                # print if size > 0 and it's not a known static image like sports_tyre
                if size > 0 and 'sports_tyre' not in f and 'prehistoric_rock' not in f and 'circular_rock' not in f and 'gokul_portrait' not in f:
                    print(f"  {f} ({size} bytes, modified: {mtime_str}) -> {full_path}")
