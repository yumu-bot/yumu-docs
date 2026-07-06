---
title: 查询好友列表
icon: user-group
order: 3
---

可以查询所添加（关注）的好友，也可以通过输入 ::address-card:: 玩家名的方式来查询是否和对方互相关注（双向好友、互关、也称为 mutual）。

::::: info 使用方法

!friend / !f (`:` ::arrow-down-a-z:: 类型和排序) ( ::ruler-combined:: 数量或区间 / ::filter:: 查询条件 / ::address-card:: 玩家名)

:::: tabs

@tab:active ::arrow-down-a-z:: 类型和排序

可选。结果的筛选和排序方式。默认随机排序。

::: details 类型和排序对应表

| 类型 | 全称 | 简称 | 默认值或默认排序方向 |
| :-: | :-: | :-: | --- |
| 表现分 | pp | p | 降序，高 pp 在前 |
| 准确率 | accuracy | a | 降序，高 acc 在前 |
| 游戏次数 | playcount | pc | 降序，高 pc 在前 |
| 游戏时间 | playtime | pt | 降序，高 pt 在前 |
| 总击打数 | totalhits | h | 降序，高 tth 在前 |
| 加入时间 | time、join | t、j | 升序，更久远的 time 在前 |
| 玩家编号 | uid | u | 升序，0-9 |
| 国家和地区编号 | country | c、y | 升序，A-Z |
| 姓名 | name | n | 升序，A-Z |
| 在线状态 | online | o | 真 |
| 单向关注 | mutual | m | 假 |

布尔值的默认排序方向是按姓名升序排列。

:::

::: tip 排序

在参数后加 `+` 视作 ::arrow-down-a-z:: 升序，加 `-` 视作 ::arrow-up-a-z:: 降序，加 `2` 视作按默认排序方向相反的方向。

:::

@tab ::ruler-combined:: 数量或区间

可选，三选一。

- 范围：1-999
- 默认值：20（随机排列）
- 输入单个数字，则返回好友列表里的第 1 个好友。
- 输入区间（最小数`-`最大数），则返回对应的多个好友。差值必须小于等于 100。

@tab ::filter:: 查询条件

可选，三选一。

请参阅：[::filter:: 查询条件·玩家查询器](../../tips/field/filter.md#player)

@tab ::address-card:: 玩家名

可选，三选一。参见：[字段/玩家名](../../tips/field/player.md)

::::

:::::

![查询好友关系](https://yumemuzi.s-ul.eu/yumunext/JCKjRZeq)