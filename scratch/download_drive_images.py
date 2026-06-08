import urllib.request
import os

def download_file(file_id, dest_path):
    url = f"https://drive.google.com/uc?export=download&id={file_id}"
    print(f"Downloading {url} to {dest_path}...")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response, open(dest_path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded successfully! Size: {os.path.getsize(dest_path)} bytes")
    except Exception as e:
        print(f"Failed to download {file_id}: {e}")

def main():
    files = {
        "cendrol_c1.png": "1nM9wXZnzKo7T4gnO1gCm7hDv5fEqN1Ub",
        "cendrol_c2.png": "1dOPvR1ixDMAS3zU3woExaBaee20xcWKh",
        "cendrol_c3.png": "17Ep3-ucAj9sqpPMHv7XIHEL7RIduxU8F",
        "cendrol_c4.png": "1OOWXhPMPiBhABKkz6w5h7Xlm7aJwebGa",
        "cendrol_c5.png": "1MIk_cU4TJcIdJ-1kV3pEPjw356seR_Ij"
    }
    
    dest_dir = r"c:\Users\ASUS\Desktop\new portfolio"
    for filename, file_id in files.items():
        dest_path = os.path.join(dest_dir, filename)
        download_file(file_id, dest_path)

if __name__ == "__main__":
    main()
