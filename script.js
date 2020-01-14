const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const nLength = +prompt('Введите число', '10');
  let generatedString = '';
  let nSymbolFirst;
  let nSymbolSecond;

  if (nLength) {
    generatedString += generateStringFromSymbols(nLength);
    alert('Сгенерированая строка: ' + '\n' + generatedString);
    let generatedObj = ShowQuestionReplaceSymbols(generatedString, 'Каким символом заменить все буквы?', /[A-Z]/g);
    generatedString = generatedObj.generatedString;
    nSymbolFirst = generatedObj.nSymbol;
  }

  if (generatedString) {
    let generatedObj = ShowQuestionReplaceSymbols(generatedString, 'Каким символом заменить все цифры?', /[0-9]/g);
    generatedString = generatedObj.generatedString;
    nSymbolSecond = generatedObj.nSymbol;
  }

  if (generatedString) {
    let amountReFirst = generatedString.match(new RegExp(`\\${nSymbolFirst}`, 'g'));
    let amountReSecond = generatedString.match(new RegExp(`\\${nSymbolSecond}`, 'g'));

    alert('Получившаяся строка: ' + generatedString + '\n' +  
          'Количество повторов первого символа: ' + amountReFirst.length + '\n' + 
          'Количество повторов второго символа: ' + amountReSecond.length);
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
  return {
    generatedString: generatedString.replace( whatToReplace, nSymbol),
    nSymbol
  };
}