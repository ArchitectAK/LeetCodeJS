/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
    let answer = new Uint32Array(target+1)
    answer[0] = 1
    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
            if (num <= i) {
                answer[i] += answer[i-num]
            }
        }
    }
    
    return answer[target]
};
