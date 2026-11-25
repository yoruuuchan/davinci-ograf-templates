# 渐变三段变奏 · Gradient morph transition

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/transition/gradient-transition/GradientTransition.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文：前两段「光，弯下来。」「把它，聚焦。」逐字 blur 升起（中文按字、英文按词），第三段品牌位「上新」字距收拢入场；都做成字段。
- 去掉 video-shotcraft 标志（ShotcraftMark）：品牌位只留可填的品牌名文字，字距收拢入场保留，旁边不补几何形。
- 「Introducing」小标签和品牌短句 PITCH 换成一个 lines 字段：一行一段（第一、二段逐字升起，第三行是品牌位上方的小标签），副句单独一个 text 字段，留空不显示。
- 底部技术注记整块去掉：实时参数读数和 01/03 段号是调试装饰，不是内容；底部的发丝线跟着去掉。
- 渐变三段全保留：linear 角度扫过（HSL 三通道插值）、radial 圆心对角游走加半径扩张（circle 半径用 px）、conic 三色环旋转带 ease-out 长尾落定；480×270 小画布作画再放大 4× 的性能写法照搬；conic 段文字侧压暗 scrim 保留。
- 颜色三个字段：渐变亮色、渐变冷色、暗底色；三段渐变的色标都从这三个字段在 HSL 空间推，保持亮色加暗色配对、radial 外圈暗的结构。
- 第三段品牌名字号跟前两段大字字号等比（原卡 156/180 的比例）；字体用包里的思源黑体。
- 原卡 conic 段到 200 帧本来就是越转越慢落定，不是匀速循环；超过原卡长度后转角维持在终值 250deg、颗粒照常，画面停住（hold 160）。
- 透明背景：勾上后渐变层、压暗层、暗角全都不画，只剩三段前景文字——这张是背景卡，一般不要勾。
- 原卡没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
