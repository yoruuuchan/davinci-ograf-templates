# 录音声纹胶囊 · Voice waveform live

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/interaction/voice-waveform-live/VoiceWaveformLive.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 默认文案换成中文；说的话、在听标签、已发送、提示语、文字色、强调色、底色、字号和字体都能在检查器里改。
- 原来的两行写死转写改成一个 lines字段「说的话」：一行一句，支持1–8句，每行一个说话窗；句子留空就跳过那一段说话；默认两句仍用原卡的15–57、57–80、80–124三窗，提交固定在126帧。句子多时每句的说话窗自动缩短，全部安排在同一个6秒片段内，不会再写死在 LINES表里；每多一句，说的话大约多一两秒，但节奏会更紧。
- 词的出现时刻改成在这句的说话窗内按单元均分（中文按字、英文按词），每个间隔再加确定性值噪声的 ±15%抖动，长句会比原卡的音节顿挫平一点。
- 波形机制原样保留：64条、1.6帧/采样点从右往左、中部 sin^0.8权重、逐条 jitter、mulberry32 + smoothstep值噪声、静默钳6px点线；波形、转写、光标闪烁和麦克风呼吸环挂同一个说停包络。
- 提交一整段照原卡：按钮126–135帧3帧压缩回弹、波形12帧塌缩、转写128–150帧上移缩到0.72收进气泡、墨字变白、140帧起已发送升起、胶囊下沉24px退回待机；麦克风／箭头／对勾三枚 SVG图标保留。
- 去掉品牌名：「Shotcraft is listening」换成「正在听」，「Sent to Shotcraft ·计时」换成用户填的已发送文字 +实时走秒（到提交帧停住）。
- 转写整块会先换行，再按可用高度整体缩小，8句或很长的句子也不会压到胶囊、已发送行或出框；竖屏和4K由 FitBox整体缩放。
- 原卡没有自己的淡出，改成片段结尾统一的上飘淡出，片段剪多长都行；画面在152帧后定住。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
