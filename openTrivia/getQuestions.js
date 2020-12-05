//問題の取得
const getQuestions = () => {

    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
            })
        .then((json) => {

            //jsonでデータ取得
            questionData = json['results'];

            //問題の出力(問題1を表示)
            displayQuestions(0);
        })
        .catch((error) => console.log(error));
}