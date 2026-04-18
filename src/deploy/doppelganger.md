---
title: 部署分身
icon: users-rays
order: 3
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

## 目前正在被限制的账号

::: danger 警告

近期有发现部分用户滥用功能，导致开发者主要维护账号被屡次封禁。

推荐您使用其他方法部署，而且如果群内有恶意用户，机器人可能会永远收回这个群的使用权。

:::

1563653406 (雨沐 Bot | v0.8.0) 账号解封倒计时：

<Countdown
time="2026-06-12T09:21:05"
image="https://q1.qlogo.cn/g?b=qq&nk=1563653406&s=640"
expired="限制已解除"
/>

3145729213 (雨沐) 账号解封倒计时：

<Countdown
time="2026-04-19T09:18:04"
image="https://q1.qlogo.cn/g?b=qq&nk=3145729213&s=640"
expired="限制已解除"
/>

2070701187 (最后的雨沐) 账号解封倒计时：

<Countdown
time="2026-04-13T09:17:04"
image="https://q1.qlogo.cn/g?b=qq&nk=2070701187&s=640"
expired="限制已解除"
/>

## 部署分身

### 开发者分身

雨沐机器人有自己主营的分身。开发者会优先保证这个分身账号正常运行。

- 如果您见到的账号是 1563653406，很可惜，这个账号已经被风控到 2026 年中旬了。
- 目前开发者主要能够提供服务的账号是：**3145729213**。
- 如果上面这个账号也被封禁。那么唯一能提供服务的账号是 2070701187（只保留关键群，不接受申请）

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

::: info <HopeIcon icon="person"/> 其他可行方案

- 主要基于 QQNT HOOK：
  - [LLBot](https://github.com/LLOneBot/LuckyLilliaBot) - 稳定且活跃更新，值得考虑。
- 主要基于协议（需搭配签名服务器）：
  - [icqq.js](https://github.com/icqqjs) + [onebots](github.com/lc-cn/onebots) - 安卓协议实现，邀请制。
  - [LagrangeV2](https://github.com/LagrangeDev/LagrangeV2/) - Linux 协议实现，[Lagrange.Core](https://github.com/LagrangeDev/Lagrange.Core) 的新版本，目前没有适配 Onebot11 通信协议，需动手适配。
  - [Yogurt](https://acidify.ntqqrev.org/yogurt/start) - Linux 协议实现，目前没有适配 Onebot11 通信协议，需动手适配。

:::

::: info 备注

Bot 有多账号在同一个环境中时的消息去重机制。因此您可以放心大胆地部署。不会发生“发送一条指令返回多个结果“的情况。

如果您使用的框架支持简单的消息过滤（如 LLBot，go-cqhttp），请启用这个功能，并仅允许以 `!` 开头和其他 Yumu 指令相关的消息上报，这不仅可以保护您的隐私，也可以大幅节省服务器的带宽。

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
