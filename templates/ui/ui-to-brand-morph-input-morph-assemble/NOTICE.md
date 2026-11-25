# 输入框拼成标志 · Input morph assemble

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/outro/ui-to-brand-morph/InputMorphsIntoLogo.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 取景框 +斜切三块图元的标志换成用户自己的 logo图片：输入框的 x/y/w/h/r五量仍由同一个 spring驱动，收成 logo外接竖框，logo以 contain留在框内，四周留一圈墨边当框。
- 三块图元改成 logo按纵向三等分的横条，错峰从画外落进与各自 clip范围对齐的矩形虚线槽位；落定后换成一张整图，避开同色拼缝的抗锯齿台阶。
- 槽位虚线轮廓按三条切图各自的矩形范围计算，原卡斜切平行四边形的特殊轮廓和写死的视图几何都不再用。
- 去掉假 Slack语境：频道名和两条最近消息不再出现，画面从输入框和光标开始。
- 输入框文案、字标、口号、底色、墨色、强调色和字体都做成字段；字标逐字升起，口号中文按两字一组、英文按词升起，留空就各自隐藏。
- 输入框文案和字标填长了会自动缩小，口号填长了先换行、再整体缩小，都不出框。
- logo的尺寸只从图片字段给的 width/height算，不量 DOM；没填图时三条中性灰条照常落位，拼成带淡淡图片图标的占位，动作完整播放。
- 原卡的时间表照旧：点击20、飞出21、墨色漫开28、morph30、三拍落位58/72/86、让位108、字标114、口号130；原卡最后168帧的极缓推近保留，片尾改成宿主统一的上飘淡出。
- 光标终点仍从发送键的几何算，不写死坐标。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
