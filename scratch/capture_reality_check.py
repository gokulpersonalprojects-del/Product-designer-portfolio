import time
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def capture_reality_check():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080")
    
    driver = webdriver.Chrome(options=chrome_options)
    try:
        url = "http://localhost:8080/#/project-2"
        print(f"Loading URL: {url}")
        driver.get(url)
        
        print("Waiting 8 seconds for page preloader...")
        time.sleep(8)
        
        # Find the reality check section
        sections = driver.find_elements(By.XPATH, "//h2[text()='Design Reality Check']")
        if not sections:
            print("ERROR: Design Reality Check heading not found!")
            return
            
        print("Scrolling to Design Reality Check heading...")
        driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'center'});", sections[0])
        time.sleep(2)
        
        # Save screenshot
        screenshot_path = os.path.join(r"c:\Users\ASUS\Desktop\new portfolio\scratch", "cendrol_reality_check.png")
        driver.save_screenshot(screenshot_path)
        print(f"Saved screenshot: {screenshot_path}")
        
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    capture_reality_check()
