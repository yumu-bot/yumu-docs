---
title: 玩家指令
icon: user
order: 5
date: 2023-08-30
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
---

# 玩家指令

![玩家指令列表](img/help-player.png)

## <HopeIcon icon="circle-info"/> 1 查询玩家信息 !yminfo (!i)

可以查询玩家在不同模式上的游玩信息。

![Info 面板](img/bot-info.png)

**使用方法**

!yminfo / i (**`:`游戏模式**) (**玩家名称**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：需要设定的默认游戏模式。请参阅：[游戏模式](./score.md#_1-修改默认游戏模式-ymmode)
- **<HopeIcon icon="address-card"/> 玩家名**：需要查询的玩家名称。暂不支持使用 UID 查询。

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

使用 !uui 可以获取文字版消息。

:::

## ~~<HopeIcon icon="compass-drafting"/> 2 查询谱师信息 !ymimmapper (!im)~~

可以查询玩家 <HopeIcon icon="map"/> 在制作谱面（作图，Beatmapping）方面的信息。

**使用方法**

!ymimmapper / im (**玩家名称**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。

**内容解析**

::: info 备注

暂未开放

:::

## <HopeIcon icon="user-group"/> 3 查询玩家的好友列表 !ymfriend (!f)

可以查询玩家所添加（关注）的好友（不能看到双向）。

**使用方法**

!ymfriend / f (**数量或区间**) (**`@`QQ 用户**)

- **<HopeIcon icon="ruler-combined"/> 数量或区间**：可以输入 1-100 内的单个值，也可以输入==差值==在 1-100 内的区间（x-y）。
  - 输入 1，就是随机查询自己的一个好友。
  - 输入 111-120，就是查询自己好友列表内第一百一十一到第一百二十个好友（<HopeIcon icon="arrow-down-a-z"/> 按首字母排列）。
  - 如果 <HopeIcon icon="circle-question"/> 不输入任何值，则默认随机查询二十个好友。
- **<HopeIcon icon="at"/> QQ 用户**
  - 可以查询自己是否和对方互相关注（双向）。

## <HopeIcon icon="link"/> 4 查询玩家的主页链接 !ymmutual (!mu)

可以查询玩家所添加（关注）的好友（不能看到双向）。

**使用方法**

!ymmutual / mu (**玩家名**) (**`@`QQ 用户**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
- **<HopeIcon icon="at"/> QQ 用户**
  - 可以查询对方的主页链接。

## <HopeIcon icon="link"/> 5 查询玩家的 PP- !ymppminus (!ppm)

**PP-(PPM)** 是 YumuBot 开发的一套特殊评价系统，来从不同角度量化玩家的实力。

**使用方法**

!ymppminus / ppm (**`:`游戏模式**) (**玩家名称**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[游戏模式](./score.md#_1-修改默认游戏模式-ymmode)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。

![PPM 面板](img/bot-ppm.png)

**内容解析**

::: details 内容解析

* **ACC**：准度，更严格的准确率评价。
* **PTT**：潜力，与BP密度有关，这个值越低，潜力越高
* **STA**：耐力，与BP长度有关，越高耐力越高
* **STB**：稳定，与BP评价有关，反映了玩家的稳定能力
* **PRE**：彩率，与BP彩率有关，反映了玩家的抓彩能力
* **ENG**：肝力，与玩家投入了多少精力有关
* **STH**：强度，与玩家BP谱面的密度有关

* OVA：全览：
* SAN：理智，理智低则可认为有其他音游基础

:::