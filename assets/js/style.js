  /* 轮播 */
$(function(){
    var aPage = $('#main .pageCir p');		//分页按钮
    var aImg = $('#main .box .banner');		//图像集合
    var iSize = aImg.size();		//图像个数
    var index = 0;		//切换索引
    var t;
    $('#btnLeft').click(function(){		//左边按钮点击
        index--;
        if(index<0){
            index=iSize-1
        }
        change(index)
    });
    $('#btnRight').click(function(){    //右边按钮点击
        index++;
        if(index>iSize-1){
            index=0
        }
        change(index)
    });
    //分页按钮点击
    aPage.click(function(){
        index = $(this).index();
        change(index)
    });
    //切换过程
    function change(index){
        aPage.removeClass('active');
        aPage.eq(index).addClass('active');
        aImg.stop();
        //隐藏除了当前元素，所有图像
        aImg.eq(index).siblings().animate({
            opacity:0
        },1000);
        //显示当前图像
        aImg.eq(index).animate({
            opacity:1
        },1000)
    }
    function autoshow() {
        index=index+1;
        if(index<=iSize-1){
            change(index);
        }else{
            index=0;
            change(index);
        }
    }
    int=setInterval(autoshow,3000);
    function clearInt() {
        $('#btnLeft,#btnRight,.pageCir p,.banner a').mouseover(function() {
            clearInterval(int);
        })
    }
    function setInt() {
        $('#btnLeft,#btnRight,.pageCir p,.banner a').mouseout(function() {
            int=setInterval(autoshow,3000);
        })
    }
    clearInt();
    setInt();
});

//热门版块选择切换
$(function(){
    var city = $(".item_btn a.city-btn");
    var yd = $('.item_btn a.yd-btn');
    var school = $('.item_btn a.school-btn');
    var itemmore = $('.itemmore');
    $(city).mouseover(function(){
        $(yd).css({'font-weight':'400'});
        $(school).css({'font-weight':'400'});
        $(city).css({'font-weight':'700'});
        $('.yd').hide();
        // $('.school').hide();
        $('.city').show();
        $(itemmore).html('更多城市>>').herf('./select_city.html');
    });
    $(yd).mouseover(function(){
        $(city).css({'font-weight':'400'});
        $(school).css({'font-weight':'400'});
        $(yd).css({'font-weight':'700'});
        $('.city').hide();
        // $('.school').hide();
        $('.yd').show();
        $(itemmore).html('更多营地>>').href('./select_camp.html');
    });
    // $(school).mouseover(function(){
    //     $(yd).css({'font-weight':'400'});
    //     $(city).css({'font-weight':'400'});
    //     $(school).css({'font-weight':'700'});
    //     $(itemmore).html('更多学校>>').href('./select_school.html');
    //     $('.city').hide();
    //     $('.yd').hide();
    //     $('.school').show();
    // });
})
