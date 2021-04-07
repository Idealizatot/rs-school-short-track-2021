// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    throw new Error('Not implemented');
    // let count;
    // if (!this.head) {
    //   count = 0;
    // } else {
    //   let current = this.head;
    //   count++;
    //   while (current.next !== null) {
    //     count++;
    //     current = current.next;
    //   }
    // }
    // return count;
  }

  enqueue(/* element */) {
    // throw new Error('Not implemented');
    // const item = new ListNode(element);
    // this.length++;
    // let current = this.head;
    // if (!current) {
    //   this.head = item;
    // } else {
    //   while (current.next !== null) {
    //     current = current.next;
    //   }
    //   current.next = item;
    // }
  }

  dequeue() {
    throw new Error('Not implemented');
    // let result;
    // if (!this.length) {
    //   result = null;
    // } else {
    //   result = this.head.value;
    //   this.head = this.head.next;
    // }
    // this.length--;
    // return result;
  }
}
// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(4);
// queue.enqueue(3);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();

module.exports = Queue;
