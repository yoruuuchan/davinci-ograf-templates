# 手绘圈注 · Pen trace annotation

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/draw-svg-trace/DrawSvgTrace.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 改成叠加层：不加背景，没有「透明背景」开关，只画圈注、标注和下划线；适合放在视频轨道上方。
- 去掉原卡报告卡的全部内容：眉题、100%、逐镜头能量柱、署名行和绘图纸点阵底。
- 描边闭合后不再淡出，也不交棒给卡片边框，一直留在画面上当圈注。
- 框中心的横纵位置、框宽、框高、圆角都做成字段；按舞台的百分比定位，靠近边缘时自动往里收，框不会出画。
- 新增标注字段；框闭合后标注淡入，优先放在框上方，上方放不下就放下方，太长会自动换行并缩小，始终留在画面里。
- 标注下面用原卡给100%画下划线的那支朱红马克笔补一笔18帧 out-cubic的笔画，笔头跟着走。
- 线条颜色、强调色、标注文字颜色和线宽都做成字段；笔头的粗细和落影跟着线宽缩放。
- 原卡结尾的0.9%缓慢推近去掉，描边落定后画面完全静止；片尾由宿主统一上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
