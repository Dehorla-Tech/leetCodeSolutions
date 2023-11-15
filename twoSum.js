/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
            let x = nums[i];
       for(let j = i + 1; j < nums.length; j++){
                let y = nums[j];
               if (target === x + y){
                       return [i, j]
               }
       }
           
    }

    return [];
};