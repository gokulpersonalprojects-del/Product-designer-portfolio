import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def get_ids():
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
        time.sleep(6)
        
        # We can find all elements with data-id or look for c1.png, c2.png, c3.png, c4.png, c5.png
        for filename in ["c1.png", "c2.png", "c3.png", "c4.png", "c5.png"]:
            try:
                el = driver.find_element(By.XPATH, f"//*[text()='{filename}']")
                # Go up parents until we find a data-id
                parent = el
                data_id = None
                for depth in range(10):
                    parent = parent.find_element(By.XPATH, "..")
                    val = parent.get_attribute("data-id")
                    if val:
                        data_id = val
                        break
                print(f"File: {filename} -> ID: {data_id}")
            except Exception as fe:
                print(f"Could not find {filename}: {fe}")
                
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    get_ids()
