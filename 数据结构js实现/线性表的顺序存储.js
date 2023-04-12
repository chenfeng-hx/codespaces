// 使用数组当做顺序存储
const arr = new Array(1);

/**
 * 实现功能：
 * 1. 增加(插入)
 * 2. 删除
 * 3. 更改
 * 4. 查找
 * 5. 如果提前固定数组的长度，则需要在内部进行深复制（插入删除时）
 */

/**
 * 该函数用于向线性表中任意位置添加元素
 * @param {Array} arr 
 * @param {Number | CharacterData} value 
 * @param {Number} index 
 * @returns {Array}
 */
function add(arr, value, index) {
    let ret = new Array(arr.length + 1);
    index = (index === undefined ? arr.length - 1 : index);
    if (index < 0 || index > arr.length - 1) console.log('位置不合法！');
    // 插入
    else if (index < arr.length - 1) {
        // 说明在现有数组内部，需要移动数组
        ret[index] = value;
        for (let i = 0; i < arr.length - 1; i++) {
            let j = i;
            // 说明遇到了插入的那个值
            if (ret[j] !== undefined) j = j + 1;
            ret[j] = arr[i];
        }
    } else {  // index === arr.length - 1
        if (arr[index] === undefined) return arr.push(value);
        else {
            ret = [...arr, value];
        }
    }
    return ret;
}

/**
 * 该函数用于改变线性表中的任意位置的元素
 * @param {Array} arr 
 * @param {Number} index 
 * @param {Number | CharacterData} newValue 
 */
function change(arr, index, newValue) {
    if (index < 0 || index > arr.length - 1) console.log('位置不合法!');
    else arr[index] = newValue;
}

/**
 * 该函数用于删除线性表中的某个元素
 * @param {Array} arr 
 * @param {Number} index 
 * @returns {Array}
 */
function drop(arr, index) {
    let ret = new Array(arr.length - 1);
    if (index < 0 || index > arr.length - 1) console.log('位置不合法!');
    else {
        arr[index] = undefined;
        for (let i = 0; i < arr.length - 1; i++) {
            let k = i;
            if (arr[i] === undefined) i += 1;
            ret[k++] = arr[i];
        }
    }
    return ret;
}

/**
 * 该函数用于查找线性表中的某个元素
 * @param {Array} arr 
 * @param {Number} index 
 * @returns {Number | CharacterData}
 */
function selset(arr, index) {
    if (index < 0 || index > arr.length - 1) console.log('位置不合法!');
    else return arr[index];
}
