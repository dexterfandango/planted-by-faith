# Fit the ChatGPT (gpt-image-2) textures to the site, 2026-10-29:
#  paper: shift to the blush target, soften contrast, make it tile seamlessly.
#  watercolor: shift to the logo rose (#AD5170), soften contrast.
# Originals (gitignored, backed up): private/textures/. Pillow only (no numpy on the box).
# Usage: python3 logo/fit-textures.py private/textures/paper-chatgpt.png private/textures/watercolor-chatgpt.png public/images
import sys
from PIL import Image, ImageChops, ImageStat

def refit(im, target, keep):
    mean = ImageStat.Stat(im).mean
    bands = [b.point(lambda v, m=m, t=t: max(0, min(255, round(t + (v - m) * keep))))
             for b, m, t in zip(im.split(), mean, target)]
    return Image.merge('RGB', bands)

paper = refit(Image.open(sys.argv[1]).convert('RGB'), (248, 236, 234), 1.0)
# Seamless: cross-fade with a half-offset copy (whose edges wrap cleanly) near the tile edges.
N = paper.width
rolled = ImageChops.offset(paper, N // 2, N // 2)
def w(i):
    t = abs(2 * i / (N - 1) - 1)
    return t
row = [w(i) for i in range(N)]
data = []
for y in range(N):
    ty = row[y]
    for x in range(N):
        e = min(1, max(0, (max(ty, row[x]) - 0.55) / 0.45))
        data.append(round(255 * e * e * (3 - 2 * e)))
mask = Image.new('L', (N, N)); mask.putdata(data)
paper = Image.composite(rolled, paper, mask)
paper.save(f'{sys.argv[3]}/paper-bg.jpg', quality=82, optimize=True, progressive=True)

wc = refit(Image.open(sys.argv[2]).convert('RGB'), (173, 81, 112), 0.65).resize((1400, 933), Image.LANCZOS)
wc.save(f'{sys.argv[3]}/footer-watercolor.jpg', quality=80, optimize=True, progressive=True)
lum = wc.convert('L')
print('watercolor luminance min/max:', lum.getextrema())
