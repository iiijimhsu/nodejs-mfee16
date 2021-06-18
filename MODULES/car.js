// 若沒透過 exports 或 module.exports 去暴露資訊的，
// 其他的就都是 private
const car={
    brand:"ford",
    color:"blue",
};
// exports.getColor = (){
//     return "RED";};
    
    
exports.getColor = function () {
    return car.color;
  };
  
  exports.setColor = function (color) {
    if (color == "Yellow" || color == "Red") {
      car.color = color;
    }
    // TODO: 不符合的，不給改
  };
  
  // exports.car = car;
  
  // module.exports = {};
