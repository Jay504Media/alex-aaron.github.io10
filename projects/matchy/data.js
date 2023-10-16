/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//create a variable named animal and assign it to an empty object
var animal = {};
//use dot notation to give animal a property named species
  animal.species = 'dog',
//use bracket notation to give animal a value of animal name
  animal['name'] = 'killer',
//use dot notation to give animal a property called noises with an empty array
  animal.noises = [];
  //log animal object to the console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named noises and assign it to an empty array
var noises = [];
//use bracket notation to give noises its first element of a sound it might make
noises[0] = 'Growl';
//use an array function to add another noise to the end of noises
noises.push('Bark');
//add an element to the beginning of noises using unshift()
noises.unshift('Whine');
//add another element to the end of noises without hard coding
noises[noises.length] = 'Howl';


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('Sighs');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);
var cat = {
  species: 'cat',
  name: 'fefe',
  noises: ['purr', 'meow']
};
var bird = {
  species: 'bird',
  name: 'flo',
  noises: ['sings', 'woo woo']
};
var friends = [];

animals.push(cat, bird);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
}
var randomAnimalIndex = getRandom(animals);
var randomAnimal = animals[randomAnimalIndex];
friends.push(randomAnimal.name);
console.log(friends);
animals[0].friends = friends;
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}