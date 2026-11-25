# 分段滑块切换 · Segmented switch

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/interaction/segmented-thumb-hero/SegmentedThumbHero.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；左右两段文字、纸面、墨色、强调色和字号都能在检查器里改。
- 原卡的对话气泡和笑脸场记板两个产品图标换成强调色小圆点，仍按原卡的帧表切换：旧圆点 6 帧塌缩、新圆点弹簧过冲弹出。
- 去掉 video-shotcraft 的品牌语义（Prompt → Film）和所有品牌痕迹。
- 控件尺寸改为随字号等比：宽 15×字号、高 3.06×字号、圆角取高的一半，最宽不超过画面 88%，竖屏时整体再缩一次。
- 单段文字超过「段宽减圆点位」时只缩这一段的字号（最小到 40%），不换行、不撑开控件。
- 颜色全部由纸面、墨色、强调色三个字段推出：轨道、滑块、阴影、段标签灰阶不另开字段。
- 原卡最后 50 帧停在点击后的新状态、没有淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
