# 斜扫昼夜换肤 · Theme sweep

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/interaction/theme-switch-moves/ThemeSweepToggle.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案和星期换成中文；周标题、周次签、周注记、顶栏品牌名、日程事件、今天列和此刻时间都能在检查器里改。
- 原卡的假日历界面换成两张用户截图：昼版截图和夜版截图各 cover 铺满 1680×912 窗口，只填一张时另一版复用；两张都不填时画带淡日历网格的昼 / 夜占位块，动作照常播放。
- 顶栏的 Day / Week / Month 分段控件和「Today」按钮去掉；video-shotcraft 标志换成中性的窗口标志，旁边的品牌名是字段，留空连标志一起隐藏。
- 颜色只开昼强调色和夜强调色：今天胶囊、此刻线、开关轨道用各自版的强调色；昼夜底色、窗面、墨色和事件四色按原卡调色板固定。
- 日程事件改成「星期几｜开始｜结束｜事项｜颜色」一行一条，支持 0–16 条，颜色留空按行序轮替；同列时间重叠的事件左右并排分宽，解析不了的行跳过。
- 今天胶囊和此刻线由字段决定落在哪一列、哪一刻；夜里开灯余波亮的还是这两处加窗口轮廓光。
- 竖屏时窗口等比缩到画面宽 92%，相机坐标按新窗口重算；昼 / 夜两版仍用同一个 World 组件、逐像素同坐标。
- 星点用固定种子哈希；镜头最后从 1 缓推到 1.02 后停住，原卡的收场淡出改成片段结尾统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
