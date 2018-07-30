$(document).ready(function () {

    var $li = $(".slider>ul>li");
    var count = 0;

    //默认自动轮播下一张图片
    function lunbo() {
        count++;
        if(count == $li.length){
            count = 0;
        }
        $li.eq(count).fadeIn(400).siblings().fadeOut(400);
    };
    var lb=setInterval(lunbo,1500);


    //点击下一张切换到下一张图片然后停止自动轮播定时器
    $(".arrow-right").click(function () {
        count++;
        if(count == $li.length){
            count = 0;
        }
        $li.eq(count).fadeIn(400).siblings().fadeOut(400);
        clearInterval(lb);
    });

    //点击上一张切换上一张图片然后停止自动轮播定时器
    $(".arrow-left").click(function () {
        count--;
        if(count == -1){
            count = $li.length - 1;
        }
        $li.eq(count).fadeIn(400).siblings().fadeOut(400);
        clearInterval(lb);
    });






    $("#leftmenu>ul>li").mouseover(function () {
        //  $("#"+$(this).index()).css('display', 'block');
        $("#"+$(this).index()).fadeIn(150);
    });

    $("#leftmenu>ul>li").mouseleave(function () {
        $("#"+$(this).index()).fadeOut(150);
    });


    $(".location").mouseover(function () {
        $(".locationMenu").fadeIn(150);
    });
    $(".location").mouseleave(function () {
        $(".locationMenu").fadeOut(150);
    });

    $(".menuRighta2").mouseover(function () {
        $(".gonggao").css('display', 'block');
        $(".cuxiao").css('display', 'none');
    });
    $(".menuRighta1").mouseover(function () {
        $(".cuxiao").css('display', 'block');
        $(".gonggao").css('display', 'none');
    });

    $(".goods1").mouseover(function () {
        $(".goodsPic1").fadeIn(150);
        $(".goodsPic2").hide();
        $(".goods1").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".goods2").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
    });
    $(".goods2").mouseover(function () {
        $(".goodsPic2").fadeIn(150);
        $(".goodsPic1").hide();
        $(".goods2").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".goods1").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
    });

    $(".goodsListLeft").mouseover(function () {
        $(".goodsList1").fadeIn(200);
        $(".goodsList2").hide();
        $(".goodsListLeft").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".goodsListRight").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
    });
    $(".goodsListRight").mouseover(function () {
        $(".goodsList2").fadeIn(200);
        $(".goodsList1").hide();
        $(".goodsListRight").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".goodsListLeft").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
    });


    $("#SecondLeftList1").mouseover(function () {
        $("#SecondLeftList11").fadeIn(200);
        $("#SecondLeftList22").hide();
        $("#SecondLeftList33").hide();
        $("#SecondLeftList44").hide();
        $("#SecondLeftList55").hide();
    });
    $("#SecondLeftList2").mouseover(function () {
        $("#SecondLeftList11").hide();
        $("#SecondLeftList22").fadeIn(200);
        $("#SecondLeftList33").hide();
        $("#SecondLeftList44").hide();
        $("#SecondLeftList55").hide();
    });
    $("#SecondLeftList3").mouseover(function () {
        $("#SecondLeftList11").hide();
        $("#SecondLeftList22").hide();
        $("#SecondLeftList33").fadeIn(200);
        $("#SecondLeftList44").hide();
        $("#SecondLeftList55").hide();
    });
    $("#SecondLeftList4").mouseover(function () {
        $("#SecondLeftList11").hide();
        $("#SecondLeftList22").hide();
        $("#SecondLeftList33").hide();
        $("#SecondLeftList44").fadeIn(200);
        $("#SecondLeftList55").hide();
    });
    $("#SecondLeftList5").mouseover(function () {
        $("#SecondLeftList11").hide();
        $("#SecondLeftList22").hide();
        $("#SecondLeftList33").hide();
        $("#SecondLeftList44").hide();
        $("#SecondLeftList55").fadeIn(200);
    });

    $(".Tese11").mouseover(function () {
        $(".TeseUl1").fadeIn(150);
        $(".TeseUl2").hide();
        $(".TeseUl3").hide();
        $(".Tese11").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".Tese22").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
        $(".Tese33").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
    });
    $(".Tese22").mouseover(function () {
        $(".TeseUl2").fadeIn(150);
        $(".TeseUl1").hide();
        $(".TeseUl3").hide();
        $(".Tese22").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".Tese11").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
        $(".Tese33").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
    });
    $(".Tese33").mouseover(function () {
        $(".TeseUl3").fadeIn(150);
        $(".TeseUl1").hide();
        $(".TeseUl2").hide();
        $(".Tese33").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".Tese11").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
        $(".Tese22").css('background-color', 'white').css('border','2px solid darkgray').css('box-shadow','none');
    });




/*置顶图标实现置顶功能*/
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $(".goTop").fadeIn(500);
        }
        else
        {
            $(".goTop").fadeOut(500);
        }
    });
    $(".goTop").click(function(){
        $('html').animate({scrollTop:0},1000);
    });



});