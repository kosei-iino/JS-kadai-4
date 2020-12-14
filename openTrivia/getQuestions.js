//問題の取得
getQuestions = async () => {

    try{
        const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
        const json = await response.json();

        //jsonでデータセット
        dataQuestion = json['results'];

        //インスタンス生成（取得する問題の要素番号）
        createQuestion(0);
                
    }catch(e){
        console.log(e);
    }
}