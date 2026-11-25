# 取景框咬合 · Reticle lock-on

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/fui-hud-moves/ReticleLockOn.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 改成叠加层：不加背景、没有「透明背景」开关，不画任何背景（原卡的 FakeDashboard 假面板整个去掉）；适合放在视频轨道上方。
- 原卡写死的 524×454 目标卡坐标改成字段：框中心 X/Y（百分比）和框宽、框高（百分比），取景框、中心十字和标签都以这个框为准。
- 标签换成 text 字段（默认「重点看这里」），弹出动作照原卡（back 过冲 + 淡入）；等宽「LOCK 02」装饰编号去掉，标签只剩状态点 + 一句文字，状态点改用强调色。
- 去掉聚焦压暗层和咬合微亮层：模板碰不到下面轨道的画面，压暗会把观众自己的画面涂灰。角标白色衬底笔画保留，任何底色上都清楚。
- 去掉原卡的相机缓推（只推得动假面板）和 Grain 颗粒。
- 飞入位移从写死的 1100×620 像素改成画面短边的比例值，竖屏飞入行程按画面尺寸等比，不会不够飞。
- 咬合后角标与标签保持原位常驻；片尾由宿主统一上飘淡出。
- 框贴边时标签自动收进画面；上方放不下时标签转到框下方；标签太长自动缩小。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
