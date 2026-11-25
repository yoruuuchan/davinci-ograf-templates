# 乱码轮播状态 · Glitch cycle

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/glitch-cycle/GlitchCycle.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；短语表、进行中／完成两个状态词、文件名、署名、背景／文字／强调／故障四色和字号都能在检查器里改。
- 槽位按最长短语的字符数一次建好，最少8个字符；每个字符占一个固定宽度的槽并居中，中文不依赖字体自身的等宽；整表都是英文时槽宽压到0.66em，字距3px。
- 逐字乱码、整行横纵抖动、RGB分离、水平撕裂带和像素块残影都由同一个 g驱动，关键帧照原卡；随机数沿用原卡的 sin哈希（bucket、字符下标、条序号做种子），每2帧重掷一次。
- 状态行去掉右上角的假编号 #4127，品牌路径换成可改的文件名；状态词到进度走满时自动切换。
- 底部品牌标志和「Crafted with video-shotcraft」换成一行可改的署名，默认「你的工作室」，留空不显示。
- 新增「显示状态行」「显示进度条」两个开关，默认都开；只想要乱码轮播时可以都关掉。
- 进度条、STEP n/N和百分比由短语条数和帧号算出来，不另开字段；进度轨宽度、四角括号、槽宽都按字号等比缩放。
- 长短语自动加槽、长状态词自动缩小；竖屏和4K由 FitBox整体缩放。
- 原卡在末条之后自己停住、没有离场；改成片段结尾统一的上飘淡出，末条收干净后画面停住。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
