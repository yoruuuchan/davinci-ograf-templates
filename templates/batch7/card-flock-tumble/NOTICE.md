# 卡群翻飞收束 · Card flock tumble

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/transition/card-flock-tumble/CardFlockTumble.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；卡片图、巨字、标语、品牌名、品牌标志、背景色、强调色、辉光色、文字色和巨字字号都能在检查器里改。
- 原卡的假工作台（侧栏 Home/Inbox/Shots/Renders/Gallery、收件箱名单、状态 chip、渲染柱状图、头像 Jamie Lee、video-shotcraft 标志与字标）全部去掉，卡面整块换成用户的图片，按 cover 裁进 560×400、16px 圆角的卡；留空时画 3 张深紫占位卡（淡图片图标 + 01/02/03）。
- 卡片张数跟着图片走：2–5 张，超过 5 张只取前 5 张；3 张沿用原卡左/中/右斜阶，2 张取中/右，4–5 张把站定间距压到 75×70px，仍读作一叠。
- 新增卡的三段样条关键位姿在原来的左/中/右极点之间按序号插值，没有复制写死坐标；每张卡仍只走一条 Catmull-Rom 样条（out cubic 44f）。
- 站定后慢转保持原卡（ry +0.34°/f、rx −0.1°/f、rz +0.05°/f，14f 平方缓入，到收束不停）；收束改成前 60% 全不透明，后 40% 淡出。
- 原卡两行 300px 斜体描边英文「CRAFT THE SHOT」换成巨字的重复描边（不斜体、0.16 透明度、两行反向缓移），收束时向心缩淡；描边用 feMorphology 取环，不用 -webkit-text-stroke，避免中文字内部重叠轮廓出线。
- 巨字改成中文字面，不再斜体；白→淡紫的固定渐变改成「文字色 → 强调色」的渐变，泛光从辉光色/强调色推出来。
- 原卡 ShotcraftMark 标志 + video-shotcraft 字标眉题换成可填的品牌标志 + 品牌名；英文 PITCH 口号换成 motto 字段。
- 烟雾环不再用 feTurbulence + feDisplacementMap（渲染器可能不支持 SVG 滤镜），改成固定种子的环带散点：几百枚小椭圆 + 两层模糊环带 + 明暗斑块，仍然只有一个环、减速外扩、衰减极慢，不会退回干净圆环。
- 巨字之后原卡会无限缓慢长大，现在由 meta.hold（第 135 帧）夹住；片段结尾用统一的出场。
- 竖屏按画面宽 / 1920 等比缩放整个 1920×1080 设计并居中，巨字单行并用 FitBox 兜底；烟雾环、闪核按短边重算；标语和眉题在竖屏里不小于 22px。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
