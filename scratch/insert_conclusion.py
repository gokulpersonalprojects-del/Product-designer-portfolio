import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        content = f.read()

    conclusion = """
        <!-- Conclusion Section -->
        <section class="body-chapter stagger-el" style="border-top: 1px solid var(--border-color); padding-top: 2.5rem; margin-top: 0;">
          <span class="chapter-num font-mono" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.08em;">/ CONCLUSION</span>
          <p class="chapter-desc" style="margin-top: 0.75rem; margin-bottom: 2rem; max-width: 640px;">
            The system transformed the syllabus from a static preparation document into a navigable learning ecosystem.
          </p>

          <div style="border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); overflow: hidden;">

            <div style="display: grid; grid-template-columns: 1fr 1.6fr; border-bottom: 1px solid var(--border-color);">
              <div style="padding: 1.5rem 1.75rem; border-right: 1px solid var(--border-color);">
                <p style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--color-brand); line-height: 1.5;">Complexity doesn\\'t need to be removed \\u2014 it needs to be made navigable.</p>
              </div>
              <div style="padding: 1.5rem 1.75rem;">
                <p style="margin: 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65;">The system preserved the full structure of the UPSC syllabus while making it feel approachable through preparation spread, topic relationships, and colour-coded depth signals.</p>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1.6fr; border-bottom: 1px solid var(--border-color);">
              <div style="padding: 1.5rem 1.75rem; border-right: 1px solid var(--border-color);">
                <p style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--color-brand); line-height: 1.5;">The key design decision was to prioritise orientation over information.</p>
              </div>
              <div style="padding: 1.5rem 1.75rem;">
                <p style="margin: 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65;">Rather than surfacing more content, Yooki focused on helping aspirants understand where they were \\u2014 which turned out to be the missing layer entirely.</p>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1.6fr; border-bottom: 1px solid var(--border-color);">
              <div style="padding: 1.5rem 1.75rem; border-right: 1px solid var(--border-color);">
                <p style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--color-brand); line-height: 1.5;">Contextual AI is more useful than reactive AI.</p>
              </div>
              <div style="padding: 1.5rem 1.75rem;">
                <p style="margin: 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65;">Grounding every AI response in the user\\'s preparation graph produced suggestions that felt relevant rather than generic \\u2014 the difference between advice and orientation.</p>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1.6fr; border-bottom: 1px solid var(--border-color);">
              <div style="padding: 1.5rem 1.75rem; border-right: 1px solid var(--border-color);">
                <p style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--color-brand); line-height: 1.5;">The same visual primitives extended across the entire system.</p>
              </div>
              <div style="padding: 1.5rem 1.75rem;">
                <p style="margin: 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65;">Preparation spread, topic colour, and connection mapping applied equally to navigation, AI guidance, and revision planning \\u2014 without requiring structural changes.</p>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1.6fr;">
              <div style="padding: 1.5rem 1.75rem; border-right: 1px solid var(--border-color);">
                <p style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--color-brand); line-height: 1.5;">The system is built to scale.</p>
              </div>
              <div style="padding: 1.5rem 1.75rem;">
                <p style="margin: 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65;">Conception tracking, current affairs integration, and future AI-assisted review flows can be added using the same graph-based foundation.</p>
              </div>
            </div>

          </div>
        </section>

"""

    # Find the unique marker: the end of project 1 (before project 2 comment)
    marker = '// PROJECT 2 (CENDROL CONSTRUCT)'
    idx = content.find(marker)
    if idx == -1:
        print("ERROR: marker not found")
        return

    # Find the last </div>\n    </article>\n  `;\n} before this marker
    # Work backwards from the marker
    before = content[:idx]
    # The closing sequence we want to insert before:
    closing = '      </div>\n    </article>\n  `;\n}'
    close_idx = before.rfind(closing)
    if close_idx == -1:
        print("ERROR: closing not found")
        # Try with \r\n
        closing = '      </div>\r\n    </article>\r\n  `;\r\n}'
        close_idx = before.rfind(closing)
        if close_idx == -1:
            print("ERROR: closing with CRLF not found either")
            print(repr(before[-200:]))
            return

    new_content = content[:close_idx] + conclusion + content[close_idx:]
    with open('views.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("SUCCESS: conclusion inserted before project 1 closing tags")

if __name__ == "__main__":
    main()
