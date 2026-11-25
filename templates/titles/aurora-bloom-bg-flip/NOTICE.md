# 极光翻底转折 · Aurora bloom flip

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/aurora-bloom-bg-flip/AuroraBloomBgFlip.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成两句中文叙事转折；两句文案、光色、亮场底色、暗场底色、亮场字色、暗场字色和字号都能在检查器里改，字体也可以换。
- 中文逐字、英文逐词退场 / 入场；字多时压缩字与字的起跑间隔，第一句仍在原卡 t=0.58 收完，第二句仍在 t=0.90 收色完成，两句之间的空档不交叉淡化。
- 原卡的 480×270 设计坐标换算成 1920×1080，竖屏时整块构图等比缩小居中，不会出框；背景按短边铺满，竖屏裁掉两侧、保留极光主体的纵向构图。
- 原卡第二句里的品牌名换成中文默认文案，默认画面不再出现 video-shotcraft。
- 橙色核心和品红过渡层保留原卡的固定颜色；主紫光从「光色」推出来，第二句的字色也从「光色」收到「暗场字色」。
- 原卡没有自己的淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。
- 超过原卡长度的部分定在第二句收色完成的那一帧（hold 140），之后画面不动。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
