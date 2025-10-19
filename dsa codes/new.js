//two pointer techinque
// function twoSumBasic(arr, target){
//     for(let i=0; i<arr.length; i++){
//         for(let j = i + 1; j<arr.length; j++){
//             if(arr[i] + arr[j] == target){
//                 return true;
//             }else{
//                 return false;
//             }    
//         }
//     }
// }
// console.log(twoSumBasic([1,2,3,5,6],11));

//
// function twoSum(arr, target){
//     let left = 0;
//     let right =arr.length-1;
//     while(left < right){
//         let sum = arr[left] + arr[right];
//         if(sum == target){
//             return true
//         }else if(sum < target){
//             left++;
//         }else{
//             right--;
//         }
//     }
// }
// console.log(twoSum([1,2,3,4,5,6],11))

//how to reverse an array ?

// function reverseArray(arr){
//     let result = [];
//     for(let i = arr.length-1; i>=0; i--){
//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(reverseArray([1,2,3,4,5]))

// function reverseArray(arr){
//     let left =0;
//     let right = arr.length-1;
//     while(left < right){
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right]= temp;
//         left++;
//         right--;
//     }
//     return arr;
// }
// console.log(reverseArray([1,2,3,4,5,6,7,8]))

//removing duplicates

// function removeDuplicate(arr){
//     let result =[];
//     for(let i=0; i<arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result;   
// }
// console.log(removeDuplicate([1,2,2,3,3,4,]))

// function removeDuplicate(arr){
//     let i=0;
//         for(let j=1; j<arr.length; j++){
//             if(arr[i]!==arr[j]){
//                 i++;
//                 arr[i]=arr[j];
//             }
//         }
//     return arr.slice(0,i+1);   
// }
// console.log(removeDuplicate([1,2,2,3,3,4,5]));

//sliding window problem
//problem statement: Maximum sum sub-array of size k.

// function maxSumm(arr, K){
//     let maxsum = 0;
//     for(let i=0; i<= arr.length - K; i++){
//         currentSum = 0;
//         for(let j=i; j<i+K; j++){
//             currentSum += arr[j];
//         }
//         maxsum = Math.max(maxsum, currentSum);
//     }
//     return maxsum;
// }
// console.log(maxSumm([2, 3, 4, 5, 6, 7], 3));

function slidingWindow(arr, k){
   let maxSum = 0;
   let windowSum = 0;
   for(let i=0; i<k; i++){
    windowSum += arr[i];
    maxSum = windowSum;
    for(i=k; i<arr.length; i++){
        windowSum = windowSum-arr[i-k] + arr[i];
    }
     maxSum = Math.max(maxSum, windowSum);
   }
return maxSum;
}
console.log(slidingWindow([1, 2, 3, 4, 5, 6, 7], 3));







