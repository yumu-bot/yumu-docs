---
title: 查询条件
icon: filter
order: 13
date: 2025-09-25
category: 指令
tag:
  - 指令
  - osu!
  - osu
  - 查询条件
  - filter
sticky: false
star: false
footer: Yumu Docs - 查询条件
copyright: false
---

# 查询条件

由于查询器可能占用的篇幅过于巨大，因此查询器的用法都会在此页列出。

玩家可自行查询表格，来准确查询出自己想要的结果。

::: tip 查询器语法

查询器的语法均为：==查询条件名 + 逻辑运算符 + 查询字段==。

比如：player=fia、mapper=fushimirio 等。

:::

## <HopeIcon icon="equals"/> 运算符

大多数查询条件均支持以下运算符：

| 运算符名 | 运算符 |
| :-- | --- |
| 完全等于 | `==`、`≌` |
| （约）等于 | `=`、`≈` |
| 大于 | `>` |
| 大于等于 | `≥`、`>=` |
| 小于 | `<` |
| 小于等于 | `≤`、`<=` |
| 不等于 | `≠`、`!=` |

::: tip 运算逻辑

在部分情况下，我们对运算符的逻辑作出了部分修改，便于更符合玩家的直觉（而不是机器式的判断）

- 如果查询字段是**整数**，那么 `==` 和 `=` 等价。
- 如果查询字段是**小数**，那么：
  - `==` 的逻辑并非完全等于，而是查询内容和查询字段之间的差值小于 1e-4。
  - 部分参数下， `=`、`>`、`<`、`>=`、`<=` 会限制查询内容在查询字段**在当前精度内向下取整** ~ **在当前精度内向下取整** + **当前精度内的 1 单位** 之内。
    - 比如 acc=99，此时会返回准确率为 99.0%-100.0%（不包含） 之内的成绩。
    - 但是输入 acc=99.6，此时会返回准确率为 99.60%-99.70%（不包含） 之内的成绩。
- 如果查询字段是**字符串**，那么：
  - `=` 的逻辑并非等于，而是返回**包含查询字段**的内容（与 `<` 等价）。
  - `>`、`<`、`>=`、`<=` 的逻辑会映射到查询内容和查询字段的长度上，并且较长的必须包含较短的。
- 如果查询字段是**布尔值**，那么 `==` 和 `=` 等价；`>`、`<`、`>=`、`<=`  不可用。
- 如果查询字段是**模组**，那么其逻辑类似于字符串的处理方式。
- 如果查询字段是**千位数**，那么：
  - 字段本质上是整数，但由于这些查询结果的值可能会特别大，所以输入的值小于 100 时，会自动帮您乘以 1000。
  - 比如：pp >= 15，即表示查询 pp 大于等于 15000 的好友。
- 如果查询字段是**时间**，那么：
  - 如果输入的逻辑运算符是 `<=` 或 `>=`，则会使用**绝对日期模式**。
    - 机器人会按照查询字段所提示的时间单位，来构建一个绝对日期。
    - 如果未填写时间单位，则会按今天来填写。
    - 比如：time < 13h21m，此时会返回**今天** 13:21:xx 之前的结果。
  - 如果输入了其他任何逻辑运算符，则会使用**移动日期模式**。
    - 移动日期的方向总是向前。
    - 比如：time > 50d，此时会返回时间 50 天前之前的结果。
  - 如果输入的逻辑运算符是 `=` 或 `==`，则会使用**区域日期模式**。
    - 比如：time = 50d，此时会返回时间在 49 天前之前，并且在 50 天前之后的结果。

:::

## <HopeIcon icon="user"/> 玩家查询器 {id=microuser}

| 条件名 | 条件英文名 | 简称 | 查询字段类型 |
| --- | --- | :-: | --- |
| 玩家名 | player/user | u/n | 三位以上的 ASCII 字符串 |
| 玩家编号 | userid/id | i | 数字 |
| 活跃 | active | e | 布尔值 |
| 机器人 | bot | b | 布尔值 |
| 在线 | online | o | 布尔值 |
| 删除 | delete | d | false |
| 支持者 | supporter | v | 布尔值 |
| 支持者等级 | supporterlevel | v/vl | 0-3 之间的整数 |
| 上线时间 | lastvisit/time | t | 时间 |
| 私信 | pmonly | y | 布尔值 |
| 国家、地区 | country | c | 国家或地区简称、ISO 3166-1 两字码 |
| 互相关注 | mutual | m | 布尔值 |
| 战队 | team | tm | 战队名称 |
| 表现 | performance | p/pp | 整数或千位数 |
| 准确率 | accuracy/acc | ac | 小数 |
| 连击 | combo | cb | 整数或比率 |
| 等级 | level | l/lv | 整数 |
| SSH | rankssh | rxh/xh | 整数 |
| SS | rankss | rss/rx/x | 整数 |
| SH | ranksh | rsh/rh | 整数 |
| S | ranks | rs/s | 整数 |
| A | ranka | ra | 整数 |
| 全球排名 | ranking | k | 整数（大小于符号倒置） |
| 游玩次数 | playcount | pc | 整数或千位数 |
| 游玩时间 | playtime | pt | 时间 |
| 总击打数 | totalhit | tth/th | 整数或千位数 |

## <HopeIcon icon="gamepad"/> 成绩查询器 {id=score}

| 条件名 | 条件英文名 | 简称 | 查询字段类型 |
| --- | --- | :-: | --- |
| 谱师 | creator/host | c/h | 三位以上的 ASCII 字符串 |
| 客串谱师 | gder/mapper/guest | u/gu | 三位以上的 ASCII 字符串 |
| 谱面编号 | beatmapid/bid/id | b | 整数 |
| 谱面集编号 | beatmapsetid/sid | s | 整数 |
| 歌曲名 | title/name/song | t | 字符串 |
| 歌手名 | artist/singer/art | a | 字符串 |
| 来源 | source/src/from | f/o | 字符串 |
| 标签 | tag | g | 字符串 |
| 难度名 | difficulty/diff | d | 字符串 |
| 星数 | star/rating | r/sr | 小数 |
| AR | approach | ar | 小数 |
| CS | circle/key | cs | 小数 |
| OD | overall | od | 小数 |
| HP | health | hp | 小数 |
| 表现分 | performance | p/pp | 整数或千位数 |
| 评价 | rank | k | 字符串 |
| 长度 | length | l | 整数 |
| 时间 | time | ti | 时间 |
| 曲速 | bpm | bm | 小数 |
| 准确率 | accuracy/acc | ac | 小数 |
| 连击 | combo | cb | 整数或比率 |
| PERFECT | 320/305 | pf | 整数或比率 |
| GREAT | 300/良/大果 | gr/fr | 整数或比率 |
| GOOD | 200 | gd | 整数或比率 |
| OK | 100/可/150/bad/中果/large droplet | bd/ld | 整数或比率 |
| MEH | 50/poor/小果/small droplet | mh/pr/sd | 整数或比率 |
| MISS | 0/miss/不可/失误 | ms | 整数或比率 |
| MISS DROPLET | 漏果 | md |  |
| 模组 | mod | m | 二字符的字符串 |
| 彩率 | rate | pm/e | 小数 |
| 圆圈 | circle/rice | ci/cr/rc | 整数或比率 |
| 滑条 | slider/long/longnote | sl/ln | 整数或比率 |
| 转盘 | spinner/rattle | sp | 整数或比率 |
| 物件总计 | total/object | tt | 整数 |
| 转谱 | convert | cv | 布尔值 |
| 客户端 | client/version | v | lazer 或 stable、l、s |

## <HopeIcon icon="spinner"/> 舞萌成绩查询器 {id=maimai}

| 条件名 | 条件英文名 | 简称 | 查询字段类型 |
| --- | --- | :-: | --- |
| 谱师 | charter/mapper | c | 字符串 |
| 编号 | id | i | 整数 |
| 难度 | difficulty/diff | d | 1-15 的数字（可带 `+` 号） |
| 难度 | difficulty/diff | d | basic，advanced 等或绿、黄等或 b、a 等。请参阅：[难度对应表](./maimai.md#maifind) |
| 框体 | cabinet/cab | n | 标准、豪华或 sd、dx 或 standard、deluxe |
| 版本 | version | v | 版本号，请参阅：[版本号对应表](./maimai.md#version) |
| 歌曲名 | title/name/song | t | 字符串 |
| 别名 | alias | l | 字符串 |
| 歌手名 | artist/singer/art | a | 字符串 |
| 类型 | category/type | t/g | 流行、v 家等或 pop、vocaloid 等或 p、v 等 |
| 曲速 | bpm | bm | 小数 |
| 达成率 | achievement | ac | 小数 |
| TAP | tap | ta/tp | 整数或比率 |
| HOLD | hold/hod | ho/hd | 整数或比率 |
| SLIDE | slide/sld | sl/se | 整数或比率 |
| TOUCH | touch/toh/tch | th/to | 整数或比率 |
| BREAK | break/brk | br/bk | 整数或比率 |
| DX 分数 | dxscore/dx/ds | o | 整数或比率 |
| DX 星 | dxstar/star/dxsr/dr/sr | s | 0-5 之间的整数 |
| 评分 | rating/ra/rt | r | 整数 |
| 评价 | rank | k | 字符串 |
| 连击 | combo/cb | x | fc、fc+、ap、ap+，其他均为 played |
| 同步 | sync/sy | y | s (sync)、fs、fs+、fsd (fdx)、fsd+ (fdx+)，其他均为 played |

## <HopeIcon icon="music"/> 舞萌歌曲查询器 {id=maisong}

| 条件名 | 条件英文名 | 简称 | 查询字段类型 |
| --- | --- | :-: | --- |
| 谱师 | charter/mapper | c | 字符串 |
| 编号 | id | i | 整数 |
| 难度 | difficulty/diff | d | 1-15 的数字（可带 `+` 号） |
| 难度 | difficulty/diff | d | basic，advanced 等或绿、黄等或 b、a 等。请参阅：[难度对应表](./maimai.md#maifind) |
| 框体 | cabinet/cab | n | 标准、豪华或 sd、dx 或 standard、deluxe |
| 版本 | version | v | 版本号，请参阅：[版本号对应表](./maimai.md#version) |
| 歌曲名 | title/name/song | t | 字符串 |
| 别名 | alias | l | 字符串 |
| 歌手名 | artist/singer/art | a | 字符串 |
| 类型 | category/type | t/g | 流行、v 家等或 pop、vocaloid 等或 p、v 等 |
| 曲速 | bpm | bm | 小数 |
| TAP | tap | ta/tp | 整数或比率 |
| HOLD | hold/hod | ho/hd | 整数或比率 |
| SLIDE | slide/sld | sl/se | 整数或比率 |
| TOUCH | touch/toh/tch | th/to | 整数或比率 |
| BREAK | break/brk | br/bk | 整数或比率 |