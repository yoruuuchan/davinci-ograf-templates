# 聚光醒睡扫过 · Glow wake-sleep

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/spotlight-sweep-moves/GlowWakeSleepPanel.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 原卡的假 UI（侧栏、Review/Shipped 两列任务卡、video-shotcraft 标志和字标）整体换成 panelImage 图片字段：一张截图 cover 裁进 1250×860、圆角 26 的斜置面板，不拉伸；不填图画中性骨架占位面板（竖条、小方块、圆点，没有字），醒睡动作照常完整。
- 保留的容器和光：面板圆角、后层重影面板（同一张图同一裁切，偏移 −46/34，压暗 0.92）、贴顶边的紫色光带（宽糊层＋中层＋粉色偏移＋亮芯）、右缘竖直残光、光头眩光、黑场；3D 变换（perspective 1700、rotateY −13° / rotateX 9° / rotateZ −17°）和从左往右的慢漂移照原卡。
- 颜色做成三个字段：底色（默认 #040308）、扫光紫（默认 #b478ff）、面板底色（默认 #f6f6f5）；重影照原卡压暗 0.92，右缘蓝紫、竖直残光和光头亮芯都从扫光紫推出来，亮芯往白里混。
- 去掉原卡的 logo 描光（品牌专属，依赖 video-shotcraft 标志位）；光头经过面板左上角时只留光带本身。
- 扫光保持 4–120 帧严格 linear、零缓动；面板漂移的 interpolate 原卡没有 clamp（片段拉长会一直漂），改成喂给它的帧号夹在 120 帧，面板在原卡速度下漂到 120 帧就定格，和 entryFrames 对齐。
- 原卡 100–130 帧自己沉回黑暗，改成片段最后 800ms 由出场进度驱动同样的「睡」：环境光降到 0、贴边光淡出、右缘蓝紫收掉；不套 ExitLayer 的上飘淡出，避免和熄灯重复。120–126 帧画面完全静止，片段剪多长都行。
- 竖屏时整块面板按画面宽 86% 缩并居中（3D 角度不变），漂移幅度收小到 0.44 让斜置面板的右缘在 120 帧也不出框；扫光仍沿面板本地顶边，背景雾光跟着面板。
- 右缘蓝紫和竖直残光从扫光紫推出来（往蓝里混），不是独立颜色；粉色偏移层也从扫光紫推。透明背景勾上后不画黑底和环境雾光；面板、贴边光、面板上的压暗罩照画（压暗罩只压面板自己，碰不到下面那轨）。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。

