'use strict';

// タスクを管理する配列
const arrTask = [
    {content: '机を片付ける.' , genre: '掃除'},
    {content: '牛乳を買う.' , genre: '買い物'},
    {content: '散歩する.' , genre: '運動'}    
    ]; 

const inputTask = (taskContent, taskGenre) => {
    let arr_tmp = {}; //タスクとジャンルを管理するオブジェクトの宣言
    arr_tmp.content = taskContent;
    arr_tmp.genre = taskGenre;
    arrTask.push(arr_tmp);    

    showtask(); 
    alert('新しいタスクを追加しました。');
}

const showtask = () => {
    console.log('=============================');
    console.log('現在持っているタスクの一覧');
    console.log('=============================');
    arrTask.forEach((value, index) => {
        console.log(`${index} : [内容]${value.content} [ジャンル]${value.genre}`);
    })
}

showtask(); //最初に入っているタスクの表示
let newTaskContent = prompt('タスクを入力してください');
let newTaskGenre = prompt('ジャンルを入力してください');   

if (newTaskContent !== null || newTaskGenre !== null ) { //タスクの追加(キャンセルをクリックした場合は無視)
    inputTask(newTaskContent, newTaskGenre);
} else {
    alert('タスクとジャンルの入力時にキャンセルがクリックされました。');
}
