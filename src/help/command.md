---
title: 指令列表
icon: play
order: 2
date: 2023-11-02
category:
  - 指令
footer: Yumu Docs - 指令列表
copyright: false
---
# 指令列表

以下的功能，均可在简称或英文名前**添加感叹号**，直接调用。

语法内，中括号 `[]` 为必填（也给你加粗显示了），小括号 `()` 为选填。由 \` 括起来的符号，最好是全填写上。

备注里会填写这个功能的更多介绍，或是另一种常用的指令：比如 !audio 功能，也可以使用 !song 调用。

点击英文名可进入对应功能的详细介绍。

| 功能简称 | 语法 | 功能英文名 | 功能中文名 | 备注 |
| :-: | :-- | :-- | :-- | :-- |
| A | !a(`s`) **[bid/sid]** | [Audio](./map.md/#audio) | 试听谱面 | *即 Song。*<br />!as 按谱面集 ID (**SID**) 查询。 |
| B | !b(`s`) (`:`mode) (user) (`#`num) | [Best Performance](./score.md/#bestperformance) | 查询最好成绩 | *!bs 使用多成绩模式。*<br />**mode**：游戏模式<br />**user**：玩家名，`qq=`qq号，`uid=`玩家 ID<br />**num**：也可输入 `-` 分隔的区间 |
| C | !c (`:`operate) (type) | [Custom](./custom.md) | 自定义 | *可自定义横幅或卡片。*<br />**operate**：操作，比如添加和删除 add/delete<br />**type**：种类，现支持 banner/card |
| D | !d (num) (decision) | [Dice](./fun.md/#dice) | 扔骰子 | *即 Roll。*<br />**decision**：想做的决定，比如去不去玩 |
| E | - | - | - | - |
| F | !f (name) (num) | [Friend](./player.md/#friend) | 查询好友列表 | **num**：也可输入 `-` 分隔的区间 |
| G | - | - | - | - |
| H | !h (category) | [Help](./bot.md/#help) | 获取帮助文档 | *当然不如这里列的全。*<br />**category**：功能的分类，bspmtcfa |
| I | !i (`:`mode) (user) (`#`day) | [Information](./player.md/#info) | 查询玩家信息 | **day**：可与过去几天的信息作比较 |
| J | - | - | - | - |
| K | - | - | - | - |
| L | !l (`:`mode) **[bid]** | [Leader](./map.md/#leader) | 查询谱面排行 | *list，mod 暂无法查询* |
| M | !m (`:`mode) **[bid]** (acc`%`) (`x`combo) (`-`miss) (`+`mod) | [Map](./map.md/#map) | 查询谱面信息 | **acc**：准确率<br />**combo**：连击数，或连击占比 (0-1)<br />**miss**：失误数<br />**mod**：模组名称 |
| N | !n(`b`) **[sid]** | [Nomination](./map.md/#nomination) | 查询上架流程 | *!nb 按谱面 ID (**BID**) 查询。* |
| O | - | - | - | - |
| P | !p (`:`mode) (user) (`#`num) | [Pass](./score.md/#pass) | 查询通过成绩 | *!ps 使用多成绩模式。*<br />**num**：也可输入 `-` 分隔的区间 |
| Q | !q (`:`mode) (`#`status)  (`*`sort) (num) | [Qualified](./map.md/#qualified) | 查询过审列表 | **status**：谱面状态。gwpraql，默认 q<br />**sort**：排序方式，ta(ds)mp(rt) + (asc/desc) |
| R | !r (`:`mode) (user) (`#`num) | [Recent](./score.md/#recent) | 查询最近成绩 | *!rs 使用多成绩模式。*<br />**num**：也可输入 `-` 分隔的区间 |
| S | !s (`:`mode) **[bid]** (user) (`+`mod) | [Score](./score.md/#score) | 查询谱面成绩 | **mod**：模组名称 |
| T | !t (`:`mode) (user) (`#`num) | [Today BP](./score.md/#todaybp) | 查询今日最好成绩 | **num**：也可输入 `-` 分隔的区间 |
| U | - | - | - | - |
| V | - | - | - | - |
| W | - | - | - | - |
| X | !x (user) (`#`num) | [Maimai Best](./maimai.md/#maibest) | 查询舞萌最好成绩 | *使用了水鱼查分器的数据。* |
| Y | !y (user) (`#`num) | [Chunithm Best](./maimai.md/#chubest) | 查询中二节奏最好成绩 | 使用了水鱼查分器的数据。 |
| Z | - | - | - | - |
|  |  |  |  |  |
| BA | !ba (`:`mode) (user) | [BP Analysis](./score.md/#bpanalysis) | 分析最好成绩 | *之前也叫 bpht (bp head tail)。* |
| BF | !bf (`:`mode) (user) | [BP Fix](./score.md/#bpfix) | 修补最好成绩 |  |
| BI | !bi | [Bind](./bot.md/#bind) | 绑定玩家账号 | *绑定时不用输入玩家名。解绑时请使用 !ub，也不用输入玩家名。* |
| GI | !gi (users) | [Get ID](./player.md/#getid) | 获取玩家 ID | *仅管理员或群主使用。* |
| GN | !gn (ids) | [Get Name](./player.md/#getname) | 获取玩家名称 | *仅管理员或群主使用。* |
| GP | !gp (`:`mode) (`#`name`#`) [[mod] [bids]] | [Get Pool](./tournament.md/#getpool) | 生成图池图片 | **mod bids**：请**按组输入**模组和谱面 ID，比如：NM 123 456 789。 |
| IC | !ic (`:`mode) (user) | [Info Card](./player.md/#info) | 查询迷你信息 | *Information 功能的明信片设计。* |
| IM | !im (user) | [I'm Mapper](./player.md/#immapper) | 查询谱师信息 | - |
| KT | !kt (bid) (round) (`+`mod) | [Kita](./aid.md/#kita) | 查询喜多杯谱面展览图 | - |
| ML | !ml **[mid]** (operate) | [Match Listen](./tournament.md/#matchlisten) | 监听比赛房间 | **mid**：比赛房间号<br />**operate**：操作，比如开始和停止 start/stop |
| MN | !mn **[mid]** (`e`easy) (skip) (ignore) (`[`filter`]`) (`f`) (`r`) | [Match Now](****) | 获取比赛结果 | *与 **RA** 功能的参数相同。* |
| MS | !ms **[title/id]** | [Maimai Version](./maimai.md/#maisong) | 查询舞萌歌曲 | *不支持输入日本汉字的罗马音。* |
| MU | !mu (user) | [Mutual](./player.md/#mutual) | 获取主页链接 |  |
| MV | !mv (user) (ver) | [Maimai Version](./maimai.md/#version) | 按版本查询舞萌成绩 | *不输入版本默认当前国服最新版本。* |
| OA | !oa (users) | [Old Avatar](./aid.md/#oldavater) | 获取旧版头像 | - |
| OR | !or **[star]** | [Over Rating](./aid.html#overrating) | 计算超星禁言 | **star**：星数 |
| PA | !pa **[bid]** (bid2) | [Performance Plus Map](./player.md/#ppplus) | 对比谱面 PP+ | - |
| PC | !pc (`:`mode) (user) | [Pass Card](./score.md/#pass) | 查询迷你成绩 | *Pass 功能的明信片设计。* |
| PI | !pi | [Ping](./bot.md/#ping) | 查询服务状态 | *也可通过 yumu? 调用。* |
| PM | !pm (`:`mode) (user) | [Performance Minus](./player.md/#ppminus) | 查询 PP- | - |
| PP | !pp (`:`mode) (user) | [Performance Plus](./player.md/#ppplus) | 查询 PP+ | - |
| PV | !pv (`:`mode) (user) | [Performance Minus Vs](./player.md/#ppminus) | 对比 PP- | *也可通过 !pmvs 调用。* |
| PX | !px (`:`mode) (user) | [Performance Plus Vs](./player.md/#ppplus) | 对比 PP+ | *也可通过 !ppvs 调用。* |
| RA | !ra **[mid]** (`e`easy) (skip) (ignore) (`[`filter`]`) (`f`) (`r`) | [Rating](./tournament.md/#rating) | 查询比赛评分 | *即查询木斗力。也可通过 !mra 调用。*<br />**mid**：比赛房间号<br />**easy**：Easy 模组倍率，支持 0-20<br />**skip**：跳过开头场次<br />**ignore**：忽略结尾场次<br />**filter**：剔除特定场次<br />**f**：统计低分成绩<br />**r**：忽略重复对局 |
| SC | !sc (time) | [Service Count](./bot.html#servicecount) | 查询服务调用 | *仅管理员使用*<br />**time**：可输入小时或天数，比如 7h 和 2d。默认 1d |
| SM | !sm (mode) | [Set Mode](./score.md#mode) | 修改默认游戏模式 | **mode**：游戏模式：<br />0，osu，o：主模式<br />1，taiko，t：太鼓模式<br />2，catch，c：接水果模式<br />3，mania，m：下落模式 |
| SP | !sp (operate) (user) | [Super](./bot.md/#ban) | 封禁解封玩家 | *仅管理员使用*<br />**operate**：操作，wkarbu<br />w：白<br />b：黑<br />a：入白<br />r：出白<br />b：入黑<br />u：出黑 |
| SW | !sw | [Switch](./bot.md/#switch) | 切换服务开关 | *仅管理员使用* |
| TR | !tr | [Transfer](./aid.md/#trans) | 计算音符调值 | *根据十二平分律计算* |
