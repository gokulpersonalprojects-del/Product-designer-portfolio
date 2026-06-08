import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def test_drive():
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
        time.sleep(5)
        
        # Save a screenshot to see if it loaded
        screenshot_path = r"c:\Users\ASUS\Desktop\new portfolio\scratch\drive_screenshot.png"
        driver.save_screenshot(screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")
        
        # Print page title
        print(f"Page Title: {driver.title}")
        
        # Look for elements containing file names or links
        elements = driver.find_elements(By.XPATH, "//div[@role='row'] | //a | //div[contains(@class, 'name')]")
        print(f"Found {len(elements)} elements")
        for i, el in enumerate(elements[:20]):
            text = el.text.strip()
            href = el.get_attribute("href")
            print(f"{i}: Text: {text[:50]}, Href: {href}")
            
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    test_drive()
