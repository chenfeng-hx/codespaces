// 实现链表结点类
class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = (next === undefined ? null : next);
    }
}
// 实现链表类
class List {
    constructor() {
        // console.log(this);   // 指向原型对象
        this.value = new ListNode();
    }

    // 定义链表的长度
    length = 0;

    // 输出链表的全部内容(有值的部分)
    conLog() {
        let current = this.value;
        // console.log(this);   // 指向实例对象
        let j = 0;
        while (j <= this.length) {
            if (current.value !== undefined) {
                console.log(current.value);
                if (current.next !== null) {
                    current = current.next;
                } else break;
            }
        }
    }

    /**
     * 在链表的不同位置中添加(插入)元素(不允许链表结点有数据域为空的存在)
     * @param {Number | CharacterData} value:链表结点的值
     * @param {Number} index: 要插入的位置(0-length)
     */
    add(value, index= this.length) {
        let current = this.value;
        if (index < 0 || index > this.length) return console.log('位置不合法!');
        // 始终将current移动到指向要插入元素的前一个元素
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        // 如果有空就插入
        if (current.value === undefined) {
            current.value = value;
        } else {
            let newNode = new ListNode(value);
            // 如果在首节点插入，就让新结点指向首节点，然后让列表的值等于新结点
            if (index === 0) {
                newNode.next = current;
                this.value = newNode;
            } else if (index === this.length) {
                // 如果在尾结点插入，就让当前节点的下一个节点指向新结点
                current.next = newNode;
            } else {
                // 如果是中间的某个位置，就让当前节点指向新结点，新结点指向当前节点的下一个节点
                newNode.next = current.next;
                current.next = newNode;
            }
        }
        this.length += 1;
    }

    /**
     * 在链表中删除元素(通过下标(位置)删除)
     * @param {Number} index : 要删除元素的位置
     */
    dropIndex(index) {
        let current = this.value;
        if (index < 0 || index > this.length) return console.log('位置不合法!');
        // 始终将current移动到指向要删除元素的前一个元素(更换当前节点)
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        // 如果删除首节点，就让列表的值指向首节点的下一个节点
        if (index === 0) {
            this.value = current.next;
        } else if (index === this.length) {
            // 如果是删除尾结点，就让当前节点的next指向空
            current.next = null;
        } else {
            current.next = current.next.next;
        }
        this.length -= 1;
    }

    /**
     * 在链表中删除元素(通过值(位置)删除)
     * @param {Number | CharacterData} value : 要删除元素的位置
     * @return {String}
     */
    dropValue(value) {
        let index = this.select(value);
        if (index !== -1) this.dropIndex(index);
        else return '不存在该值！';
    }

    /**
     * 该方法用于在链表中查找特定值
     * @param {Number | CharacterData} value
     * @return {number}
     */
    select(value) {
        let current = this.value;
        let j = 0;
        while (j <= this.length) {
            if (current.value !== undefined && current.value === value) return j;
            if (current.next !== null) {
                current = current.next;
                j = j + 1;
            } else return -1;
        }
    }

    /**
     * 该方法用于改变某个结点的值
     */
    change(index, value) {
        let current = this.value;
        if (index < 0 || index > this.length) return console.log('位置不合法!');
        // 定位到该 index 下的结点
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current.value = value;
    }
}

/**
 * 实现功能：
 * 1. 增加(插入)
 * 2. 删除
 * 3. 更改
 * 4. 查找
 */

let a = new List();
console.log(a);
a.add(2);
a.add(3, 0);
a.add(3);
a.add(4, 2);
a.conLog();
// a.dropIndex(3);
// a.dropIndex(1);
// a.dropIndex(0);
// a.conLog();
// let index = a.select(5)
// console.log(index);
// console.log(a.dropValue(5));
a.change(2, 7);    // 后执行
a.change(10, 7);   // 先执行
a.conLog();