import time
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def capture_sidebar():
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
        
        # Save screenshot focusing on the sidebar
        screenshot_path = os.path.join(r"c:\Users\ASUS\Desktop\new portfolio\scratch", "cendrol_updated_sidebar.png")
        driver.save_screenshot(screenshot_path)
        print(f"Saved screenshot: {screenshot_path}")
        
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    capture_sidebar()
