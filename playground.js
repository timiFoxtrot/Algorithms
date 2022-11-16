// var a = 'apple';
// let b = 'ball';
// const c = [];

// if (true) {
//     var a = 'another apple';
//     let b = 'another ball';
//     c.push(4);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// // Given a sentence, return the character that occurs the highest number of times

// function highestChar (string) {
//     const store = {};
//     for (char of string) {
//         let key = char.toLowerCase().trim();

//         if (key === '') continue;

//         if (store[key]) {
//             store[key]++
//         } else {
//             store[key] = 1;
//         }
//     }
//     console.log(store);
   
//     const values = Object.values(store);
//     console.log(values);
//     const highestValue = Math.max(...values);
//     console.log(highestValue);

//     const keys = Object.keys(store);
//     console.log(keys);
//     for (let key of keys) {
//         if (store[key] === highestValue) {
//             // console.log(key);
//             return key;
//         }
//     }
// }

// const factorialFxn = (num) => {
//     let result = 1;
//     for (let i = num; i > 0; i--) {
//       result *= i;
//     }
//     return result
// }

// factorialFxn();
// highestChar('I am going home tomorrow');


// const noms = [1, 2, 3, 4];
// let result = 0
// for (let i = 0; i <  noms.length; i++) {
//     result += noms[i]
//     // console.log(result);
//     // return result
// }
// console.log(result);


// const sumMultipleOf3and5 = (num) => {
//     let arr = [];
//     let res = 0
//     for (let i = 1; i < num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             arr.push(i)
//         }
//     }
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         res += arr [i];  
//     }
//     console.log(res);
// }
// // sumMultipleOf3and5(200)


// // find middle character
// const middleChar = str => {
//     if (str.length % 2 === 0) {
//         let halfStr = str.length / 2;
//         const res = str[halfStr -1] + str[halfStr];
//         console.log(res);

//     } else {
//         let halfStr = str.length / 2;
//         let approx = Math.floor(halfStr)
//         const res = str[approx];
//         console.log(res);


//     }
// }
// middleChar('orange')
// middleChar('mango')


// const upArray = arr => {
//     const stringedArr = arr.join('');
//     const num1 = Number(stringedArr);
//     const num2 = num1 + 1;
//     const stringedNum2 = num2.toString();
//     const newArr = [...stringedNum2];
//     const result = []
//     for (let i = 0; i < newArr.length; i++) {
//         result.push(Number(newArr[i]))
//     }
//     console.log(result);
// }
// upArray([5, 6, 9])



// check if a string is palindrome
// const isPalindrome = str => {
//     if (typeof(str) === 'string') {
//         let lowerStr = str.toLowerCase();
//         let reversedStr = [...lowerStr].reverse().join('');
//         console.log(reversedStr);
//         return lowerStr === reversedStr;
//     }
// }
// isPalindrome('abcdcbax')


// this fxn returns a uniq array
const uniqArr = arr => {
   const filteredArr = arr.filter((value, index, self) => {
        return self.indexOf(value) === index
    })
    console.log(filteredArr);
}
// uniqArr([23, 21, 22, 23, 20, 23, 24, 22, 25])


//this fxn returns a unique element in an array. WRONG APPROACH
// const uniqElement = arr => {
//     const sortedArr = arr.sort((a, b) => a - b);
//     console.log(sortedArr);
//     const newArr = [];
//     for (let i = 0; i < sortedArr.length - 2; i++) {
//         if (sortedArr[i] !== sortedArr[i + 1]) {
//             newArr.push(sortedArr[i])
//         }
//     }
//     console.log(newArr);
// }
// uniqElement([23, 21, 22, 23, 20, 23, 24, 22, 25])



// const uniqueElement = arr => {
//     const objArr = {}
//     const newArr = []
//     for (num of arr) {
//         objArr[num] = objArr[num] ? objArr[num] + 1 : 1;
//     }
//     console.log(objArr);
//     for (let key in objArr) {
//         if (objArr[key] === 1) {
//             newArr.push(key)
//         }
//     }
//     return newArr
// }
// console.log(uniqueElement([1,4,5,6,7,3,5,5]));


// the code below returns a unique of elements given from an array containing several occuring element(s)
const uniqueElementUsingSet = (arr) => {
    const stringedArr = arr.join('');
    const uniqArr = new Set(stringedArr);
    return uniqArr
}
// console.log(uniqueElementUsingSet([1,4,5,6,7,3,5,5,1,6]));





function stringWithout(str) {
    let strArr = [...str]
    let newArr = []
    for (let i = 0; i < str.length; i++){
        console.log(str[i]);
      if (isNaN(str[i]) === true){
        newArr.push(str[i])
      }
    }
    console.log(newArr); 
}

// console.log(stringWithout('bcda0'));






function multiplesOf3And7(number) {
    let arr = []
    let res = 0
    for(i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 7 == 0) {
        arr.push(i)
        res += i
      }
    }
    console.log(arr);
    return res
};
// console.log(multiplesOf3And7(10));


// In the code below, the inner loop finishes first, i.e, (0,0;0,1;0,2). Then (1,1;1,2). Then (2,2). This order because j is dependent on i. If j were to be set to 0, (0,0;0,1;0,2), (1,0;1,1;1,2) then (2,0;2,1;2,2).
function mostFrequent (arr) {
  freq = 1;
  count = 0;
  let res;
  // console.log(freq, count);
  for (i = 0; i < arr.length; i++) {
    for(j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++
        console.log(count, i, j);
      }
      if(freq < count) {
        freq = count
        res = arr[i]
      }
    }
    count = 0
  }
  console.log(res + ' occured ' + freq + ' times');
}
// mostFrequent([1, 1, 2])













let number1 = 45
let strNum = number1.toString().split('')
// console.log(strNum);
let sum = +strNum[0] + +strNum[1]
// console.log(sum);



function solution (N, K) {
  let count = 0;
  let sumN = 0
  for (i = N; i > 0; i--) {
    sumN += i;
  }
  console.log(sumN);
  if (K > sumN) {
    count = -1;
  } else if (N < K) {
    for (i = N; i > 0; i--) {
      let diff = K - i;

      if (diff >= 0) {
        K = K - i
        count++
      } else if (diff < 0) {
        continue
      }
    }
  } else if (N >= K) {
    count = 1
  }
  console.log(count);
}
// solution(5, 20)



function filter_listA(l) {
  // Return a new array with the strings filtered out
  let newL = [];
  for (item of l) {
    if (!item.length && item.length != 0) {
      newL.push(item)
    }
  }
  return newL
}

function filter_listB(l) {
 return l.filter(c => typeof c != "string")
}

// console.log(filter_listB(["a", 897, 414, "", "BitA", 367, "26", "p4rM", 911, 172, "785", 913, 350, 975, 149, "0", 875, 328, "243"]));


function isEquivalent(a, b) {
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);
  console.log(aProps, bProps);

  if (aProps.length != bProps.length) {
    return false
  }

  for (i = 0; i < aProps.length; i++) {
    let propName = aProps[i]
    console.log(a[propName] +' , '+ b[propName]);

    if (a[propName] !== b[propName]) {
      return false
    }
  }
  return true
}

// console.log(isEquivalent({'hi': 12}, {'hi': 12}));
// console.log(isEquivalent({'prop1': 'test1', 'prop2': 'test2'}, {'prop1': 'test1', 'prop2': 'test2'}));
// console.log(isEquivalent({'prop1': 'test', 'prop2': function(){}}, {'prop1': 'test', 'prop2': function(){}}));



function openOrSenior1(data){
  let output = []
  for (i = 0; i < data.length; i++) {
    let age = data[i][0];
    let handicap = data[i][1];
    
    if(age >= 55 && 7 < handicap && handicap <= 26) {
      output.push('Senior')
    } else if(age < 55 || 7 >= handicap || handicap >= -2) {
      output.push('Open')
    }
  }
  return output
}

function openOrSenior2(data) {
  return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open')
}

// console.log(openOrSenior2([[3, 12],[55,1],[91, -2],[53, 23]]));



function highAndLow1(numbers){
  // ...
  let numberArr = numbers.split(' ');
  let sortedArr = numberArr.sort((a, b) => +a - +b);

  return (sortedArr[sortedArr.length -1] + ' ' + sortedArr[0]);
}

function highAndLow2(numbers){
  numbers = numbers.split(' ').map(Number);
  console.log(numbers);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers); //Math.max.apply() because Math.max does not accept an array.
}

function highAndLow3(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// console.log(highAndLow1("1 2 -3 4 5"));




function disemvowel1(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let newStr = ""
  for (i = 0; i < str.length; i++) {
    let char = str[i]
    if(!vowels.includes(char.toLowerCase())) {
      newStr += char
    }
  }
  return newStr;
}

function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, '');
}

const vowels = 'aeiou';

function disemvowel3(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

function disemvowel4(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1; //Note indexOf == -1
  }).join('');
}

// console.log(disemvowel1("What are you, a communist?"));



function squareDigits(num){
  let strNum = num.toString().split('');
  let sqrNum = strNum.map(n => n * n);
  let res = "";
  for(value of sqrNum) {
    res += String(value);
  }
  return +res;
}

// console.log(squareDigits(3212));



function findOdd1(A) {
  let obj = {};
  for (val of A) {
    if (obj[val]) {
      obj[val]++;
    } else {
      obj[val] = 1;
    }
  }
  console.log(obj);

  for (key in obj) {
    if (obj[key] % 2 == 1) {
      return key
    }
  }
}

function findOdd2(A) {
  return A.reduce(function(c,v){return c^v;},0); //XOR operator
}

// console.log(findOdd2([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));




var uniqueInOrder1 = function(iterable){
  let res = [];
  for (i = 0; i < iterable.length; i++) {
    // let char = iterable[i]
    console.log(iterable[i - 1], iterable[i], iterable[i + 1]);
    if (iterable[i] === iterable[i + 1]) continue;
    if (iterable[i] !== iterable[i + 1]) {
      res.push(iterable[i])
    }
  }
  return res;
}

var uniqueInOrder2 = function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}

// console.log(uniqueInOrder2([1,2,2,3,3]));



function rot13(message){
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'
  let res = '';

  for (i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase();
    // console.log(char);
    let index = alphabets.indexOf(char);
    let newIndex = index + 13;

    if (newIndex > 25) {
      newIndex = newIndex - 26
    }
    // console.log(newIndex);
    res += char.replace(char, alphabets[newIndex]);
  }
  // return res
  let result = "";
  for (j = 0; j < res.length; j++) {
    console.log(message[j], res[j]);
    if (message[j] == message[j].toUpperCase()) {
      result += res[j].toUpperCase();
      console.log(res[j].toUpperCase());
    } else {
      result += res[j].toLowerCase()
      console.log(res[j]);
    }
    console.log(result);
  }
  return result;
}

// console.log(rot13('aA'));



function findWord(easyPuzzle, word) {
  let arr = [];
  for (j = 0; j < easyPuzzle[0].length; j++) {
    let res = '';

    for (i = 0; i < easyPuzzle.length; i++) {
      let char = easyPuzzle[i][j]
      res += char;
    }
    arr.push(res);
  }
  console.log(arr, arr.length);
  return arr.forEach(str => str.includes(word))
}

let easyPuzzle1 = [
  ['b', 'a', 't'],
  ['i', 'i', 'p'],
  ['t', 'o', 'n']
]

let easyPuzzle2 = [
  ['y', 'o', 't', 'v'],
  ['k', 'c', 'p', 's'],
  ['t', 'a', 'o', 'e'],
  ['t', 't', 'a', 'i']
]

// console.log(findWord(easyPuzzle2, 'yktt'));



// for (i in easyPuzzle2) {
//   console.log(i);
// }




function zero(callback) {
  if(!callback) return 0
  return callback(0)
}

function one(callback) {
  if(!callback) return 1
  return callback(1)
}

function two(callback) {
  if(!callback) return 2
  return callback(2)
}

function three(callback) {
  if(!callback) return 3
  return callback(3)
}

function four(callback) {
  if(!callback) return 4
  return callback(4)
}

function five(callback) {
  if(!callback) return 5
  return callback(5)
}

function six(callback) {
  if(!callback) return 6
  return callback(6)
}

function seven(callback) {
  if(!callback) return 7
  return callback(7)
}

function eight(callback) {
  if(!callback) return 8
  return callback(8)
}

function nine(callback) {
  if(!callback) return 9
  return callback(9)
}

function times (a) {
  return function (b) {
    return a * b
  }
}

function plus (a) {
  return function (b) {
    return a + b
  }
}

function minus (a) {
  return function (b) {
    return b - a
  }
}

function dividedBy (a) {
  return function (b) {
    return Math.floor(b / a)
  }
}
// console.log(nine(times(six())));


function position (num) {
  let arr1 = [0, 4, 5, 6, 7, 8, 9]
  let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  let strNum = num.toString();

  if (arr2.includes(num) || arr2.includes(num % 100)) return strNum + 'th'

  if(num <= 10) {
    if(arr1.includes(num)) {
      return strNum + 'th'
    } else if (num == 1) {
      return strNum + 'st'
    } else if (num == 2) {
      return strNum + 'nd'
    } else {
      return strNum + 'rd'
    }
  }

  if(num > 20 & num < 100) {
    if (arr1.includes(num % 10)) {
      return strNum + 'th'
    } else if (num % 10 == 1) {
      return strNum + 'st'
    } else if (num % 10 == 2) {
      return strNum + 'nd'
    } else {
      return strNum + 'rd'
    }
  }

  if(num >= 100) {
    if (arr2.includes(num % 100) || arr1.includes(num % 10)) {
      return strNum + 'th'
    } else if (num % 10 == 1) {
      return strNum + 'st'
    } else if (num % 10 == 2) {
      return strNum + 'nd'
    } else {
      return strNum + 'rd'
    }
  }
}
// console.log(position(1003));


function ponka(arr) {
  let sumElement;
  let obj = {}
  for (element of arr) {
    let strElementArr = element.toString().split('')
    sumElement = +strElementArr[0] + +strElementArr[1]

    if (!obj[sumElement]) {
      obj[sumElement] = [];
      obj[sumElement].push(element)
    } else {
      obj[sumElement].push(element)
    }
  }
  // console.log(obj);
  if (Object.values(obj).every(el => el.length == 1) == true) {
    return -1
  }
  let finalArr = [];
  for (key in obj) {
    if (obj[key].length > 1) {
      sortedArr = obj[key].sort((a, b) => b - a)
      finalArr.push(sortedArr[0] + sortedArr[1]);
    }
  }
  return Math.max(...finalArr)
  
}
// console.log(ponka([42, 33, 50, 43, 32, 61, 41]));
// console.log(ponka([12, 23, 34]));

function altPonka (arr) {
  let theArray = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    let splitX = x.toString().split('')
    let sumX = +splitX[0] + +splitX[1]
    for (let j = i; j < arr.length; j++) {
      let y = arr[j];
      let splitY = y.toString().split('')
      let sumY = +splitY[0] + +splitY[1]
      if (i == j) continue;

      if (sumX == sumY) {
        theArray.push(+x + +y)
      }
    }
  }
  // console.log(theArray);
  if (theArray.length == 0) return -1;

  return Math.max(...theArray)
}
// console.log(altPonka([42, 33, 60, 50, 43, 32, 61, 41, 80, 44]));
// console.log(altPonka([12, 23, 34]));

function domainName(url){
  let urlArr = url.split('.');
  let newArr = urlArr[urlArr.length - 2]
  if (newArr.includes('//')) {
    let result = newArr.split('/');
    return result[result.length - 1];
  }
  return newArr
}

function domainName(url){
  let urlArr = url.split('.');
  let newArr = urlArr[0]
  if (!url.includes('www') && !url.includes('http')){
    return urlArr[0]
  }
  if (newArr.includes('//')) {
    let result = newArr.split('/');
    if (newArr.includes('www')) {
      return urlArr[1]
    }
    return result[result.length - 1];
  }
  return urlArr[urlArr.length - 2];
}

// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("http://www.zombie-bites.com"));
// console.log(domainName("https://www.cnet.com"));

console.log(domainName2("http://google.co.jp"));
console.log(domainName2("https://www.cnet.com"));
console.log(domainName2("http://www.zombie-bites.com"));
console.log(domainName2("http://github.com/carbonfive/raygun"));




