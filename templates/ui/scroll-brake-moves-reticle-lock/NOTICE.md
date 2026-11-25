# 急刹准星锁定 · Brake reticle lock

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/data/scroll-brake-moves/BrakeReticleLock.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；条目（标题／说明／版本／日期）、顶栏标题、旁弹标签、三个颜色、准星臂长和字号都能在检查器里改。
- 条目合成一个 lines 字段：一行一条，用「｜」分成「标题｜说明｜版本｜日期」，后三列可省；最后一行就是锁定目标行（原卡写死 TARGET_ROW=30），支持 1–20 行，超过只取前 20 行。
- 行数变了，滚动行程和急刹帧一起重算：角标起跳、目标行高亮、其余行退暗、标签弹出都以同一个 BRAKE 为原点，不再写死第 59 帧；1 行时行程为 0，角标仍在同一帧咬合。
- 顶栏去掉 video-shotcraft 标志、品牌名和「JL」头像圆，只留一个可改的标题，右侧留空；透明背景时不画顶栏的浅色底，只留文字和底边细线。
- 类型图标保留 ✦／↗／✓ 三档按行号轮换（目标行固定第一档），改成矢量路径绘制：打包的思源黑体没有这三个字形，用文字会掉到系统字体。
- 准星改成 6px 圆头 L 角、外扩 10px，臂长可改（默认 46px，粗细等比）；位置由目标行每一帧的屏幕矩形推出来，不写死坐标。
- 保留原卡的纵向 SpeedBlur（速度 ×0.15、封顶 32）、准星飞入段的方向性模糊、上下渐隐遮罩、目标行 6 帧高亮、其余行退暗到 0.38、标签 back(2.6) 弹出。
- 目标行后面的计划行（原卡 v2.41 之后的 Q4 条目）单独成一个「后续计划」字段，最多 4 行，标题按原卡用浅灰；留空就只有条目（11-13 审核补回：移植时去掉了它们，结尾画面下半截是空的）。
- 原卡 150 帧自己结束，改成片段结尾统一的上飘淡出，片段剪多长都行；竖屏整页缩放居中，条目文字过长自动缩到一行内。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
