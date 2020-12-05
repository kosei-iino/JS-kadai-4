//問題終了
const endQuestion = () => {

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

}