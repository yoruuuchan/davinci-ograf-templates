# 左右词合拢 · Text column converge

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/text-column-converge/TextColumnConverge.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；左词、轮换词、最后的词、小字、底色、文字色、字号和字体都能在检查器里改。
- 钉死位置和合拢终点改成量每个词的实际宽度；所有轮换词在画面外预先量好，换词的那一帧不再量。
- 轮换词支持 2–12 个，每个词的停留帧数照原卡（16/12/9/8/7/8/10/12），超过八个后统一用 12 帧；词越多整段越长，8 个词建议至少 6 秒。
- 默认字号从 42 放大到 80，范围 32–200；整个构图以画面中心按 fontSize/42 等比放大，左右钉住位置、字距、小字间距和柔光一起缩放，字号过大时仍自动整体缩小兜底。
- 轮换期左词是次级灰，合拢过程中提亮到和右词同色；合拢滑动按速度给水平运动模糊，静止时没有模糊。
- 竖屏时两个词离屏边更近；整句太宽时整体等比缩小，不出框。
- 原卡的等宽字体换成包里的黑体（字重 500），品牌字标换成可改的中文。
- 原卡自己结束、没有淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
