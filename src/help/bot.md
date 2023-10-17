---
title: 内部指令
icon: terminal
order: 3
date: 2023-08-29
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

有时候，Bot 响应缓慢不一定是 Bot 服务器的问题，也可能是 ppy 服务器炸了。

如果您还是想弄懂问题到底出在哪，可以访问 <HopeIcon icon="link"/> [ppy 服务器状态检测网站](https://status.ppy.sh/)（需要科学上网）。

:::

## <HopeIcon icon="network-wired"/> 3 绑定 osu! 玩家 !ymbind (!bi) {id=bind}

如果用户想要使用 YumuBot 的功能，则必须至少绑定一个 osu! 玩家账号。

**使用方法**

!ymbind / bi

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

!ymbind + <HopeIcon icon="address-card"/> 玩家名也可绑定，但是==无法使用绝大多数功能==。

:::

::: warning 注意

为了与其他 Bot 的绑定指令区分，!bind 是无法唤起 YumuBot 的。

只有管理员可以使用 !unbind / !unbind @User 解绑。如果玩家想解绑，请 <HopeIcon icon="link"/> [==联系开发者==](../about/dev.md)。

:::

## <HopeIcon icon="ban"/> 4 封禁或解封玩家 !ymban (!bq / !bu / !bg) {id=ban}

::: info 备注

功能尚未开发完毕，但已经可以做到差不多的效果。

:::

::: warning 注意

只有管理员可以封禁或解封玩家。

:::

::: danger 警告

一般来说，YumuBot 是免费，开放且包容的。但如果您滥用功能、攻击 Bot 及开发者，那么开发者将有权收回您使用 Bot 的一切权利。

:::

## <HopeIcon icon="sliders"/> 5 模块开关 !ymswitch (!sw) {id=switch}

**使用方法**

!ymswitch / sw (**功能名**) (**操作**)

- **<HopeIcon icon="robot"/> 功能名**：可开关的功能名称。
  - 如果记不住功能名，可以留空。Bot 会输出一张列出了所有功能的 <HopeIcon icon="image"/> 图片。
- **<HopeIcon icon="up-down-left-right"/> 操作**：开启或关闭。
  - on：<HopeIcon icon="toggle-on"/> 开启
  - off：<HopeIcon icon="toggle-off"/> 关闭

::: warning 注意

只有管理员可以使用模块开关。

:::

## ~~<HopeIcon icon="desktop"/> 6 刷屏限制开关 !ymantispam (!as)~~ {id=antispam}

::: info 备注

暂未开放。

或者说，这个功能还没有设计的必要吧？

:::
