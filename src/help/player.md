---
title: 玩家指令
icon: user
order: 5
date: 2023-11-01
category:
  - 指令
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

![玩家指令列表](https://yumemuzi.s-ul.eu/yumu/FUgH2LL9)

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

![Info 面板](https://yumemuzi.s-ul.eu/yumu/oapdIlKJ)

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

![IMapper 面板](https://yumemuzi.s-ul.eu/yumu/40a0Nk8I)

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

!ymfriend / f (**`:`筛选和排序**) (**数量或区间**) (**玩家名**)

- **<HopeIcon icon="arrow-down-a-z"/> 筛选和排序**：结果的筛选和排序方式。
  - 可以输入的参数：表现分、准确率、游戏次数、游戏时间、总击打数、入坑时间、玩家编号、国家、姓名、在线状态、单向关注：
    - pp, acc, playcount, playtime, totalhits, time, uid, country, name, online, mutual。
    - 或者 p, a, pc, pt, h, t, u, c, o, m。
    - 如果留空，默认随机排序。
  - 以上参数的默认值或默认排序方向：
    - online：真（布尔值）
    - mutual：假（布尔值）
    - time、uid、country、name：<HopeIcon icon="arrow-down-a-z"/> ==升序==（小、时间短或很久之前的在上）。
    - pp, acc, playcount, playtime, totalhits：<HopeIcon icon="arrow-up-a-z"/> ==降序==（大、时间长或最近发生的在上）。
  - 以上参数（除了 online）后加 `+` 号均视作 <HopeIcon icon="arrow-down-a-z"/> ==升序==，加 `-` 号均视作 <HopeIcon icon="arrow-up-a-z"/> ==降序==。
  - 如果你记不清某个参数的相反排序的方向，也可以直接在后面加一个==数字 2==。
- **<HopeIcon icon="ruler-combined"/> 数量或区间**：可以输入 1-100 内的单个值，也可以输入==差值小于 100== 的区间（|x-y|）。
  - 输入 1，就是随机查询自己的一个好友。
  - 输入 111-120，就是查询自己好友列表内第 111 到 120 个好友（<HopeIcon icon="arrow-down-a-z"/> 按首字母排列）。
  - 如果 <HopeIcon icon="circle-question"/> 不输入任何值，则默认随机查询 12 个好友。
- **<HopeIcon icon="address-card"/> 玩家名**：可以查询自己是否和对方互相关注（双向好友）。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@tadokoro kouji。
  - 如果你并未关注对方，此时，只有在对方也绑定了机器人之后，才可得知对方是否关注了你。

::: warning 注意

繁重功能，查询结果将会在 ==10-20== 秒内返回。如果 Bot 消息发送失败，请稍后再重试，切勿刷屏查询。

:::

## <HopeIcon icon="link"/> 4 获取主页链接 !ymmutual (!mu) {id=mutual}

可以查询玩家所添加（关注）的好友（不能看到双向）。

**使用方法**

!ymmutual / mu (**玩家名**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@tadokoro kouji。
  - 可以查询对方的主页链接。

## <HopeIcon icon="chart-simple"/> 5 查询 PP- !ymppminus (!ppm) {id=ppminus}

**PP-** 是 YumuBot 参考了 [PP+](https://syrin.me/pp+/) 等系统，开发的一套特殊评价系统，来从不同角度量化玩家的实力。

**使用方法**

!ymppminus / pm (**vs**) (**`:`游戏模式**) (**玩家名**)

- **<HopeIcon icon="crown"/> vs**：如果输入 **vs**，则返回自己的 PP- 数值与其他 <HopeIcon icon="address-card"/> 玩家的对比图。
  - 也可以输入短链 **PV** 来标记此人为你需要对比的对象，亦或是输入两个人互相对比。
- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[游戏模式](./score.md#mode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 不输入默认查询自己的 PP- 信息。

![PPM 面板](https://yumemuzi.s-ul.eu/yumu/H5eNsjzW)

::: chart PPM

```json
{
  "type": "radar",
  "data": {
    "labels": ["PTT", "STA", "STB", "EFT", "STH", "ACC"],
    "datasets": [
      {
        "label": "我的 PPM 数据",
        "data": [65, 59, 90, 81, 56, 55],
        "fill": true,
        "backgroundColor": "rgba(54, 162, 235, 0.2)",
        "borderColor": "rgb(54, 162, 235)",
        "pointBackgroundColor": "rgb(54, 162, 235)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(54, 162, 235)"
      },
      {
        "label": "对方的 PPM 数据",
        "data": [28, 48, 40, 19, 96, 27],
        "fill": true,
        "backgroundColor": "rgba(255, 99, 132, 0.2)",
        "borderColor": "rgb(255, 99, 132)",
        "pointBackgroundColor": "rgb(255, 99, 132)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(255, 99, 132)"
      }
    ]
  },
  "options": {
    "elements": {
      "line": {
        "borderWidth": 3
      }
    }
  }
}
```

:::

**内容解析**

::: details 内容解析

- **ACC**：准度，更严格的 <HopeIcon icon="bullseye"/> 准确率评价。
- **PTT**：潜力，与玩家的 BP <HopeIcon icon="arrow-up-right-dots"/> 密度有关。越高，说明 BP 间隙越大，打出好成绩的几率也会越高。
- **STA**：耐力，与玩家的 BP <HopeIcon icon="clock"/> 长度有关，越高耐力越高
- **STB/PRE**：稳定/彩率，与玩家的 BP <HopeIcon icon="ranking-star"/> 评级或 <HopeIcon icon="barcode"/> 彩率有关。
- **EFT**：肝力，与玩家投入了多少 <HopeIcon icon="person-running"/> 精力（游玩次数）有关。
- **STH**：强度，与玩家 BP 谱面内的 <HopeIcon icon="arrow-up-right-dots"/> 物件密度有关。越高，说明玩家越能应付高密度的谱面。
  - 因为此指标一般和玩家的 <HopeIcon icon="medal"/> PP 正相关，所以未来可能会移除此指标。
- **OVA**：综合，一般来说，综合评分 **90** 以上，就代表了此玩家有一定游戏理解，水平正常且均衡。
- **SAN**：理智，若 <HopeIcon icon="brain"/> 理智低，则可认为该玩家有其他音游基础，当然也可能是 <HopeIcon icon="triangle-exclamation"/> 小号或 <HopeIcon icon="ban"/> 作弊玩家。SAN 右上角并不是评级，而是另一套指示方法：
  - `+` 越多，越说明玩家的账号可能正常。
  - `-` 越多，越说明玩家的账号可能异常，但仍在可接受范围内。
  - `!` 越多，越说明玩家的账号可能异常。
  - `X` 出现，则表示此玩家的账号数据基本不可信，极可能是此玩家有其他同类型的音游基础。
    - 当然也可能是此玩家是天赋异禀！毕竟，天才在左疯子在右。

:::

::: tip 提示

目前 PPM 的版本是 v2.4。而且，PPM 依旧严重依赖玩家的 BP 榜单。在不久的将来，不完全依赖 BP 统计数据，而是偏向于分析成绩的 PPM3 将替代此功能。

:::

## <HopeIcon icon="chart-simple"/> 6 查询 PP+ !ymppplus (!ppp) {id=ppplus}

PP+ 的官网 [Syrin.me](https://syrin.me/pp+/) 已停止维护，功能暂不可用。 但是 Syrin 把他移植进了 Lazer 里！并且可以通过 Docker 获取运行。

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

## <HopeIcon icon="id-badge"/> 7 获取玩家 ID !ymgetid (!gi) {id=getid}

**使用方法**

!ymgetid / gi [**玩家名**...]

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 至少输入一个玩家。
  - 不同玩家名之间，需要使用逗号或冒号分隔开。

::: warning 注意

为防止滥用，只有群聊的群主或管理员可以使用此功能。

:::

## <HopeIcon icon="users"/> 8 获取玩家名称 !ymgetname (!gn) {id=getname}

**使用方法**

!ymgetid / gi [**玩家 ID**...]

- **<HopeIcon icon="address-book"/> 玩家 ID**：同上。
  - 至少输入一个玩家。
  - 不同玩家 ID 之间，需要使用逗号或冒号分隔开。

::: warning 注意

为防止滥用，只有群聊的群主或管理员可以使用此功能。

:::
