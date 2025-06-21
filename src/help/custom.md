---
title: 自定指令
icon: pen-nib
order: 11
date: 2024-02-05
category: 指令
tag:
  - 指令
  - 自定义
  - 自定
  - 客制化
sticky: false
star: false
footer: Yumu Docs - 自定指令
copyright: false
---

# 自定指令

## <HopeIcon icon="pen"/> 1 自定义横幅和卡片 !ymcustom (!c) {id=custom}

**使用方法**

!ymcustom / c (**`:`操作**) (**种类**)
- (**<HopeIcon icon="table-list"/> 操作**)：保存或是删除。
  - 可以输入 <HopeIcon icon="download"/> 保存 (save, add) 或 <HopeIcon icon="trash-can"/> 删除 (clear, delete, remove)。
  - 或者 s, a, c, d, r。
  - 不输入，默认保存。
  - 如果想要删除自定义图片，可无需发送==回复==类型（如以下绿色的提示部分所示）的消息。
- (**<HopeIcon icon="table-list"/> 种类**)：想要自定义的种类。
  - 可以输入横幅 (banner) 或卡片 (card)。
  - 或者 b, c。
  - 不输入，默认 banner。
  - banner 会作用在除了成绩页 (!p/!r/!s/!m) 之外，几乎所有符合 Chocolate 面板规范的面板上。
  - card 会作用在含有玩家信息，并且符合 Chocolate 面板规范的卡片上。

**推荐尺寸**

- banner：1920 × 320
- card：430 × 210

::: tip 提示

要想自定义背景，请先在 Bot 所在的群聊里发送一张图片（最好是符合推荐尺寸的原图），然后回复这张照片消息（回复别人的图片消息也可以），并附带 !c 指令。

![自定义使用方法](https://yumemuzi.s-ul.eu/yumu/HgtLWwNH)

:::

::: info 模板

卡片或横幅有可能被部分元素遮挡。所以在设计时，请调整图片的核心元素，尽量位于以下模板的透明部分。

![Banner 模板 (PNG，可右键保存)](https://yumemuzi.s-ul.eu/yumu/JztLOLfu)

![Card 模板 (PNG，可右键保存)](https://yumemuzi.s-ul.eu/yumu/iok8u05z)

:::