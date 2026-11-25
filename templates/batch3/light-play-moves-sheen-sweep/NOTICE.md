# 卡片扫光加冕 · Sheen sweep

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/light-play-moves/SheenSweepRetry.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；眉题、标题、正文、按钮文字、卡面四个标签（主标／小标／署名／角标）、卡面标志、底色／文字色／强调色／卡身色、标题字号都能在检查器里改。
- 原卡的镜刻标志加 video-shotcraft 品牌字标换成 image 字段卡面标志和文字字段卡面主标；标志留空就只显示卡面主标。
- 去掉卡面上的非接支付图标（三条弧线，纯装饰）；香槟金芯片保留。
- 卡面蚀刻字暖灰和被扫到时的暖白从卡身色和底色推出来，不另开字段。
- 按钮文字留空就不显示按钮；眉题留空连前面的圆点一起不显示；卡面四个标签各管各的，留空哪个只隐藏哪个。
- 标题太长会自动换行并缩小；竖屏改成文字栏在上、卡在下的上下排，卡按可用宽度等比缩放（约占画面 82% 宽），投影跟着缩。
- 原卡没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行；卡落定后停在海报帧。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
