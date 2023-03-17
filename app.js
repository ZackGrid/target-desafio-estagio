
const somar = (indice, k) => {
  let soma = 0;
  while (k < indice) {
    k++;
    soma += k;
    console.log(soma);
  }
  console.log(soma);
}

somar(13, 0);

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

console.log(inverterString('oi, eu sou o Zack!'));