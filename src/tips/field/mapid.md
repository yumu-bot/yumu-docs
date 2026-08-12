---
title: 谱面编号
icon: signs-post
order: 5
category: 字段
tag:
  - 字段
  - osu!
  - osu
  - 谱面编号
  - bid
  - sid
footer: Yumu Docs - 谱面编号
---

::: tip 提示

在本文（以及整个文档）中，一般会使用下面的术语：

- 谱面 = 单个难度
- 谱面集 = 所有难度组合成的一个谱面包

部分情况下（特别是在部分老旧定义中），谱面和谱面集的定义会重复。此时请读者注意根据语境来分辨指的是什么。

::: 

在 osu! 中，谱面通常含有两个编号：

- ::hashtag:: 谱面编号 (Beatmap ID)：记录谱面单个难度编号。
- ::hashtag:: 谱面集编号 (Beatmapset ID)：记录谱面所有难度的编号。

在需要输入该编号时，可能会有歧义（同一个数字，既可能对应 ::hashtag:: 谱面编号，也可能对应另一个 ::hashtag:: 谱面集编号）。

为了区分它们，在 [v0.8.2 版本](https://github.com/yumu-bot/yumu-bot/releases/tag/v0.8.2) 之后，部分需要输入该编号的功能可以通过以下方法，来主动区分您输入的编号：

- 无前缀、含有 `b` 前缀：
  - 会默认视作 ::hashtag:: 谱面编号 (Beatmap ID)。
  - 如果没有搜到，会将其视作 ::hashtag:: 谱面集编号 (Beatmapset ID) 再次搜索。
- 含有 `-` 前缀、含有 `s` 前缀：
  - 会默认视作 ::hashtag:: 谱面集编号 (Beatmapset ID)。
  - 如果没有搜到，会将其视作 ::hashtag:: 谱面编号 (Beatmap ID) 再次搜索。