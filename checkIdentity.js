function showId () {
	// body...
	document.getElementsByClassName('show-and-hidden')[0].style.display="block";
	
}
function hideId () {
	// body...
	document.getElementsByClassName('show-and-hidden')[0].style.display="none";
}
function getData () {
	// body...
	document.getElementsByClassName('getData')[0].innerHTML=sessionStorage.getItem("total");
	document.getElementsByClassName('getData')[1].innerHTML=sessionStorage.getItem("killer");
	document.getElementsByClassName('getData')[2].innerHTML=sessionStorage.getItem("citizen");
	
	setPlayers ();
}
function setPlayers () {
	// body...
	var total=parseInt(sessionStorage.getItem("total"));
	var killers=parseInt(sessionStorage.getItem("killer"));
	var citizens=parseInt(sessionStorage.getItem("citizen"));

	var playersArr=random(total);
	console.log(total);
	console.log(total+killers);
	console.log(playersArr);

	var roleArr=new Array();
	for(i=0;i<killers;i++){
		roleArr[playersArr[i]]="杀手";
	}
	for(i=killers;i<total;i++){
		roleArr[playersArr[i]]="水民";
	}
	console.log(roleArr);
	sessionStorage.setItem("roleArr",roleArr);
}

function random (mynum) {
　　var arr = [];
　　while(arr.length < mynum) {//原数组长度为0，每次成功添加一个元素后长度加1，则当数组添加最后一个数字之前长度为9即可
　　　　var num = Math.floor(Math.random() * mynum);//生成一个0-100的随机整数
　　　　if (arr.length === 0) {//如果数组长度为0则直接添加到arr数组
　　　　　　arr.push(num);
　　　　} else {
　　　　　　for (var i = 0; i < arr.length; i++) {//当新生成的数字与数组中的元素不重合时则添加到arr数组
　　　　　　　　if (arr.join(',').indexOf(num) < 0) {
　　　　　　　　　　arr.push(num);
　　　　　　　　} 
　　　　　　}
　　　　}
　　}
	return arr;
}

var serialNum=0;
var flag=false;
function showPlayer () {
	// body...
	if(flag!=true && serialNum<parseInt(sessionStorage.getItem("total"))){
		showId ();
		document.getElementsByClassName('serialNum')[0].innerHTML=serialNum+1;
		document.getElementsByClassName('playerRole')[0].innerHTML=
			sessionStorage.getItem("roleArr").split(",")[serialNum];
		if(document.getElementsByClassName('playerRole')[0].innerHTML=="水民"){
			document.getElementsByClassName('playerTips')[0].innerHTML=
				"角色提示:通过逻辑分析抓出隐藏的杀手"
		}else{
			document.getElementsByClassName('playerTips')[0].innerHTML=
				"角色提示:积极发言分析，尽可能的伪装成水民，刀法也很重要哦"
		}
		
		if(serialNum>0){
			document.getElementsByClassName('stepList')[0].innerHTML=serialNum;
		}
			document.getElementsByClassName('stepList')[1].innerHTML=serialNum+1;
		if(serialNum+2<=parseInt(sessionStorage.getItem("total"))){
			document.getElementsByClassName('stepList')[2].innerHTML=serialNum+2;
		}else{
			document.getElementsByClassName('stepList')[2].innerHTML="完成";
			document.getElementsByClassName('stepList')[2].style.backgroundColor="#78140a";
			document.getElementById('toBeHide').style.display="none";
		}
		
		serialNum++;
		flag=true;
	}
}
function hidePlayer () {
	// body...
	hideId ();
	flag=false;
	if(!(serialNum<parseInt(sessionStorage.getItem("total")))){
		console.log("全部角色显示完毕");
		document.getElementById('linkToJudge').innerHTML="法官查看";
		document.getElementById('linkToJudge').style.backgroundColor="white";
		document.getElementById('linkToJudge').style.color="black";
		// self.location("judgePage.html");
		navigateToJudge();
	}
}
function navigateToJudge () {
	// body...
	self.location='judgePage.html'; 
}
