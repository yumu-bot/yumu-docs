---
title: 查询今日最好成绩
icon: podcast
order: 7
---

这个功能可以查询到今天（或直到距今天多少天前）最好成绩榜（BP）上新增的成绩。

:::: info 使用方法

!todaybp / !t / 今日最好成绩 (`:` ::gamepad:: 游戏模式) ( ::address-card:: 玩家名) ( ::calendar-days:: 天数)

::: tabs

@tab ::gamepad:: 游戏模式

可选。参见：[字段/游戏模式](../../tips/field/mode.md)

@tab ::address-card:: 玩家名

可选。参见：[字段/玩家名](../../tips/field/player.md)

@tab:active ::calendar-days:: 天数

可选。在特定情况下，`#` 可省略。

- 范围：1-999
- 默认值：1
- 输入单个数字，则返回今天到当天之内的最好成绩（等效于在前面输入 `1-`）。
- 输入区间（最小数`-`最大数），则返回对应时间段的多个最好成绩。

:::

::::

::: warning 注意

如果玩家输入的内容，靠后有一个空格，并附带一个 1-999 的数字，将会将其匹配到 ::calendar-days:: 天数中。

此时，最好在后面补足 ::calendar-days:: 天数参数，避免机器人误判。

示例：

* !p osuplayer 12，查询玩家 `osuplayer` 从现在往之前 12 天内的最好成绩。
* !p osuplayer 12 `#`20，查询玩家 `osuplayer 12` 从现在往之前 20 天内的最好成绩。

为了消歧义，也可以直接通过 `qq=`、`uid=`、`@` 的方法来指定对方。参见：[字段/玩家名](../../tips/field/player.md)

!todaybp 仍旧可能与其他机器人冲突。建议玩家只使用短命令 !t。

:::