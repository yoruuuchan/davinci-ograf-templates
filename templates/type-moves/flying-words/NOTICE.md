# 词语纵深隧道 · Flying words

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/flying-words/FlyingWords.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 词表换成默认 16 个中文关键词，做成 list 字段，8–30 个都行；相位按词数均分，词数变了只改密度。
- 中文词比英文宽一倍，词的字号上限改成 fontSize 字段（默认 96、40–160），每个词在它的 0.55–1 倍之间取；默认的中文短词在近端放大后也不会占满画面。
- 眉题里的品牌标志换成 image 字段、品牌名换成眉题文字；默认不出现任何 video-shotcraft 字样。
- 前景标题加「显示前景标题」开关，关掉就是纯隧道背景。
- 背景色、词色、强调色做成三个颜色字段，暗部墨色、渐变和光晕都从它们推出来；强调色比原卡光色亮，光晕的 alpha 按亮度折算。
- 前景暗幕和「词飞进中央区域压到 20%」的椭圆按主标题实测宽度和标题组实测高度定，不再写死 760×190。
- 竖屏时隧道整体缩到 1080 宽以内，保证冲到最近端的词也不出框；横屏和 4K 与原卡一致。
- 隧道不在第 180 帧停住：它是循环背景层，片段剪多长都继续转，周期 90 帧。
- 片段结尾由宿主统一上飘淡出前景标题，隧道背景不动。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- Noto Serif SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSerifSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
