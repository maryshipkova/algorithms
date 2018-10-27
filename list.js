class ListNode {
    constructor(value, next) {
        this.next = next || null;
        this.value = value;
    }

    setNext(node) {
        this.next = node;
    }
}

class LinkedList {
    constructor(arr) {
        arr.reduce((node, value) => {
            const currentNode = new ListNode(value);

            if (!node) {
                this.head = currentNode;
            } else {
                node.setNext(currentNode);
            }

            return currentNode;
        }, null);
    }

    toString() {
        const listPresentation = [];
    
        for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
            listPresentation.push(currentNode.value);
        }

        return listPresentation.toString();
    }

    revert(){
        let currNode = this.head;
        let prevNode = null;
        while(currNode.next){
            let nextNode = currNode.next; 
            currNode.next = prevNode; 
            prevNode = currNode;
            currNode = nextNode;
        }
        currNode.next = prevNode;
        this.head = currNode;
    }
   
}

let list = new LinkedList([1, 2, 3, 4]);
list.revert();
// console.log(list.toString());