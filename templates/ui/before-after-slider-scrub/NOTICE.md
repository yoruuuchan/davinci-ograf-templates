# 前后对比拉杆 · Before-after slider scrub

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/data/before-after-slider-scrub/BeforeAfterSliderScrub.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 原卡 FakeDashboard 两版假界面整体换成两张用户图，按 cover 铺满画面；只有同布局同机位的两张图对比才成立（修图前后、截图前后）。
- 两张图都不填时画中性占位（浅灰底 + 圆角块和浅色条，像一页界面的剪影）；只填一张时两层共用它，before 层仍带灰蒙。
- Before / After 角标换成 text 字段，位置改成按画面宽的百分比（before 约 71%、after 约 34%），竖屏也成立；文字填长自动缩小，不出框。
- 强调色和胶囊深底色做成 color 字段；分割杆和手柄保持白色，不开字段。
- before 层的「处理前」灰蒙处理（轻微失焦 + 降饱和 + 低对比 + 暖灰雾面）写死在模板里，不做字段。
- 去掉 FakeDashboard 的全部假内容（侧栏、图表、面包屑、video-shotcraft 字样）。
- 速度相关的插值在 continuous 帧号下夹了幅度；手柄捏合的 sin 项在预备段之前 clamp 到 0 起（原卡会走出负值段）。
- 原卡 150f（110f 动作 + 40f 定格）之后交给宿主出场。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
