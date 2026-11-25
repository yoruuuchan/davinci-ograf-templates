# 单选反黑揭晓 · Chip select

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/interaction/chip-grid-single-select-blackout/ChipGridSingleSelectBlackout.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；眉题、问句、选项、选中项、现价、原价、后缀、优惠标签、四个颜色都能在检查器里改。
- 眉题去掉了 video-shotcraft 的标志和品牌名，只留一句强调色小字，留空不显示。
- 选项 1–9 个，每行最多 3 个、整块居中，默认 5 个排成 3+2；超过 9 个只排前 9 个。
- chip 宽度按实际文字量出来（每次渲染都量，检查器里改字会重排），收束位移、回中线、光标落点、反黑块尺寸都用同一份宽度；某个名字太长只缩这一枚的字号（不小于 32px）。
- 灰闪从「第 56 帧整」改成 56 ≤ f < 57 的区间，25/60fps 时间线不会漏帧。
- 结算默认值换成人民币写法（¥34 / ¥42 / 立省 18%），结构照原卡；结算文案和选中项各自独立，选哪项不会自动改价格，要自己填。
- 原价先升起再被划线划掉、现价逐字升起、标签最后弹出，帧号和缓动照原卡；原卡 165 帧之后的画面定住不动，片段结尾用宿主统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
