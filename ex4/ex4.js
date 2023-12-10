const numberList = [];
let loop = true;
while(loop){
  const num =+prompt("Enter a number: ");
  if (num !== 0){
    numberList.push(num);
  }
  else{
    loop = false;
  }
}
numberList.sort(function(a,b){
  return b - a;
})
for(const number of numberList){
  console.log(number);
}