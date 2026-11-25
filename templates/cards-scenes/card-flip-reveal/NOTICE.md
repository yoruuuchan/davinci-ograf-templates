# 功能卡翻面报数 · Card flip reveal

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/transition/card-flip-reveal/CardFlipReveal.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；卡组、标题、眉题、金色强调色、正面文字色、瓷白色、正面名称字号和对照条标签都能在检查器里改。
- 每张卡是 lines 字段 cards 里的一行，格式「名称｜正面描述｜结论数字｜结论标签｜对照前值｜对照后值」，至少写前四列；缺的列不显示，支持 1–4 张，1 张居中、2 张并排、3 张保持原卡一排，4 张整排等比缩小，超过 4 张只取前 4。
- 去掉正面三套假产品界面（编辑器光标、配方列表、搜索框和假列表），正面只留暗色卡面、「0N」编号和 cards 里的名称与描述；编号按张数自动排。原卡编号旁的英文小字 FEATURE 去掉。
- 背面大数字按实际宽度自动缩小（−128.4% 这样的宽值也放得进卡内），字号随整排缩放等比缩小；结论数字落定时 1.08 收到 1，结论标签晚 4 帧升起，都照原卡。
- 对照条从「对照前值｜对照后值」两列算条长，两值比例决定缩到多短，不做范围字段；两个标签合并成一个 text 字段「对照标签」，用「｜」隔开，所有卡共用。
- 去掉品牌名 video-shotcraft：眉题换成可填的 text 字段，留空不显示；「With Shotcraft」改成中性中文标签。
- 中文不拆词距：标题按字逐字升起、眉题逐字模糊升起，中文不加字距也不倾斜；标题填长了自动换行并整体缩小。
- 翻面动作全部照原卡：4 帧预备 −10°、16 帧翻到 194°、spring damping 15 落 180°、抬起 60px、面随角度压暗、侧棱 56–124° 受光带、错峰 12 帧、倒影 0.22 渐隐 26%、接地影随角度收放。
- 相机照原卡 1→1.03 缓推；hold 在第 94 帧（4 张时最后一张落定、标签升完）把画面定住，原卡会一直推到 150 帧，但那时卡片早已落定。
- 原卡在 150 帧自己结束；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
