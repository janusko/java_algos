/** 
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 https://kalkicode.com/data-structure/single-linked-list-visualization
 */
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * SLL(Singly Linked List) 
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
    constructor() {
        this.head = null;
    }
    addToBack() {
        let newNode = new Node(valueInput)
    }
    if(this.head == null) {
    this.head = newNode;
    } else {
    console.log("this.head looks like this -->, this.head")
    let runner = this.head;

    while (runner.next != null) {
        runner = runner.next
    }

    runner.next = newNode;
    /**
     * Determines if this list is empty.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.head === null) {
            return true;
        }
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        // Create a new node with the given value 
        // inserts it at the back of the list
        // HINT: How to find the last node of a Singly Linked List?  
        // level 1: insert a new node into list1
        // level 2: insert a new node into emptyList
        // let newNode = new ListNode(data);
        // let runner = this.head;
        // // the runner will equals to runner.next if runner.next !== null
        // //this will make sure you can find the last one of your list
        // //once you find the last item in the list, you can add the new data to the back
        // while (runner.next !== null) {
        //     runner = runner.next;
        // }
        // runner.next = newNode;
        // if (this.head === null) {

        // }
        // return this;


        if (this.isEmpty()) {
            this.head = newNode;
            return this;
        } else {
            var runner = this.Headers;
            while (runner.next !== null) {
                runner = runner.next;
            }
            runner.next = newNode;
            return this;
        }
    }

    /** BONUS: 
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
    }

    //given
    printList() {
        // if the head is empty -> the list is empty
        if (this.head === null) {
            console.log("Empty list")
        } else {
            var runner = this.head
            while (runner !== null) {
                console.log(runner.data)
                runner = runner.next
            }
        }
        return this
    }
}

// instantiate nodes
var node1 = new ListNode(3)
var node2 = new ListNode(6)
var node3 = new ListNode(7)

node1.next = node2 // .next points to another node (not data)
node2.next = node3

// create empty list
var emptyList = new SLL();

var list1 = new SLL();
list1.head = node1;
list1.insertAtBack(8)

list1.printList()

list1.insertAtBack(10).insertAtBack(11).printList()

emptyList.insertAtBack(10).insertAtBack(11).printList()








