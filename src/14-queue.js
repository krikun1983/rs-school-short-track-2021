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
    this.length = 0;
    this.head = null;
    this.end = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (!this.head) {
      this.head = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head || !this.end) {
      return null;
    }
    const headOld = this.head;
    this.head = headOld.next;
    this.length--;
    return headOld.value;
  }
}

module.exports = Queue;
