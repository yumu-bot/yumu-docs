---
title: 部署分身
icon: users-rays
order: 3
date: 2025-10-19
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

## 部署分身

### 开发者分身

雨沐机器人有自己主营的分身。开发者会优先保证这个分身账号正常运行。

- 如果您见到的账号是 1563653406，很可惜，这个账号已经被风控到 2026 年了。
- 目前开发者维护的账号是：**3145729213**。

<button class="link-like" @click="copyToClipboard">{{ copyText }}</button>

::: tip 使用分身机器人的优点

- 功能完全：支持几乎所有可用的指令，包括延时指令和批量获取指令。
- 绑定持久：可以通过 oauth2 绑定。机器人会定期帮你刷新令牌，所以无需担心绑定后丢失绑定的问题。
- 留存信息：机器人会尝试收集您的游玩信息，并可用作年终总结等查询（只对您可见）。

:::

::: warning 使用分身机器人的缺点

- 违反规定：此做法违反腾讯用户规定。这可能导致您的账号被封禁（包括云控），从而造成更多负面影响。
- 健壮性低：搭设框架照样违反腾讯用户规定，许多体量大的方案都已经被拿下。
- 无法私聊：由于以上两点，我们关闭了私聊（极其容易被识别成群发广告等行为，从而被风控）。如果您想私聊查询，推荐您使用[官方机器人](official.md)。

:::

### 自构建分身

您可以使用自己的 QQ 账号，通过 WebSocket 连接到主服务器，来小范围地使用机器人。

::: danger 警告

如果您想要这么做，请注意：

尽管雨沐机器人已经尽量保证内容安全、绿色，但部署分身这一行为，还是有可能违反腾讯的用户协议。

因此可能导致的，您的 QQ 账号被腾讯**封禁、云控、限制**等一切后果和责任，开发者不予承担。

您已经被警告过了。

:::

::: tip <HopeIcon icon="person-walking-arrow-right"/> 太长不看 {id=brief}

请使用支持 **OneBot V11** 协议的 QQ 客户端，配置**反向 WebSocket** 协议代理链接为下即可。

<HopeIcon icon="tower-cell"/> **ws://121.41.63.60:11735/pub/onebotSocket**

<button class="link-like" @click="copyToClipboard2">{{ copyText2 }}</button>

:::

::: tip <HopeIcon icon="people-pulling"/> 详细部署 

- 目前开发者使用的是在 Docker 中，运行基于 [NapCat](https://napneko.github.io/) 框架的方案。

:::

::: info <HopeIcon icon="person"/> 其他方案

- 基于 Android XP 框架注入的 Shamrock：
  - 已经停止维护。
- 基于 [Mirai](https://mirai.mamoe.net/) 的 [go-cqhttp](https://docs.go-cqhttp.org/)：
  - **不推荐**，作者已被腾讯传唤，并停止维护。
  - 如果您之前就使用了此解决方案，并且账号依旧可以登录 (未出现 Code 45)，可以直接在配置文件内的 `ws-reverse` 行，填入以上所述的[反向 WebSocket 代理链接](#brief)，完成部署。
- 基于 HOOK QQNT 的方案 [LiteLoaderQQNT](https://liteloaderqqnt.github.io/) 搭配 [LLOneBot](https://github.com/LLOneBot/LLOneBot)：
  - 最近在更新，或许可以试试。
- 基于 C# 实现的 QQNT 消息协议库 [Lagrange.Core](https://lagrangedev.github.io/Lagrange.Doc/)：
  - 拉格兰的仓库已经留档；拉格兰的签名服务器虽然仍在线，但已经不可用。

:::

::: info 备注

Bot 有多账号在同一个环境中时的消息去重机制。因此您可以放心大胆地部署。不会发生“发送一条指令返回多个结果“的情况。

:::

<script setup>
import { ref } from 'vue';

const copyText = ref('点击我复制 QQ 号');

async function copyToClipboard() {
  const text = '3145729213';

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
    
    copyText.value = '复制成功！';
    setTimeout(() => {
      copyText.value = '点击我复制 QQ 号'
    }, 2000)

  } catch (err) {
    console.error('复制失败:', err);
    copyText.value = '复制失败，请手动复制: 3145729213';
    setTimeout(() => {
      copyText.value = '点击我复制 QQ 号';
    }, 3000)
  }
}

const copyText2 = ref('点击我复制地址');

async function copyToClipboard2() {
  const text = 'ws://121.41.63.60:11735/pub/onebotSocket';

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
      copyText2.value = '点击我复制地址'
    }, 2000)

  } catch (err) {
    console.error('复制失败:', err);
    copyText2.value = '复制失败，请手动复制: ws://121.41.63.60:11735/pub/onebotSocket';
    setTimeout(() => {
      copyText2.value = '点击我复制地址';
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