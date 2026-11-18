# The Daily Ledger — 17 November 2026

A newspaper front page, drawn as a single image, summing up the world's news
of Tuesday 17 November 2026.

## The image

`entry.png` is a 1024×1024 front page of a broadsheet called "The Daily
Ledger", dated Tuesday 17 November 2026. Six stories from that day share the
page:

1. **Ukraine** — the Crimea / Kerch bridge is hit again, and Kyiv's bridges
   over the Dnipro are struck.
2. **The Strait of Hormuz** — tankers are hit by mines near the strait, and a
   third US aircraft carrier is sent to the region.
3. **Shenzhen** — Trump, Xi and Putin are to meet in Shenzhen.
4. **Bahrain** — Iran fires drones at a US radar base in Bahrain, and a US
   intelligence warning about a 'dirty bomb' plot is carried as a reported
   allegation.
5. **Japan** — Japan scrambles fighter jets after Russian aircraft enter its
   airspace.
6. **The Pentagon** — the Pentagon fails its audit for the ninth year running.

A strip along the foot of the page, "Also today", carries the rest of the
day's headlines.

## The bounty

Built for make.fun's `news-image-20261117` bounty: sum up 17 November 2026's
world news in one image. The prize pool is $250, shared by the top 50 entries.

## How to run it

Node 22, standard library only — nothing to install. The program copies the
artwork into the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reads `entry.png` from beside itself and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` when the variable is
not set). It refuses to run if the artwork is missing, and reports the size of
the file it wrote.
