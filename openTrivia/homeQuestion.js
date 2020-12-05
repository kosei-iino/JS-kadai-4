//ホーム画面表示
const homeQuestion = () => {

    //正答数初期化
    numCorrectAnswers = 0;

    //前回のホームへ戻るボタン削除
    eleButtons.textContent = null;

    //タイトル追加
    eleTitle.textContent = 'ようこそ';

    //開始ボタン作成
    const eleStart = document.createElement('input');
    eleStart.setAttribute('id','start');
    eleStart.setAttribute('type','button');
    eleStart.setAttribute('value','開始');

    //開始ボタン追加
    eleButtons.appendChild(eleStart);

    //開始ボタンに関数紐付け
    const eleStartQuestion = document.getElementById('start');
    eleStartQuestion.addEventListener('click',startQuestion,false);

}