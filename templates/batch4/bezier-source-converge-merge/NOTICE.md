# 多路汇一点 · Bezier converge

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/bezier-source-converge-merge/BezierSourceConvergeMerge.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；来源、结尾字幕、汇聚点标志、强调色、文字色、底色、字体都能在检查器里改。
- 来源节点数量由实际行数决定（2–8 路，超过只取前 8 路）：起始行均布，曲率、驻留位、错峰全部按条数现算；5–6 路纵向间距收紧；超过 6 路节点改两列左右错开，曲线仍汇向同一点；2 路也完整好看。
- 去掉来源节点上的四种灰阶假图标（假素材示意），圆片上改显示该路的名称小字（字号照原卡系数随节点缩放）；填了小标签且只有 4 路以内时，标签显示在圆片下方。
- 汇聚点从 video-shotcraft 标志换成 image 字段：填了图片按比例缩进徽标里（圆角小图），留空显示一枚中性强调色圆点；徽标的淡入、吞并时 outBack 脉冲和接收涟漪照原样保留。
- 结尾字幕换成字段：默认两行，逐词（中文逐字）从占位灰加深到文字色，太长自动缩小，居中在徽标下方、随结尾平移一起走。
- 曲线描边的灰→墨渐变、占位灰、节点字的深浅阶梯全部从文字色和底色推出来，不再写死原卡色板。
- 原卡到第 167 帧定格在「徽标居中 + 字幕」的画面，片段剪长以后也停在这一帧；片尾由宿主统一上飘淡出。
- 原卡 480×270 设计坐标照用，整块内容按画面等比缩放（横屏约 4 倍），竖屏同样居中不出框。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
