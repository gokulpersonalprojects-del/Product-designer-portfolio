import time
import sys

try:
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options
    print("Selenium is installed!")
except ImportError:
    print("Selenium is NOT installed.")
    sys.exit(1)

try:
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    
    # Set up console log capture
    chrome_options.set_capability('goog:loggingPrefs', {'browser': 'ALL'})
    
    driver = webdriver.Chrome(options=chrome_options)
    print("WebDriver initialized successfully!")
    
    url = "https://design.gokulsk.co.in/"
    print(f"Loading URL: {url}")
    driver.get(url)
    print("Page loaded. Waiting 10 seconds for preloader to finish...")
    time.sleep(10)
    
    print("\n--- BROWSER CONSOLE LOGS ---")
    logs = driver.get_log('browser')
    if not logs:
        print("No logs found.")
    else:
        for entry in logs:
            print(f"[{entry['level']}] {entry['timestamp']}: {entry['message']}")
    print("----------------------------\n")
    
    driver.quit()
except Exception as e:
    print("Error during execution:", e)
