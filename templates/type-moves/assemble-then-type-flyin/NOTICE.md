# 骨架拼装落字 · Skeleton then type flyin

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/assemble-then-type-flyin/AssembleThenTypeFlyin.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；标题、说明句、按钮文字、图注、刊头、指标列表、媒体图、底色／文字色／强调金和标题字号都能在检查器里改。
- 原卡的假发布页换成中性两栏：左栏标题、说明句、CTA和三枚指标（1–6行），右栏一张用户媒体图加图注；竖屏（1080×1920）改成上下堆叠，媒体卡在标题下方，整页由 FitBox缩放保证不出框。
- 骨架段保留「无字壳先拼好、停半拍、文字再落位」的两段式：新版式的8件壳（顶栏、左栏框、标题位、说明位、分隔线、CTA、指标面板、媒体卡）按实际件数在6→44帧铺开，起飞间隔先密后疏，16帧 EASE.overshoot过冲、±7°旋转晚4帧收敛，SpeedBlur0.32×速度、封顶18px，落定清零；版式参考线第1帧在场，骨架齐后淡到25%。
- 文字段保留逐字3D翻滚：dx ±260 / dy ±200 / dz −200→−760 / rotateX/Y/Z ±120–190°，perspective(900px)写进每个字自己的 transform，16帧 EASE.snappy，远处虚近处实，a≥1时 transform设 none；块内字间隔沿用 clamp((128−start−16)/字数,0.35,1.6)。
- 块起始帧改由真实文案和块序计算：标题 →刊头／说明 → CTA／指标 →图注在58→114帧铺开，晚到或很长的块会自动提前，保证最后一个字在 entryFrames=128前落定；逐字种子用「块号＋字序」，不再沿用原卡的全局 seedK顺序，换文案不会串掉后面块的飞行方向。
- 指标从原卡三块写死的面板改成 lines字段「数值｜标签」，支持1–6行：1–3行一排，4–6行两排，行少时剩下的格子摊开补满；超过6行只取前6（检查器说明里写了），行多时数值和标签自动缩小。
- 收尾的「通电」保留两笔：118–132帧 CTA从描边亮成强调色实底、字色随通电变深；124帧起右侧媒体图亮一档（提亮、加一点饱和和对比）。
- 去掉镜刻标志、video-shotcraft字标、Shots／Workbench／Gallery导航和 Install按钮；玻璃导航条壳保留，内容只剩可选的刊头文字。
- 去掉右侧调色台卡、三只色轮、LIFT／GAMMA／GAIN标注和 SHOT04小标；媒体卡下半改成一条从强调色推出的窄条色块，不再画假控件。
- 去掉 AGENT SKILL眉题，改成可选刊头；去掉胶片画面从灰片擦成成片的调色擦除和那道金线。
- 标题字号从112降到88，衬线400，中文两行的行高至少1.1；其余文字用黑体，小标注不再用等宽英文腔。
- 媒体图用 image字段，cover裁切，横图竖图方图都不拉伸；留空时画深色占位块＋淡图片图标，动作和亮起效果照常。图注、刊头留空各自隐藏，互不影响。
- 原卡最后40帧的静止 hold保留；整页1.5%推近从120帧开始、168帧缓停（与原卡同一条时间线，模板片长5500ms），之后不再漂移。出场交给片段结尾统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Serif SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSerifSC.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
