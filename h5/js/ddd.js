$(function(){
    var add=$(".add");
    var form=$("form");
    var flag=true;
    var formclose=


    add.click(function(){
        if(flag){
            form.attr({"data-a":"animate-show"}).css("display","block");
        }
        form.attr()
    })



//表单的验证
    $("button").click(function(){
        var textv=form.find(":text").val();
        var conv=form.find(":text").val();
        var timev=form.find(":text").val();
        if(form.find(":text").val()==""){
            alert();
            return;
        }
        if(form.find("textarea").val()==""){
            alert();
        }
        if(form.fins)
        //存储信息；
        var oldv=localStorage.message==null?[]:JSON.parse(localStorage.message);
        var obj={title:textv,con:conv,time:timev};
        dataArr.push(obj);
        var str=JSON.stringify(oldv);
        localStorage.message=str;
        form.find(":text").val("");
        form.find(":text").val("");
        form.find(":text").val("");
        var copy=$(".con").clone().appendTo("body").fadeIn(100).css({
            left:($(window).width()-$(".con").outerWidth())*Math.random(),
            top:($(window).height()-$(".con").outerHeight())*Math.random()
        })
    })


})