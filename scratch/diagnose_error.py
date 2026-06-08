from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.set_capability('goog:loggingPrefs', {'browser': 'ALL'})
    
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        url = "http://localhost:8080"
        print(f"Navigating to {url}...")
        driver.get(url)
        time.sleep(7)  # Wait for page to load and preloader to run
        
        print("\n--- Browser Console Logs ---")
        logs = driver.get_log("browser")
        if not logs:
            print("No console logs found.")
        for log in logs:
            print(f"[{log['level']}] {log['message']}")
            
        print("\nPage Title:", driver.title)
        print("Body HTML Length:", len(driver.page_source))
        
        # Check app-view content
        app_view = driver.find_element("id", "app-view")
        print("\n--- #app-view Inner HTML ---")
        print(app_view.get_attribute("innerHTML").strip())
        
        # Check preloader element
        try:
            preloader = driver.find_element("id", "preloader")
            print("\nPreloader element still exists: True")
            print("Preloader class list:", preloader.get_attribute("class"))
        except:
            print("\nPreloader element still exists: False")
            
        print("\nBody class list:", driver.find_element("tag name", "body").get_attribute("class"))
        
        # Take a screenshot
        screenshot_path = "scratch/diagnostic_screenshot.png"
        driver.save_screenshot(screenshot_path)
        print(f"\nScreenshot saved to {screenshot_path}")
        
    except Exception as e:
        print("An error occurred during diagnosis:", e)
    finally:
        driver.quit()

if __name__ == '__main__':
    main()
