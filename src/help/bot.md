---
title: 内部指令
icon: terminal
order: 3
date: 2025-03-17
category: 指令
tag:
  - 指令
  - Bot
  - 内部
sticky: false
star: false
footer: Yumu Docs - 内部指令
copyright: false
---
# 内部指令

## <HopeIcon icon="list"/> 1 查询指令列表 !ymhelp (!h) {id=help}

通过 QQ 群聊，查询机器人基础指令，以及以下所有模块的指令。

**使用方法**

!ymhelp / h (**功能分类**)

- **<HopeIcon icon="table-list"/> 功能分类**：需要查询的功能类别。可输入：
  - bot / b：内部指令
  - score / s：成绩指令
  - player / p：玩家指令
  - map / m：谱面指令
  - tournament / t：比赛指令
  - chat / c：聊天指令
  - fun / f：娱乐指令
  - aid / a：辅助指令

## <HopeIcon icon="server"/> 2 查询服务状态 !ymping (!pi) {id=ping}

如果 Bot 在线，则会立即回复一张含 pong! 的图片。

![Bot 回复](https://yumemuzi.s-ul.eu/yumu/8Goqv2Bm)

::: tip 提示

可以利用此功能来判断 Bot 是否在线。

有时候，Bot 响应缓慢不一定是 Bot 服务器的问题，也可能是 ppy 服务器炸了，也可能是腾讯把发送消息的 Bot QQ 封掉了。

如果您还是想弄懂问题到底出在哪，可以访问:

- <HopeIcon icon="link"/> [==ppy 服务器状态检测网站==](https://status.ppy.sh/)（需要科学上网）。
- <HopeIcon icon="link"/> [~~YumuBot 服务器状态检测网站（春晚说这个没啥用）~~](https://panel.365246692.xyz/status/public)

![YumuBot 服务器状态检测网站](https://yumemuzi.s-ul.eu/yumu/n6sNerrk)

:::

## <HopeIcon icon="network-wired"/> 3 绑定玩家账号 !ymbind (!bi) {id=bind}

如果用户想要使用 YumuBot 的功能，则必须至少绑定一个 osu! 玩家账号。

**使用方法**

!ymbind / bi (**`:f` 操作**) (**`*`玩家名**)

**绑定的时候无需添加任何参数。自我解绑是 !unbind / ub，也不需要带任何参数。**

::: details 使用方法

- **<HopeIcon icon="mug-saucer"/> 操作**：只有最高级管理员才可使用。
- **<HopeIcon icon="address-card"/> 玩家名**：不推荐使用玩家名绑定。这个参数可以供超级管理员来定向解除绑定关系。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。

:::

![Bot 绑定](https://yumemuzi.s-ul.eu/yumu/c3DP4FOB)

```flow:preset

st=>start: 开始绑定|past:
e=>end: 绑定成功|future:
op1=>operation: 输入 !ymbind|past
op2=>operation: OK 确认|check
op3=>operation: 点击链接|current
op4=>operation: 授权|authorise
cond1=>condition: 是否重新绑定?|approved:
cond2=>condition: 是否登录账号
并授权?|authorized:
sub1=>subroutine: 绑定失败|failed

st->op1->cond1
cond1(yes)->op2
cond1(no)->sub1(right)->op1
op2->op3->cond2
cond2(yes)->op4
cond2(no)->sub1(right)->op1
op4->e

```

::: tip 提示

基础绑定方法是 !ymbind，然后点击链接，在浏览器登录、授权、从而完成绑定（如上图）。

不推荐使用 !ymbind + <HopeIcon icon="address-card"/> 玩家名的绑定方法。因为有**部分功能**在没有 OAuth 2.0 授权前，无法正常使用。

:::

::: warning 注意

为了与其他 Bot 的绑定指令区分，!bind 唤起 YumuBot 时，会需要玩家二次确认： 

玩家看到提示，并再次发送 OK 确认，Bot 才会发送有效的绑定链接。

在此之前，如果普通玩家想解绑，需要 <HopeIcon icon="link"/> [==联系开发者==](../about/dev.md)，或是去 <HopeIcon icon="link"/> [==个人主页/账户设置下的#开放授权页面==](https://osu.ppy.sh/home/account/edit)，撤销 YuriMumu 的访问权限。

![撤销访问权限](https://yumemuzi.s-ul.eu/yumu/hKyqGQwk)

:::

## <HopeIcon icon="sliders"/> 4 模块开关 !ymswitch (!s*) {id=switch}

这个功能可以用于限制部分功能在部分群组内的可用状态，超级管理员也可以用这个功能来限制部分用户（即旧版 super、ban 功能）。

**使用方法**

!ymswitch / so / sf / sl [**操作**] (**群组号**) (`qq=`**玩家号**) (**功能名**)

- **<HopeIcon icon="up-down-left-right"/> 操作**：**必填**，紧跟在 switch 指令之后。
  - on，或者短链 SO：<HopeIcon icon="toggle-on"/> 开启
  - off，或者短链 SF：<HopeIcon icon="toggle-off"/> 关闭
  - list，或者短链 SL：<HopeIcon icon="list"/> 查看目前所有模块状态（仅超级管理员可用）
- **<HopeIcon icon="slash"/> 群组号**：二选一填，也可都不填。需要特定限制的群组号。
  - 输入格式也可以为 group=114514。
- **<HopeIcon icon="slash"/> 玩家号**：二选一填，也可都不填。需要特定限制的玩家号。
  - 输入格式必须为 qq=114514。
  - 常规用户无法输入别人的玩家号（只能对自己操作）。
  - 如果都不填，则视作全局关闭功能（仅超级管理员可用）
- **<HopeIcon icon="robot"/> 功能名**：可开关的功能名称，或是功能组（一组功能）。
  - 如果记不住功能名或者功能组，可以留空，或是随便填。Bot 会在找不到正确的名称时提示你。

::: tip 提示

这个功能比较复杂，下面附带了一些用法。

- 例：我在群组 7355608，但我不想有人在这里使用**舞萌**功能！
  - 您可以在群聊中输入：!sf maimai、或是 !sf 舞萌
    - 此时，Bot 会提醒您是要对自己操作还是对群聊操作。
    - 输入对应的数字（2）即可到下一步。
    - 您也可以直接输入：!sf 7355608 maimai，直接确定操作群聊。
  - 此时，Bot 会向您发送二次确认，并附带即将关闭的服务列表。
    - 输入 OK，即可关闭这些服务。
    - 输入其他任何消息，或是等待 30 秒，即可撤销操作。
  - 从此之后，非超级管理员的所有用户都无法使用这些功能了。

:::

::: warning 注意

这个功能需要您二次操作（再次输入 OK 确认）。

普通用户可以控制自己可用的功能（对自己生效）。

群组的管理员和群主可以控制自己所在的群聊功能（群组号输入自己所属的群即可，对当前群生效）。

:::

::: danger 警告

一般来说，YumuBot 是免费，开放[^open]且包容的。但如果您滥用功能、言语攻击辱骂 Bot 及开发者，那么开发者将有权收回您使用 Bot 的一切权利。

:::

功能组对应表

| 功能组 | 名称 | 简称 | 包含的功能内部区分名（部分） |
| :-: | :-: | :-: | --- |
| bot | 内部、机器 | o | help、ping、bind |
| scores | 成绩、分数 | s | set_mode、bp、score_pr、today_bp |
| player | 玩家、用户 | p | info、friend、mutual、pp_minus |
| beatmap | 谱面、图 | b | map、audio、explore、qualified_map |
| match | 比赛、房间 | m | mu_rating、match_now |
| chat | 聊天 | c | - |
| fun | 娱乐 | f | dice |
| maimai | 舞萌、中二 | i | mai_bp、mai_score、chu_bp |
| aid | 辅助 | a | old_avatar、take |
| custom | 自定 | u | custom |
| private | 私服 | e | sb_set_mode、sb_info、sb_bp、sb_score |



## <HopeIcon icon="reply"/> 5 撤回消息 !ymrevoke (!rv) {id=revoke}

可以撤回机器人已经发送过的消息的功能。

**使用方法**

!ymrevoke / rv / 撤回

- <HopeIcon icon="reply"/> 必须回复需要撤回的消息。单独发送命令时，机器人无法定位到上下文。
  - 未来可能会支持无需回复的撤回功能。

::: warning 注意

只有群组的管理员或群主才可以撤回他人调用机器人时发送的消息。

如果机器人是管理员或者群主，也可以尝试撤回其他用户发送的普通消息。

如果消息超过 2 分钟，并且机器人不是群聊管理员或群主时，则不会尝试撤回。

:::

## <HopeIcon icon="volume-up"/> 6 回声 !ymecho (!ec) {id=echo}

一个简单的 Bot 回声功能。

**使用方法**

!ymecho / ec (**群组号**) (`qq=`**玩家号**) (**内容**)

- **<HopeIcon icon="slash"/> 群组号**：二选一填，也可都不填。需要回声传递的群组号。
  - 输入格式也可以为 group=114514。
- **<HopeIcon icon="slash"/> 玩家号**：二选一填，也可都不填。需要回声传递的玩家号。
  - 输入格式必须为 qq=114514。
  - 如果都不填，则默认就在当前群发送回声。
- **<HopeIcon icon="tv"/> 内容**：需要回声传递的内容。
  - 如果要发送图片，回复那张图片即可。

::: danger 警告

回声传递给玩家（私聊）虽然功能上没有问题，但是很容易导致账号被封禁。

即使你是超级管理员，也最好不要这么做。

:::

::: warning 注意

只有超级管理员可以使用回声传递。

:::

## <HopeIcon icon="desktop"/> 7 查询服务调用数量 !ymservicecount (!sc) {id=servicecount}

**使用方法**

!ymservicecount / sc (**时间**)

- **<HopeIcon icon="clock"/> 时间**：设定查询时间段为多久之前到现在。可以输入一个非负整数。单位是小时。
  - 如果输入 0，将会返回数据库内所有条目。
  - 不输入默认 24 小时。

::: warning 注意

只有超级管理员可以查询服务调用数量。

:::

## <HopeIcon icon="user-clock"/> 8 查询绑定信息 !ymcheck (!ck) {id=check}

**使用方法**

!ymcheck / ck (**玩家名**)

- **<HopeIcon icon="address-card"/> 玩家名**：同上。不输入时默认查询自己。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
  - 支持使用 <HopeIcon icon="slash"/> UID 查询，输入格式为：uid=1919810。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@nana7michan。

::: warning 注意

只有超级管理员可以查询绑定信息。

:::

[^open]: [YumuBot 储存在 GitHub 上的仓库](https://github.com/yumu-bot)