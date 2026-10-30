# Subtle watercolor wash for the rose footer: layered soft blotches with darker
# "bloom" edges and paper granulation, all kept close to the logo rose (#AD5170)
# so the cream footer text keeps its contrast. Made by Claude, 2026-10-29.
import random, sys
from PIL import Image, ImageFilter, ImageChops
random.seed(23)
W, H = 1800, 700
out = sys.argv[1]
rose = (173, 81, 112)
img = Image.new('RGB', (W, H), rose)

def field(cells_x, cells_y, blur):
    small = Image.new('L', (cells_x, cells_y))
    small.putdata([random.randint(0, 255) for _ in range(cells_x * cells_y)])
    return small.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(blur))

def wash(color, cells, blur, cut, strength, edge):
    f = field(cells[0], cells[1], blur)
    # Pigment pools where the field is high; soft threshold.
    m = f.point(lambda v: 0 if v < cut else min(255, (v - cut) * 6))
    m = m.filter(ImageFilter.GaussianBlur(6))
    # Dried edge: the rim of each pool is a touch darker.
    rim = ImageChops.subtract(m, m.filter(ImageFilter.GaussianBlur(10))).point(lambda v: min(255, v * 3))
    global img
    img = Image.composite(Image.new('RGB', (W, H), color), img, m.point(lambda v: int(v * strength)))
    img = Image.composite(Image.new('RGB', (W, H), (140, 56, 88)), img, rim.point(lambda v: int(v * edge)))

wash((160, 70, 102), (9, 4), 30, 140, .55, .25)    # deeper rose pools
wash((186, 96, 126), (12, 5), 26, 150, .45, .18)   # lighter rose lifts
wash((163, 76, 118), (7, 3), 40, 160, .40, .20)    # a hint of mauve
wash((178, 86, 112), (20, 8), 14, 175, .35, .15)   # small blooms

# Paper granulation.
g = Image.effect_noise((W, H), 30).filter(ImageFilter.GaussianBlur(.7))
img = Image.blend(img, Image.merge('RGB', [g, g, g]), .03)
img.save(out, quality=80, optimize=True, progressive=True)
print(out)
