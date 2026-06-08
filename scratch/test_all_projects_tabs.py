import time
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def run_test():
    print("Initializing headless Chrome...")
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080")
    chrome_options.set_capability('goog:loggingPrefs', {'browser': 'ALL'})
    
    driver = webdriver.Chrome(options=chrome_options)
    
    projects = ["/project-1", "/project-2", "/project-3", "/project-4"]
    success = True
    
    try:
        # Load the home page first
        url = "http://localhost:8080/"
        print(f"Loading base URL: {url}")
        driver.get(url)
        
        print("Waiting 7.5 seconds for the preloader to complete and dismiss...")
        time.sleep(7.5)
        
        # Verify that preloader is gone
        preloaders = driver.find_elements(By.ID, "preloader")
        if preloaders:
            print("  [WARNING] Preloader element still in DOM, checking display status...")
            if preloaders[0].is_displayed():
                print("  [ERROR] Preloader is still visible!")
                success = False
        else:
            print("  Preloader removed from DOM successfully.")
            
        for project in projects:
            print(f"\nNavigating to: {project}")
            driver.execute_script("window.location.hash = arguments[0];", f"#{project}")
            time.sleep(1.5)  # Wait for SPA route transition
            
            # Check for console errors
            logs = driver.get_log('browser')
            for entry in logs:
                if entry['level'] == 'SEVERE' and 'favicon.ico' not in entry['message']:
                    print(f"  [ERROR BEFORE CLICK] {entry['message']}")
                    success = False
            
            # Find the tabs container
            containers = driver.find_elements(By.CLASS_NAME, "solution-path-container")
            if not containers:
                print("  [ERROR] solution-path-container not found!")
                success = False
                continue
            
            # Find the buttons
            buttons = driver.find_elements(By.CLASS_NAME, "solution-tab-btn")
            expected_buttons = 4 if project == "/project-1" else 3
            if len(buttons) != expected_buttons:
                print(f"  [ERROR] Expected {expected_buttons} tab buttons, found {len(buttons)}")
                success = False
                continue
            
            print("  Found 3 tab buttons. Testing clicks...")
            
            # Test Chapter 2 click
            btn_ch2 = None
            for btn in buttons:
                if btn.get_attribute("data-chapter") == "2":
                    btn_ch2 = btn
                    break
            
            if btn_ch2:
                print("  Clicking Chapter 2 tab via JS...")
                driver.execute_script("arguments[0].click();", btn_ch2)
                time.sleep(1.0) # wait for smooth transition
                
                # Check active status of chapter contents
                contents = driver.find_elements(By.CLASS_NAME, "solution-chapter-content")
                ch1_active = False
                ch2_active = False
                for content in contents:
                    ch_num = content.get_attribute("data-chapter-content")
                    is_active = "active" in content.get_attribute("class")
                    if ch_num == "1" and is_active:
                        ch1_active = True
                    if ch_num == "2" and is_active:
                        ch2_active = True
                
                if not ch2_active or ch1_active:
                    print(f"  [ERROR] Chapter 2 click state invalid (ch2_active={ch2_active}, ch1_active={ch1_active})")
                    success = False
                else:
                    print("  Chapter 2 successfully activated!")
            else:
                print("  [ERROR] Chapter 2 button not found!")
                success = False
                
            # Test Chapter 3 click
            btn_ch3 = None
            for btn in buttons:
                if btn.get_attribute("data-chapter") == "3":
                    btn_ch3 = btn
                    break
                    
            if btn_ch3:
                print("  Clicking Chapter 3 tab via JS...")
                driver.execute_script("arguments[0].click();", btn_ch3)
                time.sleep(1.0)
                
                # Check active status
                contents = driver.find_elements(By.CLASS_NAME, "solution-chapter-content")
                ch2_active = False
                ch3_active = False
                for content in contents:
                    ch_num = content.get_attribute("data-chapter-content")
                    is_active = "active" in content.get_attribute("class")
                    if ch_num == "2" and is_active:
                        ch2_active = True
                    if ch_num == "3" and is_active:
                        ch3_active = True
                
                if not ch3_active or ch2_active:
                    print(f"  [ERROR] Chapter 3 click state invalid (ch3_active={ch3_active}, ch2_active={ch2_active})")
                    success = False
                else:
                    print("  Chapter 3 successfully activated!")
            else:
                print("  [ERROR] Chapter 3 button not found!")
                success = False
                
            # Check for console errors after clicks
            logs = driver.get_log('browser')
            for entry in logs:
                if entry['level'] == 'SEVERE' and 'favicon.ico' not in entry['message']:
                    print(f"  [ERROR AFTER CLICK] {entry['message']}")
                    success = False
                    
        if success:
            print("\nSUCCESS: All projects solution tabs verified successfully and no console errors found!")
        else:
            print("\nFAILURE: Tab tests completed with errors.")
            sys.exit(1)
            
    except Exception as e:
        print(f"\nEXCEPTION during testing: {e}")
        sys.exit(1)
    finally:
        driver.quit()

if __name__ == "__main__":
    run_test()
