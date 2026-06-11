import os
import re

def process_file(filepath, is_subpage=False):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        return

    css_path = "../delinternet-premium.css" if is_subpage else "delinternet-premium.css"
    link_tag = f'<link rel="stylesheet" href="{css_path}" type="text/css" media="all" />'
    
    if link_tag not in content:
        # Inject just before </head>
        new_content = content.replace("</head>", f"    {link_tag}\n</head>")
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Injected CSS into {filepath}")

files = [
    ("index.html", False),
    ("fibra-2/index.html", True),
    ("ion-mobile-2/index.html", True),
    ("contacte/index.html", True)
]

for filepath, is_subpage in files:
    if os.path.exists(filepath):
        process_file(filepath, is_subpage)

