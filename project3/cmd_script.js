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
    /*var imagen = document.getElementById("ipconfig");*/
    let x = document.getElementById("command-1").value;
    let command = 'ipconfig /all';
    let text;

    //conditional statements.
    if(x == command){
        text = "Correct!<br>"
              +"On the image below you IP address is found on IPv4<br>"
              +" and your MAC address is the Physical Address.";
    }
    else{
        text = "Please enter the command.";
    }
    document.getElementById("message1").innerHTML = text;
    /*imagen.show(2000);*/

    //Added jquery inside my function to show the image.
    $(document).ready(function () {
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
    }
    else{
        text = "Please enter the command.";
    }
    document.getElementById("message2").innerHTML = text;
}