# 点阵聚成数字 · Dot swarm regroup

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/data/chart-live-moves/UnitDotSwarmRegroupV2.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；四句叙事标题、眉题、最多 4 组「名称｜数值」、终幕大数字、底部注记、强调色、背景色、文字色和标题字号都能在检查器里改。
- 原卡三组数固定为 180/102/38 点，改成按各组数值比例分配 320 点，最少的一组也保底 12 点；簇心和柱位从写死的 [520,1000,1420] 改成按组数在绘图区均分。
- 终幕从「手算单线骨架拼出 12,847」改成普通大字号数字 + 点群聚成数字背后的均匀矩形点阵光晕，任意数字都能填，不会糊。
- 组色从写死的三组色改成：数值最大的一组（主角组）用强调色，其余组从文字色推出两个灰阶；终幕所有点统一收拢成强调色。
- 眉题去掉了原卡的 video-shotcraft 标志，只留文字。
- 原卡第三幕 8 列柱、4 组时 6 列柱，保持；原卡最后 64 帧极缓推镜 1→1.02 保留，原卡自己没有淡出，改成片段结尾统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
