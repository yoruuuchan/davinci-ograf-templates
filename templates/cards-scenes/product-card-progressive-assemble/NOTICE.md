# 详情卡逐格自填 · Product card assemble

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/product-card-progressive-assemble/ProductCardProgressiveAssemble.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；商品图、眉标、商品名、分类标签、原价、新价、价格理由签、卖点正文、高亮词、色卡标签、按钮、光标小签、三种颜色和字号都能在检查器里改。
- 原卡用 video-shotcraft标志当商品主体，改成商品图字段，按 cover裁切不拉伸；留空时画中性浅灰蓝图形容器占位，动作照常播放。
- 去掉图区左上角「01 / 06」装饰编号。
- 光标框位从原卡的写死坐标改成每帧量各字段的实际宽高，改文案或字号后仍然框得住字段。
- 标题太长自动缩小；正文不再写死 nowrap，超宽自动换行；分类标签一排放不下换排。
- 新价和理由签按实际宽度排，位数变了不压字；价格行整体太宽时等比缩小。
- 整卡随内容长高时整体缩进画面，竖屏和4K由宿主自动缩放。
- 色卡四枚圆点不改字段，按墨色、纸面、强调色、强调色混纸面的浅色推导；选中环钉在第一枚。
- 背景颗粒改成静态，132帧之后画面逐帧相同；原卡自己淡出的部分改成片段结尾统一的上飘淡出。
- 按钮上的英文变成了按钮文案字段，光标小签 AUTOFILL变成中文「自动填充」，留空只留框不留签。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
