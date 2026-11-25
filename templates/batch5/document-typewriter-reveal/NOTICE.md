# 文档逐行写出 · Typewriter doc

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/ui-entrance/document-typewriter-reveal/DocumentTypewriterReveal.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 被「写」的那张整页文档截图（wbr-full.png）换成模板自己排版的纸面：标题、3–8 段正文、4–8 条侧栏条目，全部是字段；截图里的假周报内容、成员名、品牌名和写死的遮罩坐标不再出现。
- 写入手法保留：两段一对、纸色遮罩右锚左收、深色笔尖骑在揭示前沿、开场待命闪烁、永远只有一个笔尖；遮罩的宽高改为每次渲染量每段的实际尺寸。
- 侧栏自下而上揭开（纸色补丁自上而下收走，内缘强调线生长后淡去）保留；历史条目逐条落入左栏，落定后留在成片里。
- 相机从原卡的 5 锚点 Hermite 样条简化成三段：斜侧特写（rotY −12°、zoom 1.3）→ 全窗 → 上移让出底部给标语；开场运镜不如原卡细腻，换段落数变化时不用重算样条锚点。
- 标语换成中文两段，第二段用强调色；去掉原卡的英文斜体和词距，留空一侧只藏那半句。
- 暗场取 aurora 深紫并压低饱和；纸面、笔尖、暗场、强调色和两档字号都做成字段。
- 透明背景时不画暗场、背光、长投影和浮尘，只留纸面文档、笔尖和标语。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
