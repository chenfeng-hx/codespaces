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
var addTwoNumbers = function(l1, l2) {
	let move1 = l1;
    let move2 = l2;
    let current = 0;
    let sumNode;
    let sumTop = sum;
    let sum = new ListNode();
    while (true) {
        if(move1.val !== 0 && move2.val !== 0) {
            sumNode = move1.val + move2.val + current;
            sumTop.val = sumNode % 10;
            sumTop.next = new ListNode();
            sumTop = sumTop.next;
            current = sumNode / 10 > 0 ? 1 : 0;
        } else if (move1.val !== 0) {
			// move2 === 0 l2 空了
            sumNode = move1.val + current;
            sumTop.val = sumNode % 10;
            sumTop = sumTop.next;
            sumTop.next = new ListNode();
            current = sumNode / 10 > 0 ? 1 : 0;
        } else {
            // move2.val !== 0
            sumNode = move2.val + current;
			sumTop.val = sumNode % 10;
            sumTop.next = new ListNode();
            sumTop = sumTop.next;
            current = sumNode / 10 > 0 ? 1 : 0;
        }
        
    }
};