# 波纹手机定格 · Ripple phone chips

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/radial-ripple-phone-chips/RadialRipplePhoneChips.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 屏内原来的假镜头库 feed、迷你播放条全部去掉，换成 image 字段 screenImage：cover 裁切填满屏幕，图片比屏幕高时按原卡的节奏（第 13 帧起匀速）上滑，行程只滚图片高出的那一段，滚完停住不露白；裁完正好填满就不滚。
- 没填图时屏幕画中性占位：浅暖白底色、竖排几张浅色圆角卡片块、淡图片图标，像一屏内容列表的剪影，动作照常播放。
- 手机外壳（暖钛边框、黑边、灵动岛、侧键、玻璃反光、两层落地投影、从下方升起）原样保留；状态栏 9:41 和底部渐隐托底保留，图片从它们下面穿过。
- 两侧胶囊的文字做成两个字段，左先右后错开 30 帧的 spring pop 和 ±8px 悬浮照原卡；某侧留空只隐藏那一颗，另一颗位置不动。文字填长胶囊自动加宽，贴到安全边距就缩字号。
- 品牌收尾（镜刻标志 + video-shotcraft 字标 + 标语）换成 title + slogan 两个字段：原字标位置、同一逐词升起动效，title 前面画一个强调色小方章；title 留空整个收尾块不显示。
- 颜色变成三个字段：强调色（胶囊图标圆、小方章）、同心圆深色（里三层由它推浅）、文字色（胶囊文字、状态栏、收尾块）；手机金属边框渐变写死。
- 同心圆四层呼吸（幅度 ±0.06、相位差 1.7 rad、受光上沿、中心柔光）原样保留，不做字段；透明背景时同心圆、柔光和背景都不画，手机、胶囊、收尾字照画。
- 胶囊文字加字号字段（默认 36，原卡数值）；手机水平位置加字段，竖屏时手机自动居中。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
