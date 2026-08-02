import re

# Update script.js (Remove emojis)
path_js = r'c:\Users\gilang cahya pratama\Downloads\Aplikais web\BRM\script.js'
with open(path_js, 'r', encoding='utf-8') as f:
    js_content = f.read()

js_content = js_content.replace('🙏', '')
js_content = js_content.replace('🙋‍♂️', '')

# There might be an extra space left, let's fix it by regex if necessary
js_content = re.sub(r' \s+$', '', js_content, flags=re.MULTILINE)

with open(path_js, 'w', encoding='utf-8') as f:
    f.write(js_content)


# Update index.html (Replace text symbols with SVG)
path_html = r'c:\Users\gilang cahya pratama\Downloads\Aplikais web\BRM\index.html'
with open(path_html, 'r', encoding='utf-8') as f:
    html_content = f.read()

html_content = html_content.replace('☰', '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>')
html_content = html_content.replace('✕', '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>')
html_content = html_content.replace('×', '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>')
html_content = html_content.replace('→', '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>')
html_content = html_content.replace('✓', '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="20 6 9 17 4 12"></polyline></svg>')
html_content = html_content.replace('◆', '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;"><path d="M12 2l10 10-10 10L2 12z"/></svg>')

with open(path_html, 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Done")
