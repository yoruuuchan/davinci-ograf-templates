# 逐字裂升标题 · Split text stagger

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/type-assembly-moves/SplitTextStagger.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文八个字（原卡是 13 个字符的英文品牌短句 FRAME MOTION.）；标题、三种颜色、字号、字体都能在检查器里改。
- 字数超过 13 个时把逐字错峰压到总共 24 帧以内，整串入场的总长度跟原卡差不多；只有一个字时第 12 帧直接起跳。
- 中文标点和英文空格都保留成独立字符，各自一个裁切盒，全角标点不当空格处理。
- 基线宽度量文字容器本身，和整行文字实际宽度严格一致（不按字符数算）。
- 原卡 56–130 帧静止后硬切走，改成停住，片段结尾由宿主统一上飘淡出，片段剪多长都行。
- 背景柔光从强调色推、透明度压淡；颗粒和暗角保留。原卡没有品牌标志和装饰小字，无装饰可去。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
