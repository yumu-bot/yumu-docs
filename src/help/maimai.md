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

目前国服版本位于 `maimai でらっくす BUDDiES`，日服版本位于 `maimai でらっくす PRiSM PLUS`。

| 版本全称 | 代号 | 简称 | 版本号 |
| :-: | :-: | :-: | :-: |
| maimai | 初[^1] | mi, mai | 0.1 |
| maimai PLUS | 真 | pl, pls, mi+, mai+ | 0.15 |
| maimai GreeN | 超 | gr, gre, grn | 0.2 |
| maimai GreeN PLUS | 檄 | gr+, gre+, grn+ | 0.25 |
| maimai ORANGE | 橙 | or, org | 0.3 |
| maimai ORANGE PLUS | 暁 | or+, org+ | 0.35 |
| maimai PiNK | 桃 | pk, pnk | 0.4 |
| maimai PiNK PLUS | 櫻 | pk+, pnk+ | 0.45 |
| maimai MURASAKi | 紫 | ms, msk | 0.5 |
| maimai MURASAKi PLUS | 堇 | ms+, msk+ | 0.55 |
| maimai MiLK | 白 | mk, mlk | 0.6 |
| MiLK PLUS | 雪 | mk+, mlk+ | 0.65 |
| maimai FiNALE | 輝 | fn, fnl | 0.7 |
| ALL FiNALE[^2] | 舞 | afn, fn+ | 0.75 |
| maimai でらっくす | 熊 | dx, dlx | 1.0 |
| maimai でらっくす PLUS | 華 | dx+, dlx+ | 1.05 |
| maimai でらっくす Splash | 爽 | sp, spl | 1.1 |
| maimai でらっくす Splash PLUS | 煌 | sp+, spl+ | 1.15 |
| maimai でらっくす UNiVERSE | 星 | un, uv, unv | 1.2 |
| maimai でらっくす UNiVERSE PLUS | 宙 | un+, uv+, unv+ | 1.25 |
| maimai でらっくす FESTiVAL | 祭 | fs, fes | 1.3 |
| maimai でらっくす FESTiVAL PLUS | 祝 | fs+, fes+ | 1.35 |
| maimai でらっくす BUDDiES | 双 | bd, bud | 1.4 |
| maimai でらっくす BUDDiES PLUS[^3] | 宴 | bd+, bud+ | 1.45 |
| maimai でらっくす PRiSM[^3] | 鏡 | pr, pri, prs | 1.5 |
| maimai でらっくす PRiSM PLUS[^3] |  | pr+, pri+, prs+ | 1.55 |

:::

::: tip 提示

如果不输入玩家名称（查询自己的成绩），那么版本前的 `#` 号可以忽略。

如果查询的玩家名称与以上可能出现的版本号缩写同名，如 **splash**，建议在其后添加版本参数 (**`#...`**)，便于区分。

:::

## <HopeIcon icon="magnifying-glass"/> 3 查询舞萌歌曲成绩 !ymmaimaiscore (!ms) {id=maiscore}

这个功能可以按歌曲名或歌曲编号，查询到玩家在特定歌曲内的成绩（以及歌曲音符信息）。

**使用方法**

!ymmaimaiscore / ms (**查询字段 / 歌曲编号**) (**玩家名**)

- **<HopeIcon icon="address-card"/> 查询字段**：二选一填，需要查询的歌曲名。
  - 支持输入简中社区常用的外号（俗称）。	
    - 外号库来自[这里](https://maimai.lxns.net/alias/vote)。
  - 支持输入日文汉字，以及平假名片假名的罗马字。
  - **不支持**输入日本汉字的罗马字；以及日式英文所对应的原单词。
  - 部分特殊符号允许全角以及半角输入。
  - 比如：需要查询 **幻想のサテライト** 这首歌的信息，
    - 您可以尝试输入：幻想的卫星、幻想、サテライト、sateraito、10319、319。
    - 不能输入：banshou、satellite。
- **<HopeIcon icon="hashtag"/> 歌曲编号**：二选一填，需要查询的歌曲编号 (SongID)。
  - 只能与查询字段二者选其一输入。
  - 如果想要查询的字段正好也是 1-6 位的一串数字，请使用英文引号 `"` 将其包裹起来。
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。

::: info 备注

暂时无法通过输入玩家名来查询别人在某首歌内的成绩。

暂时无法查询同时含有标准（SD）和豪华（DX）版本歌曲的标准歌曲成绩（只能查 DX）。

:::

## <HopeIcon icon="folder-tree"/> 4 筛选舞萌谱面 !ymmaimaifind (!mf) {id=maifind}

这个功能可以按版本和难度筛选谱面。

**使用方法**

!ymmaimaifind / mf (`:`**难度**) (**定数或区间**) (`#`**版本号**) (`*`**DX 分数**)

- **<HopeIcon icon="arrows-to-dot"/> 难度**：谱面难度。
  - 可以输入 0-5，或是难度的全称、中文名称、三字母简称、二字母简称、首字母。
    - 如：筛选 EXPERT 谱面，可以输入：2、exp、expert、e、红、专家。
    - 只能输入一种难度。
- **<HopeIcon icon="ruler-horizontal"/> 定数或区间**：需要限定的谱面定数。
  - 如果输入单一的整数或是带加号的整数，则按模糊定级处理。
    - 13: 13.0（包含）-13.6（不包含），13+: 13.6（包含）-14.0（不包含）
  - 如果输入比较符号，则按以下的逻辑处理。
    - <13: 0.0（包含）-13.0（不包含），>=14: 14.0（包含）-15.0（包含）
  - 如果输入区间，则按以下的逻辑处理。
    - 13-14.7: 13.0（包含）-14.7（包含）
  - 可以同时输入多个定数或区间。
- **<HopeIcon icon="coins"/> 版本号**：同上。
- **<HopeIcon icon="star-half-stroke"/> DX 分数**：需要限定的 DX 分数区间。
  - 将按照输入的分数至输入的分数 +100 的范围查询。如：1000 则查询 1000（包含）-1100（不包含）

![筛选舞萌谱面面板，指令：!mf:u](https://yumemuzi.s-ul.eu/yumu/ZhvQ9LcJ)


::: details 难度对应表

查询的字段可输入难度简称，难度全称，难度中文名，难度颜色。


| 难度全称 | 中文名 | 简称 | 颜色 |
| :-: | :-: | :-: | :-: |
| BASIC | 初级 | BSC、B | 绿、<span style="color:#22AC38">⬤</span> |
| ADVANCED | 高级 | ADV、A | 黄、<span style="color:#FFF100">⬤</span> |
| EXPERT | 专家 | EXP、E | 红、<span style="color:#D32F2F">⬤</span> |
| MASTER | 大师 | MAS、M | 紫、<span style="color:#9922EE">⬤</span> |
| Re: MASTER | 宗师 | REM、R | 白、<span style="color:#DDD">⬤</span> |
| U☆TA☆GE | 宴 | UTA，U | - |

:::

## <HopeIcon icon="keyboard"/> 5 查询中二最好成绩 !ymmaimaibest (!y) {id=chubest}

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

## <HopeIcon icon="magnifying-glass"/> 6 查询水鱼玩家 !ymmaimaiseek (!mk) {id=maiseek}

这个功能可以搜索注册了水鱼查分器的玩家，并输出可能的玩家名和玩家评级 (DX Rating)。

**使用方法**

!ymmaimaiseek / mk (**玩家名|玩家评分**)
- **<HopeIcon icon="address-card"/> 玩家名**：同上。
- **<HopeIcon icon="address-card"/> 玩家评级**：如果输入的是数字，则会返回评级绝对值最接近的 15 个玩家。

## 备注

[^1]: 实际上，最初始的版本和 `maimai PLUS` 版本同归属于`真`代。但是为了区分曲库，这里使用`初`作为版本代号。
[^2]: 这个版本指的是包括 FiNALE 版本之前的所有歌曲。实际上并不指代特定的游戏框体。
[^3]: 目前国服并没有这个版本的歌曲。