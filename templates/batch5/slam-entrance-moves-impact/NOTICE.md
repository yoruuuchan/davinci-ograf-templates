# 重卡砸槽震邻 · Impact burst

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/slam-entrance-moves/ImpactBurstKit.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；三张卡内容、顶签、眉题、页面标题、纸面 / 墨色 / 强调色和标题字号都能在检查器里改。
- 三张卡合并成一个 lines 字段（名称｜大数字｜单位｜一句话｜按钮），一行一张卡，第二行是砸进来的主角卡；只写到哪列就显示到哪列，最多三行，多出的行不显示。
- 去掉眉题里的 video-shotcraft 标志和品牌名，改成「成片规格」文字。
- 去掉每卡三条带勾特性清单（假产品卖点、行数写死），只留一句话。
- 主角卡的深墨蓝底由墨色字段推出（原卡 NAVY），邻卡用纸面字段；全片仍然只有主角卡这一个暗面。
- 少于三行时缺的卡位不画，主角卡仍落在画面中央的槽位；三行全空时保留三槽虚线，并砸入一张空白主角卡壳。
- 竖屏和 4K 时整个 1920×1080 版面等比缩放、居中，动作和帧号不变。
- 邻卡的波及帧仍然按「冲击环前沿到邻卡中心距」反解，卡宽或间距变化时会跟着重算。
- 原卡第 140 帧之后还在极缓推镜；现在用 hold 钳在第 140 帧，不会再漂。
- 原卡自己结束、没有淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。
- 碎屑和震屏继续用原卡的固定种子哈希，没有 Math.random。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
