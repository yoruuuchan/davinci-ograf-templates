# DaVinci Resolve OGraf 模板库

117 张动态图文卡（批次 1–9）加 marker-underline-title 两个版本，全部为 OGraf v1 图形包，可直接在 DaVinci Resolve 21 的媒体池导入使用。卡片文案、颜色、字号、字体预设等字段都可以在检查器里修改。

## 目录

- `templates/batch1` – `batch9`：117 张卡，按制作批次分组
- `templates/marker-underline-title`、`marker-underline-title-v0.2`：起点测试卡的两个版本
- `docs`：制作说明、各批验收清单、修改记录等 18 份文档
- `previews`：marker 卡的预览视频与对比图

## 使用

1. 达芬奇媒体池 → 右键「导入媒体」→ 选择 `<模板名>/<模板名>.ograf.json`
2. 拖到时间线，选中后在检查器修改字段
3. 每张卡自带字体切片和 `faces.mjs`，默认字形不依赖目标机器装了什么字体

兼容性：DaVinci Resolve 21.1.1 与 21.1.2 实测可用，更高的 21.x 版本未逐一验证。

## 来源与许可

- 改编自 video-shotcraft（https://github.com/Vincentwei1021/video-shotcraft ，Apache License 2.0）的镜头卡，从 Remotion 合成改写为 OGraf v1 图形
- 每张卡内附 `NOTICE.md`、`LICENSE-video-shotcraft-Apache-2.0.txt` 及所用字体许可证
- 字体：Noto Serif SC、Noto Sans SC、JetBrains Mono，均为 SIL Open Font License 1.1
- 打包依赖：React、React DOM、scheduler，MIT License
- 本仓库整体以 Apache License 2.0 发布，见 `LICENSE`

## 范围说明

本仓库只备份模板成品本身。生成器工程（`_kit` 与各模板构建脚本，可用于重新构建全部卡片）、验收渲染和参考素材体积较大，未纳入仓库，另行备份。
