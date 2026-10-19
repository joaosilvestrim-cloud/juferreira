import glob, sys
from PIL import Image, ImageDraw
files = sorted(f for pat in sys.argv[2:] for f in glob.glob(pat))
W, H, cols = 220, 150, 8
sheet = Image.new('RGB', (cols * W, ((len(files) + cols - 1) // cols) * (H + 18)), 'white')
d = ImageDraw.Draw(sheet)
for i, u in enumerate(files):
    im = Image.open(u).convert('RGB'); im.thumbnail((W, H))
    x, y = (i % cols) * W, (i // cols) * (H + 18)
    sheet.paste(im, (x, y)); d.text((x + 2, y + H + 2), u.replace('public/images/ph/', '').replace(chr(92), '/'), fill='black')
sheet.save(sys.argv[1]); print(len(files))
