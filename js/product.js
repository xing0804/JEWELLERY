window.onload=function(){
    //导航移动
    //获取导航
    var navs = document.querySelectorAll(".navbox ul li");
    var line = document.querySelectorAll(".underline")
    // console.log(line);

    for (let i = 0; i < navs.length; i++) {
        navs[i].onmouseover = function () {
            line[i].style.display = "block";
        }
        navs[i].onmouseout = function () {
            line[i].style.display = "none";
        }
    }
    //返回顶部按钮显示
    var topbtn=document.querySelector(".top");

    window.onscroll=function(){
        var st = document.documentElement.scrollTop;
        if(st>700){
            topbtn.style.opacity=1;
        }else{
            topbtn.style.opacity=0;
        }

        //点击效果
        topbtn.onclick=function(){
            console.log("back");
            animate(document.documentElement, {
                scrollTop: 0
            }, 2000);
        }
    };

    //按钮移入变色
    $(".data-consult-btn").mouseover(function(){
        $(this).css({
            opacity:.8
        })
    });
    //按钮移出
    $(".data-consult-btn").mouseout(function(){
        $(this).css({
            opacity:1
        })
    });

    var num=0;
    //信息点击出现
    $(".news-title").click(function(){
        if(num%2==0){
            $(".news-content").animate({
                height:"0"
            },500);
            $(this).next(".news-content").animate({
                height:"230px"
            },500);
            $(this).children(".show-btn").html("-");
            num++;
        }else if(num%2==1){
            $(this).next(".news-content").animate({
                height:"0"
            },500);
            $(this).children(".show-btn").html("+");
            num++;
        }
        
        
    });

    //轮播图
    var box=document.querySelector(".swiper-img");
    var btns=document.querySelectorAll(".swiper-btn");
    console.log(btns);
    //滚动的函数

    function rotation() {
        num1++;
        if (num1 > btns.length - 1) {
            animate(box, {
                "marginLeft": -num1 * 620
            }, 500, Tween.Linear, function () {
                box.style.marginLeft = 0;
            });
            num1 = 0;
        } else {
            animate(box, {
                "marginLeft": -num1 * 620
            }, 500)
        }

        for (var i = 0; i < btns.length; i++) {
            btns[i].style.background = "#a3a3a3";
            btns[i].style.height="1px";
        }
        btns[num1].style.background = "#000";
        btns[num1].style.height="3px";
    }

    //自动轮播
    var num1 = 0;
    var t = setInterval(rotation, 5000)
}