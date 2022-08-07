// 請運用展開運算子，優化下方程式碼
const numA = [1, 2, 3];
const numB = [4, 5, 6];
// const numbers = numB.concat(numA);

// const numbers = [ ...numB, ...numA ];

// console.log(numbers);



// 下方為其餘參數搭配解構賦值的函式，請先嘗試觀察並手動計算出下方答案，再直接使用程式碼觀看解答
function sumFn(a, ...[x, y]) {
  console.log(x,y);
  return a + x * y;
}

sumFn(1, 2, 3); // 7
// console.log(sumFn(1, 2, 3));
sumFn(1, 2, 3, 4); // 7
// console.log(sumFn(1, 2, 3, 4));
sumFn("1", "2", "3", "4"); // '16'
// console.log(sumFn('1', '2', '3', '4')); 
sumFn(1); // NaN 
// console.log(sumFn(1)); 
