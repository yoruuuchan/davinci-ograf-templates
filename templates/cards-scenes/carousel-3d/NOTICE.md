# 3D 环形画廊 · 3D carousel

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/carousel-3d/Carousel3D.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 卡面原来的假配方信息（mono 编号、生成式图形、大数字与单位、底部 meta 行）整块去掉，换成用户的图片，object-fit: cover 裁切、不拉伸；没填图时画石墨底占位卡，带一个淡淡的图片图标和 01、02…… 序号。
- 卡面上不再显示名称，只保留环下大字幕；名称改成 list 字段，一行一个，少于图数时剩下的卡只显示编号，多于图数时多余的忽略。
- 环上卡数跟图片数走：有图时几张图就摆几张卡（建议 4–12 张，最多 12 张），不重复用图凑数；N≤8 时半径仍是原卡的 700，N>8 时半径按 700×N/8 放大，卡片尺寸不变。
- 去掉左上角的 video-shotcraft 标志与「shot recipes」、右上角的「1080P · 30 FPS」和 96 格刻度环。
- 动作照原卡：50% 匀速底 + 50% 分步，每 21 帧一步（8 帧停靠 + 13 帧换位），双面同向贴图 + backface-visibility:hidden，正前方的卡沿法线外推 44px，相机固定浅俯角，空气透视压暗，地面反光盘和倒影环保留。
- 点亮逻辑保留：正前方卡用强调色描边，另外加一圈很淡的强调色外发光，让图片卡也能看出被选中；点亮描边、底光和字幕编号色都从强调色推。
- 底色、卡面色、强调色、文字色各做成 color 字段，字幕字号做成 number 字段（原卡 72）。
- 字幕编号的分母跟卡数（图片数）走，不再写死 08。
- 整块构图按画面宽度等比缩，竖屏时环、卡片和字幕一起缩小并居中，不出框。
- 原卡 168 帧正好一圈；现在超过 168 帧环继续转，片段可以剪长。默认 5.6 秒，图片多时一圈更长。
- 透明背景时去掉舞台、底光、地面反光盘和倒影环，只留卡片和字幕。
- 卡片名称太长时自动缩小，不截断；名称只有一行时其余卡只显示编号。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
