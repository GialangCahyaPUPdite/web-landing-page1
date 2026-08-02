import re

path = r'c:\Users\gilang cahya pratama\Downloads\Aplikais web\BRM\index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Obfuscate strings first
content = content.replace("6285117755712", "6200000000000")
content = content.replace("0851-1775-5712", "0000-0000-0000")
content = content.replace("s.id/pendaftaran-eventCRAUniv2026", "s.id/pendaftaran-event00000")

# Find styles
style_matches = list(re.finditer(r'<style>(.*?)</style>', content, re.DOTALL))
css_content = '\n'.join(m.group(1).strip() for m in style_matches)
with open(r'c:\Users\gilang cahya pratama\Downloads\Aplikais web\BRM\style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

# Find scripts
script_matches = list(re.finditer(r'<script>(.*?)</script>', content, re.DOTALL))
js_content = '\n'.join(m.group(1).strip() for m in script_matches)
with open(r'c:\Users\gilang cahya pratama\Downloads\Aplikais web\BRM\script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

# Replace all styles with empty string, but put <link> where the first one was
if style_matches:
    first_style = style_matches[0]
    content = content[:first_style.start()] + '<link rel="stylesheet" href="style.css">' + content[first_style.end():]
    # Re-evaluate remaining matches in the new string by replacing them with empty string
    # A simpler way is to just use re.sub for the remaining
    content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL)

# Same for script
script_matches = list(re.finditer(r'<script>(.*?)</script>', content, re.DOTALL))
if script_matches:
    first_script = script_matches[0]
    content = content[:first_script.start()] + '<script src="script.js"></script>' + content[first_script.end():]
    content = re.sub(r'<script>.*?</script>', '', content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
