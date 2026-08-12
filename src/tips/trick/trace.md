---
title: 回溯
icon: backward-fast
order: 1
---

在 [v0.7.0 版本](https://github.com/yumu-bot/yumu-bot/releases/tag/v0.7.0)，机器人引入了回溯机制，

也就是记录同一群聊下，所有用户使用指令时留下的关键数据，比如 ::hashtag:: 谱面编号。

这在很多情况下很有用，可以方便玩家直接纵向比对数据，或是省略繁琐的参数输入等。

比如通过[成绩/查询通过成绩 (P)](../../help/scores/pass.md)、[成绩/查询最近成绩 (R)](../../help/scores/recent.md) 获取玩家当前成绩，并利用这个成绩所记录的 ::hashtag:: 谱面编号 来获取其他数据，比如查看谱面信息 (M) 或预览谱面 (V)，实现==多指令联动==。

一般可以追溯 24 小时内的记录。

![回溯的一种常见用法](https://yumemuzi.s-ul.eu/yumunext/Sr02ANfQ)

