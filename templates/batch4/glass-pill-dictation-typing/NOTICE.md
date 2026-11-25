# 胶囊听写打字 · Glass pill dictation

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/interaction/glass-pill-dictation-typing/GlassPillDictationTyping.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；听写句、提示语、暖色、杏色、文字色、底色和字号都能在检查器里改。
- 胶囊定宽：宽取「画面宽 × 0.65」与「句子实际宽度 × 1.8」的大者，再夹进画面（两边各留 6%）；句长两三倍时胶囊封顶在画内、字号等比缩小，不出框。
- 打字窗口按字数等比拉伸（2 帧/字不变），光退随打字窗口走，光标在打完后 8 帧撤掉。
- 新增可选提示语：开口前浮现、首字落下前淡出，留空不显示。
- 去掉底部 video-shotcraft 品牌小标（标志 + 品牌名 + speak or type），不留替代物。
- 声波按钮保留 5 根竖条和左高右低的听写图标，呼吸停住（慢循环在整数周期之外会跳变，停住更稳）。
- 透明模式只画胶囊本体和内嵌的暖光渐层，背后的太阳、柔光斑、地面反光、暗角颗粒全部不画；磨砂在达芬奇里对下层画面生效。
- 原卡没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
