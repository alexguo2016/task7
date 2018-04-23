$(document).ready(function(){
	$(".tot-players").keydown(function(e){
		var keynum
		var keychar
		var numcheck

		if(window.event) // IE
		  {
		  keynum = e.keyCode
		  }
		else if(e.which) // Netscape/Firefox/Opera
		  {
		  keynum = e.which
		  }

		keychar = String.fromCharCode(keynum)
		numcheck = /\d/

		return numcheck.test(keychar)
	});
	$(".tot-players").mouseleave(function(){
		console.log("aaa");
		var totalPlayers=parseInt($(".tot-players").val());
		if(totalPlayers>18 || totalPlayers<6){
		alert("游戏人数应该在6-18人！！");
		return ;
		}
		var killerPlayers = 0,citizenPlayers = 0;
		if(totalPlayers<9){
			killerPlayers = 1;
		}else if(totalPlayers>=9 && totalPlayers<=11){
			killerPlayers = 2;
		}else if(totalPlayers>=12 && totalPlayers<=15){
			killerPlayers = 3;
		}else if(totalPlayers>=16 && totalPlayers<=18){
			killerPlayers = 4;
		}
		citizenPlayers = totalPlayers - killerPlayers;
		$(".killerPlayers").text(killerPlayers);
		$(".citizenPlayers").text(citizenPlayers);

		sessionStorage.setItem("total",$(".tot-players").val());
		sessionStorage.setItem("killer",$(".killerPlayers").text());
		sessionStorage.setItem("citizen",$(".citizenPlayers").text());
	});
	$(".deal").click(function(){
		var total = parseInt(sessionStorage.getItem("total"));
		var killer = parseInt(sessionStorage.getItem("killer"));
		var citizen = parseInt(sessionStorage.getItem("citizen"));
		var playerArr = [];
		//console.log(playerArr);
		for(var i=0;i<killer;i++){
			playerArr.push("杀手");
		}
		for(var i=0;i<citizen;i++){
			playerArr.push("平民");
		}
		console.log(playerArr);
		console.log("aaa");
		var _playerArr=playerArr.concat();
		for(var i=_playerArr.length;i--;){
			var j=Math.floor(Math.random()*(i+1));
			var temp=_playerArr[i];
			_playerArr[i]=_playerArr[j];
			_playerArr[j]=temp;
		}
		console.log(_playerArr);
		sessionStorage.setItem("playerArr",_playerArr);
	});
});
