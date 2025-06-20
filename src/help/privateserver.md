---
title: 私服指令
icon: object-ungroup
order: 12
date: 2025-06-20
category: 指令
tag:
  - 指令
  - osu!
  - osu
  - ppysb
  - 偏偏要上班
sticky: false
star: false
footer: Yumu Docs - 私服指令
copyright: false
---

::: tip 提示

截至目前，YumuBot 支持偏偏要上班 (ppysb) 私服的查询，暂不支持其他私服 (Akatsuki 等) 的查询。

私服查询的指令均为问号开头 (`?`)。与正式服的 (`!`)、官方机器人的 (`/`) 所区分开。

YumuBot 建议您在不到万不得已之时（比如，您与 bancho 的连接非常容易失败，经常出现无法记录成绩等情况），不要优先考虑游玩私服。

:::

## <HopeIcon icon="list"/> 1 绑定游戏模式 ?ymmode (?sm) {id=mode}

请参阅：[成绩指令/绑定游戏模式](./score.md#mode)。

**使用方法**

?ymmode / ?sm / ?mo (**游戏模式**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：选填，需要绑定的 <HopeIcon icon="gamepad"/> 游戏模式。可输入：
  - osu / o / 0：<HopeIcon icon="circle-dot"/> 主模式，osu!standard，osu!std
  - taiko / t / 1：<HopeIcon icon="drum"/> 太鼓模式，osu!taiko
  - catch / fruits / c / 2：<HopeIcon icon="apple-whole"/> 接水果模式，osu!catch
  - mania / m / 3：<HopeIcon icon="keyboard"/> 下落模式，键盘模式，osu!mania
  - osu relax / 0rx / 4：<HopeIcon icon="circle-dot"/> 主模式 (Relax 模组)，osu!standard，osu!std
  - taiko relax / 1rx / 5：<HopeIcon icon="drum"/> 太鼓模式 (Relax 模组)，osu!taiko
  - catch relax / fruits relax / 2rx / 6：<HopeIcon icon="apple-whole"/> 接水果模式 (Relax 模组)，osu!catch
  - osu autopilot / ap / 8：<HopeIcon icon="circle-dot"/> 主模式 (Autopilot 模组)，osu!standard，osu!std
  - 如果不输入，则会移除玩家绑定的游戏模式。此时其他功能会尝试获取玩家主页的默认游戏模式。

::: warning 注意

由于大多数玩家私服的游戏模式和正式服的游戏模式经常不一样，因此私服所有指令的游戏模式获取逻辑，不会受到群聊游戏模式 (`!gm` 功能) 的影响。

游戏模式的获取先后顺序：

==玩家绑定的游戏模式 > 玩家主页上的默认游戏模式 (通常是 osu!standard)==

:::

## <HopeIcon icon="circle-info"/> 2 查询玩家信息 ?yminfo (?i) {id=info}

请参阅：[玩家指令/查询玩家信息](./player.md#info)。

**使用方法**

?yminfo / i (**`:`游戏模式**) (**玩家名**)

::: info 备注

暂未开放

:::

## <HopeIcon icon="square-check"/> 3 查询最近通过成绩 ?ympass (?p) {id=pass}

请参阅：[成绩指令/查询最近通过成绩](./score.md#pass)。

**使用方法**

?ympass / p (**s**) (**`:`游戏模式**) (**玩家名**) (**查询条件**) (**`#`偏移量或区间**)

::: tip 提示

和正式服不同，ppysb 不会限定 24h 之内的成绩。

:::

## <HopeIcon icon="square-xmark"/> 4 查询最近成绩 ?ymrecent (?r) {id=recent}

请参阅：[成绩指令/查询最近成绩](./score.md#recent)。

**使用方法**

?ymrecent / r (**s**) (**`:`游戏模式**) (**玩家名**) (**查询条件**) (**`#`偏移量或区间**)

::: tip 提示

和正式服不同，ppysb 不会限定 24h 之内的成绩。

:::

## <HopeIcon icon="pager"/> 5 查询谱面成绩 ?ymscore (?s) {id=score}

请参阅：[成绩指令/查询谱面成绩](./score.md#score)。

**使用方法**

?ymscore / s (**s**) (**`:`游戏模式**) (**谱面编号**) (**玩家名**) (**`+`模组名称**)

::: tip 提示

由于 ppysb 只会返回谱面上最近 100 个成绩，所以如果您的成绩在 100 个成绩记录之前，那么就不能查询到您预期的结果。

同样地，?ss 对应的多成绩功能，也只会返回一个成绩。

:::

## <HopeIcon icon="rainbow"/> 6 查询最好成绩 ?ymbestperformance (?b) {id=bestperformance}

请参阅：[成绩指令/查询最好成绩](./score.md#bestperformance)。

**使用方法**

?ymbp / b (**s**) (**`:`游戏模式**) (**玩家名**) (**查询条件**) (**`#`偏移量或区间**)

## <HopeIcon icon="podcast"/> 7 查询今日最好成绩 ?ymtodaybp (?t) {id=todaybp}

请参阅：[成绩指令/查询今日最好成绩](./score.md#todaybp)。

**使用方法**

?ymtodaybp / t (**`:`游戏模式**) (**玩家名**) (**`#`天数**)

