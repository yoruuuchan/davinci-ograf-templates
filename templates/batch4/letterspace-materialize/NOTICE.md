# 字距结晶显影 · Letterspace materialize

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/opening/letterspace-materialize/LetterspaceMaterialize.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 重设计：原卡 13 个单线骨架字形是手绘 SVG path，只覆盖 video-shotcraft 用到的 13 个拉丁小写字符，用户填任意文字（尤其中文）没有字形可用；改成用户填任意文字，渲染成细描边大字（思源黑体 400，-webkit-text-stroke 细描边、描边色即字色）。
- 「笔画连续生长」改成整词共享同一进度的整行扫开：描边层用一条从左到右的柔边 mask（柔边宽度为整行实测宽度的 ±4%）随进度扫开，填色层在进度后 30% 淡入成实心；所有字符仍然同帧起笔、同帧齐收，整词「结晶」的仪式感保住，代价是失去逐笔画手写生长的手感，读作整词同步显影。
- 保留：起笔前 16 帧静置、描画 52 帧、ease-in-out 中段略快、画完瞬间提亮回落、暮色湖景（程序生成）、水面倒影（镜像＋渐隐＋虚化）、背景极缓推近（原卡 105 帧处 clamp）、霞光随结晶微微升亮、颗粒与暗角。
- 默认文案换成中文「成片工作室」；主文字、字色、夜空底色、霞光色、字号、透明背景都是字段。原卡字行高约 83px 在 1080p 偏小，默认字号放大到 120。
- 字长了整行等比缩小不出框；字号 60–220。竖屏和 4K 由宿主整体缩放，湖景坐标按画布尺寸推算。
- 原卡没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
