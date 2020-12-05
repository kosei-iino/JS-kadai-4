//選択肢ボタンの実行
const answerQuestion = (answer,correctAnswer,nextNum) => {

    //正答数加算
    if(answer === correctAnswer){
        numCorrectAnswers++;
    }

    //前回の問題の「ジャンル/難易度」「選択肢」削除
    eleOther.textContent = null;
    eleButtons.textContent = null;

    //問題がなくなるまで表示し、なくなれば終了
    if(questionData.length > nextNum){
        //次の問題表示
        displayQuestions(nextNum);
    }else{
        //問題終了
        endQuestion();
    }
}