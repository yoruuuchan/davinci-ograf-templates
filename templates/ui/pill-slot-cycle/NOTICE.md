# 句尾词槽轮换 · Pill slot cycle

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/pill-slot-cycle/PillSlotCycle.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文（句干「一套流程，能」、收束句「一次做完。」、六个胶囊词）；句干、收束句、胶囊词表、图标开关、纸面／文字／强调／胶囊底色和字号都做成字段。
- 胶囊词表支持 2–10 项，超过 10 项只取前 10 项；每项前面的图标按顺序从原卡那六个线性图标里循环取，勾掉「显示图标」胶囊宽度会重算。
- 节拍照原卡：入场 12 帧，每拍 21 帧（前 8 帧换位、后 13 帧静置），收束 14 帧，居中 26 帧，末尾留 48 帧；词数变了整段按每项 21 帧往后加。
- 胶囊的发丝边、顶部内高光、两层软影和图标浅底都从文字色／强调色／胶囊底色推出来；软影的投影色由文字色混黑得到。
- 收束句整行宽度和每个胶囊宽度每次渲染都实测（原卡只在挂载时量一次），改了文字宽度会跟着更新；槽宽取最宽的胶囊，滚动时不抖。
- 整行太宽装不下时（竖屏、长文案、大字号）整行等比缩小，句干左端锚点不动。
- 原卡停在完整句上结束，改成停住由片段结尾统一的上飘淡出收场，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
