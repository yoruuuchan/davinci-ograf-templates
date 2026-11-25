# 抬卡点选 · Contact shadow lift

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/element-body-moves/ContactShadowLift.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；眉题、标题、卡片内容、卡片图、选定卡、底色、墨色、强调色和标题字号都能在检查器里改。
- 原卡三张画死的配方卡换成用户的图片：卡壳、投影、序号角标和卡面文字保留，图 cover 裁切填卡面上半；没填图画浅灰底加淡图片图标占位，动作照常。
- 每张卡的信息收进一个「卡片内容」字段，一行一张卡，格式「标签｜数值｜说明」，只写标签也行；标签和数值都空的行不显示，其余卡重新排。最多 8 张，超过取前 8。
- 原卡底部模拟星期几的 7 格节拍格是假产品界面，去掉。
- 原卡第三张卡图标位上的品牌标志改成中性序号角标；前两张的线性图标随图片区去掉。
- 卡数在 1–8 张之间重排：横屏 3 张以内一排，4 张起分两排并整体缩放；竖屏每排 2 张分两排，竖版卡保持 3:4.3 比例。
- 选定卡可以填任意位置（默认第 3 张）；前面的卡按原卡节奏逐张点名（每张 34 帧），点名的张数多了入场段跟着变长，选定动作本身的帧号不变。
- 卡片文字填长时在原卡槽位里自动缩小，不出卡面；标题太长自动换行并整体缩小。
- 原卡没有自淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
