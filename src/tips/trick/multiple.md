---
title: 多值参数
icon: socks
order: 2
---

部分参数可以通过管道符或分隔符，输入多个相同类型的参数。

使用的管道符或分隔符有：`|`、`,`、` `、`、`。

多值参数在文档里会多显示出一个 `+` 号（比如 ::address-card:: 玩家名参数，如果可以输入多个值，会显示成 ::address-card:: `玩家名+`。

::: tip 示例

比如[玩家/获取主页链接](../../help/player/mutual.md)功能：如果要获取多个玩家的主页链接，可以这样输入：

``` qq
!mu pippi, mocha
```

此时 `, ` 作为分隔符。

机器人将会这样返回：

``` qq
@pippi: https//osu.ppy.sh/users/1
@mocha: https//osu.ppy.sh/users/2

```

:::

