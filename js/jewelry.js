window.onload = function () {
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

    //标签点击事件
    //获取标签
    var labels=document.querySelectorAll(".li-right a");
    // console.log(labels);
    for(let i=0;i<labels.length;i++){
        labels[i].onclick=function(){
            console.log(i);
            for(var j=0;j<labels.length;j++){
                labels[j].style.cssText="border: none; color: #999;"
            }
            labels[i].style.cssText="border: 1px solid #999; color: #000;"
        }
    }
    var labels1=document.querySelectorAll(".li-right1 a");
    // console.log(labels);
    for(let i=0;i<labels1.length;i++){
        labels1[i].onclick=function(){
            console.log(i);
            for(var j=0;j<labels1.length;j++){
                labels1[j].style.cssText="border: none; color: #999;"
            }
            labels1[i].style.cssText="border: 1px solid #999; color: #000;"
        }
    }

    //查看更多
    var more=document.querySelector(".more");
    var con=document.querySelector(".con-list");
    more.onclick=function(){
        more.style.display="none";
        con.style.height="2500px";
    }

    //照片放大
    //获取照片容器
    var imgboxs=document.querySelectorAll(".img");
    var imgs=document.querySelectorAll(".img img");
    // console.log(imgboxs.length);
    for(let i=0;i<imgboxs.length;i++){
       
        imgboxs[i].onmouseover=function(){
            console.log(i);
            imgs[i].style.animation="imgover 2s";
        }
        imgboxs[i].onmouseout=function(){
            console.log(i);
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
    }

}