# 示波实时曲线 · Oscilloscope stream

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/data/chart-live-moves/OscilloscopeStreamV2.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 左上角的 video-shotcraft 标志与字标换成两个文字字段：眉题（title）和副题（subtitle），各留空各隐藏，直播灯常驻。
- LIVE→PAUSED 的刹停同帧切换改成布尔字段 live：勾上一直「实时」（青蓝灯、圆点呼吸），不勾一直「已暂停」；刹停节奏与灯解耦，但扫描线、写入头光斑和新鲜段仍照原卡在刹停段衰减，不勾时从第0帧起按暂停态减光。
- 大读数 = 基数（readingBase）+ 波形×摆幅（readingSwing），每 3 帧采样保持照原卡；单位是文字字段，留空不显示；字号是数字字段，眉题、副读数、标签都按它等比缩放；单位和读数过长时整组缩到左侧栏宽。
- 右上两枚副读数合并成一个 lines 字段，一行一个「名称｜基准值｜单位」，1–4 个按个数均分右侧宽度，超出取前 4；尖峰包络照原卡公式驱动跳变和变色；整行留空不显示。
- 尖峰事件标签拆成两个文字字段（标签 + 备注），备注留空只留标签；尖峰 2.2×、前兆余震、峰顶落线、overshoot 弹出照原卡；标签和备注过长时整枚标签等比缩小，不会冲出右边缘。
- 时间轴「−50s … now」和 y 轴「3k/2k/1k」判为装饰读数删掉；竖向比例交给数字字段 axisMax（上限），不画字。
- 颜色收敛成 4 个字段（背景 / 迹线 / 尖峰 / 读数），刻度网、泛光、灰阶文字都从它们推出来。
- 透明背景下不画舞台渐变、柔光、暗角，示波屏、迹线、读数照画。
- SVG 渐变 / mask / 滤镜 id 改用 React.useId()；读数变热色在 JS 里用 hex 插值；SVG 里不再放文字。
- 长文案会自动缩小不出框；片尾淡出交给宿主，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
