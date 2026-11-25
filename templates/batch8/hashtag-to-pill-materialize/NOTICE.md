# 话题词变胶囊 · Hashtag to pill

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/interaction/hashtag-to-pill-materialize/HashtagToPillMaterialize.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；话题词、标题、正文、纸面／文字／胶囊／光标四种颜色和标题字号都能在检查器里改。
- 话题词自动在前面加 #，用户自己填的 # 也认、不重复；最多 8 个字，多出的字不显示。
- 打字从第 8 帧起，每字 4–6 帧，固定种子 20260717；长话题词只压缩「超过 4 帧的那部分抖动」，保证最后一个字在第 47 帧前落下、每个间隔仍在 4–6 帧之间。光标恒亮不闪，颜色单独开字段。
- 胶囊宽度改为按实际文字量算（图标 104 + 左右内边距 96 + 间隙 66 + 字宽），夹在 520–1500 之间；封顶时字号等比缩小。原卡写死的 740×236 是「shots」5 个字母的尺寸，中文 2–8 字会变宽变窄。
- 胶囊落位改成按实际宽度算：左缘固定对齐页面 152px，不按中心对齐；transformOrigin 仍是左上角 (0,0)，先 translate 再 scale，宽度变了也不会漂。
- 原卡的场记板图标换成中性的实心 # 字形（104px 高，同一视觉重量），不另开图标字段；场记板会把「话题」读成「镜头」。
- 去掉成品页的假产品页眉（Notes / Shots、Edited just now）和页眉下的发丝线。
- 成品页标题、正文换成可填字段；正文支持 1–8 行，超过 8 行只取前 8 行，行数多时整块缩小；标题太长自动换行并缩小，不压到胶囊。标题 122px、正文 70px、胶囊落位都沿用原卡。
- 成品页胶囊在揭示帧同帧从灰色换成胶囊色，图标和文字换成同色系深色；胶囊宽度和落地时同宽。
- 83 帧揭示后的颗粒纹理定格，卡内画面不再动；原卡没有自己的淡出，最后 400ms 改成宿主统一的上飘淡出，片段剪多长都行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
