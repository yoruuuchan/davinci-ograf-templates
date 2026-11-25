# 字重打拍 · Font weight pump

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/type-rhythm-sync/FontWeightPump.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文「更响」；标题、副标题、BPM、四个颜色和字号都能在检查器里改，字体可换。
- 原卡靠系统可变字体（SF Pro 250↔900）连续插值，工具箱只有 400/500/700 三档静态字重：改成同一字两层叠印，400 底层不动、700 上层按包络淡入，视觉上笔画瞬间变粗再弹回；每个字钉在按 700 字重量好的槽位里，细体居中，缝隙一拍一合。drop 后停在 700，不再回细。
- 原卡写死 128 BPM / 14 帧拍距的节拍表；改成 BPM 字段实算拍距 1800/BPM，从入场第 16 帧起排两小节 8 拍，第 9 拍是 drop。衰减窗从 9 帧到 13 帧按 BPM 推导：BPM 140 以上按拍长等比压缩，保证一拍收完再进下一拍。
- 去掉左上角的品牌标志和字标，眉题位留空；右上角保留真实 BPM 读数和 BAR 计数，数字从 BPM 字段实算。
- 中文墨高比拉丁大写高，第 2 小节的上下两行描边回声按 0.8 字号、中心距 0.92 字号摆，避免压进主字；回声仍比主字晚 2 帧、被每拍推开。
- 副标题、落定横撑、字影、光带和回声回落压到 150 帧内落定（默认 120 BPM 时 drop 在 136，5.5 秒片段的出场从 153 帧开始）；副标题仍是 drop 后逐字升起。
- 底部 8+1 格音序器保留（静音环境里的跟拍参照），去掉 drop 格上的英文「Drop」标签。
- 字后柔光、字影、drop 光带和音序器格子的辉光默认强度压到 0.6；drop 的紫→粉渐变改由强调色和重音色字段推出，默认两个颜色比原卡压了饱和，想要原卡的霓虹感把颜色改回 #a78bfa / #f472b6。
- 原卡最后自己淡出，改成片段结尾统一的上飘淡出；drop 之后不再回细，光带只扫一次，画面停住。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
