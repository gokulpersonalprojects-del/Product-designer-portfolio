import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def inspect():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--window-size=1920,1080")
    
    driver = webdriver.Chrome(options=chrome_options)
    driver.get("http://localhost:8080/#/project-1")
    time.sleep(2)
    
    print("Window size:", driver.get_window_size())
    
    buttons = driver.find_elements(By.CLASS_NAME, "solution-tab-btn")
    print(f"Found {len(buttons)} solution-tab-btn elements:")
    for i, btn in enumerate(buttons):
        tag = btn.tag_name
        text = btn.text.replace('\n', ' ')
        disp = btn.is_displayed()
        enabled = btn.is_enabled()
        rect = btn.rect
        print(f"Button {i+1}: tag={tag}, text='{text}', displayed={disp}, enabled={enabled}, rect={rect}")
        
    print("\nChecking if elements are covered by checking elementFromPoint:")
    for i, btn in enumerate(buttons):
        rect = btn.rect
        x = int(rect['x'] + rect['width']/2)
        y = int(rect['y'] + rect['height']/2)
        # We need to scroll the element into view first
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", btn)
        time.sleep(0.5)
        # Get actual rect after scroll
        curr_rect = driver.execute_script("return arguments[0].getBoundingClientRect();", btn)
        print(f"Button {i+1} ClientRect after scroll:", curr_rect)
        cx = int(curr_rect['left'] + curr_rect['width']/2)
        cy = int(curr_rect['top'] + curr_rect['height']/2)
        
        top_el = driver.execute_script("return document.elementFromPoint(arguments[0], arguments[1]);", cx, cy)
        if top_el:
            top_tag = top_el.tag_name
            top_class = top_el.get_attribute("class")
            top_text = top_el.text.replace('\n', ' ')[:40]
            print(f"  Top element at ({cx}, {cy}): tag={top_tag}, class='{top_class}', text='{top_text}'")
            # Trace parent elements to see if it's the button itself or a child
            parent = top_el
            path = []
            while parent:
                path.append(f"{parent.tag_name}.{parent.get_attribute('class').replace(' ', '.')}")
                if parent == btn:
                    break
                parent = driver.execute_script("return arguments[0].parentElement;", parent)
            print(f"  Parent path: {' -> '.join(path)}")
        else:
            print(f"  No element found at ({cx}, {cy})")
            
    driver.quit()

if __name__ == "__main__":
    inspect()
