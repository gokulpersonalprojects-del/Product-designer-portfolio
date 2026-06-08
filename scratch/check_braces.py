import sys

def check_braces(filename):
    sys.stdout.reconfigure(encoding='utf-8')
    with open(filename, 'r', encoding='utf-8') as f:
        code = f.read()
    
    # Simple brace matching stack
    stack = []
    lines = code.split('\n')
    
    in_string = False
    string_char = None
    escaped = False
    
    line_idx = 0
    while line_idx < len(lines):
        line = lines[line_idx]
        i = 0
        while i < len(line):
            char = line[i]
            if escaped:
                escaped = False
                i += 1
                continue
            if char == '\\':
                escaped = True
                i += 1
                continue
            
            if in_string:
                if char == string_char:
                    in_string = False
                i += 1
                continue
            
            if char in ["'", '"', '`']:
                in_string = True
                string_char = char
                i += 1
                continue
            
            # Skip comments
            if char == '/' and i + 1 < len(line):
                if line[i+1] == '/':
                    break  # rest of the line is a comment
                elif line[i+1] == '*':
                    # block comment start, skip until block comment end
                    # We will scan the rest of the code for */
                    flat_pos = sum(len(lines[j]) + 1 for j in range(line_idx)) + i
                    end_pos = code.find('*/', flat_pos + 2)
                    if end_pos == -1:
                        print('Unterminated block comment')
                        return
                    # Calculate new line_idx and position
                    skipped_newlines = code[flat_pos:end_pos].count('\n')
                    line_idx += skipped_newlines
                    line = lines[line_idx]
                    # Find column position in the new line
                    last_newline = code.rfind('\n', 0, end_pos + 2)
                    if last_newline == -1:
                        i = end_pos + 2
                    else:
                        i = end_pos + 2 - (last_newline + 1)
                    continue
            
            if char in ['{', '[', '(']:
                stack.append((char, line_idx + 1, i + 1))
            elif char in ['}', ']', ')']:
                if not stack:
                    print(f'Mismatched closing char {char} at line {line_idx+1}, col {i+1}')
                    return
                top, t_line, t_col = stack.pop()
                if (char == '}' and top != '{') or (char == ']' and top != '[') or (char == ')' and top != '('):
                    print(f'Mismatched closing char {char} at line {line_idx+1}, col {i+1} (expected closing for {top} at line {t_line}, col {t_col})')
                    return
            i += 1
        line_idx += 1
            
    if stack:
        print('Unclosed opened chars at end of file:')
        for char, line, col in stack[-10:]:
            print(f'  {char} at line {line}, col {col}')
    else:
        print('All braces, brackets, and parentheses are balanced!')

if __name__ == '__main__':
    check_braces('views.js')
