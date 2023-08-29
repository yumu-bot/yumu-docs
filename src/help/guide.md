---
title: 指令
author: Muziyami
---
# YumuBot功能大纲 20230728

## 1. 内部指令

### 1.0 指令查询 !help (!h)

查询机器人基础指令，查询以下所有模块（2-9）指令

```
<panel-help.png>
```

### 1.1 服务状态 !ping (!pi)

机器人服务状态、PPYAPI状态。

##### !ymping

回复机器人状态。

### 1.2 绑定 !bind (!bi)

##### !ymbind

回复一个用于 oauth 绑定的链接。

### 1.3 用户禁用 !ban (!bq / !bu / !bg)

封禁、解封用户，或是退出某群并拉入黑名单。

##### !ymban

回复用户需要禁用的类型。

``` 
请选择要禁用的类型：
!ymbanqq (!bq) [QQ] 封禁QQ号
!ymbanuser (!bu) [Username] 封禁玩家
!ymbangroup (!bg) [QQGroup] 封禁群聊
```

##### !ymbanqq 1340691940

回复用户禁用状态。

成功：

```
禁用成功！1340691940已被小沐标记！
```

```
解禁成功！1340691940已恢复正常！
```

失败：

```
禁用失败！请查阅可能的原因：[errorcode]
```

```
解禁失败！请查阅可能的原因：[errorcode]
```

### 1.4 功能开关 !switch (!sw)

查询模块是否开启，控制以下所有模块（2-9）开关

##### !ymswitch

```
目前开启的功能有：
!ymhelp
!ymaudio
!ymbeatmap：
目前关闭的功能有：
!ymsetu
```

##### !ymswitch h on

```
已经启用 Help 功能。
```

```
启用失败！请查阅可能的原因：[errorcode]
```

### 1.5 防刷屏机制 !antispam (!as)

开启后，三次或以上30秒内申请同一项指令，或是四次或以上30秒内申请多项指令均触发防刷屏。
触发时，bot发送随机一句话提示刷屏，如果再次触发则冷静5分钟。ymz指令和此通用。

## 2. 成绩

### 2.1 默认模式 !mode (!sm)

### 2.2 最近通过成绩 !pr (!p)

### 2.3 最近成绩 !recent (!r)

### 2.4 谱面成绩 !score (!s)

### 2.5 最好成绩 !bp (!b)

### 2.6 今日最好成绩 !todaybp (!tbp)

### 2.7 分析最好成绩 !bpanalyze (!ba)

### 2.8 今日历史记录查询 !today (!td)

默认查询用户24h内所有成绩并列出，最多100条。同时需要查询用户bp，并进行对比，若有新bp则加发光效果

## 3. 玩家

### 3.1 玩家信息  !info (!i)

!uui 也能使用。或者可以开发**进阶信息 !extra (!x)**

### 3.2 谱师信息 !mapper (!mr)

### 3.3 好友 !friend (!f)

### 3.4 主页 !mutual (!mu)

输出用户的主页链接

### 3.5 根据号获取名 !uid (!id)

### 3.6 根据名获取号 !username (!un)

### 3.7 PP- ppminus (!ppm)

### 3.8 PP+ ppplus (!ppp)

#### 

## 4. 谱面

### 4.1 谱面信息 !map (!m)

### 4.2 谱面试听 !audio (!a)

### 4.3 谱面搜索 !search (!sh)

### 4.4 头衔课题 !course (!c)

### 4.5 过审区列表 !qualified (!q) 

输出目前Q区谱面上架时间

### 4.6 谱面榜单 !list (!l)

## 5. 比赛

### 5.1 导航 !match (!mc)

主页其实就是一张图片或者面板，介绍功能，通报最近的比赛或者elo变化。从otsu获取。

### 5.2 木斗力 !rating (!ra)

通过计算已经打完的比赛来给出评价分数。

!ymra [bid] (warmup) (includingfail?)

斗力拓展 

ymra:m 默认 ymra:p 光斗力 ymra:g 高斗力 ymra:s osuplus斗力...待定
使用第三方算法计算。

### 5.3 ELO查询 !elo (!e)

 [uid]

查询某人的elo，走爆炸鸽的API

### 5.4 监视比赛 !monitor (!mo)

监视，通报成绩，获取获胜条件并自动判断，允许发起监视的用户修改当前得分或者数据等
ymmo(:)(ratingmode) [mpid]

若监听到房间已关闭，或者请求的用户输入
!ymmo closed，则关闭监听并按ymra:m(木斗力)面板输出

### 5.5 图池查询 !mappool (!mp)

 [string]

类似于ymwiki，默认展示出现有的所有图池，输入对应图池编号（如MP5S12R1）获得图池展示。

### 5.6 图池录入 !addpool (!ma)

 [poolname] [a long string]

可允许玩家录入图池。然后发送到bot群审核（审核图即录入展示的界面），通过审核，bot即会记录下此图池并存档。

同时需要存储非r/a/l谱面（最好是获取到osu文件）和非r/a/l谱面的banner头图。

用户查询的时候，需要对比谱面状态非ranked/approved/loved的谱面。若官网无数据，则**保留本地文件**，并在谱面上作提示（比如变灰之类，但是旧数据不能丢），若官网有数据，则**替换本地文件**

### 5.7 上传比赛 !uploadmatch (!um)

[bid] (warmup) (includingfail?)

匹配方式和ymra一样把比赛上传到otsu供爆炸鸽记录。然后唤起ymra:p(光斗力)并输出结果。

### 5.8 房间情况 !monitornow (!mn)

## 6. 聊天

### 6.1 全局被动回复 (ympassivechat)

### 6.2 私聊聊天 (ymchat)

GPT 聊天

## 7. 娱乐

### 7.1 掷骰子 dice/roll (!d)

### 7.2 抽卡积分 !gold (!g)

查询并更新积分

### 7.3 抽卡抽取 draw (!dw)

### 7.4 抽卡仓库 category (!dc)

### 7.5 词云 wordcloud (!wc)

### 7.6 今日运势 lucky (!n)

### 7.7 判断 judge (!j)

（选A还是选B）

### 7.8 色图 setu (!se)

### 7.9 网站图 konachan yandere (!sk) (!sy)

 konachan(yandere) / ymsk(ymsy) 

...待定

### 7.7 奇特的个人对决？versus / ymv 

...待定

获取抽卡基础信息，抽卡获取结果-!ymdw10 十连，!ymdw 获取信息 !dw1 单抽，!ymdw

## 8. 辅助

#### 8.1 移调 ymtrans / ymtr

输入主音，给出相应的大调、和声小调、旋律小调组合。

#### 8.2 禁言睡眠 ymsleep / ymz

给予精致8小时睡眠并评价。至少1小时后，再次私聊bot!ymz即可解除禁言，但进入7小时冷却时间。（冷却时间三次以上申请sleep即触发刷屏机制！）

#### 8.3 天气 ymweather / ymwt [city]

## 9. 自定义

#### 9.1 设置主模式 setmode / ymsm

#### 9.2 修改主面板 setpanel / ymsp

（目前不开放）

#### 9.3 修改头图 setbanner / ymsb

#### 9.4 修改卡片背景 setcard / ymsc

## 10. 短链字母表

- **A / audition (ymsongs)** 
- **B / bestperformance**
- C / course
- D / dice (ymroll)
- E / elo
- **F / friend**
- G / gold (start/积分)
- **H / help**
- **I / infomation**
- J
- K
- **L / leaderboard**
- M / map
- N
- O
- **P / passrecent**
- **Q / qualified**
- **R / recent**
- **S / score**
- T / tournament
- U
- V / versus
- W / wiki [长期更新]
- X
- Y
- Z / sleep

双缩写

- AS / antispam
- **BA / bpanalysis (bpht)**
- BG / bangroup
- **BI / bind**
- BQ / banqq
- BU / banuser
- DW / draw
- MA / addpool
- MO / monitor
- **MN / monitornow**
- MP / mappool
- **MU / mutual**
- MR / mapper
- **PI / ping**
- **RA / murating**
- SB / setbanner
- SC / setcard
- **SE / setu**
- SH / search
- **SM / setmode**
- SP / setpanel
- SU / super
- **SW / switch**
- TD / today
- **TR / trans**
- UM / uploadmatch
- WC / wordcloud
- WT / weather
- **PPM / ppm/ppm/ppmvs**
- PPP / ppp/ppp/pppvs

没有缩写的功能

- **roll**