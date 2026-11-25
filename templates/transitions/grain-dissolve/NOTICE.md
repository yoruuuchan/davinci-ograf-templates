# 砂化凝聚字标 · Grain dissolve

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/outro/grain-dissolve/GrainDissolve.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；整行由「短字标 +后缀」两个字段拼成「{名字.后缀 }」（名字或后缀是中文时，中间用「·」），凝聚后的短字标共用同一个名字，后缀留空就只显示「{名字 }」。
- 字标字号（默认132，80–200）、背景色、文字色、辉光色、透明背景和字体都能在检查器里改。
- 选区框宽度按短字标的实际宽度量（+80单位边距，钳220–560），高度跟着字号走；斜纹和四角像素柄保留。
- 游离砂粒的起点带和终点带按整行 /短字标的实际宽度重算，不再写死140–500；名字或后缀太长时先整体缩小，不出框。
- 去掉四角 HUD括角、圆点和左右中线短划，只保留选区框自己的四角手柄。
- 整块640×360的 viewBox按舞台宽高 meet缩放居中；竖屏最多占宽90%，上下留黑。
- 原卡60帧（2秒）的时钟保留，2秒后停在最后一帧；片段建议3秒，片尾由宿主统一上飘淡出。
- 背景颗粒原本每2帧换一次纹理，改成固定纹理，2秒后的停留段画面完全不再变化。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
