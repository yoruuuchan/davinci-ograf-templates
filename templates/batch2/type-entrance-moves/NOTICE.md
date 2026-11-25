# 字符坠落 · Letter drop

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/type-entrance-moves/LetterDropPhysics.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认大字换成中文「落地有声」；大字、副标题、底色、文字色、字号和字体都能在检查器里改。
- 起跳间隔按实际字符数分摊（原卡固定按 9 个字母的 8 个间隔算），只有一个字符时直接从第 4 帧起跳；输入多少字符就显示多少，最后一个字符仍在第 40 帧起跳、第 88 帧落定，早于第 110 帧回正。
- 字符按字体自然字宽用 flex 排槽位，所有运动只走 transform；整行太宽时绕基线整体缩小。
- 去掉 10 个字符上限：Yoru 输入的 15 个字符不再只显示前 10 个，汉字和英文字符都按实际个数逐个落下。
- 字重从原卡的 800 换成包里的 700（最接近的可用字重），副标题 500；字体换成包内的思源黑体。
- 去掉 Shotcraft 品牌字样；背景柔光、地面、地平线和 5% 胶片颗粒由底色推出，勾透明背景时不画，接触影作为前景保留。
- 副标题改成中文字段，默认「每个镜头，都踩在拍子上。」，回正后才浮出，留空不显示。
- 原卡 150 帧结束后直接结束，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
