---
title: 查询谱面成绩
icon: pager
order: 5
---

这个功能可以查询到谱面上任何成绩（只要有记录）。

::::: info 使用方法

!score / s / 谱面成绩 (`:` ::gamepad:: 游戏模式) ( ::hashtag:: 谱面编号/成绩编号) ( ::address-card:: 玩家名) (`+` ::music:: 模组)

:::: tabs#score

@tab ::gamepad:: 游戏模式

可选。参见：[字段/游戏模式](../../tips/field/mode.md)

@tab:active ::hashtag:: 谱面编号/成绩编号

可选。默认获取之前查询记录的谱面编号。参见：[技巧/回溯](../../tips/trick/trace.md)。

如果没有之前可用的查询记录，则默认获取玩家最近的第 1 个成绩所对应的谱面编号。

- 如果输入一个数字...
  - 大于 1 亿：视作成绩编号。
  - 小于 1 亿：视作谱面编号。
    - 编号 1 亿的成绩是一个 2013 年的成绩。
    - 开发者认为 1 亿作为两种 ID 的区分边界已经足够。因此，对于在这之前的成绩，暂时无法通过成绩编号查询。
    - 输入成绩编号 后
- 如果谱面...
  - 含有榜单，则会尝试获取 ppy 官网存储的成绩。
  - 没有榜单，则会尝试从本地数据库获取。

@tab ::address-card:: 玩家名

可选。参见：[字段/玩家名](../../tips/field/player.md)

@tab ::music:: 模组名

可选。参见：[字段/模组名](../../tips/field/mod.md)

::::

!scores / ss / 谱面成绩 (`:` ::gamepad:: 游戏模式) ( ::hashtag:: 谱面编号/成绩编号) ( ::address-card:: 玩家名) (`+` ::music:: 模组)

多成绩模式。

这个模式下，会展示出玩家在谱面内的所有成绩。

:::: tabs#score

@tab ::gamepad:: 游戏模式

可选。参见：[字段/游戏模式](../../tips/field/mode.md)

@tab:active ::hashtag:: 谱面编号/成绩编号

可选。同上。

@tab ::address-card:: 玩家名

可选。参见：[字段/玩家名](../../tips/field/player.md)

@tab ::music:: 模组名

可选。参见：[字段/模组名](../../tips/field/mod.md)

::::

:::::

![谱面成绩面板](https://yumemuzi.s-ul.eu/yumunext/3avVFEM6)

```flow:preset

st=>start: 使用功能
op1=>operation: 输入 !s
op2=>operation: 通过群聊获取
op3=>operation: 通过最近成绩获取
op4=>operation: 按成绩编号获取
op5=>operation: 按谱面编号获取
op6=>operation: 官网获取
op7=>operation: 本地获取
cond1=>condition: 是否有参数?
cond2=>condition: 参数大于一亿?
cond3=>condition: 是否有群记录?
cond4=>condition: 是否有榜?
e=>end: 获取成功

st->op1->cond1
cond1(no)->cond3
cond1(yes)->cond2
cond3(yes)->op2->cond4
cond3(no,bottom)->op3->cond4
cond2(yes,left)->op4->cond4
cond2(no,bottom)->op5(bottom)->cond4
cond4(yes)->op6->e
cond4(no)->op7->e

```

::: warning 注意

如果想要查询其他玩家的成绩，并且对方的玩家名是==纯数字==，则必须在前面补足 ::hashtag:: 谱面编号参数，避免机器人误判。
示例：

* !s 86324 110，查询玩家 `110` 在谱面编号为 `86324` 里的成绩。
* !s 110，查询你自己在谱面编号为 `110` 里的成绩（不正确）。

为了消歧义，也可以直接通过 `qq=`、`uid=`、`@` 的方法来指定对方。参见：[字段/玩家名](../../tips/field/player.md)

!score 仍旧可能与其他机器人冲突，此时，如果玩家的绑定状态失效或者从未绑定，==Yumu 机器人不会回应你==。建议玩家只使用短命令 !s。

:::

::: tip 提示

2022 年，lazer 客户端成绩开始算 PP。从此时开始，玩家在含有榜的谱面内，留下的所有成绩都会被记录到 ppy 官网。

但在这之前，玩家在同一张谱面内留下的所有==模组相同==的成绩，只会保留==分数最高==的那一个。其他分数就遗失了，无法通过 !ss 查询到。

:::
