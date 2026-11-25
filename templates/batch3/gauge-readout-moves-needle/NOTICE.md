# 三表甩针自检 · Needle sweep

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/data/gauge-readout-moves/NeedleSweepSelftest.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；卡头标题、指标（一行一个「名称｜数值」）、自检中／完成两段状态文案、底色／卡面／强调色／危险色都能在检查器里改。
- 卡头去掉 video-shotcraft 标志、品牌名和「render-node-02 · 3 sensors」假节点信息，只留标题和状态胶囊；卡头下的整行发丝线保留。
- 指标从写死的三表改成 1–4 个一行排开：每格占卡宽 1/N，表盘半径取 min(148, 格宽×0.42)，数值字号、指标名字号、刻度数字和弧线粗细一起按比例缩；超过 4 行只取前 4 行；数值超出 0–100 夹住。
- 表盘全部自绘 SVG 保留：270° 轨道、225–270° 红区、0–100 的 11 个刻度数字、跟随指针的琥珀亮弧、锥形指针和轴帽、高速段的角向拖影。
- 动效帧号照原卡：12/16/20f 错峰点火，去程 12f ease-out 甩满 270°，扫过的刻度点亮后 24f 回落，回程弹簧按落过头 8° 反算阻尼、46f 后锁死常数，落定同帧数值 overshoot 弹出、指标名淡入，60f 起状态胶囊切换、小圆点停止呼吸。
- 状态胶囊任一文案留空时胶囊里只留小圆点；两段都留空也一样。
- 背景的柔光、颗粒、暗角勾了透明背景都不画，卡面、表盘、文字、胶囊是前景。
- 竖屏时整块卡面按画面宽 94% 自动缩小居中，不出框。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
