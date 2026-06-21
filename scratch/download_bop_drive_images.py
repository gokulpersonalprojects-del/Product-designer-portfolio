import urllib.request
import os

# Drive file IDs mapped to local destination filenames
images = [
    ("1RXq_HAVGTx9eTJFmGaUOBBUWpqnGcjb8", "bop_problem_image.png"),
    ("1L_OHkvRM44SLbKaEAy8Jx4OfmWeYMdUk",  "bop_screen2.png"),
    ("1UOEb7mRH-BMtqddIbvApv_rw01dVLpdB",  "bop_screen3.png"),
    ("1szDSPDWTBNHJ0SbG_bnhiwjce_3wawKV",  "bop_screen4.png"),
    ("1Us3t27TUtELMYsE1G2LbCZcS-QGOX1Nl",  "bop_transparent_before.png"),
    ("1ZGHB1YhFm83ED89a0BAPrZWKA4ralmE9",  "bop_reduce_complexity_before.png"),
]

dest_dir = os.path.join(os.path.dirname(__file__), "..")

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

for file_id, filename in images:
    url = f"https://drive.google.com/uc?export=download&id={file_id}"
    dest = os.path.normpath(os.path.join(dest_dir, filename))
    print(f"Downloading {filename} ...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        # Check if we got an HTML page (auth/virus warning) instead of an image
        if data[:4] in (b'\x89PNG', b'\xff\xd8\xff', b'GIF8', b'RIFF', b'BM\x00', b'\x00\x00\x01\x00'):
            with open(dest, "wb") as f:
                f.write(data)
            print(f"  OK Saved {filename} ({len(data)//1024} KB)")
        elif data[:15] == b'<!DOCTYPE html>' or b'<html' in data[:100]:
            # Try the confirm download URL (for large files with virus scan warning)
            import re
            match = re.search(rb'confirm=([0-9A-Za-z_\-]+)', data)
            if match:
                confirm = match.group(1).decode()
                url2 = f"https://drive.google.com/uc?export=download&confirm={confirm}&id={file_id}"
                req2 = urllib.request.Request(url2, headers=headers)
                with urllib.request.urlopen(req2, timeout=30) as resp2:
                    data2 = resp2.read()
                with open(dest, "wb") as f:
                    f.write(data2)
                print(f"  OK Saved {filename} ({len(data2)//1024} KB) [via confirm]")
            else:
                print(f"  FAIL Got HTML page, no confirm token found for {filename}")
        else:
            with open(dest, "wb") as f:
                f.write(data)
            print(f"  OK Saved {filename} ({len(data)//1024} KB) [unknown format]")
    except Exception as e:
        print(f"  FAIL Failed: {e}")

print("\nDone.")
