---
title: 舞萌 & 中二指令
icon: spinner
order: 10
date: 2025-03-17
category: 指令
tag:
  - 指令
  - maimai
  - SEGA
  - 舞萌
  - 舞萌DX
  - chunithm
  - 中二节奏
sticky: false
star: false
footer: Yumu Docs - 舞萌 & 中二指令
copyright: false
---

::: info 备注

所有玩家数据均由==水鱼 (divingfish)== 提供。

部分歌曲信息和歌曲外号数据由==落雪咖啡屋 (Lxns-Network)== 提供。

请参阅：[**divingfish**](https://www.diving-fish.com/maimaidx/prober/#Tutorial)、[**Lxns-Network**](https://maimai.lxns.net/docs)

:::

## <HopeIcon icon="wand-magic-sparkles"/> 1 查询舞萌最好成绩 !ymmaimaibest (!x) {id=maibest}

这个功能可以查询到玩家最好成绩榜（b50）上的成绩。

**使用方法**

!ymmaimaibest / mai / mb / x (**玩家名**) (**`#`偏移量或区间**)

- **<HopeIcon icon="address-card"/> 玩家名**：需要查询的玩家名称。留空默认使用发送者的 QQ 查询。
  - 这里的玩家名是玩家在[==水鱼官网==](https://www.diving-fish.com/maimaidx/prober/)上的账号名。
    - 可以输入特殊字符或中文（如果玩家名内有）。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
    - 如果您查询自己的成绩时显示未绑定，则可以前往[==水鱼官网==](https://www.diving-fish.com/maimaidx/prober/)，登录，点击右上角的 `编辑个人资料` ，最后在 `绑定 QQ` 段落填写自己的 QQ。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@某S氏。
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从头到尾排序中的第几个或是某几个成绩。
  - 可以输入 1~50 之间的整数，输入 2 就是查询第二个最好成绩。
  - 如果不输入任何参数，即可获取玩家的 50 个最好成绩（等价于其他同类机器人的 b50 功能）。
  - 1~35 为过去版本中的前 35 个最好成绩 (b35)，36-50 为最新版本中的前 15 个最好成绩 (b15)。
  - 可以输入区间，格式为：最小数`-`最大数，如 1-20。


![舞萌最好成绩面板，指令：!mai crystalnanami](https://yumemuzi.s-ul.eu/yumu/EYJReQQd)

::: tip 提示

如果不输入玩家名称（查询自己的成绩），那么偏移量前的 `#` 号可以忽略。

如果查询的玩家名称末尾含有**空格**和小于 100 的**纯数字**的玩家，如 **maiplayer 12**，建议在其后添加偏移参数 (**`#...`**)，便于区分。

:::

## <HopeIcon icon="layer-group"/> 2 按版本查询舞萌成绩 !ymmaimaiversion (!mv) {id=version}

::: info 备注

这个功能即将重构，将变为查询舞萌牌子（将牌、神牌、舞舞牌）的功能。

相应地，这个功能能通过 !ms v=... 来调用。

:::

这个功能可以查询到玩家在某个版本内的歌曲上的成绩。

**使用方法**

!ymmaimaiversion / mv (**玩家名**) (**`#`版本号**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
- **<HopeIcon icon="coins"/> 版本号**：可输入版本号的英文全称，以及两字母简称、三字母简称、小版本号（不带前面的 `v`）。
  - 举例：想要查询 `maimai でらっくす Splash PLUS` 版本的成绩，可以输入：`splashplus`、`splash plus`、`spl+`、`splash+`、`spp`、`1.1`、`1.10`。
  - 如果不输入任何参数，即可获取玩家在国服最新版本内的最好成绩。
  - 其他版本号的缩写格式类似。请参见下表：**版本号对应表**。
  - 可输入多个版本（建议最多 5 个）。
  - 版本号之间可通过逗号 `,`、冒号 `:`、或号 `|` 分隔开。

::: details 版本号对应表

查询的字段可输入版本简称，版本号，或是版本全称中（除了初代）剔除掉 maimai 之后，剩下的字段。

目前国服版本位于 `maimai でらっくす PRiSM` (`舞萌DX 2025`)，日服版本位于 `maimai でらっくす CiRCLE`。

| 版本全称 | 代号 | 简称 | 版本号 |
| :-: | :-: | :-: | :-: |
| maimai | 初[^1] | m, mi, mai | 0.1 |
| maimai PLUS | 真 | m+, pl, pls, mi+, mai+ | 0.15 |
| maimai GreeN | 超 | g, gr, gre, grn | 0.2 |
| maimai GreeN PLUS | 檄 | g+, gr+, gre+, grn+ | 0.25 |
| maimai ORANGE | 橙 | o, or, org | 0.3 |
| maimai ORANGE PLUS | 暁 | o+, or+, org+ | 0.35 |
| maimai PiNK | 桃 | p, pk, pnk | 0.4 |
| maimai PiNK PLUS | 櫻 | p+, pk+, pnk+ | 0.45 |
| maimai MURASAKi | 紫 | k, ms, msk | 0.5 |
| maimai MURASAKi PLUS | 堇 | k+, ms+, msk+ | 0.55 |
| maimai MiLK | 白 | l, mk, mlk | 0.6 |
| MiLK PLUS | 雪 | l+, mk+, mlk+ | 0.65 |
| maimai FiNALE | 輝 | n, fn, fnl | 0.7 |
| ALL FiNALE[^2] | 舞 | n+, afn, fn+ | 0.75 |
| maimai でらっくす | 熊 | d, dx, dlx, 2020 | 1.0 |
| maimai でらっくす PLUS[^3] | 華 | d+, dx+, dlx+ | 1.05 |
| maimai でらっくす Splash | 爽 | s, sp, spl, 2021 | 1.1 |
| maimai でらっくす Splash PLUS[^3] | 煌 | s+, sp+, spl+ | 1.15 |
| maimai でらっくす UNiVERSE | 星 | u, un, uv, unv, 2022 | 1.2 |
| maimai でらっくす UNiVERSE PLUS[^3] | 宙 | u+, un+, uv+, unv+ | 1.25 |
| maimai でらっくす FESTiVAL | 祭 | f, fs, fes, 2023 | 1.3 |
| maimai でらっくす FESTiVAL PLUS[^3] | 祝 | f+, fs+, fes+ | 1.35 |
| maimai でらっくす BUDDiES | 双 | b, bd, bud, 2024 | 1.4 |
| maimai でらっくす BUDDiES PLUS[^3] | 宴 | b+, bd+, bud+ | 1.45 |
| maimai でらっくす PRiSM | 鏡 | r, pr, pri, prs, 2025 | 1.5 |
| maimai でらっくす PRiSM PLUS[^3][^4] | 彩 | r+, pr+, pri+, prs+ | 1.55 |
| maimai でらっくす CiRCLE[^4] |  | c, ci, cr, cc, cir, cle, 2026 | 1.6 |
| maimai でらっくす CiRCLE PLUS[^3][^4][^5] |  | c+, ci+, cr+, cc+, cir+, cle+ | 1.65 |

:::

::: tip 提示

如果不输入玩家名称（查询自己的成绩），那么版本前的 `#` 号可以忽略。

如果查询的玩家名称与以上可能出现的版本号缩写同名，如 **splash**，建议在其后添加版本参数 (**`#...`**)，便于区分。

:::

## <HopeIcon icon="magnifying-glass"/> 3 查询舞萌歌曲成绩 !ymmaimaiscore (!ms) {id=maiscore}

这个功能可以按歌曲名或歌曲编号，查询到玩家在特定歌曲内的成绩（以及歌曲音符信息）。

**使用方法**

!ymmaimaiscore / ms (**玩家名**) (**(**框体类型**)歌曲名称 / 歌曲编号 / 定数或范围**) (**查询条件**) (**`#`页码**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
- **<HopeIcon icon="rainbow"/> 乐谱类型**：在输入歌曲名称时，允许按乐谱类型查询。
  - 支持输入标准（SD、standard）、豪华（DX、deluxe）。留空默认按歌曲支持的乐谱类型查询。
  - 如果有多个乐谱，则会按查询玩家的最高评分 (DX rating) 成绩所属的乐谱种类查询。
- **<HopeIcon icon="address-card"/> 歌曲名称**：三选一填，需要查询的歌曲名。
  - 支持输入简中社区常用的外号（俗称）。	
    - 外号库来自[这里](https://maimai.lxns.net/alias/vote)。
  - 支持输入日文汉字，以及平假名片假名的罗马字。
  - **不支持**输入日本汉字的罗马字；以及日式英文所对应的原单词。
  - 部分特殊符号允许全角以及半角输入。
  - 比如：需要查询 **幻想のサテライト** 这首歌的信息，
    - 您可以尝试：幻想的卫星、幻想、サテライト、sateraito、10319、319。
    - 不能输入：banshou、satellite。
- **<HopeIcon icon="hashtag"/> 歌曲编号**：三选一填，需要查询的歌曲编号 (SongID)。
  - 如果歌曲编号在 1-15 之间，则会被识别为定数范围。
- **<HopeIcon icon="star"/> 定数或范围**：三选一填，需要查询的成绩定数或范围（难度）。
  - 可以输入 1-15 之间的数。
    - 如果您输入的是整数（或是整数后面带 `+` 号），则会按模糊定级处理（与机台一致）：
      - 12：12.0-12.5
      - 13+：13.6-13.9
    - 如果输入了一位小数，则会按精确定级处理。
      - 12.0：12.0 （不包括 12.1-12.5）
    - 如果输入了两个中间由连字符相连的数字，则会按范围处理。
      - 12-12.4：12.0-12.4
      - 13.4-13+：13.4-13.9（带 `+` 号不管怎么样都会被等价为 .6-.9，这里取最大值） 
- **<HopeIcon icon="filter"/> 查询条件**：请参阅：[<HopeIcon icon="filter"/> 查询条件·舞萌成绩查询器](./filter.md#maimai)
- **<HopeIcon icon="file"/> 页码**：当前所在的页面编号。
  - 不输入默认第一页。一页 50 个结果。

::: tip 提示

歌曲所属的乐谱类型可以通过观察左上角的歌曲 ID 来推算。

- 如果是不含括号，且大于 10000 的值，则只有 DX 乐谱。
- 如果是不含括号，且小于 1000 的值，则只有 SD 乐谱。
- 如果前面含有括号括起来的 10（比如 `(10)242`），则两个乐谱都包含，并且先有 SD 乐谱，后有 DX 乐谱（DX 是追加）。
- 如果前面含有括号括起来的 1（比如 `(1)1301`），则两个乐谱都包含，并且先有 DX 乐谱，后有 SD 乐谱（标准是追加）。

:::

## <HopeIcon icon="music"/> 4 查询舞萌歌曲 !ymmaimaifind (!mf) {id=maifind}

这个功能可以按版本和难度筛选谱面。

结果会按歌曲编号除以 10000 的余数来降序排布（新歌在上面）。

**使用方法**

!ymmaimaifind / mf (`:`**难度**) (**定数或范围**) (**查询条件**) (`#`**页码**)

- **<HopeIcon icon="arrows-to-dot"/> 难度**：谱面难度。
  - 可以输入 0-5，或是难度的全称、中文名称、三字母简称、二字母简称、首字母。
    - 如：筛选 EXPERT 谱面，可以输入：2、exp、expert、e、红、专家。
    - 可以按逗号分隔输入多个难度。
- **<HopeIcon icon="star"/> 定数或范围**：需要查询的谱面定数或范围（难度）。同上。
- **<HopeIcon icon="filter"/> 查询条件**：请参阅：[<HopeIcon icon="filter"/> 查询条件·舞萌歌曲查询器](./filter.md#maisong)
  - 如果输入了多个相同的查询条件，会按它们的并集返回。
  - 如果输入了多个不同的查询条件，会按它们的交集返回。

- **<HopeIcon icon="file"/> 页码**：当前所在的页面编号。
  - 不输入默认第一页。一页 48 个结果。

![查询舞萌歌曲面板，指令：!mf c=沙发太](https://yumemuzi.s-ul.eu/yumu/izjGtzBH)

::: details 难度对应表

查询的字段可输入难度简称，难度全称，难度中文名，难度颜色。

| 编号 | 难度全称 | 中文名 | 简称 | 颜色 |
| :-: | :-: | :-: | :-: | :-: |
| 1 | BASIC | 初级 | BSC、B | 绿、<span style="color:#22AC38">⬤</span> |
| 2 | ADVANCED | 高级 | ADV、A | 黄、<span style="color:#FFF100">⬤</span> |
| 3 | EXPERT | 专家 | EXP、E | 红、<span style="color:#D32F2F">⬤</span> |
| 4 | MASTER | 大师 | MAS、M | 紫、<span style="color:#9922EE">⬤</span> |
| 5 | Re: MASTER | 宗师 | REM、R | 白、<span style="color:#DDD">⬤</span> |
| 6 | U☆TA☆GE | 宴会场 | UTA，U | - |

:::

## <HopeIcon icon="thumbs-up"/> 5 查询舞萌全连或完美成绩 !ymmaifilter (!xc/!xp) {id=maifilter}

这个功能可以查询到玩家全连或是完美的成绩。

**使用方法**

!ymmaimaifullcombo (!maifc / !xc) / !ymmaimaiallperfect (!maiap / !xp) / (**玩家名**) (**`#`页码**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
- **<HopeIcon icon="file"/> 页码**：当前所在的页面编号。
  - 不输入默认第一页。一页 50 个结果。

## <HopeIcon icon="keyboard"/> 6 查询中二最好成绩 !ymmaimaibest (!y) {id=chubest}

这个功能可以查询到玩家最好成绩榜（b30+r10）上的成绩。

**使用方法**

!ymchunithmbest / chu / cb / y (**玩家名**) (**`#`偏移量或区间**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从头到尾排序中的第几个或是某几个成绩。
  - 可以输入 1~50 之间的整数，输入 2 就是查询第二个最好成绩。
  - 如果不输入任何参数，即可获取玩家的 30 个最好成绩和 10 个最近成绩（等价于其他同类机器人的 b40 功能）。
  - 1~30 为你的前 30 个最好成绩 (b30)，31-40 为你最近 10 次的成绩（有算法计算，可重复获取）(r10)。
  - 可以输入区间，格式为：最小数`-`最大数，如 1-20。

::: tip 提示

如果不输入玩家名称（查询自己的成绩），那么偏移量前的 `#` 号可以忽略。

如果查询的玩家名称末尾含有**空格**和小于 100 的**纯数字**的玩家，如 **chuplayer 12**，建议在其后添加偏移参数 (**`#...`**)，便于区分。

:::

## <HopeIcon icon="magnifying-glass"/> 7 查询水鱼玩家 !ymmaimaiseek (!mk) {id=maiseek}

这个功能可以搜索注册了水鱼查分器的玩家，并输出可能的玩家名和玩家评级 (DX Rating)。

**使用方法**

!ymmaimaiseek / mk (**玩家名|玩家评分**)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
- **<HopeIcon icon="address-card"/> 玩家评级**：如果输入的是数字，则会返回评级绝对值最接近的 15 个玩家。

## 备注

[^1]: 实际上，最初始的版本和 `maimai PLUS` 版本同归属于`真`代。但是为了区分曲库，这里使用`初`作为版本代号。
[^2]: 这个版本指的是包括 `FiNALE` 版本之前的所有歌曲。实际上并不指代特定的游戏框体。
[^3]: 当前国服的命名规则是”舞萌DX“+推出的年份，因此在按版本查询成绩的方法中，无法查询到这几个 PLUS 版本的成绩（都囊括在非 PLUS 版本中了）
[^4]: 目前国服并没有这个版本的歌曲。
[^5]: 该名称为推测名称。