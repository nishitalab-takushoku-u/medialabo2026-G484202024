// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let c = document.querySelector('span#kaisu');
let q = document.querySelector('span#answer');
if (c) c.textContent = kaisu;
if (q) q.textContent = "";
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu += 1;
  let k = document.querySelector('span#kaisu');
  if (k) k.textContent = kaisu;
  let q = document.querySelector('span#answer');
  let f = document.querySelector('p#result');
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let g = document.querySelector('input#yosou');
  let yoso = g ? Number(g.value) : 0;
  if (q) q.textContent = yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  let result;
  if (kaisu >= 4) {
    let msg = "答えは" + kotae + "でした。 すでにゲームは終わっています.";
    console.log(msg);
    f.textContent = msg;
  } 
  else if (kaisu === 3) {
    if (yoso === kotae) {
      console.log("正解です。おめでとう！");
      f.textContent = "正解です。おめでとう！";
    } else {
      let msg = "まちがい、残念でした答えは" + kotae + "です。";
      console.log(msg);
      f.textContent = msg;
    }
  } 
  else if (kaisu <= 2) {
    if (yoso === kotae) {
      console.log("正解です。おめでとう！");
      f.textContent = "正解です。おめでとう！";
      kaisu = 4; 
    } 
    else if (kotae > yoso) {
      console.log("まちがい、答えはもっと大きいですよ");
      f.textContent = "まちがい、答えはもっと大きいですよ";
    } 
    else {
      console.log("まちがい、答えはもっと小さいですよ");
      f.textContent = "まちがい、答えはもっと小さいですよ";
    }
  }

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let button = document.querySelector('button#kai');
if (button) {
  button.addEventListener('click', hantei);
}
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
