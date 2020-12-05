//問題の出力
const displayQuestions = (quesNum) => {

    //タイトル出力
    eleTitle.textContent = '問題' + (quesNum + 1);

    //ジャンル/難易度生成
    const eleGenre = document.createElement('p');
    eleGenre.textContent = '[ジャンル]' + questionData[quesNum]['category'];
    eleGenre.style.margin = '0';
    const eleDifficult = document.createElement('p');
    eleDifficult.textContent = '[難易度]' + questionData[quesNum]['difficulty'];
    eleDifficult.style.margin = '0';

    //ジャンル/難易度出力
    eleOther.appendChild(eleGenre);
    eleOther.appendChild(eleDifficult);

    //問題出力
    eleQuestions.value = questionData[quesNum]['question'];

    //答え取得
    const correctAnswer = questionData[quesNum]['correct_answer'];

    //選択肢に答えを追加
    questionData[quesNum]['incorrect_answers'].push(correctAnswer);

    //選択肢をシャッフル
    const shuffleAnswer = aryShuffle(questionData[quesNum]['incorrect_answers']);

    //選択肢の数だけループしながらボタン生成
    shuffleAnswer.forEach((answer,cntAnswer) => {

        //選択肢ボタン作成
        const eleAnswer = document.createElement('input');
        eleAnswer.setAttribute('id','answer' + cntAnswer);
        eleAnswer.setAttribute('type','button');
        eleAnswer.setAttribute('value',answer);

        //選択肢ボタン追加
        eleButtons.appendChild(eleAnswer);

        //改行追加
        const eleNewLine = document.createElement('br');
        eleButtons.appendChild(eleNewLine);

        //選択肢ボタンに関数紐付け
        const eleAnswerQuestion = document.getElementById('answer' + cntAnswer);
        eleAnswerQuestion.addEventListener('click',() => {
            answerQuestion(answer,correctAnswer,quesNum + 1)
            },false
        );

    });
}