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




'use strict'

var q1 = prompt ("Do You know Raghad's Birthday ? :) ").toUpperCase();
console.log(q1);
if (q1 == "Y" || q1 == "YES"){
    alert (" I'm Waitting Your Gifts  :D ");
}
 else if ( q1 == "N" || q1 == "NO"){
alert ("I will Give You Some of Information About Me :)) ");
}
else {
    prompt(" You Need To Answer Yes/No !");
}


var q2 = prompt ("Do You Know What I Studied In The University ? ").toUpperCase();
console.log(q2);
if (q2 == "Y" || q2 == "YES"){
    alert (" Ooh , Good To Learn About Networking  ");
}
else if ( q2 == "N" || q2 == "NO"){
alert  ("Ready To Know About Me ! :D ");
}
else {
    prompt(" You Need To Answer Yes/No !");
}


var q3 = prompt ("Do You Know Raghad Skills ? :D ").toUpperCase();
console.log(q3);
if (q3 == "Y" || q3 == "YES"){
    alert  (" Thank you :))) ");
}
else if ( q3 == "N" || q3 == "NO"){

alert  ("Be Ready To Know About Me :D ");
}
else {
    prompt(" You Need To Answer Yes/No !");
}


var q4 = prompt ("Do You Know If I'm A Sociable Person or Not !  ").toUpperCase();
console.log(q4);
if (q4 == "Y" || q4 == "YES"){
    alert (" Thats Great ! ");
}
else if ( q4 == "N" || q4 == "NO"){


alert  ("Lets Know Some of Information About Me ! :D ");
}
else {
    prompt(" You Need To Answer Yes/No !");
}

var q5 = prompt ("Do You Know What I'm Interested In !  ").toUpperCase();
console.log(q5);

/*if (q5 == "Y" || q5 == "YES"){
    alert (" You Are My Friend Now :D");
}
else if ( q5 == "N" || q5 == "NO"){


alert  ("Go To Know Who is Raghad ! :D ");
}
else {
    prompt(" You Need To Answer Yes/No !");
}

var name = prompt (" Now , I need to know your name : ");
console.log(name);
alert(name + " Nice Name :D , Welcome :)");*/

switch (q5){
case 'Y' :
        alert (" You Are My Friend Now :D");
break;

case 'YES' :
        alert (" You Are My Friend Now :D");
        break;
case 'N' :
alert  ("Go To Know Who is Raghad ! :D ");
break;
case 'NO' :
        alert  ("Go To Know Who is Raghad ! :D ");
        break;
default :
    prompt(" You Need To Answer Yes/No !");
break;
}