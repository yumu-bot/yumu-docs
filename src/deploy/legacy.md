---
title: 部署分身
icon: circle-nodes
order: 2
date: 2024-03-16
category: 部署
tag:
  - 部署
  - Bot
sticky: false
star: false
footer: Yumu Docs - 部署分身
copyright: false
---

::: warning 注意

此文章仅用作参考，部分功能可能已经不可用，或者已不受支持。

:::

---

由于 Bot 主账号受腾讯严重打压，不能保证良好、及时的服务。现在，您也可以使用自己的 QQ 账号，部署 QQ Bot 分身。

::: danger 警告

如果您想要这么做，请注意：

尽管 YumuBot 尽量保证内容安全、绿色，但部署 Bot 这一行为，还是有可能违反腾讯的用户协议。因此可能导致的 QQ 账号被**封禁或限制**等一切后果，开发者不予承担。

您已经被警告过了。

:::

::: info 备注

Bot 有多号防发送重复消息机制。因此您可以放心大胆地部署。不会造成重复消息刷屏。

:::

## <HopeIcon icon="person-walking-arrow-right"/> 太长不看 {id=brief}

请使用支持 **OneBot V11** 协议的 QQ 客户端，配置**反向 WebSocket** 协议代理链接为下即可。

<HopeIcon icon="tower-cell"/> ==**ws://121.41.63.60:11735/pub/onebotSocket**==

- [什么是 WebSocket?](https://baike.baidu.com/item/WebSocket/1953845)
- [OneBot V11 协议内容](https://github.com/botuniverse/onebot-11)

## <HopeIcon icon="people-pulling"/> 详细部署 {id=detailed}

本文最后更新于 2024 年 3 月 16 日。因此，在您阅读的时间点时，下文中部分程序可能会有更新。所以请根据您阅读时的实际情况，灵活操作，并下载**最新**程序。

以下是开发者正在使用的，基于 [NapCat](https://napneko.github.io/) 框架的方案

::: info 替代方案
- 基于 Android XP框架注入的 Shamrock (已经停止维护, 不再赘述)
- 基于 [Mirai](https://mirai.mamoe.net/) 的 [go-cqhttp](https://docs.go-cqhttp.org/)：
    - **不推荐**，作者已被腾讯传唤，并停止维护。
    - 如果您之前就使用了此解决方案，并且账号依旧可以登录 (未出现 Code 45)，您可以直接在配置文件内的 `ws-reverse` 行，填入以上所述的[==反向 WebSocket 代理链接==](#brief)，完成部署。
- 基于 HOOK QQNT 的方案 [LiteLoaderQQNT](https://liteloaderqqnt.github.io/) 搭配 [LLOneBot](https://github.com/LLOneBot/LLOneBot)：
- 基于 C# 实现的 QQNT 消息协议库 [Lagrange.Core](https://lagrangedev.github.io/Lagrange.Doc/)：

:::


