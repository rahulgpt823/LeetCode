/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *O(n^2)*/
// var twoSum = function(nums, target) {
//  let path=[];
//  let x;
//  for(x=0;x<nums.length-1;x++){
//     for(let j=x+1;j<nums.length;j++){
//         if (nums[x]+nums[j]== target){
//             path.push(x,j)
//             return path;
//         }
        
//     }

//  } 
 
// };/
var twoSum = function(nums, target) { 
    
let storeObject={}
for(let i=0;i<nums.length;i++){
    let current_num=nums[i]
let checkforNum= target-nums[i];
if (storeObject.hasOwnProperty(checkforNum)){
    return [storeObject[checkforNum],i]
}
   storeObject[current_num]=i
    
}
return [];
}
