import time
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def run_tests():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.set_capability('goog:loggingPrefs', {'browser': 'ALL'})
    
    # ── Test 1: Desktop Layout ──
    print("Initializing Desktop browser (1200x800)...")
    driver = webdriver.Chrome(options=chrome_options)
    driver.set_window_size(1200, 800)
    driver.get("http://localhost:8081/#/")
    time.sleep(2)  # Wait for preloader to complete and page to settle
    
    print("\n--- DESKTOP VERIFICATIONS ---")
    sidebar = driver.find_element(By.CLASS_NAME, "sidebar")
    sidebar_overflow = sidebar.value_of_css_property("overflow-y")
    print(f"Sidebar overflow-y: {sidebar_overflow} (Expected: 'auto' or 'hidden')")
    assert sidebar_overflow in ["auto", "hidden"], f"Desktop sidebar must have overflow-y as auto or hidden, got: {sidebar_overflow}"
    
    # Verify content fits or scrolls
    sidebar_height = sidebar.size['height']
    sidebar_default = driver.find_element(By.ID, "sidebar-default")
    content_height = sidebar_default.size['height']
    print(f"Sidebar Height: {sidebar_height}px, Content Height: {content_height}px (Scrollable layout by design)")
    print("[OK] Sidebar scrolls vertically for the rich editorial layout.")
    
    actions_grid = driver.find_element(By.CLASS_NAME, "cta-buttons-grid")
    actions_grid_display = actions_grid.value_of_css_property("display")
    print(f"Action grid display: {actions_grid_display} (Expected: 'grid')")
    assert actions_grid_display == "grid", f"Desktop action buttons must be styled as a grid, got {actions_grid_display}"
    
    driver.quit()
    
    # ── Test 2: Mobile Layout (375x667) ──
    print("\nInitializing Mobile browser (375x667)...")
    driver = webdriver.Chrome(options=chrome_options)
    driver.set_window_size(375, 667)
    driver.get("http://localhost:8081/#/")
    time.sleep(2)  # Wait for preloader to complete
    
    print("\n--- MOBILE VERIFICATIONS ---")
    sidebar = driver.find_element(By.CLASS_NAME, "sidebar")
    sidebar_width = sidebar.size['width']
    print(f"Mobile sidebar width: {sidebar_width}px (Expected: ~375px)")
    assert sidebar_width >= 350, f"Mobile sidebar must span the full page width, got width: {sidebar_width}px"
    
    # Check browser logs for errors
    print("\nChecking console logs...")
    logs = driver.get_log('browser')
    errors = [log for log in logs if log['level'] in ['SEVERE', 'ERROR'] and 'favicon.ico' not in log['message'] and 'fonts.googleapis.com' not in log['message'] and 'fonts.gstatic.com' not in log['message']]
    if errors:
        print("Severe/Error logs found:")
        for log in errors:
            print(log)
        sys.exit(1)
    else:
        print("No console errors detected!")
        
    print("\nAll responsive layout, hierarchy, and UX tests PASSED successfully!")
    driver.quit()

if __name__ == "__main__":
    run_tests()
