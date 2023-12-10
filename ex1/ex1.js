'use strict';
const numberList = [];
for(let i=0; i<5; i++){
 numberList.push(+prompt("Enter a number: "));
}
for (let i = 4; i>=0; i--){
  console.log(numberList[i]);
}


