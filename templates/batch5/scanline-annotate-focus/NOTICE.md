# 扫描线逐块标注 · Scanline annotate

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/scanline-annotate-focus/ScanlineAnnotateFocus.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 烤死的假品牌官网（shotcraft 标志字标、陶瓶 SVG、假 CTA、色板、六个手量坐标）换成一张 image 字段的页面图，cover 裁进浏览器窗；窗容器、顶栏和两层软阴影照原卡保留，不填图时画中性浅色占位面和淡图片图标，动作照常。
- 六个写死的目标换成 lines 字段：一行一处「横%｜纵%｜标签｜说明」，横纵是框中心在图上的百分比，框默认按图的 18%×14% 估，想改大小可在说明后再加「宽%｜高%」两列；最多 8 处，只写前两列也行（标签用「块 1」占位）。
- 触发全部按坐标反算（沿用原卡 frameAtY 公式，扫描线越过框下缘即触发，同高目标按 4f 最小间隔钳制）；目标多到 4f 间隔会把扫描拖长时，扫描时长自动拉长、节拍重算，扫描线仍然严格匀速。
- 标签文案和标签字号可改（默认 32px 等宽）；签条随字长出，中文按宽字、英文数字按 0.6em 计算长度，标签特别长时整体等比缩小，签条始终留在窗内。
- 状态行去掉 video-shotcraft 品牌名和「SIGNALS」英文腔：扫描中是「读取中」，扫完切到可改的完成语，计数与进度条保留；计数前缀用「已标注」。
- 地址栏里写死的 github.com 假品牌地址换成 pageUrl 文本字段（默认「示例页面」，太长自动缩小，留空只留顶栏）。
- 去掉窗框两侧随线滑动的游标三角和左侧「Y 0412」读数（装饰性读数）。
- 机器色（扫描线/取景框/标签/计数）和页面底色是两个颜色字段，舞台光、窗底色、占位面、状态行都从页面底色推出来；不再出现 shotcraft 品牌色。
- 扫描线 3px 光芯 + 140px 渐隐余晖 + 点阵、四角 L 框弹簧收拢一次过冲（臂长晚 3f 收一档）、对焦闪填充 0.075、标签 ft+5 起逐字打出，全部照原卡；最后 60f 海报位保留。
- 竖屏时浏览器窗等比缩到画面内并居中，状态行压到窗顶内侧。
- 原卡没有自己的淡出，片段结尾统一的上飘淡出由宿主驱动。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
