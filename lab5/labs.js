 /* runs test to see if expected argument is === to value returned by function2test argument */
 function myFunctionTest(expected, found){
    //for arrays 
    if (Array.isArray(found)){
        if(expected.length === found.length && expected.every((v, i) => v === found[i])){
            return "TEST SUCCEEDED"
        }else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }else{
        if(expected === found){
            return "TEST SUCCEEDED"
        }else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }

}

// Function 1:
function max(a, b){
    
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of max(10,30) is 30  " + myFunctionTest(30, max(10, 30)));

// Function 2:
function maxOfThree(a, b, c){
    return max(max(a, b), c);
}
console.log("Expected output of maxOfThree(5,2, 8) is 8  " + myFunctionTest(8, maxOfThree(25,2, 8)));


//Function 3:
function isVowel(vowel) {
    let vowels = ['a','e', 'i', 'o', 'u'];
    return vowels.includes(vowel);

}
console.log("Expected output of isVowel(o) is true  " + myFunctionTest(true, isVowel("o")));
console.log("Expected output of isVowel(h) is false  " + myFunctionTest(false, isVowel("h")));



//Function 4
function sum(arr){
    let result = 0;
    for(let i=0; i<arr.length; i++){
        result = result + arr[i];
    }

    return result;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
console.log("Expected output of sum([]) is 0  " + myFunctionTest(0, sum([])));



//Function 4
function multiply(arr){
    let result = arr[0];
    for(let i=1; i<arr.length; i++){
        result = result * arr[i];
    }

    return result;
}
console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(24, multiply([1,2,3,4])));

//Function 5
function reverse(str){
    let strArray = str.split("");
    let result = "";
    for(let i = strArray.length-1; i>=0; i--){
        result = result + strArray[i];
    }

    return result;
}

console.log("Expected output of reverse('hello') is olleh " + myFunctionTest("olleh", reverse("hello")));

//Function 6
function findLongestWord(strArray){
    let max = strArray[0];
    for(let i=1; i<strArray.length; i++){
        if(strArray[i].length > max.length ){
            max = strArray[i];
        }
    }
    return max;
}

console.log("Expected output of findLongestWord('here','hellos', 'hi') is hellos" + myFunctionTest('hellos', findLongestWord(['here','hellos', 'hi'])));

//Function 7
function filterLongWords(strArray, x){
    let result = [];
    for(let i=0; i<strArray.length; i++){
        if(strArray[i].length > x ){
            result.push(strArray[i]);
        }
    }
    return result;
}

console.log("Expected output of filterLongWords(['here','hellos', 'hi'], 3) is ['here','hellos'] " + myFunctionTest(['here','hellos'], filterLongWords(['here','hellos', 'hi'], 3)));

//Function 8
function jsfiddle(){
    const a = [1, 3, 5, 3, 3];
    const multipyingBy10 = a.map(function (elem) {
        return elem * 10;
    });
    console.log("Expected result of multiplying by 10 is [10,30,50,30,30] " + myFunctionTest([10, 30, 50, 30, 30], multipyingBy10));

    const equalTo3 = a.filter(function (elem) {
        return elem === 3;
    });
    console.log("Expected array with elements equal to 3 [3,3,3] " + myFunctionTest([3, 3, 3], equalTo3));

    const product = a.reduce(function (elem1, elem2) {
        return elem1 * elem2;
    });
    console.log("Expected product of all elements  " + myFunctionTest(135, product));
}

jsfiddle();


