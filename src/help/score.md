---
title: 成绩指令
icon: gamepad
order: 4
date: 2023-11-01
category:
  - 指令
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

![成绩指令列表](https://yumemuzi.s-ul.eu/yumu/Kx38Aw86)

## <HopeIcon icon="list"/> 1 修改默认游戏模式 !ymmode (!sm) {id=mode}

**使用方法**

!ymmode / !sm [**游戏模式**]

- **<HopeIcon icon="gamepad"/> 游戏模式**：必填，需要设定的默认 <HopeIcon icon="gamepad"/> 游戏模式。可输入：
  - osu / o / 0：<HopeIcon icon="circle-dot"/> 主模式，osu!standard，osu!std
  - taiko / t / 1：<HopeIcon icon="drum"/> 太鼓模式，osu!taiko
  - catch / fruits / c / 2：<HopeIcon icon="apple-whole"/> 接水果模式，osu!catch
  - mania / m / 3：<HopeIcon icon="keyboard"/> 下落模式，键盘模式，osu!mania

::: warning 注意

强烈建议除了主模式（osu!standard）之外的玩家，在绑定的时候就设定好自己的默认 <HopeIcon icon="gamepad"/> 游戏模式！这能免去很多麻烦。

:::

::: tip 提示

如果==事先设定了==默认 <HopeIcon icon="gamepad"/> 游戏模式，那么在之后，如果玩家想要使用需要输入游戏模式参数的功能，不需要通过输入 `:` + <HopeIcon icon="gamepad"/> 游戏模式的方式来设定参数。Bot 会==自动为您补齐==。

同样地，在这里设定的默认 <HopeIcon icon="gamepad"/> 游戏模式，可以与玩家的主页游戏模式，或者玩家在其他 Bot 下设定的默认游戏模式不同。 这在使用多种 Bot 查询成绩的时候尤其有效：比如仅在本 Bot 下查询接水果成绩，在其他 Bot 下查询主模式成绩等。

:::

## <HopeIcon icon="square-check"/> 2 查询最近通过成绩 !ympass (!p) {id=pass}

这个功能只会查询到有效（通过）的成绩。

**使用方法**

!ympass / p (**s**) (**`:`游戏模式**) (**玩家名**) (**`#`偏移量或区间**)

- **<HopeIcon icon="s"/> 多成绩**：如果这里添加了字母 `s`，Bot 会识别为多成绩模式。
  - 如果不输入任何参数，也能获取最近 20 个通过成绩（等价于 !p 1-20）。
  - 此时，只需要输入偏移量。但是如果输入的是区间，那么加或不加 `s` 没什么区别（==!ps 100 = !p 1-100 = !ps 1-100==）。
  - 如果使用了 !ympass 或者 !pass，则后面需要加 `es`（毕竟英文复数就是这样），!p 后面只需要加 `s`。
- **<HopeIcon icon="gamepad"/> 游戏模式**：需要设定的默认游戏模式。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：需要查询的玩家名称。留空默认查询自己。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=123456789。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@user。
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从新到老排序中的第几个或是某几个成绩。
  - 可以输入 1~100 之间的整数，输入 2 就是查询最近成绩之前的那一个成绩。
  - 可以输入区间，格式为：最小数`-`最大数，如 1-20。

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

使用 !uup 可以获取文字版消息。

使用 !pc 可以获取明信片设计。允许使用玩家名、qq= 查询。

:::

## <HopeIcon icon="square-xmark"/> 3 查询最近成绩 !ymrecent (!r) {id=recent}

这个功能可以查询到失败的成绩。

**使用方法**

!ymrecent / r (**s**) (**`:`游戏模式**) (**玩家名**) (**`#`偏移量或区间**)

- **<HopeIcon icon="s"/> 多成绩**：如果这里添加了字母 `s`，Bot 会识别为多成绩模式。
  - 如果不输入任何参数，也能获取最近 20 个成绩（等价于 !r 1-20）。
  - 此时，只需要输入偏移量。但是如果输入的是区间，那么加或不加 `s` 没什么区别（==!rs 100 = !r 1-100 = !rs 1-100==）。
- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=123456789。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@user。
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：同上。

::: warning 注意

为了与其他 Bot 的绑定指令区分，!re 是无法唤起 YumuBot 的。

!recent 仍旧可能与其他 Bot 冲突，此时，如果玩家掉绑或者从未绑定，==Bot 不会回应你==。建议玩家只使用短命令 !r。

:::

::: tip 提示

使用 !uur 可以获取文字版消息。

使用 !rc 可以获取明信片设计。允许使用玩家名、qq= 查询。

:::

## <HopeIcon icon="square-xmark"/> 4 查询谱面成绩 !ymscore (!s) {id=score}

这个功能可以查询到上榜（谱面含有在线榜单，并且玩家游玩过）的成绩。

**使用方法**

!ymscore / s (**`:`游戏模式**) [**谱面编号**] (**玩家名**) (**`+`模组名称**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要查询的谱面编号 (BID)。
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=123456789。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@user。
- **<HopeIcon icon="music"/> 模组名称**：<HopeIcon icon="music"/> 模组的简称，通常为两位大写字母组成。可以无空格地输入多个 <HopeIcon icon="music"/> 模组。

::: details 可输入的 <HopeIcon icon="music"/> 模组名称

EZ、NF、HT、HR、SD、PF、DT、NC、HD、FI、FL、MR

:::

::: warning 注意

!score 仍旧可能与其他 Bot 冲突，此时，如果玩家掉绑或者从未绑定，==Bot 不会回应你==。建议玩家只使用短命令 !s。

:::

## <HopeIcon icon="angles-up"/> 5 查询最好成绩 !ymbestperformance (!b) {id=bestperformance}

这个功能可以查询到玩家最好成绩榜（BP）上的成绩。

**使用方法**

!ymbp / b (**s**) (**`:`游戏模式**) (**玩家名**) (**`#`偏移量或区间**)

- **<HopeIcon icon="s"/> 多成绩**：如果这里添加了字母 `s`，Bot 会识别为多成绩模式。
  - 如果不输入任何参数，也能获取前 20 个最好成绩（等价于 !b 1-20）。
  - 此时，只需要输入偏移量。但是如果输入的是区间，那么加或不加 `s` 没什么区别（==!bs 100 = !b 1-100 = !bs 1-100==）。
- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=123456789。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@user。
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从头到尾排序中的第几个或是某几个成绩。
  - 可以输入 1~100 之间的整数，输入 2 就是查询第二个最好成绩。
  - 可以输入区间，格式为：最小数`-`最大数，如 1-20。

::: warning 注意

!bp 仍旧可能与其他 Bot 冲突，此时，如果玩家掉绑或者从未绑定，==Bot 不会回应你==。建议玩家只使用短命令 !b。

:::

::: tip 提示

如果不输入玩家名称（查询自己的成绩），那么偏移量前的 `#` 号可以忽略。

如果查询的玩家名称末尾含有**空格**和小于 100 的**纯数字**的玩家，如 **osuplayer 12**，建议在其后添加偏移参数 (**`#...`**)，便于区分。

:::

## <HopeIcon icon="angles-up"/> 6 查询今日最好成绩 !ymtodaybp (!t) {id=todaybp}

这个功能可以查询到玩家今天（或直到距今天多少天前）最好成绩榜（BP）上新增的成绩。

**使用方法**

!ymtodaybp / t (**`:`游戏模式**) (**`*`玩家名**) (**`#`天数**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=123456789。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@user。
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

## <HopeIcon icon="chart-pie"/> 7 分析最好成绩 !ymbpanalysis (!ba) {id=bpanalysis}

这个功能可以分析玩家的最好成绩榜，从而判断玩家目前的状态，以及玩家的偏好或技巧。

**使用方法**

!ymbpa / ba (**`:`游戏模式**) (**玩家名**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[<HopeIcon icon="gamepad"/> 游戏模式](#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=123456789。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@user。

![BA 面板](https://yumemuzi.s-ul.eu/yumu/8YT8nqlz)

**内容解析**

::: details 内容解析

- **Top 5 BPs**：玩家 BP <HopeIcon icon="arrow-up"/> 前五位。
- **Last 5 BPs**：玩家 BP <HopeIcon icon="arrow-down"/> 末五位。
- **Mods**：玩家 BP 内 <HopeIcon icon="music"/> 模组的分布情况。
  - 靠中间的 <HopeIcon icon="chart-pie"/> 饼图下方依次是各个 <HopeIcon icon="music"/> 模组的名称、<HopeIcon icon="hashtag"/> 数量（灰色字）以及所占 <HopeIcon icon="medal"/> PP（加权后）。这个 <HopeIcon icon="medal"/> PP 越高，说明玩家在这个 <HopeIcon icon="music"/> 模组上越熟练。
- **BP Distribution**：BP 分布情况。
  - 标题右侧是玩家的该模式 <HopeIcon icon="medal"/> 总 PP，括号里的灰色字是 <HopeIcon icon="map"/> 谱面 PP + <HopeIcon icon="sack-dollar"/> 奖励 PP（Bonus PP）。灰色字下方是该 <HopeIcon icon="gamepad"/> 游戏模式。
  - 下方的 <HopeIcon icon="chart-line"/> 折线图反映了玩家 BP 成绩的 <HopeIcon icon="medal"/> PP 分布。
  - 下方的 <HopeIcon icon="chart-column"/> 条形图反映了玩家 BP 成绩的 <HopeIcon icon="clock"/> 时长（高度）以及 <HopeIcon icon="ranking-star"/> 评级（颜色）分布。
- **Length、Combo、Star Rating**：分析玩家 BP 内 <HopeIcon icon="clock"/> 时长、<HopeIcon icon="link"/> 连击数、<HopeIcon icon="star"/> 星数的分布情况。
  - 带有 <HopeIcon icon="angles-up"/> 图标的指对应值的最大值。相应地，<HopeIcon icon="angles-down"/> 指最小值， <HopeIcon icon="minus"/> 指中位数（不是平均数！）。
  - 每个图标最下面的 <HopeIcon icon="image"/> 图片即代表了对应的成绩。
  - 图片 <HopeIcon icon="arrow-left"/> 左上方的 <HopeIcon icon="circle"/> 圆圈表示 <HopeIcon icon="star"/> 星数（SR）。
  - 图片 <HopeIcon icon="arrow-right"/> 右上方的 <HopeIcon icon="circle"/> 圆圈表示 <HopeIcon icon="ranking-star"/> 评级（Ranking）。
- **Favorite Mappers**：最喜爱的 <HopeIcon icon="user"/> 谱师分布情况。
  - 标题右侧指明了玩家的 BP 上，<HopeIcon icon="user"/> 谱师数量总计。
  - 谱师名称下方依次是各个谱师所制作的谱面的 <HopeIcon icon="hashtag"/> 成绩数量，以及所占 <HopeIcon icon="medal"/> PP（加权后）。这个 PP 越高，说明玩家越能刷这个谱师制作的谱面。
- **Ranks**：玩家 BP 内 <HopeIcon icon="ranking-star"/> 评级（Ranking）的名称、数量以及所占 <HopeIcon icon="medal"/> PP（加权后，灰字）。

:::

::: warning 注意

繁重功能，查询结果将会在 ==10-20== 秒内返回。如果 Bot 消息发送失败，请稍后再重试，切勿刷屏查询。

:::

::: warning 注意

!bpa 仍旧可能与其他 Bot 冲突，此时，如果玩家掉绑或者从未绑定，==Bot 不会回应你==。建议玩家只使用短命令 !ba。

:::

::: tip 提示

使用 !uuba / !uba (-i) 可以获取文字版消息。

并且，据说输入某个老师和学生深入交流的游戏英文名，也可以调出此功能哦？

:::
