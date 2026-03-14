---
title: 成绩指令
icon: gamepad
order: 4
date: 2026-03-02
category: 指令
tag:
  - 指令
  - osu!
  - osu
  - score
  - 成绩
sticky: false
star: false
footer: Yumu Docs - 成绩指令
copyright: false
---

# 成绩指令

## <HopeIcon icon="list"/> 1 绑定游戏模式 !ymmode (!sm) {id=mode}

如果玩家==绑定==了 <HopeIcon icon="gamepad"/> 游戏模式，那么在之后，玩家想要使用包含游戏模式参数的功能时，不需要通过输入 `:` + <HopeIcon icon="gamepad"/> 游戏模式的方式来设定参数。机器人会==自动为您补齐==。

**使用方法**

!ymmode / !sm / !mo (**游戏模式**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：选填，需要绑定的 <HopeIcon icon="gamepad"/> 游戏模式。可输入：
  - osu / o / 0：<HopeIcon icon="circle-dot"/> 主模式，osu!standard，osu!std
  - taiko / t / 1：<HopeIcon icon="drum"/> 太鼓模式，osu!taiko
  - catch / fruits / c / 2：<HopeIcon icon="apple-whole"/> 接水果模式，osu!catch
  - mania / m / 3：<HopeIcon icon="keyboard"/> 下落模式，键盘模式，osu!mania
  - 如果不输入，则会移除玩家绑定的游戏模式。此时其他功能会尝试获取玩家主页的默认游戏模式。

::: tip 提示

在这里绑定的 <HopeIcon icon="gamepad"/> 游戏模式，可以与玩家主页的默认游戏模式，或者玩家在其他机器人内绑定的游戏模式不同。

这在同时使用多种机器人查询成绩时尤其有用。比如仅在本机器人下查询接水果模式成绩，在其他机器人下查询主模式成绩等。

但是，这个绑定的游戏模式会被以下群聊游戏模式所覆盖（如果有）。如果在部分限定玩家讨论游戏模式的群聊中，您发现自己的绑定模式未生效，则可能是因为这个群聊已经设定了群聊游戏模式。

:::


## <HopeIcon icon="list-check"/> 2 绑定群聊游戏模式 !ymgroupmode (!gm) {id=groupmode}

如果群聊==绑定==了 <HopeIcon icon="gamepad"/> 游戏模式，那么在之后，玩家想要使用包含游戏模式参数的功能时，不需要通过输入 `:` + <HopeIcon icon="gamepad"/> 游戏模式的方式来设定参数。机器人会==自动为您补齐==。

**使用方法**

!ymsetgroupmode / !gm (**游戏模式**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：选填，需要绑定的 <HopeIcon icon="gamepad"/> 游戏模式。同上。
  - 如果不输入，则会移除群聊绑定的游戏模式。此时其他功能会尝试获取玩家绑定的游戏模式，或是玩家主页的默认游戏模式。

::: warning 注意

为防止滥用，只有群聊的群主或管理员可以使用此功能。

::: 

::: warning 注意

群聊绑定的游戏模式，会优先于玩家绑定的游戏模式生效。所以这个功能，应该仅用于需要控制玩家讨论游戏模式的群聊中。

游戏模式的获取先后顺序：

==群聊游戏模式 > 玩家绑定的游戏模式 > 玩家主页上的默认游戏模式 (通常是 osu!standard)==

比如，一个玩家的主页游戏模式为 osu!standard，并且自己绑定的游戏模式为 osu!taiko。那么他在一个设定默认模式为 osu!mania 的群聊内查询时，会返回以下结果：

- 不带游戏模式参数（`:`）查询：会返回 osu!mania 模式内的结果，无视玩家自己绑定的游戏模式。
- 带游戏模式参数（`:`）查询：会返回这个参数对应的模式内的结果。

:::

## <HopeIcon icon="square-check"/> 3 查询最近通过成绩 !ympass (!p) {id=pass}

这个功能只会查询到有效（通过）的成绩。

**使用方法**

!ympass / p (**s**) (**`:`游戏模式**) (**玩家名**) (**查询条件**) (**`#`偏移量或区间**)

- **<HopeIcon icon="s"/> 多成绩**：如果这里添加了字母 `s`，Bot 会识别为多成绩模式。
  - 如果不输入任何参数，也能获取最近 20 个通过成绩（等价于 !p 1-20）。
  - 此时，只需要输入偏移量。但是如果输入的是区间，那么加或不加 `s` 没什么区别（==!ps 100 = !p 1-100 = !ps 1-100==）。
  - 如果使用了 !ympass 或者 !pass，则后面需要加 `es`（毕竟英文复数就是这样），!p 后面只需要加 `s`。
- **<HopeIcon icon="gamepad"/> 游戏模式**：需要设定的默认游戏模式。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：需要查询的玩家名称。留空默认查询自己。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。
- **<HopeIcon icon="filter"/> 查询条件**：请参阅：[<HopeIcon icon="filter"/> 查询条件·成绩查询器](./filter.md#score)
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从新到老排序中的第几个或是某几个成绩。
  - 可以输入 1~100 之间的整数，输入 2，就是查询最近的通过成绩的前一个通过成绩。
  - 可以输入区间，格式为：最小数`-`最大数，如 1-20。
  - 如果输入 0，则默认为 1~100。

::: warning 注意

为了与其他 Bot 的绑定指令区分，!pr 是无法唤起 YumuBot 的。

:::

::: tip 提示

如果不输入玩家名称（查询自己的成绩），那么偏移量前的 `#` 号可以忽略。

如果查询的玩家名称末尾含有**空格**和小于 100 的**纯数字**的玩家，如 **osuplayer 12**，建议在其后添加偏移参数 (**`#...`**)，便于区分。

示例：

* !p osuplayer 12，查询玩家 osuplayer 往前数第十二个通过成绩。
* !p osuplayer 12 #12，查询玩家 osuplayer 12 往前数第十二个通过成绩。

大多数可以忽略 `#` 号的参数都有这种性质。请用户注意，尽量避免获取到不想要的结果。

:::

::: tip 提示

使用 !pw 可以获取适合视频封面使用的设计。

:::

::: tip 提示

使用 !uup 可以获取文字版消息。

使用 !pc 可以获取明信片设计。允许使用玩家名、qq= 查询。

:::

## <HopeIcon icon="square-xmark"/> 4 查询最近成绩 !ymrecent (!r) {id=recent}

这个功能同上，但可以查询到失败的成绩。

**使用方法**

!ymrecent / r (**s**) (**`:`游戏模式**) (**玩家名**) (**查询条件**) (**`#`偏移量或区间**)

- **<HopeIcon icon="s"/> 多成绩**：如果这里添加了字母 `s`，Bot 会识别为多成绩模式。
  - 如果不输入任何参数，也能获取最近 20 个成绩（等价于 !r 1-20）。
  - 此时，只需要输入偏移量。但是如果输入的是区间，那么加或不加 `s` 没什么区别（==!rs 100 = !r 1-100 = !rs 1-100==）。
- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。
- **<HopeIcon icon="filter"/> 查询条件**：请参阅：[<HopeIcon icon="filter"/> 查询条件·成绩查询器](./filter.md#score)
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从新到老排序中的第几个或是某几个成绩。
  - 可以输入 1~100 之间的整数，输入 2，就是查询最近成绩的前一个成绩。
  - 可以输入区间，格式为：最小数`-`最大数，如 1-20。
  - 如果输入 0，则默认为 1~100。

::: warning 注意

为了与其他 Bot 的绑定指令区分，!re 是无法唤起 YumuBot 的。

!recent 仍旧可能与其他 Bot 冲突，此时，如果玩家的绑定状态失效或者从未绑定，==Bot 不会回应你==。建议玩家只使用短命令 !r。

:::

::: tip 提示

使用 !rw 可以获取适合视频封面使用的设计。

使用 !uur 可以获取文字版消息。

使用 !rc 可以获取明信片设计。

:::

## <HopeIcon icon="pager"/> 5 查询谱面成绩 !ymscore (!s) {id=score}

这个功能可以查询到谱面上任何成绩（只要有）。

**使用方法**

!ymscore / s (**s**) (**`:`游戏模式**) (**谱面编号或成绩编号**) (**玩家名**) (**`+`模组名称**)

- **<HopeIcon icon="s"/> 多成绩**：如果这里添加了字母 `s`，Bot 会识别为多成绩模式。
  - 默认获取谱面所有纳入统计的成绩。
- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="hashtag"/> 谱面编号或成绩编号**：需要查询的谱面编号 (BID) 或成绩编号 (SCORE_ID)。
  - 如果不输入编号，则优先获取之前查询的历史记录，从而获取到玩家在之前查询谱面内的 pp 最高成绩。
    - 如果没有之前查询的历史记录，则默认获取玩家最近成绩的谱面，从而获取到玩家在谱面内的 pp 最高成绩（类似于 !r)。
  - 如果输入成绩编号，则其他参数均无效（因为一个成绩编号只对应一个确定的成绩）。
    - 默认将编号 100000000 及以上视为成绩编号，而 100000000 以下的会被视为谱面编号。
    - 编号 100000000 的成绩是一个 2013 年的成绩。因此，对于在这之前的成绩，暂时无法通过成绩编号查询。
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。
- **<HopeIcon icon="music"/> 模组名称**：<HopeIcon icon="music"/> 模组的简称，通常为两位大写字母组成。可以无空格地输入多个 <HopeIcon icon="music"/> 模组。
  - 可输入的 <HopeIcon icon="music"/> 模组名称：EZ、NF、HT、HR、SD、PF、DT、NC、HD、FI、FL、MR

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

::: tip 提示

!ss 提供的多成绩，仅限于：

- Lazer 版本从开始统计 PP 以来的所有成绩
- Stable 版本在 Lazer 统计成绩之前，**不同模组**内的最好成绩
- Stable 版本在 Lazer 统计成绩之后的**所有**成绩

由于 Stable 统计特性，在 Stable 版本在 Lazer 统计成绩之前（大约 2022 年）所有**相同模组**成绩，只会保留**分数最高**的那个。

:::

::: warning 注意

!score 仍旧可能与其他 Bot 冲突，此时，如果玩家的绑定状态失效或者从未绑定，==Bot 不会回应你==。建议玩家只使用短命令 !s。

:::

## <HopeIcon icon="rainbow"/> 6 查询最好成绩 !ymbestperformance (!b) {id=bestperformance}

这个功能可以查询到玩家最好成绩榜（BP）上的成绩。

**使用方法**

!ymbp / b (**s**) (**`:`游戏模式**) (**玩家名**) (**查询条件**) (**`#`偏移量或区间**)

- **<HopeIcon icon="s"/> 多成绩**：如果这里添加了字母 `s`，Bot 会识别为多成绩模式。
  - 如果不输入任何参数，也能获取前 20 个最好成绩（等价于 !b 1-20）。
  - 此时，只需要输入偏移量。但是如果输入的是区间，那么加或不加 `s` 没什么区别（==!bs 100 = !b 1-100 = !bs 1-100==）。
- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。
- **<HopeIcon icon="filter"/> 查询条件**：请参阅：[<HopeIcon icon="filter"/> 查询条件·成绩查询器](./filter.md#score)
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从头到尾排序中的第几个或是某几个成绩。
  - 可以输入 1~200 之间的整数，输入 102 就是查询第 102 个最好成绩。
  - 可以输入区间，格式为：最小数`-`最大数，如 1-20。
  - 如果输入 0，则默认为 1~100。

::: warning 注意

!bp 仍旧可能与其他 Bot 冲突，此时，如果玩家的绑定状态失效或者从未绑定，==Bot 不会回应你==。建议玩家只使用短命令 !b。

:::

::: tip 提示

使用 !bw 可以获取适合视频封面使用的设计。

:::

::: tip 提示

如果不输入玩家名称（查询自己的成绩），那么偏移量前的 `#` 号可以忽略。

如果查询的玩家名称末尾含有**空格**和小于 100 的**纯数字**的玩家，如 **osuplayer 12**，建议在其后添加偏移参数 (**`#...`**)，便于区分。

:::

## <HopeIcon icon="podcast"/> 7 查询今日最好成绩 !ymtodaybp (!t) {id=todaybp}

这个功能可以查询到玩家今天（或直到距今天多少天前）最好成绩榜（BP）上新增的成绩。

**使用方法**

!ymtodaybp / t (**`:`游戏模式**) (**玩家名**) (**`#`天数**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。
- **<HopeIcon icon="calendar-days"/> 天数**：查询距今多少天内，玩家新增的最好成绩。
  - 可以输入 1~999 之间的整数。输入 30 就是距今 30 天内。

::: warning 注意

!todaybp 仍旧可能与其他 Bot 冲突。建议玩家只使用短命令 !t。

:::

::: tip 提示

如果不输入玩家名称（查询自己的信息），则天数前的 `#` 号可以忽略。

如果查询的其他玩家名称含有以下容易引起混淆的条件时，建议在其后添加天数参数 (**`#...`**)，便于区分。

- 名称为纯数字，且值小于 999 的玩家。如 **970**。
- 名称末尾含有**空格**和小于 999 的**纯数字**的玩家，如 **osuplayer 123**。

示例：

- !t 970：查询自己 970 天内新增的最好成绩。
- !t 970 #1 查询一个叫 970 的玩家，在今天内新增的最好成绩。

:::



## <HopeIcon icon="clock"/> 8 查询最近较好成绩 !ymrecentbest (!rb) {id=recentbest}

这个功能可以从数据库中获取玩家 7 天之内表现较好的成绩。

这个功能和其他获取最好成绩的不一样：它的数据来源是 Bot 数据库。因此可以获取到坟场谱面或者其他不含榜单谱面上的成绩。

**使用方法**

!ymrecentbest / rb (**`:`游戏模式**) (**玩家名**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。

## <HopeIcon icon="chart-pie"/> 9 分析最好成绩 !ymbpanalysis (!ba) {id=bpanalysis}

这个功能可以分析玩家的最好成绩榜，从而判断玩家目前的状态，以及玩家的偏好或技巧。

**使用方法**

!ymbpanalysis / ba (**`:`游戏模式**) (**玩家名**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。

![分析最好成绩面板，指令：!ba:2 nene sakura](https://yumemuzi.s-ul.eu/yumu/4ZAavzi5)

**内容解析**

::: details 内容解析

- Main Statistics
  - 这里是玩家最好成绩榜上的某些关键信息。
  - BPM、LEN、CB、SR 即曲速（BPM）、谱面长度（Length）、连击（Combo）、星数（Star Rating）。
  - 横线左侧和右侧的数据是最小值和最大值。方括号内的数据是中间值（中位数）。
  - 右侧的编号是这些值所对应的 BP 编号。
  - 下方的条则展示了这些值所处的范围（相比于常规数据来说）
- Ranks
  - 这个饼图展示了玩家最好成绩榜上的评级（Rank）分布。
  - 下方的数字（如 091）指示了这个评级的数量。右上角的 PP 则为这个评级所覆盖的所有表现分之和。
- Mods
  - 这个饼图展示了玩家最好成绩榜上的模组（Mod）分布。
  - 下方的数字（如 041）指示了这个模组的数量。右上角的 PP 则为这个模组所覆盖的所有表现分之和（复合模组会多次计算）。
- PP
  - 这个折线图会展示所有玩家最好成绩的表现分分布。
- Time Distribution
  - 这个条形图和点图会展示所有玩家最好成绩在一天之内的获取时间分布（UTC +8）。
  - 点越密集或越高，则表示玩家越容易在这个时间段内获得好的表现。
- Bests
  - 即最好的 6 个成绩。
- Bests Distribution
  - 这两个条形图会展示前 100 个玩家最好成绩的分布。
  - 上方的条形图纵轴是星数，颜色是评级。
  - 下方的条形图纵轴是时长，颜色是模组。
- Favorite Mappers
  - 这里展示了玩家最喜爱（或最容易获取表现分）的谱师。

:::

::: tip 提示

使用 !al (!bal) 可以获取上一个版本的设计。

使用 !ua (!uai) 可以获取文字版消息。

并且，据说输入某个老师和学生深入交流的游戏英文名，也可以调出此功能哦？

:::

## <HopeIcon icon="hammer"/> 10 修补最好成绩 !ymbpfix (!bf) {id=bpfix}

这个功能可以分析玩家的最好成绩榜，抽出玩家的不完美 (choke) 成绩，并预测当这些成绩被修补成全连 (full combo) 后，玩家能获得多少表现分。

**使用方法**

!ymbpfix / bf (**`:`游戏模式**) (**玩家名**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。

## <HopeIcon icon="crown"/> 11 查询顶流成绩 !ymtopplays (!tp) {id=topplays}

这个功能可以查询全服 pp 最高的成绩。

**使用方法**

!ymtopplays / tp (**`:`游戏模式**) (`#`**页码**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
  - 不输入默认查询 osu!standard 模式。
- **<HopeIcon icon="file"/> 页码**：当前所在的页面编号。
  - 不输入默认第一页。一页 50 个结果。最大可输入 20 页（前 1000）

::: tip 提示

预览版功能。功能目前尚不完善，如果出现了问题，请及时反馈。

:::