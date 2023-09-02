---
title: 谱面指令
icon: map
order: 6
date: 2023-09-02
category:
  - 指令
tag:
  - 指令
  - osu!
  - osu
  - beatmap
  - 谱面
sticky: false
star: false
footer: Yumu Docs - 谱面指令
copyright: false
---

# 谱面指令

![谱面指令列表](img/help-map.png)

## <HopeIcon icon="map-location-dot"/> 1 查询谱面信息 !ymmap (!m)

可以根据成绩的一些参数（<HopeIcon icon="link"/> 连击数、<HopeIcon icon="bullseye"/> 准确率）来查询谱面的信息（<HopeIcon icon="magnifying-glass-chart"/> 四维、<HopeIcon icon="medal"/> PP）。

**使用方法**

!ymmap / m (**`:`游戏模式**) [**谱面编号**] (**准确率`%`**) (**连击数`x`**) (**`+`模组名称**)

- **<HopeIcon icon="gamepad"/> 游戏模式**：谱面的游戏模式，且只能在转谱上赋予模式。请参阅：[游戏模式](./score.md#_1-修改默认游戏模式-ymmode)
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要查询的谱面编号 (BID)。
- **<HopeIcon icon="bullseye"/> 准确率**：预期成绩的准确率。
  - 可以输入 0-100 内的值。
- **<HopeIcon icon="link"/> 连击数**：预期成绩的连击数。
  - 可以输入大于 1 的值。
  - 如果输入 0-1 之间的小数，则表示预期获取谱面最大连击数**多少倍**的连击数。
- **<HopeIcon icon="music"/> 模组名称**：<HopeIcon icon="music"/> 预期成绩内模组的简称，通常为两位大写字母组成。可以无空格地输入多个 <HopeIcon icon="music"/> 模组。

::: details 可输入的 <HopeIcon icon="music"/> 模组名称

EZ、NF、HT、HR、SD、PF、DT、NC、HD、FI、FL、MR

:::

::: info 备注

暂未开放

:::

## <HopeIcon icon="headphones"/> 2 试听谱面 !ymaudio (!a)

试听 10 秒预览。

**使用方法**

!ymaudio / a (**`:`种类**) [**谱面编号**]

- **<HopeIcon icon="icons"/> 种类**：输入编号的种类。
  - sid / s：按谱面集编号 (SID) 查询。
  - bid / b / 留空：按谱面编号 (BID) 查询。
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要查询的谱面编号 (BID) 或谱面集编号 (SID)。

::: tip 提示

也可使用 !song 调出功能。

:::

::: warning 注意

繁重功能，查询不出结果请稍后再重试，切勿刷屏查询。

:::