# 图标弹跳求关注 · Attention bounce

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/icon-performance-moves/AttentionBounce.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；主角图标、角标、面板眉题、面板标题、面板行、三种颜色、面板标题字号、字体都能在检查器里改。
- 主角图标里的 video-shotcraft 标志换成 image 字段：方形图标最合适，横图竖图都按 cover 居中裁切、不拉伸；留空时奶油壳里画一个强调色圆角方块占位，弹跳动作照常完整播放。
- 面板眉题原卡的品牌名「New in Shotcraft」换成文字字段（默认「新功能」），不再出现 shotcraft 品牌。
- 面板行改成 lines：一行一条，用「｜」分成「时间｜事项｜注记」，时间码是可选的第一列，默认不带；支持 1–5 行，超过只显示前 5 行；行前色条按行序取色，行多了面板加高。
- 面板标题过长时先按面板宽度换行，再缩到两行以内；行文字过长时在固定槽内缩小；字号字段联动行字号，整块面板超过画面时整体等比缩小。
- 四跳、蹲伏、空中拉伸、逐跳加重的落地压扁、末跳阻尼余弦回稳、落点涟漪与溅点全部照原卡，溅点和涟漪用原卡的固定哈希，不用 Math.random。
- 邻居图标保留原卡的四枚低饱和 squircle 和中性线稿字形，30–96 帧失焦变淡照原卡；没有做成图片字段，免得用户填不满时露空槽。
- Dock 磨砂条、接触影两层、百叶窗光保留；透明背景时去掉底色、渐变、百叶窗光和 Dock。
- 竖屏改成图标整体下移、Dock 贴近画面下缘，面板排到图标上方；横屏保持原卡 1920×1080 构图，其他尺寸整卡等比缩放。
- 原卡到第 156 帧直接结束；现在第 156 帧以后画面停住，片尾 400ms 交给宿主统一上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
