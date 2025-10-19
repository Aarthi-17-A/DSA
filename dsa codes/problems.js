

/*function printAllDivisors(n){
   for(let i=1; i<=n; i++){
    if(n % i == 0){
        console.log(i);
    }

   }
}
printAllDivisors(12);*/


//
/*function checkPrime(n){
    let count = 0; 
    for(let i = 0; i <= n; i++){
        if(n % i == 0){
            count++;
        }
    }
    if(count ==2){
        console.log("isprime");
    }else{
        console.log("!prime");
    }
}
checkPrime(24);
*/

//1 3 2 1 

/*function extractDigits(n){
    while(n>0){
        let digits = n % 10; 
        console.log(digits);
        n = Math.floor(n/10);
    }
}
extractDigits(1234);*/

//extract digit from left to right
/*function extractDigits(n){
    let str = n.toString();
    for(let i=0; i<str.length; i++){
        let digit = str[i];
        console.log(digit);
    }
}
extractDigits(1234);
*/

/*function extractcharacters(str){
    for(let i=0; i<str.length; i++){
        let char = str[i];
        console.log(char);
    }
}
extractcharacters("barabari");
*/
/*
function countDigits(n){
    let count = 0;
    while(n > 0){
        let digit = n % 10;
        count
    }
}

function countchar(str){
    let count = 0;
    for(let i = 0; i<)
}
*/


/*
//reverse a number
function  reverseNum(n){
    let reversedNumber = 0;
    while(n>0){
      let digit = n % 10;
      n = Math.floor(n/10);
      reversedNumber = (reversedNumber * 10) + digit;
    }
    console.log(reversedNumber);
}
reverseNum(203);
*/

/*
//palindrome by number  
function ispalindrome(n){        //let say the input number is 121
    let originalNumber = n;      //we keep the original number to compare later , originalNumber = 121
    let reversedNumber = 0;     //this will store the reversed version of the input number
    while(n > 0){              //reversing the number using a loop , in this step first n = 121                     n = 12                                       n = 1
        let digit = n % 10;                    //first iteration: //digit = 121 % 10 = 1      second iteration: //digit = 12 % 10 = 2           third itreation://digit = 1 % 10 = 1                       logic:: steps  Digit  n(remaining) ReversedNumber
        n = Math.floor(n/10);                                     //n = math.floor(121 / 10) = 12                //n = math.floor(12 / 10) =  1                //n = math.floor(1 / 10) = 0                           1      1         12            1
        reversedNumber = (reversedNumber * 10) + digit;           //reversedNumber = (0 * 10) + 1 = 1            //reversedNumber = (1 * 10) + 2 = 12           //reversedNumber = (12 * 10) + 1 = 121.               2      2         1             12
    }                                                                                                                                                                                    //                           3      1         0             121
    if (originalNumber === reversedNumber){                                //compare reversed and original
        console.log(originalNumber + " is a palindrome ");
    }else{
        console.log(originalNumber + " is not a palindrome ");
    }                           
}
ispalindrome(121);
*/




/*
function ispalindrome(str){                                                    // let say str = "madam"
     let reversedStr = str.split('').reverse().join('');                      //reversing the string here  and we store the reversed value in reversedStr variable.  first we split the original str by 
     if(str === reversedStr){                                                 //1)split() "madam".split('')--> ["m","a","d","a","m"] then,                           
        console.log(str , " is a palindrome ");                               //2)reverse()  ["m","a","d","a","m"].reverse()--> ["m","a","d","a","m"](same, because it's a palindrome)                      //3) join()  ["m","a","d","a","m"]join() = "madam" by comparing both str and reversedstr the values are same so madam is palindrome.
     }else{
        console.log(str , " is not a palindrome ");
     }
    }
ispalindrome("madam");
ispalindrome("aarthi");
*/




//check if the number is same even if the number is reversed , checking reversed and existing number to compare is both are same.
// function checkpalindrome(n)
      
//}

//reverse a string 
//let say i have one string , i want to revese the string aarthi=ihtraa
//reverese set to empty string reverse = " ";
//to read from right side , use poinet i and use for loop for repetative tasks to point i
//i=string.length-i for to start from right side , indexes wise 0,1,2,3....
//then str[i] , add to reverse variable
//rev="";
//for(i=String.length-i;i>=0;i--){
 //   rev+=str[i];
//}

//reverse a string
// function reverseString(str){
//     let reversed ="";
//     for(let i = str.length -1; i>=0; i--){
//         reversed += str[i];
//     }
//     return reversed
// }
// console.log(reverseString("aarthi"));


//palindrome of string
// function palindromeStr(str){
//     let original=str;
//     let reverse="";
//     for(let i=str.length-1;i>=0;i--){
//         reverse+=str[i];
//     }
//     if(original===reverse){
//         console.log("ispalindromre");
//     }else{
//         console.log("!palindrome");
//     }
// }
// palindromeStr("madam");


//time complexity



// function printAllDivisors(n){
//     for (let i = 1; i<=Math.sqrt(n) ; i++){
//         if(n % i == 0){
//             console.log(i);
//         if(i !=n / i){
//             console.l                                                                                                                                                                                                                                                                    

// function printAllPrimes(n){
//     let isPrime = new Array(n+1).fill(true);
//     isPrime[0] = false;
//     isprime[1] = false;
//     for(let i = 2; i*i <=n; i++){
//         for(j=i*i; j<=n; j+=i){
//             isPrime[j] = false;
//         }
//     }
//     for(let i =2; i<=n; i++){
//         if(isPrime(i)){
//             console.log(i);
//         }
//     }
// }

//swap two numbers

// let a=5;
// let b=10;

// let temp = a;
// a = b;
// b = temp;

// console.log('a=',a);
// console.log('b=',b);

//XOR 
// t t f  (^)         0 ^ 0 = 0     
// t f  t             0 ^ 1 = 1
// f t t              1 ^ 0 = 1
// f f f              1 ^ 1 = 0

//using XOR
// let a=5;
// let b=10;

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// console.log('a=',a);
// console.log('b=',b);

// function isPowerOfTwo(n){
//     if (n < 1) return false;

//     while (n > 1){
//         if (n % 2 !==0){
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(10));


//checking divisibility without modular operator
// function isPowerOfTwo(n) {
//     if (n < 1) return false;

//     while (n > 1) {
//         // Check if n is odd using bitwise AND
//         if ((n & 1) === 1) {
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }
// console.log(isPowerOfTwo(8));  // true
// console.log(isPowerOfTwo(10)); // false

//checking divisibility without modular operator
// function isPowerOfTwo(n) {
//     if (n < 1) return false;

//     while (n > 1) {
//         // Divide by 2 and check if result is whole number
//         let divided = n / 2;
//         if (divided !== Math.floor(divided)) {
//             return false;
//         }
//         n = divided;
//     }
//     return true;
// }

// console.log(isPowerOfTwo(8));  // true
// console.log(isPowerOfTwo(10)); // false

//write a code to count no.of 1s in binary representation
//input 
//output

// function countSetBits(n) {
//     let count = 0;

//     while (n > 0) {
//         if (n % 2 === 1) {
//             count++;
//         }
//         n = Math.floor(n / 2);
//     }

//     return count;
// }

// console.log(countSetBits(13));  // Output: 3 (1101)


// function gcd(a, b) {
//     while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//     }
//     return a;
// }


// console.log(gcd(12, 9));   


//find if the no-15 is power of 2 .
// 

Math.log2(n)
function power(n){
    if(n<0){
        return false;
    }else{
        let value=Math.log2(n)
        return Number.isInteger(value)

    }
}
console.log(power(10));


//math functions in js(w3schools) built-in functions