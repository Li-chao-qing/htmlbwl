$(function(){
    var box=$(".box");
    var copy=$(".copy");
    var canvas=$("canvas");
    var cobj=canvas[0].getConext("2d");
    cobj.arc(100,100,50,0,Math.PI*2);


    $(".hasson").hover(function(){
        $(this).find(".son").slideDown(200);
    },function(){
        $(this).find(".son").slideUp(200);

    })

    var obj=new shape(copy[0],canvas[0],cobj);

    //$(".hasson:eq(1)).find("li").click(function(){
    //
    //})attr("data-role")
})