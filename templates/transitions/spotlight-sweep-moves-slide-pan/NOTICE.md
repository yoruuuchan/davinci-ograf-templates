# 贴边泛光横摇 · Slide spotlight pan

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/spotlight-sweep-moves/SlideSpotlightPan.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 原卡的假三列看板、假侧栏、video-shotcraft 标志和字标整体换成 panelImage 图片字段：一张截图 cover 裁进 3000×1400、顶部圆角 60 的超宽面板，不拉伸；不填图时画中性骨架占位面板（侧栏、顶栏、三列条块，不写字），动作照常完整。
- 面板容器、位置和动作保留原卡：宽 3000、高 1400、顶边在 y 150、translateX 180→−1100（0–132 帧，严格 linear，零缓动），整块比 1920 舞台宽，横摇时只看到局部。
- 聚光头保留原卡的本地路径：−360→2600（0–132 帧，linear）；前 360px 沿左上角竖缘从下往上爬到角，转角后沿顶边走；headScreenX = slide + onTop、左缘用 slide，vGlow / hGlow 的交接和原卡一致。
- 保留的容器和光：超宽面板顶部圆角、顶部黑檐、左缘竖光、顶边横光（宽糊层＋中糊层＋粉色层＋亮芯）、贴面紫色泛光（顶边和左缘各一层）、聚光范围外的压暗罩；黑檐跟随底色字段。
- 颜色做成三个字段：底色（默认 #050409）、泛光紫（默认 #c47eff）、面板底色（默认 #f4f4f3）。宽糊层比泛光更深、彩度略高，亮芯往白里混，粉色层是泛光往粉里提，左缘和顶边辉光都从泛光紫推出来。
- 压暗罩仍以光头在面板本地坐标（顶边段用 onTop、竖缘段用 vertHeadY）为中心，不跟屏幕坐标；压暗罩裁进面板圆角，透明模式下不会糊到下面那一轨。
- 竖屏保持面板原始尺寸和顶边位置（不缩小、不压扁），画面只看到超宽面板的一段，顶边光、左缘光和聚光是主体。
- 原卡本来没有出场：面板和光带包进 ExitLayer，黑底和黑檐放在外面，132 帧后由宿主出场；片段拉长时 hold 在 132 帧定格。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。

