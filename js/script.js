let arr = ['132', '423423', '2324', '65745', '4356456', '98789', '7654353'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].substring(0, 1) === '2' || arr[i].substring(0, 1) === '4') {
    console.log(arr[i]);
  }
}

prime: for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {

    if ( i % j === 0 ) {
      continue prime;
    }
    
  }
  console.log(i + ' - Простое число');
  console.log('Делители этого числа: ' + 1 + ' и ' + i);
}