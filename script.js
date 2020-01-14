const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const nLength = prompt('Введите число', '10');

  if (nLength) {
    let generatedString = generateStringFromSymbols(nLength);
    alert(generatedString);
    ShowQuestionReplaceLetters(generatedString);
  }
})

function generateStringFromSymbols(nLength) {
  let str = '';

  for (let i = 0; i < nLength; i++) {
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

function ShowQuestionReplaceLetters(generatedString) {
  let symbolForLetters = prompt('Каким символом заменить все буквы?', '#');

  if (!symbolForLetters) {
    return false;
  }

  if (symbolForLetters.length > 1) {
    alert('Вы ввели больше одного символа! Попробуйте снова.');
    ShowQuestionReplaceLetters(generatedString);
    return false;
  }

  replaceLettersWithSymbol(symbolForLetters, generatedString);
}

function replaceLettersWithSymbol(nSymbol, generatedString) {
  generatedString = generatedString.replace( /[A-Z]/g, nSymbol);
  console.log(generatedString);
}