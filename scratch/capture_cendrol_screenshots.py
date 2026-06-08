import time
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def capture_screenshots():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080")
    
    driver = webdriver.Chrome(options=chrome_options)
    try:
        url = "http://localhost:8080/#/project-2"
        print(f"Loading URL: {url}")
        driver.get(url)
        
        print("Waiting 8 seconds for preloader and rendering...")
        time.sleep(8)
        
        # Check if project 2 page is loaded
        # Scroll to the scroll section
        section = driver.find_element(By.CLASS_NAME, "cendrol-scroll-section")
        driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'start'});", section)
        time.sleep(2)
        
        # Let's take screenshots at different scroll progress values: 0.0, 0.25, 0.5, 0.75, 0.95
        progress_values = [0.0, 0.25, 0.5, 0.75, 0.95]
        for i, progress in enumerate(progress_values):
            print(f"Scrolling to progress {progress}...")
            driver.execute_script(f"""
                const section = document.querySelector('.cendrol-scroll-section');
                const sectionRect = section.getBoundingClientRect();
                const sectionHeight = section.offsetHeight;
                const totalScrollable = sectionHeight - window.innerHeight;
                // scroll to matching position
                const targetScroll = window.scrollY + sectionRect.top + ( {progress} * totalScrollable );
                window.scrollTo(0, targetScroll);
            """)
            time.sleep(2) # wait for transition to complete
            
            # Print which visual item is active
            active_item = driver.execute_script("""
                const visuals = document.querySelectorAll('.cendrol-visual-item');
                let activeIdx = -1;
                visuals.forEach((v, idx) => {
                    if (v.classList.contains('active')) {
                        activeIdx = idx;
                    }
                });
                return activeIdx;
            """)
            print(f"Active visual index: {active_item}")
            
            # Save screenshot
            screenshot_name = f"cendrol_step_{i+1}_active_{active_item}.png"
            screenshot_path = os.path.join(r"c:\Users\ASUS\Desktop\new portfolio\scratch", screenshot_name)
            driver.save_screenshot(screenshot_path)
            print(f"Saved screenshot {screenshot_name}")
            
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    capture_screenshots()
