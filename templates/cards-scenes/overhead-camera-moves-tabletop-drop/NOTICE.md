# 桌面巡视扎入 · Tabletop drop

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/camera/overhead-camera-moves/OverheadTabletopDrop.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡的三张假网页（官网导航、镜头库、更新日志、分镜板）全部删掉，换成 images 字段的 3–5 张截图，每张按 16:9 cover 铺满一张样稿；不填图时画 3 张纸色占位页（标题条和内容骨架，不写字），少于 3 张时桌面会空。
- 新增「目标页序号」：目标页是卡阵的局部原点，其余页按 (i − target) × 1146 排在左右；填到超过图片张数时取最后一张。
- 印刷标签去掉 01/02/03 编号和中间那段短横线，只留页名；页名太长时缩字号，不超出样稿宽度；目标页的页名转金色，其余压暗。
- 落版倍率按「目标页占画面 96% 宽」计算，不再用写死的 2.0（原卡的 2.0 会超出画框，透明模式四角也会被盖住）；骤降前 2% 的预备回缩保留。
- 原卡落版后金色「Hero shot」镜头块滑入分镜板空槽、同列一块让位下移的假产品动作删掉；94f 落版后只保留 1 → 1.012 的极缓推近。
- 竖屏按舞台宽 / 1920 同比例缩卡阵、PITCH、pan/drop 位移、台面和灯池，目标页居中占 96% 宽；标签字号最低 22px，不出框。
- 标签在 70–86f 随扎入淡出：原卡里标签是随镜头飘出画外，竖屏画面更高，不淡会留在落版页下方。
- 台面颜色、纸色、标签金色变成颜色字段；顶灯光池和体积光从纸色推，网格线从台面颜色提亮。
- 勾透明后不画台面、网格、灯池、光束、远端压暗、暗角和颗粒，只留样稿、标签和样稿阴影；暗桌反差没了，建议不勾。
- 原卡没有自淡出；改成片段结尾统一的上飘淡出（ExitLayer），片段剪多长都行。
- 去掉 Shotcraft 品牌标记、官网文案和装饰编号。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
