# 打字机改口 · Typewriter retype

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/typewriter-moves/TypewriterErrorRetype.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；不变的开头、先打出的、改口后的、铺底色的词、眉题、三种颜色和字号都能在检查器里改。
- 汉字用 1em 固定槽、英文和数字用 0.6em 槽，不做字距动画；计时上汉字按 2 个字符算（打字 2 帧/单位、删除和重打 1.5 帧/单位）。
- 眉题去掉原卡的 video-shotcraft 标志和品牌名，换成一行纯文字，默认「一句话介绍」，留空不显示。
- 眉题颜色由文字色和底色混出，底色渐变和主光由底色推出；暗角和颗粒是固定的中性色。
- 英文开头和下一段都属拉丁文字时自动补一个空格（宿主会裁掉字段首尾的空格），中文之间不加。
- 马克笔底色只在「改口后」的文字里按子串找「铺底色的词」，找不到就不铺。
- 原卡写死 1920×1080 坐标，模板改成按最终句宽居中、左缘锚定的布局，整块用 FitBox 缩放，竖屏不出框。
- 原卡自身 160 帧，模板按默认文案把入场落在第 87 帧、片长 4 秒；原卡最后没有淡出，模板改用片段结尾统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
