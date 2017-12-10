$(document).ready(function(){
	console.log("aaa");
	var _playerArr=(sessionStorage.getItem("playerArr")).split(",");
	console.log(_playerArr);
	var flag=false;
	var index=1;
	$(".checkbtn").click(function(){
		console.log(index+"..."+_playerArr.length);
		if(flag && index<_playerArr.length){
			$(".myPlayer").css("display","none");
			$(".myTrun").css("display","flex");
			$(".checkbtn").text("查看"+(++index)+"号身份");
			$(".myId").text(index);
			flag=false;
		}else if(flag==false && index<=_playerArr.length){
			$(".myPlayer").css("display","block");
			$(".myTrun").css("display","none");
			
			$(".myRole").text(_playerArr[index-1]);
			$(".checkbtn").text("注意保密");
			if(_playerArr[index-1]=="杀手"){
				$(".myTips").text("伪装自己，杀死玩家");
			}else{
				$(".myTips").text("自保，找出杀手");
			}
			flag=true;
		}else if(index==_playerArr.length){
			$(".myPlayer").css("display","none");
			$(".myTrun").css("display","flex");
			$(".checkbtn").text("转到法官页面");
			index++;
		}else if(index>_playerArr.length){
			self.location='simpleJudgePage.html';
		}
	});

});
