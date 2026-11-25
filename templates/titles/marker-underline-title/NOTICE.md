# NOTICE

This OGraf graphic is a derivative work of the `marker-underline-title` shot card from
**video-shotcraft** (https://github.com/Vincentwei1021/video-shotcraft, commit 1266a3e),
Copyright 2026 Wei Yihao, licensed under the Apache License 2.0. A copy of that license is in
`LICENSE-video-shotcraft-Apache-2.0.txt` next to this file.

Source files it is based on:

- `demos/typography/marker-underline-title/MarkerUnderlineTitle.tsx` (timings, stroke shape, dry-brush filter)
- `demos/_fixtures/Polish.tsx` (`bezier`, `EASE`, `ramp`, `Backdrop`, `Vignette`, `Grain`)

Changes made in `graphic.mjs` (2026-11-06):

- Rewritten from a React/Remotion component into a plain OGraf v1 web component; no Remotion runtime.
- Text, keyword, colours, background, font size, font and icon are editable fields.
- The stroke length follows the keyword's measured width; its height follows the keyword's ink bottom,
  and a stroke under line 1 opens the line gap when it would touch line 2 (needed for Chinese text).
- Upright keywords get a level stroke, italic ones the card's left-low, right-high slant.
- Long lines shrink the whole title to fit 88 % of the frame width.
- Added a 400 ms exit (drift up, blur, fade); the original card has no exit.
- Default text is Chinese and uses the bundled Noto Sans SC Bold.

The action and schedule handling follows the structure of Novaire's free OGraf graphics
(https://github.com/NovaireGroup/sticker-graphics-free, MIT License, Copyright (c) 2026 Novaire):
every frame is computed from the playhead time and the action schedule. A copy of that license is
in `LICENSE-novaire-MIT.txt` next to this file.

## Fonts

`fonts/` contains Noto Sans SC Bold as unicode-range slices, under the SIL Open Font License 1.1
(`fonts/OFL-NotoSansSC.txt`).
