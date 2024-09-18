---
title: 舞萌指令
icon: spinner
order: 10
date: 2024-09-18
category:
  - 指令
tag:
  - 指令
  - maimai
  - SEGA
  - 舞萌
  - 舞萌DX
sticky: false
star: false
footer: Yumu Docs - 舞萌指令
copyright: false
---

::: tip 提示

本群升级成为舞萌群。

:::

## <HopeIcon icon="wand-magic-sparkles"/> 1 查询舞萌最好成绩 !ymmaimaibest (!x) {id=bestperformance}

这个功能可以查询到玩家最好成绩榜（b50）上的成绩。

![舞萌最好成绩面板，指令：!x qq=... #1](https://yumemuzi.s-ul.eu/yumu/ohjdEuxW)

**使用方法**

!ymmaimaibest / mb / x (**玩家名**) (**`#`偏移量或区间**)

- **<HopeIcon icon="address-card"/> 玩家名**：需要查询的玩家名称。留空默认使用发送者的 QQ 查询。
  - 这里的玩家名是玩家在[==水鱼官网==](https://www.diving-fish.com/maimaidx/prober/)上的账号名。
    - 如果玩家的账号名称带有特殊字符或中文，请使用 QQ 查询。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
    - 如果您查询自己的成绩时显示未绑定，则可以前往水鱼官网，登录，点击右上角的 `编辑个人资料` ，最后在 `绑定 QQ` 段落填写自己的 QQ。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@某S氏。
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从头到尾排序中的第几个或是某几个成绩。
  - 可以输入 1~50 之间的整数，输入 2 就是查询第二个最好成绩。
  - 1~35 为过去版本中的前 35 个最好成绩 (b35)，36-50 为最新版本中的前 15 个最好成绩 (b15)。
  - ~~可以输入区间，格式为：最小数`-`最大数，如 1-20。~~ 暂时无法输入区间。

::: tip 提示

如果不输入玩家名称（查询自己的成绩），那么偏移量前的 `#` 号可以忽略。

如果查询的玩家名称末尾含有**空格**和小于 100 的**纯数字**的玩家，如 **maiplayer 12**，建议在其后添加偏移参数 (**`#...`**)，便于区分。

:::