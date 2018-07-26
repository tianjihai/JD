$(document).ready(function () {
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
        $(".goods2").css('background-color', 'white').css('border','1px solid darkgray').css('box-shadow','none');
    });
    $(".goods2").mouseover(function () {
        $(".goodsPic2").fadeIn(150);
        $(".goodsPic1").hide();
        $(".goods2").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".goods1").css('background-color', 'white').css('border','1px solid darkgray').css('box-shadow','none');
    });

    $(".goodsListLeft").mouseover(function () {
        $(".goodsList1").fadeIn(200);
        $(".goodsList2").hide();
        $(".goodsListLeft").css('color', 'red');
        $(".goodsListRight").css('color', 'gray');
    });
    $(".goodsListRight").mouseover(function () {
        $(".goodsList2").fadeIn(200);
        $(".goodsList1").hide();
        $(".goodsListRight").css('color', 'red');
        $(".goodsListLeft").css('color', 'gray');
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
        $(".Tese22").css('background-color', 'white').css('border','1px solid darkgray').css('box-shadow','none');
        $(".Tese33").css('background-color', 'white').css('border','1px solid darkgray').css('box-shadow','none');
    });
    $(".Tese22").mouseover(function () {
        $(".TeseUl2").fadeIn(150);
        $(".TeseUl1").hide();
        $(".TeseUl3").hide();
        $(".Tese22").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".Tese11").css('background-color', 'white').css('border','1px solid darkgray').css('box-shadow','none');
        $(".Tese33").css('background-color', 'white').css('border','1px solid darkgray').css('box-shadow','none');
    });
    $(".Tese33").mouseover(function () {
        $(".TeseUl3").fadeIn(150);
        $(".TeseUl1").hide();
        $(".TeseUl2").hide();
        $(".Tese33").css('background-color', 'red').css('border','0px solid darkgray').css('box-shadow','0 0 5px red');
        $(".Tese11").css('background-color', 'white').css('border','1px solid darkgray').css('box-shadow','none');
        $(".Tese22").css('background-color', 'white').css('border','1px solid darkgray').css('box-shadow','none');
    });


});