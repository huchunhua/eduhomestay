  $(function(){
    // 登录
    $("#landuser,#landhost,#login_btn").on('click',function(){
      $('.dialog').hide();
      $("#myModal").show();  
      $("#login_modal") .show();
    })
    // 注册
    // 默认邮箱注册
    $('#loginuser,#loginhost,#regsiter_btn,#emlReg').on('click',function(){
      $('.dialog').hide();
      $('#myModal').show();
      $("#emailReg").show();
    })
    // 手机号码注册
    $('#phReg').click(function(){
      $('.dialog').hide();
      $('#myModal').show();
      $('#telReg').show();
    })
    // 密码重置
    $("#fogtPwd_btn").click(function(){
      $('.dialog').hide();
      $('#myModal').show();
      $("#aginresetPwd").show();
    })
    $("#resetPwd_btn").click(function(){
      $("#aginresetPho").show();
      $("#aginresetPwd").hide();
    })   
    $("#resetPho_btn").click(function(){
      $("#aginresetPwd").show();
      $("#aginresetPho").hide();
    })
    // 退出登录、注册、密码重置
    $("#myModal").on("click",function(){
      $(this).hide();
      $("#login_modal").hide();
      $('.dialog').hide();  
      $(".forget_pwd") .hide();
    });
    //生成手机验证码的
    // $("#createStr").on("click",function(){
    //   var username = $("#qwqwqw").val();
    //   var password = $("select[name=phonetitle]").val();
    //   alert(username);
    //   $.post("createStr.do",{phone:username,phonetitle:password},function(data){
    //     if(data.success){
    //       $("#login_modal").show();
    //     }
    //   });    
    // });

  })
