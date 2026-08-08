"""Add the missing Danish glyphs to chill.woff, drawn on the font's own 50-unit pixel grid.

The base letters are rasterised from the font itself, then marks (stroke, ring, acute)
are composited on the same grid, so the new glyphs match the existing design exactly.
"""
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.t2CharStringPen import T2CharStringPen

GRID = 50
# The font's pixel grid is offset from the em origin: cell edges fall on
# x = 75 + 50k and y = -50 + 50k. Sampling on (0,0) would land on cell borders
# and shift every generated glyph half a pixel out of alignment.
X0, Y0 = 75, -50
SRC = sys.argv[1] if len(sys.argv) > 1 else "chill.woff"
DST = sys.argv[2] if len(sys.argv) > 2 else "chill-da.woff"

font = TTFont(SRC)
gs = font.getGlyphSet()
cmap = font.getBestCmap()


# ---------- rasterise an existing glyph to a cell set ----------
def contours(name):
    pen = RecordingPen()
    gs[name].draw(pen)
    out, cur = [], []
    for op, args in pen.value:
        if op == "moveTo":
            if cur:
                out.append(cur)
            cur = [args[0]]
        elif op == "lineTo":
            cur.append(args[0])
        elif op in ("curveTo", "qCurveTo"):
            cur.extend([a for a in args if a])
        elif op == "closePath":
            if cur:
                out.append(cur)
            cur = []
    if cur:
        out.append(cur)
    return out


def winding(polys, x, y):
    w = 0
    for poly in polys:
        n = len(poly)
        for i in range(n):
            x1, y1 = poly[i]
            x2, y2 = poly[(i + 1) % n]
            if y1 <= y < y2 or y2 <= y < y1:
                t = (y - y1) / (y2 - y1)
                if x1 + t * (x2 - x1) > x:
                    w += 1 if y2 > y1 else -1
    return w


def cells_of(char):
    """Return (set of (col,row) cells, advance). Cells are indexed off the font origin."""
    polys = contours(cmap[ord(char)])
    xs = [p[0] for c in polys for p in c]
    ys = [p[1] for c in polys for p in c]
    c0 = int(round((min(xs) - X0) / GRID))
    c1 = int(round((max(xs) - X0) / GRID))
    r0 = int(round((min(ys) - Y0) / GRID))
    r1 = int(round((max(ys) - Y0) / GRID))
    cells = set()
    for c in range(c0, c1):
        for r in range(r0, r1):
            if winding(polys, X0 + c * GRID + GRID / 2, Y0 + r * GRID + GRID / 2):
                cells.add((c, r))
    return cells, gs[cmap[ord(char)]].width


def shift(cells, dc=0, dr=0):
    return {(c + dc, r + dr) for c, r in cells}


# ---------- cells -> clean merged outlines (marching squares) ----------
def cells_to_contours(cells):
    edges = {}
    for c, r in cells:
        x0, y0 = X0 + c * GRID, Y0 + r * GRID
        x1, y1 = x0 + GRID, y0 + GRID
        # Walk each boundary side keeping filled area on the left.
        if (c, r - 1) not in cells:
            edges[(x0, y0)] = (x1, y0)
        if (c + 1, r) not in cells:
            edges[(x1, y0)] = (x1, y1)
        if (c, r + 1) not in cells:
            edges[(x1, y1)] = (x0, y1)
        if (c - 1, r) not in cells:
            edges[(x0, y1)] = (x0, y0)

    loops = []
    while edges:
        start = next(iter(edges))
        loop, pt = [start], start
        while True:
            nxt = edges.pop(pt)
            if nxt == start:
                break
            loop.append(nxt)
            pt = nxt
        # drop collinear points
        clean = []
        for i, p in enumerate(loop):
            a, b = loop[i - 1], loop[(i + 1) % len(loop)]
            if (p[0] - a[0]) * (b[1] - p[1]) != (p[1] - a[1]) * (b[0] - p[0]):
                clean.append(p)
        loops.append(clean)
    return loops


def bitmap(rows, col0, row0):
    """rows: list of strings, top row first. Returns cell set."""
    cells = set()
    for j, line in enumerate(rows):
        r = row0 + (len(rows) - 1 - j)
        for i, ch in enumerate(line):
            if ch == "#":
                cells.add((col0 + i, r))
    return cells


# ---------- compose the new glyphs ----------
o_cells, ADV = cells_of("o")
O_cells, _ = cells_of("O")
a_cells, _ = cells_of("a")
A_cells, _ = cells_of("A")
e_cells, _ = cells_of("e")
E_cells, _ = cells_of("E")

# Lowercase sits on rows -1..9 (y -50..500); caps reach row 12 (y 650).
LO_TOP = max(r for _, r in o_cells)      # 9
CAP_TOP = max(r for _, r in O_cells)     # 12
COL0 = min(c for c, _ in o_cells)        # 1

# o with stroke: a 2-cell staircase across the counter.
stroke_lo = bitmap([
    "...##",
    "..##.",
    ".##..",
    "##...",
    "#....",
], COL0 + 3, LO_TOP - 7)
# O with stroke: same idea over the taller counter.
stroke_up = bitmap([
    "..##.",
    "..##.",
    "..##.",
    ".##..",
    ".##..",
    "##...",
    "##...",
    "##...",
], COL0 + 3, CAP_TOP - 9)

ring = ["#####", "#...#", "#####"]
acute = ["..###", "###.."]

NEW = {
    "oslash":  (o_cells | stroke_lo, ADV),
    "Oslash":  (O_cells | stroke_up, ADV),
    "aring":   (a_cells | bitmap(ring, COL0 + 3, LO_TOP + 2), ADV),
    "Aring":   (A_cells | bitmap(ring, COL0 + 3, CAP_TOP + 2), ADV),
    "eacute":  (e_cells | bitmap(acute, COL0 + 3, LO_TOP + 2), ADV),
    "Eacute":  (E_cells | bitmap(acute, COL0 + 3, CAP_TOP + 2), ADV),
    # ae / AE: the two letters share a stem, joined across the top.
    "ae": (a_cells | shift(e_cells, dc=8) | bitmap(["#"], COL0 + 9, LO_TOP) | bitmap(["#"], COL0 + 9, LO_TOP - 1), ADV + 8 * GRID),
    "AE": (A_cells | shift(E_cells, dc=8), ADV + 8 * GRID),
}

CODEPOINTS = {
    "oslash": 0xF8, "Oslash": 0xD8, "aring": 0xE5, "Aring": 0xC5,
    "eacute": 0xE9, "Eacute": 0xC9, "ae": 0xE6, "AE": 0xC6,
}

# ---------- write into the CFF table ----------
cff = font["CFF "].cff
topDict = cff[cff.fontNames[0]]
charStrings = topDict.CharStrings
private = topDict.Private

order = font.getGlyphOrder()
added = []
nominal = getattr(private, "nominalWidthX", 0)
default = getattr(private, "defaultWidthX", 0)
print(f"CFF widths: nominalWidthX={nominal} defaultWidthX={default}")

for name, (cells, adv) in NEW.items():
    # A charstring encodes width as an offset from nominalWidthX (or omits it
    # entirely when the advance equals defaultWidthX).
    pen = T2CharStringPen(None if adv == default else adv - nominal, None)
    for loop in cells_to_contours(cells):
        pen.moveTo(loop[0])
        for pt in loop[1:]:
            pen.lineTo(pt)
        pen.closePath()
    cs = pen.getCharString(private=private)
    cs.private = private
    if name in charStrings.charStrings:
        charStrings[name] = cs
    else:
        charStrings.charStringsIndex.append(cs)
        charStrings.charStrings[name] = len(charStrings.charStringsIndex) - 1
    if name not in topDict.charset:
        topDict.charset.append(name)
    lsb = X0 + min(c for c, _ in cells) * GRID
    font["hmtx"].metrics[name] = (adv, lsb)
    if "vmtx" in font:
        # Mirror the base letter's vertical metrics so line layout is unchanged.
        base = cmap[ord("o")] if name[0].islower() else cmap[ord("O")]
        font["vmtx"].metrics[name] = font["vmtx"].metrics[base]
    if name not in order:
        order.append(name)
        added.append(name)

font.setGlyphOrder(order)
font["maxp"].numGlyphs = len(order)
for table in font["cmap"].tables:
    for name, cp in CODEPOINTS.items():
        table.cmap[cp] = name

font.flavor = "woff"
font.save(DST)
print(f"added {len(NEW)} glyphs -> {DST}")
for name, (cells, adv) in NEW.items():
    print(f"  {name:8} cells={len(cells):4} adv={adv} contours={len(cells_to_contours(cells))}")
