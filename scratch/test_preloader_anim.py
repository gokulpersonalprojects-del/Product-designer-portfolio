import asyncio
import os
import time
from playwright.async_api import async_playwright

async def take_screenshots():
    # Screenshots directory in brain artifacts
    out_dir = r"C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f"
    os.makedirs(out_dir, exist_ok=True)

    async with async_playwright() as p:
        # Launch browser (non-headless so we match real browser rendering)
        browser = await p.chromium.launch(headless=True)
        # Create a page with standard desktop dimensions
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        
        print("Navigating to http://localhost:8080/...")
        await page.goto("http://localhost:8080/")
        
        # 1. Morph and Quote typing active (2.0s)
        await asyncio.sleep(2.0)
        p1 = os.path.join(out_dir, "preloader_step1_quote.png")
        await page.screenshot(path=p1)
        print(f"Captured screenshot 1 (Quote Typing) at: {p1}")

        # 2. Logos revealing (4.2s)
        await asyncio.sleep(2.2)
        p2 = os.path.join(out_dir, "preloader_step2_logos_revealing.png")
        await page.screenshot(path=p2)
        print(f"Captured screenshot 2 (Logos Revealing) at: {p2}")

        # 3. Logos fully revealed, resting phase (5.2s)
        await asyncio.sleep(1.0)
        p3 = os.path.join(out_dir, "preloader_step3_logos_settled.png")
        await page.screenshot(path=p3)
        print(f"Captured screenshot 3 (Logos Settled) at: {p3}")

        # 4. Exit complete, main page visible (7.5s)
        await asyncio.sleep(2.3)
        p4 = os.path.join(out_dir, "preloader_step4_main_site.png")
        await page.screenshot(path=p4)
        print(f"Captured screenshot 4 (Main Site Revealed) at: {p4}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(take_screenshots())
