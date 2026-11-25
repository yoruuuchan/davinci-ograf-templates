# 流线汇流开场 · Stream confluence open

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/opening/dataviz-landscape-open/DatavizLandscapeOpen.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；镜头标签、标题、眉题、背景/文字/强调色、标题字号都能在检查器里改。
- 六枚固定标签（SHOT-01 dolly in 等）合成一个「镜头标签」多行字段：一行一个，粗字和细字用「｜」隔开（比如「开场｜推近」），只写一段字也行。按固定槽位钉到 11 条支流上，最多 11 个，超出的只取前 11。
- 标签不加自动编号，只显示填的文字；默认 6 个沿用原卡的 44/53/62/73/84/96 帧出现，其它数量在 44–104 帧里均匀错峰。
- 标题第二行用强调色；中文逐字升起、英文逐词，节奏压在原卡的 110–146 帧里。
- video-shotcraft 字标和「shot recipes」小字换成眉题字段，留空不显示；标签自动编号没有了，装饰刻度也没有了。
- 去掉底色、地面、浮尘、地平线发丝线、汇点光团：透明背景下只剩线束、标签、标题。
- 1920×1080 写死的常数（焦距、相机高、地平线、模糊、线宽、标签大小）全部按舞台尺寸换算；竖屏消失点仍在宽 2/3，线束完整在画内，标题用 80% 宽的框自动缩小。
- 标签胶囊夹在左右 6%–94% 安全区内，立杆仍指回线上。
- 原卡的离场交给片段结尾统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
