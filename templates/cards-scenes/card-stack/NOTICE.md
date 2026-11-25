# 卡片弹入展扇 · Card stack

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/card-stack/CardStack.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；标题、副句、标题字号、舞台色、文字色、强调色都能在检查器里改。
- 原卡九张假封面（甘特、柱图、折线、圆环、表格、日历、看板、大数字、品牌主图）全部换成 images 字段里的图片：每张按 cover 铺满 320×440 的圆角卡，横图、竖图、方图都不拉伸；不填时画 9 张带序号的瓷白占位卡，动作照常完整播放。
- 卡片张数跟着图片张数走（1–12 张，超过 12 张只取前 12 张），入场错峰仍是 2–42f；超过 9 张时扇形步长和角度按总跨度 1104px / 52° 重算，两端的卡不出画。主角永远是中间那张（偶数张取中间偏左那张）。
- 去掉左上角的品牌标志和「video-shotcraft · shot recipes」眉题。
- 去掉卡面上的标题、mono 元信息、迷你头像和「2.4s · 30 fps」假信息，只留图片（或占位卡）本身。
- 保留右上角的「09 / 09」入场进度：它是真实的入场计数，分母改成本次的卡片张数。
- 标题按中文逐字、英文逐词升起（错峰随字数收紧，整句仍在 136f 落定）；副句 116f 淡入；两者各自独立，留空只隐藏自己，太长时自动换行、超出可用高度再等比缩小。
- 竖屏时扇形横向步长按画面宽 90% 重算，整扇等比缩小到 90% 宽，标题移到扇面上方并居中；相机基准随之缩放，不裁掉两端的卡。
- 保留原卡 122–150f 的 hold 和极缓推近；原卡没有淡出，这里改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
