# 描框贴落登场 · Frame forerun drop

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/neon-frame-forerun/NeonFrameForerun.tsx`
- `demos/ui-entrance/neon-frame-orbit-drop/NeonFrameForerunOrbit.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 把 neon-frame-forerun和 neon-frame-orbit-drop两个变体合成一张卡：不勾「环绕齐落」是错峰点亮（原 forerun），勾上是环绕齐落（原 orbit），框、20f奔画、右缘相撞闪光和四层灯管共用。
- 框内整套写死的工作台首页（品牌、导航、统计卡、任务行）换成一张 image字段「面板截图」，铺满1440×840面板、cover裁切，横图竖图都不拉伸；没填时画从框色推的深色占位块和一枚淡图片图标，动作照常完整播放。
- 贴落件从几十个假界面组件缩成三件：截图面板（含底板）、标题、副标题。每件24f加速下落（bezier0.55,0,0.75,0.95）+软着陆，各带同形软影；错峰模式落点54 /78 /104，环绕模式三件同帧起落同帧贴合。
- 去掉品牌字标和镜刻标志。
- 去掉背景5层回声隧道和18个随机霓虹管框，背景只剩 Stage光和暗角。
- 框色 A、框色 B、底色做成三个 color字段；白热芯、框色渐变和 rim辉光都从框色推。默认把原卡的 #b48cff / #ff6fb5压低了饱和，改回这两个值就是原卡配色。
- 标题字号做成 number字段，默认64（原卡66）。标题、副标题太长时自动换行，放不下再等比缩小；两块文字位置固定，清空哪块只隐藏哪块。
- 竖屏用 FitBox把1920×1080整体缩小到画面内，主体居中不出框。
- 原卡140f收束即停，没有冲向下一镜；机位在超过140f后极缓续转，现在会减速停住，不会越漂越远。
- 原卡没有淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。
- 透明背景去掉 Stage光、暗角和颗粒，只留框、面板、文字和它们的软影。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
