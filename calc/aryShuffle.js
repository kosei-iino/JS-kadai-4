//問題シャッフル
const aryShuffle = (aryAnswer) => {

    let len = aryAnswer.length;
    while(len){
        const randNum = Math.floor(Math.random() * len);
        const randData = aryAnswer[--len];
        aryAnswer[len] = aryAnswer[randNum];
        aryAnswer[randNum] = randData;
    }

    return aryAnswer;
}