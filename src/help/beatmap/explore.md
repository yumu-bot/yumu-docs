---
title: 探索谱面
icon: magnifying-glass
order: 3
---

::: important 重要

这个功能使用量不及预期，直观性差，未来可能会大幅重构或者更名。请时刻关注。

:::

它复刻了[谱面列表 | osu!](https://osu.ppy.sh/beatmapsets) 的功能，并将查询玩家谱面的功能合并到其中。可以在不打开官网的前提下，快速探索谱面。

::::: info 使用方法

!explore / e / 谱面探索 (`:` ::magnifying-glass-arrow-right:: 搜索模式) (`@` ::address-card:: 玩家) ( ::filter:: 查询条件)

:::: tabs

@tab ::magnifying-glass-arrow-right:: 搜索模式

可选。需要设定的搜索模式。

可以输入的参数：

| 全称 | 简称 | 别称 |
| :-: | :-: | :-: |
| most_played | m | |
| favourite | f | |
| graveyard | y |  |
| guest | g | |
| loved | l | |
| nominated | n |  |
| pending | p |  |
| ranked | r |  |
| search |  |  |

默认 search 模式，也就是只搜索含榜谱面的模式。

@tab ::address-card:: 玩家

可选。需要查询的玩家。留空默认查询自己。

- 只能使用 ::at:: @ 查询，输入格式为：@nana7michan。

@tab:active ::filter:: 查询条件

- 对于 search 模式，请参阅：[::filter:: 查询条件·搜索查询器](../../tips/field/filter.md#search)
- 对于 most_played 模式，请参阅：[::filter:: 查询条件·最多游玩谱面查询器](../../tips/field/filter.md#most_played)
- 对于其他模式，请参阅：[::filter:: 查询条件·谱面集查询器](../../tips/field/filter.md#beatmapset)
- 如果输入的内容不符合任何查询条件，则会直接通过这些内容来查询。

::::

:::::

::: tip 提示

most_played 是最特殊的搜索模式；您可以输入 !em 快捷调用它。

:::