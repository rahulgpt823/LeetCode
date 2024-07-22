/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

let syb='_';
    for(let i=0;i<nums.length-1;i++){
        
        let curr_ele=nums[i]
        if(curr_ele==syb){
            continue;
        }
        for(j=i+1;j<nums.length;j++){
            let next_ele=nums[j]
            if(next_ele===curr_ele){
                nums.splice(j,1,'_');
            }
            else{
                continue;
            }
        }
        // console.log(nums)

        
    }

   // Here we can Utilize the index base iteration to switch the element and move the underscore to the extreme right

   let k=0;
   for(let l=0;l<nums.length;l++){
    if(nums[l]!=='_'){
        nums[k]=nums[l]
        k++;
    }
   }

   for (let t=k;t<nums.length;nums++){
    nums[t]='_'
   }

   return k;
    
    

    
    
    
};