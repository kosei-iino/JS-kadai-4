//インスタンス生成（取得する問題の要素番号）
createQuestion = (numQuestion) => {

    //問題のセット(問題番号、全体の問題数、1問分の問題)
    const quizClass = new Quiz(numQuestion + 1,dataQuestion.length,dataQuestion[numQuestion]);

    //問題表示
    quizClass.displayQuestions();
}