import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_conclusion = '''        <!-- Conclusion Section -->
        <section class="body-chapter stagger-el" style="border-top: 1px solid var(--border-color); padding-top: 2.5rem; margin-top: 0;">
          <span class="chapter-num font-mono" style="color: var(--color-brand); font-size: 0.75rem; letter-spacing: 0.08em;">/ CONCLUSION</span>
          <p class="chapter-desc" style="margin-top: 0.75rem; margin-bottom: 2.5rem; max-width: 600px;">
            The system transformed the syllabus from a static preparation document into a navigable learning ecosystem.
          </p>

          <!-- Insight Cards Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">

            <!-- Card 1 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">&#x1F9ED;</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">01 / NAVIGATION</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">Complexity doesn&#39;t need to be removed &#8212; it needs to be made navigable.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">The full UPSC syllabus structure was preserved, but made approachable through preparation spread, topic relationships, and colour-coded depth signals.</p>
            </div>

            <!-- Card 2 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">&#x1F4CD;</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">02 / ORIENTATION</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">The key design decision was to prioritise orientation over information.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Rather than surfacing more content, Yooki focused on helping aspirants understand where they were &#8212; which turned out to be the missing layer entirely.</p>
            </div>

            <!-- Card 3 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">&#x1F9E0;</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">03 / AI DESIGN</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">Contextual AI is more useful than reactive AI.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Grounding every AI response in the user&#39;s preparation graph produced suggestions that felt relevant rather than generic &#8212; the difference between advice and orientation.</p>
            </div>

            <!-- Card 4 -->
            <div style="padding: 1.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.4rem; line-height: 1;">&#x1F9F1;</span>
                <span class="font-mono" style="font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.08em;">04 / CONSISTENCY</span>
              </div>
              <p style="margin: 0; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">The same visual primitives extended across the entire system.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Preparation spread, topic colour, and connection mapping applied equally to navigation, AI guidance, and revision planning &#8212; without requiring structural changes.</p>
            </div>

          </div>

          <!-- Card 5 - Full width -->
          <div style="margin-top: 1rem; padding: 1.75rem; background: linear-gradient(135deg, rgba(var(--color-brand-rgb, 255,109,0), 0.06) 0%, var(--bg-card) 100%); border: 1px solid var(--color-brand); border-radius: var(--border-radius-lg); display: flex; gap: 1.5rem; align-items: flex-start;">
            <span style="font-size: 1.8rem; line-height: 1; flex-shrink: 0; margin-top: 0.15rem;">&#x1F4C8;</span>
            <div>
              <span class="font-mono" style="font-size: 0.6rem; color: var(--color-brand); letter-spacing: 0.08em;">05 / SCALABILITY</span>
              <p style="margin: 0.4rem 0 0.5rem; font-size: 0.97rem; font-weight: 600; color: var(--color-brand); line-height: 1.45;">The system is built to scale.</p>
              <p style="margin: 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6;">Conception tracking, current affairs integration, and future AI-assisted review flows can all be added using the same graph-based foundation &#8212; without rearchitecting the product.</p>
            </div>
          </div>

        </section>
'''

    # Replace lines 705 to 760 (0-indexed: 704 to 759)
    lines[704:760] = [new_conclusion]

    with open('views.js', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Done - conclusion redesigned as insight cards')

if __name__ == '__main__':
    main()
