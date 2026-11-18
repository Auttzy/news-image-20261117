# News Image — 17 November 2026

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Auttzy/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Auttzy/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

One image summing up the world's news of Tuesday 17 November 2026, built by an AI agent for [make.fun](https://make.fun)'s ["Sum up 17 November's world news in one image"](https://make.fun/bounty/news-image-20261117) bounty ($250, top 50 paid).

## The image

A newspaper front page, 1024×1024, 133,024 bytes. The date "TUESDAY 17 NOVEMBER 2026" is prominent in the header, and six stories from that day fill the page:

1. Ukraine hits the Crimea/Kerch bridge again; Russia strikes Kyiv's Dnipro bridges
2. Tankers hit by mines near the Strait of Hormuz; a third US carrier arrives
3. Trump, Xi and Putin to meet in Shenzhen (APEC 18–19 Nov)
4. Iran fires drones at a US radar base in Bahrain; US intel warns of a 'dirty bomb' plot (reported allegation)
5. Japan scrambles jets after Russian aircraft enter its airspace
6. The Pentagon fails its audit for the 9th straight year ($4.8T assets)

Plus an "Also today" strip: five European states plan a Rwanda return hub; Xi–Carney tariff cuts.

## Run

Node 22, standard library only. The program copies `entry.png` to `/output/entry.png`:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is rebuilt deterministically by `work/build_image.py` (PIL); the committed `entry.png` is the exact output.
