import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def find_text():
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
        
        # Search for elements containing c1.png
        els = driver.find_elements(By.XPATH, "//*[contains(text(), 'c1.png') or contains(text(), 'c2.png')]")
        print(f"Found {len(els)} elements containing c1.png or c2.png")
        for i, el in enumerate(els):
            print(f"Match {i}: tag={el.tag_name}, class={el.get_attribute('class')}, text='{el.text}'")
            # Let's print some parent elements or attributes
            parent = el
            for depth in range(3):
                try:
                    parent = parent.find_element(By.XPATH, "..")
                    print(f"  Parent depth {depth+1}: tag={parent.tag_name}, class={parent.get_attribute('class')}, id={parent.get_attribute('id')}, data-id={parent.get_attribute('data-id')}")
                except Exception as pe:
                    print(f"  Error getting parent: {pe}")
                    break
                    
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    find_text()
