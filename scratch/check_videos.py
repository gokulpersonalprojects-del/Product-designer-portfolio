import os

videos = [
    'cendrol_thumbnail.mp4',
    'cendrol_video1.mp4',
    'cendrol_video2.mp4',
    'cendrol_video3.mp4',
    'cendrol_video4.mp4',
    'cendrol_video5.mp4',
    'cendrol_video6.mp4'
]

dest_dir = r'c:\Users\ASUS\Desktop\new portfolio'

for v in videos:
    path = os.path.join(dest_dir, v)
    if not os.path.exists(path):
        print(f"Error: {v} is missing!")
        continue
    
    size = os.path.getsize(path)
    print(f"File: {v}, Size: {size} bytes")
    
    # Check signature
    try:
        with open(path, 'rb') as f:
            header = f.read(16)
            if b'ftyp' in header:
                print(f"  -> Signature OK (header contains 'ftyp')")
            else:
                print(f"  -> WARNING: Missing 'ftyp' in header! Header: {header}")
    except Exception as e:
        print(f"  -> Error reading file: {e}")
