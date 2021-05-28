let num = 266219;

num = String(num);
num = num.split('');

for (i=0; i < num.length; i++) {
  num[i] = +num[i];
}

let multi = 1;

for (i=0; i < num.length; i++) {
  multi = multi * num[i];
}

multi = multi ** 3;

multi = String(multi);
multi = multi.split('');

let total = '';

for (i = 0; i < 2; i++) {
  total += multi[i];
}

total = Number(total);

console.log('total = ' + total);
console.log('Тип данных в переменной total = ' + typeof(total));