# 透视甩入急停 · Kanada snap

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/slam-entrance-moves/KanadaPerspectiveSnap.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；海报图、角签、片名、副标、规格行、按钮、字幕、夜色 / 文字色 / 强调色和片名字号都能在检查器里改。
- 卡左半的程序化霓虹落日插画（星点、条纹落日、城市剪影、水面倒影）整块换成 image 字段：一张图按 560×580 cover 裁满，留空画夜色与强调色推出来的渐变块和淡图片图标；插画与右栏之间 470–568px 的渐变过渡保留。
- 去掉顶部 168px 的低透明大字带「FRAME MOTION ✦ CRAFT THE SHOT」；去掉卡内右上角的 video-shotcraft 标志，角签留在原位；去掉按钮旁「+」假界面圆钮，播放三角保留。
- 卡外字幕合成一个 lines 字段，去掉「shot with video-shotcraft」品牌段，整句用文字色，不再单独给末词上强调色；34 帧起中文按字、英文按词升起，56 帧前落定。
- 甩入（2–20f，translateX −1350→0、rotate3d 62°→0、scale 1.8→1、perspective 260→1800）、位移 snappy / 姿态 bezier(.62,0,.3,1)、rotateY 16–20f 冲 +6° 后 damping 16 弹簧回零、20f 震屏 + 48 道集中线 9f、斜长影收正、卡内文字晚 3f、hold 段 1→1.025 极缓推，帧号和缓动全部照原卡。
- 竖屏和 4K 时整块 1920×1080 版面等比缩小、居中；甩入距离随画面宽等比缩短。
- 右栏其余字号随片名字号等比；整栏太高或太宽时整体缩小，长字幕缩到画面宽内，都不出卡。
- 角签、副标、规格行、按钮、字幕各自留空只隐藏自己；角签清空时保留它的位置，片名不往上跳。
- 原卡没有自淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。极缓推镜在 120f 钳住 1.025，不会越漂越远。
- 速度线、集中线和震屏继续用原卡的固定种子哈希，没有 Math.random。
- 默认强调色取任务指定的 #ff5fa2；共享件 LOOKS.aurora 里的 accent2 是 #f472b6，两者相差很小。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
