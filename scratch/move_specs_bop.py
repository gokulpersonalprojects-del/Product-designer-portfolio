import sys

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    with open('views.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # ── 1. Remove project-specs block from right panel (0-indexed 1000-1013)
    # Lines 1001-1014 in 1-indexed = 1000-1013 in 0-indexed
    del lines[1000:1014]
    print('Step 1: Removed specs block from right panel')

    # ── 2. Add ROLE / TIMELINE / CONTEXT into the sidebar specs section
    # After removal, find the sidebar specs section for project 3
    # Look for the existing sidebar specs div with "Lead Product Designer"
    new_specs = (
        '      <div class="project-sidebar-specs" style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); font-family: var(--font-sans);">\n'
        '        <div><strong style="color: var(--text-primary); font-weight: 600; font-family: var(--font-sans); font-size: 0.8rem; letter-spacing: 0.03em;">ROLE :</strong> Lead Product Designer</div>\n'
        '        <div><strong style="color: var(--text-primary); font-weight: 600; font-family: var(--font-sans); font-size: 0.8rem; letter-spacing: 0.03em;">TIMELINE :</strong> 3 Months (2024)</div>\n'
        '        <div><strong style="color: var(--text-primary); font-weight: 600; font-family: var(--font-sans); font-size: 0.8rem; letter-spacing: 0.03em;">CONTEXT :</strong> Mobile Banking, Identity Verification (KYC), FinTech</div>\n'
        '      </div>\n'
    )

    # Find and replace the existing sidebar specs block for project 3
    # Look for the block starting with project-sidebar-specs containing "Lead Product Designer" (project 3 sidebar)
    # After removal, project3 sidebar is roughly around line 1975+
    for i, line in enumerate(lines):
        if 'project-sidebar-specs' in line and i > 1960:
            # Check next few lines for project 3 marker
            chunk = ''.join(lines[i:i+6])
            if 'Lead Product Designer' in chunk and 'CHALLENGE' in chunk and 'KYC' in chunk:
                # Replace this entire block (6 lines)
                end = i + 6
                # Find actual end of the div block
                for j in range(i, i+10):
                    if '</div>' in lines[j] and j > i+3:
                        end = j + 1
                        break
                lines[i:end] = [new_specs]
                print(f'Step 2: Replaced sidebar specs at line {i+1}')
                break

    with open('views.js', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Done')

if __name__ == '__main__':
    main()
