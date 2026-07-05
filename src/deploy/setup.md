---
title: 部署本体
icon: server
order: 5
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

雨沐机器人的仓库是：[https://github.com/yumu-bot/](https://github.com/yumu-bot/)

如果要直接运行本体，请仔细阅读仓库中的 README 文件。


::: warning 注意

多个主程序之间无法通信。请控制部署的范围，避免多个主程序同时响应同一条指令。

::: 

主程序需求：

::: info 运行环境

- JDK 21，或是支持虚拟线程（Virtual Thread）的其他更高版本。
  - 程序运行时，至少需要 400MB 留给代码，其他每多一个 QQ 链接，堆内存需要再加 20 MB。
  - 推荐开启 ZGC。
  - 在只有一个 QQ 链接时，这样启动：`java -XX:+UseZGC -Xmx2G -Xms1G -jar nowbot.jar`。
- PostgreSQL 15，用来存储玩家数据，节省 osu!API 开销。
  - 部分数据库可能需要您设置 ==GIN== 索引或 ==pg-tram== 三元组索引，替换 JPA 无法生成的除 B-tree 之外的索引。
  - 在低并发下可以无需设置。
- Redis 分布式缓存
  - 暂时无法关闭，您需要在 `6379` 端口上开启服务。可不设密码。
  - 主服务基本没有用到它，但是又必须依赖它。
  - 以后修改。

:::

::: tip 配置

请注意 [application.yaml](https://github.com/yumu-bot/yumu-bot/blob/master/src/main/resources/application.yaml)：它是主程序最重要的配置文件。您需要在里面填写：

- osu!API v2 应用的客户端 ID 和客户端密钥。
- PostgreSQL 数据库的连接地址。
- 运行目录：用于存放缓存的图片、谱面等信息。

:::

绘图模块需求：

::: info 运行环境

- NodeJS v22+。
  - 过老的版本会导致绘图模块的 puppeteer-extra 插件报错。

:::

::: tip 配置

- 首先运行一次 npm install。
- 保证 `1611` 端口可用。
- 环境变量记得设置 `USE_PROXY=true`、`EXPORT_FILE=...`
- EXPORT_FILE：绘图模块使用的素材文件夹地址。在运行前请将其设定到环境变量中。
  - 在 Windows 中：`set EXPORT_FILE=${你解压素材库的文件路径，比如 D:\ExportFileV3\}`
  - 在 Linux 中：`EXPORT_FILE=${你解压素材库的文件路径，比如 D:\ExportFileV3\} ./main.js`

:::