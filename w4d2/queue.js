class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;

    }

    /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
    isEmpty() {
        if (this.front == null) {
            return true;
        } else {
            return false;
        }
    }

    /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
    getFront() {
        if (this.front) {
            return this.front.data;
        } else {
            return undefined;
        }
        //return the front data
    }

    /**
   * Adds a new given data to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
    enqueue(data) {
        let newNode = new Node(data);
        if (this.front) {
            this.rear = newNode;
        } else {
            this.front = newNode;
            this.rear = newNode;
        }
        return newNode;
    }


    /**
     * Removes and returns the data of the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        } else {
            let removedNode = this.front;
            this.front = this.front.next;
            return removedNode.data;
        }
    }

    // bonus
    /**
   * Check if the target value exists in the queue
   * @returns {Boolean } 
   */
    contains(targetVal) {
        const tempQ = new Queue();
        let isFound = false;
        while(!this.isEmpty()) {
            let tempData = this.dequeue();
            if(tempData = targetVal) {
                isFound = true;
                // break
            }
            tempQ.enqueue(tempData);
        }
        while(!tempQ.isEmpty()) {
            this.enqueue(tempQ.dequeue())
        }
        return isFound;
    }

    printQueue() { //for learning puspose
        console.log("Front: " + this.front.data);
        var runner = this.front;
        while (runner) {
            console.log(runner.data)
            runner = runner.next;
        }
        console.log("Rear: " + this.rear.data);
    }
}


var q = new Queue();
var q2 = new Queue();

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.printQueue(); //expected: front: "a", rear : "d"

console.log(q2.isEmpty());
console.log(q.getFront());

q.dequeue();
q.printQueue(); //expected: front: "b", rear : "d"
