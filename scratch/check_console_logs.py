import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def check_logs():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.set_capability('goog:loggingPrefs', {'browser': 'ALL'})
    
    driver = webdriver.Chrome(options=chrome_options)
    try:
        url = "http://localhost:8080/#/project-2"
        print(f"Loading URL: {url}")
        driver.get(url)
        time.sleep(9)
        
        logs = driver.get_log('browser')
        print(f"Found {len(logs)} browser console logs:")
        has_severe = False
        for entry in logs:
            print(f"  [{entry['level']}] {entry['message']}")
            if entry['level'] == 'SEVERE':
                has_severe = True
        if not has_severe:
            print("SUCCESS: No severe console errors found!")
        else:
            print("WARNING: Severe console errors found.")
            
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    check_logs()
