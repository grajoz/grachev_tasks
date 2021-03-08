
const arr1 = [1,2];
const arr2 = [1];
const arr3 = [1,2,2,2,3];
const arr4 = [2, 9, 99, -1];
const arr5 = [23,2,2,4,5,5,7,8,222];
const arr6 = [1,2,32,3,2,6,8,3,9,5];

const str = "The sunset sets at twelve o' clock.";

const num1 = 9119;
const num2 = 323;
const num3 = 101;

let arrayDiff = (function () {
    function _arrayDiff (firstArr, secondArr) {
        let resultArr = [];

        let secondArrLength = secondArr.length;
        for (let i=0; i<secondArrLength; i++) { 
            let firstArrLength = firstArr.length;
            for (let j = 0; j<firstArrLength; j++) {
                if (firstArr[j] === secondArr[i]) {
                    firstArr[j]  = "delete";
                }
            }
        }

        let firstArrLength = firstArr.length;
        for (let j = 0; j<firstArrLength; j++) {
            if (firstArr[j] !== "delete") {
                resultArr.push(firstArr[j]);
            }
        }
        return resultArr;
    }

    return  _arrayDiff;
})();

console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff(arr1,arr2));
console.log(arrayDiff(arr1,arr3));
console.log(arrayDiff(arr5,arr6));

let replaceAlphabetPosition = (() =>{
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split('');

    function _replaceAlphabetPosition (str) {
        let numStr = [];
        str = str.toLowerCase().split('');

        let strLength = str.length
        for (let i=0; i<strLength; i++) {
            let alphabetLenght = ALPHABET.length;
            for (let j=0; j<alphabetLenght; j++) {
                if (str[i] === ALPHABET[j]) {
                    numStr.push(j + 1);
                }
            }
        }
        numStr = numStr.join(' ')
        return numStr;
    }
    return _replaceAlphabetPosition;
})();

console.log(replaceAlphabetPosition(str))

let squareEveryDigit = (() => {
        function _squareEveryDigit (num) {
            return num.toString()
                      .split('')
                      .map(elem => (+ elem) ** 2)
                      .join('') - 0;
        }
    return _squareEveryDigit;
})();

console.log(squareEveryDigit(num1));
console.log(squareEveryDigit(num2));
console.log(squareEveryDigit(num3))