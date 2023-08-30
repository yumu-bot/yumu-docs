---
title: 玩家指令
icon: user
order: 5
author: Muzi
date: 2023-08-30
category:
  - 指令
tag:
  - 指令
  - osu!
  - osu
  - player
  - 玩家
sticky: false
star: false
---

# 玩家指令

![玩家指令列表](img/help-player.png)

## <HopeIcon icon="circle-info"/> 1 查询玩家信息 !yminfo (!i)

可以查询玩家在不同模式上的游玩信息。

![Info 面板](img/bot-info.png)

**使用方法**

!yminfo / i (**`:`游戏模式**) (**玩家名称**)

- **游戏模式**：需要设定的默认游戏模式。请参阅：[游戏模式](./score.md#_1-修改默认游戏模式-ymmode)
- **玩家名**：需要查询的玩家名称。暂不支持使用 UID 查询。

**内容解析**

- **Mocha**：玩家所查询的 <HopeIcon icon="gamepad"/> 游戏模式旗下的吉祥物名称。
- **Recents**：玩家 BP 末五。

::: tip 提示

使用 !uui 可以获取文字版消息。

:::

## <HopeIcon icon="compass-drafting"/> 2 查询谱师信息 !ymimmapper (!im)

可以查询玩家 <HopeIcon icon="map"/> 在制作谱面（作图，Beatmapping）方面的信息。

**使用方法**

!ymimmapper / im (**玩家名称**)

- **玩家名**：需要查询的玩家名称。暂不支持使用 UID 查询。

**内容解析**

- **Top 5 BPs**：玩家 BP 前五。