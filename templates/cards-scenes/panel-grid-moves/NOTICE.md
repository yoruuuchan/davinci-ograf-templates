# 漫画斜格分屏 · Comic panel split

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/rhythm/panel-grid-moves/ComicPanelSplit.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 去掉整支 SVG 镜头：镜筒、光圈叶片、对焦环、距离刻度、镜名环上的品牌字、镀膜反光都不再画；三格改用用户填的分格图。
- 分格图改成 images 字段（1–3 张）：3 张时一格一张；2 张时按顺序填前两格、第三格用第二张放大；1 张时三格是同一张的三个机位（全幅 cover、1.6× 中间偏左、2.0× 中间偏上）。每格先按 1920×1080 cover 铺满，再被斜格裁切；放大不超过 2×；没填图时画三档墨色占位块、淡图片图标和 01/02/03，斜缝与吃屏照常。
- 旁白框的 Shot 01/02/03 和「0.3 m → ∞」「f/1.2」假读数去掉，改成一个 lines 字段：一行「小标签｜一句短话」，最多 3 行，少写几行就少几个框；三个框仍钉在左上、中下、右上，统一 -2° 歪斜盖章弹入。
- 原卡 ShotcraftWordmark 换成 logo 图片字段 + 品牌名文字字段；英文标语换成中文副句。
- 三种颜色（背景墨色、纸色、强调色）和标题字号成为字段；旁白框的墨色与硬投影从背景墨色加深推出，不另开颜色。斜缝、白闪、速度线、末格吃屏、半调网点、暗角、颗粒保留。
- 片尾标题两行逐行升起，副句逐字（英文逐词）从模糊里浮出；标题过长自动换行并整体缩小，中文不做斜体。
- 末格吃屏后图片铺右半屏、左侧横向压暗给标题；竖屏把 1920×1080 的三格条按 k = 画面宽/1920×0.92 缩放居中，海报页改成上图（58%）下字（42%）。
- 原卡 156 帧没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行；最后的 1.5% 推近用 clamp，拉长片段只是停在海报。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
