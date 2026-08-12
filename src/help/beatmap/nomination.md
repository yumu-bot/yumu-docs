---
title: 查询上架流程
icon: angles-up
order: 5
---

可以查询谱面的上架流程，方便监控谱面状态的变化。

::::: info 使用方法

!nomination / n / 查询上架流程 ( ::hashtag:: 谱面编号)

:::: tabs

@tab ::hashtag:: 谱面编号

可选。默认获取之前查询记录的谱面编号。参见：[字段/谱面编号](../../tips/field/mapid.md)、[技巧/回溯](../../tips/trick/trace.md)。

::::

:::::

![上架流程面板，指令：!n 2016251](https://yumemuzi.s-ul.eu/yumu/m2nBN8Te)

::: details 内容解析

- **左上角**：玩家的 ::circle-user:: 头像、::heading:: 名称、玩家所属的 ::users:: 组织。
    - Diff：这张谱面的谱主难度数量和总计数量。它们的差值即 ::user-pen:: 客串难度数量。
    - SR：这张谱面的 ::star:: 星数（SR）范围。
    - Length：这张谱面的 ::clock:: 长度（取 BID 最小的）。
- **Ranking Progress**：谱面的 ::angles-up:: 上架流程。
    - 左上角的 ::bullhorn:: Hype 表示推荐数量。其下是 ::bullhorn:: 推荐或 ::heart:: 赞的评论。
    - 中间的 ::thumbs-up:: Nomination 表示提名数量。其下会根据情况显示提名的谱面审核成员 (BN) 的 ::circle-user:: 头像、::heading:: 名称以及 UID。
    - 头像左上方的 ::circle:: 圆圈表示玩家所属的 ::users:: 组织。比如，<span style="color:#A347EA">⬤</span> 表明了该玩家是谱面审核成员 (BN)。
- **Guest Mappers**：参与谱面制作的 ::user-pen:: 客串谱师信息。
    - 图片右下方的 ::circle:: 圆圈表示玩家所属的 ::users:: 组织。
- **Tags**：谱面的 ::tag:: 标签。
- **Modding Discussion**：谱面的摸图 ::comments:: 讨论区。
    - 标题右侧显示了 ::circle-question:: 未解决、::circle-exclamation:: 问题、::circle:: 建议、::comments:: 赞的数量，以及谱面被归入的 ::box-open:: 曲包编号和谱面 ::comments:: 大众评分。
    - ::circle-question:: 未解决的讨论会置顶，::circle-check:: 已解决的讨论文本会变暗。
- **Favorites**：收藏谱面的玩家。
    - 图片右下方的 ::circle:: 圆圈表示玩家所属的 ::users:: 组织。
- **G/L**：::icons:: 曲风和 ::language:: 语言 (Genre / Language)。

:::