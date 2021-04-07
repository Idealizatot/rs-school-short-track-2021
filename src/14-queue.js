const ListNode = require('../extensions/list-node');
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
    let count;
    if (!this.head) {
      count = 0;
    } else {
      let current = this.head;
      count++;
      while (current.next !== null) {
        count++;
        current = current.next;
      }
    }
    return count;
  }

  enqueue(element) {
    const item = new ListNode(element);
    item.value = element;
    item.next = null;
    this.length++;
    let current = this.head;
    if (!current) {
      this.head = item;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = item;
    }
    return this;
  }

  dequeue() {
    let result;
    if (!this.length) {
      result = null;
    } else {
      result = this.head.value;
      this.head = this.head.next;
    }
    this.length--;
    return result;
  }
}

module.exports = Queue;
