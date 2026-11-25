# 一词一几何 · Word relay geometry

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/word-relay-geometry/WordRelayGeometry.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 词表做成一个 lines 字段，一行一组「词｜副句」，2–6 组都行，多写只取前 6 组；默认文案换成中文。
- 第一个词固定用虚线大圆加彗星，最后一个词固定用金属扫光加收白，中间的词都用三圆几何；词变多时每拍加长，整段自动变长。
- 中文描边不用 -webkit-text-stroke（可变字体会在笔画里描出交叠线），改成十六向 text-shadow 外扩的空心轮廓。
- 三圆的 trim 从 pathLength=1 改成实算周长的 dasharray（目标渲染器上 pathLength 不可靠）。
- 去掉不带信息的装饰：外圈 120 格刻度环、内侧淡圆、左上「01 / 03」计数、右上品牌签名；底部进度条和每段的词名保留，编号不再写死。
- 词宽超过画面 78% 时只缩这个词，几何尺寸不动。
- 原卡最后 158–180 帧的静止 hold 改成停住交给宿主出场；镜头推进在 180 帧后收住。
- 副句在很长的文案下自动压缩错峰，保证最后一个词的副句在第 177 帧前后升完。
- 颜色（底色、文字色、扫光金色）和字号都能在检查器里改。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
