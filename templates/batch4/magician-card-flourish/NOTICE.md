# 星芒变出卡 · Magician card flourish

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/opening/magician-card-flourish/MagicianCardFlourish.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；眉题、标题、副文、票根左右两行都能在检查器里改，各自留空只隐藏自己。
- 卡面原有的品牌行、徽记上的 video-shotcraft标志和「SC01 · TAKE01」装饰读数整块去掉。卡面内容换成一张卡面图（cover填进深蓝卡壳，留一圈内边距）；没填图时画中性占位：深蓝底 +用强调色画的细环、放射短线星芒化石 +淡淡的图片图标。
- 卡背保留深蓝纹章面，中心原来的 video-shotcraft标志换成一个中性的四角星纹章。
- 票根行拆成左、右两个文字字段，默认「一人一票」和「1920×1080 ·30fps」；清空一侧只隐藏那一侧，两侧都空时整行（含虚线）隐藏；字太长会缩小，不截断。
- 右侧眉题前那条从左画出的装饰短线去掉；眉题、标题、副文的入场时机照原卡（眉题字距收拢63f、标题两行67/74f、副文从86f起逐字浮出）。
- 卡片落点做成 cardX / cardY两个百分比字段，默认36 /50，等于原卡的 cx=700、cy=540；文案起点跟着卡片右缘加边距走，卡片被推到画面边缘时文案自动收回画面内。
- 强调色、舞台底色、文字色和标题字号做成字段；星芒、光脉冲、背光和眉题都跟着强调色走，标题两行保持一重一轻（700/400）。
- 飞行段去掉了 CameraMotionBlur（兼容层不支持 @remotion/motion-blur），所以高速飞行时卡片没有运动模糊拖影；星芒本来就在模糊层外，形态不变。
- 竖屏时卡片居中放在画面上部、文案排到卡片下方；横屏才用 cardX / cardY定位。
- 原卡自己没有淡出，改成片段结尾统一的上飘淡出，片段剪多长都行；定格后的浮尘、背光呼吸和舞台光继续循环。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
