# 满屏图标点亮 · Icon field colorize

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/opening/icon-field-colorize/IconFieldColorize.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 170 枚键帽、16 种简笔形和固定种子 20260718 按原卡保留，当成纹理，不开放数量和图标字段。
- 四道波不再写死四个颜色：由「首波颜色」「末波颜色」两个字段在 oklch 里插值出中间两道，终态仍是由金到珊瑚的四段横带。
- video-shotcraft 字标换成「眉题」文字字段，默认「镜头配方」，留空不显示；品牌标志去掉。
- 标题、底色、文字色和标题字号都是字段；标题第二行用首波的颜色。
- 中文逐字升起、英文逐词，全部压在原卡的 118–158 帧窗口里落定；太长先换行、再自动缩小。
- 标题留空时只留图标场，可以当垫场或背景用。
- 勾「透明背景」时只留图标阵列和标题：底色、主光、行光带、中心暗幕、暗角和颗粒都不画。
- 片段可长可短：原卡 170 帧后画面完全停住，4% 推近到位即止，不会越推越远；结尾上飘淡出交给宿主。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
