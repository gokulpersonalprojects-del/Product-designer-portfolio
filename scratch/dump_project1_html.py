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
    print("Loading https://gokulux.framer.website/project-1...")
    driver.get("https://gokulux.framer.website/project-1")
    time.sleep(5)  # Wait for Framer client-side rendering
    
    # Get all text
    body_text = driver.find_element(By.TAG_NAME, "body").text
    print("\n=== BODY TEXT ===")
    print(body_text)
    print("=== END BODY TEXT ===\n")
    
    # Get all images
    images = driver.find_elements(By.TAG_NAME, "img")
    print(f"Found {len(images)} images:")
    for idx, img in enumerate(images):
        src = img.get_attribute("src")
        alt = img.get_attribute("alt")
        print(f"Image {idx+1}: alt='{alt}', src='{src}'")
        
    driver.quit()

if __name__ == "__main__":
    main()
