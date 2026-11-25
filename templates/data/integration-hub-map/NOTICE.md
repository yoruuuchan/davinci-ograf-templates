# 翻面亮管接生态 · Hub flip connect

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/integration-hub-map/IntegrationHubMap.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 翻面、两拍制（52 帧五枚图标同现、62 帧五管同起画）、9 帧齐长、侧棱白热闪、彗星脉冲、管口涟漪、面板呼吸全部保留，帧号和缓动照原卡。
- 正面的假文档页和背面的假工作区页都换成用户的一张图，cover 裁进 820×520 面板，不拉伸；留空画淡色占位块加一行「旧页面」/「新中枢」。
- 每面顶部加一条真信息行：22px 标题（默认「旧文档」/「工作台」）加一条发丝线，各自留空各自隐藏。
- 五枚写死语义的 capture/code/recipe/music/sfx 线性图标换成 images 字段的 2–6 张 logo 瓷贴，绕面板外圈自动均布（N=2 左右各一，N=6 上二、左右各一、下二）；不填时画 5 个圆、方、三角轮换的几何占位。
- 五条写死坐标和长度的光管改成现场生成：从图标锚点到面板最近边缘，直段加一段 90° 圆角弯，长度按各自路径算、生长按各自 len 归一同帧到达。
- 彩虹五色霓虹管压成「光管起点色→光管终点色」两色低饱和渐变；想回原卡彩虹可在代码里补中间 stop（见 PORT-NOTES）。
- 背景霓虹矩形连同弱视差去掉，暗紫底柔光、暗角、颗粒保留。
- 品牌字标、假工作区列表、筛选项、渲染队列、Add Shot Filter 按钮全部去掉。
- 原卡最后没有自收尾，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
