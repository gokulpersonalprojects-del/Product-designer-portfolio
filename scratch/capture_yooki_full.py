import time
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080")
    
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        driver.get("http://localhost:8080/#/project-1")
        time.sleep(5)  # Wait for preloader
        
        # Scroll to the flowchart (interaction model section)
        flowchart = driver.find_element(By.CLASS_NAME, "ia-flow-container")
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", flowchart)
        time.sleep(1)
        
        driver.save_screenshot("scratch/yooki_flowchart_visible.png")
        print("Screenshot saved: scratch/yooki_flowchart_visible.png")
        
        # Now scroll to the solution path tabs
        tab_container = driver.find_element(By.CLASS_NAME, "solution-path-container")
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", tab_container)
        time.sleep(0.5)
        
        driver.save_screenshot("scratch/yooki_tabs_4chapters.png")
        print("Screenshot saved: scratch/yooki_tabs_4chapters.png")
        
        # Click Chapter 4 and check AI sandbox
        tab4 = driver.find_element(By.CSS_SELECTOR, ".solution-tab-btn[data-chapter='4']")
        driver.execute_script("arguments[0].click();", tab4)
        time.sleep(1)
        
        sandbox = driver.find_element(By.CLASS_NAME, "ai-dialogue-sandbox")
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", sandbox)
        time.sleep(0.5)
        
        driver.save_screenshot("scratch/yooki_chapter4_ai.png")
        print("Screenshot saved: scratch/yooki_chapter4_ai.png")
        
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    main()
