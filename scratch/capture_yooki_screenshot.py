import time
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def capture_screenshots():
    print("Initializing headless Chrome for screenshot capture...")
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1200,1000") # Match a standard desktop resolution
    
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        url = "http://localhost:8080/#/project-1"
        print(f"Navigating to {url}")
        driver.get(url)
        
        print("Waiting 8 seconds for preloader to dismiss...")
        time.sleep(8)
        
        # Capture top of page
        driver.save_screenshot("scratch/yooki_01_top.png")
        print("Captured top of page screenshot.")
        
        # Find the Solution Path tab switcher and scroll to it
        tabs_container = driver.find_element(By.CLASS_NAME, "solution-path-container")
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", tabs_container)
        time.sleep(1)
        driver.save_screenshot("scratch/yooki_02_tabs.png")
        print("Captured tab switcher area screenshot.")
        
        # Click Chapter 2
        chapter_2_tab = driver.find_element(By.CSS_SELECTOR, ".solution-tab-btn[data-chapter='2']")
        driver.execute_script("arguments[0].click();", chapter_2_tab)
        time.sleep(1.5)
        
        # Scroll flowchart into view
        flowchart = driver.find_element(By.CLASS_NAME, "ia-flow-container")
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", flowchart)
        time.sleep(1)
        driver.save_screenshot("scratch/yooki_03_chapter2_flowchart.png")
        print("Captured Chapter 2 flowchart screenshot.")
        
    except Exception as e:
        print(f"Error occurred: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    capture_screenshots()
