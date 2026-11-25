# 比分重拳砸落 · Score slam

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/slam-entrance-moves/ScoreSlam.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；顶签、两队名、左右比分、赛事行、标题、概括词、副句、三种颜色和比分字号都能在检查器里改。
- 原卡主队徽是 video-shotcraft 标志、客队是「KEY」字母徽；改成两个图片字段，填图就裁进圆徽，留空画中性首字圆徽（左实心、右描边）。
- 比分字号做成 number 字段（140–280），卡高、队徽、队名、顶签、赛事行和间距都等比跟随。
- 卡宽不再写死 1240，按左右比分实际字宽和两队名实际宽度量宽：两边取同一列宽，因此一长一短时卡和比分都保持居中。
- 胜方由比分数值自动判定，只在胜方数字下划金线；平局或比分不是数字时两边同色、不划金线。
- 标题的强调色从「只给最后一个词」改成一个 list 字段，标出标题里每一处强调词；中文逐字、英文逐词升起。
- 标题太长时自动换行；标题加副句太高时整块缩小，不会压出画面。
- 去掉主队徽里的 video-shotcraft 标志和队名位置的品牌名「Shotcraft」，换成中性圆徽和用户的队名。
- 保留顶缘四盏泛光灯依次亮起、远处看台虚化光点和卡顶金色发丝光——它们是夜场氛围，不是品牌。
- 竖屏和 4K 时整块内容等比缩放并居中；背景的泛光灯按画面宽度重排、看台光点带按画面高度定位。
- 白闪是全屏 screen 叠层，勾了透明背景也照画；勾透明时背景舞台、泛光灯和看台不画。
- 碎片、火花和震屏继续用原卡的固定种子哈希，没有 Math.random；原卡自带的结尾淡出换成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
