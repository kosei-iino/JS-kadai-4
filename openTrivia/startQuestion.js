//開始ボタン実行
startQuestion = () => {

    //開始ボタン削除
    eleButtons.textContent = null;

    //取得中の表示
    eleTitle.textContent = '取得中';
    eleQuestions.value = '少々お待ちください';

    //問題の取得
    getQuestions();

}