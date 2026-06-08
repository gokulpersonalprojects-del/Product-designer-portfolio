import os

def main():
    views_path = r"c:\Users\ASUS\Desktop\new portfolio\views.js"
    with open(views_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    old_html = """            <!-- Left Side: Sticky Visuals Card -->
            <div class="cendrol-visuals-container">
              <div class="cendrol-visual-item active">
                <video autoplay loop muted playsinline>
                  <source src="./cendrol_video1.mp4" type="video/mp4">
                </video>
              </div>
              <div class="cendrol-visual-item">
                <video autoplay loop muted playsinline>
                  <source src="./cendrol_video2.mp4" type="video/mp4">
                </video>
              </div>
              <div class="cendrol-visual-item">
                <video autoplay loop muted playsinline>
                  <source src="./cendrol_video3.mp4" type="video/mp4">
                </video>
              </div>
              <div class="cendrol-visual-item">
                <video autoplay loop muted playsinline>
                  <source src="./cendrol_video4.mp4" type="video/mp4">
                </video>
              </div>
              <div class="cendrol-visual-item">
                <video autoplay loop muted playsinline>
                  <source src="./cendrol_video5.mp4" type="video/mp4">
                </video>
              </div>
            </div>"""
            
    new_html = """            <!-- Left Side: Sticky Visuals Card -->
            <div class="cendrol-visuals-container">
              <div class="cendrol-visual-item active">
                <img src="./cendrol_c1.png" alt="Frame 1: Engineer spends money" loading="eager">
                <div class="cendrol-visual-caption">Site engineer purchasing raw building materials directly from local vendors in the field.</div>
              </div>
              <div class="cendrol-visual-item">
                <img src="./cendrol_c2.png" alt="Frame 2: Receipts pile up" loading="lazy">
                <div class="cendrol-visual-caption">Physical paper invoices, cash receipts, and handwritten bills building up throughout the week.</div>
              </div>
              <div class="cendrol-visual-item">
                <img src="./cendrol_c3.png" alt="Frame 3: Submission becomes confusing" loading="lazy">
                <img src="./cendrol_c3.png" alt="Frame 3: Submission becomes confusing" loading="lazy">
                <div class="cendrol-visual-caption">Sharing low-quality, blurry receipt captures over chat channels results in lost records.</div>
              </div>
              <div class="cendrol-visual-item">
                <img src="./cendrol_c4.png" alt="Frame 4: Finance team struggles" loading="lazy">
                <div class="cendrol-visual-caption">Central accounts desk manually reviewing, typing, and reconciling hundreds of fragmented bills.</div>
              </div>
              <div class="cendrol-visual-item">
                <img src="./cendrol_c5.png" alt="Frame 5: Reimbursement gets delayed" loading="lazy">
                <div class="cendrol-visual-caption">Prolonged audit verification loops causing payment delays and stalling site operations.</div>
              </div>
            </div>"""

    # Fix typo of duplicate img in frame 3 in the text template
    new_html = new_html.replace('                <img src="./cendrol_c3.png" alt="Frame 3: Submission becomes confusing" loading="lazy">\n                <img src="./cendrol_c3.png" alt="Frame 3: Submission becomes confusing" loading="lazy">', '                <img src="./cendrol_c3.png" alt="Frame 3: Submission becomes confusing" loading="lazy">')

    if old_html in content:
        content = content.replace(old_html, new_html)
        print("Successfully replaced HTML in views.js!")
    else:
        # Try finding a slightly different whitespace version
        print("Direct old_html match not found, let's try replacing with regex or direct file editing.")
        # Let's do a substring replace
        start_idx = content.find('<!-- Left Side: Sticky Visuals Card -->')
        end_idx = content.find('</div>\n          </div>\n\n          <!-- Right Side: Scrolling Narrative Steps -->')
        if start_idx != -1 and end_idx != -1:
            content = content[:start_idx] + new_html + content[end_idx+6:]
            print("Successfully replaced HTML using indices!")
        else:
            print("Could not find the section via indices either.")
            
    with open(views_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
if __name__ == "__main__":
    main()
