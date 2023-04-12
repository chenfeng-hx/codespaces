/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “算法OJ” 中
 *    于 2023-04-08 09:31:42 编写而成！
 *    祝你食用愉快！！！
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// class ListNode {
// 	constructor(value, next, sub = 0) {
// 		this.value = (value === undefined ? 0 : value);
// 		this.next = next;
// 		this.sub = sub;
// 	}
// }
// var addTwoNumbers = function(l1, l2) {
// 	let arr1 = [];
// 	let arr2 = [];
// 	let end = [];
// 	let abc = [];
// 	let minLen;
// 	l1.forEach((item, index, l1) => {
// 		index < l1.length - 1 ? arr1.push(new ListNode(item,'next')) :arr1.push(new ListNode(item,null))
// 	})
// 	l2.forEach((item, index, l2) => {
// 		index < l2.length - 1 ? arr2.push(new ListNode(item,'next')) : arr2.push(new ListNode(item,null))
// 	})
// 	minLen = arr1.length > arr2.length ? arr2.length : arr1.length;
// 	for (let i = 0; i < minLen; i++) {
// 		// 如果不是第一个，最低位没有进位，不判断会读取[-1]位的值
// 		let sum = i - 1 >= 0? arr1[i].value + arr2[i].value + end[i - 1].sub : arr1[i].value + arr2[i].value;
// 		end[i] = new ListNode(sum % 10, 'next', Math.floor(sum / 10));
// 	}
// 	if (arr1[minLen] !== undefined) {
// 		for (let j = minLen; j < arr1.length; j++) {
// 			let sum = arr1[j].value + end[j - 1].sub;
// 			end[j] = new ListNode(sum % 10, 'next', Math.floor(sum / 10));
// 		}
// 	} else {
// 		for (let j = minLen; j < arr2.length; j++) {
// 			let sum = arr2[j].value + end[j - 1].sub;
// 			end[j] = new ListNode(sum % 10, 'next', Math.floor(sum / 10));
// 		}
// 	}
// 	for (let k = 0; k < end.length; k++) {
// 		abc.push(end[k].value);
// 	}
// 	return abc;
// };
class ListNode {
	constructor(value,sub = 0, next) {
		this.value = (value === undefined ? 0 : value);
		this.next = (next === undefined ? null : 'next');
		this.sub = sub;
	}
}
var addTwoNumbers = function(l1, l2) {
	let end = [];
	let abc = [];
	let minLen;
	minLen = l1.length > l2.length ? l2.length : l1.length;
	for (let i = 0; i < minLen; i++) {
		// 如果不是第一个，最低位没有进位，不判断会读取[-1]位的值
		let sum = i - 1 >= 0? l1[i] + l2[i] + end[i - 1].sub : l1[i] + l2[i];
		end[i] = new ListNode(sum % 10, Math.floor(sum / 10));
	}
	if (l1[minLen] !== undefined) {
		for (let j = minLen; j < l1.length; j++) {
			let sum = l1[j] + end[j - 1].sub;
			end[j] = new ListNode(sum % 10, Math.floor(sum / 10));
		}
	} else {
		for (let j = minLen; j < l2.length; j++) {
			let sum = l2[j] + end[j - 1].sub;
			end[j] = new ListNode(sum % 10, Math.floor(sum / 10));
		}
	}
	for (let k = 0; k < end.length; k++) {
		abc.push(end[k].value);
	}
	return abc;
};
console.log(addTwoNumbers([9, 5, 8, 1, 1, 1], [2, 3, 4]));
console.log(addTwoNumbers([0], [0, 0]));
console.log(addTwoNumbers([2,4,3], [5,6,4]));