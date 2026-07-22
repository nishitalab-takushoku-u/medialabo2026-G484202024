
// 課題3-2 のプログラムはこの関数の中に記述すること
let i = 1;
function print(data) {
  for (let n of data.results.shop) {
    console.log(i + "件目の検索結果")
    console.log("店名: "+n.name);
    console.log("アクセス: "+n.access);
    console.log("住所: "+n.address);
    console.log("予算: "+n.budget.name);
    console.log("キャッチコピー: "+n.catch);
    console.log("ジャンル: "+n.name);
    console.log("営業時間: "+n.open);
    console.log("最寄駅: "+n.station_name);
    console.log("サブジャンル: "+n.sub_genre.name);
    i++
  }
}

// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {
  let poop = document.querySelector('#result');
  if (poop) {
    poop.remove();
  }
  let div = document.createElement('div');
  div.setAttribute('id', 'result');
  let body = document.querySelector('body');
  body.insertAdjacentElement('beforeend', div);

  let span = document.querySelector('#span');
  if (span) {
      span.textContent = data.results.shop.length;
  }

  let shops = data.results.shop;
  for (let i = 0; i < shops.length; i++) {
      let s = shops[i];

      let h3 = document.createElement('h3');
      div.insertAdjacentElement('beforeend', h3);
      h3.textContent = `検索結果:${i + 1}件目`;

      let table = document.createElement('table');
      table.setAttribute('border', '1');
      div.insertAdjacentElement('beforeend', table);

      let n = [
          ['名前', s.name],
          ['アクセス', s.access],
          ['住所', s.address],
          ['予算', s.budget ? s.budget.name : ''],
          ['キャッチコピー', s.catch],
          ['ジャンル', s.genre ? s.genre.name : ''],
          ['営業時間', s.open],
          ['最寄駅', s.station_name],
          ['サブジャンル', s.sub_genre ? s.sub_genre.name : '']
      ];

      for (let item of n) {
          let tr = document.createElement('tr');
          table.insertAdjacentElement('beforeend', tr);

          let th = document.createElement('th');
          tr.insertAdjacentElement('beforeend', th);
          th.textContent = item[0];

          let td = document.createElement('td');
          tr.insertAdjacentElement('beforeend', td);
          td.textContent = item[1];
      }
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
let keyword = document.querySelector('#genre');
keyword.selectedIndex = 0;

let b = document.querySelector('#btn');
b.addEventListener('click', sendRequest);

function sendRequest() {
  console.log("button");
  let genre = document.querySelector('#genre').value;

  url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0' + genre + '.json'
  axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if (typeof data ==='string') {
    data = JSON.parse(data);
  }
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
