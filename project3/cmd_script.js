//This document will have jquery and javascript.
//images using jquery.
function images(){
    $(document).ready(function () {
        $('#ipconfig').hide();
        $('#ifconfig').hide();
        $('#ping-pc').hide();
        $('#ping-mac').hide();
        $('#tracert').hide();
        $('#traceroute').hide();
        $('#nslookupWin').hide();
        $('#nslookupMAC').hide();
    });
}

//javascript.
//first javascript function.
function answer1(){    
    //variables.
    let x = document.getElementById("command1").value;
	let command = 'ipconfig /all';
	let text;
	
	if(x == command){
		text = "Correct!<br>" 
			  +"On the image below your IP address is found on IPv4<br>"
		      +" and your MAC address is the Physical Address.";
	}else{
		text = "Please enter the command.";
	}
	document.getElementById("message1").innerHTML = text;
	
	//Added jQuery inside my function to show the image.
	$("document").ready(function(){
		if(x == command){
			$('#ipconfig').show(3000);
		}
		if(x != command){
			$('#ipconfig').hide();
		}
	});
}

//second javascript function.
function answer2(){
    //Variables.
    let x = document.getElementById("command2").value;
	let command = 'ifconfig -l';
	let text;
	
	if(x == command){
		text = "Correct!<br>"
			  +"On the image below your IP address is inet<br>"
		      +" and your MAC address is ether.";
	}else{
		text = "Please enter the command.";
	}
	document.getElementById("message2").innerHTML = text;
	
	//Added jQuery inside my function to show the image.
	$("document").ready(function(){
		if(x == command){
			$('#ifconfig').show(3000);
		}
		if(x != command){
			$('#ifconfig').hide();
		}
	});
}