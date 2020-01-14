const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const nLength = prompt('Введите число', '10');
  let generatedString = '';

  if (nLength) {
    generatedString += generateStringFromSymbols(nLength);
    alert(generatedString);
    generatedString = ShowQuestionReplaceSymbols(generatedString, 'Каким символом заменить все буквы?', /[A-Z]/g);
    console.log(generatedString);
  }

  if (generatedString) {
    console.log("Заменили буквы:" + generatedString);
    generatedString = ShowQuestionReplaceSymbols(generatedString, 'Каким символом заменить все цифры?', /[0-9]/g);
    console.log(generatedString);
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

function ShowQuestionReplaceSymbols(generatedString, question, whatToReplace) {
  let symbolForLetters = prompt(question, '#');

  if (!symbolForLetters) {
    return false;
  }

  if (symbolForLetters.length > 1) {
    alert('Вы ввели больше одного символа! Попробуйте снова.');
    return ShowQuestionReplaceSymbols(generatedString, question, whatToReplace);
  }

  return replaceWithSymbol(symbolForLetters, generatedString, whatToReplace);
}

function replaceWithSymbol(nSymbol, generatedString, whatToReplace) {
  return generatedString.replace( whatToReplace, nSymbol);
}