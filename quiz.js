let $ainput = [];
let currQuiz = 0; // 1, 2 바꿔줘야 밑에 ox퀴즈나 주관식 값을 가져올수있다. 


$(document).ready(function (){
    $ainput[0] = $(".ox-wrapper");
    $ainput[1] = $(".choice-wrapper");
    $ainput[2] = $(".input-wrapper");
    var btnCheck = document.querySelector('.btn-confirm');
    btnCheck.addEventListener('click', quiz_confirm);

    var quizStart = document.querySelector('.btn-start');
    quizStart.addEventListener('click', quiz_start);
    


function quiz_start(){ //.btn-start 누르면 퀴즈시작 & 다음문제로 넘기는 함수
    alert('btn-start눌러서 quiz_start함수 실행');
    quiz_next();
}

function quiz_next(){ //다음문제로 but quiz의 배열(문제)만큼 돌고 quiz_show보여주는데 하나 넘길때마다 카운트. 만약 quiz.length보다 크면 quiz_result()실행
    if(currQuiz < quiz.length){
        quiz_show(currQuiz +1);
    }
    else quiz_result();
}


function quiz_show(num){
    if(num>=quiz.length) return;
    num = currQuiz;
    // console.log(num);
    $(".quiz-num").text(num + 1); //공통-넘버링표시
    $(".quiz-question").html(quiz[0].question); //공통-문제 질문

    if(quiz[num].type == 1 )//객관식이라면?{
        for ( i=0; i<quiz[num].choice.length; i++ ){ //quiz 0번째 배열안에 있는 선택지의 갯수만큼 돌아라 
            console.log('객관식수');
            tmp1 = $('<input type="radio" name="choice" id="choice' + (i+1)+'">');
            tmp2 = $('<label for="choice' + (i + 1) + '">').text(quiz[0].choice[i]);
            $ainput[1].append(tmp1,tmp2);
        }
    }

function quiz_confirm(){
    if(quiz[currQuiz].type == 0) {
        tmp = $ainput[quiz[currQuiz].type].find('input[type=radio]:checked').index(); 
        alert(tmp);
    }
    else if(quiz[currQuiz].type == 1){
        tmp = $ainput[quiz[currQuiz].type].find('input[type=radio]:checked').index(); //객관식의 input태그의 타입이 radio인것이 checked된 것을 만족하는 첫 번째 요소의 값의 index번호
        alert(tmp); // alert(tmp); //선택값 index가 1,2,3,4가 아니라 0,2,4,6으로 나오는 이유 => index순서가 <input> -> <label> -> <input> ->  <label> 이기때문에 즉, 라벨도 index값으로 들어가니까 
    }
    else if(quiz[currQuiz].type == 2) {
        var inputText = document.querySelector('#input-text');
        tmp = $ainput[quiz[currQuiz].type].find(inputText)[0].value.toLowerCase().replace(/ /gi,"");//주관식의 첫번째 배열의 value값을 가져와서 소문자로 바꾸고 공백은 ""로 바꾸시오 
        alert(tmp);
    }
    else return false;

    if(quiz[currQuiz].type == 0){ 
        input = !tmp;
        alert(input);
    }else if(quiz[currQuiz].type == 1){
        input = tmp / 2 + 1 //<input><label><input><label>순서때문에 1234가 아니라 0246이 되어서 1234로 되게할려고
        //1번 : input=0/2+1=1; 2번 : input=2/2+1=2; 3번:input=4/2+1=3; 4번 : input = 6/2+1=4; 
        alert(input);
    }else if(quiz[currQuiz].type == 2){
        input = tmp; //value값 그대로
    }
}



function quiz_result(){

}

//quiz_next()인 함수인 다음문제 버튼을 누를때마다 quiz_show를 넘겨주면서 currQuiz +1 

var test = quiz_show();
});