# 瓦片三态重排 · Mosaic reframe

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/transition/mosaic-reframe/MosaicReframe.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡 12 张程序绘制的「胶片照片」换成 images 字段：按填图顺序铺片，每片 object-fit: cover，宽高分别插值，不整体拉伸；没填图时画 12 张米色占位片（淡图片图标 + 序号）。
- 图片张数可 1–12 张：12 张时严格照原卡的 4×3 网格、6×4 格位主图拼贴和 300×372 相纸瀑布；少于 12 张时 A 按 2/3/4 列重排、B 用 4 列生成式格位（首片 2×2，最后一格跨列补满），C 的首末位置和 −15°→+18° 旋转不变。超过 12 张只取前 12 张。
- 原卡的品牌标志、字标和「Storyboard」换成一行页眉文字；留空不显示，太长自动缩小，宽度压在 C 态第一张相纸左侧。
- 右上角三档控件保留并做成开关：可以关掉（只剩瓦片重排），三个标签可以改，不足三个用默认补，超过三个忽略。
- B 态主图图注拆成标签、标题、副行三个字段，各自留空只隐藏自己；标题按字号字段的 0.68 倍，太长会换行并缩进主图范围。
- C 态标题和副行改成字段；第二行用强调色，中文保持正体、只有英文用斜体，逐字出现，字多时缩小间隔，落定时间和原卡一致。
- 竖屏不再把 1920×1080 整块缩进中间：A 用 3 列、B 用竖版格位、C 的相纸沿右上到左下摊开，相纸降到 260×322，标题放在左上留白；三段帧号不变。
- 沙色舞台的三段渐变、主光、暗角、占位片和控件胶囊都从背景色、文字色、强调色、相纸色推出来；阴影色从文字色和强调色调出来，颗粒保持原卡。
- 原卡没有收场动作；片段结尾加上统一的上飘淡出。原卡尾帧仍是完整海报（entryFrames 190、hold 214、clipMs 7500）。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Serif SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSerifSC.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
