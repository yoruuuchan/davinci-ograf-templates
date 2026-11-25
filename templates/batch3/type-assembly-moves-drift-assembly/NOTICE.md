# 漂移合拢片名 · Drift assembly

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/type-assembly-moves/LetterformDriftAssembly.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文四个字「光影工坊」（原卡是九个字母的品牌简称 Shotcraft）；标题、三种颜色、字号、字体都能在检查器里改。
- 中文逐字、英文逐字符拆开漂移；每个字的漂移方向沿用原卡的 sin 哈希按字序取，同一段文字每次方向都一样。
- 字数超过 12 个时逐字错峰从 3 帧压到 2 帧，别让片名入场拖太久；一行放不下时整词等比缩小。
- 落定加深脉冲的描边从 -webkit-text-stroke 换成八个方向各 3px 的 text-shadow（可变字体描边会在汉字笔画内部描出交叠线），颜色照旧从文字色压向纯黑。
- 原卡 104–150 帧静止后硬切走，改成停住，片段结尾由宿主统一上飘淡出，片段剪多长都行。
- 背景柔光保留（主光 50%/32%、背光色淡染、暗角、颗粒）。原卡没有品牌标志和装饰小字，无装饰可去。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
