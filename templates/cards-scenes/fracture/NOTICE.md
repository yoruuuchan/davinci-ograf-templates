# 碎片拼合海报 · Fracture reassemble

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/opening/fracture/Fracture.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；海报图、眉题、主名、网格、背景色、强调色都能在检查器里改。
- video-shotcraft 的整张海报美术（地平线弧、INTRODUCING 眉题、字标）换成用户的图片和两个文字字段：没填图时画一张由强调色推出的占位海报（深浅渐变 + 淡淡的图片图标），动作照常；透明背景 + 没填图时占位简化成纯色块。
- 网格 3–7（默认 5，共 25 块），瓦片数随网格变化，波纹 stagger 按曼哈顿距离重算，每块入场时长照原卡。
- 海报上的字印在海报上、随瓦片切片：亮起时机照原卡（t=0.42–0.52）；默认字号压到单块瓦片内不跨拼缝、整块落在海报中央偏下（原卡的做法），改字后跨缝切字是可接受效果，字再长也不会出海报框（缩到最小字号后改为整行跨海报排版）。
- 聚合（2.6 秒）与 hold 段 3% 极缓推近照原卡，随机量用原卡那套 seed，画面确定性。
- 原卡结尾 1.5 秒的飞散改由出场驱动：压缩到 700ms，各瓦片沿背离中心方向加速旋出，不再单独淡出；聚合后的停留画面可以无限停住。
- 原卡的 CameraMotionBlur 去掉（碎片本身带旋转，模糊缺失不明显）；颗粒保留。
- 透明背景勾选时不画背景、环境光，只留瓦片。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
