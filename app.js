//easy1
// looping an array, if even = % 2 == , else odd

//Created two empty arrays that will be filled after the function

const Input = [2, 4, 7, 11, 15, 16]
let odd = [];
let even = [];

// Created a funtion with condtionals to put indexes in their respective new arrays

function oddEvenSplit(arr){
for (const number of Input) {
    if (number % 2 == 0) {
    even.push(number);
    } else {
        odd.push(number)
    }
}

// Declared a variable that contains the new arrays to be returned together

const returnArray = {
    odd,
    even,
};
return returnArray
}
console.log(oddEvenSplit(Input))

//easy2
//function to check for primes + insert primes into new array
let numArray = [1,2,3,4,5,6,7,8,9,10]
let primeArray = []

function newPrimeArray (){
function isPrime(num) {
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
}
primeArray = numArray.filter(isPrime);
return primeArray
}
console.log(newPrimeArray());

//medium 1
function vowelChecker (x){
  let letter = x.toLowerCase().charAt(0);
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
    console.log('This is a vowel')
  } else {
    console.log('This is not a vowel.')
  }
}
console.log(vowelChecker('A'))

//medium2
let str1 = 'So dark the con of man'
let str2 = 'Madonna of the Rocks'

function checkAnagram(string1, string2){

  let newstring1 = string1.replace(/\s/g, '').toLowerCase().split('').sort().join();
  let newstring2 = string2.replace(/\s/g, '').toLowerCase().split('').sort().join();

  if(newstring1 == newstring2){
    return true;
  }
  else{
    return false;
  }
}
console.log(checkAnagram(str1,str2))

//medium3
function gcd (num1,num2){
  while(num1 != num2){
    if (num1 > num2){
      num1 = num1 - num2;
    }else{
      num2 = num2 - num1;
    }
  }
  return num2;
}
console.log(gcd(336,360))

//medium4

let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2017,
  milage: 60000,
  color: 'blue',
  driveToWork: function (){
    let newMilage = this.milage + 33;
    console.log(`old milage: ${this.milage} new milage: ${newMilage}`)
  },
  driveAroundTheWorld: function (){
    let newMilage = this.milage + 24000;
    console.log(`old milage: ${this.milage} new milage: ${newMilage}`)
  },
  runErrands: function (){
    let newMilage = this.milage + 30;
    console.log(`old milage: ${this.milage} new milage: ${newMilage}`)
  }
}
car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();

//hard
function matchBracket (input){
  let braces = '{}[]()';
  let stack = [];
  for (let bracket of input){
    let bracketIndex = braces.indexOf(bracket)
    if (bracketIndex % 2 === 0){
      stack.push(bracketIndex + 1)
    } else {
      if (stack.pop() !== bracketIndex){
        return false;
      }
    }
  }
  return stack.length === 0
}
console.log(matchBracket('(hello}'))

/* console
{ odd: [ 7, 11, 15 ], even: [ 2, 4, 16 ] }
[ 2, 3, 5, 7 ]
This is a vowel
true
24
old milage: 60000 new milage: 60033
old milage: 60000 new milage: 84000
old milage: 60000 new milage: 60030
false */