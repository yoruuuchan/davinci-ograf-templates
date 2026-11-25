# 大环收束定版 · Ring shrink lockup

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/outro/logo-shrink-wordmark-lockup/LogoShrinkWordmarkLockup.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- video-shotcraft 的标志和 15 字母字标换成可填的标志图片和文字字段：字标默认「拾光影像工作室」，标语默认「把每一帧，都拍成电影。」；标志留空时保留愈合后的白色实心 O。
- 设计坐标 480×270 的数值乘 4 换成 1080p 实际值（图标 120、字标 88、间距 36），不再套 DesignStage。
- 字标宽度和整组居中改为每次渲染实量（原卡写死 WORD_W 和 SHIFT），字数、字号变了都跟着算。
- 字标中文按字滑入（英文按词拆，词内不拆），stagger 按 (0.7−0.46)/字数 反算，字多不拖过 0.7；对焦模糊和位移随字号缩放。
- 标语中文用 0.18em 字距，英文按字数把原卡 2.6px 折算，长度变了字距跟着收。
- 颜色收敛成背景/文字/强调三个字段；霓虹晕、标语、冲击波、字标微光都从强调色推出来。
- 原卡没有退场，前景统一包 ExitLayer，片段结尾由宿主上飘淡出；透明模式下深场、光晕、暗角、颗粒都不画，冲击波和残影跟着图标留在前景。
- 暗角和颗粒改按 1080p 铺，颗粒不再被设计坐标放大成色块（原卡是放在 DesignStage 外的，这里保留这个做法）。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
