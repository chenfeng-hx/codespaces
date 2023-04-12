/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let index = [];
	let first;   // first 中的值永远是 nums[--i]，即当前nums[i]的前一个值
	for(let i = 0; i < nums.length; i++) {
		first = nums[i];
		if(first <= target) {  // 正数流程
			for (let j = i + 1; j < nums.length; j++) {
				if(first + nums[j] === target) {
					index[0] = i;
					index[1] = j;
					return index;
				}
			}
		} else if(first >= target) {   // 负数流程
			for (let j = i + 1; j < nums.length; j++) {
				if (first + nums[j] === target) {
					index[0] = i;
					index[1] = j;
					return index;
				}
			}
		} else {
			first = nums[i + 1];
		}
	}
	return index;
};
// console.log(twoSum([0, 3, 2, 9, 7, 8, 6], 9));
// console.log(twoSum([3,2,4], 6));
console.log(twoSum([-1,-2,-3,-4,-5], -8));