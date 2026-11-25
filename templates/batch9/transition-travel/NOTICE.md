# 字腔穿越转场 · Letterform zoom

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/transition/transition-travel/LetterformZoom.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 改成叠加转场：只画暖黑盖板和字洞，洞外不透明、洞里透出下面那轨；原卡的熔金发布页整块（导航、标题、渲染卡、镜头计数、时长条、DONE标签）删掉，页面1→1.08推进、左漂28px、内容18px失焦合焦、接管曝光 +12%一并删掉。
- 大字换成 word字段（默认「成片」）加 titleSize（默认720，360–900）；实际字号按测量宽度收到画面88%以内，字太长自动缩小。原卡写死的 EDITS、560px、baseline712都去掉，baseline按大字包围盒垂直居中。
- 推进锚点改成自动：字体加载后用 canvas把 word按同样字号画一遍，在包围盒中间60%区域找连续不透明像素最长的一列当竖笔，取笔画中心当原点；ZOOM_MAX =画面宽 ×1.05 ÷笔画宽，clamp18–60。找不到竖笔（比如「一」）就退到最厚一条笔画，zoom按短边算。
- 字卡文字换成 eyebrow / subtitle两个字段（默认「第二幕」「从这一笔，进下一场。」），留空各自消失。字号30 /44，eyebrow字距从0.8em收到0.42em、subtitle24px上浮照原卡；位置不再写死196 /790，改成大字包围盒上方40px、下方60px。
- 三种颜色做成字段：plateColor暖黑、glowColor熔光、textColor副标。盖板顶光渐变从 plateColor和 glowColor推；字缘熔光透明度从0.55收到0.38，四层变焦残影透明度各减30%，熔金橙压成低饱和的 #b8764f。
- 去掉原卡132–150f的海报 hold：盖板 opacity到0后模板全透明，片长5000ms，entryFrames / checkFrame26，hold116。卡内自己淡出，不使用 ExitLayer / useExit，宿主不会再叠一层淡出。
- 叠加层不加 transparent字段，meta写 opaque: false；根节点不铺底色，盖板是唯一背景。盖板、残影、字洞共用同一套页面坐标，洞口在 mask里用 <text>挖，不用 data URL字体。
- 颗粒只落在盖板上（遮罩内的 SVG噪声），不盖住字洞；竖屏时文字中心取画面宽的一半、baseline按包围盒，锚点和 zoom按短边重算。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
