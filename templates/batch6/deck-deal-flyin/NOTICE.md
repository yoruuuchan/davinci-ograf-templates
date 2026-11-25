# 牌堆发卡满板 · Deck deal flyin

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/deck-deal-flyin/DeckDealFlyin.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡 26 张写死的页面截图切片换成用户的图片（3–12 张）：网格固定 3 列，9 格起步，图多于 9 张时加到 4 行 12 格；图少于格数按顺序循环填满，不填时画 9 张深色占位块（带淡图片图标），动作照常播完。
- 页面板从真实截图换成奶白纸面，只保留网格槽位的淡描边；去掉 projects-empty.png、10 张 card 切片、纸面延长段的分区小标和「REAL PAGE CAPTURES」。
- 相机保留原卡五段轨迹（orbit 特写 → 预备 → 拉开 → 追逐升起 → 跑道俯瞰）和全部 zoom / rotX / rotY / rotZ / persp 数值；后三个锚点的 cx/cy 按板高和网格几何推算（板顶 → 板中 → 板尾方向），不再绑死页面坐标。
- 牌堆高度固定 78px（原卡 26 张 × 3px），每张的 z 步长按格数均分；发牌节拍 cue = 36 + 4k − 0.0792·k(k−1) 与单卡 8f 俯冲 / 4f settle / 2f press 照抄。
- 左下标语做成两个文字字段（中文按字、英文按词从遮罩里升起），第一行 700、第二行 400；中文的负字距回到 0、行高 1.1。两行各自留空各自隐藏。
- 计数行换成 countLabel（默认「张作品就位」），数字跟着落地张数跳、满板停在格数；标志换成可留空的图片字段（34px），留空不占位。
- 去掉 ShotcraftMark 品牌标志和「video-shotcraft」字样；桌面、板面、文字三个颜色做成字段，桌面顶光、高光带、纸面暗层和占位块都由字段色在 OKLCH 里推出来。
- 原卡没有自收尾（末帧直接结束），改成宿主统一的片尾出场：前景（板、卡、文字）上飘 36px、变虚、淡出，桌面背景留在原地。
- 跳过 @remotion/motion-blur 的相机运动模糊（工具箱不支持）；追逐段每帧跳距大，没有模糊时可能有轻微频闪。
- 竖屏 / 4K 把整条 1920×1080 世界按短边等比缩放并居中（1080×1920 时 ×0.5625），跑道俯瞰的 rotZ −26° 保留，不做竖屏重排。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
