# 图标翻转变标 · Icon flip bloom

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/outro/ui-to-brand-morph/IconFlipBloomLogo.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认字标换成中文「山丘影像」；开始图标、结尾标志、字标、字标颜色、底色、强调色和字号都能在检查器里改。
- 原卡写死的笑脸 laptop图标换成 image字段「开始图标」，结尾的 ShotcraftMark换成 image字段「结尾标志」；两张图都按 contain放进300px方框，不裁切、空白处不画底色。
- 没填图时：开始图标画中性圆角方块加淡图片图标，结尾标志画空心圆环加淡图片图标，翻扁和撑开的动作照常完整播放。
- 去掉原卡第二拍「琥珀斜切划入」（那是品牌标志专属形态）；标志撑开仍用原卡的过冲 spring，普通图片撑开时会有一点被横向拉伸的观感。
- 字标让位距离不再写死 -471px，改成量字标实际宽度，并把标志和字标整组居中；字标太长时整体缩小到1220px内；单个超长英文词再单独收一档，放大入场也不出框。
- 字标中文按字、英文按词拆分；中文单字照原卡从1.9倍、14px模糊落定，较宽的英文词把起跑倍数按宽度收一档以免压到标志，每个单元仍12帧，字数多时压缩起跑间隔，最后一字仍在第100帧前落定。
- 不勾透明时保留原卡柔光亮场，强调色光斑按原卡强度的一半；勾上只留前景。
- 竖屏和4K由 FitBox缩放整张1920×1080版面，主体居中；原卡没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
