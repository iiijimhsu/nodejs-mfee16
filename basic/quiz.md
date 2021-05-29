(1) 請問下列程式執行後的結果為何？為什麼？

console.log("start");

(function () {
  console.log("IIFE");
  setTimeout(function () {
    console.log("Timeout");
  }, 1000);
})();

console.log("end");
start
IIFE
end
Timeout
start先顯示在console上,之後顯示IIFE,再來是end,最後因為timeout 1秒後顯示
------------------------------------------------
(2) 請問下列程式執行的結果為何？為什麼？

console.log("start");

(function () {
  console.log("IIFE");
  setTimeout(function () {
    console.log("Timeout");
  }, 0);
})();

console.log("end");

start
IIFE
end
Timeout
start先顯示在console上,之後顯示IIFE,再來是end.timeout 設定0秒還是最後顯示來,因為timeout 被丟到webapis->task queue
之後event loop 再把它移到stack顯示出來(回調函數)
------------------------------------------------
(3) 請問下列程式執行的結果為何？為什麼？

const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  bar();
  baz();
};

foo();

foo
bar
baz
先呼叫foo,再呼叫const bar(),baz()
------------------------------------------------
(4) 請問下列程式執行的結果為何？為什麼？

const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  baz();
};

foo();
foo
baz
bar
先呼叫foo,再呼叫const bar(),baz(),但setTimeout(bar, 0);所以會被被丟到webapis->task queue 之後event loop 再把它移到stack顯示出來


nodejs影片

解釋一下自己對講者所分享的內容的理解？
javascripe 為單執行續的程式語言,runtime 一次只能做一件事,但瀏覽器在背後還會有執行續再操作,只是我們看不到,所以在執行續操作settimeout(時,會在stack上執行後,之後webapis執行計時器,之後進入task queue 後,event loop 再確認stack 沒有東西執行後,再讓task queue 回到STACK 執行,
試著用自己的話來解釋什麼是 event loop?
event loop(事件循環) 像是協調者 功用為確認STACK 是否還有執行的東西 沒有的話就會將task queue裡面的執行傳到stack去執行