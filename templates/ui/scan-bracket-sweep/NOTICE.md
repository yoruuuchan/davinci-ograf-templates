# 取景扫描读档 · Scan bracket sweep

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/scan-bracket-sweep/ScanBracketSweep.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡手搓的分镜清单明细表换成字段：页眉标题、页眉副行、右上角统计角标、表头、表格行（1-12 行）、合计行都是文字，留空各自不显示；video-shotcraft 品牌行换成中性的副行文案。
- 明细表下方变成文档截图槽（image 字段）：填了图 cover 裁满页眉以下的纸面，长图横图都不拉伸；没填图时画中性的占位文档——页眉一条加粗假文行加几条灰假文行，表格行有内容时直接画在纸上、假文行补在表格下面。
- 表头固定一行四个字，用「｜」分列，和表格行的列对应；表格行最多 12 行，行多时行距和字号自动缩小，超过 12 行只取前 12 行。
- 括号臂长按文档尺寸重算（文档高的 19%，和原卡 300×178 上 34px 的比例一致），整份文档按高度占画面短边的百分比缩放，竖屏自动夹住宽度并保持居中。
- 扫描趟数 3-7 可调（默认 5），趟数变了扫描窗口按原卡的算法线性重切；拖尾长度随速度伸缩、趟末停顿收成 0、换向时拖尾挂边和渐变方向同步翻转，全部照原卡。
- 文字色和扫描光色是两个颜色字段，括号和正文用文字色，光带、行照亮和文档小图标用扫描光色；背景保持原卡的柔光底。
- 原卡没有自己的出场，扫完光带淡出后画面定格（文档和括号常驻），片段结尾的上飘淡出由宿主驱动；超过原卡长度的部分停在光带淡出完成的那一帧。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
