//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a stack using a linkedlist to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        if (top == null) {
            return true;
        } else {
            return false;
        }
    }

    /**
   * Adds a new given item to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   * @returns {number} .
   */
    push(data) {
        let newNode = new StackNode(data)
        if (this.top == null) {
            this.top = newNode;
        } else {
            // newNode.next = this.top;
            // this.top= newNode;
            // return this.top.data;
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
    }


    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed data or undefined if this stack was empty.
     */
    pop() {
        if (this.top) {
            this.top = this.top.next;
        } else {
            return "empty";
        }
    }

    /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
    peek() {
        if (this.top) {
            return this.top.data;
        } else {
            return "empty";
        }
    }


    /**
   * Returns whether or not this stack is empty .
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
    size() {
        if (this.top) {
            let temp = this.top;
            let count = 1;
            while (temp.next != null) {
                count++;
                temp = temp.next;
            }
            return count;
        } else {
            let count = 0;
            return count;
        }
    }
    //return the size of the stack 
    // using only the above 4 operations.

printStack() { // For learning purpose
    console.log("TOP")
    let runner = this.top;
    while (runner) {
        console.log(runner.data);
        runner = runner.next
    }

}
}

let s1 = new Stack();
let s2 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(6);
s1.push(8);
s1.printStack();
//expected:
// TOP
// [ 3 ] 
// [ 2 ]
// [ 1 ]

console.log(s1.pop()); //expected: [ 3 ]
s1.printStack();
//expected: 3
// TOP
// [ 2 ]
// [ 1 ]

console.log(s1.peek());
console.log(s2.peek());

console.log(s1.size());
console.log(s2.size());