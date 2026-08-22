---
title: 查询谱面排行
icon: list-ol
order: 7
---

可以查询谱面的排行榜（包括激光版成绩的总榜），以及稳定版排行榜。



::::: info 使用方法

!leaderboard / l / 查询谱面排行 (`:` ::gamepad:: 游戏模式) ( ::hashtag:: 谱面编号) (`#` ::ruler-horizontal:: 偏移量或区间) (`*` ::globe:: 范围) (`+` ::music:: 模组名)

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

@tab:active ::globe:: 范围

可选。即排行榜类型。默认全球榜：global。

可以输入的参数：

| 全称 | 简称 | 别称 |
| :-: | :-: | :-: |
| global | g | 全球 |
| country | c | 国家、地区 |
| friend | f | 好友 |
| team | t | 战队 |

::: tip 提示

如果输入了 country 和 friend，那么必须曾经使用 oauth2 的方法绑定机器人，玩家账号也必须有支持者 (osu!supporter)。参见：[内部/绑定玩家账号](../bot/bind.md)

如果输入了 team，那么玩家账号必须加入一个战队。

:::

@tab ::music:: 模组名

可选。即模组榜。默认为空。

可以输入 NM 来查看完全没有模组的榜单（和留空不一样）。

::: important 重要

即使不管在网页内，或是两个游戏客户端内，模组榜都是仅限于支持者 (osu!supporter) 查看的，但是这个端口传递参数时，貌似不需要您是支持者 (osu!supporter)。

如果未来这个端口传参的漏洞被修复，请联系开发者。

:::

::::

:::::

::: tip 提示

这个面板设计有参考 fluXis 的榜单界面：

![](https://yumemuzi.s-ul.eu/yumu/qGQ3YCVN)

:::