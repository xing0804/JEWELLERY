window.onload = function () {
    //导航移动
    //获取导航
    var navs = document.querySelectorAll(".navbox ul li");
    var line = document.querySelectorAll(".underline")

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
    }

}