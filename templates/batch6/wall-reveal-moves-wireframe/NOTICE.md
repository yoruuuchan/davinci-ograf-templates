# 线框扫描显影 · Wireframe draw on

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/wall-reveal-moves/WireframeDrawOn.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡逐像素手排的假工作台（侧栏、顶栏、六张数据卡）全部去掉；线框改成与图片无关的版面骨架：一个大外框 + 标题位长线 + 三行短横线 + 方形图占位。
- 线框不再描真实界面，所以换成任何图片都不会错位；描线的分组错峰保留原卡节奏（外框第 20 帧、四角标记第 26 帧、标题线第 34 帧、正文线第 40 帧起每 3 帧一组、图占位第 52 帧），线长仍带 seed 微差。
- 侧栏 logo 方块里的 ShotcraftMark 两段描线、FakeDashboard 和所有品牌字样去掉。
- 新增图片字段：在框内用 clip-path inset 从左向右展开，object-fit: cover 裁切不拉伸；框的横竖比随图片在 0.6–2.2 之间变化，竖图给竖框。
- 没填图或图片读不到时，框内实体化成一块从强调色推出的浅色块，中间画一个图片图标，扫描动作照常。
- 扫描仍是原卡的 88–118 帧、同一条缓动；4px 琥珀竖线、双层辉光和身后 260px 渐隐余温跟 clip 前沿同一个 scan 值驱动，颜色都从强调色推出来。
- 图纸底、冷灰蓝点阵、四角裁切标记、暗角和颗粒保留；颗粒在第 120 帧冻结，扫描结束后画面完全静止。
- 纸面、线框、强调色都能在检查器里改；勾选透明背景后只留线框、扫描线和图片，可以叠在别的画面上做显影。
- 竖屏时骨架框按画面宽 88% 缩放并居中；横屏和 4K 由宿主整体缩放。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
