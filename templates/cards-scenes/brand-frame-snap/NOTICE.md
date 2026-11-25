# 彩框包屏翻色 · Brand frame snap

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/brand-frame-snap/BrandFrameSnap.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 改成叠加层：只画四条实体色带和框带上的角标，框洞保持透明；去掉瓷白舞台、产品窗口与窗口阴影、点阵、推广卡、左右栏、按钮选框、标注线和光标。meta 写 opaque: false，不画任何底色。
- 原卡 10–40 帧窗口落进框内、56–84 光标滑向开关、84 帧窗内换版、104–140 内容缓推 2% 全部去掉：模板碰不到下面那轨。
- 保留 0–18 帧色带生长（第 0 帧只有一条细边）、6 帧角标升入、84 帧同帧翻色 + 3 帧径向白闪 + 框厚阻尼弹跳；弹跳幅度按 bandWidth/60 缩放，翻色落在原卡的 84 帧。
- 框带厚度做成 number 字段（舞台短边百分比，默认 5.6，1080p 约 60px）；角标字号（框带 ×0.5）、logo 高度（框带 ×0.66）、左右内缩（框带 + 6px）、内圆角（短边 2%）全部从它和舞台宽高推，竖屏同样成立。
- 模式角标改成 modeA / modeB 两个文字字段，默认「设计」「开发」，0–83 帧显示 modeA、84 帧同帧换成 modeB；原卡的菱形 / 代码括号小图标去掉，标签前不放图标。字距 0.08em。
- 原卡右上的镜刻标志和 video-shotcraft 字标换成 brand 文字字段和 logo 图片字段；brand 默认「拾光影像」，留空不显示；logo 默认空，填了按高度 = 框带 ×0.66 等比放在品牌字左边，contain 完整显示、不裁切，品牌名太长时自动缩字号，不压到 logo。
- 颜色做成 colorA（设计，默认 #2f55ff）、colorB（开发，默认 #ff5b1f）、labelColor（角标和品牌字，默认 #ffffff）三个字段；翻色帧同帧硬换 colorA→colorB，框带顶亮底暗的薄釉从 labelColor 和黑推出。
- 内缘的内凹阴影、四角补圆角的内缘 SVG（evenodd）和框带薄釉都保留，路径按舞台宽高重算。
- 框带外角切掉约 3px 的小斜角（1080p），让叠加层检查要求的四角像素保持透明，肉眼几乎看不出。
- 原卡没有自己的淡出；改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
