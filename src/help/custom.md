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

## <HopeIcon icon="pen"/> 1 上传自定元素 !ymcustom (!c) {id=custom}

**使用方法**

!ymcustom / c (**`:`操作**) (**种类**)
- (**<HopeIcon icon="table-list"/> 操作**)：保存或是删除。
  - 可以输入 <HopeIcon icon="download"/> 保存 (save, add) 或 <HopeIcon icon="trash-can"/> 删除 (clear, delete, remove)，或者 s, a, c, d, r。
  - 不输入，默认保存。
  - 如果想要删除自定义图片，可无需发送==回复==类型（如以下绿色的提示部分所示）的消息。
- (**<HopeIcon icon="table-list"/> 种类**)：想要自定义的种类。
  - 可以输入横幅 (banner) 或卡片 (card)，或者 b, c。
  - 不输入，默认 banner。

**推荐尺寸**

- banner：1920 × 320
- card：430 × 210

::: tip 提示

您可以使用以下两种方法来上传自定元素：

- 输入指令 !c，在指令的消息中附带一张照片（最好是 .PNG 格式）
  - 如果是删除操作，无需附带图片（!c :delete）。
  - 机器人会提示您是否删除。此时输入 OK 即可确认删除。您输入其他消息，或是等待 60 秒即可取消。
- 输入指令 !c，如果机器人没有获取到图片，会询问您。
  - 您可以在此之后，发送一张图片。
  - 如果机器人还是没有获取到图片，或是您不想修改自定元素，随便输入其他消息，或是等待 60 秒即可取消。

:::

::: info 模板

卡片或横幅有可能被部分不透明的覆盖层元素遮挡。所以在设计时，请调整图片的核心元素，尽量让其位于以下模板的透明部分。

![Banner 模板 (PNG，可右键保存)](https://yumemuzi.s-ul.eu/yumu/JztLOLfu)

![Card 模板 (PNG，可右键保存)](https://yumemuzi.s-ul.eu/yumu/iok8u05z)

:::