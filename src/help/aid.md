---
title: 辅助指令
icon: wheelchair
order: 10
date: 2023-11-01
category:
  - 指令
tag:
  - 指令
  - osu!
  - osu
  - aid
  - 辅助
sticky: false
star: false
footer: Yumu Docs - 辅助指令
copyright: false
---

## <HopeIcon icon="id-badge"/> 1 获取旧主页头像 !ymoldavatar (!oa) {id=oldavatar}

这个功能可以生成旧版主页风格的截图，含有玩家头像和玩家名称，方便玩家在面基 P 图的时候使用（遮挡住面部）。

**使用方法**

!ymoldavatar / oa (**玩家名**)

- **<HopeIcon icon="address-card"/> 玩家名**：需要查询的玩家名称。留空默认查询自己。
  - 支持使用 <HopeIcon icon="fa-brands fa-qq"/> QQ 查询，输入格式为：qq=123456789。
  - 暂不支持使用 <HopeIcon icon="slash"/> UID 查询。

![旧主页头像面板，指令：!oa 970](https://yumemuzi.s-ul.eu/yumu/MYOkR6U9)

::: tip 提示

在电脑上使用鼠标右键复制图片，即可使用 `ctrl` + `v` 粘贴到 PS 中，快速制作出面基合照。

![面基合照](https://yumemuzi.s-ul.eu/osu/7LhKYNtK)

:::

## <HopeIcon icon="star-half-stroke"/> 2 计算超星 !ymoverrating (!or) {id=overrating}

这个功能可以根据新人群的规定查询发出对应难度的成绩之后，应该被禁言多久。

**使用方法**

!ymoverrating / or [**星数**]

- **<HopeIcon icon="star"/> 星数**：必填，需要计算的星数。
  - 规则：成绩 5.70 星以上视作超星，每高 0.01 星禁言 10 分钟。

## <HopeIcon icon="music"/> 3 计算转调 !ymtrans (!tr) {id=trans}

这个功能将参考十二平均律，根据输入的音符调值，计算出以它为基音的 <HopeIcon icon="link"/> [自然大调](https://baike.baidu.com/item/%E8%87%AA%E7%84%B6%E5%A4%A7%E8%B0%83/2948231)内的其他音符的调值。方便玩家在制作音效的时候，根据音高使用对应的音频文件。

**使用方法**

!ymtrans / tr [**调值**]

- **<HopeIcon icon="music"/> 调值**：必填，需要计算的调值。
  - 合法参数：[**音名**] (**<HopeIcon icon="hashtag"/> 升号**) [**音高**]
    - 音名：A~G 的大写字母。
    - 升号：部分全音之间含有半音，加升号就是定位到这个半音。
    - 音高：1~7 的整数。
  - 它们合起来就组成了调值。比如，==C4==（中央 C，440 Hz）就是一个合法的参数。

![计算 D 大调，指令：!ymtrans D4](https://yumemuzi.s-ul.eu/yumu/53SnO4x4)

## <HopeIcon icon="hippo"/> 4 查询喜多杯谱面展览图 !ymkita (!k) {id=kita}

这个功能是定制功能，可以根据输入的谱面来渲染出一张符合喜多杯的谱面介绍图。

**使用方法**

!ymkita / !k (**x**) [**谱面编号**] (**谱面位置**) (**轮次名称**)

- **<HopeIcon icon="x"/> 文件标记**：如果这里添加了字母 `x`，则谱面介绍图片会以文件形式发出，且不附带背景图片，方便玩家更细化的编辑。
- **<HopeIcon icon="hashtag"/> 谱面编号**：必填，需要查询的谱面编号 (BID)。
- **<HopeIcon icon="map-location-dot"/> 模组池**：必填，谱面所处的模组池。
  - 可以输入 NM、HD、HR、DT、FM、TB 及其后的数字（比如 NM1）。
  - 谱面会视作添加了这些模组，并计算出对应的谱面参数。
- **<HopeIcon icon="mound"/> 轮次名称**：位于图片左侧的轮次名称，不填默认 Unknown。

![喜多杯谱面展览图，指令：!k 3880594 HD1 Grand Finals](https://yumemuzi.s-ul.eu/yumu/1wVDkGka)


