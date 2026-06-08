import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    video_block = (
        '        <!-- Product Video -->\n'
        '        <section class="body-chapter" style="padding-top: 0; margin-bottom: 0;">\n'
        '          <div style="position: relative; width: 100%; padding-bottom: 56.25%; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color); background: #000;">\n'
        '            <iframe\n'
        '              src="https://www.youtube-nocookie.com/embed/60vHCVEFNEg?rel=0&modestbranding=1&color=white"\n'
        '              title="Bank of Palestine \u2014 KYC Simplification Case Study"\n'
        '              frameborder="0"\n'
        '              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n'
        '              allowfullscreen\n'
        '              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"\n'
        '            ></iframe>\n'
        '          </div>\n'
        '        </section>\n'
        '\n'
    )

    # Insert after line 1018 (0-indexed) which is the blank line inside project-body
    lines.insert(1018, video_block)

    with open('views.js', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Done - Bank of Palestine video inserted at beginning of case study')

if __name__ == '__main__':
    main()
