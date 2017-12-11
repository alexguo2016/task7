$(document).ready(function(){
	console.log("aaa");
	var _playerArr = sessionStorage.getItem("playerArr").split(",");
	console.log(_playerArr);
	var playerDot=$(".combine");
	for(var i=0;i<_playerArr.length-1;i++){
		$(".players").append(playerDot.clone(true));
		console.log(i);
	}
	for(var i=0;i<_playerArr.length;i++){
		
			$(".playerRole")[i].innerHTML=_playerArr[i];
			$(".playerNum")[i].innerHTML=(i+1)+"号";
		
		
	}

	
});
