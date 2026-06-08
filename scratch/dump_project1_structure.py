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
    
    # We want to traverse the DOM and print headings, paragraphs, and images in order.
    # We can fetch elements that represent these, or run a JS query to get them in order.
    script = """
    const elements = document.querySelectorAll('h1, h2, h3, h4, p, img, blockquote');
    const result = [];
    elements.forEach(el => {
        if (el.tagName === 'IMG') {
            result.push({
                type: 'img',
                src: el.src,
                alt: el.alt
            });
        } else {
            const text = el.innerText.trim();
            if (text) {
                result.push({
                    type: el.tagName.toLowerCase(),
                    text: text
                });
            }
        }
    });
    return result;
    """
    elements = driver.execute_script(script)
    print(f"\nScraped {len(elements)} elements in document order:")
    for idx, el in enumerate(elements):
        if el['type'] == 'img':
            print(f"[{idx+1:02d}] IMAGE: src={el['src']} alt='{el['alt']}'")
        else:
            print(f"[{idx+1:02d}] {el['type'].upper()}: {el['text']}")
            
    driver.quit()

if __name__ == "__main__":
    main()
