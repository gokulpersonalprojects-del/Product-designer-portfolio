import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import ElementClickInterceptedException

def diagnose():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--window-size=1920,1080")
    
    driver = webdriver.Chrome(options=chrome_options)
    driver.get("http://localhost:8080/#/project-1")
    
    print("Waiting for preloader to finish...")
    time.sleep(7.5)
    
    buttons = driver.find_elements(By.CLASS_NAME, "solution-tab-btn")
    btn_ch2 = None
    for btn in buttons:
        if btn.get_attribute("data-chapter") == "2":
            btn_ch2 = btn
            break
            
    if not btn_ch2:
        print("Chapter 2 button not found!")
        driver.quit()
        return
        
    print("Scrolling Chapter 2 button into view (block: center)...")
    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", btn_ch2)
    time.sleep(1.0)
    
    rect = driver.execute_script("return arguments[0].getBoundingClientRect();", btn_ch2)
    x = int(rect['left'] + rect['width']/2)
    y = int(rect['top'] + rect['height']/2)
    print(f"ClientRect of button: left={rect['left']}, top={rect['top']}, width={rect['width']}, height={rect['height']}")
    print(f"Checking elementFromPoint at ({x}, {y})...")
    
    top_el = driver.execute_script("return document.elementFromPoint(arguments[0], arguments[1]);", x, y)
    if top_el:
        tag = top_el.tag_name
        cls = top_el.get_attribute("class")
        id_attr = top_el.get_attribute("id")
        text = top_el.text.replace('\n', ' ')[:100]
        print(f"Top element at click target: tag={tag}, id='{id_attr}', class='{cls}', text='{text}'")
        
        # Print parent path
        parent = top_el
        path = []
        while parent:
            path.append(f"{parent.tag_name}#{parent.get_attribute('id')}.{parent.get_attribute('class').replace(' ', '.')}")
            parent = driver.execute_script("return arguments[0].parentElement;", parent)
        print("Parent path of top element:", " -> ".join(path))
    else:
        print("No element found at target coordinates!")
        
    print("Attempting standard selenium click...")
    try:
        btn_ch2.click()
        print("Click succeeded!")
    except ElementClickInterceptedException as e:
        print("Click failed with ElementClickInterceptedException!")
        print("Error message:", e.msg)
        
    driver.quit()

if __name__ == "__main__":
    diagnose()
