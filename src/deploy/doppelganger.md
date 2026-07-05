---
title: 部署分身
icon: users-rays
order: 4
date: 2026-03-14
category: 部署
tag:
  - 部署
  - 添加
  - Bot
sticky: false
star: false
footer: Yumu Docs - 部署分身
copyright: false
---

您可以使用自己的 QQ 账号，通过 WebSocket 连接到主服务器，来小范围地使用机器人。

::: caution 警告

如果您想要这么做，请注意：

尽管雨沐机器人已经尽量保证内容健康、积极，但破解 QQ 客户端这一行为，还是违反了腾讯的用户协议。

因此可能导致的，QQ 账号被腾讯**封禁、云控、限制**等一切后果和责任，开发者不予承担。

您已经被警告过了。

:::

::: tabs

@tab:active ::person-walking-arrow-right:: 太长不看

请使用支持 OneBot V11 协议的 QQ 客户端，配置==反向 WebSocket（客户端）==协议代理链接为下即可。

::tower-cell:: <button class="link-like" @click="copyToClipboard2">{{ copyText2 }}</button> ← 点击复制

@tab ::people-pulling:: 详细部署

目前开发者使用的是在 Docker 中，运行基于 HOOK QQNT 的方案[幸运莉莉娅 (a.k.a LLOneBot)](https://github.com/LLOneBot/LLOneBot) ，并搭配其默认配置（使用其自带的框架，不搭配其他框架）的方案。

[详细文档](https://luckylillia.com/guide/introduction)

@tab ::person:: 其他方案

- 基于 [Mirai](https://mirai.mamoe.net/) 的 [go-cqhttp](https://docs.go-cqhttp.org/)：
  - **不推荐**，作者已被腾讯传唤，并停止维护。
- 基于 HOOK QQNT 的方案 [LiteLoaderQQNT](https://liteloaderqqnt.github.io/)...
  - 搭配 [NapCat](https://napneko.github.io/) 框架：napcat 特征几乎已经被锁定。
  - 账号体质不佳的就别试了。
- 基于 Android XP 框架注入的 Shamrock：
  - 已经停止维护。
  - 需要你有一个安卓设备来挂框架和 QQ。我的古董机已经变成暖手宝了。
  - 如果你只有安卓设备，可以尝试。记得保活，并关闭各种省电策略。
- 主要基于协议（需搭配签名服务器）：
  - [icqq.js](https://github.com/icqqjs) + [onebots](https://github.com/lc-cn/onebots)
    - 安卓协议实现，邀请制。
  - [LagrangeV2](https://github.com/LagrangeDev/LagrangeV2/)
    - Linux 协议实现，[Lagrange.Core](https://github.com/LagrangeDev/Lagrange.Core) 的新版本，目前没有适配 Onebot11 通信协议，需动手适配。
  - [Yogurt](https://acidify.ntqqrev.org/yogurt/start)
    - Linux 协议实现，目前没有适配 Onebot11 通信协议，需动手适配。

:::

::: info 备注

机器人本地有多账号在同一个环境中时，自动消息去重的机制。因此您可以放心大胆地部署分身，不会发生“发送一条指令，却从多个分身返回多个结果“的情况。

:::

::: tip 提示

如果您使用的框架支持简单的消息过滤（如 LLBot，go-cqhttp），请启用这个功能，并仅允许以 `!` 开头和其他指令相关的消息上报，这不仅可以保护您的隐私，也可以大幅节省服务器的带宽。

可能涉及到的指令前缀：`/`、`!`、`！`、`?`、`？`、`#`、`\`、数字 `0`-`9`。

- 主要的指令前缀是全角和半角的感叹号 `!`。
  - 必须配置。
- 数字前缀用于[娱乐/扔骰子](../help/fun.md)的多次投掷。
  - 不配置时，扔骰子只能以受限模式（只支持 `!d` ...）运行。
- 私服指令（偏偏要上班）是全角和半角的问号 `?`。
  - 可以不配置。
- 官方机器人的指令前缀是 `/`。
  - 可以不配置。
- 未来可能使用的指令前缀是 `\`、`#`。
  - 完全可以不配置。

:::

<script setup>
import { ref } from 'vue';

const link = 'ws://121.41.63.60:11735/pub/onebotSocket';

const copyText2 = ref(link);

async function copyToClipboard2() {
  const text = link;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (!successful) {
        throw new Error('复制失败');
      }
    }
    
    copyText2.value = '复制成功！';
    setTimeout(() => {
      copyText2.value = link
    }, 2000)

  } catch (err) {
    console.error('复制失败:', err);
    copyText2.value = '复制失败，请手动复制: ' + link;
    setTimeout(() => {
      copyText2.value = link;
    }, 3000)
  }
}

</script>

<style scoped>

.link-like {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 0;
  font: inherit;
}

.link-like:hover {
  color: #0056b3;
  text-decoration: none;
}
</style>