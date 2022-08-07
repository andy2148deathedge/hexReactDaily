/**
 * 常見 JS 陣列方法練習
 */

const moneyList = [
  {
    name: "John",
    money: 100,
  },
  {
    name: "Tony",
    money: 300,
  },
  {
    name: "Carter",
    money: 50,
  },
];

//  練習一：使用 .map 讓大家的 money 都乘以 5 倍
let newMoneyList = [];

newMoneyList = moneyList.map(wallet => ({ 
  name: wallet.name, 
  money: wallet.money * 5 
}));

console.log(newMoneyList);
// 結果為 [{"name":"John","money":500},{"name":"Tony","money":1500},{"name":"Carter","money":250}]

//  練習二：使用 .filter 篩選出 newMoneyList 中 money 大於 1000 的資料
let filterMoneyList = [];

filterMoneyList = newMoneyList.filter(x => x.money > 1000);

console.log(filterMoneyList);
// 結果為 [{"name":"Tony","money":1500}]
