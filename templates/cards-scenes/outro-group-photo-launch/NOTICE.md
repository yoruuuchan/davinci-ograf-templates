# 群图飞聚收场 · Group photo launch

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/outro/outro-group-photo-launch/OutroGroupPhotoLaunch.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡 9 块写死的假截图切片换成 images 字段：4–9 张最合适，最多取前 12 张；每张按自身宽高比 cover 裁进白卡（10px 内边距、圆角、发丝描边、软影），横竖方图都不拉伸。
- 写死坐标换成绕画面中心的自动椭圆摆位：第一张从正上方起顺时针，落定旋转角按序号哈希取 ±5°；N=4 时椭圆收成近似菱形、卡面放到最大，N=9 接近原卡密度；图少自动收圈，图多自动缩卡。中央字标带留空，落进带的卡片沿椭圆向外推。
- video-shotcraft 的字标、标志和英文 motto 换成 wordmark 文字字段、可选 logo 图片和 tagline 文字字段；标志先压 4f，字标逐字 letterpress，标语最后淡入。
- 原卡的一整张假页面背景和里面的全部文字去掉，换成奶白纸面底色 + 暖色中心光晕；背景页的 blur 景深层随之去掉。
- 保留全部动作：cue 从 4 起每 3f 一个、飞 12f、bezier(0.34,1.4,0.44,1) 真过冲、方向性 SpeedBlur、落地压实、42–50f 全员退后（透明度 −12%、饱和 −8%）、crane 透视落机位 + 缓推、letterpress、rule 长出与延长线、开场光带、舞台光、20 颗金尘 + 6 颗 bokeh。
- 原卡结尾 133–144f 淡到暖墨色删掉，整块前景改由 ExitLayer 统一上飘淡出，片段剪多长都行；纸面底色留在 ExitLayer 外面。
- 竖屏按宽度比缩放整组，椭圆 ry 按 1080/1920 收、卡面缩小，字标和标语用 FitBox 缩到不出框。
- 图片超过 9 张时压缩入场间隔，保证所有卡片仍在 42f 退后排之前落定；透明背景模式下不画纸面、光带、舞台光、暗角、颗粒和金尘，只留卡片、图片和文字。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
