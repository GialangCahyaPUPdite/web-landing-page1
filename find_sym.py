import sys

path = r'c:\Users\gilang cahya pratama\Downloads\Aplikais web\BRM\index.html'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

symbols = ['✕', '☰', '→', '✓', '◆', '×']
for i, line in enumerate(lines):
    for sym in symbols:
        if sym in line:
            print(f'Line {i+1}: {line.strip().encode("unicode_escape").decode("utf-8")}')

# For script.js
path = r'c:\Users\gilang cahya pratama\Downloads\Aplikais web\BRM\script.js'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

symbols = ['🙏', '🙋‍♂️']
for i, line in enumerate(lines):
    for sym in symbols:
        if sym in line:
            print(f'Script Line {i+1}: {line.strip().encode("unicode_escape").decode("utf-8")}')
