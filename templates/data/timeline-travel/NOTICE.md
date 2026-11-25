# 时间轴急停推近 · Timeline travel

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/data/timeline-travel/TimelineTravel.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；站列表、页眉两行、三个颜色和字号都能在检查器里改；一个 stops 字段一行一站（刻度名｜日期｜标题｜说明｜指标），后三列可省，3–6 站自动重算总行程和每站的弹起时机，超出 6 站只取前 6。
- 远景视差大字从原卡的英文月份改成取该站刻度名（v1.0、今天……），字号 280、0.35× 视差、按距离交叉淡入淡出照原卡。
- 原卡的 Shotcraft 标志去掉，页眉改成 eyebrow + title 两个文字字段，清空哪个只隐藏哪个。
- 卡片标题、说明、指标和刻度标签过长时自动缩小或换行，不出卡片边框；卡片尺寸随字号等比缩放。
- 次刻度小点按站距自动铺满行程，不再写死 22 个；7 站以上只取前 6 站（再多冲刺段速度过高、卡片不可读）。
- 背景柔光亮场围绕背景色字段重建（原卡 Backdrop 的渐变是写死的浅灰）；透明背景时不画光场、暗角、颗粒，轴线、刻度和卡片照画。
- 中文文字的字距回到 0（原卡的负字距只对英文大字有效）。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
