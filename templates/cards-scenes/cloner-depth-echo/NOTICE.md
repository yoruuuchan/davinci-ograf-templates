# 分身纵队 · Cloner depth echo

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/cloner-depth-echo/ClonerDepthEcho.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡手搓的渲染卡（video-shotcraft 标志、假的 30fps 读数和折线）换成图片字段：卡壳（660×420 圆角 30、投影、内光）保留，卡面图 cover 填满；没填图时画中性占位（深底、强调色细描边框、淡图片图标）。
- 卡底部的镜头位改成纯序号格 01…N+1（本体 + 克隆总数，和左下计数器 ×N+1 对应），合体时全亮。
- 克隆数、标题、副行、三个颜色、标题字号都能在检查器里改；计数器「×N」的 N = 克隆数 + 1。
- 标题中文逐字、英文逐词升起，时机照原卡 92/98 帧；副行前的装饰短横线去掉。
- 主卡位置和卡尺寸按画面宽百分比排：竖屏时卡缩到画面宽约 60%、标题排到上方空位，不出框。
- 原卡最后由自己收场的部分交给宿主统一出场（结尾 400ms 上飘淡出），片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
