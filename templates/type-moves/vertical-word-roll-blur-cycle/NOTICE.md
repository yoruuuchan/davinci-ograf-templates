# 句尾滚轮换词 · Word roll blur

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/typography/vertical-word-roll-blur-cycle/VerticalWordRollBlurCycle.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文：句干「专为」，词表「新品发布／产品演示／宣传片／每一支成片」；句干、词表、底色、文字色、强调色和字号都做成字段。
- 换词节拍从原卡的归一化时间轴改成整帧：开头静置24帧，每次换词16帧（0.7×outQuint +0.3×outBack，前快后极慢带一点过冲），段间静置13帧，末词落定后留40帧；词多了按同样节拍往后排，每多一个词约多1秒。
- 词表支持2–8个，超过8个只取前8个；空项忽略；每个词一行，或一行里用「、」「|」隔开。
- 视窗宽度不再写死190（480坐标）：每次渲染实测最长词，左右各留12设计像素（0.4倍字号）余量，所有词完整装进；整组（句干＋视窗）一起居中；太长或竖屏时装不下，由 FitBox整组等比缩小。
- 未落定的灰改成由文字色和底色混出来（约25%文字色），不再用原卡写死的 #B9B9BE；强调色只在落定的那个词上出现。
- 纵向模糊按字号等比缩放（相邻行3、更远5，折合到默认字号是12／20像素），滚动时按滚轮真实速度再叠最多4（默认字号16像素）的纵向运动模糊，静止为0；所有模糊都是 SVG feGaussianBlur的 y向，横向笔画不糊。
- 滚筒曲面、上下沿柔边渐隐、背景柔光、暗角和颗粒照原卡；勾透明时背景、暗角和颗粒都不画。
- 原卡结尾在0.9–0.985把整组淡出，这里删掉：末词落定后停住，由片段结尾的 ExitLayer统一出场。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
