# 逐词浮现标题 · Blur slide

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/blur-slide/BlurSlide.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；标题、强调词（列表）、栏目眉题、副标题、刊头、刊期、纸面／文字／强调色和标题字号都能在检查器里改。
- 强调词改成列表：一行一个，或用「、」「|」隔开；每个词在标题里出现的每一处都标成强调色，找不到的词忽略；两个强调词重叠的字只标一次，不重复渲染。
- 中文按字、英文按词拆分；行内起跑间隔沿用原卡（第一行3词从第10帧起、间隔4帧，第二行从第26帧起），字多时压缩间隔，整句仍在原卡的约50帧内落定；带强调词的单元用30帧的长入场窗。
- 强调词用强调色；中文保持正体，英文强调词保留斜体，字距随进度从0.03em收到 -0.025em。
- video-shotcraft 字标换成可填的刊头，右边的英文日期换成可填的中文刊期；刊头和刊期各管各的，留空哪个只隐藏哪个，两个都留空才整行隐藏；刊头下面的发丝线保留。
- 去掉背景里的大号装饰数字 07和右下角的 PAGE 07；页脚发丝线保留。
- 标题和副标题过长时自动换行并整体缩小；竖屏和4K 由 FitBox 缩放整页，168px 网格不变。
- 原卡没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Serif SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSerifSC.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
