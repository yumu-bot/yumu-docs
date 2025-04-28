---
title: 玩家指令
icon: user
order: 5
date: 2025-03-17
category: 指令
tag:
  - 指令
  - osu!
  - osu
  - player
  - 玩家
sticky: false
star: false
footer: Yumu Docs - 玩家指令
copyright: false
---

# 玩家指令

## <HopeIcon icon="circle-info"/> 1 查询玩家信息 !yminfo (!i) {id=info}

可以查询玩家在不同模式上的游玩信息。

**使用方法**

!yminfo / i (**`:`游戏模式**) (**玩家名**) (**`#`天数**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：需要设定的默认游戏模式。请参阅：[游戏模式](./score.md#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：需要查询的玩家名称。留空默认查询自己。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@tadokoro kouji。
- **<HopeIcon icon="calendar-days"/> 天数**：查询距今数天前的数据，并和现在比较。
  - 即使不输入，也会默认和 1 天前的自己比较。

![玩家信息面板，指令：!i mrekk](https://yumemuzi.s-ul.eu/yumu/NdXXqppQ)

**内容解析**

::: details 内容解析

- **Mocha**：玩家所查询的 <HopeIcon icon="gamepad"/> 游戏模式旗下的吉祥物名称。
- **Recents**：玩家的最近三个成绩（包括失败）。
  - 左上角的 <HopeIcon icon="palette"/> 颜色和 <HopeIcon icon="hashtag"/> 数字表示谱面 <HopeIcon icon="star"/> 星数（SR）。
  - 右下角的白色 <HopeIcon icon="font"/> 字符串表示成绩的 <HopeIcon icon="link"/> 连击数和 <HopeIcon icon="bullseye"/> 准确率。
- **BPs**：玩家 BP 榜单上最高八个成绩。
  - 图片左上方的 <HopeIcon icon="circle"/> 圆圈表示 <HopeIcon icon="star"/> 星数（SR）。
  - 图片右上方的 <HopeIcon icon="circle"/> 圆圈表示 <HopeIcon icon="ranking-star"/> 评级（Ranking）。
- **Grades**：玩家总获得 <HopeIcon icon="ranking-star"/> 评级（Ranking）的名称、数量。
  - 下方的灰字指加了 HD、FL、FI <HopeIcon icon="music"/> 模组的成绩。
- **Ranking**：玩家排名情况。
  - 标题右侧是玩家该模式的 <HopeIcon icon="trophy"/> 世界排名，括号里的灰色字是玩家该模式的 <HopeIcon icon="trophy"/> 国家或地区排名。
  - 下方的 <HopeIcon icon="chart-line"/> 折线图反映了九十天内，玩家排名的变化情况。
  - 下方的 <HopeIcon icon="chart-column"/> 条形图反映了玩家 BP 成绩的增加情况。
- **User Data**：玩家统计数据。
  - 从左到右依次是已上架谱面总分、谱面总分、游玩次数、游玩时间，下方是游玩了多少张谱面、回放被他人查看次数、粉丝数、总点击数。
  - 下方的 <HopeIcon icon="chart-column"/> 条形图反映了这段时间内，玩家游玩次数的变化情况。

:::

::: tip 提示

使用 !uui 可以获取文字版消息（仅限自己）。

使用 !ic 可以获取明信片设计。允许使用玩家名、qq= 查询。

:::

## <HopeIcon icon="compass-drafting"/> 2 查询谱师信息 !ymimmapper (!im) {id=immapper}

可以查询玩家 <HopeIcon icon="map"/> 在制作谱面（作图，Beatmapping）方面的信息。

**使用方法**

!ymimmapper / im (**玩家名**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。

![谱师信息面板，指令：!im AIR](https://yumemuzi.s-ul.eu/yumu/40a0Nk8I)

**内容解析**

::: details 内容解析

- **左上角**：玩家的 <HopeIcon icon="circle-user"/> 头像、<HopeIcon icon="heading"/> 名称、玩家所属的 <HopeIcon icon="users"/> 组织。
  - Ranked：玩家制作的 <HopeIcon icon="angles-up"/> 上架谱面数量。
  - Pending：玩家制作的 <HopeIcon icon="circle-question"/> 待定谱面数量和当前玩家待定谱面的 <HopeIcon icon="file-circle-question"/> 总位置（不会多于此值）。
  - Guest：玩家制作的 <HopeIcon icon="user-pen"/> 客串（上架）谱面数量。
- **Most Popular Beatmap**：玩家制作的 <HopeIcon icon="user-check"/> 最受欢迎的前六张谱面。
- **Genre**：玩家制作的谱面内所有关于 <HopeIcon icon="guitar"/> 曲风的 <HopeIcon icon="tag"/> 标签数量。
- **Recent Activity**：玩家 <HopeIcon icon="hourglass"/> 最近在作图内的 <HopeIcon icon="person-walking"/> 活动。
- **Recent Host/Guest**：玩家 <HopeIcon icon="hourglass"/> 最近的上架谱面和 <HopeIcon icon="user-pen"/> 客串（上架）谱面。
- **右下角**：玩家的其他作图 <HopeIcon icon="chart-simple"/> 统计数据。
  - Favorite：谱面所有 <HopeIcon icon="heart-circle-plus"/> 收藏数。
  - Play Count：谱面所有 <HopeIcon icon="circle-play"/> 游玩数。
  - Comment：玩家 <HopeIcon icon="comment"/> 评论数。
  - Nominated：玩家 <HopeIcon icon="thumbs-up"/> 提名谱面的数量。
  - Loved：玩家选入 <HopeIcon icon="heart"/> 社区心选谱面的数量。
  - Graveyard：玩家制作的 <HopeIcon icon="cross"/> 坟场谱面。

:::

::: warning 注意

繁重功能，查询结果将会在 ==10-20== 秒内返回。如果 Bot 消息发送失败，请稍后再重试，切勿刷屏查询。

:::

## <HopeIcon icon="user-group"/> 3 查询好友列表 !ymfriend (!f) {id=friend}

可以查询玩家所添加（关注）的好友，也可以通过输入玩家名的方式来查询自己是否和对方互相关注（双向好友）。

**使用方法**

!ymfriend / f (**`:`筛选和排序**) (**数量或区间**|**玩家名**)

- **<HopeIcon icon="arrow-down-a-z"/> 筛选和排序**：结果的筛选和排序方式。
  - 可以输入的参数：表现分、准确率、游戏次数、游戏时间、总击打数、入坑时间、玩家编号、国家、姓名、在线状态、单向关注：
    - pp, acc, playcount, playtime, totalhits, time, uid, country, name, online, mutual。
    - 或者 p, a, pc, pt, h, t, u, c, o, m。
    - 如果留空（并且未输入数量或区间），默认随机排序。
  - 以上参数的默认值或默认排序方向：
    - online：真（布尔值）
      - 比如：输入 `!f:online` ，即可查询当前所有在线好友。
    - mutual：假（布尔值）
      - 比如：输入 `!f:mutual` ，即可查询所有单向好友。
    - time、uid、country、name：<HopeIcon icon="arrow-down-a-z"/> ==升序==（小、时间短或很久之前的在上）。
    - pp, acc, playcount, playtime, totalhits：<HopeIcon icon="arrow-up-a-z"/> ==降序==（大、时间长或最近发生的在上）。
  - 以上参数（除了布尔值）后加 `+` 号均视作 <HopeIcon icon="arrow-down-a-z"/> ==升序==，加 `-` 号均视作 <HopeIcon icon="arrow-up-a-z"/> ==降序==。
  - 如果你记不清某个参数的相反排序的方向，也可以直接在后面加一个==数字 2==。
- **<HopeIcon icon="ruler-combined"/> 数量或区间**：可以输入 1-100 内的单个值，也可以输入==差值小于 100== 的区间（|x-y|）。
  - 输入 1，就是查询自己的好友列表内第 1 个好友。（<HopeIcon icon="arrow-down-a-z"/> 按首字母升序排列）
  - 输入 111-120，就是查询自己好友列表内第 111 到 120 个好友。
  - 如果 <HopeIcon icon="circle-question"/> 不输入任何值，则默认随机查询 20 个好友。
- **<HopeIcon icon="address-card"/> 玩家名**：可以查询自己是否和对方互相关注（双向好友）。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@tadokoro kouji。
  - 如果你并未关注对方，此时，只有在对方也绑定了机器人之后，才可得知对方是否关注了你。

## <HopeIcon icon="link"/> 4 获取主页链接 !ymmutual (!mu) {id=mutual}

可以获取自己（或对方）的主页链接。

**使用方法**

!ymmutual / mu (**玩家名**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 不输入默认获取自己的主页链接。

## <HopeIcon icon="chart-simple"/> 5 查询玩家技巧 !ymskill (!k) {id=skill}

::: tip 提示

**SKill** 是 YumuBot 继 PP- 功能后新开发的一套评判系统！它通过分析玩家的最好成绩榜，来尽可能客观地评价玩家的（刷 PP 的）实力。

==目前仅开放 Mania 游戏模式的技巧查询！其他游戏模式正在制作中。敬请期待。==

参见：[**Skill 内容解析：Mania**](./map.md#mapminus)

:::

**使用方法**

!ymskill / k (**vs**) (**`:`游戏模式**) (**玩家名**)

- **<HopeIcon icon="crown"/> vs**：如果输入 **vs**，则可以比较自己与其他 <HopeIcon icon="address-card"/> 玩家的技巧。
  - 也可以输入短链 **KV** 来标记此人为你需要对比的对象，亦或是输入两个玩家（`:` 分号分隔），比较两人的技巧。
- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[游戏模式](./score.md#mode)
  - **目前这个参数无效。**
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 不输入默认查询自己的技巧信息。

::: warning 注意

繁重功能，查询结果将会在 ==10-20== 秒内返回。如果 Bot 消息发送失败，请稍后再重试，切勿刷屏查询。

:::

## <HopeIcon icon="chart-simple"/> 6 查询 PP- !ymppminus (!ppm) {id=ppminus}

::: tip 提示

**PPM 4** 已经正式上线！通过统计玩家附近水平的其他玩家，来尽可能客观地评价玩家的特点。

要查询旧版 PPM，请使用 !pl。

:::

**PP-** 是 YumuBot 参考了 [PP+](https://syrin.me/pp+/) 等系统，开发的一套特殊评价系统，来从不同角度量化玩家的实力。

**使用方法**

!ymppminus / pm (**vs**) (**`:`游戏模式**) (**玩家名**)

- **<HopeIcon icon="crown"/> vs**：如果输入 **vs**，则可以比较自己与其他 <HopeIcon icon="address-card"/> 玩家的 PPM。
  - 也可以输入短链 **PV** 来标记此人为你需要对比的对象，亦或是输入两个玩家（`:` 分号分隔），比较两人的 PPM。
- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[游戏模式](./score.md#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 不输入默认查询自己的 PP- 信息。

![PPM4 面板，指令：!pm siyuyuko](https://yumemuzi.s-ul.eu/yumu/fQEqgpcn)

**内容解析**


::: details 数值解析

PPM 4 统计了玩家附近（+- 500 pp，最高 +- 3000 pp）至少 50 名玩家的 PPM 数据，并按正态分布计算玩家的相对水平。

在标准正态分布中，μ 是正态分布的数学期望（平均值），δ 是正态分布的标准差（方差的开方）。

PPM 4 根据离散数据，来近似推算这部分玩家的正态分布，并将玩家的 PPM 代入进去，即可得到玩家在正态分布密度函数上的位置，从而赋分。

| 评价 | 赋分 | 参数所处的范围 | 超过玩家 |
| :-: | :-: | :-: | :-: |
| EX | 100.8+ | x >= μ + 3δ 或者 x = max(x1, x2...) | 100% |
| SS | 100 - 100.8 | μ + 2δ <= x < μ + 3δ 或者 x < max(x1, x2...) | 97-99% |
| S | 90 - 100 | μ + δ <= x < μ + 2δ | 84-97% |
| A | 80 - 90 | μ <= x < μ + δ | 50-84% |
| B | 70 - 80 | μ - δ <= x < μ | 34-50% |
| C | 60 - 70 | μ - 2δ <= x < μ - δ | 15-34% |
| D | 0 - 60 | 0 <= x < μ - 2δ | 2-15% |

:::

::: details 内容解析

| 指标 | 名称 | 解析 |
| :-: | :-: | --- |
| **ACC** | 准度 | 相比之下更严格的 <HopeIcon icon="bullseye"/> 准确率评价。越高，说明玩家的抓判定能力相较于同水平的玩家更高。 |
| **PTT** | 潜力 | 与玩家的最好成绩 <HopeIcon icon="arrow-up-right-dots"/> 密度有关。越高，说明玩家的最好成绩榜更能塞下更多成绩，从而提升表现分。 |
| **STA** | 耐力 | 与玩家的每成绩均时长 <HopeIcon icon="clock"/> 以及最好成绩均时长 <HopeIcon icon="clock"/> 相关。越高，说明玩家相较于同水平的玩家，更喜欢打长图。 |
| **STB**<br /> **PRE** | 稳定 <br /> 彩率 | 与玩家的全连成绩占比或 <HopeIcon icon="barcode"/> 彩率，以及最好成绩 <HopeIcon icon="ranking-star"/> 评级有关。越高，说明玩家全连图的能力/抓彩判定能力相较于同水平的玩家更高。 |
| **EFT** | 肝力 | 与玩家的 <HopeIcon icon="person-running"/> 游玩次数和总击打次数有关。越高，说明玩家相较于同水平的玩家，投入了更多时间。 |
| **STH** | 强度 | 与玩家的 <HopeIcon icon="arrow-up-right-dots"/> 每秒平均击打次数，以及前 10 个最好成绩与时长乘积相关。越高，说明玩家越能应付超出本分段水平的谱面。反之则更喜欢玩短图和简单的图。 |
|  |  |  |
| **OVA** | 综合 | 前 6 个值的加权和。一般来说，**80** 分即意味着玩家达到了分段平均水平。 |
| **SAN** | 理智 | 一般为 **100**。如果低于 100，则可能代表玩家的账号不正常，或玩家有其他类似游戏的经验。 |

:::

## <HopeIcon icon="people-group"/> 7 获取战队信息 !ymteam (!tm) {id=team}

可以查询玩家所属战队的信息。

**使用方法**

!ymteam / tm (**玩家名**) (`#`**战队编号**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 不输入默认查询自己所属的战队信息。
- **<HopeIcon icon="address-card"/> 战队编号**：战队的编号。
  - 如果查询不到对应的战队编号，会转而将其视为玩家名来查询该玩家所属的战队。

![战队信息面板，指令：!team #1](https://yumemuzi.s-ul.eu/yumu/bl3yU8gB)

::: tip 提示

预览版功能。功能目前尚未完善，如果有 bug，请及时反馈。

:::

## <HopeIcon icon="medal"/> 8 获取主页奖牌 !ymbadge (!bd) {id=badge}

可以查询玩家目前拥有的全部主页奖牌。

**使用方法**

!ymbadge / bd (**玩家名**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 不输入默认展示自己的主页奖牌。

![主页奖牌面板，指令：!bd chocomint](https://yumemuzi.s-ul.eu/yumu/ZTbK1eYN)

## <HopeIcon icon="people-carry-box"/> 9 获取客串谱师 !ymguestdiff (!gd) {id=guestdiff}

可以查询玩家目前赠送过客串谱面，以及收到过客串谱面的谱师。

**使用方法**

!ymguestdiff / gd (**玩家名**) (**`#`页数**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 不输入默认展示自己的客串难度关系。
- **<HopeIcon icon="file"/> 页数**：当前所在的页面数。
  - 一页 50 个结果。

![客串谱师面板，指令：!gd wIntEr7z](https://yumemuzi.s-ul.eu/yumu/arCbhz6f)

## <HopeIcon icon="id-badge"/> 10 获取玩家 ID !ymgetid (!gi) {id=getid}

**使用方法**

!ymgetid / gi [**玩家名**...]

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 至少输入一个玩家。
  - 不同玩家名之间，需要使用逗号或冒号分隔开。

::: warning 注意

为防止滥用，只有群聊的群主或管理员可以使用此功能。

:::

## <HopeIcon icon="users"/> 11 获取玩家名称 !ymgetname (!gn) {id=getname}

**使用方法**

!ymgetid / gi [**玩家 ID**...]

- **<HopeIcon icon="address-book"/> 玩家 ID**：同上。
  - 至少输入一个玩家。
  - 不同玩家 ID 之间，需要使用逗号或冒号分隔开。

::: warning 注意

为防止滥用，只有群聊的群主或管理员可以使用此功能。

:::

## <HopeIcon icon="chart-simple"/> 12 查询 PP+ !ymppplus (!ppp) {id=ppplus}

~~PP+ 的官网 [Syrin.me](https://syrin.me/pp+/) 已停止维护，功能暂不可用。但是 Syrin 把他移植进了 Lazer 里！并且可以通过 Docker 获取运行。~~

**使用方法**

!ymppplus / pp (**vs**) (**`:`游戏模式**) (**玩家名**)

- **<HopeIcon icon="crown"/> vs**：如果输入 **vs**，则返回自己的 PP+ 数值与其他 <HopeIcon icon="address-card"/> 玩家的对比图。
  - 也可以输入短链 **PX** 来标记此人为你需要对比的对象，亦或是输入两个人互相对比。
- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[游戏模式](./score.md#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 不输入默认查询自己的 PP+ 信息。

**内容解析**

::: details 内容解析

在玩家 PP+ 内，能够看到 6 项参数的一个评级。这是 C8N16O32 设计的新人进阶群指数表（2.6 本地化）系统。

根据 PP+ 的参数，玩家分别可以获得以下三种评级：

- 综合指数：0 - 100%
- 进阶指数：罗马数字 I - X（1-10）
- EX

评级越接近 EX，说明玩家的这项指标越厉害。

:::
