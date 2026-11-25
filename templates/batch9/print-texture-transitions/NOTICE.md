# 墨渗揭示转场 · Ink bleed reveal

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/transition/print-texture-transitions/InkBleedReveal.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 保留原卡的纸面章节页：章号、标题、副标题、纸色、文字色和标题字号都能在检查器里改；默认文案换成中文，章号默认留空，标题默认两行中文。
- 标题按行排，英文行自动用斜体；支持 1–3 行，超过 3 行、字太长或换行太多时整块等比缩小，不压下面的发丝线；副标题太长时自动换行并缩小。
- 原卡的新景 FakeDashboard A 整个去掉：墨洞改成真正的透明区域，洞里透出下面那轨的下一段，模板自己不画下一段内容；原卡新景的 1.035→1 显影缩放也一起去掉。
- 纸面和墨共用一套 SVG mask：纸面在洞内被挖掉，墨边画在洞沿上，湿晕是洞沿外 110px 的一圈；纸面和墨没有铺在根节点当背景，片段开始前和 100 帧后根节点都是透明的。
- 纸面洞的半径按落点到舞台四个角的最远距离算（竖屏、落点在角上都成立），20–98 帧 ease-out quad 跑完，落点在角上也能吃满全屏；墨边再领先 20–42px、湿晕再外扩 110px，150px 留给滤镜位移。
- 落点做成两个百分比字段 dropX / dropY（默认 42 / 39，对应原卡 800×420 @1920×1080）；0–100 都有效。
- 墨滴 14–22 帧过冲落下、20–98 帧半径 ease-out quad 洇开、±8% 低频扰动在 78–98 帧衰减到 0、墨边领先 20–42px、湿晕 110px、displacement 60→160 和固定 seed 7 全部照原卡。
- 湿晕的暖褐从 inkColor 和 paperColor 混出；墨边两层 0.42 / 0.86 保留；纸纹颗粒保留，step 设得很大，停留段像素恒定。
- 原卡 100–130 帧的「新景静止」由下面那轨承担，模板不画；100 帧后整层不渲染。默认片长 3500ms，尾巴里下一段已经在纸洞后面全亮，想紧凑可以剪到 100 帧。
- 滤镜只挂在遮罩圆上，不揉画面；filter 区域按墨边附近的圆裁，4K 时不会铺满整帧。
- 去掉原卡的 video-shotcraft 品牌短句和英文宣传语，默认换成自然中文；没有加任何装饰短线或编号。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Serif SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSerifSC.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
