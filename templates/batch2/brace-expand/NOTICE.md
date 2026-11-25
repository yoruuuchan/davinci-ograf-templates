# 花括号拉幕 · Brace expand

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/brace-expand/BraceExpand.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；标题、眉题、副标、括号色、文字色、底色和标题字号都能在检查器里改。
- 括号的半宽不再按品牌名字宽写死，改成每次渲染量标题的实际宽度；最终括号中心与标题边之间留出原卡量得的 138px 空当（164px 字号），空当随字号缩放，标题的 clip 宽度严格等于括号间距。
- 标题很短（一到三个字）时，括号至少弹到和默认四字标题差不多的位置（括号中心半距 440px，按字号缩放），保证看得出从中间弹开；整组超出安全宽度时仍等比缩小。
- 标题太长时整组前景等比缩小，竖屏和 4K 仍由宿主整体缩放。
- 括号字号跟着标题字号等比变，间距和上下留白也一起缩放。
- 眉题和副标可以留空；中文副标逐字浮现，英文副标逐词浮现。
- 标题字重从 800 改成 700，括号和眉题用包里的等宽体。
- 品牌名 video-shotcraft 换成标题字段。
- 原卡的点阵网格、顶光、地平线光带和括号下的冷光反射都保留；勾透明背景时全部不画。
- 原卡没有自带出场；改成片段结尾统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
