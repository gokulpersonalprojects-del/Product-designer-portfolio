import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    video_block = '''
        <!-- Product Video 2 -->
        <section class="body-chapter" style="padding-top: 2.5rem; padding-bottom: 0; margin-bottom: 0;">
          <div style="position: relative; width: 100%; padding-bottom: 56.25%; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color); background: #000;">
            <iframe
              src="https://www.youtube-nocookie.com/embed/bIwgCcSkIAQ?rel=0&modestbranding=1&color=white"
              title="Yooki \u2014 Detailed Walkthrough"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
            ></iframe>
          </div>
        </section>

'''
    # Insert before line 568 (0-indexed: 567) which is the blank line before Solution Path comment
    lines.insert(567, video_block)

    with open('views.js', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Done - second video inserted before solution path')

if __name__ == '__main__':
    main()
