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

    //cas for index is less than 0 or greater then length list. 
    if(index < 0 || index >= this.length){
        return null
    }

   let current = this.head;

   for(let i = 0; i < index; i++ ){
      current = current.next;
   }

   return current;
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