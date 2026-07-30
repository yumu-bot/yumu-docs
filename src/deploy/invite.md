---
title: 邀请分身
icon: building-user
order: 3
category: 部署
tag:
  - 部署
  - 添加
  - Bot
sticky: false
star: false
footer: Yumu Docs - 邀请分身
copyright: false
---

开发者有自己主营的分身账号，来搭载雨沐机器人。开发者会优先保证这些分身账号正常运行。

<VPCard
title="1563653406"
desc="待命的账号<br />（不一定接受申请，我先正常跑一段时间）"
logo="https://q1.qlogo.cn/g?b=qq&nk=1563653406&s=640"
link="https://qm.qq.com/q/zK2BggSQcU"
background="rgba(74,190,21,0.15)"
/>

<VPCard
title="2070701187"
desc="目前主要被封的账号<br />（别踢我！）"
logo="https://q1.qlogo.cn/g?b=qq&nk=2070701187&s=640"
link="https://qm.qq.com/q/lPIJdXnajC"
background="rgba(246,142,85,0.15)"
/>

<VPCard
title="3145729213"
desc="目前主要被封的账号<br />（别踢我！）"
logo="https://q1.qlogo.cn/g?b=qq&nk=3145729213&s=640"
link="https://qm.qq.com/q/p3kK5xsBBC"
background="rgba(246,142,85,0.15)"
/>

3145729213 账号解封倒计时：

<Countdown
  time="2026-08-26T09:26:00"
  image="https://q1.qlogo.cn/g?b=qq&nk=3145729213&s=640"
  expired="限制已解除"
/>

2070701187 账号解封倒计时：

<Countdown
time="2026-08-09T09:09:00"
image="https://q1.qlogo.cn/g?b=qq&nk=2070701187&s=640"
expired="限制已解除"
/>

::: danger 警告

邀请分身机器人之前请确认...

- 目标群聊是否主要讨论 osu!？
  - 如果目标群聊是您的私人群、或范围特别小的群，可无视此条。
  - 如果目标群聊头像、名称含有 osu! 相关的内容，可默认满足此条。
- 目标群聊成员是否愿意使用机器人？
  - 除了邀请人（您）之外，还有其他愿意尝试使用机器人或讨论 osu! 的成员吗？
  - 使用人数至少得超过 3-5 人，否则邀请分身机器人毫无意义。
  - 使用频次越低，越容易触发以下的条件。

如果您无法确认以上两点，邀请前请三思。也许此时，使用[官方机器人](./official.md)才是您的最优解。

除此之外，开发者会不定期筛选出==活跃特别低==、同时==人数特别多==的群聊（低效率），并主动将开发者主营的分身机器人从这些群聊中退出。

<button class="link-like" @click="copyToClipboard">{{ copyText }}</button>

:::

::: tip 邀请分身机器人的优点

- 功能全面：支持几乎所有可用的指令，包括延时指令和批量获取指令。
- 绑定持久：可以通过 oauth2 绑定。机器人会定期帮你刷新令牌，所以无需担心绑定后丢失绑定的问题。
- 历史记录：机器人会尝试收集您的游玩信息，并可用作年终总结、历史对比等查询（逐步上线）。
- 操作简单：只需像邀请普通用户那样向机器人发送邀请，或是在好友申请中输入群聊 QQ，即可完成邀请。

:::

::: warning 邀请分身机器人的缺点

- 等待过长：开发者会不定时处理这些账号内的邀请信息。如果您想马上使用它，可以使用[官方机器人](./official.md)。
- 消息泄露：开发者能通过这些账号看见所处群里的==所有信息==。如果您对隐私方面比较重视，可以选择选择[自己部署](./doppelganger.md)，并只筛选含有指令头的消息发送过来。
- 无法私聊：由于私聊容易被识别成异常活动（从而导致账号被封禁），我们关闭了私聊。[官方机器人](official.md)支持私聊。
- 限量运行：同上。

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

