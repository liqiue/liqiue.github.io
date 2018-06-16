/*--设置 轮播滚动 动画--*/


/*--第一种方法*/
//setInterval(function(){  /*-设置定时器-*/
//    x();
//},2500);
//setInterval(function(){  
//    e();
//    h();
//},3000)


/*-第二种方法-*/
setInterval(function(){  /*-设置定时器-*/
    x();
    setTimeout(function(){  /*-清除定时器-*/
        e();
        h();
    },2500)
},3000);


//向上偏移负16像素
function x(){
    $(".news .center .text").css({"transform":"translateY(-16px)","transition":"1s"});
}

//归零
function e(){
    $(".news .center .text").css({"transform":"translateY(0)","transition":"0s"});
}

//把第一个移动到末尾
function h(){
    $(".news .center .text").eq(0).appendTo($(".news .center"));
}








//首页京东秒杀部分的效果（倒计时）第一种方法

//function countTime() {
//    //获取当前时间
//    var date = new Date();
//    var now = date.getTime();
//    //设置截止时间
//    var str = "2018/5/31 20:00:00";
//    var endDate = new Date(str);
//    var end = endDate.getTime();
//
//    //时间差
//    var leftTime = end - now;
//    //定义变量 d,h,m,s保存倒计时的时间
//    var d, h, m, s;
//    if (leftTime >= 0) {
//        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
//        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
//        m = Math.floor(leftTime / 1000 / 60 % 60);
//        s = Math.floor(leftTime / 1000 % 60);
//    }
//    //将倒计时赋值到div中
//    //document.getElementById("_d").innerHTML = d + "天";
//    document.getElementById("_h").innerHTML = h;
//    document.getElementById("_m").innerHTML = m;
//    document.getElementById("_s").innerHTML = s;
//    //递归每秒调用countTime方法，显示动态时间效果
//    setTimeout(countTime, 1000);
//
//}
//
//countTime();




//首页京东秒杀部分的效果（倒计时） 第二种方法

var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    /*- 月份是从零开始算起的 所以写 5 既是 6月 -*/
    futureDate: Date.UTC(2018, 6, 1, 8),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());






//.search 部分 滚动到一定高度显示背景色 样式 （否则无色）
var search = document.querySelector(".search");
window.onscroll = function(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop>10){ //浏览器兼容
        document.querySelector(".search").style.background="#82495c";
        search.style.top = "0";
    }else{
        document.querySelector(".search").style.background="transparent";
        search.style.top = "auto";
    }
}



//close 部分 点击消失事件
var close = document.querySelector("#close");
var ad = document.querySelector("#ad");
if(ad != null){
    if(sessionStorage.ad == "flose"){
    ad.style.display = "none";
    }else{
    ad.style.display = "block";
    }
}

if(ad != null){
    close.onclick = function(){
        ad.style.display = "none";
        sessionStorage.ad = "flose";
    }
}





//----swiper轮播图效果-----
  var mySwiper = new Swiper ('.banner', {
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
  })  



  
  
/*-----京东直播效果------*/
  var swiper = new Swiper('.bo', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
      pagination: {
        el: '.swiper-pagination',
    },
});




/*------vue 效果-------*/
/*-------为你推荐-------*/
new Vue ({
    el:"#shop",
    data:{
        arrs:[
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c...",link:"ziying",img:"img/weinituijian/1.png",price:"￥21.8",span:"PLUS",h6:"￥19.80"},
            {name:"安昕 良选男士船袜5双装 中简棉袜商务男袜子吸汗透气短袜 船...",img:"img/weinituijian/2.png",price:"￥38.00",a:"看相似"},
            {name:"苹果原装数据线iPhone7 Plus //6P/ 5SE/ iPadpro手机USB线...",img:"img/weinituijian/3.png",price:"￥155.00",a:"看相似"},
            {name:"真皮多卡拉零钱包女士卡夹信用卡包头层牛皮驾驶证皮套风琴...",img:"img/weinituijian/4.png",price:"￥59.00",a:"看相似"},
            {name:"QANLIIY千里鹰便携双筒望远镜高倍高清微光夜视非红外军演...",img:"img/weinituijian/5.png",price:"￥138.00",a:"看相似"},
            {name:"【京东超市】蒙牛（MENGNIU）成人奶粉 全脂...",link:"ziying",img:"img/weinituijian/6.png",price:"￥27.80",a:"看相似"},
            {name:"【京东超市】清风（APP）卷纸 原木纯品 3层270段卫生...",link:"ziying",img:"img/weinituijian/7.png",price:"￥18.90",a:"看相似"},
            {name:"【京东超市】绿之源 360°室内装修安全卫士活性炭汽车...",link:"ziying",img:"img/weinituijian/8.png",price:"￥99.00",a:"看相似"},
            {name:"澳洲进口 卢卡斯Lucas番木瓜膏滋润保湿万用膏 驱蚊...",link:"quanqiugou",img:"img/weinituijian/9.png",price:"￥49.00",a:"看相似"},
            {name:"海尔（Haier）BCD-201STPA 201升 三门冰...",link:"ziying",img:"img/weinituijian/10.png",price:"￥1199.00",a:"看相似"},
            {name:"",img:"img/weinituijian/11.png",link:"",price:""},
            {name:"【京东超市】三只松鼠 肉干肉脯 零食小吃 牛肉烧烤味小...",link:"ziying",img:"img/weinituijian/12.png",price:"￥21.90",a:"看相似"},
            {name:"【京东超市】泰国进口 休闲零食 小老板 烤海苔卷 脆紫菜...",link:"ziying",img:"img/weinituijian/13.png",price:"￥13.80",a:"看相似"},
            {name:"日本 熊野油脂（Horse oil）无硅油马油洗发水 丝质顺滑...",link:"quanqiugou",img:"img/weinituijian/14.png",price:"￥49.00",a:"看相似"},
            {name:"【京东超市】惠氏启赋（Wyeth illuma）较大婴儿和...",link:"ziying",img:"img/weinituijian/15.png",price:"￥298.00",a:"看相似"},
            {name:"【国际名品直销】GOLF精品牛皮多卡位男士手包可装手机加...",img:"img/weinituijian/16.png",price:"￥219.00",a:"看相似"},
            {name:"【京东超市】【京东配送】【双轴承 宽轮 可折叠】健爵滑板车 三轮多彩闪...",img:"img/weinituijian/17.png",price:"￥18.90",a:"看相似"},
            {name:"【京东超市】法国进口 达能正品 依云（evian）天然矿泉水...",link:"ziying",img:"img/weinituijian/18.png",price:"￥99.00",a:"看相似"},
            {name:"【苏之润记忆棉靠垫】办公室汽车座椅护腰靠垫腰靠靠背靠枕...",img:"img/weinituijian/19.png",price:"￥89.00",a:"看相似"},
            {name:"泰昌（taichang）TC-5197全自动按摩足浴盆洗脚盆泡脚...",link:"ziying",img:"img/weinituijian/20.png",price:"￥369.00",a:"看相似"}
            
        ]
    }
})






/*-回到顶部--*/

//js实现的返回顶部效果
//var fanhuidingbu = document.querySelector("#top");
//console.log(fanhuidingbu);

//fanhuidingbu.addEventListener("click",function(){     //直接跳回顶部
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
//});



//fanhuidingbu.addEventListener("click",function(){
//    //setInterval 一直执行
//    var t = setInterval(function(){
//        document.body.scrollTop = document.body.scrollTop -20;
//        document.documentElement.scrollTop = document.documentElement.scrollTop -20;      //平滑的返回顶部   （js唯一的缺点就是不能隐藏图标 相比jq要麻烦）
//        console.log(document.body.scrollTop);
//        //如果返回顶部，就清除计时器
//        if(document.body.scrollTop === 0 ){
//            clearInterval(t);
//        }
//    },10)
//});


//滚动事件
//window.onscroll = function(){
//    var totop = document.getElementById("top");
//    console.log(document.body.scrollTop);
//    if(document.body.scrollTop > 370){
//        totop.style.display = "inline-block";
//    }else{
//        totop.style.display = "none";
//    }
//}





//jq实现的反回顶部效果 并有显示隐藏效果
$(function(){
    $("#top").click(function(){
        //浏览器兼容
        $("body,html").animate({"scrollTop":"0px"},1500)
    });
    $("#top").hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $("#top").fadeIn(1500);
           }else{
               $("#top").hide(1500);
           }
    })
})






/*----------main top 1-1 效果-----------*/
new Vue ({
    el:"#top2",
    data:{
        arrs:[
            {name1:"坚果炒货",name2:"糖巧",name3:"休闲零食",name4:"肉干肉铺",name5:"饼干蛋糕",name8:"蜜栈果干",name7:"无糖食品",img1:"img/fenlei/lingshi/1.jpg",img2:"img/fenlei/lingshi/2.jpg",img3:"img/fenlei/lingshi/3.jpg",img4:"img/fenlei/lingshi/4.jpg",img5:"img/fenlei/lingshi/5.jpg",img8:"img/fenlei/lingshi/6.jpg",img7:"img/fenlei/lingshi/7.jpg",h5:"休闲零食",link:"http//www.jd.com",img:"img/fenlei/lingshi/1-top.png"},
            {name1:"新鲜水果",name2:"海鲜生产",name3:"肉类",name4:"禽类蛋品",name5:"海鲜蔬菜",name8:"冷冻食品",name7:"饮品甜品",img1:"img/fenlei/shengxian/1.jpg",img2:"img/fenlei/shengxian/2.jpg",img3:"img/fenlei/shengxian/3.jpg",img4:"img/fenlei/shengxian/4.jpg",img5:"img/fenlei/shengxian/5.jpg",img8:"img/fenlei/shengxian/6.jpg",img7:"img/fenlei/shengxian/7.jpg",h5:"京东生鲜",link:"http//www.jd.com",img:"img/fenlei/lingshi/1-top.png"},
            {name1:"面粉",name2:"大米",name3:"杂粮",name4:"食用油",name5:"调味品",name6:"方便素食",name7:"烘焙原料",name8:"有机食品",name9:"南北干货",img1:"img/fenlei/liangyou/1.jpg",img2:"img/fenlei/liangyou/2.jpg",img3:"img/fenlei/liangyou/3.jpg",img4:"img/fenlei/liangyou/4.jpg",img5:"img/fenlei/liangyou/5.jpg",img6:"img/fenlei/liangyou/6.jpg",img7:"img/fenlei/liangyou/7.jpg",img8:"img/fenlei/liangyou/8.jpg",img9:"img/fenlei/liangyou/9.png",h5:"粮油调味",link:"http//www.jd.com",img:"img/fenlei/lingshi/1-top.png"},
            {name1:"饮用水",name2:"饮料",name3:"牛奶乳品",name4:"咖啡奶茶",name5:"茗茶",name6:"成人奶粉",name7:"冲饮谷物",name8:"蜂蜜/柚子茶",img1:"img/fenlei/mingcha/1.jpg",img2:"img/fenlei/mingcha/2.jpg",img3:"img/fenlei/mingcha/3.jpg",img4:"img/fenlei/mingcha/4.jpg",img5:"img/fenlei/mingcha/5.jpg",img6:"img/fenlei/mingcha/6.jpg",img7:"img/fenlei/mingcha/7.jpg",img8:"img/fenlei/mingcha/8.jpg",h5:"水饮茗茶",link:"http//www.jd.com",img:"img/fenlei/lingshi/1-top.png"},
            {name1:"休闲零食",name2:"饼干蛋糕",name7:"糖果巧克力",name4:"冲调饮品",name5:"粮油调味",img1:"img/fenlei/jinkou/1.jpg",img2:"img/fenlei/jinkou/2.jpg",img7:"img/fenlei/jinkou/3.jpg",img4:"img/fenlei/jinkou/4.jpg",img5:"img/fenlei/jinkou/5.jpg",h5:"进口食品",link:"http//www.jd.com",img:"img/fenlei/lingshi/1-top.png"},
            {name1:"白酒",name2:"葡萄酒",name7:"洋酒",name4:"啤酒",name5:"黄酒/养生酒",name8:"陈年老酒",img1:"img/fenlei/mingjiu/1.jpg",img2:"img/fenlei/mingjiu/2.jpg",img7:"img/fenlei/mingjiu/3.jpg",img4:"img/fenlei/mingjiu/4.jpg",img5:"img/fenlei/mingjiu/5.jpg",img8:"img/fenlei/mingjiu/6.jpg",h5:"中外名酒",link:"http//www.jd.com",img:"img/fenlei/lingshi/1-top.png"},
            {name1:"营养健康",name2:"营养成分",name7:"滋补养生",name4:"计生用品",img1:"img/fenlei/yingyang/1.jpg",img2:"img/fenlei/yingyang/2.jpg",img7:"img/fenlei/yingyang/3.jpg",img4:"img/fenlei/yingyang/4.jpg",h5:"营养保健",link:"http//www.jd.com",img:"img/fenlei/lingshi/1-top.png"},
            {name1:"奶粉",name2:"营养辅食",name3:"尿裤湿巾",name4:"喂养用品",name5:"洗护用具",name6:"童装",name7:"妈妈专区",name8:"童车童床",name9:"玩具",img1:"img/fenlei/muying/1.jpg",img2:"img/fenlei/muying/2.jpg",img3:"img/fenlei/muying/3.jpg",img4:"img/fenlei/muying/4.jpg",img5:"img/fenlei/muying/5.jpg",img6:"img/fenlei/muying/6.jpg",img7:"img/fenlei/muying/7.jpg",img8:"img/fenlei/muying/8.jpg",img9:"img/fenlei/muying/9.jpg",h5:"母婴玩具",link:"http//www.jd.com",img:"img/fenlei/lingshi/1-top.png"},
            {name1:"床品套件",name2:"被子被芯",name3:"毛巾浴巾",name4:"睡衣家服",name5:"厨具",name6:"收纳用品",name7:"雨伞雨具",name8:"宠物园艺",name9:"台灯",img1:"img/fenlei/jiaju/1.jpg",img2:"img/fenlei/jiaju/2.jpg",img3:"img/fenlei/jiaju/3.jpg",img4:"img/fenlei/jiaju/4.jpg",img5:"img/fenlei/jiaju/5.jpg",img6:"img/fenlei/jiaju/6.jpg",img7:"img/fenlei/jiaju/7.jpg",img8:"img/fenlei/jiaju/8.jpg",img9:"img/fenlei/jiaju/9.jpg",h5:"家居用品",link:"http//www.jd.com",img:"img/fenlei/lingshi/1-top.png"},
        ]
    }
})



/*----选项卡 jq实现的效果---*/
$(function(){
        $(".tab_box>div:not(:first)").hide();
        $(".tab_menu li").eq(0).addClass("selected")
        $(".tab_menu li").click(function(){   
            var n=$(this).index();
            $(this).addClass("selected").siblings("li").removeClass("selected");
            
            $(".tab_box>div").eq(n).show().siblings("div").hide();
        }).hover(function(){
            $(this).addClass("hover");
        },function(){
            $(this).removeClass("hover");
        })
    })





/*-------js实现效果-------*/
//var srotNav = document.querySelectorAll(".tt > li");
//    console.log(srotNav);
//var srotList = document.querySelectorAll(".main > .q1");
//    console.log(srotList);
//for(var z=0;z<srotList.length;z++){
//    srotList[z].style.display="none";
//}
//srotList[0].style.display="block";
//srotNav[0].style.color="red";
//for(var i=0;i<srotNav.length;i++){
//    srotNav[i].index = i;
//    srotNav[i].onclick = function(){
//        for(var j=0;j<srotList.length;j++){
//            srotNav[j].style.color="";
//            srotList[j].style.display="none";
//        }
//        srotNav[this.index].style.color="red";
//        srotList[this.index].style.display="block";
//    }
//}





/*------------  觅 部分的 vue---------------*/

new Vue ({
    el:"#mi1",
    data:{
        mis:[
            {h3:"打破黑白灰的沉闷感，你只差一只红色包包",span:"米拉搭配 · 1133人阅读",img1:"img/mi/1.jpg",btn:"img/mi/btn.jpg"},
            {h3:"儒雅汉文化加持，舒适中国风棉麻衬衫",span:"型男衣品sh... · 714人阅读",img1:"img/mi/2.jpg",btn:"img/mi/btn2.jpg"},
            {h3:"老款功放机如何加装无线蓝牙功能？",span:"时尚数码评测 · 2026人阅读",img1:"img/mi/3.jpg",btn:"img/mi/btn3.jpg"},
            {h3:"百公里油耗1.6L？这地球上竟有这么省油的车！",span:"邱小铖 · 2740人阅读",img1:"img/mi/4.jpg",btn:"img/mi/btn4.jpg"}
        ],
        mism:[
            {i:"img/mi/datu.png",h4:"毛多还有狐臭怎么办",m:"img/mi/btn.jpg",sp:"大兔子 · 太原"},
        ],
        miss:[
            {h3:"打破黑白灰的沉闷感，你只差一只红色包包",span:"米拉搭配 · 1133人阅读",img1:"img/mi/1.jpg",btn:"img/mi/btn.jpg"},
            {h3:"儒雅汉文化加持，舒适中国风棉麻衬衫",span:"型男衣品sh... · 714人阅读",img1:"img/mi/2.jpg",btn:"img/mi/btn2.jpg"},
            {h3:"老款功放机如何加装无线蓝牙功能？",span:"时尚数码评测 · 2026人阅读",img1:"img/mi/3.jpg",btn:"img/mi/btn3.jpg"},
            {h3:"百公里油耗1.6L？这地球上竟有这么省油的车！",span:"邱小铖 · 2740人阅读",img1:"img/mi/4.jpg",btn:"img/mi/btn4.jpg"}
        ],
        misms:[
            {i:"img/mi/datu1.png",h4:"畅爽夏日，买个车载冰箱到底值不值？",m:"img/mi/btn.jpg",sp:"京东问答，0次观看"},
        ],
    }
})







new Vue ({
    el:"#guan",
    data:{
        guans:[
            {img:"img/mi/guanzhu1.png",h3:"Becks",span:"粉丝数3024 · 发布871篇",h5:"04月15日更新《OPP商务皮鞋》",jia:"+"},
            {img:"img/mi/guanzhu1.png",h3:"Becks",span:"粉丝数3024 · 发布871篇",h5:"04月15日更新《OPP商务皮鞋》",jia:"+"},
            {img:"img/mi/guanzhu1.png",h3:"Becks",span:"粉丝数3024 · 发布871篇",h5:"04月15日更新《OPP商务皮鞋》",jia:"+"},
            {img:"img/mi/guanzhu1.png",h3:"Becks",span:"粉丝数3024 · 发布871篇",h5:"04月15日更新《OPP商务皮鞋》",jia:"+"},
            {img:"img/mi/guanzhu1.png",h3:"Becks",span:"粉丝数3024 · 发布871篇",h5:"04月15日更新《OPP商务皮鞋》",jia:"+"},
            {img:"img/mi/guanzhu1.png",h3:"Becks",span:"粉丝数3024 · 发布871篇",h5:"04月15日更新《OPP商务皮鞋》",jia:"+"},
        ]
    }
})





/*----觅 部分的选项卡---*/

var main1 =document.querySelectorAll(".main1 ul .gt");
console.log(main1)
var he =document.querySelectorAll(".main1 .he");
console.log(he);
for(var a=0;a<he.length;a++){
    he[a].style.display="none";
    he[0].style.display="block";
    main1[0].style.color="red";
}
for(var o=0;o<main1.length;o++){
    main1[o].name=o;
    main1[o].onclick=function(){
        console.log(o);
        for(var p=0;p<he.length;p++){
            he[p].style.display="none";
            main1[p].style.border="none";
            main1[p].style.color="#8b8b8b";
        }
        he[this.name].style.display="block";
        main1[this.name].style.borderBottom="2px solid red";
        this.style.color="red";
    }
}







