# 首词放大成句 · Lead word zoom

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/lead-word-zoom-assemble/LeadWordZoomAssemble.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文，拆成「首词」和「后半句」两个字段；后半句有空格时按空格分词，各词从右侧推入，没有空格就整句当一个词。
- 强调词改成在后半句里按子串匹配，用强调色；原卡是整词精确匹配。
- 副行做成可编辑字段，留空就不显示。
- 去掉原卡结尾的整幕 crash-zoom（推近、失焦、交棒下一镜）；副行浮出后画面停在第46帧，片尾由宿主统一出场。
- 背景从原卡的四色 mesh收成低对比底：底色是一个颜色字段，靛蓝主光从强调色推，暖色余光保留原卡的暖橙。
- 文字颜色一个字段，副行颜色和底色混合推出。
- 终字号做成数字字段，首词起手倍数、副行字号、整行上移距离都跟着字号等比缩放。
- 字体换成包里的思源黑体，字重按原卡600取最接近的700。
- 首词基线支点从「挂载时量一次」改成每次渲染都量、值变了才更新，改文字或字体后不会用旧宽度。
- 首词很长时，起手放大会按画面宽度封顶，避免第一帧就横着出框；默认文案的2.3倍不受影响。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
