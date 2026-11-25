# 证据胶片换词 · Word relay filmstrip

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/word-relay-filmstrip/WordRelayFilmstrip.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 六张手绘假页面（节奏报告、分镜脚本、渲染流水线、PR评审、影像查看器、出货表）整块换成「证据图组」字段，一张一行，按940×530 cover裁切；图不够时循环复用，图多了不用。
- 原卡靠黑白相间显步进，用户图无法保证相间，改成模板给相邻卡叠8%的白／黑交替罩：奇数卡叠白，偶数卡叠黑。不填图时画浅／深交替的空页面块加淡图片图标。
- 卡片数量 =动词数 +3；第 k个词停在第 k+1张卡上，首尾各留出露边的邻卡。动词最多8个（11张卡）。
- 动词、名词、证据注脚、金色、动词色、次级墨色、字号都变成字段；中文动词保持正体，靠字重和亮度跟名词分层；英文动词保留原卡斜体。
- 词块左缘由左侧卡列右缘加边距推算，不再写死1196；整块随最长的名词／动词量宽，太长时 FitBox整体缩小，词块中心仍锁在焦点卡中线 y=540。
- 金色引线、序号当前值、动词句点和注脚里的分隔点用金色字段；序号按动词数自动编，00起算。
- 去掉 ShotcraftWordmark、ShotcraftMark、假导航、假日志、假代码 diff、假表格数据和品牌字样。
- 原卡最后50帧自己停在成片上；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Serif SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSerifSC.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
