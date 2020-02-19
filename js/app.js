
'use strict';
var rightAnswer = 0;
var msg = '';
var myFavProg = ['c', 'c++', 'python', 'javascript'];






function Q1 (q1){

  //console.log(q1);
  if (q1 === 'Y' || q1 === 'YES') {
    msg = alert('you know :D');
    rightAnswer = rightAnswer + 1;

  }
  else if (q1 === 'N' || q1 === 'NO') {
    msg = alert('No :/  I\'m a network engineering ');
  }
  else {
    msg = prompt('You need to answer Yes/No !');
  }

  return msg;
}
var q1 = prompt('I studed Network Engineering ? :) ').toUpperCase();
Q1(q1);

function Q2 (q2){

  //console.log(q2);
  if (q2 === 'Y' || q2 === 'YES') {
    msg = alert('No , I\'m from Irbid ');

  }
  else if (q2 === 'N' || q2 === 'NO') {
    rightAnswer = rightAnswer + 1;
    msg = alert('Yes , I\'m from Irbid');

  }
  else {
    msg = prompt(' You need to answer Yes/No !');
  }
  return msg ;
}
var q2 = prompt('I\'m from Amman ? ').toUpperCase();
Q2(q2);


function Q3 (q3){

  //console.log(q3);
  if (q3 === 'Y' || q3 === 'YES') {
    msg = alert(' yes , sure :D ');
    rightAnswer = rightAnswer + 1;

  }
  else if (q3 === 'N' || q3 === 'NO') {

    msg = alert('No , I like programming ');
  }
  else {
    msg = prompt('You need to answer Yes/No !');
  }

  return msg;
}

var q3 = prompt('Do you think i like programming ?').toUpperCase();
Q3(q3);

function Q4 (q4){

  //console.log(q4);
  if (q4 === 'Y' || q4 === 'YES') {
    msg = alert('You know me :D');
    rightAnswer = rightAnswer + 1;

  }
  else if (q4 === 'N' || q4 === 'NO') {
    msg = alert('why ! :/ ');
  }
  else {
    msg = prompt('You Need To Answer Yes/No !');
  }

  return msg;
}
var q4 = prompt('I\'m a sociable person ? ').toUpperCase();
Q4(q4);

function Q5 (q5){

  //console.log(q5);
  switch (q5) {
  case 'Y':
  case 'YES':
    msg = alert(' I\'m interesting in food not in cooking  :D');
    break;

  case 'N':
  case 'NO':
    msg = alert('I\'m interesting in food not in cooking ! ');
    rightAnswer = rightAnswer + 1;
    break;

  default:
    msg = prompt('You need to answer Yes/No !');
    break;
  }

  return;
}

var q5 = prompt(' I\'m interesting in cooking ?  ').toUpperCase();
Q5(q5);





var yourName = prompt('Now , I need to know your name : ');
//console.log(yourName);
alert(yourName + ' Nice Name :D , Welcome :)');






function Q6 (q6){
  for (var i = 0; i < 4; i++) {

    q6 = Number(q6);
    // console.log(typeof(q6));
    if (q6 === 5) {
      rightAnswer = rightAnswer + 1;
      break;
    }
    else if (q6 === 3 || q6 === 4 || q6 === 6 || q6 === 7) {
      msg = alert('too high ');

    }
    else if (q6 === 0 || q6 === 1 || q6 === 2 || q6 === 8 || q6 === 9 || q6 === 10) {
      msg = alert('too low');
    }
    else {
      msg = alert('Let\'s try again ');
    }

  }
  msg = alert(' 5 is my lucky number ');
  //console.log(q6);


  return msg ;
}

var q6 = prompt('Guess My Lucky Number from (0-10) ');
Q6(q6);

function Q7 (q7){

  for (var j = 0; j <= 5; j++) {

    for (var index = 0; index < myFavProg.length; index++) {
      if ( q7 === myFavProg[index]){

        var val = myFavProg;
        if (q7 === 'c' || q7 === 'c++' || q7 === 'python' || q7 === 'javascript' ) {
          msg = alert ('correct !');
          rightAnswer = rightAnswer + 1;
          index = myFavProg.length;
          j = 6;
        }

        /* else //if (q7 !== 'c' || q7 !== 'c++' || q7 !== 'python' || q7 !== 'javascript' )
            {
                alert('try again');
            }*/

      }

    }


  }

  return msg;
}

var q7 = prompt('Guess which programming language i used it ! :D ').toLowerCase();
Q7(q7);



//console.log(q7);
alert('the programming language i use it :' + myFavProg);
alert('your score is ' + rightAnswer + ' out of 7 ');












/*
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


