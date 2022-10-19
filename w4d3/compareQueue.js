class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    // add to top
    push(data) {
        const newNode = new Node(data)
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if (this.top === null) return null;
        var removed = this.top;
        this.top = this.top.next;
        removed.next = null; QAAQAQ
        return removed.data;
    }

    peek() {
        return this.top;
    }

}


class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    getFront() {
        if (this.front) {
            return this.front.data;
        } else {
            return null;
        }
    }

    getRear() {
        if (this.rear) {
            return this.rear.data;
        } else {
            return null;
        }
        //return the front
    }

    enqueue(data) {
        // construct a new node and add to the current queue
        var node = new Node(data);
        if (this.front == null) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        // remove and return from the front of the queue
        if (!this.front) {
            return null;
        }

        const dequeued = this.front;
        this.front = this.front.next;

        if (this.front === null) {
            this.rear = null;
        }
        return dequeued.data;
    }

    isEmpty() {
        if (this.front) {
            return false;
        } else {
            return true;
        }
        // check if the queue is empty
    }

    printQueue() {
        console.log("Front: " + this.getFront());
        console.log("Rear: " + this.getRear());
        var tempQ = new Queue();
        while (!this.isEmpty()) {
            var tempData = this.dequeue();
            tempQ.enqueue(tempData);
            console.log(tempData);
        }
        while (!tempQ.isEmpty()) {
            var tempData = tempQ.dequeue();
            this.enqueue(tempData);
        }

    }

}


var test1 = new Queue(); // "a" "b" "c" "d"
test1.enqueue("a");
test1.enqueue("b");
test1.enqueue("c");
test1.enqueue("d");
test1.printQueue();


var test2 = new Queue(); // "a" "b" "c" "d"
test2.enqueue("a");
test2.enqueue("b");
test2.enqueue("c");
test2.enqueue("d");

var test3 = new Queue();// "a" "b" "b" "a"
test3.enqueue("a");
test3.enqueue("b");
test3.enqueue("b");
test3.enqueue("a");


/**
 * Compares 2 queues to see if they are equal.
 * Avoid indexing the queue items directly via bracket notation, use the
 * queue methods instead for practice.
 * Use no extra array or objects.
 * The queues should be returned to their original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Queue} q1 q2 The queues to be compared 
 * @returns {boolean} Whether all the items of the two queues are equal and
 *    in the same order.
 */
function compareQueue(q1, q2) {
    // if(q1.isEmpty() && q2.isEmpty()){
    //     return true;
    // }

    // let q1Front = q1.getFront();
    // let q1Rear = q1.getRear();
    // let q2Front = q2.getFront();
    // let q2Rear = q2.getRear();

    // while(q1.front == q2.front){
    //     console.log("here")
    //     q1.dequeue();
    //     q1.push(dequeued);
    //     q2.dequeue();
    //     q2.push(dequeued);
    //     console.log(q1);
    //     console.log(q2);
    //     if (q1Front == q1.front && q2Front == q2.front && q1Rear == q1.rear && q2Rear == q2.rear) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // } 
    const temp1 = new Queue();
    const temp2 = new Queue();
    let isSame = true;
    while (!q1.isEmpty() && !q2.isEmpty()) {
        let tempData1 = q1.dequeue(); // c
        let tempData2 = q2.dequeue(); // null
        temp1.enqueue(tempData1)
        temp2.enqueue(tempData2)
        if (tempData1 != tempData2) { // abc, vs ab
            isSame = false;
        }
    }
    while (!temp1.isEmpty() && !temp2.isEmpty()) {
        q1.enqueue(temp1.dequeue())
        q2.enqueue(temp2.dequeue())
    }
    return isSame;
}
}

/**
 * Determines if the queue is a palindrome (same items forward and backwards).
 * Avoid indexing queue items directly via bracket notation, instead use the
 * queue methods for practice.
 * Use only 1 stack as additional storage, no other arrays or objects.
 * The queue should be returned to its original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {boolean}
 */
function isPalindrome(q) {
    if (q.isEmpty()) {
        return true;
    }
    let tempStack = new Stack();
    let tempQ = new Queue();
    while (!tempq.isEmpty()) {
        let tempNode = q.dequeue()
        tempStack.push(tempNode);
        tempQ.enqueue(tempNode)
    }
    let data1 = tempQ.dequeue();
    let data2 = tempStack.pop();
    while (data1 === data2) {
        data1 = q.dequeue();
        data2 = tempStack.pop();
        tempq.enqueue(data1);
    }
    if (q.isEmpty() && !tempStack.front) {
        q = tempQ;
        return true;
    }
    q.enqueue(tempq.dequeue());
    return false
}



console.log(compareQueue(test1, test2)); // expected: true
console.log(compareQueue(test1, test3)); // expected: false

console.log(isPalindrome(test3)); // expected : true
console.log(isPalindrome(test2)); // expected : false