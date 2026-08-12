---
title: 查询 PP+
icon: chart-simple
order: 12
---

PerformancePlus (PP+) 是一个民间 osu! 主模式的排名系统，旨在更好地展现玩家的各项技巧。

::: tip 提示

PP+ 的官网 [Syrin.me](https://syrin.me/pp+/) 已于 2017 年停止维护，已经无法通过官网来查询或刷新数据。

但是 Syrin 把他移植进了 Lazer 里！并且可以通过 Docker 挂载并运行。

:::

::::: info 使用方法

!ppplus / pp / 表现分加 (`:` ::gamepad:: 游戏模式) ( ::address-card:: 玩家名)

:::: tabs

@tab ::gamepad:: 游戏模式

可选。参见：[字段/游戏模式](../../tips/field/mode.md)

@tab:active ::address-card:: 玩家名

可选。参见：[字段/玩家名](../../tips/field/player.md)

::::

!ppplusvs / px / 表现分加比较 (`:` ::gamepad:: 游戏模式) ( ::address-card:: 玩家名 1) (`:`) ( ::address-card:: 玩家名 2)

玩家比较模式。参见：[技巧/玩家比较](../../tips/trick/versus.md)

:::: tabs

@tab ::gamepad:: 游戏模式

可选。参见：[字段/游戏模式](../../tips/field/mode.md)

@tab ::address-card:: 玩家名

可选。参见：[字段/玩家名](../../tips/field/player.md)

::::

:::::

::: details 内容解析

在玩家 PP+ 内，能够看到 6 项参数的一个评级。这是 C8N16O32 设计的新人进阶群指数表（2.6 本地化）系统。

根据 PP+ 的参数，玩家分别可以获得以下三种评级：

- 综合指数：0 - 100%
- 进阶指数：罗马数字 I - X（1-10）
- EX

评级越接近 EX，说明玩家的这项指标越厉害。

:::