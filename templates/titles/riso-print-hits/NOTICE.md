# 套印错位标题 · Riso misregistration

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/riso-print-hits/RisoMisregistrationHit.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文：标题「做出来，/要够响。」，三句短卖点，圆章写「套准」。
- 标题、三句卖点、圆章文字、纸面 / 粉版 / 蓝版颜色和标题字号都能在检查器里改。
- 去掉顶部版记和它下面的蓝色横线（角落里的英文小字），保留四角套准十字、太阳和底部三栏。
- 圆章中心的 video-shotcraft 标志换成一个实心小圆。
- 两版放进一个 isolation: isolate 的容器，容器自己也用 multiply 叠回纸面，所以透明背景下两版照样相乘。
- 底部某一栏留空就不显示，剩下的栏重新分宽。
- 标题太长时整块自动缩小；卖点栏文字太多时该栏自动缩小。
- 原卡没有淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。
- 竖屏时整张 1920×1080 海报等比缩小、居中，横屏和4K不变。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
