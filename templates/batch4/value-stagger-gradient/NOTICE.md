# 柱阵错峰脉冲 · Value stagger

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/value-stagger-gradient/ValueStaggerGradient.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 柱高改成数据列表：一行一根，或用「、」「|」隔开，每根 0–100，支持 4–24 根，少于 4 根按 4 根排；根数决定柱宽与间距，可画宽度占 84%，柱宽 0.63 格。默认值就是原卡 100→35 的 16 根斜坡，默认画面不变。
- 原卡的高度梯度、色相梯度、位移梯度、模糊梯度都保留，只是高度由你填的值决定；每根的入场节奏仍按索引从第一根到最后一根错峰。
- 顶部的两行语法着色代码条去掉了（那是技法说明，不是内容）；它的位置改成可选的顶部标题，默认留空，填了就淡入上浮显示一行，不参加两拍。
- 颜色改用 OKLCH 插值：底色、首根颜色、末根颜色三个字段，中间各根从首色插到末色，柱体上／中／下三段再由它和黑白混出来；不用 HSL，蓝到粉的中间不发灰。柱群下方的柔光取末色。
- 柱子用 height 从底部生长（不用 scaleY），圆角不被压扁；左侧受光条、地面倒影、下方柔光、暗角、颗粒保留；基线保留，每根柱子下面的装饰小刻度去掉了。
- 整块按 480×270 设计稿等比放大到画面（横屏 ×4）；竖屏按宽度缩到 92%，柱子不出框。
- 勾了透明背景：底色渐变、柔光、暗角、颗粒都不画，柱子、倒影、基线保留。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
