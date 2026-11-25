# 逐词填色跟读 · Karaoke fill sync

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/type-rhythm-sync/KaraokeFillSync.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文两行；标语、语速、底色、字色、强调色、字号都能在检查器里改，字体可换。
- 原卡写死的逐词时间表（FRAME 20–38、MOTION 42–75 等）改成按字数加权的匀速词表：读窗总长 = 拍数 × 每拍帧数，词间 4 帧、行间 10 帧换气，扣在总长里。默认文案仍是第 20 帧起读、第 130 帧读完、第 140 帧落定。
- 中文没有分隔符的一整行是一个短语，按字逐个点亮；空格、全角空格、｜、| 和 / 用来分词，英文按词。
- 填色仍是双层同文本叠放加 ±4% 柔边 mask；正在读的词用强调色，读完 10 帧退成主墨色。
- 读指下划线保持 8 px 高、跟随填色前沿，读完 6 帧从左收掉；跟随色用强调色。
- 底部 48 根旁白波形照原卡保留：确定性哈希起伏，已播部分着色，换气处回落；包络从推导出的词表算。
- 最多 4 行；3 行起先缩小，4 行用更紧的行距，超出的行不显示；单行字太多时整块自动缩小。
- 原卡最后 20 帧的真静止改成片段结尾统一的上飘淡出，片段剪多长都行。
- 语速调慢后读窗会超过默认的 5 秒片长；meta 的 clipMs 是静态值，需要在达芬奇里把片段拉长再用。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
