let str;

str = 10;

function getString(a) {
  if (tyeof(a) != 'string') {
    console.log('Аргумент не является строкой');
  } else {
    a.trim();

    if (a.length > 30) {
      
      console.log(a + '...');
    }
    
  }
}

