# 字里有画 · Text as mask

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/opening/text-as-mask/TextAsMask.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认大字改成中文「出片」；大字、字里的画面、眉题、副题、舞台颜色、眉题/副题颜色和字号都做成字段。
- 遮罩从 SVG data URL改成 DOM里的内联 SVG（<mask>里放白色 <text>，内容放 <foreignObject>；填了图时用 <image>），这样包里的字体真正生效。
- 字里的画面改成图片字段，object-fit: cover铺满面板区域；留空时用原卡的暗色实时面板，但去掉 video-shotcraft标志，所有英文标签换成中文。
- 放大原点不再钉在 L竖笔上：字体加载后用 canvas按当前文字和字号画一遍，从字块中心往外找最近的实心像素，任意文字都能落在笔画上。
- 加了「结尾冲进画面」开关；关掉时停在字里有画的状态，96帧以后保持漂移结束时的位置。
- 全屏面板的接管比原卡略早（rush0.80–0.92），避免两个字的中文在冲入末段露出一大块瓷白。
- 原卡最后没有淡出；模板改用片段结尾统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
