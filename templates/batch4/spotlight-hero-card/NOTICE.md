# 聚光锁定主角 · Spotlight hero card

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/opening/spotlight-hero-card/SpotlightHeroCard.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；页面截图、主角卡图、卡片位置与宽度、注记与强调词、三种颜色（香槟金／暖黑／注记字色）、注记字号都能在检查器里改。
- 原卡写死的整页截图换成 image 字段「页面截图」，cover 铺满页面平面；高清卡纹理去掉，主角卡换成独立的 image 字段「主角卡图」，cover 裁成圆角卡。原卡 layout 坐标改写为按 cardX／cardY／cardW 计算。
- 两张图都留空时：页面画石墨灰底 + 网格卡片墙的浅色圆角块，主角卡用其中浅色的一块 + 淡图片图标，动作照常完整。
- 光池游走仍按原卡的 3 个中间站百分比；锁定站对齐用户的卡位，推进终点的机位和卡心从字段算。
- 卡形光保留原卡的内联 SVG mask 写法（tight + wide 两层软孔、页面空间 translateZ），孔位、圆角和模糊半径都随卡片大小换算。
- 竖屏（1080×1920）把 rotY 从 34° 减半到 17°，卡片水平居中，注记排到卡上方；横屏仍是原卡的左侧机位和卡左注记。
- 注记默认排在卡左侧；卡靠左、左侧放不下时自动改排右侧并把机位镜像；卡太宽两边都放不下时叠在画面左上角。注记太长会换行并整体缩小。
- 强调词改成在注记里标出每一处；多个词可以用「、」或「|」隔开。命中时长出香槟色马克条、字翻墨色，找不到的词忽略。
- 原卡的 40–46 帧高清卡纹理交叉淡入没有了（现在只有一张主角卡图），其余节奏、缓动和帧号照原卡。
- 透明背景时不画底色、剧场压暗、光池、光锥、浮尘和颗粒，页面图、灯光下的卡和注记照画；这张卡的页面就是画面主体，一般不用勾。
- 原卡 172 帧（约 5.7 秒）结尾是 30 帧静止 hold；模板片长 6000 毫秒，第 142 帧落定，之后光池呼吸和浮尘继续，出场交给片段结尾统一的上飘淡出。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
