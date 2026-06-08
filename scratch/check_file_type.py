import urllib.request
import urllib.parse

id = "1GhcIcuWdW-ppLtK0aJ52jdcUBdCLiyLb"
url = f"https://drive.google.com/uc?export=download&id={id}"

try:
    req = urllib.request.Request(url, method='HEAD')
    with urllib.request.urlopen(req) as resp:
        headers = resp.info()
        print("Content-Type:", headers.get('Content-Type'))
        print("Content-Disposition:", headers.get('Content-Disposition'))
        print("Content-Length:", headers.get('Content-Length'))
except Exception as e:
    # If HEAD method is not supported, try normal GET but just read headers
    try:
        with urllib.request.urlopen(url) as resp:
            headers = resp.info()
            print("Content-Type (GET):", headers.get('Content-Type'))
            print("Content-Disposition (GET):", headers.get('Content-Disposition'))
            print("Content-Length (GET):", headers.get('Content-Length'))
    except Exception as e2:
        print("Error Probing:", e2)
