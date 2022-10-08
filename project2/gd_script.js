//This is a jQuery file.
function main(){
    $(document).ready(function () {
        $('.uno, .text1').hide();
        $('.duo, .text2').hide();
        $('.tre, .text3').hide();
        $('.quattro, .text4').hide();
    });
}


//Function show 1.
function show1(){
    $(document).ready(function(){
        //start mouse over.
        $('.image1').hover(function () {
            /*evt.preventDefault();*/
            // over
                $('.uno, .text1').show(2000);
            }, function () {
                // out
                $('.uno, .text1').hide(2000);
            }
        );
    });
}

//Function show 2.
function show2() {
    $(document).ready(function(){
        //start mouse over.
        $('.image2').hover(function () {
                // over
                $('.duo, .text2').show(2000);
            }, function () {
                // out
                $('.duo, .text2').hide(2000);
            }
        );
    });
}

//Function show 3.
function show3(){
    $(document).ready(function(){
        //start mouse over.
        $('.image3').hover(function () {
                // over
                $('.tre, .text3').show(2000);
            }, function () {
                // out
                $('.tre, .text3').hide(2000);
            }
        );
    });
}

//Function show 4.
function show4(){
    $(document).ready(function(){
        //start mouse over.
        $('.image4').hover(function () {
                // over
                $('.quattro, .text4').show(2000);
            }, function () {
                // out
                $('.quattro, .text4').hide(2000);
            }
        );
    });
}


