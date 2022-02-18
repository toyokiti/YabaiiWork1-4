'use strict';

// タスクを管理する配列
const arrTask = [
    {name: '机を片付ける.' , genre: '掃除'},
    {name: '牛乳を買う.' , genre: '買い物'},
    {name: '散歩する.' , genre: '運動'}    
    ]; 

const inputTask = (name, genre) => {
    const task = {
        name:  name,
        genre:  genre,
    }; 
    arrTask.push(task);    
    showtask(); 
    alert('新しいタスクを追加しました。');
}

const showtask = () => {
    console.log('=============================');
    console.log('現在持っているタスクの一覧');
    console.log('=============================');
    arrTask.forEach((value, index) => {
        console.log(`${index} : [内容]${value.name} [ジャンル]${value.genre}`);
    })
}

showtask(); //最初に入っているタスクの表示
let newTaskName = prompt('タスクを入力してください');
let newTaskGenre = prompt('ジャンルを入力してください');   

if (newTaskName !== null || newTaskGenre !== null ) { //タスクの追加(キャンセルをクリックした場合は無視)
    inputTask(newTaskName, newTaskGenre);
} else {
    alert('タスクとジャンルの入力時にキャンセルがクリックされました。');
}
