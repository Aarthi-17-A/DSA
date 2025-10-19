class DoublyLinkedList {
    printList(){
     let temp = this.head;
     let result ="";
     while (temp) {
        result +=temp.data + " <-> ";
        temp = temp.next;
     }   
     console.log(result + "NULL");
    }
}

let dll = new DoublyLinkedList()
dll.insertAtEnd(10)
dll.insertAtEnd(20)
dll.insertAtEnd(30)
dll.insertAtEnd(40)

deleteHead() {
    if(!this.head) return
    let current = this.head
    if(this.head === this.tail){
    this.head = this.tail = null;
    }else{
      current.next.pev = null;
      this.head = current.next;
      current.next = null;
    }
    
}


deleteTail() {
    if(!this.tail) return;

    let temp = this.tail;
    if(this.head === this.tail){
        this.head = this.tail = null;
    }else{
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
    }
}

deleteAtPosition(pos) {
 if(ps <= 0 || !this.head) return;

 let current = this.head;
 let count = 1;

 while (current && count < pos){
    current = current.next;
    count++
 }

 if (!current) return;

 if (current === this.head){
    this.deleteHead();
 }else if (current === this.tail){
    this.deleteTail();
 } else{
    let temp = current.prev;
    temp.next =current.next;
    current.next.prev = temp;

    //break current's links
    current.next = null;
    current.prev = null;
 }
}


//circular linked list

// case1:delete head Node
// case2:delete tail Node
// case3:delete any Node

delete(data){
    let temp = this.tail;
    let current =temp.next;


if(this.head == this.tail && this.head.data == data){
    this.head = null;
    this.tail = null;
}
do{

}while(current !==this.head)
    

}