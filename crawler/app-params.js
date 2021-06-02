https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210524&stockNo=2002

// response=json   //格式
// &date=20210524  //日期
// &stockNo=2002   // 股票代號
var axios = require('axios');

axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY?', {
    params: {
        response:'json',
        date:'20210524',
        stockNo:'3661',
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  