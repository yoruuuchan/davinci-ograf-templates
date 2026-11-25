# 标题降为栏目标签 · Title demote to label

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/title-demote-to-label/TitleDemoteToLabel.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 只保留 A 式（第 0–112 帧）：眉题出现，大标题升起、站稳，降格成左上角栏目标签，导语和卡片错峰长出，92 帧后停住；B 式和 A→B 过场删掉，以后可以做成第二个模板。
- 默认文案换成中文；标题、章节号、导语、卡片、纸面/文字/强调色、字号都能在检查器里改。
- 六组「卡片 N 标题/正文」字段合成一个「卡片」多行字段：一行一张，标题和正文用「｜」或「|」隔开，只写标题也行，空行忽略，最多取前 6 张。
- 卡片支持 1–6 张：1–3 张沿用原来的 536px 一排居中，4 张等分 1680px 变窄；5–6 张排成两排、每排 3 张，第二排居中，卡片高度按内容收矮，整块仍由 ShrinkHeight 兜底。卡片越多入场间隔越紧，最后一张仍在 92 帧前落定。
- 标题末尾的标点（。．.！!？?）用强调色，降格后它就是标签的识别点；标题没有末尾标点就不加。
- 眉题的 CHAPTER 换成「第 01 节」，降格后标签前显示「01 /」；章节号留空时两者都不显示。
- 原卡的三张假产品界面卡（镜头配方、用户评价、卡点节拍）换成可以填字的简洁卡片：一个小标题加一两行正文，保留纸面 surface、发丝线和 softShadow；某张的标题和正文都留空就不显示，剩下的卡片重新居中排布。
- 去掉右上角的品牌标志、页码，以及页脚里的品牌名和「Autosaved」小字；页脚只留一条发丝线。
- 原卡 1.5%的缓慢推近在降格前结束，92–112 帧完全停住，之后保持第 112 帧的画面。
- 原卡第 112 帧后进入 B 式，模板删掉这段，改成片段结尾统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
