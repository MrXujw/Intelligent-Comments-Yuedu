
function judgeIt2(){
    // 仿照数据库验证
    var username=$("#inputText3").val();
    var password=$("#inputPassword3").val();
	var repeatpassword=$("#inputRepeatPassword3").val();
    if(username==""||password=="") {error();}
	else if(password!==repeatpassword)error();
    else success();
}
function error(){
	$("#warning").slideDown(700);
    function hide(){
    	$("#warning").slideUp(700);
    }
    setTimeout(hide,1200);
}
function success(){
	$("#success").slideDown(700);
    function hide(){
    	$("#success").slideUp(700);
    }
    setTimeout(jump,900);
    function jump(){
    self.location='./login.html';
    }
}