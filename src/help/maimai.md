---
title: 舞萌指令
icon: spinner
order: 10
date: 2024-09-18
category:
  - 指令
tag:
  - 指令
  - maimai
  - SEGA
  - 舞萌
  - 舞萌DX
sticky: false
star: false
footer: Yumu Docs - 舞萌指令
copyright: false
---

::: tip 提示

本群升级成为舞萌群。

:::

## <HopeIcon icon="wand-magic-sparkles"/> 1 查询舞萌最好成绩 !ymmaimaibest (!x) {id=bestperformance}

这个功能可以查询到玩家最好成绩榜（b50）上的成绩。

![舞萌最好成绩面板，指令：!x qq=... #1](https://yumemuzi.s-ul.eu/yumu/ohjdEuxW)

**使用方法**

!ymmaimaibest / mb / x (**玩家名**) (**`#`偏移量或区间**)

- **<HopeIcon icon="address-card"/> 玩家名**：需要查询的玩家名称。留空默认使用发送者的 QQ 查询。
  - 这里的玩家名是玩家在[==水鱼官网==](https://www.diving-fish.com/maimaidx/prober/)上的账号名。
    - 如果玩家的账号名称带有特殊字符或中文，请使用 QQ 查询。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=114514。
    - 如果您查询自己的成绩时显示未绑定，则可以前往水鱼官网，登录，点击右上角的 `编辑个人资料` ，最后在 `绑定 QQ` 段落填写自己的 QQ。
  - 支持使用 <HopeIcon icon="at"/> @ 查询，输入格式为：@某S氏。
- **<HopeIcon icon="ruler-horizontal"/> 偏移量或区间**：需要查询从头到尾排序中的第几个或是某几个成绩。
  - 可以输入 1~50 之间的整数，输入 2 就是查询第二个最好成绩。
  - 如果不输入任何参数，即可获取玩家的 50 个最好成绩（等价于其他同类机器人的 b50 功能）。
  - 1~35 为过去版本中的前 35 个最好成绩 (b35)，36-50 为最新版本中的前 15 个最好成绩 (b15)。
  - 可以输入区间，格式为：最小数`-`最大数，如 1-20。

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
  - 如果不输入任何参数，即可获取玩家在国服最新版本内的最好成绩（目前国服版本位于 `maimai でらっくす BUDDiES`）。
  - 其他版本号的缩写格式类似。请参见下表：**版本号对应表**。
  - 可输入多个版本（建议最多 5 个）。
  - 版本号之间可通过逗号 `,`、冒号 `:`、或号 `|` 分隔开。

::: details 版本号对应表

查询的字段可输入版本简称，版本号，或是版本全称中（除了初代）剔除掉 maimai 之后，剩下的字段。

| 版本全称 | 版本简称 | 版本号 |
| :-: | :-: | :-: |
| maimai | mi, mai | 0.1 |
| maimai PLUS | pl, pls, mi+, mai+ | 0.11 |
| maimai GreeN | gr, gre, grn | 0.2 |
| maimai GreeN PLUS | gr+, gre+, grn+ | 0.21 |
| maimai ORANGE | or, org | 0.3 |
| maimai ORANGE PLUS | or+, org+ | 0.31 |
| maimai PiNK | pk, pnk | 0.4 |
| maimai PiNK PLUS | pk+, pnk+ | 0.41 |
| maimai MURASAKi | ms, msk | 0.5 |
| maimai MURASAKi PLUS | ms+, msk+ | 0.51 |
| maimai MiLK | mk, mlk | 0.6 |
| MiLK PLUS | mk+, mlk+ | 0.61 |
| maimai FiNALE | fn, fnl | 0.7 |
| ALL FiNALE[^1] | afn, fn+ | 0.71 |
| maimai でらっくす | dx, dlx | 1.0 |
| maimai でらっくす PLUS | dx+, dlx+ | 1.01 |
| maimai でらっくす Splash | sp, spl | 1.1 |
| maimai でらっくす Splash PLUS | sp+, spl+ | 1.11 |
| maimai でらっくす UNiVERSE | un, uv, unv | 1.2 |
| maimai でらっくす UNiVERSE PLUS | un+, uv+, unv+ | 1.21 |
| maimai でらっくす FESTiVAL | fs, fes | 1.3 |
| maimai でらっくす FESTiVAL PLUS | fs+, fes+ | 1.31 |
| maimai でらっくす BUDDiES | bd, bud | 1.4 |
| maimai でらっくす BUDDiES PLUS[^2] | bd+, bud+ | 1.41 |
| maimai でらっくす PRiSM[^2] | pr, pri, prs | 1.5 |
| maimai でらっくす PRiSM PLUS[^2] | pr+, pri+, prs+ | 1.51 |

:::

::: tip 提示

如果不输入玩家名称（查询自己的成绩），那么版本前的 `#` 号可以忽略。

如果查询的玩家名称与以上可能出现的版本号缩写同名，如 **splash**，建议在其后添加版本参数 (**`#...`**)，便于区分。

:::

## 备注

[^1]: 这个版本指的是包括 FiNALE 版本之前的所有歌曲。实际上并没有这个版本（或许？）
[^2]: 目前国服并没有这个版本的歌曲。