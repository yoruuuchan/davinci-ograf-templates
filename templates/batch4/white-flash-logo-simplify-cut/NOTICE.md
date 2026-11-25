# 闪白转扁平定版 · White flash simplify

这个模板改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡：

- `demos/transition/white-flash-logo-simplify-cut/WhiteFlashLogoSimplifyCut.tsx`

上游版本：1266a3ec4831289c4d893d42dd5102723658039a (2026-10-30)。Apache-2.0 全文见 `LICENSE-video-shotcraft-Apache-2.0.txt`。

## 改了什么

- 从 Remotion 合成改成 OGraf v1 图形（达芬奇 21 等软件可直接加载），画面只取决于播放头位置。
- 用 ograf/_kit 里自己写的兼容层代替 Remotion（插值、缓动、弹簧等按标准公式实现，没有使用 Remotion 的代码）。
- 共享件（Polish / Look 等）的字体换成包里的字体，并支持透明背景。
- 字标换成文字字段，默认「拾光影像工作室」；液态版和扁平版同字号、同中心，字号默认 190（100–280），两版都用思源黑体 700、+0.03em 字距。
- 液态段照原卡保留：虹彩底色 300% 缓流、纵向体积、镀铬反光带、斜向高光一次、字下 bloom、地面倒影、整幅 0–44 帧缓推 1→1.035；虹彩不开放成字段。
- 白闪照原卡：34–46 蓄力（brightness 1→1.7、横向眩光拉开）、44–50 径向白团撑满、50–54 纯白、54–76 曝光回落；50 帧在全白时换场，扁平字标只做 1.03→1 对焦。
- video-shotcraft 标志换成可选的标志图片，74–96 帧从左往右揭开，尺寸约 124px、按比例 contain、不加液态质感；原标志的取景框和琥珀斜切是品牌专属动作，不套到任意图片上。
- 标志留空时上方什么都不放，纸面内容整体上移，不留空位。
- 去掉字标下方 96px 的琥珀装饰短线和英文品牌短句；标语换成中文文字字段，默认「把每一帧，都拍成电影。」，78 帧起逐词升起、46px 次级灰（中文按字拆、英文按词拆）。
- 原卡 wordText 里为「ft」接缝写死的 lastIndexOf hack 去掉：中文会在错误位置切字；用户填英文时也不再复刻这个 hack。
- 颜色收敛成暗场／纸面／文字／强调四个字段；暗场渐变、纸面暗部、标语次级灰都从字段推出来。强调色当前只做备用，默认画面没有用到它。
- 这张卡不做透明背景（meta 写 opaque: true）：暗场→纸面是动作本身，透明了就没有「降维」。
- 原卡在 120 帧定格后画面已锁死；移植后超过 120 帧冻结在锁定帧，片段剪多长都停在同一画面，前景包 ExitLayer，结尾由宿主上飘淡出。
- 字标太宽时整版等比缩小（液态版、bloom、倒影、扁平版一起缩），不出框；标语太长自动换行。

## 打包进来的第三方内容

- React、React DOM、scheduler：MIT License，见 `LICENSE-react-MIT.txt`。
- Noto Sans SC：SIL Open Font License 1.1，见 `fonts/OFL-NotoSansSC.txt`。
