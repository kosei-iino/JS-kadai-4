//クイズクラス
class Quiz{

    //問題のセット(問題番号、全体の問題数、1問分の問題)
    constructor(numQuestion,lenQuestion,dataQuestion){

        //現在の問題番号
        this.numQuestion = numQuestion;

        //全体の問題数
        this.lenQuestion = lenQuestion;

        //タイトル
        this.title = '問題' + (numQuestion);

        //ジャンル
        this.category = '[ジャンル]' + dataQuestion['category'];

        //難易度
        this.difficulty = '[難易度]' + dataQuestion['difficulty'];

        //正解データ
        this.correct_answer = dataQuestion['correct_answer'];

        //不正解データ
        this.incorrect_answers = dataQuestion['incorrect_answers'];

        //選択肢データ(正解データと不正解データを取り込み、シャッフル)
        this.choices = aryShuffle(this.incorrect_answers,this.correct_answer);

        //問題
        this.question = dataQuestion['question'];
    }
    //問題の出力
    displayQuestions = () => {

        //タイトル出力
        eleTitle.textContent = this.title;

        //ジャンル/難易度生成
        const eleGenre = document.createElement('p');
        eleGenre.textContent = this.category;
        eleGenre.style.margin = '0';
        const eleDifficult = document.createElement('p');
        eleDifficult.textContent = this.correct_answer;
        eleDifficult.style.margin = '0';

        //ジャンル/難易度出力
        eleOther.appendChild(eleGenre);
        eleOther.appendChild(eleDifficult);

        //問題出力
        eleQuestions.value = this.question;

        //選択肢の数だけループしながらボタン生成
        this.choices.forEach((choice,cntAnswer) => {

            //選択肢ボタン作成
            const eleAnswer = document.createElement('input');
            eleAnswer.setAttribute('id','answer' + cntAnswer);
            eleAnswer.setAttribute('type','button');
            eleAnswer.setAttribute('value',choice);

            //選択肢ボタン追加
            eleButtons.appendChild(eleAnswer);

            //改行追加
            const eleNewLine = document.createElement('br');
            eleButtons.appendChild(eleNewLine);

            //選択肢ボタンに関数紐付け
            const eleAnswerQuestion = document.getElementById('answer' + cntAnswer);
            eleAnswerQuestion.addEventListener('click',() => {
                this.answerQuestion(choice)
                },false
            );

        });
    }
    //選択肢ボタンの実行
    answerQuestion = (choice) => {

        //正答数加算
        if(choice === this.correct_answer){
            numCorrectAnswers++;
        }

        //前回の問題の「ジャンル/難易度」「選択肢」削除
        eleOther.textContent = null;
        eleButtons.textContent = null;

        //問題がなくなるまで表示し、なくなれば終了
        if(this.lenQuestion > this.numQuestion){

            //次の問題表示（取得する問題の要素番号）
            createQuestion(this.numQuestion);

        }else{

            //問題終了
            this.endQuestion();
        }
    }
    //問題終了
    endQuestion = () => {

        //タイトル出力
        eleTitle.textContent = 'あなたの正答数は' + numCorrectAnswers + 'です！！';

        //問題出力
        eleQuestions.value = '再チャレンジしたい場合は以下をクリック！！';

        //ホームへ戻るボタン作成
        const eleHome = document.createElement('input');
        eleHome.setAttribute('id','home');
        eleHome.setAttribute('type','button');
        eleHome.setAttribute('value','ホームへ戻る');

        //ホームへ戻るボタン追加
        eleButtons.appendChild(eleHome);

        //ホームへ戻るに関数紐付け
        const eleHomeQuestion = document.getElementById('home');
        eleHomeQuestion.addEventListener('click',homeQuestion,false);

        //正答数初期化
        numCorrectAnswers = 0;

    }
}

