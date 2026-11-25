# 空心字点亮 · Outline word fill

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/outline-word-fill/OutlineWordFill.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文「更快」；大字、左标签、左数值、右标签、右数值、眉题、副句、标志、底色、强调色、点亮字色和字号都能在检查器里改。
- 空心字改用内联 SVG：一条描边宽度为线宽两倍的文字，再用 mask 挖掉字形实心部分，只留字形外侧那一半；思源黑体的汉字笔画内部不再出现交叠线。实心字仍用 SVG 文字填充。
- 去掉内圈 72 格刻度环和虚线圆上的四个套准刻度。
- 虚线大圆半径不再写死 410，改成按大字的实际宽度算（字宽一半加 0.45 倍字号），最大为画面短边的 45%；字太长时大字等比缩小，保证仍留在圆内。
- 原卡「video-shotcraft」标志和品牌名换成可选的标志图片字段与眉题文字字段，默认只显示中文眉题「速度对比」。
- 原卡第 54 帧硬切点亮、8 帧辉光衰减、冲击环、主圈锁定刹车、两侧虚线内伸和读数淡入都保留；眉题和副句的出现帧号也与原卡一致。
- 原卡 90 帧走完就结束，没有自己的出场；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
