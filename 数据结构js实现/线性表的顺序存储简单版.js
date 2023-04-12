/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “codespaces” 中
 *    于 2023-04-12 14:53:12 编写而成！
 *    祝你食用愉快！！！
 */
const arr = [1,2,3,4];

/**
 * 该函数用于在线性表任意位置插入元素
 * @param {Array} arr
 * @param {Number | CharacterData} value
 * @param {Number} index
 */
function add(arr, value, index) {
	if (index === undefined) arr.push(value);
	if (index < 0 || index > arr.length) console.log('位置不合法!');  // 如果填写的位置是末尾也可以进行插入
	else if (index < arr.length - 1) {
		for (let i = arr.length; i > index; i--) {
			arr[i] = arr[i - 1];
		}
		arr[index] = value;
	} else {
		// index === arr.length - 1
		arr.push(value);
	}
}

/**
 * 删除元素
 * @param {Array} arr
 * @param {Number} index
 */
function drop(arr, index) {
	if (index < 0 || index > arr.length - 1) console.log('位置不合法!');
	else {
		for (let i = index; i < arr.length - 1; i++) {
			arr[i] = arr[i + 1];
		}
		arr.pop();    // 去掉最后一个 undefined
	}
	// else delete arr[index];
}

/**
 * 改变元素
 * @param {Array} arr
 * @param {Number} index
 * @param {Number | CharacterData} value
 */
function change(arr, index, value) {
	if (index < 0 || index > arr.length - 1) console.log('位置不合法!');
	else arr[index] = value;
}

/**
 * 查找元素
 * @param {Array} arr
 * @param {Number | CharacterData} value
 * @return {Number | String}
 */
function select(arr, value) {
	let index = arr.indexOf(value);
	return index !== -1 ? index : '不存在！';
}

// add(arr, 5, 3);
// drop(arr, 2);
// change(arr, 2, 1);
let index = select(arr, 5);
console.log(index);
console.log(arr);