def main():
    css_path = r"c:\Users\ASUS\Desktop\new portfolio\index.css"
    with open(css_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    old_css = """.cendrol-visuals-container {
  position: relative;
  width: 100%;
  height: 75vh;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  background: var(--bg-secondary);
}

.cendrol-visual-item {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.5s ease;
}

.cendrol-visual-item.active {
  opacity: 1;
  visibility: visible;
}

.cendrol-visual-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}"""

    new_css = """.cendrol-visuals-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  background: var(--bg-secondary);
}

.cendrol-visual-item {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.5s ease;
}

.cendrol-visual-item.active {
  opacity: 1;
  visibility: visible;
}

.cendrol-visual-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cendrol-visual-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  line-height: 1.45;
  font-weight: 400;
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  z-index: 2;
}

.cendrol-visual-caption::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: var(--color-brand);
  border-radius: 50%;
  flex-shrink: 0;
}"""

    if old_css in content:
        content = content.replace(old_css, new_css)
        print("Successfully replaced CSS in index.css!")
    else:
        # Just append it or try to find a subpart
        print("Direct old_css match not found, let's append new styles to the end of index.css")
        content += "\n\n/* Cendrol Scroll Captions & Image Aspect-Ratio */\n" + new_css
        
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    main()
