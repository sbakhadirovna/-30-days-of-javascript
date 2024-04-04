var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }
    let result = fn(init, nums[0]);
    for (let i = 1; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
     return result;
};