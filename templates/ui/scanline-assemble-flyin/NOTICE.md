# 扫描装配建页 · Scanline assemble

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/scanline-assemble-flyin/ScanlineAssembleFlyin.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；区块、右侧大图、状态字、路径小字、底色、强调色、扫描线色和区块标题字号都能在检查器里改。
- 原卡七个写死坐标的组件（导航、徽章、H1、正文、CTA、样片卡、数据行）换成 lines「标题｜内容」自动布局：左侧自上而下等分，1–12 行，行少块高、行多块矮，文字放不下会等比缩小；右侧固定一个大媒体位。
- 去掉镜刻标志和字标导航、NEW 徽章、渐变 H1、正文、CTA 按钮、三枚指标——这些内容由区块列表承担。
- 去掉程序化银河、山脊剪影和角落的 SHOT 04 字幕条，换成用户自己的图；没填时是深色占位块加淡图片图标。
- 去掉画板顶部的 1640 宽度标注和槽位小标里的尺寸数字；虚线槽位本身保留，小标文字改成用区块标题。
- 扫描线、飞入过冲、速度拖影、四角咬合角标、状态行计时、网格退到 30%、1→1.03 极缓推镜全部保留；扫描线身后 180px 的网格照亮和页面底色刷出各用一层 mask。
- 原卡 104–156 帧的停留保留，片段结尾改成统一的上飘淡出，剪多长都行。
- 全部动画都是帧的纯函数，没有随机数；星点随银河一起去掉。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
