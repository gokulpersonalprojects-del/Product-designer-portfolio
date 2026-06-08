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
    success = True
    
    try:
        url = "http://localhost:8080/"
        print(f"Loading base URL: {url}")
        driver.get(url)
        
        print("Waiting 7.5 seconds for the preloader to complete and dismiss...")
        time.sleep(7.5)
        
        print("Navigating to: /project-3")
        driver.execute_script("window.location.hash = '#/project-3';")
        time.sleep(2.0)  # Wait for SPA route transition
        
        # Verify that compliance sandbox is present
        sandboxes = driver.find_elements(By.CLASS_NAME, "bop-compliance-sandbox")
        if not sandboxes:
            print("  [ERROR] bop-compliance-sandbox container not found!")
            success = False
            return
        print("  Found compliance sandbox container.")

        # Find the step items
        step_items = driver.find_elements(By.CLASS_NAME, "bop-compliance-step-item")
        if len(step_items) != 13:
            print(f"  [ERROR] Expected 13 compliance steps, found {len(step_items)}")
            success = False
        else:
            print(f"  Successfully found all 13 compliance steps.")

        # Check default state (Step 1 should be active)
        step1 = step_items[0]
        if "active" not in step1.get_attribute("class"):
            print("  [ERROR] Step 1 is not active by default.")
            success = False
        else:
            print("  Step 1 is active by default.")
            
        # Verify Step 1 highlights fetch card "id" and rule cards "mandatory" & "docs"
        fetch_cards = driver.find_elements(By.XPATH, "//*[@data-fetch-card='id']")
        if fetch_cards and "active-map" in fetch_cards[0].get_attribute("class"):
            print("  Step 1 successfully highlighted 'id' database fetch card.")
        else:
            print("  [ERROR] Step 1 did not highlight 'id' fetch card.")
            success = False

        # Click Step 2: "Eligibility test"
        print("Clicking Step 2 (Eligibility test)...")
        step2 = None
        for step in step_items:
            if step.get_attribute("data-step") == "2":
                step2 = step
                break
        
        if step2:
            driver.execute_script("arguments[0].click();", step2)
            time.sleep(1.0)
            
            # Verify active class shifted to Step 2
            if "active" in step2.get_attribute("class") and "active" not in step1.get_attribute("class"):
                print("  Active class shifted to Step 2.")
            else:
                print("  [ERROR] Step 2 click did not transition active states correctly.")
                success = False
                
            # Verify Step 2 highlights fetch card "profile" and "history", rule card "mandatory" & "risk"
            fetch_profile = driver.find_elements(By.XPATH, "//*[@data-fetch-card='profile']")
            fetch_history = driver.find_elements(By.XPATH, "//*[@data-fetch-card='history']")
            rule_risk = driver.find_elements(By.XPATH, "//*[@data-rule-card='risk']")
            
            if (fetch_profile and "active-map" in fetch_profile[0].get_attribute("class")) and \
               (fetch_history and "active-map" in fetch_history[0].get_attribute("class")) and \
               (rule_risk and "active-map" in rule_risk[0].get_attribute("class")):
                print("  Step 2 successfully highlighted 'profile', 'history', and 'risk' cards.")
            else:
                print("  [ERROR] Step 2 did not highlight the correct bento cards.")
                success = False
        else:
            print("  [ERROR] Step 2 element not found.")
            success = False

        # Click Step 13: "Signature canvas"
        print("Clicking Step 13 (Signature canvas)...")
        step13 = None
        for step in step_items:
            if step.get_attribute("data-step") == "13":
                step13 = step
                break
                
        if step13:
            driver.execute_script("arguments[0].click();", step13)
            time.sleep(1.0)
            
            # Verify active class shifted to Step 13
            if "active" in step13.get_attribute("class"):
                print("  Active class shifted to Step 13.")
            else:
                print("  [ERROR] Step 13 click did not transition active states correctly.")
                success = False

            # Verify Step 13 highlights fetch card "profile" and "id"
            fetch_profile = driver.find_elements(By.XPATH, "//*[@data-fetch-card='profile']")
            fetch_id = driver.find_elements(By.XPATH, "//*[@data-fetch-card='id']")
            
            if (fetch_profile and "active-map" in fetch_profile[0].get_attribute("class")) and \
               (fetch_id and "active-map" in fetch_id[0].get_attribute("class")):
                print("  Step 13 successfully highlighted 'profile' and 'id' fetch cards.")
            else:
                print("  [ERROR] Step 13 did not highlight 'profile' and 'id' cards.")
                success = False
        else:
            print("  [ERROR] Step 13 element not found.")
            success = False
            
        # Check for browser logs / exceptions
        logs = driver.get_log('browser')
        for entry in logs:
            if entry['level'] == 'SEVERE' and 'favicon.ico' not in entry['message']:
                print(f"  [SEVERE CONSOLE ERROR] {entry['message']}")
                success = False
                
        if success:
            print("\nSUCCESS: Interactive compliance deck functional tests completed with NO errors!")
        else:
            print("\nFAILURE: Interactive compliance deck tests failed.")
            sys.exit(1)
            
    except Exception as e:
        print(f"\nEXCEPTION during testing: {e}")
        sys.exit(1)
    finally:
        driver.quit()

if __name__ == "__main__":
    run_test()
