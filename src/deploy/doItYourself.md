---
title: 部署本体
icon: server
order: 4
date: 2025-10-19
category: 部署
tag:
  - 部署
  - Bot
sticky: false
star: false
footer: Yumu Docs - 部署本体
copyright: false
---

## 部署本体

雨沐机器人的仓库是：https://github.com/yumu-bot/

如果要直接运行本体，请仔细阅读 yumu-bot、yumu-image 这两个仓库中的 README 文件。

主程序需求：

::: tip 运行环境

- JDK 21，或是支持虚拟线程的其他更高版本
- PostgreSQL 15，用来存储玩家数据，节省 osu!API 开销

:::

::: info 配置

请注意 [application.yaml](https://github.com/yumu-bot/yumu-bot/blob/master/src/main/resources/application.yaml)：它是主程序最重要的配置文件。您可能需要在里面填写：

- osu!API v2 应用的客户端 ID 和客户端密钥
- PostgreSQL 数据库的连接地址
- 运行目录：用于存放缓存的图片、谱面等信息

:::

绘图模块需求：

::: tip 运行环境

- nodeJS，或是 PM2，或是任何你能运行 JavaScript 的载体。

:::

::: info 配置

- 首先运行一次 yarn start。
- EXPORT_FILE：绘图模块使用的素材文件夹地址。在运行前请将其设定到环境变量中。
  - 在 Windows 中：`set EXPORT_FILE=${你解压素材库的文件路径，比如 D:\ExportFileV3\}`
  - 在 Linux 中：`EXPORT_FILE=${你解压素材库的文件路径，比如 D:\ExportFileV3\} ./main.js`


:::