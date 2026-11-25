# 聚光扫亮标题 · Spotlight sweep

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/light-play-moves/SpotlightSweepReveal.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；标题、强调词（列表，可填 1–4 个，标出每个词在标题里的每一处）、眉题、副标、标志、四个颜色（底色／文字色／光色／点缀色）、标题字号都能在检查器里改。
- 原卡最后一个词是衬线斜体：中文不用斜体，改成香槟金强调色；填英文强调词时保留斜体、颜色不变。
- 去掉眉题两侧会长出来的装饰短横线（连同长出动画）；原卡的 video-shotcraft 品牌字标换成 image 字段标志，留空不显示。
- 幕布、地板、暗角的颜色都从底色和光色推出来，不另开字段；追光、闪烁、光圈张开、浮尘、呼吸全部照原卡。
- 透明背景时幕布、地板、光锥、光斑、浮尘、暗角、颗粒都不画，但标题从暗到亮的遮罩扫光照做（只是看不到光本身）。
- 标题太长时整行等比缩小到画面宽的 86% 以内，不换行；竖屏同样适用。
- 原卡没有自己的淡出，第 152 帧起停在海报帧（顶光暖幕＋浮尘缓漂＋极轻呼吸），出场交给片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Serif SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSerifSC.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
