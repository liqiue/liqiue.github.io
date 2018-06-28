//推荐部分 点击之后变红色
var li = document.querySelectorAll(".list ul li a");
for(var i=0;i<li.length;i++){
    li[i].name=i;
    li[i].onclick = function(){
        for(var q=0;q<li.length;q++){
            li[q].style.color="";
            li[q].style.borderBottom="";
        }
        li[this.name].style.color="red";
        li[this.name].style.borderBottom="1px solid red";
    }
}


//----swiper轮播图效果-----
  var mySwiper = new Swiper ('.banner', {
    autoplay:true,//自动轮播效果
    loop: true,//手动轮播效果
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
  })  
  
  
  
  
  
/*---特卖 vue样式-----*/
  new Vue ({
    el:"#temai",
    data:{
        arrs:[
            {img1:"img/shouye/11.webp",p1:"悦调精选爆款全场",h51:"满1件8.5折"},
            {img1:"img/shouye/12.webp",p1:"衬衫+网纱裙套装",h51:"￥75购超值爆款>>"},
            {img1:"img/shouye/13.webp",p1:"女装折扣3件7折",h51:"优惠截止今晚速抢"},
            {img1:"img/shouye/14.webp",p1:"baymay夏日尖货 特惠来",h51:"35元任选1件起"},
            {img1:"img/shouye/15.webp",p1:"气质装腰蕾丝连衣裙中长",h51:"新品尝鲜价 ￥59.9"},
            {img1:"img/shouye/16.webp",p1:"罗伊霓裳夏款上新专场",h51:"满1件减10元起"},
            {img1:"img/shouye/17.webp",p1:"卓诗尼凉鞋特卖专场",h51:"99元2件凉鞋大放价！"},
            {img1:"img/shouye/18.webp",p1:"9.9元秒杀限量抢",h51:"多品牌联合大清仓"},
            {img1:"img/shouye/19.webp",p1:"虹抒情精选女装会场",h51:"全场低至19.9元起"},
            {img1:"img/shouye/20.webp",p1:"大牌云集 大促返场",h51:"跨店满188元减100元"},
            {img1:"img/shouye/21.webp",p1:"6月小精灵",h51:"【￥30】吊带公主裙"},
            {img1:"img/shouye/22.webp",p1:"东帝名坊凉鞋上新专场",h51:"低至12元，59元2件起"},
            {img1:"img/shouye/23.webp",p1:"ins超霸肩套装裙",h51:"￥49.9超值两件套"},
            {img1:"img/shouye/24.webp",p1:"伊乐雅精选连衣裙专场",h51:"满1件8折起"},
            {img1:"img/shouye/25.webp",p1:"i她图年终大促返场",h51:"大促返场！88元任选2"},
            {img1:"img/shouye/26.webp",p1:"咏仕夏装廉价清仓专场",h51:"满1件8折起"},
            {img1:"img/shouye/27.webp",p1:"小清新荷叶边雪纺衫",h51:"今日下单只要35元！"},
            {img1:"img/shouye/28.webp",p1:"红豆旗靓店特卖",h51:"部分商品买2免1"},
            {img1:"img/shouye/29.webp",p1:"韩后年轻就要嫩专场",h51:"满99元减20元",},
            {img1:"img/shouye/30.webp",p1:"爱萌熊男女童装专场",h51:"满99元减15元，上不封"},
           
        ]
    }
  })
  new Vue ({
    el:"#mai",
    data:{
        arrs:[
            {img1:"img/shouye/11.webp",p1:"悦调精选爆款全场",h51:"满1件8.5折"},
            {img1:"img/shouye/12.webp",p1:"衬衫+网纱裙套装",h51:"￥75购超值爆款>>"},
            {img1:"img/shouye/13.webp",p1:"女装折扣3件7折",h51:"优惠截止今晚速抢"},
            {img1:"img/shouye/14.webp",p1:"baymay夏日尖货 特惠来",h51:"35元任选1件起"},
            {img1:"img/shouye/15.webp",p1:"气质装腰蕾丝连衣裙中长",h51:"新品尝鲜价 ￥59.9"},
            {img1:"img/shouye/16.webp",p1:"罗伊霓裳夏款上新专场",h51:"满1件减10元起"},
            {img1:"img/shouye/17.webp",p1:"卓诗尼凉鞋特卖专场",h51:"99元2件凉鞋大放价！"},
            {img1:"img/shouye/18.webp",p1:"9.9元秒杀限量抢",h51:"多品牌联合大清仓"},
            {img1:"img/shouye/19.webp",p1:"虹抒情精选女装会场",h51:"全场低至19.9元起"},
            {img1:"img/shouye/20.webp",p1:"大牌云集 大促返场",h51:"跨店满188元减100元"},
            {img1:"img/shouye/21.webp",p1:"6月小精灵",h51:"【￥30】吊带公主裙"},
            {img1:"img/shouye/22.webp",p1:"东帝名坊凉鞋上新专场",h51:"低至12元，59元2件起"},
            {img1:"img/shouye/23.webp",p1:"ins超霸肩套装裙",h51:"￥49.9超值两件套"},
            {img1:"img/shouye/24.webp",p1:"伊乐雅精选连衣裙专场",h51:"满1件8折起"},
            {img1:"img/shouye/25.webp",p1:"i她图年终大促返场",h51:"大促返场！88元任选2"},
            {img1:"img/shouye/26.webp",p1:"咏仕夏装廉价清仓专场",h51:"满1件8折起"},
            {img1:"img/shouye/27.webp",p1:"小清新荷叶边雪纺衫",h51:"今日下单只要35元！"},
            {img1:"img/shouye/28.webp",p1:"红豆旗靓店特卖",h51:"部分商品买2免1"},
            {img1:"img/shouye/29.webp",p1:"韩后年轻就要嫩专场",h51:"满99元减20元",},
            {img1:"img/shouye/30.webp",p1:"爱萌熊男女童装专场",h51:"满99元减15元"},
           
        ]
    }
  })
  
  
  
//.search1 部分 滚动到一定高度显示背景色 样式 （否则无色）
var search = document.querySelector(".shouye .search1");
if(search!==null){
        window.onscroll = function(){
        if(document.body.scrollTop > 10 || document.documentElement.scrollTop>10){ //浏览器兼容
            document.querySelector(".shouye .search1").style.background="#fff";
            search.style.top = "0";
        }else{
            document.querySelector(".shouye .search1").style.background="";
            search.style.top = "auto";
        }
    }

}

  
  
  
  

//jq实现的回到顶部效果 并有显示隐藏效果
$(function(){
    $("#top").click(function(){
        //浏览器兼容
        $("body,html").animate({"scrollTop":"0px"})
    });
    $("#top").hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $("#top").fadeIn();
           }else{
               $("#top").hide();
           }
    })
})








/*--------分类部分 js效果------*/
//点击切换按钮颜色效果
var li = document.querySelectorAll(".f a");
  if(li[0]!==undefined){
      li[0].onclick = function(){
        li[0].style.color="#fff";
        li[0].style.backgroundColor="#ef4949";
        li[1].style.color="#ef4949";
        li[1].style.backgroundColor="#fff";
}
    li[1].onclick = function(){
        li[0].style.color="#ef4949";
        li[0].style.backgroundColor="#fff";
        li[1].style.color="#fff";
        li[1].style.backgroundColor="#ef4949";
    }
}
  
  
  




//分类页的 vue 效果
  new Vue ({
    el:"#top2",
    data:{
        res:[
            {tui:"img/fenlei/1.bg.jpg",img1:"img/fenlei/1-1.jpg",img4:"img/fenlei/1-4.jpg",img7:"img/fenlei/1-7.jpg",img10:"img/fenlei/1-2.jpg",img2:"img/fenlei/1-5.jpg",img5:"img/fenlei/1-8.jpg",img8:"img/fenlei/1-3.jpg",img3:"img/fenlei/1-6.jpg",img6:"img/fenlei/1-9.jpg",img9:"img/fenlei/1-10.jpg",span1:"全部",span4:"潮Tee",span7:"气质衬衫",span10:"针织衫",span2:"裤装",span5:"风衣",span8:"套装",span3:"美裙",span6:"防晒衫",span9:"妈妈装"},
            {tui:"img/fenlei/2-bg.jpg",img1:"img/fenlei/2-1.jpg",img4:"img/fenlei/2-4.jpg",img7:"img/fenlei/2-7.jpg",img10:"img/fenlei/2-2.jpg",img2:"img/fenlei/2-5.jpg",img5:"img/fenlei/2-8.jpg",img8:"img/fenlei/2-3.jpg",img3:"img/fenlei/2-6.jpg",img6:"img/fenlei/2-9.jpg",img9:"img/fenlei/2-10.jpg",span1:"全部",span4:"时尚女鞋",span7:"休闲运动",span10:"男神专区",span2:"冬季美包",span5:"人气鞋靴",span8:"新品女鞋",span3:"时尚单鞋",span6:"爆款鞋品",span9:"爆款箱包"},
            {tui:"img/fenlei/3-bg.jpg",img1:"img/fenlei/3-1.jpg",img4:"img/fenlei/3-4.jpg",img7:"img/fenlei/3-7.jpg",img10:"img/fenlei/3-2.jpg",img2:"img/fenlei/3-5.jpg",img5:"img/fenlei/3-8.jpg",img8:"img/fenlei/3-3.jpg",img3:"img/fenlei/3-6.jpg",img6:"img/fenlei/3-9.jpg",img9:"img/fenlei/3-10.jpg",span1:"全部",span4:"百货日杂",span7:"整理收纳",span10:"厨房烹饪",span2:"家庭清洁",span5:"个护洗护",span8:"家居卫浴",span3:"宠物用品",span6:"雨伞雨具",span9:"保健"},
            {tui:"img/fenlei/4-bg.jpg",img1:"img/fenlei/4-1.jpg",img4:"img/fenlei/4-4.jpg",img7:"img/fenlei/4-7.jpg",img10:"img/fenlei/4-2.jpg",img2:"img/fenlei/4-5.jpg",img5:"img/fenlei/4-8.jpg",img8:"img/fenlei/4-3.jpg",img3:"img/fenlei/4-6.jpg",img6:"img/fenlei/4-9.jpg",img9:"img/fenlei/4-10.jpg",span1:"全部",span4:"儿童服饰",span7:"萌宝上衣",span10:"婴幼穿着",span2:"婴幼用品",span5:"玩具早教",span8:"孕妈必备",span3:"奶粉尿裤",span6:"萌宝套装",span9:"儿童鞋品"},
            {tui:"img/fenlei/5-bg.jpg",img1:"img/fenlei/5-1.jpg",img4:"img/fenlei/5-4.jpg",img7:"img/fenlei/5-7.jpg",img2:"img/fenlei/5-2.jpg",img5:"img/fenlei/5-5.jpg",img8:"img/fenlei/5-8.jpg",img3:"img/fenlei/5-3.jpg",img6:"img/fenlei/5-6.jpg",img9:"img/fenlei/5-9.jpg",span1:"全部",span4:"休闲食品",span7:"瓜果干浦",span2:"营养生鲜",span5:"冲饮酒水",span8:"粮油干货",span3:"醇香茶叶",span6:"坚果",span9:"饼干糕点"},
            {tui:"img/fenlei/6-bg.jpg",img1:"img/fenlei/6-1.jpg",img4:"img/fenlei/6-4.jpg",img7:"img/fenlei/6-7.jpg",img10:"img/fenlei/6-2.jpg",img2:"img/fenlei/6-5.jpg",img5:"img/fenlei/6-8.jpg",img8:"img/fenlei/6-7.jpg",img3:"img/fenlei/6-6.jpg",img6:"img/fenlei/6-9.jpg",img9:"img/fenlei/6-10.jpg",span1:"全部",span4:"全部裤装",span7:"潮流T恤",span10:"牛仔裤",span2:"休闲裤",span5:"风衣夹克",span8:"衬衫T恤",span3:"羽绒棉服",span6:"毛衣卫衣",span9:"爸爸衣着"},
            {tui:"img/fenlei/7-bg.jpg",img1:"img/fenlei/7-1.jpg",img4:"img/fenlei/7-4.jpg",img7:"img/fenlei/7-7.jpg",img10:"img/fenlei/7-2.jpg",img2:"img/fenlei/7-5.jpg",img5:"img/fenlei/7-8.jpg",img8:"img/fenlei/7-3.jpg",img3:"img/fenlei/7-6.jpg",img6:"img/fenlei/7-9.jpg",img9:"img/fenlei/7-10.jpg",span1:"全部",span4:"性感文胸",span7:"家居服",span10:"百搭打底",span2:"女士内裤",span5:"女士袜子",span8:"男士内裤",span3:"男士袜子",span6:"美体塑形",span9:"保暖内衣"},
            {tui:"img/fenlei/8-bg.jpg",img1:"img/fenlei/8-1.jpg",img4:"img/fenlei/8-4.jpg",img7:"img/fenlei/8-7.jpg",img2:"img/fenlei/8-2.jpg",img5:"img/fenlei/8-5.jpg",img8:"img/fenlei/8-8.jpg",img3:"img/fenlei/8-3.jpg",img6:"img/fenlei/8-6.jpg",img9:"img/fenlei/8-9.jpg",span1:"全部",span4:"眼镜墨镜",span7:"帽子丝巾",span2:"项链耳饰",span5:"手镯手链",span8:"发饰假发",span3:"品牌手表",span6:"皮带腰带",span9:"其他饰品"},
            {tui:"img/fenlei/9-bg.jpg",img1:"img/fenlei/9-1.jpg",img4:"img/fenlei/9-4.jpg",img7:"img/fenlei/9-7.jpg",img10:"img/fenlei/9-2.jpg",img2:"img/fenlei/9-5.jpg",img5:"img/fenlei/9-8.jpg",img8:"img/fenlei/9-3.jpg",img3:"img/fenlei/9-6.jpg",img6:"img/fenlei/9-9.jpg",img9:"img/fenlei/9-10.jpg",span1:"全部",span4:"智能手机",span7:"手机周边",span10:"数码尖货",span2:"大家电",span5:"家电爆款",span8:"个人护理",span3:"电脑影音",span6:"智能设备",span9:"小家电"},
            {tui:"img/fenlei/10-bg.jpg",img1:"img/fenlei/10-1.jpg",img4:"img/fenlei/10-4.jpg",img7:"img/fenlei/10-7.jpg",img2:"img/fenlei/10-2.jpg",img5:"img/fenlei/10-5.jpg",img8:"img/fenlei/10-8.jpg",img3:"img/fenlei/10-3.jpg",img6:"img/fenlei/10-6.jpg",img9:"img/fenlei/10-9.jpg",span1:"全部",span4:"热销爆款",span7:"人气套装",span2:"基础护肤",span5:"口碑面膜",span8:"颜值彩妆",span3:"洗护个护",span6:"美甲工具",span9:"防晒修护"},
            {tui:"img/fenlei/11-bg.jpg",img1:"img/fenlei/11-1.jpg",img2:"img/fenlei/11-4.jpg",img3:"img/fenlei/11-7.jpg",img4:"img/fenlei/11-2.jpg",img5:"img/fenlei/11-5.jpg",img6:"img/fenlei/11-8.jpg",img7:"img/fenlei/11-3.jpg",img8:"img/fenlei/11-6.jpg",img9:"img/fenlei/11-9.jpg",img10:"img/fenlei/11-10.jpg",span1:"全部",span4:"床上用品",span7:"床单被罩",span10:"夏凉被",span2:"蚊帐凉席",span5:"枕头",span8:"毛巾",span3:"地垫沙发垫",span6:"毛巾拖鞋",span9:"布艺软饰"},
            {tui:"img/fenlei/12-bg.jpg",img1:"img/fenlei/12-1.jpg",img4:"img/fenlei/12-4.jpg",img7:"img/fenlei/12-7.jpg",img2:"img/fenlei/12-2.jpg",img5:"img/fenlei/12-5.jpg",img3:"img/fenlei/12-3.jpg",img6:"img/fenlei/12-6.jpg",span1:"全部",span4:"健身器械",span7:"户外装备",span2:"户外鞋服",span5:"运动服饰",span3:"徒步鞋",span6:"跑步鞋"},
            {tui:"img/fenlei/13-bg.jpg",img1:"img/fenlei/13-1.jpg",img4:"img/fenlei/13-4.jpg",img2:"img/fenlei/13-2.jpg",img3:"img/fenlei/13-3.jpg",span1:"全部",span4:"鞋品用品",span2:"妈妈装",span3:"爸爸装",},
        ]
      }
  })






/*----分类页  选项卡 jq实现的效果---*/
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






/*------------购物车页 -------------*/
var li1 = document.querySelectorAll(".yanzheng a");
  if(li1[0]!==undefined){
      li1[0].onclick = function(){
        li1[0].style.color="red";
        li1[0].style.borderBottom="2px solid red";
        li1[1].style.color="#606060";
        li1[1].style.borderBottom="2px solid transparent";
      }
    li1[1].onclick = function(){
        li1[0].style.color="#606060";
        li1[0].style.borderBottom="2px solid transparent";
        li1[1].style.color="red";    
        li1[1].style.borderBottom="2px solid red";
    }
}



























  