---
title: 官方支持
icon: circle-nodes
order: 2
date: 2025-10-19
category: 部署
tag:
  - 部署
  - 添加
  - Bot
sticky: false
star: false
footer: Yumu Docs - 官方支持
copyright: false
---

## 官方支持

使用[**腾讯开放的机器人 API**](https://bot.q.qq.com/wiki)，并且有官方认证账号的官方机器人，已经正式上线。

### 添加至群聊或私聊

- 如果您是某群聊的群主或管理员，可以通过手机 QQ 扫描以下二维码，将官方版雨沐机器人添加至您的群聊。
- 如果您只是普通用户，也可以通过手机 QQ 扫描以下二维码，直接开始对话。
- 您也可以直接在机器人搜索界面，搜索官方雨沐机器人的 QQ 号：**3889016014**。

<button class="link-like" @click="copyToClipboard">{{ copyText }}</button>

<script setup>
import { ref } from 'vue';

const copyText = ref('点击我复制 QQ 号');

async function copyToClipboard() {
  const text = '3889016014';
  
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
    copyText.value = '复制失败，请手动复制: 3889016014';
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

![二维码](./img/QRCode.png)

- 扫描成功后，您可以看见类似以下这样的界面。
- 如果您是某群聊的群主或管理员，点击==添加到群聊==，并选择您管理或拥有的群聊即可完成添加。
- 如果您是普通用户，点击==发消息==即可开始私密使用。

![邀请界面](./img/invite.jpg)

::: tip 使用官方机器人的优点

- 开箱即用：无需任何门槛，只需扫描并点击，即可开始使用。
- 绑定方便：输入 /bind 玩家名 即可完成绑定。
- 易于使用：调用指令（输入斜杠 `/`）时，即可看见指令的提示。
- 运行稳定：只要服务器在线，机器人就可用。

:::

::: warning 使用官方机器人的缺点

- 更新缓慢：部分新功能不会部署在官方机器人上。
- 功能受限：部分功能需要更高级别的权限，而官方机器人无法获取。

:::

由于机器人的主分身账号加入的群聊太多，容易领便当，从而导致服务的不稳定。因此，如果您可以接受以上缺点（比如只是临时使用，或者只想使用部分娱乐功能），还是推荐您添加官方机器人。
