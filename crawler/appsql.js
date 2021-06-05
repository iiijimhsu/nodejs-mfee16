// https://www.twse.com.tw/exchangeReport/STOCK_DAY
// ?response=json
// &date=20210523
// &stockNo=2610


//npm i axios
//引入 axios
const axios = require("axios");
const moment = require("moment");
const fs = require("fs/promises");
const mysql = require("mysql")
const Promise = require('bluebird')

//建立連線所需資料
let connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "stock",
  });

  connection = Promise.promisifyAll(connection);

  (async function(){
  try{
      await connection.connectAsync();

  let stockCode = await fs.readFile("stock.txt", "utf8")
  console.log(`stock code: ${stockCode}`);
  let stock = await connection.queryAsync( `SELECT stock_id FROM stock WHERE stock_id = ${stockCode}`)
  if (stock.lenth <= 0){
    let response = await axios.get(
        `SELECT stock_id FROM stock WHERE stock_id = ${stockCode}`
    );
    let result = response.data.suggestions.shift();
    let result2 = result.split("\t");
    if (result2.lenth > 1){
        connection.queryAsync(`INSERT INTO stock(stock_id, stock_name) 
        VALUE ('${result2[0]}','${result2[1]}');`
        
        );
    }
   }
}catch(err){
 console.log(err);      
} finally{
    connection.end();
}
})();
