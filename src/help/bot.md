---
title: 内部指令
icon: terminal
order: 3
date: 2023-11-01
category:
  - 指令
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

![帮助文档](https://yumemuzi.s-ul.eu/yumu/HLgcWpG8)

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
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@tadokoro kouji。

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

不推荐使用 !ymbind + <HopeIcon icon="address-card"/> 玩家名的绑定方法。因为绝大多数功能在没有 OAuth 2.0 授权前都==无法使用==。

如果您实在是只想绑定玩家名，那么必须正确回答绑定的问题。

:::

::: warning 注意

为了与其他 Bot 的绑定指令区分，!bind 唤起 YumuBot 时，会需要玩家二次确认：玩家看到提示，并再次发送 OK 确认，Bot 才会发送有效的绑定链接。

在此之前，如果普通玩家想解绑，需要 <HopeIcon icon="link"/> [==联系开发者==](../about/dev.md)，或是去 <HopeIcon icon="link"/> [==个人主页/账户设置下的#开放授权页面==](https://osu.ppy.sh/home/account/edit)，撤销 YuriMumu 的访问权限。

![撤销访问权限](https://yumemuzi.s-ul.eu/yumu/hKyqGQwk)

:::

## <HopeIcon icon="ban"/> 4 封禁或解封玩家 !ymsuper (!sp) {id=ban}

**使用方法**

!ymsuper / sp [**操作**] (**对象**)

- **<HopeIcon icon="hammer"/> 操作**：超级管理员的操作。
  - 合法的操作：
    - whitelist、w、l：查询白名单列表
    - blacklist、k：查询黑名单列表
    - add、a：添加玩家进白名单
    - remove、r：移除玩家出白名单
    - ban、b：添加玩家进黑名单
    - unban、u：移除玩家出黑名单
  - 如果不输入或者输错，Bot 会提示你。
- **<HopeIcon icon="street-view"/> 对象**：被操作执行的对象。
  - 合法的对象：
    - qq=123456：对象为玩家 <HopeIcon icon="fa-brands fa-qq"/> QQ。
    - group=114514：对象为 <HopeIcon icon="user-group"/> QQ 群组。
    - a long user name：对象为 <HopeIcon icon="address-card"/> 玩家名。
    - 如果操作是查看列表（whitelist、blacklist），则无需输入对象。其他操作均需输入对象。
  - 如果未输入需要输入的对象时，Bot 会提示你。

::: warning 注意

只有超级管理员可以封禁或解封玩家（QQ、群组）。

Bot 将不会回应任何被封禁的玩家（QQ、群组）发出的指令。

:::

::: danger 警告

一般来说，YumuBot 是免费，开放[^open]且包容的。但如果您滥用功能、言语攻击辱骂 Bot 及开发者，那么开发者将有权收回您使用 Bot 的一切权利。

:::

## <HopeIcon icon="sliders"/> 5 模块开关 !ymswitch (!sw) {id=switch}

**使用方法**

!ymswitch / sw (**`:`群组号**) (**功能名**) (**操作**)

- **<HopeIcon icon="slash"/> 群组号**：需要特定限制的群组号。输入格式也可以为 group=114514，
  - 一般用于在特定群聊中关闭部分功能，确保不会滥用。
- **<HopeIcon icon="robot"/> 功能名**：可开关的功能名称。
  - 如果记不住功能名，可以留空。Bot 会输出一张列出了所有功能的 <HopeIcon icon="image"/> 图片。
- **<HopeIcon icon="up-down-left-right"/> 操作**：开启或关闭。
  - on：<HopeIcon icon="toggle-on"/> 开启
  - off：<HopeIcon icon="toggle-off"/> 关闭

::: warning 注意

只有超级管理员可以使用模块开关。

:::

## <HopeIcon icon="desktop"/> 6 查询服务调用数量 !ymservicecount (!sc) {id=servicecount}

**使用方法**

!ymservicecount / sc (**时间**)

- **<HopeIcon icon="clock"/> 时间**：设定查询时间段为多久之前到现在。可以输入一个非负整数。单位是小时。
  - 如果输入 0，将会返回数据库内所有条目。
  - 不输入默认 24 小时。

::: warning 注意

只有超级管理员可以使用查询服务调用数量。

:::

[^open]: YumuBot 的一个副本储存在 GitHub 上，但由于某些原因（比如早期开发在 Git 历史中添加了账户密码等隐私信息），YumuBot 本体暂未能对开发者完全开放。 