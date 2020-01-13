const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const number = prompt('Введите число', '10');
  generateStringFromSymbols(number);
})

function generateStringFromSymbols(number) {
  for (let i = 0; i < number; i++) {
    let rand = generateRandomSymbols();
    console.log(String.fromCharCode(rand));
  }
}

function generateRandomSymbols() {
  let rand = Math.floor(Math.random() * (90 - 48 + 1)) + 48;

  if (rand > 57 & rand < 65) {
    return generateRandomSymbols();
  } else {
    return rand;
  }
}