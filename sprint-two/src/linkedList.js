var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    }
    else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
  };
  //LinkedList.addToTail(4);

  list.removeHead = function(){
    var temp = list.head;

    list.head = list.head.next;

    return temp.value;
  };

  list.contains = function(target){
    var temp = this.head;
    if (temp === null){
      return false;
    }
    
    while(temp !== null) {
      if(temp.value === target){
        return true;
      }
      temp = temp.next;
    }
    return false;
  }; 
  return list;
}; 


var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
