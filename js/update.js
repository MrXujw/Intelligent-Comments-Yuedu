var rowcount = 0;
function resgetit() {
	if (isLogin == "null"){
		alert("请先登陆！");
		return;
	}
	var form = document.createElement("form");  
	 form.style.display='none';;  
	 form.action = 'Search';  
	 form.method="post"; 
	 document.body.appendChild(form); 
	 var input = document.createElement("input");
	 input.type = "hidden";  
	  input.name = "startStation";  
	  input.value = $('#startStation').text();  
	  form.appendChild(input);
	  input = document.createElement("input");
	  input.type = "hidden";  
	  input.name = "endStation";  
	  input.value = $('#endStation').text();
	  form.appendChild(input);
	  input = document.createElement("input");
	  input.type = "hidden";  
	  input.name = "startTime";
	  input.value = $('#dateSearchText').val();
	  form.appendChild(input);
	  form.submit();
		/*tableNode = $('#res-table');
		rowcount++;
		var row = '<tr class="res-row" id='+rowcount+'><td>G1234</td><td>'+$('#startcity').text()+'</td><td>'+$('#endcity').text()+'</td><td>19:00</td><td>19:30</td><td>00:30</td><td>50</td><td>100</td><td>150</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>';
		tableNode.append(row); */
}

function resclear() {
	$("#res-table tbody").html("");
}