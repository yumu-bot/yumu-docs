---
title: 查询通过成绩
icon: square-check
order: 3
---

这个功能会查询到 24 小时内的非失败成绩。


::::: info 使用方法

!pass / p / 通过成绩 (`:` ::gamepad:: 游戏模式) ( ::address-card:: 玩家名) ( ::filter:: 查询条件) (`#` ::ruler-horizontal:: 偏移量或区间)

:::: tabs#pass

@tab ::gamepad:: 游戏模式

可选。参见：[字段/游戏模式](../../tips/field/mode.md)

@tab ::address-card:: 玩家名

可选。参见：[字段/玩家名](../../tips/field/player.md)

@tab:active ::filter:: 查询条件

可选。参见：[字段/查询条件·成绩查询器](../../tips/field/filter.md#score)

@tab ::ruler-horizontal:: 偏移量或区间

可选。在特定情况下，`#` 可省略。

需要查询从新到老排序中的第几个或是某几个成绩。

- 范围：1-100
- 默认值：1
- 输入单个数字，则返回对应的单个成绩。
- 输入区间（最小数`-`最大数），则返回对应的多个成绩。
- 输入数字 0，则返回所有成绩。

::::

!passes / ps / 通过成绩 (`:` ::gamepad:: 游戏模式) ( ::address-card:: 玩家名) ( ::filter:: 查询条件) (`#` ::ruler-horizontal:: 偏移量或区间)

多成绩模式。

这个模式下，只会影响 ::ruler-horizontal:: 偏移量或区间的默认逻辑。

:::: tabs#pass

@tab ::gamepad:: 游戏模式

可选。参见：[字段/游戏模式](../../tips/field/mode.md)

@tab ::address-card:: 玩家名

可选。参见：[字段/玩家名](../../tips/field/player.md)

@tab:active ::filter:: 查询条件

可选。参见：[字段/查询条件·成绩查询器](../../tips/field/filter.md#score)

@tab ::ruler-horizontal:: 偏移量或区间

可选。在特定情况下，`#` 可省略。

需要查询从新到老排序中的某几个成绩。

- 范围：1-100
- 默认值：20
- 输入单个数字，则返回从 1 开始，对应的多个成绩（等效于在前面输入 `1-`）。
- 输入区间（最小数`-`最大数），则返回对应的多个成绩。
- 输入数字 0，则返回所有成绩。

::::

:::::

![通过成绩面板](https://yumemuzi.s-ul.eu/yumunext/SVWrKvrl)

::: warning 注意

如果玩家输入的内容，靠后有一个空格，并附带一个 1-100 的数字，将会将其匹配到 ::ruler-horizontal:: 偏移量或区间中。

此时，最好在后面补足 ::ruler-horizontal:: 偏移量或区间参数，避免机器人误判。

示例：

* !p osuplayer 12，查询玩家 `osuplayer` 从现在往之前第 12 个通过成绩。
* !p osuplayer 12 `#`12-20，查询玩家 `osuplayer 12` 从现在往之前第 12-20 的通过成绩。

为了消歧义，也可以直接通过 `qq=`、`uid=`、`@` 的方法来指定对方。参见：[字段/玩家名](../../tips/field/player.md)

:::

::: tip 提示

- 使用 !pw 可以获取适合视频封面使用的设计。
- 使用 !up 可以获取文字版消息。
- 使用 !pc 可以获取明信片设计。允许使用玩家名、qq= 查询。

这个面板设计有参考绝区零 (Zenless Zone Zero) 的结算界面：

![绝区零的结算界面](https://yumemuzi.s-ul.eu/yumu/Gbuzj1js)

:::

