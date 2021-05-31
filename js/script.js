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

console.log('Произведение всех цифр числа: ' + multi);

multi = multi ** 3;

console.log(multi);

console.log('Вывод первых двух цифр числа: ' + multi.toString().substring(0, 2));


let lang;
let lang2;
let lang3;
let week = []
let week2 = []
let week3 = []

lang = 'ru';

if ( lang == 'ru' ) {
  week.push('понедельник');
  week.push('вторник');
  week.push('среда');
  week.push('четверг');
  week.push('пятница');
  week.push('суббота');
  week.push('воскресенье');
} else if ( lang == 'en' ) {
  week.push('monday');
  week.push('tuesday');
  week.push('wednesday');
  week.push('thursday');
  week.push('friday');
  week.push('saturday');
  week.push('sunday');
}

console.log(week);

lang2 = 'en';

switch (lang2) {
  case 'ru':
    week2.push('понедельник');
    week2.push('вторник');
    week2.push('среда');
    week2.push('четверг');
    week2.push('пятница');
    week2.push('суббота');
    week2.push('воскресенье');
    break;
  case 'en':
    week2.push('monday');
    week2.push('tuesday');
    week2.push('wednesday');
    week2.push('thursday');
    week2.push('friday');
    week2.push('saturday');
    week2.push('sunday');
}

console.log(week2);

lang3 = 'en';

week3 = {
  'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
}

console.log(week3[lang3]);

let namePerson;

namePerson = 'Артем';

namePerson === 'Артем' ? console.log('Директор') :
namePerson === 'Максим' ? console.log('Преподаватель') :
console.log('Студент');
