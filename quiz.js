let $ainput = [];
let currQuiz = 0;


$(document).ready(function (){
    $ainput[1] = $(".choice-wrapper");


function quiz_show(num){
    num = currQuiz;
    console.log(num);
    if(quiz[num].type == 1 )//객관식이라면?{
        for ( i=0; i<quiz[num].choice.length; i++ ){ //quiz 0번째 배열안에 있는 선택지의 갯수만큼 돌아라 
            console.log('객관식수');
            tmp1 = $('<input type="radio" name="choice" id="choice' + (i+1)+'">');
            tmp2 = $('<label for="choice' + (i + 1) + '">').text(quiz[0].choice[i]);
            $ainput[1].append(tmp1,tmp2);
        }
    }

var test = quiz_show();

});