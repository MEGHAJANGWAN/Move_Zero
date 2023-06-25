let moveZero = function(nums) {
    let i = 0;
    let j = i + 1;

    while(j <= nums.length-1) {
        if(nums[i] !== 0){
            i++;
            j++;
        }
        else {
            if(nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            }
            j++;
        }
    }
}