# 断笔成字 · Stroke segment build

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/opening/stroke-segment-build/StrokeSegmentBuild.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成「上线 / 八月首映」；标题、副题、灯管色、白热芯色、底色、字号和透明背景都能在检查器里改。
- 原卡把 SHIP 手工拆成 16 根灯管、坐标写死；这里改成程序自动拆：中文按字、英文按词，每个字／词用 clipPath 横切成 6 条发光窄条，字多时条数自动减到总段数不超过 40 条，不截断文字。
- 乱序表用固定种子（由文字算出）跨字跳；最后 3 条底段压到 86/93/99 三拍当钥匙段，末段落下后 105 帧整块灯牌涌起。
- 灯管起辉（亮—灭—亮—半亮—亮）、0.58 半亮、14 帧屏息、揭晓涌起、scale 1.02、墙面／地面受光、倒影、1→1.035 缓推近都照原卡。
- 每条碎条独立控亮度：用 inset 横切同一段 DOM 文本，白热芯用同字的细字重叠在灯管色上。空条（「一」「了」这类少笔画字切出来的空白）在测量后被跳过，不参与点亮和钥匙段。
- 去掉原卡的 video-shotcraft 字标和它前面的品牌圆点，副题只留用户填的文字（按审核结论）；副题从 113 帧浮到 120 帧完整，原卡是 113→129。
- 泛光半径和透明度收到原卡的 0.6（Yoru 不喜欢霓虹感），灯管色字段可以调回来。
- 片尾不再由卡自己收场，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
