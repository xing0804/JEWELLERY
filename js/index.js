window.onload = function () {
    //导航移动
    //获取导航
    var navs = document.querySelectorAll(".navbox ul li");
    var line = document.querySelectorAll(".underline")
    // console.log(line);

    for (let i = 0; i < navs.length; i++) {
        navs[i].onmouseover = function () {
            // console.log(line[i]);
            // animate(line[i], {
            //     display: "block",
            //     width:20
            // }, 300);
            line[i].style.display = "block";
        }
        navs[i].onmouseout = function () {
            line[i].style.display = "none";
        }
    }

    //照片放大
    //获取照片容器
    var imgboxs=document.querySelectorAll(".img");
    var imgs=document.querySelectorAll(".img img");
    // console.log(imgboxs.length);
    for(let i=0;i<imgboxs.length;i++){
       
        imgboxs[i].onmouseover=function(){
            imgs[i].style.animation="imgover 2s";
        }
        imgboxs[i].onmouseout=function(){
            imgs[i].style.animation="none";
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

    //点击跳转系列
    var series=document.querySelectorAll(".img");
    // console.log(series);
    series[0].onclick=function(){
        window.location.href="../geometry.html";
    };
    series[1].onclick=function(){
        window.location.href="../ring.html";
    };
    series[2].onclick=function(){
        window.location.href="../earing.html";
    };
    series[3].onclick=function(){
        window.location.href="../lifetime.html";
    };
    series[4].onclick=function(){
        window.location.href="../letter.html";
    };

}