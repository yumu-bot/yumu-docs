---
title: 查询群组排行
icon: rectangle-list
order: 8
---

可以查询谱面的群组内排行榜。

::::: info 使用方法

!groupleaderboard / gl / 查询群组排行 (`:` ::gamepad:: 游戏模式) ( ::hashtag:: 谱面编号) (`#` ::ruler-horizontal:: 偏移量或区间) (`*` ::sort:: 顺序)

:::: tabs

@tab ::gamepad:: 游戏模式

可选。参见：[字段/游戏模式](../../tips/field/mode.md)

@tab ::hashtag:: 谱面编号

可选。默认获取之前查询记录的谱面编号。参见：[字段/谱面编号](../../tips/field/mapid.md)、[技巧/回溯](../../tips/trick/trace.md)。

@tab ::ruler-horizontal:: 偏移量或区间

可选。`#` 不可省略。

需要查询从高到低排序中的第几个或是某几个成绩。

- 范围：1-50
- 默认值：1-50
- 输入单个数字，则返回对应的单个成绩。
- 输入区间（最小数`-`最大数），则返回对应的多个成绩。

@tab:active ::sort:: 顺序

可选。均为降序。默认按 pp 降序排序。

可以输入的参数：

| 全称 | 简称 | 别称 |
| :-: | :-: | :-: |
| pp | p | 表现 |
| accuracy | a | 准度 |
| combo | c | 连击 |
| score | s | 分数 |
| rank | r | 评级 |

::::

:::::