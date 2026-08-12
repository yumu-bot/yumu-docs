---
title: 分析最好成绩
icon: chart-pie
order: 9
---

这个功能可以分析最好成绩榜，从而判断目前的状态，以及偏好或技巧。

:::: info 使用方法

!bestanalysis / !ba / 分析最好成绩 (`:` ::gamepad:: 游戏模式) ( ::address-card:: 玩家名)

::: tabs

@tab ::gamepad:: 游戏模式

可选。参见：[字段/游戏模式](../../tips/field/mode.md)

@tab:active ::address-card:: 玩家名

可选。参见：[字段/玩家名](../../tips/field/player.md)

:::

::::

![分析最好成绩面板](https://yumemuzi.s-ul.eu/yumunext/Pv0ljYbQ)

:::: details 内容解析

::: tabs

@tab ::circle-info:: 主信息

这里分别展示了玩家最好成绩榜内的 ::guitar:: 曲速、::clock:: 时长、::link:: 连击、::star:: 星数信息。

从左到右分别是最小值、中位数、最大值。

@tab ::rainbow:: 最好成绩

前 6 个最好成绩。

@tab ::ranking-star:: 评级信息

这个 ::chart-pie:: 饼状图展示了玩家的评级占比。

@tab ::music:: 模组信息

这个 ::chart-pie:: 饼状图展示了玩家的模组占比。

@tab ::chart-column:: 最好成绩分布

这两个 ::chart-column:: 柱状图展示了玩家的最好成绩分布。

上方图表的纵轴代表 ::star:: 星数，颜色代表 ::ranking-star:: 评级。

下方图表的纵轴代表 ::clock:: 时长，颜色代表 ::music:: 模组。

@tab ::chart-line:: 表现分分布

这个 ::chart-line:: 折线图展示了玩家的 ::crown:: 表现分分布。

@tab:active ::chart-bar:: 时间分布

这个 ::chart-column:: 柱状图和 ::chart-gantt:: 散点图展示了玩家的最好成绩在一天之内的 ::clock:: 时间分布。

柱状图以 3 个小时为一个区间，高度代表这个区间内的最好成绩总数。

散点图的纵轴代表 ::crown:: 表现分，颜色代表 ::ranking-star:: 评级。

@tab ::user-tag:: 谱师排行

这里展示了在玩家的最好成绩榜中，提供表现分占比最多的几个 ::user-tag:: 谱师。

:::

::::

::: tip 提示

使用 !ua 可以获取文字版消息。

这个功能原叫做 BPHT（Best Performances Head & Tail）。

:::