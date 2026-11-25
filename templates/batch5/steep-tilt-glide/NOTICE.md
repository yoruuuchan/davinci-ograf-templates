# 长图斜墙滑过 · Steep tilt glide

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/camera/steep-tilt-glide/SteepTiltGlide.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 页面内容换成 pages 图片字段：1–8 张截图横排成一堵斜墙，每张 cover 裁到统一屏宽；超过 8 张只取前 8 张；不填就画 3 块浅色圆角占位板和淡图片图标，动作照常完整。
- 原卡右段整块假产品内容（大 W、Launch film shots、任务行、IN PROGRESS chip、三个小组件）和左段侧栏（video-shotcraft 标志与字标、Home 药丸、Inbox、Docs、Dashboards、轮播箭头）全部去掉；顶栏 tab 条保留为容器：贯穿整墙的分隔线 + 悬空贴落的标题。
- 顶栏标题和标题后的淡页签做成字段；标题太长自动缩小，页签最多 8 项，项多时整排缩小到画面内。
- 去掉左侧紫色光晕（发光类，默认不画）；暗场、景深雾、暗角和颗粒照原卡保留。
- 原卡 120 帧的滑移曲线保留，末尾加 15 帧减速到 0，135 帧停住；片段拉长也不会越滑越远（原卡是硬停，没有 hold）。
- 每张图进场时在自己的槽里错峰贴落（滑入 + 淡入），复用原卡 FloatWrap 的 liftOf 节奏；顶栏标题仍用 FloatWrap + 同形软影。
- 重影层按原卡完整重渲染三层页面（最多 8 张图 × 4 层），同一 transform 下放过去的局部位置和原卡重影透明度；图片共用浏览器按 URL 的解码缓存，没有用 cloneNode（克隆只省构树、不省 3D 光栅化，还容易和字段编辑不同步）。
- 竖屏改用 rotateY -50°、scale 0.7，并把最终停留位置收进一屏；横屏镜头常数（perspective 1100、origin 30% 58%、rotateY -60°、rotateZ -2°、scale 0.62）全程不动。
- 透明背景时不画暗场、雾、暗角和颗粒；斜墙和顶栏照画（斜墙自带白底）。
- 原卡没有淡出，改成宿主片尾统一的上飘淡出，片段剪多长都能收。
- 片尾出场 400ms 内不画颗粒：7% 的 soft-light 颗粒叠在出场的透明组上会让浏览器分块栅格化，逐帧截图不稳定；这一小段肉眼几乎看不出。
- 中文标题字距回到 0（原卡 -0.01em 是给英文 “Shot recipes” 的），纯英文标题仍保留原卡字距。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
