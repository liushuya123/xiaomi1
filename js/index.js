//banner
{
    let imgs=document.querySelectorAll(".imgbox li");
    let pagers=document.querySelectorAll(".pagerbox li");
    let banner=document.querySelector("#banner");
    let banner_lbtn=document.querySelector(".banner_lbtn");
    let banner_rbtn=document.querySelector(".banner_rbtn");
    // console.log(banner_rbtn)
    // console.log(banner)
    pagers.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele pagers[index]指的都是一个
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    })
    //setInterval()每隔一段时间重复执行  3000（3秒）指的是时间，单位是毫秒
    //轮播中的自动播放
    let n=0;
    let t=setInterval(move,2000);
    function move() {
        n++;
        // n=n%5;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    banner.onmouseenter=function () {
        clearInterval(t)
    };
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    };
    let flag=true;
    banner_rbtn.onclick=function () {
        if(flag){
            flag=false;
            move();
        }
    }
    banner_lbtn.onclick=function () {
        if(flag){
            flag=false;
            n-=2;
            move();
        }
    };
    imgs.forEach(function (ele) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    })
}
//单品
{   function good1(parent) {
        const prev=parent.querySelector(".danpin_btn1");
        const next=parent.querySelector(".danpin_btn2");
        const inner=parent.querySelector(".bottom1");
        let n=0;
        next.onclick=function () {
            n++;
            prev.classList.remove("disable1");
            if(n==2){
                this.classList.add("disable1");
            }
            if(n==3){
                n=2;
                return;
            }
            inner.style.marginLeft=-1226*n+"px";
        };
        prev.onclick=function () {
            n--;
            next.classList.remove("disable1");
            if(n===0){
                this.classList.add("disable1");
            }
            // if(n==1){
            //     next.classList.remove("disable");
            // }
            if(n===-1){
                n=0;
                return;
            }
            inner.style.marginLeft=-1226*n+"px";
        }
    }
    const good1s=document.querySelectorAll(".good1");
    good1s.forEach(function (ele) {
        good1(ele);
    })
}
//搭配
{   function dapei(parent) {
        const types=parent.querySelectorAll(".type");
        const goods=parent.querySelectorAll(".part2");
        types.forEach(function (ele,index) {
            ele.onmouseenter=function () {
                for(let i=0;i<goods.length;i++){
                    types[i].classList.remove("active2");
                    goods[i].classList.remove("active2");
                }
                this.classList.add("active2");
                goods[index].classList.add("active2");
            }
        })
    }
    const dapeis=document.querySelectorAll(".dapei");
    dapeis.forEach(function (ele) {
        dapei(ele);
    })
}
