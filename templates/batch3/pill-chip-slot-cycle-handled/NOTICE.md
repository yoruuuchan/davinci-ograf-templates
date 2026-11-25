# 胶囊滚轮挤开 · Chip slot cycle

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/pill-chip-slot-cycle-handled/PillChipSlotCycleHandled.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 默认文案换成中文：前句「你的」、后句「我们全包了」、胶囊词「镜头／运镜／声音／渲染」；前句、后句、胶囊词表、底色／文字色／胶囊色和字号都做成字段。
- 前句和后句各自独立：清空哪句只隐藏哪句，另一句留在原位，胶囊保持在中间；间距由版式给，字段里不用打空格。
- 去掉每词前面的 emoji：emoji 在各平台字形宽度不一样，会让实测宽度漂移。胶囊宽度改成该词实测文字宽加左右各约 1 倍胶囊内字号的空（原卡的 74 里扣掉 emoji 位），不再用字符数×13 的兜底估值。
- 宽度实测每次渲染都做（原卡只在挂载时量一次），改了胶囊词或字号胶囊宽度会跟着更新；胶囊宽度用当前词和下一词的宽度插值，切换是连续的。
- 节拍照原卡按帧排、不按片段总长归一化：第 37 帧开始第一次切换，每次 18 帧（两头都缓的 inOutCubic），两次之间静置 15 帧，末次落稳后再留 28 帧；切换次数是词数减一。
- 胶囊词表支持 2–8 项，超过 8 项只取前 8 项；每多一个词整段长约多 33 帧（1.1 秒）。
- 胶囊投影的颜色从句子色推；胶囊里的字默认用底色，和胶囊底对比不够时改用白色。
- 原卡停在最后一个词上没有离场，改成停住由片段结尾统一的上飘淡出收场，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
