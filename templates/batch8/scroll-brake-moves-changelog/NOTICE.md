# 长卷急刹停更 · Changelog scroll brake

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/data/scroll-brake-moves/ChangelogScrollBrake.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成 12 条中文更新日志，类型只用 新功能／改进／修复／计划 四个词。
- 停点从原卡写死的第 28 行改成「最后一条不是计划的行」（11-13 审核改的：原来是显示的最后一行，结尾画面下半截是空的），后面的计划行照原卡留在下方；滚动总行程按实际行数重新算，只有一行时几乎不滚，仍然抬升、描边。
- 条目收进一个 lines 字段，一行一条，「版本｜类型｜标题｜说明｜日期」，缺的列不显示；最多 24 行，超出只取前 24 行。
- 类型自动归到四类；停点行固定换成强调色实心的「发布」徽章。
- 品牌标志和视频品牌名去掉，页眉只留一个可改的文字标题。
- 标题、说明、版本、日期过长时在行内等比缩小；停点行标题填到几倍长也不会出框。
- 行高（72／94／116）、行宽（1000）、间距、字号随「字号」字段等比缩放。
- 勾透明背景时不画背景光场、暗角和颗粒，条目白卡照画。
- 原卡自己结束、没有淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
