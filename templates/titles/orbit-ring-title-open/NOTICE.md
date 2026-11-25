# 环卡托题开场 · Orbit ring title

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/opening/orbit-ring-title-open/OrbitRingTitleOpen.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡八张 16:9 产品卡（每张一个会动的小假界面：荧光笔扫读、指标、清单、路线、终端、线稿、胶囊、冲击字卡）整块换成用户图片，保留原卡的卡位、16:9 卡面、圆角、纵深阴影与纵深明暗；卡面 cover 裁切，横竖图都不拉伸。
- 去掉 Freeze「冻结首帧再开播」：静态图片没有可播的内容。
- 图片张数就是环上卡数（3–10 张；超过 10 张只取前 10 张）；不填图时画 8 张石墨占位卡（深石墨底 + 发丝边框 + 顶部内高光 + 淡淡的图片图标），入场动作照常。
- 9–10 张时先按 N/8 定椭圆的目标半径，再把整环（卡位和卡面一起）等比收进 1920×1080 的安全边，避免卡被画面切掉；卡面始终保持 16:9，10 张时约 345×194。
- 两行标题换成字段：上行默认「让每一段素材」、下行默认「都派上用场」；中文逐字、英文逐词解糊下沉，上行错峰 1f／单字 27f、下行错峰 2f／单字 32f，位移只占前 1/3，全部照原卡。
- 荧光马克块宽度按量出来的下行实际宽度算（原卡写死 W≈5.05em），扫过处字反白的两层裁切照原卡；下行单行，太长时整块等比缩小，荧光块和反白边界仍对齐。
- 副行的 Shotcraft 标志、品牌名和 mono 代号换成 text 字段「镜头配方 · 随取随用」，mono 大字距，f60 起浮出照原卡；留空不显示，不另加图片字段。
- 颜色做成底色／强调色／主标题色三个字段：底色是 LOOKS.lime 的石墨底，强调色默认荧光黄绿 #c6f432，主标题色是白热；上行灰、反白墨色、轨道线、卡片描边、占位卡和暗 scrim 都从这三个颜色推。
- 主标题字号做成 number 字段（默认 156），上行字号按 64/156 等比。上行 500、下行 700，副行用 mono。
- 竖屏时环和标题整块按画面宽缩小并居中，主标题单行不出框。
- 删除原卡可选的 HANDOFF_EXIT 末段整行失焦退场，改用片尾统一的上飘淡出；hold 段环继续匀速公转，2.5% 推近在 f150 停住。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
