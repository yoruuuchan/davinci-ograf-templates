# 协作光标游走 · Cursor cast ensemble

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/interaction/collab-cursor-moves/CursorCastEnsemble.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 改成叠加层：只画彩色光标箭头、白描边和姓名徽标，不画原卡的点阵白板、便签、简报卡、页眉、头像组、工具条和 Share 按钮；meta 写 opaque: false，不加透明背景开关。
- 默认五个人换成中文：阿蓝、小柯、阿美、小唐、小瑞，身份色沿用原卡的五色；人物改成 lines 字段「名字｜颜色」，一行一个人，颜色可省略，省了按内置八色轮换。
- 人数支持 1–8，超过 8 人只取前 8；6 人缩到 0.92、7 人 0.83、8 人 0.75，8 人的徽标约 20px，角度按人数均分。
- 原卡写死的 home / gather 坐标改成按画面中心、人数和 focusX / focusY 计算；聚拢点填到边上时整组往里收，光标和徽标不出画。
- 去掉推镜（cam1→1.045）：它只推得动原卡的假白板，叠加层没有可推的内容。
- 去掉 Rita 在简报卡上打字的 cameo（连同插入点、打字逐字出现、Draft → Ready 状态）——模板没有那张卡可打。
- 保留彩色箭头 +白描边、姓名徽标、双频正弦漂移和 98–126 帧的 smooth 聚拢；聚拢后漂移保留 25%，不归零。
- 姓名徽标宽度按真实文字量测量，中文比英文短，不按字符数估；6 个字的姓名会按宽度把椭圆的横向半径收一点，徽标不撞边。
- 原卡最后 126–156 帧是聚拢后的 hold，漂移继续；模板照做，片尾交给宿主统一上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
