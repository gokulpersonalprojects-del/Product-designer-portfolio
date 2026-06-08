with open('views.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines in views.js: {len(lines)}")
print("--- First 100 lines of views.js ---")
print("".join(lines[:100]))
