# 三行对滚轮唱 · Triple marquee

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/outro/neon-triple-marquee/NeonTripleMarquee.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文三行「取景／打磨／交付」；words是列表字段，一行一个词，支持1–6行，超过6行只取前6行，行数变多时字号和行距一起缩小，1行时垂直居中。
- 默认颜色改成低饱和的暖白、琥珀、灰蓝，发光压到原卡的三分之一左右，只留一层柔和光晕；三个颜色字段仍可填回原卡的霓虹青／洋红／钠灯琥珀 #38d9ff、#ff3d9a、#ffae34。
- 灯管改成内联 SVG描边加 mask挖掉实心字，只保留外侧半条管壁；玻璃管、通电管体、热芯三层同源，每个副本一组 useId前缀的 id，不用 data URL。这样可变字体不会在汉字笔画内部描出交叠线。
- 滚动按 DOM实测词宽定循环单元（词宽＋间距＋空心菱形＋间距），速度9/11 px/帧、行间反向，副本数按墙宽算；竖屏时整面墙按高度铺满、左右裁切。
- 轮唱周期改成14帧×行数：每行一个槽、重叠2帧交接；上电每行错峰5帧，轮唱等最后一行点完再开始（3行时18帧）。断电整组前移，3行从124帧、6行从106帧开始，每行错峰6帧闪两下熄灭，最后一行在142帧熄完。
- 原卡没有自己的淡出；改成片段结尾统一的上飘淡出，142帧以后定格在熄灯海报上。
- 墙面镜头的 rotateY -17°→-9°、极缓推近1.05、砖墙、墙面溢光、湿地面倒影、地面色光池、颗粒暗角照原卡；透明背景时只留灯管和辉光。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
