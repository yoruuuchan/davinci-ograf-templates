# 角落聚光显影 · Corner spotlight reveal

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/effects/spotlight-sweep-moves/CornerSpotlightReveal.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 原卡的白底假界面（Shots 骨架页）换成可填的页面截图／照片：整张图按 cover 铺满 1920×1080 的页面，横竖图都不变形；不填图时显示一块浅灰的骨架占位页（圆角条和小方块，不写字）。
- 页面、显影罩和白色光晕包进出场层，原卡的纯黑底放在外面：片段结尾只退前景，全亮定格保留到最后。
- 光晕颜色做成字段，羽化边和光晕都从它推出来；背景颜色也做成字段，默认纯黑。
- 透明模式不画黑底，聚光罩外完全透明，叠加在下一轨上就是「从角落揭开下面的画面」。
- 显影罩写在容器上而不是图片上；聚光半径 160→1300（0–100 帧严格匀速）、光心 (140,90)→(420,260)（0–96 帧匀速）、羽化 0.85r、页面缓推 1.75→1.47 与微转，全部照原卡逐帧保留。
- 占位页的骨架条和方块从面板颜色推出来，没有文字和品牌元素。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。

