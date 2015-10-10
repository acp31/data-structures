var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){

    if (Object.keys(storage).length === 0) {
      storage[1] = value;
    }
    else {
      var count = 0;
      for (var key in storage) {
        count++;
      }
      storage[count+1] = value;
    }
    
  };

  someInstance.dequeue = function(){
    if(Object.keys(storage).length === 0) {
      return "the line is empty";
    }

    else {
      var temp = storage[1];
      delete storage[1];
      var count = 1;
      for(var key in storage){
        storage[count] = storage[key];
        count++;
      }
      delete storage[count];   
    }

    return temp;
  };

  someInstance.size = function(){
    var count = 0;
      for (var key in storage) {
        count++;
      }
      return count;
  };
  return someInstance;
};
