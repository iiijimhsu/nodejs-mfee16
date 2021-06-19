
$(function(){
//參考indexvue版更改ㄉ部分
//vue appliacation
new Vue({
el:"#app",//宣告控制範圍
data: {
    stocks:[],
},//有哪些資料寫在這
//beforemount 生成週期
beforeMount: async function(){
    //axios or fetch
let response = await fetch("/api/stocks");
//response.json()-->promise
//this 是vue application
this.stocks= await response.json();

},
});

$.ajax({
    type:"GET",
    url:"/stocks",
}).done(function(data){
    console.log(data);
});
});
