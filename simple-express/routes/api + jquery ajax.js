// TODO jquery.ajax 去取得 api/stocks 的資料
$(function () {
// $.ajax({
//     type: "GET",
//     url: "/api/stocks",
// }).done(function (data) {
//     console.log(data)
// });

//axios.get('/api/stocks')
//.then(function (response) {
//  console.log(response.data);
//})
// .catch(function (error) {
//     console.log(error);
// })
// .finally(function () {

// });
    
//* fetch -> promised-based */
// then or async / await
fetch('/api/stock')
.then(function (response) {
 return response.json();
 })
  .then(function (data) {
  console.log(data);
 });
});
