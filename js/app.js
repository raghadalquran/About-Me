
'use strict'
    var rightAnswer = 0;

var q1 = prompt('I studed Network Engineering ? :) ').toUpperCase();
//console.log(q1);
if (q1 == 'Y' || q1 == 'YES') {
    alert('you know :D');
     rightAnswer = rightAnswer + 1;

}
else if (q1 == 'N' || q1 == 'NO') {
    alert('No :/  I\'m a network engineering ');
}
else {
    prompt('You need to answer Yes/No !');
}


var q2 = prompt('I\'m from Amman ? ').toUpperCase();
//console.log(q2);
if (q2 == 'Y' || q2 == 'YES') {
    alert('No , I\'m from Irbid ');

}
else if (q2 == 'N' || q2 == 'NO') {
     rightAnswer = rightAnswer + 1;
    alert('Yes , I\'m from Irbid');

}
else {
    prompt(' You need to answer Yes/No !');
}


var q3 = prompt('Do you think i like programming ?').toUpperCase();
//console.log(q3);
if (q3 == 'Y' || q3 == 'YES') {
    alert(' yes , sure :D ');
     rightAnswer = rightAnswer + 1;

}
else if (q3 == 'N' || q3 == 'NO') {

    alert('No , I like programming ');
}
else {
    prompt('You need to answer Yes/No !');
}


var q4 = prompt('I\'m a sociable person ? ').toUpperCase();
//console.log(q4);
if (q4 == 'Y' || q4 == 'YES') {
    alert('You know me :D');
     rightAnswer = rightAnswer + 1;

}
else if (q4 == 'N' || q4 == 'NO') {
    alert('why ! :/ ');
}
else {
    prompt('You Need To Answer Yes/No !');
}

var q5 = prompt(' I\'m interesting in cooking ?  ').toUpperCase();
//console.log(q5);
switch (q5) {
    case 'Y':
    case 'YES':
        alert(' I\'m interesting in food not in cooking  :D');
        break;

    case 'N':
    case 'NO':
        alert('I\'m interesting in food not in cooking ! ');
         rightAnswer = rightAnswer + 1;
        break;

    default:
        prompt('You need to answer Yes/No !');
        break;
}

var yourName = prompt('Now , I need to know your name : ');
//console.log(yourName);
alert(yourName + ' Nice Name :D , Welcome :)'); 


for (var i = 0; i < 4; i++) {
    var q6 = prompt('Guess My Lucky Number from (0-10) ');
    var q6 = Number(q6);
    // console.log(typeof(q6));
    if (q6 === 5) {
         rightAnswer = rightAnswer + 1;
        break;
    }
    else if (q6 === 3 || q6 === 4 || q6 === 6 || q6 === 7) {
        alert('too high ');

    }
    else if (q6 === 0 || q6 === 1 || q6 === 2 || q6 === 8 || q6 === 9 || q6 === 10) {
        alert('too low');
    }
    else {
        alert('Let\'s try again ');
    }

}
alert(' 5 is my lucky number ');
//console.log(q6);


    var myFavProg = ['c', 'c++', 'python', 'javascript'];
    
for (var j = 0; j <= 5; j++) {
    var q7 = prompt('Guess which programming language i used it ! :D ').toLowerCase();
    for (var index = 0; index < myFavProg.length; index++) {
     if ( q7 === myFavProg[index]){
       
       var val = myFavProg;
        if (q7 === 'c' || q7 === 'c++' || q7 === 'python' || q7 === 'javascript' ) {
             alert ('correct !');
             rightAnswer = rightAnswer + 1;
             breack;
            } 
           /* else //if (q7 !== 'c' || q7 !== 'c++' || q7 !== 'python' || q7 !== 'javascript' )
            {
                alert('try again');
            }*/

        }
    
    }
    
    
}


//console.log(q7);
alert('the programming language i use it :' + myFavProg);
alert('your score is ' + rightAnswer + ' out of 7 ');












//this another code to q5
/*if (q5 == "Y" || q5 == "YES"){
    alert (" You Are My Friend Now :D");
}
else if ( q5 == "N" || q5 == "NO"){


alert  ("Go To Know Who is Raghad ! :D ");
}
else {
    prompt(" You Need To Answer Yes/No !");
} */





/*var q1 = prompt ("Do You Like Tulip Flower ? :)) ").toUpperCase();
if (q1 == "Y" || q1 == "YES"){
    alert (" Ooh , And I Love It :'))"  );
}
else {
alert ("Ooh , No :/ ")
}

var q2 = prompt ("Do You Interested In Fashion ? ").toUpperCase();
if (q2 == "Y" || q2 == "YES"){
    alert (" You Are My Friend Now :D ");
}
else {
alert  (" I Know That You Interested In Something Else :) ")
}

var q3 = prompt (" Are You One Of The Programming Lovers ! ").toUpperCase();
if (q3 == "Y" || q3 == "YES"){
    alert  (" Thats Great ! ");
}
else {
alert  (" You Need To Like Programming :/ ")
}

var q4 = prompt ("Are You Sociable Person or Not ?  ").toUpperCase();
if (q4 == "Y" || q4 == "YES"){
    alert (" Thats Great ! , I'm Interested to Learn More About You :D ");
}
else {
alert  (" Ooh .. ! ")
}*/

