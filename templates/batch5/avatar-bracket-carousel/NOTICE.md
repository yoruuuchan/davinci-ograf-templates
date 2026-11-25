# 取景框换头像 · Bracket avatar carousel

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/avatar-bracket-carousel/AvatarBracketCarousel.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 头像换成 images 字段（一行一张，按顺序进框轮换，cover 裁成圆头像）；不填时保留原卡的受光渐变圆盘 + 线性图标（场记板 / 剪刀 / 曲线 / 声波）做中性占位，图标四枚循环取，动作照常轮换。
- 没填头像时占位张数跟着角色标签行数走（1 行就 1 张，上限 8）；两个字段都空时用 4 项内置图标组。
- 角色标签从原卡写死的英文角色名改成 list 字段「角色标签」，按行对应头像顺序；行数少了后面头像不显示标签，多了只取前 N 行。
- 切换次数 = 头像张数 − 1，等间隔铺开：4 张时完全沿用原卡节奏（0.24 / 0.46 / 0.68），张数更多时间隔按可用时长收窄，末次切换的 0.14 spring 在 0.86 前收住，之后静置到片段结束。
- 整套 480 设计坐标 ×4 重标到 1080p（对焦框 368、头像 232、队列步距 304、标签 chip 312×80、落影和描边的像素值也一并 ×4）；对焦框四角路径按 4 倍重画进 368 的 viewBox（stroke 3.2→12.8、锁定行程 14→56），不是把 92 的视框拉伸放大。
- 颜色字段化：强调色（对焦框、标签圆点、地光）和句式文字色可改，背景由深色 Backdrop 提供；勾「透明背景」时只留框、头像、标签和句子。
- 句式两个词各自一个字段，开场错峰浮起（右词晚 0.035）照原卡；整句太宽时整体等比缩小不出框。原卡的英文负字距 -0.035em 在粗体中文上会让字挨着，改回 0。
- 句式字号是 number 字段（默认 136 @1080p，即原卡 34 ×4），角色标签字号跟着等比缩放；常规 2–8 字标签都在 chip 内，标签更长时按字数缩小。
- 没填头像时只留占位圆盘，标签 chip 在没有标签时整个不画，不会留一条空胶囊。
- 原卡末尾静止无收尾动作，保持不变；片段结尾的上飘淡出由宿主统一驱动。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
