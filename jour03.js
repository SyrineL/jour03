//01
var fruits = ["mango", "lemon", "blueberry"]; 
console.log(fruits)
var fruits = ["mango", "lemon", "blueberry"]; 
console.table(fruits)

//02
//- Créez une variable `ingredients` qui contiendra un tableau
// avec les valeurs `"eggs"`, `"milk"` et `"butter"`
//- Faites apparaître `"milk"` dans la console
//- Faites apparaître l'index de `"butter"` dans la console
var ingredients = ["eggs", "milk", "butter"]; 
console.log(ingredients[1])
console.log(ingredients.indexOf("butter"))




//## 03 - Add and Remove

//- Créez une variable `objects` qui contiendra un tableau avec les valeurs `"pen"`, `"book"` et `"lamp"`
//- Ajoutez `"chair"` au début du tableau puis affichez le résultat
//- Enlevez `"lamp"` puis affichez le résultat
//- Ajoutez `"laptop"` à la fin du tableau puis affichez le résultat
//- Enlevez `"chair"` puis affichez le résultat
var objects = ["pen", "book", "lamp"]
console.log(objects)
objects.unshift("chair")
console.log(objects)
objects.pop()
console.log(objects)
objects.push("laptop")
console.log(objects)
objects.shift()
console.log(objects)


//## 04 - Order

//- Créez une variable `numbers` qui contiendra un tableau
// avec les valeurs `4`, `10`, `8`, `12` et `6`
//- Inversez l'ordre des éléments de `numbers` 
//puis affichez le résultat
//- Rangez les éléments de `numbers` dans l'ordre 
//croissant puis affichez le résultat

var numbers = [`4`, `10`, `8`, `12`, `6`]
console.log(numbers)
numbers.reverse()
console.log(numbers)
numbers.sort((a, b) => a - b)
console.log(numbers)



// ## 05 - Boucle

//- Créez une variable `total` de valeur `0` 
//et une variable `limit` de valeur `10`
//- À l'aide d'une boucle for allant de`0` à `limit`, 
//augmentez la valeur de `total` en lui ajoutant la valeur de `i` 
//(i est l'index de votre boucle)
//- Affichez la valeur de `total` après votre boucle, 
//total doit valoir 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

var total = 0
var limit = 10

for (var i = 0; i <= limit ; i++) {  
    console.log(i) // retournera tous les nombres de 0 à 20 !
    total = total + i
    console.log(total)
  }



//## 06 - Reverse

//- Créez une variable `sentence` valant "Hello Konexio !"
//- A l'aide d'une boucle for et sans utilisez la fonction .reverse(), 
//faites en sorte d'afficher l'inverse de votre variable `sentence` 
//("! oixenoK olleH")

var sentence = "Hello Konexio !"
console.log(sentence.length)
for (var i = 0; i >= limit ; i--) {  
    console.log(i) // retournera tous les nombres de 0 à 20 !
    sentence.length = sentence - i
    console.log(sentence)
  }
//for ([expressionInitiale]; [condition]; [expressionIncrément])
//instruction






