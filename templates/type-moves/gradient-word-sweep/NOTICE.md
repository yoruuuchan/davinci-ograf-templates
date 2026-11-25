# 渐变扫光大字 · Gradient word sweep

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/gradient-word-sweep/GradientWordSweep.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文：大字「火力全开」、标语「一句话，出一支成片。」；大字、标语、起始色、结束色、背景色、字号和闪电开关都能在检查器里改。
- 原卡的四色标渐变改成起始色、结束色两个 color字段，中间两个色标固定用原卡的紫 #9d6bff和粉 #ff6ed4；扫光、三层辉光、波前尾迹和过曝亮核都跟着这条渐变走。
- 闪电保留原卡7次排期、形状和辉光增亮，但横向位置改成按大字实际量到的宽度排布（原卡按 Supercharged的700 px字宽写死）；加了「闪电」开关，关掉后不再闪、也不再额外增亮。
- 字体从 Avenir Next换成包里的思源黑体700，保留原卡的斜体设定（英文斜体、中文正体）和紧字距；字号做成 number字段，标语按一半大小跟随（默认184 /92，标语仍是原卡的92 px）。
- 辉光层仍放在外扩 PAD的 Halo盒里；PAD和模糊半径随字号缩放，换大字号也不会出现被裁成矩形的光。
- 近黑背景改成「背景色」字段（默认 #07060a），底色渐变从它推出来；暗角和颗粒保持原卡参数，勾透明背景时底、暗角、颗粒都不画。
- 去掉原卡第一行后半的 product films和整行品牌签名 made with video-shotcraft，第二行换成可留空的标语字段；环境泛光尺寸改成跟着大字实际宽度走。
- 原卡105帧到点直接结束，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
