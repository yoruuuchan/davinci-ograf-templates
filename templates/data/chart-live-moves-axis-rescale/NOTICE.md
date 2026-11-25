# 爆表重标折线 · Axis rescale shock

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/data/chart-live-moves/AxisRescaleShockV2.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；标题、眉题、KPI 标题与首末数字、系列数据、真值标签副行、三个颜色和字号都能在检查器里改。
- 去掉 video-shotcraft 标志和品牌字标，左上角改成一行眉题文字（留空不显示）；原卡标志位置不再留空位。
- 系列从写死的十二个值改成 8–14 行的一个字段，一行一个「标签｜数值」，x 方向按行数均分；超过 14 行只取前 14 行。最后一行是爆表点，语义不满足时冲出高度按比值缩到至少 120px。
- 重标前后的刻度改成自动生成：旧量程 = 次大值向上取整到 1/2/2.5/5×10ⁿ，新量程 = 爆表值向上取整（默认 100k 与 400k，刻度 25k–100k / 100k–400k）；数字 ≥1000 才用「k」缩写。
- 冲出天花板的高度从写死的 226px 改成按「爆表值 / 旧量程 − 1」算，夹在 120–320px。
- KPI 的 493k → 833k 与系列数据无关，改成 kpiFrom / kpiTo 两个数字字段手填，不自动求和。
- 真值标签的大数字按爆表值自动格式化成「340k」；副行里写了百分比就按系列最后两行自动重算，其它文字原样显示，留空只显示大数字。
- 穿透碎屑按任务说明保留两片（原卡三片）；穿透帧、裂口、图表震 10px、预警、悬停柔光、端点 overshoot 和涟漪全部照原卡。
- 原卡最后 400ms 的推镜改成 126f 起 1 → 1.018 缓推；原卡自己的淡出删掉，改成片段结尾由宿主驱动的上飘淡出。
- 竖屏和 4K 时整页按画面短边缩放居中；透明背景不画米色纸底、柔光和颗粒，排线面积与网格照旧。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
