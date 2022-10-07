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

	//Conditional statement.
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
			$('#ipconfig').show(2000);
		}
		if(x != command){
			$('#ipconfig').hide(2000);
		}
	});
}

//second javascript function.
function answer2(){
    //Variables.
    let x = document.getElementById("command2").value;
	let command = 'ifconfig -l';
	let text;
	
	//Conditional statement.
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
			$('#ifconfig').show(2000);
		}
		if(x != command){
			$('#ifconfig').hide(2000);
		}
	});
}

//third javascript function.
function answer3(){
	//Variables.
	let x = document.getElementById("command3").value;
	let command = 'ping 8.8.8.8';
	let text;

	//Conditional statement.
	if(x == command){
		text = "Correct!<br>"
			  +"On the image below the ping command is used<br>"
			  +" to test the connection and latency between<br>"
			  +" two networks and the -n count - number of echo<br>"
			  +"send.";
	}else{
		text = "Please enter the command.";
	}
	document.getElementById("message3").innerHTML = text;

	//Added jQuery inside my function to show the image.
	$(document).ready(function () {
		if(x == command){
			$('#ping-pc').show(2000);
		}
		if(x != command){
			$('#ping-pc').hide(2000);
		}
	});
}

//fourth javascript function.
function answer4(){
	//Variables.
	let x = document.getElementById("command4").value;
	let command = 'ping 8.8.8.8';
	let text;

	//Conditional statement.
	if(x == command){
		text = "Correct!<br>" 
			  +"On the image below the ping command is used<br>"
			  +" to test the connection and latency between<br>"
			  +" two networks and the -n count - number of echo<br>"
			  +"send.";
	}else{
		text = "Please enter the command.";
	}
	document.getElementById("message4").innerHTML = text;

	//Added jQuery inside my function to show the image.
	$(document).ready(function () {
		if(x == command){
			$('#ping-mac').show(2000);
		}
		if(x != command){
			$('#ping-mac').hide(2000);
		}
	});
}

//fifth javascript function.
function answer5(){
	//Variables.
	let x = document.getElementById("command5").value;
	let command = 'tracert www.google.com';
	let tracert = 'tracert 8.8.8.8';
	let text;

	//Conditional statement.
	if(x == command || x == tracert){
		text = "Correct!<br>" 
			  +"On the image below by entering the tracert command<br>"
			  +" will display the time it takes for a packet of<br>"
			  +" information to travel between a local computer and<br>"
			  +" a destination IP address or domain.";
	}else{
		text = "Please enter the command.";
	}
	document.getElementById("message5").innerHTML = text;

	//Added jQuery inside my function to show the image.
	$(document).ready(function () {
		if(x == command){
			$('#tracert').show(2000);
		}
		else{
			$('#tracert').hide(2000);
		}

		if(x == tracert){
			$('#tracert').show(2000);
		}
		else{
			$('#tracert').hide(2000);
		}
	});
}

//Sixth javascript function.
function answer6(){
	//Variables.
	let x = document.getElementById("command6").value;
	let command = 'traceroute wwww.google.com';
	let trace = 'traceroute 8.8.8.8';
	let text;

	//Conditional statement.
	if(x == command || x == trace){
		text = "Correct!<br>" 
			  +"On the image below by entering the tracert command<br>"
			  +" will display the time it takes for a packet of<br>"
			  +" information to travel between a local computer and<br>"
			  +" a destination IP address or domain.";
	}else{
		text = "Please enter the command.";
	}
	document.getElementById("message6").innerHTML = text;

	//Added jQuery inside my function to show the image.
	$(document).ready(function () {
		if(x == command){
			$('#traceroute').show(2000);
		}
		else{
			$('#traceroute').hide(2000);
		}
		if(x == trace){
			$('#traceroute').show(2000);
		}
		else{
			$('#traceroute').hide(2000);
		}
	});
}

//Seventh javascript function.
function answer7(){
	//Variables.
	let x = document.getElementById("command7").value;
	let command = 'nslookup wikipedia.com';
	let text;

	//Conditional statement.
	if(x == command){
		text = "Correct!<br>" 
			  +"On the image below by entering the nslookup command<br>"
			  +" and the Domain Name will display DNS records.";
	}else{
		text = "Please enter the command.";
	}
	document.getElementById("message7").innerHTML = text;

	//Added jQuery inside my function to show the image.
	$(document).ready(function () {
		if(x == command){
			$('#nslookupWin').show(2000);
		}
		if(x != command){
			$('#nslookupWin').hide(2000);
		}
	});
}

//Eighth javascrip function.
function answer8(){

	//Variables.
	let x = document.getElementById("command8").value;
	let command = 'nslookup www.google.com';
	let text;

	//Conditional statement.
	if(x == command){
		text = "Correct!<br>" 
			  +"On the image below by entering the nslookup command<br>"
			  +" and the Domain Name will display DNS records.";
	}else{
		text = "Please enter the command.";
	}
	document.getElementById("message8").innerHTML = text;

	//Added jQuery inside my function to show the image.
	$(document).ready(function () {
		if(x == command){
			$('#nslookypMAC').show(2000);
		}
		if(x != command){
			$('#nslookypMAC').hide(2000);
		}
	});
} 