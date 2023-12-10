const numPar = prompt("Number of participants: ");
const nameList = [];
for (let i = 0; i < numPar; i++){
  nameList.push(prompt("Enter name of the participant: "));
}
for(const name of nameList){
  document.querySelector('#target').innerHTML += `<li>${name}</li>`;
}