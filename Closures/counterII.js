var reduce = function(nums, fn, init) {
    let sum=0
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        sum+=nums[i]
    }
return sum
};
reduce(3,1,1)