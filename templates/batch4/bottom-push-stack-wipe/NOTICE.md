# 换章底推上屏 · Bottom push chapter wipe

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/transition/bottom-push-stack-wipe/BottomPushStackWipe.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文：近黑开场章照原卡节奏（00｜开场），三章换成自然中文卖点（快／准／稳），底色沿用原卡的钴蓝／朱橙／酸柠。
- 章节内容收进一个字段：一行一章，章号｜名称｜标题（可用\n两行）｜说明｜底色；支持2–6章，超过6章只取前6章。章号留空就不显示编号胶囊；2章只推一次就停住。
- 章数变了时间表跟着变：默认4层照原卡（22/66/110帧推入、142帧起极缓推近、170帧）；5–6章每章约40f（26f推入+14f停留），整段变长约6.7/8.1秒；2章推一次即停。
- 底色不填的章自动取前一章的色相在 OKLCH里旋转 +30°，相邻章不会同色；文字颜色从各章底色自动推（亮底深字、暗底白字，像原卡酸柠章那样），不单独开字段；全局一个强调色给章号胶囊描边和第一枚自动底色。
- 原卡右栏三张假产品 UI卡（聊天卡、踩点卡、流程卡）整个去掉，换成「右栏配图」图片字段：一章一张按顺序，图比章节少时循环；没填图时右栏画一个中性占位块，左栏不再占满全宽。
- 页脚品牌字标去掉；三格章节刻度改成按实际章数出格（3章以上保留，2章时去掉——两格刻度读不出意义），仍是「当前第几章」的真实进度指示。
- 推入方向不加选项，保持原卡的底边向上。
- 字号做成 number字段（默认116，原卡章节标题字号）；开场章照原卡用约1.45倍的 mega字号。长标题自动换行，整块文字再由 FitBox兜底缩小；标题按行升起（每行18f、错峰5f）的节奏不变。
- 竖屏改成上下堆叠：标题和说明在上占满宽度，配图在下方，安全边距按短边9%算。
- 原卡结尾停在最后一章 hold（本就是定格）；默认4章142–170帧做1.5%的极缓推近，170帧后定住，之后由片段结尾的宿主出场统一淡出。因为章节数会变，没有写死的 meta hold，由卡内按实际章数在最后一章落定后定住。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
- JetBrains Mono：SIL Open Font License 1.1，见 `fonts/OFL-JetBrainsMono.txt`。
