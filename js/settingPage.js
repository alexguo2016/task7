// function show(){

// 	var msg = document.getElementById('myInput').value;
// 	alert(msg);
// }
function showNum () {
	// body...
	var totalPlayers=document.getElementsByClassName('num-input')[0].value;
	// var killerPlayers=document.getElementsByClassName('num-input')[1].value;
	// var citizenPlayer=document.getElementsByClassName('num-input')[2].value;
	// console.log(totalPlayers);
	// console.log(killerPlayers);
	// console.log(citizenPlayer);
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
	citizenPlayers = totalPlayers-killerPlayers;
	document.getElementsByClassName('num-input')[1].value=killerPlayers;
	document.getElementsByClassName('num-input')[2].value=citizenPlayers;


}
function noNumbers(e)
{
	
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
}

function saveData () {
	// body...
	sessionStorage.setItem("total",document.getElementsByClassName('num-input')[0].value);
	sessionStorage.setItem("killer",document.getElementsByClassName('num-input')[1].value);
	sessionStorage.setItem("citizen",document.getElementsByClassName('num-input')[2].value);
}