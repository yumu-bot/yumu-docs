---
title: 比赛指令
icon: handshake-simple
order: 7
date: 2023-08-30
category:
  - 指令
tag:
  - 指令
  - osu!
  - osu
  - tournament
  - 比赛
  - 锦标赛
sticky: false
star: false
footer: Yumu Docs - 比赛指令
copyright: false
---

# 比赛指令

![比赛指令列表](https://yumemuzi.s-ul.eu/yumu/zCUiDQia)

## ~~<HopeIcon icon="elevator"/> 1 查询比赛信息 !ymmatch (!ma)~~ {id=match}

::: info 备注

暂未开放

:::

## <HopeIcon icon="scale-balanced"/> 2 查询比赛斗力（评分） !ymrating (!ra) {id=rating}

通过分析比赛所有对局，来给玩家赋予一个斗力（表现评分）。

**使用方法**

!ymrating / ra [**比赛编号**] (**跳过开头**) (**忽略结尾**) (**f**) (**r**)

- **<HopeIcon icon="hashtag"/> 比赛编号**：必填，需要查询的比赛编号 (MATCHID)。
  - 获取方法：进入房间，点击 #multiplayer 下，BanchoBot 发送的第一条消息中的蓝色 here。之后，在弹出的网站内找到网站链接末尾的数字，即比赛编号 (MATCHID)。
- **<HopeIcon icon="forward"/> 跳过开头**：需要跳过的开头对局数量。这适用于比赛含有**热手**等不需要统计玩家表现的开头对局。
    - 如不填写，默认为 0。想要输入忽略结尾的参数时，也可输入 0 来占位。
- **<HopeIcon icon="rotate-left"/> 忽略结尾**：需要忽略的结尾对局数量。这适用于比赛含有**决胜局表演或娱乐局**等不需要统计玩家表现的结尾对局。
    - 如不填写，默认为 0。
- **<HopeIcon icon="person-falling"/> f**：如果填入 f，则表示忽略玩家的失败成绩。
    - 如不填写，默认统计玩家的失败成绩。
- **<HopeIcon icon="slash"/> r**：如果填入 r，则表示忽略重复的对局，只保留靠后的那一场。
    - 如不填写，默认统计重复的对局。

![获取比赛编号](https://yumemuzi.s-ul.eu/yumu/zSFydj9w)

![比赛斗力面板，指令：!ra 110482088 1](https://yumemuzi.s-ul.eu/yumu/RjDOFPvP)

**内容解析**

::: details 内容解析

- **左上角的比赛信息卡片**：
  - 卡片左上角是比赛的 <HopeIcon icon="heading"/> 房间标题。
  - 卡片左下角依次是 <HopeIcon icon="hashtag"/> 对局数量、<HopeIcon icon="clock"/> 比赛时间区间以及 <HopeIcon icon="calendar"/> 比赛日期。
  - 卡片右下角依次是比赛 <HopeIcon icon="star"/> 平均星数、<HopeIcon icon="hashtag"/> 比赛编号以及 <HopeIcon icon="clipboard"/> 计分板。
- **玩家个人信息卡片**：
  - 卡片左侧是玩家的 <HopeIcon icon="palette"/> 队伍颜色和 <HopeIcon icon="circle-user"/> 头像。
  - 卡片中间靠左依次是玩家的 <HopeIcon icon="heading"/> 昵称、<HopeIcon icon="person-rays"/> 比赛总分（总输出）、<HopeIcon icon="chess-king"/> 胜负和胜率、<HopeIcon icon="user-plus"/> 玩家评分排名和 <HopeIcon icon="wave-square"/> RWS。
    - RWS 指 <HopeIcon icon="wave-square"/> 平均胜利分配，即为了所属队伍的**胜利**做出了多少贡献。有时候玩家评分很高，但不一定很有用。想要了解更多，请参考 <HopeIcon icon="link"/> [这里](https://baijiahao.baidu.com/s?id=1724882889457381886&wfr=spider&for=pc)。
  - 卡片中间靠右是 <HopeIcon icon="tags"/> 玩家类型和 <HopeIcon icon="sun"/> 玩家评分。
    - 玩家类型：见下。
    - 玩家评分：只需要记住：==平均分是 **1** 分，毫无参与感的玩家是 **0** 分。==

:::

::: details 玩家类型详解

在 MRA v1.2 中，玩家被分为 11 个基础类型。

| 总分/均分 | 高 | 中 | 低 |
|:-:|:-:|:-:|:-:|
| 高 | <span style="color:#FF9800">⬤</span> 大哥 | <span style="color:#0068B7">⬤</span> 打工 | <span style="color:#9922EE">⬤</span> 抗压 |
| 中 | <span style="color:#22AC38">⬤</span> 主力 | <span style="color:#BDBDBD">⬤</span> 普通 | <span style="color:#E4007F">⬤</span> 背锅 |
| 低 | <span style="color:#92D050">⬤</span> 专精 | <span style="color:#00A0E9">⬤</span> 客串 | <span style="color:#EB6877">⬤</span> 小弟 |

总分最靠前、均分最靠前的 <span style="color:#FF9800">⬤</span> 大哥即 <span style="color:#FFF100">⬤</span> 大爹，总分最靠后、均分最靠后的 <span style="color:#EB6877">⬤</span> 小弟即 <span style="color:#D32F2F">⬤</span> 炮灰。

- <span style="color:#FFF100">⬤</span> 大爹：强。
- <span style="color:#FF9800">⬤</span> 大哥：均分高，总分高。不管输赢与否，已经把自己的实力完全发挥出来了。是队伍的主心骨。
- <span style="color:#22AC38">⬤</span> 主力：均分高，总分中。上场相比于大哥稍微低了点，但在大部分对局中，仍旧能够撑起场面。
- <span style="color:#92D050">⬤</span> 专精：均分高，总分低。能在自己擅长的谱面上发挥较好的玩家，能够打对手一个措手不及，拿下关键对局。
- <span style="color:#0068B7">⬤</span> 打工：均分中，总分高。发挥尚可的全能玩家，通常会去填补阵容中的空缺位置。如果赢下了对局，那就是值得的。否则，等同于打白工。
- <span style="color:#BDBDBD">⬤</span> 普通：均分中，总分中。代表了这一场比赛的平均水平。如果最后他们的总评分约等于 1.0，那就是纯正的比赛质检员了。
- <span style="color:#00A0E9">⬤</span> 客串：均分中，总分低。偶尔上场的玩家，至少打出来的分数达到了平均分。
- <span style="color:#9922EE">⬤</span> 抗压：均分低，总分高。非常罕见的类型。可以说，他们是真正的“全面型玩家”，但什么都会，也可能等于什么都不精通。
- <span style="color:#E4007F">⬤</span> 背锅：均分低，总分中。赢了和他们没关系，输了都怪他们。
- <span style="color:#EB6877">⬤</span> 小弟：均分低，总分低。不属于这个分段的玩家，也可能是没发挥出来，手感不好。
- <span style="color:#D32F2F">⬤</span> 炮灰：菜。

在 MRA v3.4 中，根据贡献 (RWS)，玩家被更加细致地分为 33 个扩展类型，力求给玩家最精准的评价。

| 玩家类型/RWS | ✔️贡献高 | ➖贡献中 | ❌贡献低 |
|:-:|:-:|:-:|:-:|
| <span style="color:#FFF100">⬤</span> 大爹 | 最强元帅 | 称职元帅 | 不屈元帅 |
| <span style="color:#FF9800">⬤</span> 大哥 | 常胜将军 | 勤奋将军 | 尽力将军 |
| <span style="color:#22AC38">⬤</span> 主力 | 突破主力 | 可靠主力 | 坚守主力 |
| <span style="color:#92D050">⬤</span> 专精 | 精锐刺客 | 普通刺客 | 冒牌刺客 |
| <span style="color:#0068B7">⬤</span> 打工 | 金领工人 | 白领工人 | 蓝领工人 |
| <span style="color:#BDBDBD">⬤</span> 普通 | 关键人 | 普通人 | 路人甲 |
| <span style="color:#00A0E9">⬤</span> 客串 | 主要角色 | 次要角色 | 群众演员 |
| <span style="color:#9922EE">⬤</span> 抗压 | 稳如泰山 | 坚若磐石 | 伤痕累累 |
| <span style="color:#E4007F">⬤</span> 背锅 | 上等忍者 | 普通忍者 | 不入流 |
| <span style="color:#EB6877">⬤</span> 小弟 | 幸运儿 | 合格学徒 | 初学者 |
| <span style="color:#D32F2F">⬤</span> 炮灰 | 救命稻草 | 点点星火 | 湮灭尘埃 |

:::

::: tip 提示

使用 !ura 可以获取文字版消息。

:::

::: warning 注意

使用 !cra 可以获取逗号分隔文件 (csv)，可以被 Excel 系列软件读取。

使用 !crx/!crs 可以获取另一个格式的逗号分隔文件 (csv)，并且可以输入多场比赛。

只有管理员或群主可以使用此功能。

:::

## <HopeIcon icon="scale-balanced"/> 3 查询系列比赛斗力（评分） !ymseries (!sa) {id=series}

通过分析一系列比赛的所有对局，来给玩家赋予一个斗力（表现评分）。

**使用方法**

!ymseries / sa (`#`**比赛名称**`#`) [[**比赛编号**] (**跳过开头**) (**忽略结尾**)]... (**f**) (**r**)

- **<HopeIcon icon="address-card"/> 比赛名称**：选填，这个名字将展现在左上角的卡片中。不填默认显示第一场比赛的名称。
- **<HopeIcon icon="hashtag"/> 比赛编号**：同上，必填，需要查询的比赛编号 (MATCHID)。
- **<HopeIcon icon="forward"/> 跳过开头**：同上，选填，需要跳过的开头对局数量。
  - 如不填写，默认为 0。想要输入忽略结尾的参数时，也可输入 0 来占位。
- **<HopeIcon icon="rotate-left"/> 忽略结尾**：同上，选填，需要忽略的结尾对局数量。
  - 如不填写，默认为 0。
- **<HopeIcon icon="person-falling"/> f**：如果填入 f，则表示忽略玩家的失败成绩。
  - 如不填写，默认统计玩家的失败成绩。
- **<HopeIcon icon="slash"/> r**：如果填入 r，则表示忽略重复的对局，只保留靠后的那一场。
  - 如不填写，默认统计重复的对局。

::: tip 提示

需要按组输入 <HopeIcon icon="hashtag"/> 比赛编号、<HopeIcon icon="forward"/> 跳过开头和 <HopeIcon icon="rotate-left"/> 忽略结尾参数。当然，也可以不输入（默认为 0）。

举例：

- !sa 114514 0 0 1919810 0 1

合法，效果等同于 !ra 114514 0 0 + !ra 1919810 0 1 合起来统计的比赛斗力（评分）。

- !sa 114514 1919810 0 1 7355608 1 2147483647 2 r

照样合法，等同于 !ra 114514 0 0 r + !ra 1919810 0 1 r + !ra 7355608 1 0 r + !ra 2147483647 2 0 r。

f 和 r 参数是全局性的，它们会作用到这一系列赛的==所有比赛==中。

使用 !usa 可以获取文字版消息。但不推荐（因为会刷屏）。

:::

::: warning 注意

使用 !csa 可以获取逗号分隔的文件 (csv)，可以被 Excel 系列软件读取。

只有管理员或群主可以使用此功能。

:::

## <HopeIcon icon="house-chimney-user"/> 4 查看比赛房间信息 !ymmonitornow (!mn) {id=monitornow}

输出一张比赛房间内的情况图。

**使用方法**

!ymmonitornow / mn [**比赛编号**] (**跳过开头**) (**忽略结尾**) (**f**) (**r**)

- **<HopeIcon icon="hashtag"/> 比赛编号**：同上。
- **<HopeIcon icon="forward"/> 跳过开头**：同上。
- **<HopeIcon icon="rotate-left"/> 忽略结尾**：同上。
- **<HopeIcon icon="person-falling"/> f**：如果填入 f，则表示忽略玩家的失败成绩。
  - 如不填写，默认统计玩家的失败成绩。
- **<HopeIcon icon="slash"/> r**：如果填入 r，则表示忽略重复的对局，只保留靠后的那一场。
  - 如不填写，默认统计重复的对局。

::: tip 提示

此功能的参数和 ra 完全一致。记住一个即可。

:::

## <HopeIcon icon="chalkboard-user"/> 5 查看比赛对局信息 !ymmatchround (!ro) {id=round}

输出一张比赛房间内的某场对局图。

**使用方法**

!ymmatchround / !ro [**比赛编号**] (**对局位置**) (**关键字**)

- **<HopeIcon icon="hashtag"/> 比赛编号**：同上。
- **<HopeIcon icon="location-dot"/> 对局位置**：需要查询的对局场次位置。
  - 可以输入一个整数。输入 2 就是从开始算起第二局。
- **<HopeIcon icon="key"/> 关键字**：如果不知道具体的对局位置，可以忽略，并填写关键字的字段。
  - 关键字查询范围：谱面的歌曲名称（罗马音）、艺术家名称（罗马音）、谱师名称、难度名称。
  - 如果关键字是很小的数字，则会被匹配进对局位置中。请注意。

![对局信息面板，指令：!ro 59438351 back to marie](https://yumemuzi.s-ul.eu/yumu/TYkc5KSn)

## <HopeIcon icon="solar-panel"/> 6 展示图池 !ymmappool (!po) {id=pool}

根据输入的模组名称和谱面编号，输出一张可供比赛使用的图池，方便选手查阅。

**使用方法**

!ymmappool / !po (`#`**比赛名称**`#`) [[**模组**] [**谱面编号**]]...

- **<HopeIcon icon="address-card"/> 比赛名称**：选填，这个名字将展现在左上角的卡片中。
- **<HopeIcon icon="music"/> 模组**：同上，必填，模组池。
  - 必须为两个大写字母。
  - 如果模组池的模组会改变 <HopeIcon icon="star"/> 星数（比如 DT），则谱面的 <HopeIcon icon="star"/> 星数等属性会自动随之更改。
  - 必须输入在谱面编号之前。且之后必须至少跟随 1 个谱面编号。
- **<HopeIcon icon="hashtag"/> 谱面编号**：同上，必填，输入的谱面 (BID)。

![图池面板，指令：!po #AMYC S1 R2# NM 2903091 3546768 2326008 2739707 1070127 3170093 HD 1674334 2559128 DT 4120379 3837021 3419522 2455022 FM 3007015 2938842 3417617 TB](https://yumemuzi.s-ul.eu/yumu/nbzwGBWv)

::: info 备注

功能暂不完整。

:::
