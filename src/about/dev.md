---
title: 开发人员
icon: code
footer: Yumu Docs - 开发人员
copyright: false
order: 2
---
```card
title: Muziyami
desc: 项目主负责人
logo: https://a.ppy.sh/7003013
link: https://qm.qq.com/q/tCTfvB7kgo
color: rgba(253, 230, 138, 0.15)
```

```card
title: SIyuyuko
desc: 前端、网站构建
logo: https://a.ppy.sh/9794030
link: https://osu.ppy.sh/users/9794030
color: rgba(253, 230, 138, 0.15)
```

```card
title: -Spring Night-
desc: 主开发、后端、功能设计
logo: https://a.ppy.sh/17064371
link: https://osu.ppy.sh/users/17064371
color: rgba(253, 230, 138, 0.15)
```

```card
title: Truncle
desc: 后端
logo: https://a.ppy.sh/14218879
link: https://osu.ppy.sh/users/14218879
color: rgba(253, 230, 138, 0.15)
```

```card
title: Shiratori
desc: 后端
logo: https://a.ppy.sh/6263426
link: https://osu.ppy.sh/users/6263426
color: rgba(253, 230, 138, 0.15)
```
<script>
if (typeof document !== 'undefined') {
    function domLoading() {
        return !! document.querySelector(`a[href="https://osu.ppy.sh/users/17064371"]`);
    }
    function domLoaded(){
        const myCardDom = document.querySelector(`a[href="https://osu.ppy.sh/users/17064371"]`);
        myCardDom.style.zoom = 0.6;
        const keyframes = [
            {transform: 'rotate(0turn)'},
            {transform: 'rotate(1turn)'},
        ];
        const options = {
            duration: 300,
            iterations: Infinity,
        };
        let animate;
        myCardDom.addEventListener('mouseenter', () => animate = myCardDom.animate(keyframes, options));
        myCardDom.addEventListener('mouseleave', () => {
            myCardDom.style.transform = getComputedStyle(myCardDom).transform;
            animate.cancel();
        });
    }
    let max_time = 100;
    function loop() {
        if (domLoading()) {
            domLoaded();
            return;
        }
        if (max_time > 0) {
            max_time--;
            setTimeout(loop, 50);
        } else {
            console.log("loading time out");
        }
    }
    loop();
}
</script>