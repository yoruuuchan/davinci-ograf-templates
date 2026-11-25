# 列表摞起跳数 · List stack press

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/list-stack-press/ListStackPress.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡五张整页截图纹理（文字全烤死在图里）换成用户图片：保留白底圆角卡壳、随高度变化的两层阴影、飞行段的纵向 SpeedBlur 和卡内受光沿，卡面整面填图 cover 裁切、不拉伸。
- 支持 1–8 张卡片图，超过 8 张只取前 8 张；张数就是卡片数、计数值和节拍数。不填图时画 5 张纸面浅色占位卡（淡图片图标 + 序号），动作照常。
- 卡片少于 5 张时卡片仍是原高，整摞变矮、相机终点按摞高重算；6–8 张时逐张降低卡片高度，让整摞在 0.86 的终点机位仍占原来的画面高度。
- 高亮词改成 list 字段，一行一个，按顺序对应每张卡；某张卡没有对应词就不划。原卡写死的 HL_W 像素改成按该词的实际宽度量，字多长条多长。
- 高亮条从 multiply 改成「浅版强调色 + normal 混合 + 轻微外发光」：原卡 multiply 在高饱和或深色照片上几乎看不见；现在深浅图都能读出荧光笔。
- 计数器数字不填，等于卡片张数；眉题和底行是独立文字字段，底行留空只隐藏底行，发丝线保留。DigitRoll 仍是连续 pos、双份 0–9 带、tabular-nums、8f 滚一格，落卡间距 12f，尾格在镜头收尾前滚定。
- 卡片图、卡片数、卡片高度变化后，卡位、摞高、相机起终点、glaze 起终点全部重算，不再用原卡写死的 pageH 1489 和卡位表。
- 节拍保持 12f 等距；5 张时片长 3 秒，6–8 张线性变长（8 张约 4.1 秒），需要在时间线上把片段拉长。
- 去掉原卡整页底图里烤死的假界面文字；保留纸面暖底和计数器版式（眉题／大数字／发丝线／底行）。竖屏时卡片收到画面宽 88%、整摞居中。
- 原卡没有自己的淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
