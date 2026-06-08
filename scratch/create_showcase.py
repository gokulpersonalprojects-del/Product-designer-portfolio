import os
from PIL import Image, ImageDraw, ImageFilter

# Setup paths
media_dir = r'C:\Users\ASUS\.gemini\antigravity\brain\457b6c1c-26cb-47b7-b7a7-886426f7451f'
files = [
    'media__1780765387364.png', # Screen 1
    'media__1780765387398.png', # Screen 2
    'media__1780765387403.png', # Screen 3
    'media__1780765387409.png', # Screen 4
    'media__1780765387416.png'  # Screen 5
]
output_path = r'c:\Users\ASUS\Desktop\new portfolio\bop_thumbnail.png'

# Canvas dimensions (standard Opengraph landscape banner)
canvas_width = 1200
canvas_height = 630

# Create background gradient (linear from top-left dark burgundy to bottom-right pitch black)
bg = Image.new('RGB', (canvas_width, canvas_height), (13, 12, 13))
draw_bg = ImageDraw.Draw(bg)

# Draw a linear gradient
color1 = (40, 5, 22)   # Dark Burgundy (Bank of Palestine brand accent)
color2 = (10, 8, 9)    # Deep Charcoal/Black
for y in range(canvas_height):
    ratio = y / canvas_height
    r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
    g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
    b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
    draw_bg.line([(0, y), (canvas_width, y)], fill=(r, g, b))

# Dimensions for each screen on the banner
screen_w = 186
screen_h = 400
corner_radius = 16

# Calculate layout positions (centered, arched shape)
# Total width = 5 * screen_w + 4 * spacing
spacing = 24
total_w = 5 * screen_w + 4 * spacing
start_x = (canvas_width - total_w) // 2

# Y positions for the arch layout (center highest, sides lowest)
y_positions = [
    125, # Screen 1 (outer left)
    105, # Screen 2 (inner left)
    85,  # Screen 3 (center)
    105, # Screen 4 (inner right)
    125  # Screen 5 (outer right)
]

for idx, f in enumerate(files):
    path = os.path.join(media_dir, f)
    if not os.path.exists(path):
        print(f"Error: {f} not found!")
        continue
    
    # Load and resize screen
    screen = Image.open(path).convert("RGBA")
    
    # Crop screen 1 if needed (since it's 354x1024, aspect ratio is slightly taller)
    if idx == 0:
        # crop bottom portion to match ratio better (e.g. crop from 354x1024 to 354x765)
        # keeping the top customer login portion
        screen = screen.crop((0, 0, screen.width, int(screen.width * (800/375))))
        
    screen = screen.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
    
    # Create mask for rounded corners
    mask = Image.new('L', (screen_w, screen_h), 0)
    draw_mask = ImageDraw.Draw(mask)
    draw_mask.rounded_rectangle([0, 0, screen_w, screen_h], radius=corner_radius, fill=255)
    
    # Add a thin, elegant border (semi-transparent white)
    border_color = (255, 255, 255, 40) # White with ~15% opacity
    border_img = Image.new('RGBA', (screen_w, screen_h), (0, 0, 0, 0))
    draw_border = ImageDraw.Draw(border_img)
    draw_border.rounded_rectangle([0, 0, screen_w - 1, screen_h - 1], radius=corner_radius, outline=border_color, width=1)
    
    # Composite the screen with rounded corners and border
    screen_rounded = Image.new('RGBA', (screen_w, screen_h), (0, 0, 0, 0))
    screen_rounded.paste(screen, (0, 0), mask=mask)
    screen_rounded = Image.alpha_composite(screen_rounded, border_img)
    
    # Create soft drop shadow
    shadow_offset_x = 0
    shadow_offset_y = 12
    shadow_blur = 18
    shadow_opacity = 140 # out of 255 (~55% opacity)
    
    # Shadow canvas is larger to fit the blurred shadow
    pad = shadow_blur * 2
    shadow_w = screen_w + pad * 2
    shadow_h = screen_h + pad * 2
    
    shadow_mask = Image.new('L', (shadow_w, shadow_h), 0)
    draw_shadow = ImageDraw.Draw(shadow_mask)
    # Draw solid rounded rectangle in the center of the shadow mask
    draw_shadow.rounded_rectangle([pad, pad, pad + screen_w, pad + screen_h], radius=corner_radius, fill=shadow_opacity)
    
    # Blur the shadow mask
    shadow_blurred = shadow_mask.filter(ImageFilter.GaussianBlur(shadow_blur))
    
    # Create black shadow image
    shadow_color = (0, 0, 0)
    shadow_img = Image.new('RGBA', (shadow_w, shadow_h), shadow_color + (0,))
    # Paste shadow mask into the alpha channel of shadow image
    shadow_img.putalpha(shadow_blurred)
    
    # Coordinates for shadow and screen
    x = start_x + idx * (screen_w + spacing)
    y = y_positions[idx]
    
    # Paste shadow onto background
    bg.paste(shadow_img, (x - pad + shadow_offset_x, y - pad + shadow_offset_y), mask=shadow_img)
    
    # Paste screen onto background
    bg.paste(screen_rounded, (x, y), mask=mask)

# Save the final image
bg.save(output_path, "PNG")
print(f"Showcase image successfully saved to {output_path}")
