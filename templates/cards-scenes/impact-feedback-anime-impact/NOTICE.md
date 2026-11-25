# 负片打击帧急推 · Anime impact punch

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/impact-feedback/AnimeImpact.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 改成叠加层：没有背景、没有「透明背景」开关；原卡的 FakeDashboard 假界面、目标卡和写死的坐标整个去掉。
- 被挨打的画面换成 image 字段（cover 铺满舞台）；不填时画一块浅色的中性占位画面，下面那轨从四周透出来。负片滤镜只加在模板自己画的这一层，不会反色下面那轨。
- 目标框改成两个 number 字段（横/纵百分比，相对画面，默认 50/42），框大小按画面宽 27% × 高 42%，撞停后框高约画面 95%；SCALE_END 按这个比例反算，竖屏自动跟着变。对准点填到边角时会自动内收，保证撞停后框不出画、特写不会看到画面外。
- 相机、节拍和缓动照原卡：0–22 建立（creep 1→1.012，6–20 目标框描边亮起）、22–28 回拉到 0.985、28–34 六帧 ease-in(cubic) 急推、34–36 三帧冲击、37 起恢复特写 + 6px 震屏 + 暗角。
- 急推段的时间采样运动模糊照原卡：快门 0.6 帧、子帧封顶 12、中心叠一层锐利副本；集中线 34 根粗楔 + 22 根细针、seed 哈希照抄，每帧换形态，竖屏按框高等比放大。
- 冲击帧的 invert(1) grayscale(1) contrast(1.45)、红青负片副本 screen ±8px 错位、冲击期间 #0d0e12 底色都保留；这 3 帧下面那轨被盖住，第 4 帧恢复透出。
- 集中线亮色和目标框锁定色做成两个 color 字段；负片和色散的颜色是效果本体，不开字段。深色楔线从线条色压到 #0d0e12 推出。
- 原卡画面里没有文字，这张也没有文字字段。
- 原卡 50 帧以后是静止读卡；这张落定后同样完全静止，收场交给宿主统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。

