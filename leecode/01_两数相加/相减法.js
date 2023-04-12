/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “算法OJ” 中
 *    于 2023-04-07 18:48:25 编写而成！
 *    祝你食用愉快！！！
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let Index = [];
	for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
		let secondNum = target - nums[firstIndex];
		let secondIndex = nums.indexOf(secondNum);
		if (secondIndex !== -1 && secondIndex !== firstIndex) {
			Index[0] = firstIndex;
			Index[1] = secondIndex;
			return Index;
		}
	}
	return Index;
};
console.log(twoSum([0, 3, 2, 9, 7, 8, 6], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([-1,-2,-3,-4,-5], -8));
// console.log([0, 3, 2, 9, 7, 8, 6].indexOf(9));