"""
Compress Yooki case study PNG images to WebP for faster loading.
WebP is typically 25-35% smaller than PNG with no visible quality loss.
"""
import os
from PIL import Image

PORTFOLIO_DIR = r"c:\Users\ASUS\Desktop\new portfolio"

# PNGs used in the Yooki case study
YOOKI_IMAGES = [
    "yooki_problem.png",
    "yooki_research.png",
    "yooki_journey.png",
    "yooki_ia.png",
    "yooki_flowchart_visible.png",
    "yooki_pilot.png",
]

def compress_to_webp(filename, quality=82):
    src = os.path.join(PORTFOLIO_DIR, filename)
    dst = os.path.join(PORTFOLIO_DIR, filename.replace(".png", ".webp"))

    if not os.path.exists(src):
        print(f"  SKIP (not found): {filename}")
        return

    original_size = os.path.getsize(src)

    with Image.open(src) as img:
        # Preserve transparency if present
        if img.mode in ("RGBA", "LA"):
            img.save(dst, "WEBP", quality=quality, method=6, lossless=False)
        else:
            img = img.convert("RGB")
            img.save(dst, "WEBP", quality=quality, method=6)

    new_size = os.path.getsize(dst)
    saving_pct = (1 - new_size / original_size) * 100
    print(f"  {filename}")
    print(f"    {original_size/1024:.0f} KB  ->  {new_size/1024:.0f} KB  ({saving_pct:.1f}% smaller)")

if __name__ == "__main__":
    print("Compressing Yooki case study images to WebP...\n")
    for img in YOOKI_IMAGES:
        compress_to_webp(img)
    print("\nDone. Now update HTML references from .png to .webp")
