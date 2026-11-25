# 光标巡览特写 · Cursor flyover

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/camera/cursor-flyover/CursorFlyover.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 页面从代码画死的假工作台换成 image 字段：用户的截图按 cover 铺在世界画布上，画布按图的宽高比定尺寸，再放进保留底板、圆角和软阴影的应用窗；不填图时画中性浅色占位面（淡点阵、空相框和图片图标），动作照常。
- 顶栏的 shotcraft 标志字标、假导航（Overview/Shots/Renders/Releases）、搜索框和头像整块去掉；四个假模块和它们写死的交互（柱状图弹高、tooltip、开关、勾选）也去掉，点击后不再有界面响应。
- 四个写死的点击目标改成 lines 字段「横%｜纵%｜站名」，坐标相对用户的图，支持 2–5 站（原卡固定 4 站不是上限），站数变了整条时间轴按「俯瞰 22 帧 + 每站 44 帧 + 拉回 24 帧」重算。
- 去掉界面响应后，点击的反馈改成 80px 涟漪加特写停留；另加光标旁的站名小签（机器色底白字，点击时浮现，1.5 秒后淡去），站名留空就不显示。
- 相机路线按各站坐标串行插值，仍是不对称 in-out、站间 8% 拉远 hop 和方向性运动模糊（amount 0.09、封顶 8px）；特写倍率做成 number 字段，默认 1.3。
- 站点坐标填 0 或 100 时，相机对准点自动往画面里收 52px 安全边，特写不把站点甩出画。
- 世界画布按图的宽高比定尺寸、按画面短边适配，相机用舞台真实宽高反投影，竖屏里各站仍然在框内。
- 光标屏幕恒 40px（按相机缩放反算），按下缩到 0.84 再过冲回弹，节奏照原卡；末站后 smooth 24 帧拉回俯瞰，尾段并入 1% 的极缓推近，落定后画面定住。
- 原卡没有自带淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
