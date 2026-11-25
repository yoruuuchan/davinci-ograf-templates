# 资料卡叠压滚入 · Research stack

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/research-card-stack-scroll/ResearchCardStackScroll.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 默认文案换成中文；卡片列表、纸面／卡面／文字／强调色都能在检查器里改。
- 卡片做成一个字段：一行一张，行内用「｜」分成「标题｜作者」，作者可留空；支持 1–12 张，超过只排前 12 张（原卡 13 张的末帧本来就是脏的）。作者留空时摘要骨架线上移、不留空行。
- 去掉假论文编号「preprint:24xx」和假作者名（作者改成卡片行里的第二个字段位）；原卡没有品牌标志，无需另删。
- 左侧 3px 竖条从「每 4 张一根橙色」改成每张统一的强调色细条（透明度压低）。
- 标题最多两行：两行放不下时标题整块缩小，不压进作者/摘要区；作者行太长也缩小。
- 修了原卡的两个末帧问题：focus 用「卡数−1」封顶（原卡末帧会指向不存在的卡，整叠没有一张清晰）；末张落定后滚流、格线和旧卡回收在 18 帧内缓停并冻结（原卡停久了末张会沉进堆里淡掉）。
- 原卡 144 帧结束；模板在末张落定后停住，片段剪多长都停在同一帧；片尾由宿主统一上飘淡出。
- 动效重做（2026-11-18）：堆叠轴改成竖直（原来向右下漂，和从上方掉落的入场方向打架）；旧卡改为按深度缩小 4.5%/层并轻微变暗，不再保留满强度投影和 4px 模糊（原来右下角糊成一团黑）；只有正在读的卡投影；作者行和骨架线改为 4 帧淡入，不再硬切。
- 竖屏：整组卡按画面短边等比缩放（横屏约 4.32×、竖屏约 2.4×），主体居中，卡片不出框。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
