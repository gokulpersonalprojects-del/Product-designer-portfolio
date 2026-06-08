def main():
    views_path = r"c:\Users\ASUS\Desktop\new portfolio\views.js"
    with open(views_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    old_captions = [
        '<div class="cendrol-visual-caption">Site engineer purchasing raw building materials directly from local vendors in the field.</div>',
        '<div class="cendrol-visual-caption">Physical paper invoices, cash receipts, and handwritten bills building up throughout the week.</div>',
        '<div class="cendrol-visual-caption">Sharing low-quality, blurry receipt captures over chat channels results in lost records.</div>',
        '<div class="cendrol-visual-caption">Central accounts desk manually reviewing, typing, and reconciling hundreds of fragmented bills.</div>',
        '<div class="cendrol-visual-caption">Prolonged audit verification loops causing payment delays and stalling site operations.</div>'
    ]
    
    new_captions = [
        '<div class="cendrol-visual-caption">Visual: A cartoon illustration of an on-site engineer juggling various field expenses like fuel, materials, and transport.</div>',
        '<div class="cendrol-visual-caption">Visual: A cartoon depicting receipt chaos with mountains of paper invoices piling up on the engineer\'s desk.</div>',
        '<div class="cendrol-visual-caption">Visual: A cartoon showing a confusing web of communication channels (WhatsApp, mail) leading to lost submissions.</div>',
        '<div class="cendrol-visual-caption">Visual: A cartoon illustrating the finance team drowning in paperwork while manually auditing receipts with magnifying glasses.</div>',
        '<div class="cendrol-visual-caption">Visual: A cartoon showing the time ticking away as prolonged audit delays stall site operations and hold up payouts.</div>'
    ]
    
    for old, new in zip(old_captions, new_captions):
        if old in content:
            content = content.replace(old, new)
            print(f"Replaced caption: {old[:30]}...")
        else:
            print(f"Failed to find caption: {old[:30]}...")
            
    with open(views_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    main()
