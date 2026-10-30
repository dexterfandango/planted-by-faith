# Seamless handmade (mulberry-style) paper tile: cream base, soft mottling, scattered fibres.
import random, math, sys
from PIL import Image, ImageDraw, ImageFilter
random.seed(11)
N = 640
out = sys.argv[1]
base = (248, 241, 229)                     # warm cream, close to --paper
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
shade = Image.new('RGB', (N, N), (226, 212, 188))
img = Image.composite(shade, img, m.point(lambda v: int(v * 0.32)))

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
    strand(random.uniform(0, N), random.uniform(0, N), random.uniform(30, 140), random.uniform(0, 6.28), random.uniform(-.8, .8), 1, (196, 172, 130, random.randint(45, 90)))
for _ in range(70):                        # light (lighter-than-paper) strands
    strand(random.uniform(0, N), random.uniform(0, N), random.uniform(30, 120), random.uniform(0, 6.28), random.uniform(-.8, .8), 2, (255, 252, 243, random.randint(110, 180)))
for _ in range(10):                        # a few darker fibres
    strand(random.uniform(0, N), random.uniform(0, N), random.uniform(25, 70), random.uniform(0, 6.28), random.uniform(-1, 1), 2, (150, 120, 80, random.randint(40, 70)))
layer = layer.filter(ImageFilter.GaussianBlur(.6))
img = Image.alpha_composite(img.convert('RGBA'), layer).convert('RGB')

# Fine grain.
g = Image.effect_noise((N, N), 18).filter(ImageFilter.GaussianBlur(.5))
img = Image.blend(img, Image.merge('RGB', [g, g, g]), .035)
img.save(out, quality=82, optimize=True, progressive=True)
print(out)
