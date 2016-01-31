
//use strict
$(function(){
    //输入框动画
    //按钮
    $(document).on('mousedown',function(e){
        var ox= e.offsetX;
        var oy= e.offsetY;
        var obj= e.target;
        $(document).on('mousemove',function(e){
            var px= e.clientX;
            var py= e.clientY;
            $(obj).trigger('drag',{left:px-ox,top:py-oy});
        })
        $(document).on('mouseup',function(e){
            $(document).off('mousemove');
            $(document).off('mouseup');
        })

    });
    //颜色
    var color=['#68c4db','#e9bd70','#ffa3a3','#cbabd5','#6fc4af','#919abb','#93adef'];
    //添加按钮
    var add= $('.add');
    //表单
    var form=$('form');
    //表单关闭按钮
    var formClose=$('.formclose');
    //开关
    var flag=true;
    //点击添加，点击出来，再点击隐藏
    add.click(function(){
        if(flag){
            form.attr({'data-a':'animate-show'});
            form.css({display:'block'});

            flag=false;
        }else{
            form.attr({'data-a':'animate-hide'});

            form.css({display:'block'});
            flag=true;
        }

    });
    //表单关闭按钮点击时隐藏表单
    formClose.click(function(){
        form.attr({'data-a':'animate-hide'});
        form.css({display:'block'});
        flag=true;
    });
    /*表单验证*/
    var m=0;
    $('.submitbtn').click(function(){

        var textv=form.find(':text').val();
        var conv=form.find('textarea').val();
        var timev=form.find('#time').val()
        if(textv==''){alert('标题不能为空');return;}
        if(conv==''){alert('内容不能为空');return; }
        if(timev==''){alert('时间必选'); return;}
        //存储信息
        var oldv=localStorage.message==null?[]:JSON.parse(localStorage.message);
        var obj={title:textv,con:conv,time:timev,id:new Date().getTime()};
        oldv.push(obj);
        var str=JSON.stringify(oldv);
        localStorage.message=str;
        //显示信息
        var hran=($(window).height()-$('.con').height())*Math.random();
        if(hran<90){hran=90}
        var copy=$('.con:eq(0)').clone().appendTo('body').css({
            left:($(window).width()-$('.con').width())*Math.random(),
            top:hran,display:'block',background:color[Math.floor(Math.random()*8)],'border-radius':'20px'
        }).attr({'data-a':'animate-shandong',id:obj.id});
        copy.find('.l-tittle').html(oldv[oldv.length-1].title);
        copy.find('.l-con').html(oldv[oldv.length-1].con);
        copy.find('.l-time').html(oldv[oldv.length-1].time);
        //给每个备忘录关闭时，添加动画
        $('.con .close span').click(function(){
            var i=$(this).index('.con .close span');
            $('.con').eq(i).attr({'data-a':'animate-hide'});
        });
    });
    //显示页面加载显示已经保存的内容
    var messages=localStorage.message==null?[]:JSON.parse(localStorage.message);
    var rh;
    for(var i=0;i<messages.length;i++){
        rh=($(window).height()-$('.con').height())*Math.random();
        if(rh<90){rh=90}
        var copy1=$('.con:eq(0)').clone().appendTo('body').css({
            left:($(window).width()-$('.con').width())*Math.random(),
            top:rh,display:'block',background:color[Math.floor(Math.random()*7)],'border-radius':'20px'
        }).attr({'data-a':'animate-show',id:messages[i].id});
        copy1.find('.l-tittle').html(messages[i].title);
        copy1.find('.l-con').html(messages[i].con);
        copy1.find('.l-time').html(messages[i].time);
    }


    //拖拽事件
    $(document).delegate('.con','drag',function(e,data){


        $(this).css({
            left:data.left+'px',
            top:data.top+'px'
        });
        e.preventDefault();
    });
    $(document).delegate('.con','mousedown',function(e){
        $('.con').css({
            zIndex:0
        });
        $(this).css({
            zIndex:1
        });
        e.preventDefault();
    });

//文本框添加内容事件
//    $('.con-in').

    $('.edit').focus(function(){
        $(document).keydown(function(){
            $('.edit').css('opacity','1');

        });

    });
    $('.edit').blur(function(){
        if($(this).val()==''){
            $(this).css('opacity','0.5');
        }

    });



    $(document).delegate('.con .close','click',function(){

        var id=$(this).parent().attr('id');
        //alert(id);
        var arr=JSON.parse(localStorage.message);
        for(var i=0;i<arr.length;i++){
            if(arr[i].id==id){
                arr.splice(i,1);
                localStorage.message=JSON.stringify(arr);
                break;
            }
        }

        $(this).parent().attr({'data-a':'animate-hide'});

    });

});