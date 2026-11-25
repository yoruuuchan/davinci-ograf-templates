# 内容行嵌入 · Row embed

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/row-embed/RowEmbed.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；行内容、背景图、等待提示、三种颜色、字号、字体都能在检查器里改。
- 飞入的行从整页截图的裁片改成模板自绘的浅色圆角行卡：标题加可选副文（用「标题｜副文」隔开），不再依赖那张详情页截图。
- 整页背景换成可选的背景图，cover 铺满、不变形；不填时是纸面底色加一道淡边框。
- 空槽改成比行卡稍大的浅色虚线槽位框，带「这里在等」提示，行落地后 2 帧消失；去掉原卡按页面底色做的逐像素补丁。
- 行内容支持 1–10 行（超过 10 行只显示前 10 行）；行多时先压行高（最低 0.72 倍），再缩字号；一行超长会自动缩小。
- 每行 cue 间隔随行数收紧：5 行仍是原卡的 12/22/31/39/46，10 行压到 4–54，保证最后一道缝在 3 秒片段的 2600ms 停止前收完。飞行 12 帧、末段加速、4 帧 press 回弹、纵向运动模糊和槽位接触影都照原卡。
- 相机 1.12→1.25 推近、轻微下摇只作用在背景图上；内容栏固定在画面中央，行卡落点不受背景图影响。
- 去掉截图里烤入的假筛选、假页签、假负责人数据；去掉原卡的空槽底色补丁。
- 原卡没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
