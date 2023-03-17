const questao1 = document.querySelector('.questao-1');
const questao2 = document.querySelector('.questao-2');
const botaoQuestao2 = document.querySelector('.verificar');
const questao5 = document.querySelector('.questao-5');
const botaoQuestao5 = document.querySelector('.inverter-texto');



const somar = (indice, k) => {

  let soma = 0;

  while (k < indice) {

    k++;
    soma += k;
  }

  return soma;
}

const fibo = n => {
  let a = 0;
  let b = 1;
  let c = 0;

  while (c < n) {
    c = a + b;
    a = b;
    b = c;
    console.log(c, n);
  }

  return c === n;
}

console.log(fibo(10));

const inverterString = texto => {
  const charArray = texto.split('');
  console.log(charArray);
  const invertedText = [];
  for (let j = charArray.length - 1; j >= 0; j--) {
    invertedText.push(charArray[j]);
  }

  console.log(invertedText);

  return invertedText.join('');
}

const resposta1 = document.createElement('p');
resposta1.innerHTML = somar(13, 0);
questao1.appendChild(resposta1);

botaoQuestao2.addEventListener('click', () => {

  const resposta2 = document.getElementById('fibo?').value;
  const resultadoFibo = document.createElement('p');

  if (fibo(parseInt(resposta2))) {
    resultadoFibo.innerHTML = resposta2 + ' pertence a sequência Fibonacci!';
  } else {
    resultadoFibo.innerHTML = resposta2 + ' NÂO pertence a sequência Fibonacci!';
  }

  questao2.appendChild(resultadoFibo);

})

botaoQuestao5.addEventListener('click', () => {

  const resposta5 = document.getElementById('inverter').value;
  const resultado5 = document.createElement('p');

  resultado5.innerHTML = inverterString(resposta5);


  questao5.appendChild(resultado5);

})
