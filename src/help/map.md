---
title: 谱面指令
icon: map
order: 6
date: 2023-09-02
category:
  - 指令
tag:
  - 指令
  - osu!
  - osu
  - beatmap
  - 谱面
sticky: false
star: false
footer: Yumu Docs - 谱面指令
copyright: false
---

# 谱面指令

![谱面指令列表](https://yumemuzi.s-ul.eu/yumu/EE3gCB5l)

## <HopeIcon icon="map-location-dot"/> 1 查询谱面信息 !ymmap (!m) {id=map}

可以根据成绩的一些参数（<HopeIcon icon="link"/> 连击数、<HopeIcon icon="bullseye"/> 准确率）来查询谱面的信息（<HopeIcon icon="magnifying-glass-chart"/> 四维、<HopeIcon icon="medal"/> PP）。

**使用方法**

!ymmap / m (**`:`游戏模式**) [**谱面编号**] (**准确率`%`**) (**`x`连击数**) (**`-`失误数**) (**`+`模组名称**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：谱面的游戏模式，且只能在转谱上赋予模式。请参阅：[游戏模式](./score.md#mode)
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要查询的谱面编号 (BID)。
- **<HopeIcon icon="bullseye"/> 准确率**：预期成绩的准确率。可以输入 0-100 内的值。
  - 如果输入 0-1 之间的小数，则会乘以 100。
  - 如果输入 100-10000 之间的整数，则会除以 100。
  - `%` 作为区分符，可以输入在准确率之前。此外，在大多数输入情况下，可以省略。
  - 不输入默认 100%。
- **<HopeIcon icon="link"/> 连击数**：预期成绩的连击数。可以输入大于 1 的整数或 0-1 内的小数。
  - 如果输入 0-1 之间的小数（不包括 0），则表示预期获取谱面最大连击数**多少倍**的连击数。
  - `x` 作为区分符，可以输入在连击数之前。此外，在大多数输入情况下，可以省略。
  - 不输入默认全连击（FC）。
- **<HopeIcon icon="xmark"/> 失误数**：预期成绩的失误数（miss）。可以输入大于等于 0 的整数。
  - `-` 作为区分符，可以输入在失误数之前。此外，在大多数输入情况下，可以省略。
  - 不输入默认为 0 失误。
- **<HopeIcon icon="music"/> 模组名称**：<HopeIcon icon="music"/> 预期成绩内模组的简称，通常为两位大写字母组成。可以无空格地输入多个 <HopeIcon icon="music"/> 模组。

![谱面信息面板，指令：!m 2274675 93 x700 +HDDT](https://yumemuzi.s-ul.eu/yumu/AFo4n32L)

::: details 可输入的 <HopeIcon icon="music"/> 模组名称

EZ、NF、HT、HR、SD、PF、DT、NC、HD、FI、FL、MR

:::

::: tip 提示

如果查询的谱面属于 mania 游戏模式，则此时的准确率是用于计算 PP 的准确率（PPACC）。此时，彩 320 才是满权重，黄 300 的权重只有 300/320，以此类推。

!p/!r 功能的 PPACC 位于准确率的右上角，可以据此计算。

:::

::: warning 注意

由于正则匹配特性，在==仅输入连击，`x` 符号在后面，并且不输入准确率==，或是==仅输入失误数，`-` 符号在后面，并且不输入准确率或不输入连击==时，会出现误匹配。此时应该修改输入方法。

例：!m 114514 0.4x 2- +HDDT

此时 0.4 会被匹配到准确率字段中，而 2、HDDT 被抛弃。结果变成：40% acc + FC。此时应修改输入为：

!m 114514 1 0.4 2 +HDDT（输入 1 作为准确率的占位符，此时两个符号都可以省略了）

或 !m 114514 x0.4 -2 +HDDT（在前面添加字母 `x`、`-` 区分）

此外，如果仅输入准确率，或是既输入准确率又输入连击数，或是均不输入留空；准确率、连击数、失误数前后的 `%`、`x`、`-` 均可省略。

:::

## <HopeIcon icon="headphones"/> 2 试听谱面 !ymaudio (!a) {id=audio}

试听 10 秒预览。

**使用方法**

!ymaudio / a (**`:`种类**) [**谱面编号**]

- **<HopeIcon icon="icons"/> 种类**：输入编号的种类。
  - sid / s：按谱面集编号 (SID) 查询。
  - bid / b / 留空：按谱面编号 (BID) 查询。
  - 如果搜索不到对应的谱面，则会尝试修改编号种类查询。
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要查询的谱面编号 (BID) 或谱面集编号 (SID)。

::: tip 提示

也可使用 !song 调出功能。

:::

## ~~<HopeIcon icon="magnifying-glass"/> 3 搜索谱面 !ymsearch (!sh)~~ {id=search}

**使用方法**

!ymsearch / sh (**`#`谱面编号**) (**艺术家**`-`**曲名**) (**`[`难度名`]`**) (**`(`谱师`)`**) (**`+`曲风/语种**)

- **<HopeIcon icon="hashtag"/> 谱面编号**：同上。
- **<HopeIcon icon="users"/> 艺术家**：同上。
- **<HopeIcon icon="signature"/> 曲名**：同上。
- **<HopeIcon icon="user-graduate"/> 谱师**：同上。
- **<HopeIcon icon="language"/> 曲风 / <HopeIcon icon="compact-disc"/> 语种**：需要查询的曲风或语种。
  - 曲风支持：
    - unspecified, video game, anime, rock, pop, other, novelty, hip hop, electronic, metal, classical, folk, jazz
    - u, v, a, r, p, o, n, h, e, m, c, f, j
  - 语种支持：
    - English, Chinese, French, German, Italian, Japanese, Korean, Spanish, Swedish, Russian, Polish, Instrumental, Unspecified, Other
    - en, zh/cn, fr, ge, it, ja, kr, sp, sw, ru, po, in, un, ot

::: info 备注

暂未开放

:::

## ~~<HopeIcon icon="book-bookmark"/> 4 查询课题 !ymcourse (!c)~~ {id=course}

::: info 备注

暂未开放

:::

## ~~<HopeIcon icon="chart-line"/> 5 查询段位单曲准确率 !ymdanacc (!da)~~ {id=danacc}

通过计算休息段和结束时提供的准确率，得出每段的准确率。

**使用方法**

!ymdanacc / da (**段位谱面名**) (**准确率**)

- **<HopeIcon icon="map-pin"/> 段位谱面名**：需要查询的段位谱面。
  - 如果记不住段位谱面名，可以留空。Bot 会输出一张列出了所有段位的 <HopeIcon icon="image"/> 图片。
- **<HopeIcon icon="bullseye"/> 准确率**：休息段和结束时，记录下来的准确率。可以输入 0-100 内的值，按空格分隔。
  - 如果输入 0-1 之间的小数，则会乘以 100。
  - 如果某张段位谱面有三个休息段，那么这里需要输入四个值。

::: info 备注

暂未开放

:::

## <HopeIcon icon="thumbs-up"/> 6 查询过审的谱面列表 !ymqualified (!q) {id=qualified}

**使用方法**

!ymqualified / q (**`:`游戏模式**) (**`#`谱面状态**) (**`*`排序**) (**数量**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[游戏模式](./score.md#mode)
- **<HopeIcon icon="file-circle-question"/> 谱面状态**：谱面目前的状态。
  - 可以输入的参数：graveyard, wip, pending, ranked, approved, qualified, loved，或者 g, w, p, r, a, q, l，
  - 如果留空，默认是 qualified。
- **<HopeIcon icon="arrow-down-a-z"/> 排序**：结果的排序方式。
  - 可以输入的参数：
    - title, artist, difficulty/star, maprating, plays, ranked/time，或者 t, a, d/s, m, p, r/t
  - 以上参数后面不加任何符号或字母，加 `+` 号、加字母 `a`、加 `_asc` 都是 <HopeIcon icon="arrow-down-a-z"/> ==升序==。以上参数后面加 `-` 号、加字母 `d`、加 `_desc` 是 <HopeIcon icon="arrow-up-a-z"/> ==降序==。
    - 常用参数：rd / ranked_desc：按上架时间降序，刚上架的谱面会排在最上面。
  - 如果留空，默认是 ranked_asc：按上架时间升序，此时，刚提名的谱面会排在最上面。

::: warning 注意

繁重功能，查询结果将会在 5-10 秒内返回。如果 Bot 消息发送失败，请稍后再重试，切勿刷屏查询。

:::

## <HopeIcon icon="list-ol"/> 7 查询谱面排行榜 !ymleader (!l) {id=leader}

**使用方法**

!ymleader / l (**`:`游戏模式**) [**谱面编号**] (**`#`榜单类型**) (**`+`模组名称**)

- ~~**<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[游戏模式](./score.md#mode)~~
- **<HopeIcon icon="hashtag"/> 谱面编号**：同上。
- ~~**<HopeIcon icon="rectangle-list"/> 榜单类型**：全球榜、好友榜等。~~
  - ~~可以输入的参数：global，friend，country，或者g、f、c~~
- ~~**<HopeIcon icon="music"/> 模组名称**：<HopeIcon icon="music"/> 预期成绩内模组的简称，通常为两位大写字母组成。可以无空格地输入多个 <HopeIcon icon="music"/> 模组。~~

::: warning 注意

繁重功能，查询结果将会在 5-10 秒内返回。如果 Bot 消息发送失败，请稍后再重试，切勿刷屏查询。

:::

::: info 备注

API 暂未开放以上大部分参数的使用权限。目前只能查询某张谱面的==全球榜== (!yml bid)。

:::