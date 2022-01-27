const LinkedList = require('./LinkedList')

const ll = new LinkedList.fromValues(10,20,30,40,50)


ll.print();
console.log(ll.getByIndex(0).value)