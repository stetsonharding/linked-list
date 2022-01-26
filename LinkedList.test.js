const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
    test('it adds the element to the beginning of the list', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10,12,15);
            expect(ll.getByIndex(-1)).toBeNull();
        })
    })


    describe('with index greater than length of list', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10,12,15);
            expect(ll.getByIndex(4)).toBeNull();
        })
    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const ll = LinkedList.fromValues(10,12,15);
            expect(ll.getByIndex(0).value).toBe(10)
        })
    })

    describe('with index in middle of list', () => {
        test('it returns the middle index', () => {
            const ll = LinkedList.fromValues(10,12,15,16);
            const listLength = ll.length / 2
            expect(ll.getByIndex(listLength).value).toBe(15)
        })
    })

})
