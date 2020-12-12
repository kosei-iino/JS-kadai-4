//問題の取得
getQuestions = () => {

    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
        })
        .then((json) => {

            //jsonでデータセット
            dataQuestion = json['results'];

            //インスタンス生成（取得する問題の要素番号）
            createQuestion(0);
        })
        .catch((error) => console.log(error));
}