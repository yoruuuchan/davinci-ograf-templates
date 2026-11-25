# 表盘扫数落标题 · Dial sweep

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/countdown-arc-scatter/CountdownArcScatter.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文：整句读作「5 分钟装好」；主角数字、陪跑数字、标题、强调词、栏目名、底部说明、三个颜色和字号都是字段。
- 陪跑数字支持 2–12 个：前 max(1, 个数−2) 个排在主角前面、每格 24°，扫动起始角 max(99°, 24×个数−93°)，超过 12 个只排前 12 个。
- 主角数字可以是 2–3 位：标题首字槽宽按实际字宽量，不再写死 0.6em；整行标题按实际宽度居中，太长整行缩小，不出框。
- 强调词是列表，标题里每一处都标，64–76 帧从墨色插到强调色；留空就没有这个颜色事件。
- 顶部 SETUP TIME 英文小字换成中文栏目名，在发丝线左端，留空不显示；横贯发丝线保留。
- 底部安装命令换成中性的 mono 小字、放在描边胶囊里，去掉 `$` 提示符和品牌仓库名，留空不显示。
- 右上角 video-shotcraft 字标去掉，不补别的东西。
- 顶端朱红三角读数标去掉（不对应任何读数）；随盘转的 61 根刻度、外侧静止发丝弧、0.35 倍差速指针是表盘本体，保留。
- 弹簧扫动的 fps 固定 30，60fps 时间线上扫针手感不变；扫动时长固定 24 帧，陪跑数字多时起始角变大、转速更快。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
