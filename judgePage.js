function showSetting(){
	// body...
	console.log("done");
	document.getElementsByClassName('select-detail')[0].style.color="black";
	document.getElementsByClassName('select-detail')[0].style.border="1px solid #808080";
	document.getElementsByClassName('select-detail')[0].style.borderBottom="1px  #808080";
	
	document.getElementsByClassName('select-detail')[1].style.color="#1464c8";
	document.getElementsByClassName('select-detail')[1].style.border="1px  #808080";
	document.getElementsByClassName('select-detail')[2].style.color="#1464c8";
	document.getElementsByClassName('select-detail')[2].style.border="1px  #808080";

	document.getElementsByClassName('gameSetting-part')[0].style.display="block";
	document.getElementsByClassName('idShowing-part')[0].style.display="none";
	document.getElementsByClassName('daily-part')[0].style.display="none";
}
function showId(){
	console.log("done");
	document.getElementsByClassName('select-detail')[1].style.color="black";
	document.getElementsByClassName('select-detail')[1].style.border="1px solid #808080";
	document.getElementsByClassName('select-detail')[1].style.borderBottom="1px  #808080";
	
	document.getElementsByClassName('select-detail')[0].style.color="#1464c8";
	document.getElementsByClassName('select-detail')[0].style.border="1px  #808080";
	document.getElementsByClassName('select-detail')[2].style.color="#1464c8";
	document.getElementsByClassName('select-detail')[2].style.border="1px  #808080";

	document.getElementsByClassName('gameSetting-part')[0].style.display="none";
	document.getElementsByClassName('idShowing-part')[0].style.display="block";
	document.getElementsByClassName('daily-part')[0].style.display="none";
}
function showDaily () {
	// body...
	console.log("done");
	document.getElementsByClassName('select-detail')[2].style.color="black";
	document.getElementsByClassName('select-detail')[2].style.border="1px solid #808080";
	document.getElementsByClassName('select-detail')[2].style.borderBottom="1px  #808080";
	
	document.getElementsByClassName('select-detail')[0].style.color="#1464c8";
	document.getElementsByClassName('select-detail')[0].style.border="1px  #808080";
	document.getElementsByClassName('select-detail')[1].style.color="#1464c8";
	document.getElementsByClassName('select-detail')[1].style.border="1px  #808080";

	document.getElementsByClassName('gameSetting-part')[0].style.display="none";
	document.getElementsByClassName('idShowing-part')[0].style.display="none";
	document.getElementsByClassName('daily-part')[0].style.display="block";
}
function getData () {
	// body...
	getSetting();
	getId();
}
function getSetting () {
	// body...
	document.getElementsByClassName('setting-num')[0].innerHTML=
		sessionStorage.getItem("total");
	document.getElementsByClassName('setting-num')[1].innerHTML=
		sessionStorage.getItem("killer");
	document.getElementsByClassName('setting-num')[2].innerHTML=
		sessionStorage.getItem("citizen");
}
function getId () {
	// body...
	var roleArr=sessionStorage.getItem("roleArr").split(",");
	console.log(roleArr);
	for(i=0;i<roleArr.length;i++){
		console.log(i+roleArr[i]);
	}
	
	// var i=1;
	// element.innerHTML=i;
	// element.next

	var a = document.createElement("table");
		// 设置表格的边框为1
		a.border=1;
		a.style.width="96vw";
		a.style.cellpadding="0";
		a.style.cellspacing="0";
		a.style.textAlign="center";
		//var caption = a.createCaption();	
		for (var i = 0 ; i < roleArr.length ; i++)
		{
			// 插入行
			var tr = a.insertRow(i);
			// 为每行循环插入2列
			// if(i==0){
			// 	for (var j = 0 ; j < 2 ; j++)
			// 	{
			// 		// 循环插入7列
			// 		var td = tr.insertCell(j);
			// 		// 设置每个单元格的内容
			// 		if(j/2==0){
			// 			td.innerHTML ="编号";
			// 		}else{
			// 			td.innerHTML ="角色";
			// 		}
			// 	}
			// }
			for (var j = 0 ; j < 2 ; j++)
			{
				// 循环插入7列
				var td = tr.insertCell(j);
				td.style.width="50%";
				// 设置每个单元格的内容
				if(j/2==0){
					td.innerHTML =i+1;
				}else{
					td.innerHTML =roleArr[i];
				}
				
			}
		}
		//将表格元素添加到HTML文档内
		document.getElementById("test").appendChild(a);
}