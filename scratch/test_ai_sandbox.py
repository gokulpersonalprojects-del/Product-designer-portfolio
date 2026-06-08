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
        # Load local server Yooki Case study
        driver.get("http://localhost:8080/#/project-1")
        time.sleep(3)
        
        # Click on Chapter 3 Tab
        print("Clicking Chapter 3 Tab...")
        tab3 = driver.find_element(By.CSS_SELECTOR, ".solution-tab-btn[data-chapter='3']")
        driver.execute_script("arguments[0].click();", tab3)
        time.sleep(1)
        
        # Click on first prompt chip
        print("Clicking first prompt chip...")
        chip = driver.find_element(By.CSS_SELECTOR, ".prompt-chip[data-prompt='polity']")
        driver.execute_script("arguments[0].click();", chip)
        
        print("Waiting for typewriter animation to complete...")
        time.sleep(5) # wait for typing to finish
        
        # Get response bubble elements
        bubble = driver.find_element(By.ID, "ai-response-bubble")
        html = bubble.get_attribute("outerHTML")
        print("\n=== RESPONSE BUBBLE HTML ===")
        print(html)
        
        # Get computed styles
        display = driver.execute_script("return window.getComputedStyle(arguments[0]).display;", bubble)
        flex_dir = driver.execute_script("return window.getComputedStyle(arguments[0]).flexDirection;", bubble)
        width = driver.execute_script("return window.getComputedStyle(arguments[0]).width;", bubble)
        print(f"\nComputed Display: {display}")
        print(f"Computed Flex Direction: {flex_dir}")
        print(f"Computed Width: {width}")
        
        # Capture screenshot of the sandbox area
        sandbox = driver.find_element(By.CLASS_NAME, "ai-dialogue-sandbox")
        # Scroll it into view
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", sandbox)
        time.sleep(0.5)
        
        # Save screenshot
        driver.save_screenshot("scratch/ai_sandbox_test.png")
        print("\nScreenshot saved to scratch/ai_sandbox_test.png")
        
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    main()
