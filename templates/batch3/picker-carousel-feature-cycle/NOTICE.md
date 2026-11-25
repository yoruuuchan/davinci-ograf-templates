# 竖向吸附轮播 · Picker carousel

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/interaction/picker-carousel-feature-cycle/PickerCarouselFeatureCycle.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认功能名改成中文六项；items可以加、可以减（支持2–10项），每项都吸附到焦点停一次，最后一项停在焦点，下方不再垫一项。
- 时间轴按拍数固定：0.05→0.95的区间均分成「项数减一」步，每步前段用 outQuint吸附、尾段真静止；把片段拉长不会放慢吸附。每多一项多约0.65秒，片段要相应拉长。
- 原卡七项只滚六项、留一项在下面垫底；模板让每一项都过焦点，收尾时下方空出来，靠原有的26%底部渐隐遮罩过渡。
- 去掉每项前的16格线性图标（配方卡／取景／摄影机／节拍／扬声器／滑杆／播放），焦点行图标的位置换成强调色小圆点，用同一套1−d×1.6的显隐，只当「当前项」的记号。
- 去掉左侧画外的深色方形 app图标，品牌名不出现。
- 药丸白、纸面渐变、顶光和软阴影、灰阶文字都从纸面／文字／强调色三个字段推出来，不另开衍生色字段。
- 字号默认68（范围44–100），行高、视口宽高、药丸高和圆点都按字号等比；竖屏按画面宽92%整体缩一次，单行超过视口内宽时只缩这一行，不换行。
- 保留原卡的焦点药丸零位移、内容列 translateY穿过药丸、按到中心距离衰减透明度／字号／灰度、走位快段竖向拖影（减速自动归零）、落定药丸 scaleY呼吸。
- 原卡没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
