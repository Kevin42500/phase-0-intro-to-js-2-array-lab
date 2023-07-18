// // Write your solution here!
// let cats = ["Milo", "Otis", "Garfield"]

// function destructivelyAppendCat(Oscar) {
//   cats.push("Ralph");
// }

function destructivelyPrependCat(Ralph) {
  cats.unshift("Oscar");
}


console.log(cats);

destructivelyPrependCat('Whiskers');

console.log(cats); 


let cats = ["Milo", "Otis", "Garfield"];


function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
}

function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}
 