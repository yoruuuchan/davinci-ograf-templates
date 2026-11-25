# 俯拍抬正揭示 · Tilt reveal

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/camera/overhead-camera-moves/TiltReveal.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡的假渲染看板（顶栏字标、120px 标题、发光面积图、三块 KPI）整页删掉，换成 `pageImage` 一张 16:9 截图，按 cover 铺在原卡 1920×1080 的页面平面上；不填图时画无文字的深蓝占位页（顶栏条、面积图骨架、三块 KPI 骨架）。
- 页面内的折线描出、终点光点、KPI 错峰上浮和标题淡入都是假数据动画，随假页面一起删掉；页面本身的圆角 26、内发丝边、阴影、抬升、缩放和透视全部保留。
- 抬升时间表照原卡：0–20f 86°→83°，20–60f 不对称 in-out 过冲到 −2.2°，60–70f smooth 回 0°；同一条 p 驱动 scale 2.5→0.84、铰链 600→975.6、视点、perspective 700→1500；70–120f 推近 1→1.018。
- 背景光池和浮尘的反向视差 150px、32–62f 从上沿扫到下沿的镜面反光带、开场地平线缘光保留。
- 竖屏按短边重算落定倍率（0.84 × min(w/1920, h/1080)），页面居中，铰链和视点按舞台高度重算；抬升曲线和帧号不变。
- 背景色、强调色变成颜色字段：舞台渐变、占位页纸色从背景色提亮，背光、地面反光和缘光从强调色推。
- 勾透明后不画舞台底色、光池、浮尘、地面反光、暗角和颗粒，只留页面、它的投影、缘光和镜面反光带。
- 去掉 Shotcraft 品牌标记和所有假数据；原卡没有自己的淡出，改成片段结尾统一的上飘淡出，120f 后由 hold 定住。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。

