const { Link } = require("@material-ui/core");

class LinkedList {
constructor(){
    this.head = null
    this.length = 0;
}

//create head node.
insertAtHead(data) {

//Create new element, refrence the old element.
const newNode = new LinkedListNode(data, this.head)
this.head = newNode;
this.length++;

}

getByIndex(index){

    //case for index is less than 0 or greater then length list. 
    if(index < 0 || index >= this.length){
        return null
    }

   let current = this.head;

   for(let i = 0; i < index; i++ ){
      current = current.next;
   }

   return current;
}



insertAtIndex(index, value){


if(index === 0) return this.insertAtHead(value)

const prev = this.getByIndex(index - 1);
if(prev === null) return null;

prev.next = new LinkedListNode(value, prev.next)
this.length++

}


print(){
    let output = ''
    let current = this.head;

    while(current){
        output = `${output}${current.value} ->`
        current = current.next
    }

    console.log(`${output}null`)
// [10,20]
}

}

class LinkedListNode {

    constructor(value, next){
        this.value = value;
        this.next = next;
    }

}


//helper function
LinkedList.fromValues = function(...values){
    const ll = new LinkedList();
    for(let i = values.length - 1; i >=0; i--){
        ll.insertAtHead(values[i])
    }

    return ll;
}

module.exports = LinkedList