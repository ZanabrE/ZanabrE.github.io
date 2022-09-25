//the quiz.
function quiz(){
    var score = 0;
    var questions = [
        ['How many functions all computers perform?', 3, 3, 3],
        ['What is the core code of an operating system called?', 'KERNEL', 'Kernel', 'kernel'],
        ['Which components of the CPU is responsible for executing arithmethic and logic?', 'CU', 'cu', 'cu'],
        ['Which part of the CPU carries signals to indicate where data should be read from or' + 
        'written to in the system\'s memory?', 'ADDRESS BUS', 'Address Bus', 'address bus'],
    ];

    //the for loop.
    for (var i = 0; i < questions.length; i++){
        askQuestion(questions[i]);
    }

    function askQuestion(question){
        var answer = prompt(question[0], '');
        //the number inside the brackets will check for the answers.
        if(answer == question[3]){
            alert('Correct!');
            score++;
        }
        else{
            alert('Sorry. The correct answer is ' + question[3]);
        }
    }

    document.write('<h1 id="show">Results</h1>');
    //first variable to style my results page.
    var style1 = {
        "text-align": "center",
        "margin": "0 600px",
        "border": "2px solid gray",
        "boder-radius": "12px",
        "padding": "5px",
        "background-color": "rgb(207, 207, 199)",
        "font-family": "Audiowide, cursive"
    };

    //object assign method to merge.
    var obj1 = document.getElementById('show');
    Object.assign(obj1.style, style1);

    var message = 'You got ' + score;
        message += ' out of ' + questions.length;
        message += ' questions correct.';
        document.write('<p id="text">' + message + '</p>');

    //second veriable to style.
    var style2 = {
        "text-align": "center",
        "font-family": "Raleway, sans-serif",
        "font-size": "14pt"
    };

    //object assign method 2.
    var obj2 = document.getElementById('text');
    Object.assign(obj2.style, style2);

    document.write('<p><a id="link" href="index.html"><button id="btn" type="button">Back to Main</button></a></p>');

    var style3 = {
        "text-decoration": "none"
    };

    var obj3 = document.getElementById('link').href;
    Object.assign(obj3.style, style3);
    
}