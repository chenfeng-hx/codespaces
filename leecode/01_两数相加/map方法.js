/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “算法OJ” 中
 *    于 2023-04-07 19:30:19 编写而成！
 *    祝你食用愉快！！！
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const numMap = new Map();
	nums.forEach((value, key) => numMap.set(key, value));
	console.log(numMap);
	const index = [];
	for (let value of numMap.values()) {
		let out = 
		console.log(out);
	}


};
console.log(twoSum([0, 3, 2, 9, 7, 8, 6], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([-1,-2,-3,-4,-5], -8));
// console.log([0, 3, 2, 9, 7, 8, 6].indexOf(9));