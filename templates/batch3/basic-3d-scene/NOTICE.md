# 三维章节漫游 · 3D chapter flight

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/camera/basic-3d-scene/Basic3DScene.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；章节、总览标题、眉题、副句、品牌名、标志、四种颜色和标题字号都能在检查器里改。
- 章节来自一个 lines 字段，一行一章，用「｜」分成「编号｜小标题｜大标题｜说明」；只写一段就当成大标题、编号自动 01/02…，编号、小标题、说明留空就不显示。支持 2–5 章（默认 3），超过 5 只取前 5。
- 站位、飞行时刻表、进度线段数都按章节数算，不再写死三章版本；3 章沿用原卡 36/64/96/128/158/190/225 的节奏，每加一章在总览之前多一组「飞行 28 帧 + 停留 30 帧」。
- 新增章按同一套「每站至少一个新变换维度」生成站位；总览拉远倍数按所有卡的实际包围盒数值求解，保证全部同框（默认 3 张约 2.7）。
- 每张卡右上角的品牌标志 + 字标改成只留品牌名文本；标志只在总览落版出现，三张卡上不重复；品牌名留空就不显示。
- 去掉章节号和眉题之间那条 44px 装饰短线、「Chapter ·」英文前缀；章节数字和进度线是真实信息，保留。
- 标题、说明、总览文案太长会自动缩小或换行，不出框；竖屏时整座世界按 min(宽/1920, 高/1080) 缩小（perspective 跟着缩），总览落版按 1920×1080 排版随世界缩放。
- 运动模糊保留但子帧上限从 8 压到 5。
- 不再写死 225 帧的 hold：总时长按章节数算出，画面在末尾自然停住；离场由宿主统一驱动（前景上飘淡出）。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- Noto Serif SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSerifSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
