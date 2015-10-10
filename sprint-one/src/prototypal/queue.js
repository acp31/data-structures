var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  if(Object.keys(this.storage).length === 0 ){
    this.storage[1] = value;
  }else {
    var count = 0;
    for (var key in this.storage) {
      count++;
    }
    this.storage[count+1] = value;
  }
};

queueMethods.dequeue = function(){
  if(Object.keys(this.storage).length === 0 ){
    return "this line is empty";
  }

  var temp = this.storage[1];
  delete this.storage[1];
  var count = 1;
  for (var key in this.storage) {
    this.storage[count] = this.storage[key]
    count++;
  }
  delete this.storage[count];

  return temp;
};

queueMethods.size = function(){
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
};

