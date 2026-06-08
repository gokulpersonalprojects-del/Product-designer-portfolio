import time
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def run_test():
    print("Initializing headless Chrome for Yooki Case Study flowchart verification...")
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080")
    chrome_options.set_capability('goog:loggingPrefs', {'browser': 'ALL'})
    
    driver = webdriver.Chrome(options=chrome_options)
    success = True
    
    try:
        # Load the Yooki Case Study route directly
        url = "http://localhost:8080/#/project-1"
        print(f"Loading Yooki Case Study URL: {url}")
        driver.get(url)
        
        print("Waiting 8 seconds for preloader to dismiss...")
        time.sleep(8)
        
        # Verify Yooki title is visible
        title = driver.find_element(By.CLASS_NAME, "project-headline")
        print(f"Page title: {title.text}")
        if "Designing" not in title.text and "UPSC" not in title.text:
            print("[ERROR] Page title did not match expected Yooki titles")
            success = False
            
        # Chapter 2 is inside the Solution Path switcher, click Chapter 2 tab first
        print("\nSelecting Chapter 2 in the Solution Path tab switcher...")
        chapter_2_tab = driver.find_element(By.CSS_SELECTOR, ".solution-tab-btn[data-chapter='2']")
        driver.execute_script("arguments[0].click();", chapter_2_tab)
        print("Waiting for Chapter 2 tab transition...")
        time.sleep(1)
        
        # Scroll the flowchart into view so the IntersectionObserver triggers and reveals the elements (opacity -> 1)
        print("Scrolling flowchart container into view...")
        flowchart_container = driver.find_element(By.CLASS_NAME, "ia-flow-container")
        driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'center'});", flowchart_container)
        print("Waiting for scroll-reveal animation...")
        time.sleep(1.5)
        
        # Verify Chapter 2 content is active and visible
        chapter_content = driver.find_element(By.CSS_SELECTOR, ".solution-chapter-content[data-chapter-content='2']")
        content_class = chapter_content.get_attribute("class")
        if "active" not in content_class:
            print("[ERROR] Chapter 2 content was not marked active after clicking the tab.")
            success = False
            
        # Verify flowchart elements are displayed
        print("\nVerifying UPSC Cognitive Pathing Engine flowchart elements under Chapter 2...")
        btn_play = driver.find_element(By.ID, "ws-ia-btn-play")
        btn_reset = driver.find_element(By.ID, "ws-ia-btn-reset")
        btn_topic = driver.find_element(By.ID, "ws-ia-btn-topic")
        search_box = driver.find_element(By.ID, "ia-search-box")
        
        print(f"  Search box displayed: {search_box.is_displayed()}")
        print(f"  Initial Search Topic text: {search_box.text}")
        if search_box.text != "Panchayati Raj":
            print(f"  [ERROR] Expected 'Panchayati Raj', got '{search_box.text}'")
            success = False
            
        # Test Switch Topic
        print("  Clicking 'Switch Topic' button...")
        driver.execute_script("arguments[0].click();", btn_topic)
        time.sleep(0.5)
        print(f"  Updated Search Topic text: {search_box.text}")
        if search_box.text != "Quit India Movement":
            print(f"  [ERROR] Expected 'Quit India Movement' after switch, got '{search_box.text}'")
            success = False
            
        # Test Play/Pause
        print("  Clicking 'Pause' button...")
        play_text = driver.find_element(By.ID, "ws-ia-play-text")
        print(f"  Play button text: {play_text.text}")
        driver.execute_script("arguments[0].click();", btn_play)
        time.sleep(0.5)
        print(f"  Updated Play button text: {play_text.text}")
        if "resume" not in play_text.text.lower():
            print(f"  [ERROR] Play button text did not toggle to Resume!")
            success = False
            
        # Test Clicking Nodes
        print("  Testing Node click pathing...")
        node_details = driver.find_element(By.ID, "node-details")
        driver.execute_script("arguments[0].click();", node_details)
        time.sleep(0.5)
        
        # Verify node-details gained the 'active' class
        node_class = node_details.get_attribute("class")
        print(f"  node-details class: {node_class}")
        if "active" not in node_class:
            print("  [ERROR] node-details did not become active on click!")
            success = False
            
        # Check for browser logs / errors
        logs = driver.get_log('browser')
        for entry in logs:
            if entry['level'] == 'SEVERE' and 'favicon.ico' not in entry['message']:
                print(f"  [BROWSER ERROR] {entry['message']}")
                success = False
                
        if success:
            print("\nSUCCESS: Yooki Case Study flowchart verified successfully with zero console errors!")
        else:
            print("\nFAILURE: Verification failed.")
            sys.exit(1)
            
    except Exception as e:
        print(f"\nEXCEPTION during testing: {e}")
        sys.exit(1)
    finally:
        driver.quit()

if __name__ == "__main__":
    run_test()
