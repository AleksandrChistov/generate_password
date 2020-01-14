const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const number = prompt('Введите число', '10');

  if (number) {
    alert(generateStringFromSymbols(number));
  }
})

function generateStringFromSymbols(number) {
  let str = '';

  for (let i = 0; i < number; i++) {
    let rand = generateRandomSymbols();
    str += String.fromCharCode(rand);
  }

  return str;
}

function generateRandomSymbols() {
  let rand = Math.floor(Math.random() * (90 - 48 + 1)) + 48;

  if (rand > 57 & rand < 65) {
    return generateRandomSymbols();
  } else {
    return rand;
  }
}