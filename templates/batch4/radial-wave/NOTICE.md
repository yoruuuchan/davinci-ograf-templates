# 点阵通电涟漪 · Radial wave grid

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/radial-wave/RadialWave.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 波源位置、阵列密度（疏 11×7 / 中 17×9 / 密 23×13）、点阵常色、脉冲亮色、背景色和中央文字、字号都能在检查器里改。
- maxD 按实际波源重算（原卡已知坑：不改的话波源偏离中心后最外圈永远点不亮）；第二道波的反向收拢逻辑跟着实际波源走。
- 第二道波整体提前收口（起点 0.56、跨度压到 0.17），走完真停住；原卡末帧中心点还停在 87%，末帧发飘。
- 新增可选的中央文字字段：第二道波收拢回中心后淡入并停住；留空就是纯点阵背景卡。
- 中央文字按 1080p 画布换算（原卡设计坐标 480×270，等效字号 ×4），留空时整层不渲染。
- 透明模式不画底色，点阵、脉冲和文字照常；点阵按舞台短边 1080 等比布局，竖屏自动居中。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
