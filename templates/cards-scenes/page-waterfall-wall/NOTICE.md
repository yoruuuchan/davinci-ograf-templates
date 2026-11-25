# 瀑布墙滚动 · Page waterfall wall

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/page-waterfall-wall/PageWaterfallWall.tsx`
- `demos/ui-entrance/page-waterfall-wall/VerticalTicker.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡的十张假页面切片全部换成用户图片：images 按顺序轮流分到三列，超过 12 张只取前 12 张；每列不足 3 张时用该列自己的图循环补齐，少于 3 张时先按顺序循环铺满三列。
- 一张图都没填时，三列各 4 张暗色占位卡（淡图片图标 + 序号），墙照常滚动。
- 卡片统一 4:5 cover 裁切、圆角、发丝线、顶部受光沿和原卡的两层阴影；圆角和阴影随竖屏列宽等比缩小。
- 原卡卡片里的假研究标题、标签、数字、时间和角落里的品牌字全部去掉，画面里不再有 video-shotcraft 的字样。
- 三列循环固定 12 / 9 / 14 秒，中列反向；每个 item 用 marginBottom 而不是 flex gap，翻倍后 translateY -50% 正好等于单副本周期，接缝不跳。
- 循环相位改成小数取模，25 / 60 fps 时间轴采到两帧之间也连续；镜头 0–150 帧线性推 1→1.06，之后停住，不跟着片段长度越推越远。
- 整墙的 1.2 倍缩放走布局级 CSS zoom，截图按显示尺寸栅格化，推近后不发软。
- 竖屏按画面宽重算列宽和列间距 20，卡高 = 列宽 × 1.25，整面墙落在画面内。
- 背景底色、上下羽化、暗角和颗粒都从 bgColor 推出来；accentColor 是墙后的靛蓝余光；cardColor 是图片衬底和占位卡的纸色。
- 透明背景勾上后不画底色、余光、暗角、颗粒和上下羽化，只留墙和卡片。
- 原卡没有入场，也没有自己的出场；现在墙和上下羽化包在 ExitLayer 里，片段结尾统一上飘淡出，底色和颗粒留在外面。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。

