# 沿增长线流入 · Text on path

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/type-assembly-moves/TextOnPath.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；标题、纵轴刻度、季度标记、数值牌、眉题、副句、颜色、字号都能在检查器里改。
- 字宽和弧长按真实字宽每次重算（中文字约 92px，比原卡 18 个字母宽），车头行程、字间距和摆正终点都按实测值。
- 去掉底部 JAN–NOV 月份刻度（纯装饰，对应不到数据）；纵轴刻度改成 lines 字段，网格线跟着条数走。
- 季度标记改成 lines 字段「标签｜数值」，沿曲线从 35% 到 90% 均匀放。
- 图表小字从等宽字体换成无衬线（等宽在中文里逐字回退），数字保留 tabular-nums。
- 竖屏重排：上半屏眉题、标题、副句，下半屏曲线和数值牌，曲线控制点按竖屏宽高重算，字号不缩。
- 原卡没有离场，结尾停在 1.5% 极缓推近处，由片段结尾统一的上飘淡出收尾。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
