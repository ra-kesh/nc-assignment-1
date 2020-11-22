
var readlineSync = require ('readline-sync');

var userName = readlineSync.question("May I know your name , mate ? :  ");

console.log ("\n"+"hello " + userName +", " +"welcome to KNOWING Rk ...\n"+"\n----------------------- \n");

var score = 0 ;


// question
var questions = [{
    question :"what's my nickname ? : ",
    answer :"raj"
  },{
    question : "where do I live ? : ",
    answer :"Odisha"
  },{
    question: "when did I graduate ? : ",
    answer :"2017"
  },{
    question: "what do I like to do ? : ",
    answer :"Web Devlopment"
  },{
    question: "which types of bikes I love to ride ? : ",
    answer :"Cafe Racer"
  }
];



// function
function play (question , answer){
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() == answer.toUpperCase()){
    
    console.log("\nyou know me..,buddy..\n")
    score +=10;

  }else {
    console.log( "\nhello , stranger .. \n");
    score -=5 ;
  }

  console.log("Your current score:"+ score );
  console.log("\n----------------------- \n")
}

// loop
for (i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer); 
}

scoreBoard =[
  {
  name:"rakesh",
  score:"50"
},
  {
  name:"rajesh",
  score:"50"
},
  {
  name:"ramesh",
  score:"50"
}];

function leaderBoard() {

  if (score==50){
    console.log("WOW..You scored maximum..You really do know me..buddy");
  }else{
    console.log("Thanks for trying mate..but You can do better");
  }
  console.log("\nOthers Who Knew Me Too"+"\n-----------------------");
  for (i=0;i<scoreBoard.length;i++){
    var currentLeader = scoreBoard[i];
    console.log(currentLeader.name+"   "+currentLeader.score);
  }
}

leaderBoard();









// console.log("rakesh");
// prompt("what is your name");

// var readlineSync = require ("readline-sync");

// var userName = readlineSync.question("your name ? : ");

// console.log ("hello" + "  " + userName);

// var score = 0;

// var age = readlineSync.question("do you know how old am I ? : ");

// if (age == "yes" || "y" || "Yes" || "YES") {
//   console.log ("you really know me " + userName);
//   score ++;
// }else {
//   console.log ("well hello stranger");
// }

// console.log ("your score is " + score);

// function sum (numOne , numTwo){
//   result = numOne + numTwo;
//   console.log ("sum is " + result );
// }

// sum (2,5);


// var readlineSync = require ('readline-sync');
//   var score = 0;
// function play (question , answer){

//   var ans1 = readlineSync.question(question);

//   if ( ans1.toUpperCase() == answer.toUpperCase() ){
//     score +=5 ;
//     console.log ("you know it ")
//   }else (
//     console.log ("am sorry for you")
//   )

// }

// play ("who's your daddy ? baby girl : " , "you");

// console.log ("you scored" + " "+score );

// for (i=1; i <6 ; i++ ){
//   console.log(i + " " + "rakesh");
// }


// for (i=0; i<6; i++){
//     var str="";
//     for (j=0; j<i ; j++){
//        str = str + "*";
//     }
//     console.log(str);
// }

// for (i=5; i>0;i--){
//   var str="";
//   for (j=0;j<i;j++){
//     str = str + "*";
//   }
//   console.log(str);

// }
 
//  for (var i=0; i<10; i++){
//    sum = 22 + i;
//    console.log(sum);
//  }


// var grocery = ["djdjd","ksdjijdi","djidji","sdjdso"];

// console.log (grocery[3]);

// var grocery = ["djdjd","ksdjijdi","djidji","sdjdso"];

// for (i=0; i < grocery.length ; i++){
//   console.log(grocery[i]);
// }

// var readlineSync = require('readline-sync');

// var n = readlineSync.question("Enter number");

// var string = "";

// // //To print pattern in increasing order
// for(var i=1; i<=n; i++){
//   string += "*";
//   console.log(string);
// }

// // To print pattern in decreasing order
// for(var j=n;j>0;j--){
//   console.log(string.substr(0,j));
// }