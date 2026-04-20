---
title: 谱面指令
icon: map
order: 6
date: 2025-03-17
category: 指令
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

## <HopeIcon icon="map-location-dot"/> 1 查询谱面信息 !ymmap (!m) {id=map}

可以根据成绩的一些参数（<HopeIcon icon="link"/> 连击数、<HopeIcon icon="bullseye"/> 准确率）来查询谱面的信息（<HopeIcon icon="magnifying-glass-chart"/> 四维、<HopeIcon icon="medal"/> PP）。

**使用方法**

!ymmap / m (**`:`游戏模式**) [**谱面编号**] (**准确率`%`**) (**`x`连击数**) (**`-`失误数**) (**`+`模组名称**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：谱面的游戏模式，且只能在转谱上赋予模式。请参阅：[游戏模式](./score.md#mode)
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填。需要查询的谱面编号 (BID)。
  - 如果不填写，则 Bot 不会提示你（退避）。
- **<HopeIcon icon="bullseye"/> 准确率**：预期成绩的准确率。可以输入 0-100 内的值。
  - 如果输入 0-1 之间的小数，则会乘以 100。
  - 如果输入 100-10000 之间的整数，则会除以 100。
  - `%` 作为区分符，可以输入在准确率前后。此外，在大多数输入情况下，可以省略。
  - 不输入默认 100%。
- **<HopeIcon icon="link"/> 连击数**：预期成绩的连击数。可以输入大于 1 的整数或 0-1 内的小数。
  - 如果输入 0-1 之间的小数（不包括 0），则表示预期获取谱面最大连击数**多少倍**的连击数。
  - `x` 作为区分符，可以输入在连击数前后。此外，在大多数输入情况下，可以省略。
  - 不输入默认全连击（FC）。
- **<HopeIcon icon="xmark"/> 失误数**：预期成绩的失误数（miss）。可以输入大于等于 0 的整数。
  - `-` 作为区分符，可以输入在失误数前后。此外，在大多数输入情况下，可以省略。
  - 不输入默认为 0 失误。
- **<HopeIcon icon="music"/> 模组名称**：<HopeIcon icon="music"/> 预期成绩内模组的简称，通常为两位大写字母组成。可以无空格地输入多个 <HopeIcon icon="music"/> 模组。
  - 可输入的 <HopeIcon icon="music"/> 模组名称：EZ、NF、HT、HR、SD、PF、DT、NC、HD、FI、FL、MR

![谱面信息面板，指令：!m 3667014 98% 0.9x +HD](https://yumemuzi.s-ul.eu/yumu/zSsTDPQJ)

::: tip 提示

如果查询的谱面属于 <HopeIcon icon="keyboard"/> mania 游戏模式，则此时的准确率是用于计算 PP 的准确率（PPACC）。此时，彩 320 才是满权重，黄 300 的权重只有 300/320，以此类推。

如果准确率、连击数、失误数并未携带**区分符**，则剩余的参数会按照准确率、连击数、失误数的顺序，逐个填入。

比如：!m 114514 0.4`x` 2`-` 98 `+`HDDT，此时已经用区分符指定了连击（倍率）为 `0.4`，并指定了失误数为 `2`。则其后的 `98` 会按照顺序，按 98% 准确率填入。

:::

## <HopeIcon icon="headphones"/> 2 试听谱面 !ymaudio (!a) {id=audio}

试听歌曲 10 秒，从谱面的预览点开始播放。

**使用方法**

!ymaudio / a (**`:`种类**) [**谱面编号**]

- **<HopeIcon icon="icons"/> 种类**：输入编号的种类。
  - sid / s：按谱面集编号 (SID) 查询。
  - bid / b：按谱面编号 (BID) 查询。
  - 如果搜索不到对应的谱面，则会尝试修改编号种类查询。
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要查询的谱面编号 (BID) 或谱面集编号 (SID)。
  - 如果种类留空，则默认按谱面编号 (BID) 查询。

::: tip 提示

!a:s 中的冒号可以省略。因此，如果要通过 SID 查询整张谱面的上架流程，只需要输入 !as [SID] 即可。

也可使用 !song 调出功能。

:::

## <HopeIcon icon="magnifying-glass"/> 3 探索谱面 !ymexplore (!e) {id=explore}

它完美复刻了 https://osu.ppy.sh/beatmapsets 的功能，并将查询玩家谱面的功能合并到其中。您可以在不打开官网的前提下，快速搜索谱面。

**使用方法**

!ymexplore / e (**`:`搜索模式**) (`@`**玩家**) (**查询条件**)

- **<HopeIcon icon="magnifying-glass-arrow-right"/> 搜索模式**：需要设定的搜索模式。
  - 可以输入的参数：mostplayed、favourite、graveyard、guest、loved、nominated、pending、ranked。
  - 或者 m/p、f、g、u、l、n、p、r。
  - 不输入默认 search 模式。
- **<HopeIcon icon="address-card"/> 玩家**：需要查询的玩家。留空默认查询自己。
  - 仅支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。
  - 其他任何字段都会被匹配成查询条件。
- **<HopeIcon icon="filter"/> 查询条件**：
  - 对于 search 模式，请参阅：[<HopeIcon icon="filter"/> 查询条件·搜索查询器](./filter.md#search)
  - 对于 most_played 模式，请参阅：[<HopeIcon icon="filter"/> 查询条件·最多游玩谱面查询器](./filter.md#most_played)
  - 对于其他模式，请参阅：[<HopeIcon icon="filter"/> 查询条件·谱面集查询器](./filter.md#beatmapset)
  - 如果输入的内容不符合任何查询条件，则会直接使用这些内容查询。

::: tip 提示

mostplayed 是最特殊的搜索模式；您可以输入 !em 快速调用它。

:::

## <HopeIcon icon="thumbs-up"/> 4 查询过审谱面 !ymqualified (!q) {id=qualified}

**使用方法**

!ymqualified / q (**`:`游戏模式**) (**`#`谱面状态**) (**`*`排序**) (**数量**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：同上。请参阅：[游戏模式](./score.md#mode)
- **<HopeIcon icon="file-circle-question"/> 谱面状态**：谱面目前的状态。
  - 可以输入的参数：graveyard, wip, pending, ranked, approved, qualified, loved。
  - 或者 g, w, p, r, a, q, l。
  - 如果留空，默认是 qualified。
- **<HopeIcon icon="arrow-down-a-z"/> 排序**：结果的筛选和排序方式。
  - 可以输入的参数：title, artist, difficulty/star, maprating, plays, ranked/time。
  - 或者 t, a, d/s, m, p, r/t。
  - 以上参数后面不加任何符号或字母，加 `+` 号、加字母 `a`、加 `_asc` 都是 <HopeIcon icon="arrow-down-a-z"/> ==升序==（小的在上）。以上参数后面加 `-` 号、加字母 `d`、加 `_desc` 是 <HopeIcon icon="arrow-up-a-z"/> ==降序==（大的在上）。
    - 常用参数：rd / ranked_desc：按上架时间降序，刚上架的谱面会排在最上面。
  - 如果留空，默认是 ranked_asc：按上架时间升序，此时，刚提名的谱面会排在最上面。

## <HopeIcon icon="angles-up"/> 5 查询上架流程 !ymnomination (!n) {id=nomination}

**使用方法**

!ymnomination / n (**`:`种类**) [**谱面编号**]

- **<HopeIcon icon="icons"/> 种类**：输入编号的种类。
  - sid / s：按谱面集编号 (SID) 查询。
  - bid / b：按谱面编号 (BID) 查询。
  - 如果搜索不到对应的谱面，则会尝试修改编号种类查询。
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要查询的谱面编号 (BID) 或谱面集编号 (SID)。
  - 如果种类留空，则默认按谱面集编号 (SID) 查询。

![上架流程面板，指令：!n 2016251](https://yumemuzi.s-ul.eu/yumu/m2nBN8Te)

**内容解析**

::: details 内容解析

- **左上角**：玩家的 <HopeIcon icon="circle-user"/> 头像、<HopeIcon icon="heading"/> 名称、玩家所属的 <HopeIcon icon="users"/> 组织。
  - Diff：这张谱面的谱主难度数量和总计数量。它们的差值即 <HopeIcon icon="user-pen"/> 客串难度数量。
  - SR：这张谱面的 <HopeIcon icon="star"/> 星数（SR）范围。
  - Length：这张谱面的 <HopeIcon icon="clock"/> 长度（取 BID 最小的）。
- **Ranking Progress**：谱面的 <HopeIcon icon="angles-up"/> 上架流程。
  - 左上角的 <HopeIcon icon="bullhorn"/> Hype 表示推荐数量。其下是 <HopeIcon icon="bullhorn"/> 推荐或 <HopeIcon icon="heart"/> 赞的评论。
  - 中间的 <HopeIcon icon="thumbs-up"/> Nomination 表示提名数量。其下会根据情况显示提名的谱面审核成员 (BN) 的 <HopeIcon icon="circle-user"/> 头像、<HopeIcon icon="heading"/> 名称以及 UID。
  - 头像左上方的 <HopeIcon icon="circle"/> 圆圈表示玩家所属的 <HopeIcon icon="users"/> 组织。比如，<span style="color:#A347EA">⬤</span> 表明了该玩家是谱面审核成员 (BN)。
- **Guest Mappers**：参与谱面制作的 <HopeIcon icon="user-pen"/> 客串谱师信息。
  - 图片右下方的 <HopeIcon icon="circle"/> 圆圈表示玩家所属的 <HopeIcon icon="users"/> 组织。
- **Tags**：谱面的 <HopeIcon icon="tag"/> 标签。
- **Modding Discussion**：谱面的摸图 <HopeIcon icon="comments"/> 讨论区。
  - 标题右侧显示了 <HopeIcon icon="circle-question"/> 未解决、<HopeIcon icon="circle-exclamation"/> 问题、<HopeIcon icon="circle"/> 建议、<HopeIcon icon="comments"/> 赞的数量，以及谱面被归入的 <HopeIcon icon="box-open"/> 曲包编号和谱面 <HopeIcon icon="comments"/> 大众评分。
  - <HopeIcon icon="circle-question"/> 未解决的讨论会置顶，<HopeIcon icon="circle-check"/> 已解决的讨论文本会变暗。
- **Favorites**：收藏谱面的玩家。
  - 图片右下方的 <HopeIcon icon="circle"/> 圆圈表示玩家所属的 <HopeIcon icon="users"/> 组织。
- **G/L**：<HopeIcon icon="icons"/> 曲风和 <HopeIcon icon="language"/> 语言 (Genre / Language)。

:::

::: tip 提示

!n:b 中的冒号可以省略。因此，如果要通过 BID 查询整张谱面的上架流程，只需要输入 !nb [BID]。

:::

## <HopeIcon icon="book-bookmark"/> 6 查询谱面技巧 !ymmapminus (!mm) {id=mapminus}

::: tip 提示

Map Minus 已更新至 v6.1 版本。这个版本重构了算法，相比于 v4 更加健壮。

:::

**使用方法**

!ymmapminus / mm (**`:`游戏模式**) [**谱面编号**] (**`+`模组名称**) (**`x`倍速**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：**目前没有效果。** 只支持 Mania 模式的谱面。
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要查询的谱面编号 (BID)。
- **<HopeIcon icon="music"/> 模组名称**：模组的简称，通常为两位大写字母组成。可以无空格地输入多个 <HopeIcon icon="music"/> 模组。
  - 一般只有倍速模组才会生效。

- **<HopeIcon icon="forward-fast"/> 倍速**：如果你想自定义倍速并用来计算，可以在此输入。
  - 支持的倍速范围为：0.1x ~ 5x。
  - 前面的 `x` 可以忽略。

![谱面 Minus 面板，指令：!mm 3281146。这个结果很好地表现了这张谱面含有过于困难的叠键](https://yumemuzi.s-ul.eu/yumu/jKjRsOyL)

::: details 各项参数详解

- <span style="color:#22AC38">⬤</span> RC：Rice，米参数主要指明了谱面内，以**单点音符**为主的排列的数量和密度。
  - 参数主要受谱面内的**切换** `Stream` 难度、**裤衩** `Bracket` 难度、**叠键** `Jack` 难度影响。
    - 如果单点音符之后短时间内没有音符，但左侧轨道**或**右侧轨道短时间内有音符，则会记录它的切换难度。
    - 如果任意音符其后短时间内没有音符，但左右两侧短时间内**都有**音符，则会记录它的裤衩难度。
    - 如果单点音符后存在任何音符，则会记录它的叠键难度。
- <span style="color:#FF9800">⬤</span> ST：Stamina，耐力参数主要指明了谱面内，需要玩家**长时间处理**的物件数量和密度。
  - 参数只受谱面内的**疲劳** `Fatigue` 影响。
    - 疲劳只和对应音符段落的密度最大值相关。它的半衰期较长。
- <span style="color:#D32F2F">⬤</span> SP：Speed，速度参数主要指明了谱面内，需要玩家**快速处理**的物件数量和密度。
  - 参数主要受谱面内的**交互** `Trill` 难度、**爆发** `Burst` 难度影响。
    - 如果两个相近的音符分别需要不同手来操作，则会记录它的交互难度。
    - 爆发只和对应音符段落的密度最大值相关。它的半衰期较短。
- <span style="color:#00A0E9">⬤</span> LN：Long Note，面参数主要指明了谱面内，以**长按音符**为主的排列的数量和密度。
  - 参数主要受谱面内的**放手** `Release` 难度、**盾** `Shield` 难度、**反盾** `Reverse Shield` 难度影响。
    - 放手和切换算法类似，但是被记录的对象是长按音符尾。
    - 如果长按音符后紧接着单点音符，则会记录它的盾难度。
    - 如果单点音符后紧接着长按音符，则会记录它的反盾难度（这和叠很像）。
- <span style="color:#FFF100">⬤</span> CO：Coordinate，协调参数主要指明了谱面内，需要玩家**灵活使用多指**的排列的数量和密度。
  - 参数主要受谱面内的**锁手** `Hand Lock` 难度、**重叠** `Overlap` 难度影响。
    - 如果单点音符附近的轨道有持续按压的长按音符，则会记录它的锁手难度。
    - 如果长按音符与附近的轨道的长按音符可能互相重叠，则会记录它的重叠难度。
      - 重叠难度取自于 (面尾差值 × 面头差值 × 覆盖时间) 开三次方。
      - 因此，如果两个长按音符头相接、尾相接、或是几乎不重叠时，重叠难度会大幅度降低。
- <span style="color:#9922EE">⬤</span> PR：Precision，彩率参数主要指明了谱面内，玩家**较难抓彩率**的排列的数量和密度。
  - 参数主要受谱面内的**滑键** `Grace` 难度、**延迟面尾** `Delayed Tail` 难度影响。
    - 如果任意音符附近的轨道短时间内有任何音符，则会记录它的滑键难度。
    - 如果任意长按音符尾附近的轨道短时间内有任何长按音符尾，则会记录它的延迟面尾难度。
- <span style="color:#BDBDBD">⬤</span> RF、UJ、RG、JL：谱面的段位预估。
  - 它们各自参考了对应键位模式（4Key、7Key）的常规和长键段位。

- <span style="color:#BDBDBD">⬤</span> OV：Overall，总难度。
  - 公式：OV = 0.6 × 第二大的值 + 0.4 × 第三大的值 + 0.2 × 第四大的值
  - 它们的乘数总和大于 1。这是为了弥补平均化可能带来的，与预期相反的总难度缩水。
- <span style="color:#E4007F">⬤</span> SV：S. Variation，变速参数主要指明了谱面内，**物件可视时间**的变化和极值。
  - 暂未完善。即使完成，变速参数可能也不会计入总难度内。

:::

::: details 反馈

- 目前算法的缺点：
  - **对某些过于难的谱面的段位预测不足。** 
- 如果您发现了该算法还有某些比较离谱的地方，或是某一张谱面算出了非常离谱的值，欢迎将这张谱面或建议反馈给[**开发者**](../about/dev.md)。

:::

## <HopeIcon icon="list-ol"/> 7 查询谱面排行榜 !ymleader (!l) {id=leaderboard}

**使用方法**

!ymleaderboard / l (**l**) (**`:`游戏模式**) (**谱面编号**) (**`#`偏移量或区间**) (**`*`排行榜类型**) (**`+`模组名称**)

- **<HopeIcon icon="l"/> 稳定版排行榜**：如果这里填入了一个 **l**，即可查看仅含稳定版客户端成绩的榜单。
- **<HopeIcon icon="gamepad"/> 游戏模式**：选填，需要在转谱中指定的 <HopeIcon icon="gamepad"/> 游戏模式。
  - 仅限 osu!standard 切换转谱排行榜时使用。
- **<HopeIcon icon="hashtag"/> 谱面编号**：选填。需要查询的谱面编号 (BID)。
  - 如果不输入编号，则默认获取 24 小时内查询过的谱面，或者获取玩家最近成绩的谱面，从而获取这张谱面上的排行榜。
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从头到尾排序中的第几个或是某几个成绩。
  - 可以输入 1~50 之间的整数，输入 2，就是查询排行榜上第二个成绩。
  - 可以输入区间，格式为：最小数`-`最大数，如 1-20。
  - 不输入等效于 1-50。
- **<HopeIcon icon="icons"/> 排行榜类型**：可选择全球榜、国家/地区榜、好友榜。
  - 可以输入 global、country、friend、g、c、f。
  - 不输入默认查询全球排行榜。
- **<HopeIcon icon="music"/> 模组名称**：模组的简称，通常为两位大写字母组成。可以无空格地输入多个 <HopeIcon icon="music"/> 模组。

::: tip 提示

如果要指定模组，则需要您使用链接绑定。

如果要指定榜单类型，则需要您使用链接绑定，并且同时是 osu!supporter。

这个面板设计有参考 fluXis 的榜单界面：

![](https://yumemuzi.s-ul.eu/yumu/qGQ3YCVN)

:::

## <HopeIcon icon="list-ol"/> 8 查询群内谱面排行榜 !ymgroupleaderboard (!l) {id=groupleaderboard}

**使用方法**

!ymgroupleaderboard / gl (**`:`游戏模式**) (**谱面编号**) (**查询条件**)  (**`#`页码**) (**`+`模组名称**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：选填，需要在转谱中指定的 <HopeIcon icon="gamepad"/> 游戏模式。
  - 仅限 osu!standard 切换转谱排行榜时使用。
- **<HopeIcon icon="hashtag"/> 谱面编号**：选填。需要查询的谱面编号 (BID)。
  - 如果不输入编号，则默认获取 24 小时内查询过的谱面，从而获取这张谱面上的排行榜。
- **<HopeIcon icon="filter"/> 查询条件**：请参阅：[<HopeIcon icon="filter"/> 查询条件·成绩查询器](./filter.md#score)
- **<HopeIcon icon="file"/> 页码**：当前所在的页面编号。
  - 不输入默认第一页。一页 50 个结果。
- **<HopeIcon icon="music"/> 模组名称**：模组的简称，通常为两位大写字母组成。可以无空格地输入多个 <HopeIcon icon="music"/> 模组。

::: tip 提示

只会返回数据库中记录的成绩。

如果想要让数据库记下你很久之前的成绩，可以使用 !s 来记录。

这个榜单中，所有失败成绩会排在最后面。

:::

## ~~<HopeIcon icon="book-bookmark"/> 9 查询课题 !ymcourse (!co)~~ {id=course}

::: info 备注

暂未开放

:::

## ~~<HopeIcon icon="chart-line"/> 10 查询段位单曲 !ymdanacc (!da)~~ {id=danacc}

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

## <HopeIcon icon="file-arrow-up"/> 11 获取谱面完整背景 !ymgetbackground (!gb) {id=getbg}

通过镜像站，获取谱面难度的背景。

**使用方法**

!ymgetbackground / gb [**谱面编号**]

- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要获取背景的谱面编号 (BID)。

::: tip 提示

如果想要大批量获取背景，最好还是使用 !gc 功能。

:::

## <HopeIcon icon="file-arrow-up"/> 12 获取谱面背景 !ymgetcover (!gc) {id=getcover}

获取 ppy API 提供的谱面背景。这个背景可以用于绘制表格，或者其他。

效果等同于获取 **https://assets.ppy.sh/beatmaps/0/covers/cover.jpg**

**使用方法**

!ymgetcover / gc [**谱面集编号**]

- **<HopeIcon icon="image"/> 类别**：需要获取的背景类别。
  - 可以输入的类别：cover, cover@2x, list, list@2x, card, card@2x, silmcover, silmcover@2x, raw。
  - 或 c, c2, l, l2, d, d2, s, s2, r。
  - 如不填写，默认 cover。
- **<HopeIcon icon="hashtag"/> 谱面集编号**：必填，需要获取背景的谱面集编号 (SID)。
  - 可以按逗号分隔，来同时查询多张谱面的背景。

::: tip 提示

raw 类型并非谱面难度当前的背景，而是谱面集的背景。因此，如果谱面难度的背景与谱面集的背景不一致时，想要获取它们，需要分别使用 !gb (sid) 和 !gc:r (sid) 获取。

:::

## <HopeIcon icon="file-arrow-up"/> 13 刷新谱面文件 !ymrefreshfile (!rf) {id=refreshfile}

::: tip 提示

以下例子中显示的谱面缓存和星数 bug 已经修复。

如非必要，您不需要使用这个功能。

:::

部分机器人缓存的谱面文件可能因为部分不可控原因，导致用于计算 PP 或是星数的谱面文件不完整或已过时。此时可以使用此命令来快速更新谱面文件到官网最新的版本。

**使用方法**

!ymrefreshfile / rf [**谱面编号**]

- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要更新的谱面编号 (BID)。

![将过时的谱面更新至服务器最新的版本](https://yumemuzi.s-ul.eu/yumu/MKFWV5p3)
