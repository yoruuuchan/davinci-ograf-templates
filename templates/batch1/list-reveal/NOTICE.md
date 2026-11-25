# 列表逐项入场 · List reveal

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/list-reveal/ListReveal.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；列表、当前项、徽章位置与文字、标题、副句、舞台色、文字色、高亮条色、强调色和标题字号都能在检查器里改。
- 原卡每项前的六个线性图标换成小圆点，当前项的圆点用强调色；快捷键提示去掉。
- 去掉右上角的品牌角标「video-shotcraft · workbench」。
- 最后一项前的分隔线只在项数达到 4 项及以上时画。
- 列表超过 6 项时整列等比缩小，最多显示 8 项，竖屏和 4K 由宿主整体缩放。
- 标题和副句太长时自动换行，整块仍然放不下时等比缩小。
- 原卡在 120 帧里匀速上移 96px 后还在继续漂；现在过了 120 帧用 30 帧减速停住，舞台光的呼吸不变。
- 原卡自己结束、没有淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
