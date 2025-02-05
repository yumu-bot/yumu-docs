---
title: 开发人员
icon: code
footer: Yumu Docs - 开发人员
copyright: false
order: 2
---
```card
title: Muziyami
desc: 项目主负责人、功能设计、算法设计、美术设计、产品、运维、测试、前端、后端、百科维护</br>联系方式：QQ：1340691940
logo: https://a.ppy.sh/7003013
link: https://osu.ppy.sh/users/7003013
color: rgba(253,230,138,0.15)
```

```card
title: SIyuyuko
desc: 产品、运维、网站前端</br>联系方式：QQ：3228981717
logo: https://a.ppy.sh/9794030
link: https://osu.ppy.sh/users/9794030
color: rgba(253,230,138,0.15)
```

```card
title: -Spring Night-
desc: 主开发、后端、运维、部分功能设计</br>联系方式：QQ：2480557535
logo: https://a.ppy.sh/17064371
link: https://osu.ppy.sh/users/17064371
color: rgba(245,177,153,0.15)
```

```card
title: Truncle
desc: 后端、开发 PPM 逻辑</br>联系方式：QQ：1968035918
logo: https://a.ppy.sh/14218879
link: https://osu.ppy.sh/users/14218879
color: rgba(253,230,138,0.15)
```

```card
title: Shiratori (ZhongRen)
desc: 后端、Discord 对接</br>联系方式：QQ：732713726
logo: https://a.ppy.sh/6263426
link: https://osu.ppy.sh/users/6263426
color: rgba(253,230,138,0.15)
```

```card
title: n0000000000o
desc: 百科维护</br>联系方式：QQ：1120180945
logo: https://a.ppy.sh/12215328
link: https://osu.ppy.sh/users/12215328
color: rgba(253,230,138,0.15)
```

```card
title: Dana Iclucia
desc: 临时服务器运维</br>联系方式：QQ：2785719748
logo: https://a.ppy.sh/13184288
link: https://osu.ppy.sh/users/13184288
color: rgba(193,216,172,0.15)
```


<script>
if (typeof document !== 'undefined') {
    function domLoading() {
        return !! document.querySelector(`a[href="https://osu.ppy.sh/users/17064371"]`);
    }
    function domLoaded(){
        const myCardDom = document.querySelector(`a[href="https://osu.ppy.sh/users/17064371"]`);
        myCardDom.style.zoom = 1.0;
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