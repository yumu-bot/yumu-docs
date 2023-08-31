---
title: Bot 功能
text: Bot 功能
icon: icons
date: 2023-08-31
footer: Yumu Docs - Bot 功能
copyright: false
---
## 组件测试

本页暂时写一些可能会用得到的组件，具体文档参考[指南|组件库](https://plugin-components.vuejs.press/zh/guide/)，希望可以用得上。

如需腾空此页写正式内容，请告知SIyuyuko

对组件有不懂的地方可以问SIyuyuko

### [谱面试听功能测试](https://plugin-components.vuejs.press/zh/guide/audioplayer.html)

该组件可以用于!song指令，支持本地音频文件，可展示标题和封面图片；

涉及跨域政策不能直接使用在线音频链接，经测试会一直加载并且报错；

封面图片尺寸建议1:1，可以自己替换图片测试，文件路径：

src/.vuepress/public/assets/image/audioCover.jpg

<AudioPlayer src="/assets/audio/1789653.mp3" title="ginkiha - イクシャ・ポリスタキア（戦闘）"/>
