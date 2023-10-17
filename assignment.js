/*// Tworzymy tablicę z danymi użytkownika
var daneUzytkownikow = [
  { imie: 'Jan', nazwisko: 'Kowalski' },
  { imie: 'Anna', nazwisko: 'Nowak' },
  { imie: 'Marek', nazwisko: 'Wiśniewski' },
  {imie: 'Arek', nazwisko: 'Wiśniewski'}
  // Dodaj dowolne inne dane użytkowników
];

// Sortujemy tablicę alfabetycznie według nazwiska
daneUzytkownikow.sort(function (a, b) {
  var nazwiskoA = a.nazwisko.toUpperCase();
  var nazwiskoB = b.nazwisko.toUpperCase();

  if (nazwiskoA < nazwiskoB) {
    return -1;
  }
  if (nazwiskoA > nazwiskoB) {
    return 1;
  }

  // Równe nazwiska, sortuj według imienia
  var imieA = a.imie.toUpperCase();
  var imieB = b.imie.toUpperCase();

  if (imieA < imieB) {
    return -1;
  }
  if (imieA > imieB) {
    return 1;
  }

  // Równe imiona, kolejność nie zmienia się
  return 0;
});

// Wyświetl posortowane dane
for (var i = 0; i < daneUzytkownikow.length; i++) {
  console.log(daneUzytkownikow[i].nazwisko + ', ' + daneUzytkownikow[i].imie);
}*/
/*
//PUSH

const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [ 1, 2, 3, 4 ]

//UNSHIFT

const arr2 = [1, 2, 3];
arr2.unshift(5);
console.log(arr2); // [ 0, 1, 2, 3 ]

//POP
const arr3 = [1, 2, 3];
const item = arr3.pop();
console.log(arr3, item); //[ 1, 2 ] 3
//USUWA I ZWRACA OSTATNI ELEMENT

//SHIFT

const arr4 = [1, 2, 3];
const first = arr4.shift();
console.log(arr4, first); //[ 2, 3 ] 1
//USUWA I ZWRACA PIERWSZY ELEMENT

//SLICE
const arr6 = [1, 2, 3, 4, 5];
const arr7 = arr6.slice(0, 3);
console.log(arr6, arr7); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3 ]
// Metoda slice wycina wskazaną część tablicy, ale nie modyfikuje oryginalnej tablicy

//SPLICE

const arr5 = [1, 2, 3, 4, 5];
arr5.splice(2, arr5.length - 1);
console.log(arr5); // [ 1, 2 ]

// CONCAT

const arr8 = [1, 2, 3];
const arr9 = [4, 5];

const concat = arr8.concat(arr9);
console.log(concat); // [ 1, 2, 3, 4, 5 ]

const concat2 = arr8.concat(arr9, 6, 7);
console.log(concat2);  // [ 1, 2, 3, 4, 5, 6, 7 ]

// JOIN

const arr10 = [1, 2, 3, 4, 5];
const joined = arr10.join(' / ');
console.log(joined); //   1 / 2 / 3 / 4 / 5

//INDEXOF

const arr11 = [1, 2, 3, 3, 4, 3, 3];
const index = arr11.indexOf(3);
console.log(index);

// LASTINDEXOF
const arr12 = [1, 2, 3, 3, 4, 3, 3];
const lastIndex = arr12.lastIndexOf(3);
console.log(lastIndex); // 6

// REVERSE

const arr13 = [1, 2, 3, 4, 5];
const reverse = arr13.reverse();
console.log(reverse); // [ 5, 4, 3, 2, 1 ]
*/

// METODY POSZUKUJĄCE

// FIND
const arr1 = [100, 200, 300, 200, 200];

const result1 = arr1.find((e) => e > 100);
console.log(result1); // 200
// FINDINDEX
const arr2 = ['aaa', 'foo', 'ccc', 'boo', 'bar'];

const result3 = arr2.findIndex((e) => e.includes('o'));
console.log(result3); // 1
// FILTER
const arr3 = [2, 1, 6, 9, 4, 5, 3, 2];

const result4 = arr3.filter(e => e % 2 === 0);
console.log(result4); // [ 2, 6, 4, 2 ]
// SOME
const arr5 = [2, 1, 6, 9, 4, 5, 3, 2];

const result6 = arr5.some(e => e > 5);
console.log(result6); // true

// EVERY
const arr6 = ['foo', 'bar', 'boo'];

const result7 = arr6.every(e => e.includes('o'));
console.log(result7); // false


