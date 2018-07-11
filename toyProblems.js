//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (string) => {
    return string.split('').reverse().join('')
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: (array) => {
    let newArr = []
    for(let i = 0; i < array.length; i++) {
      if(newArr.indexOf(array[i]) === -1){
        newArr.push(array[i])
      }
    }
    return newArr
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (string) => {
    let newString = [];
    let splitString = string.toLowerCase().split(' ');
    console.log(splitString)

    for(let i = 0; i < splitString.length; i++ ) {
      newString.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1))
    };
    return newString.join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (string) => {
    let counter = 0
    let strArr = string.toLowerCase().split('')

    for(let i = 0; i < strArr.length; i++) {
      if(strArr[i] == 'a' || strArr[i] == 'e' || strArr[i] == 'i' || strArr[i] == 'o' || strArr[i] == 'u') {
        counter += 1
      }

    }
    return counter
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: (number) => {
    if(number <=0){
      return false
    }
    for(let i=2; i < number; i++){
      if(number % i === 0 ) {
        return false
      }
    }
    return true
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined 
}
