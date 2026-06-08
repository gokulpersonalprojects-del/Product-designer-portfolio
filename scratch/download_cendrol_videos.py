import urllib.request
import os
import sys

videos = {
    'cendrol_thumbnail.mp4': 'https://drive.google.com/uc?export=download&id=1GhcIcuWdW-ppLtK0aJ52jdcUBdCLiyLb',
    'cendrol_video1.mp4': 'https://framerusercontent.com/assets/mYPTiswtqcC9hDxMgdbGcpoWVT8.mp4',
    'cendrol_video2.mp4': 'https://framerusercontent.com/assets/TZ7ytTpVPqZXYUNLzkUDLc53Lo.mp4',
    'cendrol_video3.mp4': 'https://framerusercontent.com/assets/gvs4iy707THZIQJkJhwi7f0vU4.mp4',
    'cendrol_video4.mp4': 'https://framerusercontent.com/assets/p4j0AqBiupO0NvSzNiUmIDiyMM.mp4',
    'cendrol_video5.mp4': 'https://framerusercontent.com/assets/uprluZWUo2fOOM7JyDmVgfNyII.mp4',
    'cendrol_video6.mp4': 'https://framerusercontent.com/assets/P9LeKh4t0jWLrI4VLc1lNFz1o.mp4'
}

dest_dir = r'c:\Users\ASUS\Desktop\new portfolio'

def report_progress(block_num, block_size, total_size):
    read_so_far = block_num * block_size
    if total_size > 0:
        percent = min(100, read_so_far * 100 / total_size)
        sys.stdout.write(f"\rProgress: {percent:.1f}% ({read_so_far}/{total_size} bytes)")
    else:
        sys.stdout.write(f"\rProgress: {read_so_far} bytes")
    sys.stdout.flush()

for name, url in videos.items():
    dest_path = os.path.join(dest_dir, name)
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 100000:
        print(f"\n{name} already exists and is valid. Skipping.")
        continue
    print(f"\nDownloading {url} -> {dest_path}")
    try:
        # Some CDNs or Google Drive might block basic user-agents
        opener = urllib.request.build_opener()
        opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')]
        urllib.request.install_opener(opener)
        
        urllib.request.urlretrieve(url, dest_path, reporthook=report_progress)
        print(f"\nSuccessfully downloaded {name}")
    except Exception as e:
        print(f"\nFailed to download {name}: {e}")
