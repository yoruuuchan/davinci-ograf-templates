# 滚带定针读数 · Tape gauge

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/data/gauge-readout-moves/TapeScrollFixedPointer.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；眉题、标题、结论、旧/新上限、单位、两个上限标签和四个颜色都能在检查器里改。
- 眉题左侧的 36×3 强调色装饰短横线去掉；video-shotcraft 品牌眉题换成可填的眉题字段，留空不显示。
- 「▲ 200%」涨幅胶囊和「140k → 420k」小结不再写死，由旧/新上限自动算：涨幅 = (新−旧)/旧，新上限低于旧上限时箭头自动变 ▼、百分比变负数；不单独给字段。
- 刻度步长和比例尺从新上限反算：步长取 1/2/5×10^k 让可见范围约 8–12 个主刻度（每 5 小格一个大刻度），新上限小于 1 时步长自动落到 0.1/0.2/0.5；px/单位 = 2268/新上限（整条量程约 2.1 个画面高），冲刺速度和运动模糊跟着上限走，不再写死 5px/单位。
- 数值时间线照原卡节奏，关键值从两个上限推：0–14f 停在 0.43×旧上限、10–48f 慢爬到旧上限、52f 虚线断开、56–61f 回拉 4%、61–83f 冲刺到 1.057×新上限、83–110f 弹簧刹车回摆落定，超调约 8%，110f 后锁死。
- 读数字号随位数自动缩（5 位起缩到 92），窗口宽 400 不变；标题、结论、眉题太长自动缩小，不压到右侧刻度带（左栏 760px）。
- 原卡标题 750 字重落到 700；字体改用打包的思源黑体和等宽字体。
- 90–150f 的 1.0→1.025 缓推保留；原卡没有自己的淡出，改成片段结尾统一的上飘淡出。
- 竖屏时整块画面按不小于画面宽 92% 的比例整体缩小居中，不重排。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
