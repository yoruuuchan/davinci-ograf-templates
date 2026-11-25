# 墨线压印立名 · Ink letterpress open

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/brand-ink-open/BrandInkOpen.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 默认文案换成中文；字标、副标、纸面／文字／强调色和字标字号都能在检查器里改。
- video-shotcraft 字标换成可填的文字；中文一个字一个字压印，英文一个词一个词压印，空格不压印也不出字底短划。
- 字多时压印间隔自动收紧，任意字数都能保证第 64 帧前全部落定，整卡节奏不变。
- 副标 26px 放大到 30px，字距 0.14em 不变；留空时副标和光标都不显示。
- 副标跟随字号缩放间距；光标随副标字号等比缩放。
- 字标字重从 600 改成 700（包里的思源宋体最接近的可用字重）。
- 字底强调色短划的粗细和下沉量随字号等比缩放，宽度按每个字的实际宽度算。
- 去掉原卡 97–104 帧的上浮缩小淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。
- 十字准星保留：竖线 0–9 帧描画、横线 8–18 帧、24–34 帧淡出，线宽 5、颜色随强调色。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Serif SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSerifSC.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
