---
title: 部署分身
icon: circle-nodes
order: 1
date: 2024-03-02
category:
  - 部署
tag:
  - 部署
  - Bot
sticky: false
star: false
footer: Yumu Docs - 部署分身
copyright: false
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

本文最后更新于 2024 年 3 月 5 日。因此，在您阅读的时间点时，下文中部分程序可能会有更新。所以请根据您阅读时的实际情况，灵活操作，并下载**最新**程序。

以下是开发者正在使用的，基于 [LSPatch](https://github.com/LSPosed/LSPatch/) 框架的方案 [OpenShamrock](https://github.com/whitechi73/OpenShamrock) 的部署方法。风控等级高的账号也可以运行。

::: info 替代方案

- 基于 [Mirai](https://mirai.mamoe.net/) 的 [go-cqhttp](https://docs.go-cqhttp.org/)：**不推荐**，作者已被腾讯传唤，并停止维护。如果您之前就使用了此解决方案，并且账号依旧可以登录 (未出现 Code 45)，您可以直接在配置文件内，`ws-reverse` 行填入以上所述的[==反向 WebSocket 代理链接==](#brief)，即可完成部署。
- 基于 HOOK QQNT 的方案 [LiteLoaderQQNT](https://liteloaderqqnt.github.io/) 搭配 [LLOneBot](https://github.com/LLOneBot/LLOneBot)：风控等级高的账号也可以运行。
- 基于 C# 实现的 QQNT 消息协议库 [Lagrange.Core](https://lagrangedev.github.io/Lagrange.Doc/)：**不稳定**，可能会导致回执问题以及容易掉登录问题。

:::

首先，请准备一部可使用、较现代的 Android 设备，并且 Android 版本必须高于 **9**。

- 推荐配置：
  - 处理器：手机选择 骁龙 665；骁龙 810；Helio X27；麒麟 710 或更佳的处理器。如果使用虚拟机则考虑分配4核以上[手机 CPU 性能天梯图](https://www.mydrivers.com/zhuanti/tianti/01/)
  - 内存：4 GB，越大越好
  - 存储：128 GB，越大越好
- 最低配置：
  - 能正常运行以下三个软件。

其次，请在您的 Android 设备上下载 **LSPatch** (v0.6) 和 **OpenShamrock** (v1.0.8)。

如果设备支持 root 且安装了其他XP框架(如LSPosed), 则可以跳过 LSPatch 的安装, 直接启用 OpenShamrock 模块, 此时开启自动唤醒 QQ 可以免除保活措施

::: tip 提示

- LSPatch: https://github.com/LSPosed/LSPatch/releases/tag/v0.6
  - 下载安装 `manager-v0.6-398-release.apk`。
- OpenShamrock: https://github.com/whitechi73/OpenShamrock/releases/tag/1.0.8
  - 请根据设备的CPU架构合理选择要下载的 zip 包，解压出 `.apk` 并安装。

:::

然后，在设备内使用 LSPatch 修补您设备内的 QQ 应用。

QQ 推荐版本: [9.0.20_64](https://disk.365246692.xyz/d/public/other/Android_9.0.20_64.apk?sign=A0GhRTf6U52T1TovxTDx9H0VOmMAib8rNclStBCaDU4=:1709731237)

::: tip 提示

* 进入 LSPatch，点击靠下的左数第二个按键：`管理`。
* 点击右下角的 + 号，选择`新建修补`。
  * 如果您有 QQ 安装包，选择`从存储目录中选择（多个）apk`，并找到所需修补的安装包。
  * 如果您已经安装了 QQ，选择`选择已安装的应用程序`。
* 等待修补完成。此时 LSPatch 的命令行最下面一行会标出它修补好的 QQ 安装包路径。
* 进入文件管理器，按照路径找到这个 QQ 安装包。安装。
* 安装好后，在 LSPatch 的管理页，左上角选择应用，找到 QQ。选择，点击`模块作用域`。
* 在跳出的`选择应用程序`页面中，勾选 Shamrock。按右下角`对勾`确认。

:::

此时修补和作用域工作已经完成。接下来需要设置 OpenShamrock 。

::: tip 提示

* 进入 OpenShamrock，无视左上角的字。点击上面四个按钮的第二个，选中会显示`状态`。
* 往下翻，找到`接口信息 (双击修改)`框内的`被动 WebSocket 地址`，双击，填入以上所述的[==反向 WebSocket 代理链接==](#brief)。
* 再往下翻，找到`功能设置`框，勾选`被动 WebSocket (OneBot 标准 WebSocket，Shamrock 作为 Client)`。
* 点击上面四个按钮的第四个，选中会显示 `Lab`。
* [可选] 往下翻，找到`实验功能`框，勾选`自回复测试 (发送 [ping]，机器人发送一个具有调试信息的返回)`。
* 再往下翻，找到`安全性设置`框，勾选`防止调用栈检测 (防止 QQ 进行堆栈跟踪检测，需要重新启动 QQ)`。

::: info 备注

`自回复测试`这个选项能让你通过发送 `ping`（不带感叹号），来单独测试 Shamrock 是否正常工作。

:::

此时所有工作都已完成。最后，需要**强行停止**这三个应用，即可按照 **LSPatch -> OpenShamrock -> QQ** 的方式启动了。

::: warning 注意

几乎所有 Android 设备都会定时杀后台 (定时清理后台运行程序)。

所以请给这三个应用**加锁**，并在电源管理内，对这三个应用采取**无限制**措施。

如果您的 Android 设备带有**游戏辅助**、**游戏加速**之类的系统功能，可以尝试把 QQ 设为游戏，并且在 QQ 界面选择**熄屏待机**之类的选项来熄屏运行。这能极大程度保证 QQ 的正常运行。

:::

::: warning 注意

如果实在不幸，您部署的 Bot 发送消息经常延迟，或者根本没有反应，请**强行停止**这三个应用，并按照以上的**启动流程**重新启动。

:::

::: warning 注意

这种部署分身的方式，本质上是利用框架，在 QQ 内模拟发送图片消息。因此，您必须**定期清理** Shamrock 缓存在 QQ 内的图片，防止存储空间不足。

据开发者实测，如果您的账号调用数量一周达到了 1000 次，那么设备的存储容量占用增加趋势大约是每周 **8~10** GB。

:::
