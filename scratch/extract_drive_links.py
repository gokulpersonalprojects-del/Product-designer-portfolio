import time
import re
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def extract_links():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080")
    
    driver = webdriver.Chrome(options=chrome_options)
    try:
        url = "https://drive.google.com/drive/folders/1WkYbuMDItdk7U-Zgy9trdbuDdcBzjFDG?usp=drive_link"
        print(f"Loading URL: {url}")
        driver.get(url)
        time.sleep(6) # wait longer to ensure elements render
        
        # Print all href links
        anchors = driver.find_elements(By.TAG_NAME, "a")
        print(f"Found {len(anchors)} anchors")
        
        # Search page source for file links
        html = driver.page_source
        file_ids = re.findall(r'/file/d/([a-zA-Z0-9_-]+)', html)
        print(f"Found file IDs in HTML source: {set(file_ids)}")
        
        # Let's search inside elements
        for i, a in enumerate(anchors):
            href = a.get_attribute("href") or ""
            text = a.text.strip()
            if "file/d/" in href or "folder/" in href or "c" in text:
                print(f"Anchor {i}: text='{text}', href='{href}'")
                
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    extract_links()
