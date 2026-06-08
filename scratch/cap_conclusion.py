import time
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    opts = Options()
    opts.add_argument('--headless')
    opts.add_argument('--no-sandbox')
    opts.add_argument('--disable-dev-shm-usage')
    opts.add_argument('--window-size=1440,900')
    driver = webdriver.Chrome(options=opts)
    try:
        driver.get('http://localhost:8080/#/project-1')
        time.sleep(6)
        chapters = driver.find_elements(By.CSS_SELECTOR, '.body-chapter')
        print(f'Found {len(chapters)} body-chapter sections')
        last = chapters[-1]
        driver.execute_script('arguments[0].scrollIntoView({block: "center"});', last)
        time.sleep(0.8)
        driver.save_screenshot('scratch/yooki_conclusion.png')
        print('Saved: scratch/yooki_conclusion.png')
    finally:
        driver.quit()

if __name__ == '__main__':
    main()
