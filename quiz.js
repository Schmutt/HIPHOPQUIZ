const quiz = [
  {
    question:'POP SMOKEが得意としていたHIPHOPのサブジャンルは？',
    answers:[
      'UK Drill',
      'Emo Rap',
      'Brooklyn Drill',
      'Trap'
    ],
    correct:'Brooklyn Drill'
  },{
    question:'亡きPOP SMOKEの後のBrooklyn Drillの後継者と言われているのは？',
    answers:[
      'Lil Tjay',
      'Bobby Shmurda',
      'Fivio Foreign',
      'Roddy Ricch'
    ],
    correct:'Fivio Foreign'
  },{
    question:'HIPHOPのサブジャンルのDrillの発祥地は？',
    answers:[
      'UK',
      'California',
      'Brooklyn',
      'Chicago'
    ],
    correct:'Chicago'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;





const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
  const setupQuiz = () =>{
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      //ここに命令
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++; 
    }
  }
  setupQuiz();

  const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('正解!');
      score++;
    }else {
      window.alert('不正解！');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
      //問題数がまだあればこちらを実行
      setupQuiz();
    }else {
      //問題数がもうなければこちらを実行
      window.alert('終了！あなたの正解数は' + score + '/'  + quizLength + 'です！');
    }

  };

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
