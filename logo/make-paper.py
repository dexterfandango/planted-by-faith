# Seamless handmade (mulberry-style) paper tile: blush base tinted toward the logo rose, soft mottling, scattered fibres, low contrast.
import random, math, sys
from PIL import Image, ImageDraw, ImageFilter
random.seed(11)
N = 640
out = sys.argv[1]
base = (249, 238, 236)                     # blush, a whisper of the logo rose (#AD5170)
img = Image.new('RGB', (N, N), base)

# Soft mottling: low-res random field, blurred, wrapped so it tiles.
small = Image.new('L', (16, 16))
small.putdata([random.randint(0, 255) for _ in range(256)])
big = Image.new('L', (N * 3, N * 3))
m = small.resize((N, N), Image.BICUBIC)
for dx in range(3):
    for dy in range(3):
        big.paste(m, (dx * N, dy * N))
m = big.filter(ImageFilter.GaussianBlur(40)).crop((N, N, 2 * N, 2 * N))
shade = Image.new('RGB', (N, N), (238, 218, 218))
img = Image.composite(shade, img, m.point(lambda v: int(v * 0.28)))

# Fibres: thin curved strands, drawn on a 3x3 canvas so they wrap across tile edges.
layer = Image.new('RGBA', (N, N), (0, 0, 0, 0))
d = ImageDraw.Draw(layer)
def strand(x, y, length, ang, curve, width, col):
    pts = []
    for i in range(24):
        t = i / 23
        a = ang + curve * (t - .5)
        pts.append((x + math.cos(a) * length * t, y + math.sin(a) * length * t))
    r, g, b, a = col
    for i in range(len(pts) - 1):
        t = i / (len(pts) - 2)
        fade = int(a * min(1, 3 * t, 3 * (1 - t)))
        for ox in (-N, 0, N):
            for oy in (-N, 0, N):
                (x1, y1), (x2, y2) = pts[i], pts[i + 1]
                d.line([(x1 + ox, y1 + oy), (x2 + ox, y2 + oy)], fill=(r, g, b, fade), width=width)
for _ in range(90):                        # pale tan strands
    strand(random.uniform(0, N), random.uniform(0, N), random.uniform(30, 140), random.uniform(0, 6.28), random.uniform(-.8, .8), 1, (205, 160, 172, random.randint(28, 58)))
for _ in range(70):                        # light (lighter-than-paper) strands
    strand(random.uniform(0, N), random.uniform(0, N), random.uniform(30, 120), random.uniform(0, 6.28), random.uniform(-.8, .8), 2, (255, 250, 250, random.randint(80, 135)))
for _ in range(10):                        # a few darker fibres
    strand(random.uniform(0, N), random.uniform(0, N), random.uniform(25, 70), random.uniform(0, 6.28), random.uniform(-1, 1), 2, (173, 105, 128, random.randint(24, 44)))
layer = layer.filter(ImageFilter.GaussianBlur(.6))
img = Image.alpha_composite(img.convert('RGBA'), layer).convert('RGB')

# Fine grain.
g = Image.effect_noise((N, N), 18).filter(ImageFilter.GaussianBlur(.5))
img = Image.blend(img, Image.merge('RGB', [g, g, g]), .025)
img.save(out, quality=82, optimize=True, progressive=True)
print(out)
