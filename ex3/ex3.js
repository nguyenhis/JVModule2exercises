const nameDog = [];
for (let i = 0; i < 6; i++){
  nameDog.push(prompt("Enter your pet's name: "));
}
nameDog.sort();
nameDog.reverse();
for (const name of nameDog){
  document.querySelector('#target').innerHTML += `<Li>${name}</Li>`;
}
